import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: resolve('src/renderer'),
  plugins: [vue()],
  resolve: {
    alias: {
      '@renderer': resolve('src/renderer'),
      '@features': resolve('src/features'),
      '@shared': resolve('src/shared')
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
})
