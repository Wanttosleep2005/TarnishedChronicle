import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { app } from 'electron';
import type { AppSettings } from '../shared/contracts';

const DEFAULTS: AppSettings = {
  savePath: null,
  autoRefresh: true,
  llm: {
    provider: 'anthropic',
    protocol: 'anthropic',
    baseUrl: 'https://api.anthropic.com',
    apiKey: '',
    model: 'claude-sonnet-4-6',
  },
  steam: {
    steamId64: '',
    webApiKey: '',
  },
  lastGame: null,
};

let cached: AppSettings | null = null;

function settingsFile(): string {
  return join(app.getPath('userData'), 'settings.json');
}

export function getSettings(): AppSettings {
  if (cached) return cached;
  try {
    // trim() 兼顾 UTF-8 BOM(U+FEFF 属于 JS 空白)与首尾空行,容忍手工编辑的文件
    const raw = JSON.parse(readFileSync(settingsFile(), 'utf-8').trim()) as Partial<AppSettings>;
    cached = {
      ...DEFAULTS,
      ...raw,
      llm: { ...DEFAULTS.llm, ...raw.llm },
      steam: { ...DEFAULTS.steam, ...raw.steam },
    };
    // 旧版设置迁移:provider 只有 anthropic/openai 且无 protocol 字段
    if (raw.llm && !('protocol' in raw.llm)) {
      cached.llm.protocol = cached.llm.provider === 'openai' ? 'openai' : 'anthropic';
      if (cached.llm.provider === 'openai' && !cached.llm.baseUrl) {
        cached.llm.provider = 'custom';
      }
    }
  } catch {
    cached = { ...DEFAULTS, llm: { ...DEFAULTS.llm }, steam: { ...DEFAULTS.steam } };
  }
  return cached;
}

export function setSettings(partial: Partial<AppSettings>): AppSettings {
  const current = getSettings();
  cached = {
    ...current,
    ...partial,
    llm: { ...current.llm, ...partial.llm },
    steam: { ...current.steam, ...partial.steam },
  };
  try {
    mkdirSync(app.getPath('userData'), { recursive: true });
    writeFileSync(settingsFile(), JSON.stringify(cached, null, 2), 'utf-8');
  } catch (error) {
    console.error('保存设置失败:', error);
  }
  return cached;
}
