import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { app, BrowserWindow } from 'electron';
import { registerIpc } from './ipc';
import { unwatchSave } from './saves';
import { initializeAutoUpdater } from './updater';

// Chromium 的 Cookie/缓存与应用设置拆分，避免旧 Cache 迁移失败影响启动。
app.setPath('sessionData', join(app.getPath('userData'), 'session-data'));

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
  const width = Number(process.env.CHRONICLE_WIDTH) || 1520;
  const height = Number(process.env.CHRONICLE_HEIGHT) || 950;
  const win = new BrowserWindow({
    width,
    height,
    minWidth: 1180,
    minHeight: 720,
    show: false,
    title: '褪色者编年史',
    backgroundColor: '#12100c',
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(import.meta.dirname, '../preload/index.mjs'),
      sandbox: false,
    },
  });
  mainWindow = win;
  win.on('closed', () => {
    if (mainWindow === win) mainWindow = null;
  });

  win.on('ready-to-show', () => win.show());

  // 调试:CHRONICLE_SHOT=<png路径> 时自动截图退出(配合 CHRONICLE_PAGE 指定页面)
  const shotPath = process.env.CHRONICLE_SHOT;
  if (shotPath) {
    win.webContents.on('console-message', (_event, _level, message) => {
      console.log('[renderer]', message);
    });
    win.webContents.once('did-finish-load', () => {
      const delay = Number(process.env.CHRONICLE_SHOT_DELAY) || 4000;
      const scroll = Number(process.env.CHRONICLE_SCROLL) || 0;
      setTimeout(() => {
        void (async () => {
          if (process.env.CHRONICLE_JS) {
            await win.webContents.executeJavaScript(process.env.CHRONICLE_JS).catch((e) => {
              console.error('CHRONICLE_JS 执行失败:', e);
            });
            await new Promise((resolve) => setTimeout(resolve, 800));
          }
          if (scroll > 0) {
            await win.webContents.executeJavaScript(
              `document.querySelector('.main')?.scrollTo(0, ${scroll})`,
            );
            await new Promise((resolve) => setTimeout(resolve, 400));
          }
          const info = await win.webContents.executeJavaScript(
            `JSON.stringify({ title: document.querySelector('.page-title')?.textContent, nav: document.querySelector('.nav-item.active')?.textContent, hash: location.hash, scrollTop: document.querySelector('.main')?.scrollTop })`,
          );
          writeFileSync(`${shotPath}.info.json`, String(info));
          const image = await win.webContents.capturePage();
          writeFileSync(shotPath, image.toPNG());
          app.quit();
        })();
      }, delay);
    });
  }

  const hash = process.env.CHRONICLE_PAGE;
  if (process.env.ELECTRON_RENDERER_URL) {
    void win.loadURL(process.env.ELECTRON_RENDERER_URL + (hash ? `#${hash}` : ''));
  } else {
    void win.loadFile(join(import.meta.dirname, '../renderer/index.html'), hash ? { hash } : undefined);
  }
}

function focusMainWindow(): void {
  const win = mainWindow ?? BrowserWindow.getAllWindows()[0];
  if (!win) return;
  if (win.isMinimized()) win.restore();
  win.show();
  win.focus();
}

const isolatedScreenshot = Boolean(process.env.CHRONICLE_SHOT);

if (!isolatedScreenshot && !app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => focusMainWindow());

  app.whenReady().then(() => {
    registerIpc();
    createWindow();
    initializeAutoUpdater((status) => {
      for (const win of BrowserWindow.getAllWindows()) {
        if (!win.webContents.isDestroyed()) win.webContents.send('update:status', status);
      }
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on('window-all-closed', () => {
    unwatchSave();
    app.quit();
  });
}
