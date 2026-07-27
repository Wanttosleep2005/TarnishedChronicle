export type LlmProtocol = 'anthropic' | 'openai' | 'gemini';

export interface LlmSettings {
  /** 预设 id(见 LLM_PRESETS)或 'custom'。 */
  provider: string;
  protocol: LlmProtocol;
  baseUrl: string;
  apiKey: string;
  model: string;
}

export interface LlmPreset {
  id: string;
  label: string;
  protocol: LlmProtocol;
  baseUrl: string;
  defaultModel: string;
  modelHint?: string;
  note?: string;
}

export const LLM_PRESETS: readonly LlmPreset[] = [
  {
    id: 'anthropic',
    label: 'Anthropic(Claude)',
    protocol: 'anthropic',
    baseUrl: 'https://api.anthropic.com',
    defaultModel: 'claude-sonnet-4-6',
  },
  {
    id: 'deepseek',
    label: 'DeepSeek 深度求索',
    protocol: 'openai',
    baseUrl: 'https://api.deepseek.com',
    defaultModel: 'deepseek-chat',
    note: '国内直连,写长文性价比高;deepseek-reasoner 为推理模型。',
  },
  {
    id: 'moonshot',
    label: 'Kimi(月之暗面)',
    protocol: 'openai',
    baseUrl: 'https://api.moonshot.cn',
    defaultModel: 'kimi-latest',
    note: '国内直连;kimi-latest 自动指向最新模型。',
  },
  {
    id: 'zhipu',
    label: '智谱 GLM',
    protocol: 'openai',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
    defaultModel: 'glm-4.5',
    note: '国内直连。',
  },
  {
    id: 'qwen',
    label: '通义千问(阿里云百炼)',
    protocol: 'openai',
    baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    defaultModel: 'qwen-plus',
    note: '国内直连,OpenAI 兼容模式。',
  },
  {
    id: 'doubao',
    label: '豆包(火山方舟)',
    protocol: 'openai',
    baseUrl: 'https://ark.cn-beijing.volces.com/api/v3',
    defaultModel: '',
    modelHint: '填接入点 ID(ep-…)或开通的模型名',
    note: '需在火山方舟控制台开通模型/接入点。',
  },
  {
    id: 'siliconflow',
    label: '硅基流动 SiliconFlow',
    protocol: 'openai',
    baseUrl: 'https://api.siliconflow.cn',
    defaultModel: 'deepseek-ai/DeepSeek-V3',
    note: '聚合多家开源模型。',
  },
  {
    id: 'openai',
    label: 'OpenAI(GPT)',
    protocol: 'openai',
    baseUrl: 'https://api.openai.com',
    defaultModel: 'gpt-4o',
  },
  {
    id: 'gemini',
    label: 'Google Gemini',
    protocol: 'gemini',
    baseUrl: 'https://generativelanguage.googleapis.com',
    defaultModel: 'gemini-2.5-flash',
    note: 'AI Studio 的 API Key。',
  },
  {
    id: 'ollama',
    label: 'Ollama(本地模型)',
    protocol: 'openai',
    baseUrl: 'http://127.0.0.1:11434',
    defaultModel: '',
    modelHint: '本地已 pull 的模型名,如 qwen3:8b',
    note: '完全离线,无需 API Key。',
  },
  {
    id: 'custom',
    label: '自定义(OpenAI 兼容)',
    protocol: 'openai',
    baseUrl: '',
    defaultModel: '',
    modelHint: '按你的中转服务填写',
    note: '任意 OpenAI 兼容中转均可。',
  },
] as const;

export interface SteamSettings {
  steamId64: string;
  webApiKey: string;
}

export interface SteamAchievementsRequest {
  forceRefresh?: boolean;
}

export interface AppSettings {
  savePath: string | null;
  autoRefresh: boolean;
  llm: LlmSettings;
  steam: SteamSettings;
  /** 上次进入的游戏(启动页记忆)。 */
  lastGame: 'er' | 'sts2' | 'ds3' | null;
}

export interface Ds3Root {
  path: string;
  label: string;
  mtimeMs: number;
  sizeBytes: number;
}

export interface Ds3Stats {
  vigor: number;
  attunement: number;
  endurance: number;
  vitality: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  faith: number;
  luck: number;
}

export interface Ds3Character {
  slot: number;
  name: string;
  level: number;
  playtimeSec: number;
  totalSouls: number;
  stats?: Ds3Stats;
  hp?: { current: number; max: number };
  fp?: { current: number; max: number };
  staminaMax?: number;
  soulsHeld?: number;
}

export type Ds3ParseResult =
  | { ok: true; characters: Ds3Character[]; mtimeMs: number }
  | { ok: false; message: string };

export interface StoryEntry {
  t: number;
  slotName: string;
  model: string;
  text: string;
}

// ———— 杀戮尖塔 2 ————
export interface Sts2Root {
  path: string;
  label: string;
  modded: boolean;
  runCount: number;
  lastPlayedMs: number;
}

export interface Sts2RunMeta {
  path: string;
  t: number;
  sizeBytes: number;
}

export type Sts2FileResult = { ok: true; json: string } | { ok: false; message: string };

export type Sts2ArtResult = { ok: true; dataUrl: string } | { ok: false };

export type UpdatePhase = 'development' | 'idle' | 'checking' | 'downloading' | 'ready' | 'error';

export interface UpdateStatus {
  phase: UpdatePhase;
  currentVersion: string;
  availableVersion?: string;
  progress?: number;
  message: string;
  releaseNotes?: string;
}

export interface DetectedSave {
  path: string;
  folderSteamId: string | null;
  sizeBytes: number;
  mtimeMs: number;
  kind: 'sl2' | 'co2';
}

export type ReadSaveResult =
  | { ok: true; path: string; mtimeMs: number; data: Uint8Array }
  | { ok: false; message: string };

export interface LlmChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface LlmRequest {
  system: string;
  user: string;
  /** 多轮对话:提供时优先于 user(须以 user 轮收尾,含最新一问)。 */
  messages?: LlmChatMessage[];
  maxTokens?: number;
  /** 流式输出:主进程经 'llm:chunk' 事件按 requestId 推送增量文本。 */
  stream?: boolean;
  requestId?: string;
}

export type LlmResult = { ok: true; text: string } | { ok: false; message: string };

export type LlmModelsResult = { ok: true; models: string[] } | { ok: false; message: string };

export interface SteamAchievement {
  id: string;
  name: string;
  description?: string;
  unlocked: boolean;
  unlockedAt?: number;
  iconUrl?: string;
  grayIconUrl?: string;
  hidden: boolean;
  /** 全球解锁率(百分比,仅部分游戏拉取) */
  globalPercent?: number;
}

export type SteamAchievementsResult =
  | { ok: true; achievements: SteamAchievement[]; fetchedAt: number; fromCache: boolean }
  | {
      ok: false;
      code: 'not-configured' | 'private-profile' | 'request-failed' | 'no-cache';
      message: string;
    };

export interface SaveChangedEvent {
  path: string;
  mtimeMs: number;
}

export interface SlotSnapshot {
  name: string;
  level: number;
  deaths: number;
  runesMemory: number;
  seconds: number;
  gracesLit: number;
  bossFlags: number[];
  /** 已点亮赐福旗标(时光回放用;旧快照可能缺失)。 */
  graceFlags?: number[];
  /** 当时的血迹(最近一次死亡地点):map_id 四元组 + 本地坐标 + 卢恩数。 */
  blood?: { m: [number, number, number, number]; x: number; z: number; r: number };
}

export interface HistorySnapshot {
  /** 存档文件 mtime(毫秒)。 */
  t: number;
  slots: SlotSnapshot[];
}

export type ExportPngResult = { ok: true; path: string } | { ok: false; message: string };

export interface BackupInfo {
  name: string;
  path: string;
  sizeBytes: number;
  mtimeMs: number;
}

export type BackupResult = { ok: true; path: string } | { ok: false; message: string };
