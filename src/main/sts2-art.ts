/**
 * 杀戮尖塔 2 图片服务 —— 全部取自游戏 pck(官方原图,无外网请求):
 * - 卡牌:card_atlas.sprites/*.tres 给出区域 → BC7 图集按块裁剪解码
 * - 遗物/药水/徽章:独立 ctex(普通=内嵌 WEBP 直切;bptc=BC7 解码转 PNG)
 * 结果缓存在 userData/sts2-art-pck。
 */
import { closeSync, existsSync, mkdirSync, openSync, readFileSync, readSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { app } from 'electron';
import type { Sts2ArtResult } from '../shared/contracts';
import { decodeBc7Region } from './bc7';
import { encodePng } from './png';

const PCK = 'G:\\SteamLibrary\\steamapps\\common\\Slay the Spire 2\\SlayTheSpire2.pck';

function cacheDir(): string {
  const dir = join(app.getPath('userData'), 'sts2-art-pck');
  mkdirSync(dir, { recursive: true });
  return dir;
}

// ———— pck 索引(懒加载一次) ————
interface PckEntry {
  offset: number;
  size: number;
}
interface PckIndex {
  /** ctex 文件名前缀(如 `bash.png-`)→ 条目 */
  ctexByName: Map<string, PckEntry>;
  /** card sprites:文件名(如 `bash`)→ tres 条目 */
  cardTres: Map<string, PckEntry>;
  fileBase: number;
}
let pckIndex: PckIndex | null | 'unavailable' = null;

function getPckIndex(): PckIndex | null {
  if (pckIndex === 'unavailable') return null;
  if (pckIndex) return pckIndex;
  try {
    const fd = openSync(PCK, 'r');
    const readAt = (offset: number, length: number): Buffer => {
      const buf = Buffer.alloc(length);
      readSync(fd, buf, 0, length, offset);
      return buf;
    };
    const head = readAt(0, 0x40);
    if (head.readUInt32LE(0) !== 0x43504447) throw new Error('not GDPC');
    const fileBase = Number(head.readBigUInt64LE(0x18));
    const dirOffset = Number(head.readBigUInt64LE(0x20));
    const fileCount = readAt(dirOffset, 4).readUInt32LE(0);
    const ctexByName = new Map<string, PckEntry>();
    const cardTres = new Map<string, PckEntry>();
    let cursor = dirOffset + 4;
    for (let i = 0; i < fileCount; i++) {
      const pathLen = readAt(cursor, 4).readUInt32LE(0);
      cursor += 4;
      const path = readAt(cursor, pathLen).toString('utf-8').replace(/\0+$/, '');
      cursor += pathLen;
      const meta = readAt(cursor, 36);
      cursor += 36;
      const entry: PckEntry = { offset: Number(meta.readBigUInt64LE(0)), size: Number(meta.readBigUInt64LE(8)) };
      if (path.endsWith('.ctex')) {
        const file = path.slice(path.lastIndexOf('/') + 1);
        const dash = file.indexOf('.png-');
        if (dash > 0) {
          const name = file.slice(0, dash);
          // 同名可能有 bptc/s3tc 双份,bptc(BC7)质量最好,普通 ctex(内嵌 webp)次之
          const prev = ctexByName.get(name);
          if (!prev || path.endsWith('.bptc.ctex')) ctexByName.set(name, entry);
        }
      } else if (path.startsWith('images/atlases/card_atlas.sprites/') && path.endsWith('.tres')) {
        const file = path.slice(path.lastIndexOf('/') + 1, path.length - 5);
        cardTres.set(file, entry);
      }
    }
    closeSync(fd);
    pckIndex = { ctexByName, cardTres, fileBase };
    return pckIndex;
  } catch (error) {
    console.error('读取 StS2 pck 失败:', error);
    pckIndex = 'unavailable';
    return null;
  }
}

function readEntry(index: PckIndex, entry: PckEntry): Buffer {
  const fd = openSync(PCK, 'r');
  try {
    const buf = Buffer.alloc(entry.size);
    readSync(fd, buf, 0, entry.size, index.fileBase + entry.offset);
    return buf;
  } finally {
    closeSync(fd);
  }
}

// ———— ctex 解析 ————
const CTEX_DATA_IMAGE = 0;
const CTEX_DATA_PNG = 1;
const CTEX_DATA_WEBP = 2;
const FORMAT_RGBA8 = 5;
const FORMAT_BPTC_RGBA = 22;

interface CtexRaw {
  kind: 'bc7' | 'rgba8';
  width: number;
  height: number;
  dataOffset: number;
  buf: Buffer;
}

/** 解析 ctex → 内嵌 webp/png 字节,或 raw 纹理描述。 */
function parseCtex(buf: Buffer): { image?: { data: Buffer; mime: string }; raw?: CtexRaw } | null {
  if (buf.length < 0x38 || buf.readUInt32LE(0) !== 0x32545347) return null; // 'GST2'
  const dataFormat = buf.readUInt32LE(0x24);
  const width = buf.readUInt16LE(0x28);
  const height = buf.readUInt16LE(0x2a);
  const format = buf.readUInt32LE(0x30);
  if (dataFormat === CTEX_DATA_WEBP || dataFormat === CTEX_DATA_PNG) {
    const size = buf.readUInt32LE(0x34);
    const data = buf.subarray(0x38, 0x38 + size);
    return { image: { data, mime: dataFormat === CTEX_DATA_WEBP ? 'image/webp' : 'image/png' } };
  }
  if (dataFormat === CTEX_DATA_IMAGE && format === FORMAT_BPTC_RGBA) {
    return { raw: { kind: 'bc7', width, height, dataOffset: 0x34, buf } };
  }
  if (dataFormat === CTEX_DATA_IMAGE && format === FORMAT_RGBA8) {
    return { raw: { kind: 'rgba8', width, height, dataOffset: 0x34, buf } };
  }
  return null;
}

function rawToPng(raw: CtexRaw, x: number, y: number, w: number, h: number): Buffer {
  if (raw.kind === 'bc7') {
    const texWidth = Math.ceil(raw.width / 4) * 4;
    return encodePng(decodeBc7Region(raw.buf, raw.dataOffset, texWidth, x, y, w, h), w, h);
  }
  const out = Buffer.alloc(w * h * 4);
  for (let row = 0; row < h; row++) {
    const src = raw.dataOffset + ((y + row) * raw.width + x) * 4;
    raw.buf.copy(out, row * w * 4, src, src + w * 4);
  }
  return encodePng(out, w, h);
}

/** 独立 ctex → 图片字节。 */
function imageFromCtexName(name: string): { data: Buffer; mime: string } | null {
  const index = getPckIndex();
  if (!index) return null;
  const entry = index.ctexByName.get(name);
  if (!entry) return null;
  const parsed = parseCtex(readEntry(index, entry));
  if (!parsed) return null;
  if (parsed.image) return parsed.image;
  if (parsed.raw) {
    return { data: rawToPng(parsed.raw, 0, 0, parsed.raw.width, parsed.raw.height), mime: 'image/png' };
  }
  return null;
}

// ———— 卡牌图集裁剪 ————
const atlasCache = new Map<string, CtexRaw | null>();

function getAtlasRaw(atlasName: string): CtexRaw | null {
  if (atlasCache.has(atlasName)) return atlasCache.get(atlasName) ?? null;
  const index = getPckIndex();
  let raw: CtexRaw | null = null;
  if (index) {
    const entry = index.ctexByName.get(atlasName);
    if (entry) raw = parseCtex(readEntry(index, entry))?.raw ?? null;
  }
  atlasCache.set(atlasName, raw);
  return raw;
}

function cardFromAtlas(bareId: string): { data: Buffer; mime: string } | null {
  const index = getPckIndex();
  if (!index) return null;
  const entry = index.cardTres.get(bareId.toLowerCase());
  if (!entry) return null;
  const tres = readEntry(index, entry).toString('utf-8');
  const atlasMatch = /path="res:\/\/images\/atlases\/(card_atlas_\d+)\.png"/.exec(tres);
  const regionMatch = /region = Rect2\((-?[\d.]+), (-?[\d.]+), (-?[\d.]+), (-?[\d.]+)\)/.exec(tres);
  if (!atlasMatch || !regionMatch) return null;
  const raw = getAtlasRaw(atlasMatch[1]);
  if (!raw) return null;
  const [x, y, w, h] = regionMatch.slice(1).map((v) => Math.round(Number(v)));
  if (w <= 0 || h <= 0 || x < 0 || y < 0 || x + w > raw.width + 4 || y + h > raw.height + 4) return null;
  return { data: rawToPng(raw, x, y, w, h), mime: 'image/png' };
}

// ———— 对外服务 ————
const memory = new Map<string, Sts2ArtResult>();

export async function getSts2Art(kind: string, bareId: string): Promise<Sts2ArtResult> {
  const key = `${kind}:${bareId}`;
  const cached = memory.get(key);
  if (cached) return cached;

  const dir = cacheDir();
  const safe = bareId.replace(/[^A-Za-z0-9_-]/g, '_');
  const hitPath = ['webp', 'png'].map((ext) => join(dir, `${kind}_${safe}.${ext}`)).find(existsSync);

  let result: Sts2ArtResult;
  if (hitPath) {
    const mime = hitPath.endsWith('.webp') ? 'image/webp' : 'image/png';
    result = { ok: true, dataUrl: `data:${mime};base64,${readFileSync(hitPath).toString('base64')}` };
  } else {
    let image: { data: Buffer; mime: string } | null = null;
    try {
      const lower = bareId.toLowerCase();
      if (kind === 'card') image = cardFromAtlas(bareId);
      else if (kind === 'badge') image = imageFromCtexName(`badge_${lower}`);
      else image = imageFromCtexName(lower);
    } catch (error) {
      console.error(`StS2 art 解码失败 ${key}:`, error);
    }
    if (image) {
      const ext = image.mime === 'image/webp' ? 'webp' : 'png';
      writeFileSync(join(dir, `${kind}_${safe}.${ext}`), image.data);
      result = { ok: true, dataUrl: `data:${image.mime};base64,${image.data.toString('base64')}` };
    } else {
      result = { ok: false };
    }
  }
  memory.set(key, result);
  return result;
}
