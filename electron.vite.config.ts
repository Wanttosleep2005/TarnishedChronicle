import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';

// 仅生产构建注入 CSP(开发模式的 HMR 需要内联脚本,不加)
const cspPlugin = () => ({
  name: 'inject-csp',
  apply: 'build' as const,
  transformIndexHtml(html: string) {
    const csp =
      "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; connect-src 'self'; font-src 'self' data:";
    return html.replace('<head>', `<head>\n    <meta http-equiv="Content-Security-Policy" content="${csp}" />`);
  },
});

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/renderer/src'),
      },
    },
    plugins: [react(), cspPlugin()],
    build: {
      chunkSizeWarningLimit: 8192,
    },
  },
});
