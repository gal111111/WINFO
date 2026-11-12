import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { canonicalUrl, pageMetadata } from '../src/content/pageMetadata.js';

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

export function routeDocument(template, path, [title, description]) {
  const url = canonicalUrl(path);
  return template
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${escapeHtml(description)}${after}`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${url}${after}`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${escapeHtml(title)}${after}`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${escapeHtml(description)}${after}`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${url}${after}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${escapeHtml(title)}${after}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${escapeHtml(description)}${after}`);
}

export function writeRoutePages(directory) {
  const template = readFileSync(join(directory, 'index.html'), 'utf8');
  for (const [path, metadata] of Object.entries(pageMetadata)) {
    const target = path === '/' ? join(directory, 'index.html') : join(directory, path.slice(1), 'index.html');
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, routeDocument(template, path, metadata));
  }
  const notFound = routeDocument(template, '/404', ['Page not found | WINFO', 'Find WINFO services or return to the homepage.'])
    .replace('</head>', '<meta name="robots" content="noindex" />\n</head>');
  writeFileSync(join(directory, '404.html'), notFound);
}
