import { defineConfig } from 'vite';

export default defineConfig({
  base: '/su-30/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  }
});
