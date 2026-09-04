import { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Icon({ name, size = 18 }) {
  const paths = {
    grid: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="3" y="15" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    pen: <><path d="m4 16.5-.8 4.3 4.3-.8L19.6 8a2.2 2.2 0 0 0-3.1-3.1L4 16.5Z" /><path d="m14.8 6.2 3 3" /></>,
    folder: <><path d="M3 7.2A2.2 2.2 0 0 1 5.2 5h4l2 2h7.6A2.2 2.2 0 0 1 21 9.2v8.6a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 17.8V7.2Z" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1.1 1.6v.2h-2.5V20a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 6.4 14h-.2v-2.5h.2a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 12.5 5v-.2H15V5a1.7 1.7 0 0 0 1.1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1.1h.2v2.5h-.2a1.7 1.7 0 0 0-1.7 1.3Z" /></>,
    arrow: <><path d="M4 12h15" /><path d="m14 6 6 6-6 6" /></>,
    copy: <><rect x="8" y="8" width="11" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5M4 20h16" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" /></>,
  };
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Sidebar({ active, setActive }) {
  const items = [['overview', '工作台', 'grid'], ['research', '同行研究', 'search'], ['drafts', '改写草稿', 'pen'], ['library', '素材库', 'folder']];
  const goTo = (id) => { setActive(id); document.getElementById(id === 'research' ? 'search-panel' : id === 'drafts' ? 'draft-panel' : id === 'library' ? 'results-panel' : 'top')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return <aside className="sidebar">
    <div className="brand-lockup"><div className="brand-mark">W</div><div><strong>WINFO</strong><span>CONTENT LAB</span></div></div>
    <div className="workspace-switch"><div className="workspace-avatar">C</div><div><small>当前工作区</small><strong>企业内容组</strong></div><span className="switch-chevron">⌄</span></div>
    <div className="side-label">内容工作流</div>
    <nav className="side-nav" aria-label="内容工作流">
      {items.map(([id, label, icon]) => <button type="button" key={id} className={`side-nav-item ${active === id ? 'is-active' : ''}`} onClick={() => goTo(id)}><Icon name={icon} /><span>{label}</span>{id === 'drafts' && <b>实时</b>}</button>)}
    </nav>
    <div className="side-bottom"><button type="button" className="side-nav-item" onClick={() => setActive('settings')}><Icon name="settings" /><span>设置</span></button><div className="account"><div className="account-avatar">KL</div><div><strong>Karen Leung</strong><span>内容策略</span></div><Icon name="more" size={16} /></div></div>
  </aside>;
}

function TopBar({ onExport, connected }) {
  return <header className="topbar"><div className="breadcrumbs"><span>CONTENT LAB</span><i>/</i><strong>实时爆款研究</strong></div><div className="top-actions"><span className={`live-dot ${connected ? 'is-connected' : ''}`}><i />{connected ? '搜索服务在线' : '等待搜索'}</span><button type="button" className="icon-button" aria-label="匯出工作區" title="匯出工作區" onClick={onExport}><Icon name="download" size={17} /></button><button type="button" className="profile-button">KL <span>⌄</span></button></div></header>;
}

function EmptyState({ loading }) {
  return <div className="empty-state"><div className="empty-icon"><Icon name={loading ? 'search' : 'grid'} size={24} /></div><strong>{loading ? '正在联网搜索同行内容…' : '输入问题后开始研究'}</strong><p>{loading ? '正在抓取公开网页结果，请稍候。' : '搜索结果会显示在这里，选中一篇后即可交给 DeepSeek 分析。'}</p></div>;
}

function SourceCard({ source, selected, onClick }) {
  return <button type="button" className={`source-card ${selected ? 'is-selected' : ''}`} onClick={onClick}><div className="source-card-top"><span className="source-tag">{source.domain}</span><span className="source-rank">排名 {String(source.rank).padStart(2, '0')}</span></div><strong>{source.title}</strong><p>{source.snippet || '暂无摘要，打开原文查看详情。'}</p><div className="source-card-footer"><span className="format-dot" />公开网页<Icon name="arrow" size={15} /></div></button>;
}

function StructurePanel({ analysis, loading }) {
  if (loading) return <section className="panel structure-panel"><EmptyState loading /></section>;
  if (!analysis) return <section className="panel structure-panel"><div className="panel-heading"><div><span className="section-kicker">STEP 03 · AI 分析</span><h2>等待拆解内容</h2></div></div><EmptyState /></section>;
  return <section className="panel structure-panel"><div className="panel-heading"><div><span className="section-kicker">STEP 03 · AI 分析</span><h2>它为什么会中？</h2></div><span className="ai-badge">DeepSeek</span></div><div className="structure-note"><span className="note-bar" /><p>{analysis.summary}</p></div><div className="structure-map">{analysis.structure.map((item, index) => <div className="map-row" key={`${item.title}-${index}`}><span className="map-index">{String(index + 1).padStart(2, '0')}</span><div><strong>{item.title}</strong><small>{item.detail}</small></div><span className={`map-score ${item.score === '中' ? 'medium' : ''}`}>{item.score || '高'}</span></div>)}</div><div className="signal-row"><span>读者讯号</span><div className="signal-bars"><i /><i /><i /><i /><i /></div><strong>{analysis.signal || '需进一步验证'}</strong></div></section>;
}

function DraftPanel({ draft, setDraft, loading, onGenerate, onCopy, onSave, disabled }) {
  return <section className="panel draft-panel" id="draft-panel"><div className="panel-heading"><div><span className="section-kicker">STEP 04 · 原创改写</span><h2>你的下一篇</h2></div><span className={`draft-status ${draft ? 'is-ready' : ''}`}><i />{draft ? '可编辑' : '等待生成'}</span></div><div className="draft-controls"><span className="tone-select">繁体中文 · 专业清晰</span><span className="draft-count">{draft.length.toLocaleString()} 字</span></div><textarea aria-label="改写草稿" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="分析完成后，点击「生成改写」，内容会出现在这里。" />{draft && <div className="originality-check"><span><Icon name="check" size={15} />AI 草稿已生成</span><small>请人工复核事实与语气</small></div>}<div className="draft-actions"><button type="button" className="button primary-button" onClick={onGenerate} disabled={disabled || loading}><Icon name="pen" size={16} />{loading ? 'DeepSeek 生成中…' : '生成改写'}<Icon name="arrow" size={16} /></button><button type="button" className="button secondary-button" onClick={onSave} disabled={!draft}>保存草稿</button><button type="button" className="square-button" aria-label="复制草稿" title="复制草稿" onClick={onCopy} disabled={!draft}><Icon name="copy" size={17} /></button></div></section>;
}

function App() {
  const [active, setActive] = useState('overview');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [analysis, setAnalysis] = useState(null);
  const [draft, setDraft] = useState('');
  const [searching, setSearching] = useState(false);
  const [working, setWorking] = useState(false);
  const [toast, setToast] = useState('');
  const source = useMemo(() => results[selectedIndex] || null, [results, selectedIndex]);

  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2600); };
  const search = async () => {
    const value = query.trim();
    if (!value) return notify('请先输入一个客户问题');
    setSearching(true); setAnalysis(null); setDraft('');
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(value)}`);
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || '搜索失败');
      setResults(payload.results || []); setSelectedIndex(0); setActive('research');
      notify(`已找到 ${payload.results?.length || 0} 条公开网页结果`);
    } catch (error) { notify(error.message || '搜索失败，请检查网络或服务端配置'); setResults([]); }
    finally { setSearching(false); }
  };
  const analyze = async (item = source) => {
    if (!item) return notify('请先搜索并选择一篇内容');
    setWorking(true); setAnalysis(null);
    try {
      const response = await fetch('/api/deepseek', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: 'analyze', query, source: item }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'DeepSeek 分析失败');
      setAnalysis(payload.result); notify('DeepSeek 已完成结构分析');
    } catch (error) { notify(error.message || 'AI 分析失败'); }
    finally { setWorking(false); }
  };
  const generate = async () => {
    if (!source) return notify('请先搜索并选择一篇内容');
    setWorking(true);
    try {
      const response = await fetch('/api/deepseek', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: 'draft', query, source, analysis }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'DeepSeek 生成失败');
      setDraft(payload.result || ''); notify('DeepSeek 已生成原创改写草稿');
    } catch (error) { notify(error.message || 'AI 生成失败'); }
    finally { setWorking(false); }
  };
  const selectSource = (index) => { setSelectedIndex(index); setAnalysis(null); setDraft(''); setActive('research'); };
  const copyDraft = async () => { try { await navigator.clipboard.writeText(draft); notify('草稿已复制到剪贴板'); } catch { notify('浏览器未授权剪贴板，请手动复制'); } };
  const exportWorkspace = () => { const blob = new Blob([JSON.stringify({ query, source, analysis, draft }, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'winfo-content-lab.json'; anchor.click(); URL.revokeObjectURL(url); notify('工作区已导出'); };

  return <div className="app-shell"><Sidebar active={active} setActive={setActive} /><div className="app-main"><TopBar onExport={exportWorkspace} connected={results.length > 0} /><main className="workspace" id="top"><section className="hero-intro"><div><div className="eyebrow-line"><span className="red-flag">⚑</span><span>内容与搜索转化</span><span className="eyebrow-rule" /></div><h1>把同行爆款，变成<br /><em>你的下一篇。</em></h1><p>输入真实客户问题，联网找到公开内容，再用 DeepSeek 拆解结构并生成你的原创版本。</p></div><div className="hero-side"><div className="mini-graph"><span>实时研究状态</span><strong>{searching ? '搜索中' : working ? 'AI 处理中' : results.length ? '已连接' : '待开始'}</strong><div className={`status-track ${results.length ? 'is-connected' : ''}`}><i /><i /><i /><i /><i /></div></div><span className="hero-side-note">公开网页 + DeepSeek</span></div></section>
      <section className="search-section" id="search-panel"><div className="section-title-row"><div><span className="section-kicker">STEP 01 · 联网搜索</span><h2>输入一个客户问题</h2></div><span className="step-progress"><b className={query ? 'is-done' : ''}>1</b><i /><b className={results.length ? 'is-done' : ''}>2</b><i /><b className={analysis ? 'is-done' : ''}>3</b></span></div><div className="search-box"><Icon name="search" size={20} /><input aria-label="搜索客户问题" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && search()} placeholder="例如：香港公司成立后，第一年要处理甚么？" /><button type="button" className="button analyze-button" onClick={search} disabled={searching}>{searching ? '搜索中…' : '联网搜索'} <Icon name="arrow" size={16} /></button></div><div className="quick-prompts"><span>试试这些问题</span><button type="button" onClick={() => setQuery('BUD 基金申请前，先确认这 5 件事')}>BUD 基金申请前要准备甚么？</button><button type="button" onClick={() => setQuery('银行开户被拒，新公司最常漏掉哪些资料？')}>银行开户被拒怎么办？</button><button type="button" onClick={() => setQuery('香港公司每月财务资料应该如何整理？')}>每月财务资料怎么整理？</button></div></section>
      <section className="metrics-row"><div className="metric"><span>本次搜索结果</span><strong>{results.length || '—'}</strong><small>{results.length ? '来自公开网页' : '等待搜索'}</small></div><div className="metric"><span>当前选中素材</span><strong>{source ? `#${source.rank}` : '—'}</strong><small>{source ? source.domain : '尚未选择'}</small></div><div className="metric"><span>AI 分析状态</span><strong>{analysis ? '完成' : '—'}</strong><small>{analysis ? '可生成草稿' : '选择内容后开始'}</small></div><div className="metric-tip"><span className="tip-icon">✦</span><div><strong>研究小提示</strong><p>只借鉴选题与结构，事实和观点要用你自己的。</p></div></div></section>
      <div className="content-grid"><section className="sources-section" id="results-panel"><div className="section-title-row compact"><div><span className="section-kicker">STEP 02 · 选素材</span><h2>联网搜索结果</h2></div><span className="result-caption">{results.length ? `${results.length} 条结果` : '尚未搜索'}</span></div>{searching ? <EmptyState loading /> : results.length ? <><div className="source-list">{results.map((item, index) => <SourceCard key={`${item.url}-${index}`} source={item} selected={selectedIndex === index} onClick={() => selectSource(index)} />)}</div><div className="source-detail"><div className="detail-heading"><div><span className="source-tag">{source.domain}</span><h3>{source.title}</h3><p>{source.url}</p></div><a className="icon-button" href={source.url} target="_blank" rel="noreferrer" aria-label="打开原文" title="打开原文"><Icon name="external" size={17} /></a></div><div className="detail-metrics"><span><b>#{source.rank}</b> 搜索排名</span><span><b>{source.domain}</b> 来源网站</span><span><b>公开</b> 内容状态</span></div><div className="content-preview"><div className="content-preview-header"><span>网页摘要</span><span>联网抓取</span></div><div className="article-preview"><h4>{source.title}</h4><p>{source.snippet || '该网页未提供摘要，请打开原文查看。'}</p><button type="button" className="button inline-button" onClick={() => analyze()}>分析这篇内容 <Icon name="arrow" size={15} /></button></div></div></div></> : <EmptyState />}</section><div className="analysis-column"><StructurePanel analysis={analysis} loading={working && !analysis} /><DraftPanel draft={draft} setDraft={setDraft} loading={working && Boolean(analysis)} onGenerate={generate} onCopy={copyDraft} onSave={() => notify('草稿已保存到当前工作区')} disabled={!source || !analysis} /></div></div>
      <footer className="workspace-footer"><span><i />搜索和生成均通过本地服务端代理</span><span>WINFO CONTENT LAB <b>v0.2 · LIVE</b></span></footer></main></div>{toast && <div className="toast"><Icon name="check" size={16} />{toast}</div>}</div>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
