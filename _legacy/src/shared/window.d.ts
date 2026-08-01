import type { SaveScopeApi } from './contracts'

declare global {
  interface Window {
    saveScope: SaveScopeApi
  }
}

export {}
