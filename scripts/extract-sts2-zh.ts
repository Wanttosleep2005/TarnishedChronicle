/**
 * 从 SlayTheSpire2.pck(Godot v3 目录在尾部)提取官方简中本地化 →
 * src/renderer/src/data/zh/sts2-zh.generated.ts
 * 运行:npx tsx scripts/extract-sts2-zh.ts
 */
import { closeSync, openSync, readSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PCK = 'G:\\SteamLibrary\\steamapps\\common\\Slay the Spire 2\\SlayTheSpire2.pck';
const OUT = join(import.meta.dirname, '../src/renderer/src/data/zh/sts2-zh.generated.ts');

const fd = openSync(PCK, 'r');
const readAt = (offset: number, length: number): Buffer => {
  const buf = Buffer.alloc(length);
  readSync(fd, buf, 0, length, offset);
  return buf;
};

const head = readAt(0, 0x40);
if (head.readUInt32LE(0) !== 0x43504447) throw new Error('不是 GDPC');
const packFlags = head.readUInt32LE(0x14);
const fileBase = Number(head.readBigUInt64LE(0x18));
const dirOffset = Number(head.readBigUInt64LE(0x20));
const relBase = (packFlags & 2) !== 0;

const fileCount = readAt(dirOffset, 4).readUInt32LE(0);
interface Entry {
  path: string;
  offset: number;
  size: number;
  flags: number;
}
const entries = new Map<string, Entry>();
let cursor = dirOffset + 4;
for (let i = 0; i < fileCount; i++) {
  const pathLen = readAt(cursor, 4).readUInt32LE(0);
  cursor += 4;
  const path = readAt(cursor, pathLen).toString('utf-8').replace(/\0+$/, '');
  cursor += pathLen;
  const meta = readAt(cursor, 8 + 8 + 16 + 4);
  cursor += 8 + 8 + 16 + 4;
  const offset = Number(meta.readBigUInt64LE(0));
  const size = Number(meta.readBigUInt64LE(8));
  const flags = meta.readUInt32LE(32);
  entries.set(path, { path, offset, size, flags });
}
console.log(`目录条目 ${entries.size}`);

function readJson(path: string): Record<string, unknown> | null {
  const entry = entries.get(path);
  if (!entry) return null;
  if (entry.flags & 1) {
    console.log(`跳过加密文件 ${path}`);
    return null;
  }
  const abs = relBase ? fileBase + entry.offset : entry.offset;
  const raw = readAt(abs, entry.size).toString('utf-8');
  return JSON.parse(raw) as Record<string, unknown>;
}

// 采样键结构
const sample = readJson('localization/zhs/cards.json');
if (sample) {
  const keys = Object.keys(sample).slice(0, 5);
  console.log('zhs/cards.json 样例键:', keys.join(' | '));
  console.log('样例值:', JSON.stringify(sample[keys[0]]).slice(0, 200));
}

/** 键为扁平 `ID.title` / `ID.name` 结构,抽 id→名称(title 优先,name 兜底)。 */
function toNameMap(json: Record<string, unknown> | null): Record<string, string> {
  const out: Record<string, string> = {};
  const fromName: Record<string, string> = {};
  if (!json) return out;
  for (const [key, value] of Object.entries(json)) {
    if (typeof value !== 'string') continue;
    const m = /^(.+)\.(title|name)$/.exec(key);
    if (!m) continue;
    if (m[2] === 'title') out[m[1]] = value;
    else fromName[m[1]] = value;
  }
  for (const [id, name] of Object.entries(fromName)) {
    if (!(id in out)) out[id] = name;
  }
  return out;
}

const CATS = [
  'cards',
  'relics',
  'characters',
  'potions',
  'acts',
  'badges',
  'encounters',
  'monsters',
  'events',
  'ancients',
  'epochs',
  'modifiers',
] as const;

const result: Record<string, Record<string, string>> = {};
for (const cat of CATS) {
  const map = toNameMap(readJson(`localization/zhs/${cat}.json`));
  result[cat] = map;
  console.log(`${cat}: ${Object.keys(map).length} 条`);
}

// 徽章特殊:除通用 title 外还有铜/银/金分级名与达成条件(bronzeTitle/bronzeDescription…)
const stripMarkup = (s: string) => s.replace(/\[\/?[a-z]+\]/g, '');
interface BadgeTier {
  title: string;
  desc: string;
}
const badgeTiers: Record<string, Partial<Record<'bronze' | 'silver' | 'gold', BadgeTier>>> = {};
const badgesJson = readJson('localization/zhs/badges.json');
if (badgesJson) {
  for (const [key, value] of Object.entries(badgesJson)) {
    if (typeof value !== 'string') continue;
    const m = /^(.+)\.(bronze|silver|gold)(Title|Description)$/.exec(key);
    if (!m) continue;
    const [, id, tier, field] = m;
    const entry = (badgeTiers[id] ??= {});
    const t = (entry[tier as 'bronze' | 'silver' | 'gold'] ??= { title: '', desc: '' });
    if (field === 'Title') t.title = stripMarkup(value);
    else t.desc = stripMarkup(value);
  }
  // 分级徽章的通用名兜底进扁平表(取铜级名),保证 badgeName 查得到
  for (const [id, tiers] of Object.entries(badgeTiers)) {
    if (!(id in result.badges)) {
      const base = tiers.bronze?.title ?? tiers.silver?.title ?? tiers.gold?.title;
      if (base) result.badges[id] = base;
    }
  }
  console.log(`badges(分级): ${Object.keys(badgeTiers).length} 条;扁平表补齐后 ${Object.keys(result.badges).length} 条`);
}

// 成就:title + description 成对
const achievements: Record<string, { title: string; desc: string }> = {};
const achJson = readJson('localization/zhs/achievements.json');
if (achJson) {
  for (const [key, value] of Object.entries(achJson)) {
    if (typeof value !== 'string') continue;
    const m = /^(.+)\.(title|description)$/.exec(key);
    if (!m) continue;
    const entry = (achievements[m[1]] ??= { title: '', desc: '' });
    if (m[2] === 'title') entry.title = value;
    else entry.desc = stripMarkup(value);
  }
  for (const [id, entry] of Object.entries(achievements)) {
    if (!entry.title) delete achievements[id];
  }
  console.log(`achievements: ${Object.keys(achievements).length} 条`);
}

const banner = `// @generated by scripts/extract-sts2-zh.ts — 杀戮尖塔2 官方简中(pck localization/zhs)。请勿手改。\n`;
writeFileSync(
  OUT,
  banner +
    `export const STS2_ZH: Readonly<Record<string, Readonly<Record<string, string>>>> = ${JSON.stringify(result)};\n` +
    `export interface Sts2BadgeTier { title: string; desc: string }\n` +
    `export const STS2_BADGE_TIERS: Readonly<Record<string, Partial<Record<'bronze' | 'silver' | 'gold', Sts2BadgeTier>>>> = ${JSON.stringify(badgeTiers)};\n` +
    `export const STS2_ACHIEVEMENTS: Readonly<Record<string, { title: string; desc: string }>> = ${JSON.stringify(achievements)};\n`,
  'utf-8',
);
console.log(`已写出 ${OUT}`);

// 抽查真实存档里的 id
for (const probe of [
  ['cards', 'CARD.STRIKE_REGENT'],
  ['cards', 'STRIKE_REGENT'],
  ['relics', 'RELIC.DIVINE_RIGHT'],
  ['relics', 'DIVINE_RIGHT'],
  ['characters', 'CHARACTER.REGENT'],
  ['characters', 'REGENT'],
  ['acts', 'ACT.OVERGROWTH'],
  ['acts', 'OVERGROWTH'],
] as const) {
  const [cat, id] = probe;
  console.log(`${cat}[${id}] = ${result[cat]?.[id] ?? '(缺)'}`);
}
closeSync(fd);
