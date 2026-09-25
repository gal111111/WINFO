import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

function githubPagesFallback() {
  return {
    name: 'github-pages-fallback',
    closeBundle() {
      copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'));
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesFallback()],
  resolve: {
    alias: {
      // 只需繁→簡轉換，用輕量子集替代包含全部方向的 full 構建（1.1MB → 67KB）
      'opencc-js': resolve(root, 'node_modules/opencc-js/dist/esm/t2cn.js'),
    },
  },
});
