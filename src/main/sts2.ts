import { readdirSync, readFileSync, statSync, watch, type FSWatcher } from 'node:fs';
import { join } from 'node:path';
import { app } from 'electron';
import type { Sts2Root, Sts2RunMeta } from '../shared/contracts';

let sts2Watchers: FSWatcher[] = [];
let sts2Debounce: NodeJS.Timeout | null = null;

/** 监听 saves 目录(progress.save + history/),打完一局自动通知渲染层。 */
export function watchSts2(savesPath: string, onChange: () => void): void {
  unwatchSts2();
  const fire = () => {
    if (sts2Debounce) clearTimeout(sts2Debounce);
    // 游戏写盘是多个文件连续落地,防抖合并成一次刷新
    sts2Debounce = setTimeout(onChange, 1200);
  };
  for (const dir of [savesPath, join(savesPath, 'history')]) {
    try {
      sts2Watchers.push(watch(dir, fire));
    } catch {
      // history 目录可能尚不存在
    }
  }
}

export function unwatchSts2(): void {
  for (const watcher of sts2Watchers) watcher.close();
  sts2Watchers = [];
  if (sts2Debounce) {
    clearTimeout(sts2Debounce);
    sts2Debounce = null;
  }
}

const STS2_APP_ID = '2868840';
const STEAM_LIBS = ['X:\\steam', 'D:\\SteamLibrary', 'G:\\SteamLibrary', 'C:\\Program Files (x86)\\Steam'];

function isSavesDir(path: string): boolean {
  try {
    statSync(join(path, 'progress.save'));
    return true;
  } catch {
    return false;
  }
}

/** 在一个 profile 容器(如 …\remote 或 …\remote\modded)下枚举 profileN/saves。 */
function scanContainer(container: string, labelPrefix: string, modded: boolean): Sts2Root[] {
  const roots: Sts2Root[] = [];
  let entries: string[] = [];
  try {
    entries = readdirSync(container);
  } catch {
    return roots;
  }
  for (const entry of entries) {
    if (!/^profile\d+$/.test(entry)) continue;
    const saves = join(container, entry, 'saves');
    if (!isSavesDir(saves)) continue;
    let runCount = 0;
    let lastPlayed = 0;
    try {
      for (const f of readdirSync(join(saves, 'history'))) {
        if (!f.endsWith('.run')) continue;
        runCount += 1;
        const t = Number(f.replace('.run', '')) * 1000;
        if (t > lastPlayed) lastPlayed = t;
      }
    } catch {
      // 无历史目录
    }
    roots.push({
      path: saves,
      label: `${labelPrefix} · ${entry}${modded ? '(模组)' : ''}`,
      modded,
      runCount,
      lastPlayedMs: lastPlayed,
    });
  }
  return roots;
}

export function detectSts2(): Sts2Root[] {
  const roots: Sts2Root[] = [];
  // Steam 云目录(主要来源)
  for (const lib of STEAM_LIBS) {
    const userdata = join(lib, 'userdata');
    let accounts: string[] = [];
    try {
      accounts = readdirSync(userdata);
    } catch {
      continue;
    }
    for (const account of accounts) {
      const remote = join(userdata, account, STS2_APP_ID, 'remote');
      roots.push(...scanContainer(remote, `Steam ${account}`, false));
      roots.push(...scanContainer(join(remote, 'modded'), `Steam ${account}`, true));
    }
  }
  // 本地 Roaming\SlayTheSpire2\default\<n>\profileN
  const roaming = join(app.getPath('appData'), 'SlayTheSpire2', 'default');
  try {
    for (const n of readdirSync(roaming)) {
      roots.push(...scanContainer(join(roaming, n), `本地 default/${n}`, false));
    }
  } catch {
    // 不存在
  }
  return roots.sort((a, b) => b.lastPlayedMs - a.lastPlayedMs);
}

export function readSts2Progress(savesPath: string): { ok: true; json: string } | { ok: false; message: string } {
  try {
    return { ok: true, json: readFileSync(join(savesPath, 'progress.save'), 'utf-8') };
  } catch (error) {
    return { ok: false, message: `读取 progress.save 失败:${error instanceof Error ? error.message : String(error)}` };
  }
}

export function listSts2Runs(savesPath: string): Sts2RunMeta[] {
  try {
    return readdirSync(join(savesPath, 'history'))
      .filter((f) => f.endsWith('.run'))
      .map((f) => ({
        path: join(savesPath, 'history', f),
        t: Number(f.replace('.run', '')) * 1000,
        sizeBytes: statSync(join(savesPath, 'history', f)).size,
      }))
      .sort((a, b) => b.t - a.t);
  } catch {
    return [];
  }
}

export function readSts2Run(path: string): { ok: true; json: string } | { ok: false; message: string } {
  try {
    return { ok: true, json: readFileSync(path, 'utf-8') };
  } catch (error) {
    return { ok: false, message: `读取对局失败:${error instanceof Error ? error.message : String(error)}` };
  }
}
