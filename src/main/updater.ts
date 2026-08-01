import { app } from 'electron';
import updater, { type UpdateInfo } from 'electron-updater';
import type { UpdateStatus } from '../shared/contracts';

const { autoUpdater } = updater;

export const UPDATE_REPOSITORY = 'Wanttosleep2005/TarnishedChronicle';

type StatusListener = (status: UpdateStatus) => void;

let status: UpdateStatus = developmentStatus();
let listener: StatusListener | null = null;
let initialized = false;
let ongoingCheck: Promise<UpdateStatus> | null = null;

function developmentStatus(): UpdateStatus {
  return {
    phase: 'development',
    currentVersion: app.getVersion(),
    message: '开发源码由 start.bat 安全同步；安装版更新仅在正式安装包中启用。',
  };
}

function releaseNotes(info: UpdateInfo): string | undefined {
  if (typeof info.releaseNotes === 'string') return info.releaseNotes.trim() || undefined;
  if (Array.isArray(info.releaseNotes)) {
    return info.releaseNotes
      .map((note) => note.note?.trim() ?? '')
      .filter(Boolean)
      .join('\n') || undefined;
  }
  return undefined;
}

function publish(next: UpdateStatus): void {
  status = next;
  listener?.(status);
}

function fail(error: unknown): UpdateStatus {
  const detail = error instanceof Error ? error.message.replace(/\s+/g, ' ').trim() : String(error);
  const next: UpdateStatus = {
    phase: 'error',
    currentVersion: app.getVersion(),
    message: detail ? `更新服务不可用：${detail}` : '更新服务不可用，请稍后重试。',
  };
  publish(next);
  return next;
}

export function getUpdateStatus(): UpdateStatus {
  return status;
}

export function initializeAutoUpdater(onStatus: StatusListener): void {
  listener = onStatus;
  if (initialized) {
    onStatus(status);
    return;
  }
  initialized = true;

  if (!app.isPackaged) {
    publish(developmentStatus());
    return;
  }

  status = {
    phase: 'idle',
    currentVersion: app.getVersion(),
    message: '已准备检查正式更新。',
  };
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = false;
  autoUpdater.allowPrerelease = false;

  autoUpdater.on('checking-for-update', () => {
    publish({
      phase: 'checking',
      currentVersion: app.getVersion(),
      message: '正在检查官方更新…',
    });
  });
  autoUpdater.on('update-available', (info) => {
    publish({
      phase: 'downloading',
      currentVersion: app.getVersion(),
      availableVersion: info.version,
      message: `发现 v${info.version}，正在下载…`,
      releaseNotes: releaseNotes(info),
    });
  });
  autoUpdater.on('update-not-available', () => {
    publish({
      phase: 'idle',
      currentVersion: app.getVersion(),
      message: '当前已是最新正式版本。',
    });
  });
  autoUpdater.on('download-progress', (progress) => {
    publish({
      ...status,
      phase: 'downloading',
      progress: Math.min(100, Math.max(0, Math.round(progress.percent))),
      message: `正在下载 v${status.availableVersion ?? ''}：${Math.round(progress.percent)}%`,
    });
  });
  autoUpdater.on('update-downloaded', (info) => {
    publish({
      phase: 'ready',
      currentVersion: app.getVersion(),
      availableVersion: info.version,
      progress: 100,
      message: `v${info.version} 已下载，重启后即可安装。`,
      releaseNotes: releaseNotes(info),
    });
  });
  autoUpdater.on('error', (error) => {
    fail(error);
  });

  void checkForUpdates();
}

export function checkForUpdates(): Promise<UpdateStatus> {
  if (!app.isPackaged) {
    const next = developmentStatus();
    publish(next);
    return Promise.resolve(next);
  }
  if (ongoingCheck) return ongoingCheck;

  ongoingCheck = autoUpdater
    .checkForUpdates()
    .then(() => status)
    .catch((error) => fail(error))
    .finally(() => {
      ongoingCheck = null;
    });
  return ongoingCheck;
}

export function installUpdate(): UpdateStatus {
  if (status.phase === 'ready') autoUpdater.quitAndInstall(false, true);
  return status;
}
