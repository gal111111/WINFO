import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pageMetadata, canonicalUrl } from '../src/content/pageMetadata.js';
import { routeDocument, writeRoutePages } from '../scripts/route-pages.mjs';

test('build emits entry documents for all published routes', () => {
  const directory = mkdtempSync(join(tmpdir(), 'winfo-routes-'));
  try {
    writeFileSync(join(directory, 'index.html'), readFileSync(new URL('../index.html', import.meta.url), 'utf8'));
    writeRoutePages(directory);
    for (const [path, [title, description]] of Object.entries(pageMetadata)) {
      const output = path === '/' ? 'index.html' : `${path.slice(1)}/index.html`;
      const html = readFileSync(join(directory, output), 'utf8');
      assert.ok(html.includes(`<title>${title}</title>`), path);
      assert.ok(html.includes(`content="${description}"`), path);
      assert.ok(html.includes(`href="${canonicalUrl(path)}"`), path);
      assert.ok(html.includes('src="/src/main.jsx"'), path);
    }
    assert.match(readFileSync(join(directory, '404.html'), 'utf8'), /name="robots" content="noindex"/);
  } finally { rmSync(directory, { recursive: true }); }
});

test('metadata is escaped and canonical paths use the deployed directory URL', () => {
  assert.equal(canonicalUrl('/contact'), 'https://winfo.hk/contact/');
  assert.equal(canonicalUrl('/contact/'), 'https://winfo.hk/contact/');
  const html = routeDocument('<title></title><meta name="description" content="" />', '/contact', ['A & B', '"Quote"']);
  assert.ok(html.includes('A &amp; B'));
  assert.ok(html.includes('&quot;Quote&quot;'));
});
