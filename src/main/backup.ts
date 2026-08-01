import { copyFile, mkdir, readdir, stat } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import { app, shell } from 'electron';
import type { BackupInfo, BackupResult } from '../shared/contracts';

function backupsDir(): string {
  return join(app.getPath('userData'), 'backups');
}

function timestamp(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

export async function createBackup(savePath: string): Promise<BackupResult> {
  try {
    const dir = backupsDir();
    await mkdir(dir, { recursive: true });
    const ext = extname(savePath);
    const base = basename(savePath, ext);
    const target = join(dir, `${base}-${timestamp()}${ext}`);
    await copyFile(savePath, target);
    return { ok: true, path: target };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, message: `备份失败:${message}` };
  }
}

export async function listBackups(): Promise<BackupInfo[]> {
  try {
    const dir = backupsDir();
    const names = await readdir(dir);
    const infos = await Promise.all(
      names
        .filter((n) => /\.(sl2|co2)$/i.test(n))
        .map(async (name) => {
          const path = join(dir, name);
          const info = await stat(path);
          return { name, path, sizeBytes: info.size, mtimeMs: info.mtimeMs };
        }),
    );
    return infos.sort((a, b) => b.mtimeMs - a.mtimeMs);
  } catch {
    return [];
  }
}

export async function openBackupsFolder(): Promise<void> {
  const dir = backupsDir();
  await mkdir(dir, { recursive: true });
  await shell.openPath(dir);
}
