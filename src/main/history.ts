import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { app } from 'electron';
import type { HistorySnapshot } from '../shared/contracts';

function historyFile(savePath: string): string {
  let hash = 5381;
  for (const ch of savePath.toLowerCase()) hash = ((hash * 33) ^ ch.charCodeAt(0)) >>> 0;
  return join(app.getPath('userData'), 'history', `h${hash.toString(16)}.json`);
}

export function getHistory(savePath: string): HistorySnapshot[] {
  try {
    return JSON.parse(readFileSync(historyFile(savePath), 'utf-8')) as HistorySnapshot[];
  } catch {
    return [];
  }
}

export function appendHistory(savePath: string, snapshot: HistorySnapshot): HistorySnapshot[] {
  let list = getHistory(savePath);
  const last = list[list.length - 1];
  // 同一次存档或内容无变化(重复读取)不入库
  if (last && (last.t === snapshot.t || JSON.stringify(last.slots) === JSON.stringify(snapshot.slots))) {
    return list;
  }
  list.push(snapshot);
  list.sort((a, b) => a.t - b.t);
  // 超容量时对旧的一半隔一去一,保最近 150 条全精度
  if (list.length > 300) {
    const old = list.slice(0, list.length - 150).filter((_, i) => i % 2 === 0);
    list = [...old, ...list.slice(-150)];
  }
  try {
    mkdirSync(join(app.getPath('userData'), 'history'), { recursive: true });
    writeFileSync(historyFile(savePath), JSON.stringify(list), 'utf-8');
  } catch (error) {
    console.error('写入时间线历史失败:', error);
  }
  return list;
}
