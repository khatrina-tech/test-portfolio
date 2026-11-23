import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/test-portfolio/' : '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        caseStudy: resolve(import.meta.dirname, 'case-study.html'),
        about: resolve(import.meta.dirname, 'about.html'),
      },
    },
  },
});
