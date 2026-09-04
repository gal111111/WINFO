import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';

function readBody(req) {
  return new Promise((resolveBody, reject) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => resolveBody(data ? JSON.parse(data) : {}));
    req.on('error', reject);
  });
}

function stripHtml(value = '') {
  return value.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}

function parseSearchResults(html) {
  const results = [];
  const pattern = /<a[^>]+class="[^"]*result__a[^"]*"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<a[^>]+class="[^"]*result__snippet[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
  let match;
  while ((match = pattern.exec(html)) && results.length < 8) {
    let url = match[1].replace(/&amp;/g, '&');
    try { url = new URL(url, 'https://duckduckgo.com').searchParams.get('uddg') || url; } catch { /* keep original */ }
    let domain = '';
    try { domain = new URL(url).hostname.replace(/^www\./, ''); } catch { domain = '公开网页'; }
    results.push({ rank: results.length + 1, title: stripHtml(match[2]), snippet: stripHtml(match[3]), url, domain });
  }
  return results;
}

function withTimeout(ms) {
  return AbortSignal.timeout(ms);
}

function deepseekResult(text, mode) {
  if (mode === 'draft') return text.trim();
  const cleaned = text.replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
  try { return JSON.parse(cleaned); } catch { return { summary: cleaned, structure: [], signal: '需人工判断' }; }
}

function contentApi() {
  let env = {};
  return {
    name: 'winfo-content-api',
    enforce: 'pre',
    configResolved(config) { env = loadEnv(config.mode, config.root, ''); },
    configureServer(server) {
      server.middlewares.use('/api/search', async (req, res) => {
        try {
          const query = new URL(req.url, 'http://localhost').searchParams.get('q')?.trim();
          if (!query) throw new Error('请输入搜索词');
          const target = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
          const response = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0 WINFO Content Lab' }, signal: withTimeout(15000) });
          if (!response.ok) throw new Error(`搜索服务返回 ${response.status}`);
          const results = parseSearchResults(await response.text());
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ results }));
        } catch (error) { res.statusCode = 502; res.setHeader('Content-Type', 'application/json; charset=utf-8'); res.end(JSON.stringify({ error: error.message || '搜索服务暂时不可用' })); }
      });
      server.middlewares.use('/api/deepseek', async (req, res) => {
        try {
          if (req.method !== 'POST') throw new Error('只支持 POST');
          const body = await readBody(req);
          const key = env.DEEPSEEK_API_KEY;
          if (!key) throw new Error('未配置 DEEPSEEK_API_KEY，请在 .env.local 中设置');
          const isDraft = body.mode === 'draft';
          const source = body.source || {};
          const system = isDraft
            ? '你是香港企业服务公司的内容策略师。请基于用户问题、公开网页摘要和结构分析，写一篇繁体中文原创内容。只借鉴选题与结构，绝不复用原文句子或段落；不虚构法律、政策、金额和日期。输出可直接编辑的正文，不要解释过程。'
            : '你是内容策略分析师。请分析公开网页内容为什么可能获得搜索点击。只分析选题、结构、读者意图和转化逻辑，不评价无法从摘要得出的真实流量。必须只输出 JSON，不要 Markdown 代码围栏。';
          const user = isDraft
            ? `用户问题：${body.query}\n\n公开网页标题：${source.title}\n来源：${source.url}\n摘要：${source.snippet}\n\n结构分析：${JSON.stringify(body.analysis || {})}\n\n请输出：标题、开场、3-5 个小标题和结尾行动引导。`
            : `用户搜索问题：${body.query}\n\n公开网页标题：${source.title}\n来源：${source.url}\n摘要：${source.snippet}\n\nJSON 格式：{"summary":"一句话说明结构优势","structure":[{"title":"结构动作","detail":"具体说明","score":"高"}],"signal":"读者意图"}`;
          const response = await fetch('https://api.deepseek.com/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, signal: withTimeout(90000), body: JSON.stringify({ model: 'deepseek-chat', temperature: isDraft ? 0.75 : 0.2, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }) });
          const payload = await response.json();
          if (!response.ok) throw new Error(payload.error?.message || `DeepSeek 返回 ${response.status}`);
          const result = deepseekResult(payload.choices?.[0]?.message?.content || '', body.mode);
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ result }));
        } catch (error) { res.statusCode = 502; res.setHeader('Content-Type', 'application/json; charset=utf-8'); res.end(JSON.stringify({ error: error.message || 'DeepSeek 服务暂时不可用' })); }
      });
    },
  };
}

function githubPagesFallback() {
  return {
    name: 'github-pages-fallback',
    closeBundle() {
      const indexPath = resolve('dist/index.html');
      const fallbackPath = resolve('dist/404.html');
      copyFileSync(indexPath, fallbackPath);
    },
  };
}

export default defineConfig({
  plugins: [contentApi(), react(), githubPagesFallback()],
});
