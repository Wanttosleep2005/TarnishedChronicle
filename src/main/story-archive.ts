import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { app } from 'electron';
import type { StoryEntry } from '../shared/contracts';

function storiesFile(savePath: string): string {
  let hash = 5381;
  for (const ch of savePath.toLowerCase()) hash = ((hash * 33) ^ ch.charCodeAt(0)) >>> 0;
  return join(app.getPath('userData'), 'stories', `s${hash.toString(16)}.json`);
}

export function listStories(savePath: string): StoryEntry[] {
  try {
    return JSON.parse(readFileSync(storiesFile(savePath), 'utf-8')) as StoryEntry[];
  } catch {
    return [];
  }
}

export function saveStory(savePath: string, entry: StoryEntry): StoryEntry[] {
  const list = listStories(savePath);
  list.push(entry);
  list.sort((a, b) => b.t - a.t);
  if (list.length > 100) list.length = 100;
  try {
    mkdirSync(join(app.getPath('userData'), 'stories'), { recursive: true });
    writeFileSync(storiesFile(savePath), JSON.stringify(list), 'utf-8');
  } catch (error) {
    console.error('保存编年史归档失败:', error);
  }
  return list;
}

export function deleteStory(savePath: string, t: number): StoryEntry[] {
  const list = listStories(savePath).filter((entry) => entry.t !== t);
  try {
    mkdirSync(join(app.getPath('userData'), 'stories'), { recursive: true });
    writeFileSync(storiesFile(savePath), JSON.stringify(list), 'utf-8');
  } catch (error) {
    console.error('删除编年史归档失败:', error);
  }
  return list;
}
