import { contextBridge, ipcRenderer, type IpcRendererEvent } from 'electron';
import type {
  AppSettings,
  BackupInfo,
  BackupResult,
  DetectedSave,
  Ds3ParseResult,
  Ds3Root,
  ExportPngResult,
  HistorySnapshot,
  LlmModelsResult,
  LlmRequest,
  LlmResult,
  ReadSaveResult,
  SaveChangedEvent,
  SteamAchievementsResult,
  SteamAchievementsRequest,
  StoryEntry,
  Sts2ArtResult,
  Sts2FileResult,
  Sts2Root,
  Sts2RunMeta,
  UpdateStatus,
} from '../shared/contracts';

const api = {
  getSettings: (): Promise<AppSettings> => ipcRenderer.invoke('settings:get'),
  setSettings: (partial: Partial<AppSettings>): Promise<AppSettings> =>
    ipcRenderer.invoke('settings:set', partial),

  detectSaves: (): Promise<DetectedSave[]> => ipcRenderer.invoke('saves:detect'),
  pickSaveFile: (): Promise<string | null> => ipcRenderer.invoke('saves:pick'),
  readSave: (path: string): Promise<ReadSaveResult> => ipcRenderer.invoke('saves:read', path),
  watchSave: (path: string): Promise<void> => ipcRenderer.invoke('saves:watch', path),
  unwatchSave: (): Promise<void> => ipcRenderer.invoke('saves:unwatch'),
  onSaveChanged: (callback: (event: SaveChangedEvent) => void): (() => void) => {
    const listener = (_event: IpcRendererEvent, payload: SaveChangedEvent): void => callback(payload);
    ipcRenderer.on('saves:changed', listener);
    return () => ipcRenderer.removeListener('saves:changed', listener);
  },

  llmGenerate: (request: LlmRequest): Promise<LlmResult> =>
    ipcRenderer.invoke('llm:generate', request),

  llmListModels: (): Promise<LlmModelsResult> => ipcRenderer.invoke('llm:models'),

  llmGenerateStream: (request: LlmRequest, onChunk: (text: string) => void): Promise<LlmResult> => {
    const requestId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const listener = (_event: IpcRendererEvent, payload: { requestId: string; text: string }): void => {
      if (payload.requestId === requestId) onChunk(payload.text);
    };
    ipcRenderer.on('llm:chunk', listener);
    return (
      ipcRenderer.invoke('llm:generate', { ...request, stream: true, requestId }) as Promise<LlmResult>
    ).finally(() => {
      ipcRenderer.removeListener('llm:chunk', listener);
    });
  },

  steamAchievements: (request: SteamAchievementsRequest = {}): Promise<SteamAchievementsResult> =>
    ipcRenderer.invoke('steam:achievements', request),

  openExternal: (url: string): Promise<void> => ipcRenderer.invoke('shell:open-external', url),

  getHistory: (path: string): Promise<HistorySnapshot[]> => ipcRenderer.invoke('history:get', path),
  appendHistory: (path: string, snapshot: HistorySnapshot): Promise<HistorySnapshot[]> =>
    ipcRenderer.invoke('history:append', path, snapshot),

  exportPng: (defaultName: string, dataUrl: string): Promise<ExportPngResult> =>
    ipcRenderer.invoke('export:png', defaultName, dataUrl),
  exportText: (defaultName: string, content: string): Promise<ExportPngResult> =>
    ipcRenderer.invoke('export:text', defaultName, content),

  createBackup: (path: string): Promise<BackupResult> => ipcRenderer.invoke('backup:create', path),
  listBackups: (): Promise<BackupInfo[]> => ipcRenderer.invoke('backup:list'),
  openBackupsFolder: (): Promise<void> => ipcRenderer.invoke('backup:open-folder'),

  listStories: (path: string): Promise<StoryEntry[]> => ipcRenderer.invoke('story:list', path),
  saveStory: (path: string, entry: StoryEntry): Promise<StoryEntry[]> =>
    ipcRenderer.invoke('story:save', path, entry),
  deleteStory: (path: string, t: number): Promise<StoryEntry[]> =>
    ipcRenderer.invoke('story:delete', path, t),

  getUpdateStatus: (): Promise<UpdateStatus> => ipcRenderer.invoke('update:get-status'),
  checkUpdate: (): Promise<UpdateStatus> => ipcRenderer.invoke('update:check'),
  installUpdate: (): Promise<UpdateStatus> => ipcRenderer.invoke('update:install'),
  onUpdateStatus: (callback: (status: UpdateStatus) => void): (() => void) => {
    const listener = (_event: IpcRendererEvent, status: UpdateStatus): void => callback(status);
    ipcRenderer.on('update:status', listener);
    return () => ipcRenderer.removeListener('update:status', listener);
  },

  sts2Detect: (): Promise<Sts2Root[]> => ipcRenderer.invoke('sts2:detect'),
  sts2Progress: (savesPath: string): Promise<Sts2FileResult> =>
    ipcRenderer.invoke('sts2:progress', savesPath),
  sts2Runs: (savesPath: string): Promise<Sts2RunMeta[]> => ipcRenderer.invoke('sts2:runs', savesPath),
  sts2Run: (path: string): Promise<Sts2FileResult> => ipcRenderer.invoke('sts2:run', path),
  sts2Art: (kind: string, bareId: string): Promise<Sts2ArtResult> =>
    ipcRenderer.invoke('sts2:art', kind, bareId),
  sts2SteamAchievements: (request: SteamAchievementsRequest = {}): Promise<SteamAchievementsResult> =>
    ipcRenderer.invoke('sts2:steam-achievements', request),
  sts2Watch: (savesPath: string): Promise<void> => ipcRenderer.invoke('sts2:watch', savesPath),
  sts2Unwatch: (): Promise<void> => ipcRenderer.invoke('sts2:unwatch'),
  onSts2Changed: (callback: () => void): (() => void) => {
    const listener = (): void => callback();
    ipcRenderer.on('sts2:changed', listener);
    return () => ipcRenderer.removeListener('sts2:changed', listener);
  },

  ds3Detect: (): Promise<Ds3Root[]> => ipcRenderer.invoke('ds3:detect'),
  ds3Load: (sl2Path: string): Promise<Ds3ParseResult> => ipcRenderer.invoke('ds3:load', sl2Path),
  ds3SteamAchievements: (request: SteamAchievementsRequest = {}): Promise<SteamAchievementsResult> =>
    ipcRenderer.invoke('ds3:steam-achievements', request),
};

export type Api = typeof api;

contextBridge.exposeInMainWorld('api', api);
