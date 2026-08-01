import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@renderer': `${root}src/renderer`,
      '@features': `${root}src/features`,
      '@shared': `${root}src/shared`
    }
  },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts']
  }
})
