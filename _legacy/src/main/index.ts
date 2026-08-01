import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron'
import { Worker } from 'node:worker_threads'
import { readFile } from 'node:fs/promises'
import { config as loadEnvironment } from 'dotenv'
import { is } from '@electron-toolkit/utils'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { ImportFailure, ImportResult, SaveSnapshot } from '../shared/contracts.js'
import { loadSteamAchievements } from './steam.js'

const currentDirectory = fileURLToPath(new URL('.', import.meta.url))

loadEnvironment({ path: join(process.cwd(), '.env') })

function createWindow(): void {
  const window = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 1080,
    minHeight: 720,
    show: false,
    backgroundColor: '#11120f',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: join(currentDirectory, '../preload/index.mjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  })

  window.on('ready-to-show', () => window.show())
  window.webContents.setWindowOpenHandler((details) => {
    void shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    void window.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    void window.loadFile(join(currentDirectory, '../renderer/index.html'))
  }
}

function parseInWorker(buffer: ArrayBuffer): Promise<SaveSnapshot> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('./save-worker.js', import.meta.url))

    worker.once('message', (result: { ok: boolean; save?: SaveSnapshot; message?: string }) => {
      void worker.terminate()
      if (result.ok && result.save) {
        resolve(result.save)
      } else {
        reject(new Error(result.message ?? '解析存档时发生未知错误。'))
      }
    })
    worker.once('error', reject)
    worker.postMessage({ buffer }, [buffer])
  })
}

async function importSave(): Promise<ImportResult> {
  const selected = await dialog.showOpenDialog({
    title: '选择艾尔登法环存档',
    buttonLabel: '只读导入',
    properties: ['openFile'],
    filters: [{ name: 'Elden Ring save', extensions: ['sl2'] }]
  })

  if (selected.canceled || selected.filePaths.length === 0) {
    return { ok: false, code: 'cancelled', message: '未选择存档文件。' }
  }

  const path = selected.filePaths[0]
  if (basename(path).toLowerCase() !== 'er0000.sl2') {
    return { ok: false, code: 'unsupported-save', message: '请选择艾尔登法环的 ER0000.sl2 文件。' }
  }

  try {
    const bytes = await readFile(path)
    const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength)
    return { ok: true, save: await parseInWorker(buffer) }
  } catch (error) {
    const message = error instanceof Error ? error.message : '无法读取该文件。'
    const failure: ImportFailure = {
      ok: false,
      code: /magic|checksum|slot|parse|event|BND4|SL2/i.test(message) ? 'invalid-save' : 'read-failed',
      message: `导入失败：${message}`
    }
    return failure
  }
}

app.whenReady().then(() => {
  ipcMain.handle('save-scope:import-elden-ring-save', importSave)
  ipcMain.handle('save-scope:get-steam-achievements', () =>
    loadSteamAchievements(process.env.STEAM64_ID?.trim(), process.env.STEAM_WEB_API_KEY?.trim())
  )

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
