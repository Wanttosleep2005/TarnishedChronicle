import { writeFile } from 'node:fs/promises';
import { BrowserWindow, dialog, ipcMain, shell } from 'electron';
import type {
  AppSettings,
  ExportPngResult,
  HistorySnapshot,
  LlmRequest,
  StoryEntry,
  SteamAchievementsRequest,
} from '../shared/contracts';
import { createBackup, listBackups, openBackupsFolder } from './backup';
import { appendHistory, getHistory } from './history';
import { deleteStory, listStories, saveStory } from './story-archive';
import { detectSts2, listSts2Runs, readSts2Progress, readSts2Run, unwatchSts2, watchSts2 } from './sts2';
import { getSts2Art } from './sts2-art';
import { llmGenerate, llmListModels } from './llm';
import { detectSaves, readSave, unwatchSave, watchSave } from './saves';
import { getSettings, setSettings } from './settings';
import { detectDs3, parseDs3 } from './ds3';
import { loadDs3SteamAchievements, loadSteamAchievements, loadSts2SteamAchievements } from './steam';
import { checkForUpdates, getUpdateStatus, installUpdate } from './updater';

export function registerIpc(): void {
  ipcMain.handle('settings:get', () => getSettings());
  ipcMain.handle('settings:set', (_event, partial: Partial<AppSettings>) => setSettings(partial));

  ipcMain.handle('saves:detect', () => detectSaves());

  ipcMain.handle('saves:pick', async (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    const result = await dialog.showOpenDialog(win ?? BrowserWindow.getAllWindows()[0], {
      title: '选择艾尔登法环存档',
      filters: [
        { name: 'Elden Ring 存档', extensions: ['sl2', 'co2'] },
        { name: '所有文件', extensions: ['*'] },
      ],
      properties: ['openFile'],
    });
    if (result.canceled || result.filePaths.length === 0) return null;
    return result.filePaths[0];
  });

  ipcMain.handle('saves:read', (_event, path: string) => readSave(path));

  ipcMain.handle('saves:watch', (event, path: string) => {
    const contents = event.sender;
    watchSave(path, (changedPath, mtimeMs) => {
      if (!contents.isDestroyed()) {
        contents.send('saves:changed', { path: changedPath, mtimeMs });
      }
    });
  });

  ipcMain.handle('saves:unwatch', () => unwatchSave());

  ipcMain.handle('llm:generate', (event, request: LlmRequest) => {
    const onChunk =
      request.stream && request.requestId
        ? (text: string) => {
            if (!event.sender.isDestroyed()) {
              event.sender.send('llm:chunk', { requestId: request.requestId, text });
            }
          }
        : undefined;
    return llmGenerate(getSettings().llm, request, onChunk);
  });

  ipcMain.handle('llm:models', () => llmListModels(getSettings().llm));

  ipcMain.handle('steam:achievements', (_event, request: SteamAchievementsRequest = {}) =>
    loadSteamAchievements(getSettings().steam, request.forceRefresh === true),
  );

  ipcMain.handle('shell:open-external', (_event, url: string) => {
    if (/^https?:\/\//i.test(url)) return shell.openExternal(url);
    return Promise.resolve();
  });

  ipcMain.handle('sts2:detect', () => detectSts2());
  ipcMain.handle('sts2:progress', (_event, savesPath: string) => readSts2Progress(savesPath));
  ipcMain.handle('sts2:runs', (_event, savesPath: string) => listSts2Runs(savesPath));
  ipcMain.handle('sts2:run', (_event, path: string) => readSts2Run(path));
  ipcMain.handle('sts2:art', (_event, kind: string, bareId: string) => getSts2Art(kind, bareId));
  ipcMain.handle('sts2:steam-achievements', (_event, request: SteamAchievementsRequest = {}) =>
    loadSts2SteamAchievements(getSettings().steam, request.forceRefresh === true),
  );
  ipcMain.handle('sts2:watch', (event, savesPath: string) => {
    const contents = event.sender;
    watchSts2(savesPath, () => {
      if (!contents.isDestroyed()) contents.send('sts2:changed');
    });
  });
  ipcMain.handle('sts2:unwatch', () => unwatchSts2());

  ipcMain.handle('ds3:detect', () => detectDs3());
  ipcMain.handle('ds3:load', (_event, sl2Path: string) => parseDs3(sl2Path));
  ipcMain.handle('ds3:steam-achievements', (_event, request: SteamAchievementsRequest = {}) =>
    loadDs3SteamAchievements(getSettings().steam, request.forceRefresh === true),
  );

  ipcMain.handle('story:list', (_event, path: string) => listStories(path));
  ipcMain.handle('story:save', (_event, path: string, entry: StoryEntry) => saveStory(path, entry));
  ipcMain.handle('story:delete', (_event, path: string, t: number) => deleteStory(path, t));

  /* Legacy arbitrary-repository update handler retained only as migration context.
   * Fixed-source updates are registered immediately after this inactive block. */
  /* ipcMain.handle('update:check', async (): Promise<UpdateCheckResult> => {
    const repo = getSettings().updateRepo.trim();
    const current = app.getVersion();
    if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) {
      return { ok: false, message: '未配置有效的 GitHub 仓库(格式:owner/repo)。' };
    }
    try {
      const response = await net.fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
        headers: { accept: 'application/vnd.github+json', 'user-agent': 'tarnished-chronicle' },
      });
      if (!response.ok) {
        return { ok: false, message: `GitHub API ${response.status}(仓库不存在或尚无 Release)。` };
      }
      const payload = (await response.json()) as { tag_name?: string; html_url?: string };
      const latest = (payload.tag_name ?? '').replace(/^v/i, '');
      if (!latest) return { ok: false, message: 'Release 缺少版本号标签。' };
      const parse = (v: string) => v.split('.').map((n) => Number.parseInt(n, 10) || 0);
      const [a, b] = [parse(latest), parse(current)];
      let hasUpdate = false;
      for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if ((a[i] ?? 0) > (b[i] ?? 0)) {
          hasUpdate = true;
          break;
        }
        if ((a[i] ?? 0) < (b[i] ?? 0)) break;
      }
      return {
        ok: true,
        current,
        latest,
        hasUpdate,
        url: payload.html_url ?? `https://github.com/${repo}/releases`,
      };
    } catch {
      return { ok: false, message: '无法连接 GitHub,请检查网络。' };
    }
  }); */

  ipcMain.handle('update:get-status', () => getUpdateStatus());
  ipcMain.handle('update:check', () => checkForUpdates());
  ipcMain.handle('update:install', () => installUpdate());

  ipcMain.handle('backup:create', (_event, path: string) => createBackup(path));
  ipcMain.handle('backup:list', () => listBackups());
  ipcMain.handle('backup:open-folder', () => openBackupsFolder());

  ipcMain.handle('history:get', (_event, path: string) => getHistory(path));
  ipcMain.handle('history:append', (_event, path: string, snapshot: HistorySnapshot) =>
    appendHistory(path, snapshot),
  );

  ipcMain.handle(
    'export:text',
    async (event, defaultName: string, content: string): Promise<ExportPngResult> => {
      const win = BrowserWindow.fromWebContents(event.sender);
      const result = await dialog.showSaveDialog(win ?? BrowserWindow.getAllWindows()[0], {
        title: '导出文本',
        defaultPath: defaultName.replace(/[\\/:*?"<>|]/g, '_'),
        filters: [
          { name: 'Markdown', extensions: ['md'] },
          { name: '纯文本', extensions: ['txt'] },
        ],
      });
      if (result.canceled || !result.filePath) return { ok: false, message: '已取消' };
      try {
        await writeFile(result.filePath, content, 'utf-8');
        return { ok: true, path: result.filePath };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { ok: false, message: `写入失败:${message}` };
      }
    },
  );

  ipcMain.handle(
    'export:png',
    async (event, defaultName: string, dataUrl: string): Promise<ExportPngResult> => {
      const win = BrowserWindow.fromWebContents(event.sender);
      const result = await dialog.showSaveDialog(win ?? BrowserWindow.getAllWindows()[0], {
        title: '导出战绩卡',
        defaultPath: defaultName.replace(/[\\/:*?"<>|]/g, '_'),
        filters: [{ name: 'PNG 图片', extensions: ['png'] }],
      });
      if (result.canceled || !result.filePath) return { ok: false, message: '已取消' };
      const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
      try {
        await writeFile(result.filePath, Buffer.from(base64, 'base64'));
        return { ok: true, path: result.filePath };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { ok: false, message: `写入失败:${message}` };
      }
    },
  );
}
