import { watch, type FSWatcher } from 'node:fs';
import { readdir, readFile, stat } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { app } from 'electron';
import type { DetectedSave, ReadSaveResult } from '../shared/contracts';

export async function detectSaves(): Promise<DetectedSave[]> {
  const roots = [join(app.getPath('appData'), 'EldenRing')];
  const found: DetectedSave[] = [];

  for (const root of roots) {
    let entries: string[];
    try {
      entries = await readdir(root);
    } catch {
      continue;
    }
    for (const entry of entries) {
      const dir = join(root, entry);
      for (const file of ['ER0000.sl2', 'ER0000.co2']) {
        const path = join(dir, file);
        try {
          const info = await stat(path);
          if (!info.isFile()) continue;
          found.push({
            path,
            folderSteamId: /^\d{5,}$/.test(entry) ? entry : null,
            sizeBytes: info.size,
            mtimeMs: info.mtimeMs,
            kind: file.endsWith('.co2') ? 'co2' : 'sl2',
          });
        } catch {
          // 文件不存在,跳过
        }
      }
    }
  }

  return found.sort((a, b) => b.mtimeMs - a.mtimeMs);
}

export async function readSave(path: string): Promise<ReadSaveResult> {
  try {
    const [data, info] = await Promise.all([readFile(path), stat(path)]);
    return { ok: true, path, mtimeMs: info.mtimeMs, data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, message: `读取存档失败:${message}` };
  }
}

let watcher: FSWatcher | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

export function watchSave(path: string, onChange: (path: string, mtimeMs: number) => void): void {
  unwatchSave();
  const dir = dirname(path);
  const target = basename(path).toLowerCase();
  try {
    watcher = watch(dir, (_event, filename) => {
      if (filename && filename.toLowerCase() !== target) return;
      if (debounceTimer) clearTimeout(debounceTimer);
      // 游戏写存档是多次写入,防抖等它写完
      debounceTimer = setTimeout(() => {
        void stat(path)
          .then((info) => onChange(path, info.mtimeMs))
          .catch(() => undefined);
      }, 800);
    });
  } catch (error) {
    console.error('监听存档失败:', error);
  }
}

export function unwatchSave(): void {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  watcher?.close();
  watcher = null;
}
