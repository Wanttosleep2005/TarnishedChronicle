/**
 * 黑暗之魂 3 存档解析(只读):
 * DS30000.sl2 = BND4(entry 头 0x20:size@+8 u64, dataOffset@+16 u32, nameOffset@+20 u32),
 * 每个 USER_DATA 条目 = [16B IV][AES-128-CBC 密文],解密后 = [16B MD5][载荷]。
 * 角色档案表在 USER_DATA010:0x10B2 + slot*0x22A(name/level/playtimeSec/totalSouls);
 * 各槽内属性以角色名为锚,9 属性(生命力…运气)位于 name-0x44 起,Σ属性-89=等级 自校验。
 */
import { createDecipheriv } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import type { Ds3Character, Ds3ParseResult, Ds3Root } from '../shared/contracts';

const AES_KEY = Buffer.from('fd464d695e69a39a10e319a7ace8b7fa', 'hex');
const PROFILE_TABLE_BASE = 0x10b2;
const PROFILE_STRIDE = 0x22a;

export function detectDs3(): Ds3Root[] {
  const roots: Ds3Root[] = [];
  const base = join(process.env.APPDATA ?? '', 'DarkSoulsIII');
  try {
    for (const dir of readdirSync(base)) {
      const sl2 = join(base, dir, 'DS30000.sl2');
      if (!existsSync(sl2)) continue;
      const stat = statSync(sl2);
      roots.push({ path: sl2, label: `Steam ${dir}`, mtimeMs: stat.mtimeMs, sizeBytes: stat.size });
    }
  } catch {
    // 无 DS3 存档目录
  }
  return roots.sort((a, b) => b.mtimeMs - a.mtimeMs);
}

interface Bnd4Entry {
  name: string;
  offset: number;
  size: number;
}

function readEntries(buf: Buffer): Bnd4Entry[] {
  if (buf.toString('latin1', 0, 4) !== 'BND4') throw new Error('不是 BND4 存档');
  const count = buf.readUInt32LE(0x0c);
  const entrySize = Number(buf.readBigUInt64LE(0x20));
  const entries: Bnd4Entry[] = [];
  for (let i = 0; i < count; i++) {
    const base = 0x40 + i * entrySize;
    const size = Number(buf.readBigUInt64LE(base + 8));
    const offset = buf.readUInt32LE(base + 16);
    const nameOffset = buf.readUInt32LE(base + 20);
    let name = '';
    for (let p = nameOffset; p < nameOffset + 64; p += 2) {
      const ch = buf.readUInt16LE(p);
      if (ch === 0) break;
      name += String.fromCharCode(ch);
    }
    entries.push({ name, offset, size });
  }
  return entries;
}

function decryptEntry(buf: Buffer, entry: Bnd4Entry): Buffer {
  const data = buf.subarray(entry.offset, entry.offset + entry.size);
  const decipher = createDecipheriv('aes-128-cbc', AES_KEY, data.subarray(0, 16));
  decipher.setAutoPadding(false);
  return Buffer.concat([decipher.update(data.subarray(16)), decipher.final()]);
}

function readName(buf: Buffer, at: number, maxChars: number): string {
  let name = '';
  for (let p = at; p < at + maxChars * 2; p += 2) {
    const ch = buf.readUInt16LE(p);
    if (ch === 0) break;
    name += String.fromCharCode(ch);
  }
  return name;
}

/** 槽内以名字为锚的属性布局(相对名字起点的字节偏移)。 */
const REL = {
  hpCurrent: -112,
  hpMax: -108,
  fpCurrent: -100,
  fpMax: -96,
  staminaMax: -80,
  stats: -68, // 生命力/集中力/持久力/体格/力气/敏捷/智力/信仰 连续 8 个 u32
  luck: -28,
  level: -24,
  soulsHeld: -20,
  totalSouls: -16,
} as const;

export function parseDs3(sl2Path: string): Ds3ParseResult {
  try {
    const buf = readFileSync(sl2Path);
    const entries = readEntries(buf);
    const profileEntry = entries.find((e) => e.name === 'USER_DATA010');
    if (!profileEntry) return { ok: false, message: '存档缺少角色档案(USER_DATA010)' };
    const profile = decryptEntry(buf, profileEntry);

    const characters: Ds3Character[] = [];
    for (let slot = 0; slot < 10; slot++) {
      const row = PROFILE_TABLE_BASE + slot * PROFILE_STRIDE;
      if (row + 0x2e > profile.length) break;
      const name = readName(profile, row, 16);
      if (!name) continue;
      const character: Ds3Character = {
        slot,
        name,
        level: profile.readUInt32LE(row + 0x22),
        playtimeSec: profile.readUInt32LE(row + 0x26),
        totalSouls: profile.readUInt32LE(row + 0x2a),
      };

      // 槽内详情:名字锚定(名字重复出现取带合法属性块的那处)
      const slotEntry = entries.find((e) => e.name === `USER_DATA00${slot}`);
      if (slotEntry) {
        try {
          const data = decryptEntry(buf, slotEntry);
          const needle = Buffer.from(name, 'utf16le');
          let at = data.indexOf(needle);
          while (at >= 0) {
            if (at + REL.stats >= 0 && tryReadStats(data, at, character)) break;
            at = data.indexOf(needle, at + 2);
          }
        } catch {
          // 槽解密失败不影响档案级信息
        }
      }
      characters.push(character);
    }
    return { ok: true, characters, mtimeMs: statSync(sl2Path).mtimeMs };
  } catch (error) {
    return { ok: false, message: `解析失败:${error instanceof Error ? error.message : String(error)}` };
  }
}

function tryReadStats(data: Buffer, nameAt: number, out: Ds3Character): boolean {
  if (nameAt + REL.hpCurrent < 0 || nameAt + 4 > data.length) return false;
  const stats: number[] = [];
  for (let k = 0; k < 8; k++) stats.push(data.readUInt32LE(nameAt + REL.stats + k * 4));
  const luck = data.readUInt32LE(nameAt + REL.luck);
  const level = data.readUInt32LE(nameAt + REL.level);
  const sum = stats.reduce((a, b) => a + b, 0) + luck;
  // 自校验:9 属性合计 − 89 = 等级,且与档案表一致
  if (sum - 89 !== level || level !== out.level) return false;
  if (stats.some((v) => v < 1 || v > 99) || luck < 1 || luck > 99) return false;
  out.stats = {
    vigor: stats[0],
    attunement: stats[1],
    endurance: stats[2],
    vitality: stats[3],
    strength: stats[4],
    dexterity: stats[5],
    intelligence: stats[6],
    faith: stats[7],
    luck,
  };
  out.hp = { current: data.readInt32LE(nameAt + REL.hpCurrent), max: data.readUInt32LE(nameAt + REL.hpMax) };
  out.fp = { current: data.readInt32LE(nameAt + REL.fpCurrent), max: data.readUInt32LE(nameAt + REL.fpMax) };
  out.staminaMax = data.readUInt32LE(nameAt + REL.staminaMax);
  out.soulsHeld = data.readUInt32LE(nameAt + REL.soulsHeld);
  return true;
}
