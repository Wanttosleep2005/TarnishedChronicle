import { contextBridge, ipcRenderer } from 'electron'
import type { SaveScopeApi } from '../shared/contracts.js'

const api: SaveScopeApi = {
  importEldenRingSave: () => ipcRenderer.invoke('save-scope:import-elden-ring-save'),
  getSteamAchievements: () => ipcRenderer.invoke('save-scope:get-steam-achievements')
}

contextBridge.exposeInMainWorld('saveScope', api)
