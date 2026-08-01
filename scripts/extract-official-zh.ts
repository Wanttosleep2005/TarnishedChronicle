/**
 * 从官方文本生成 英文名→官方简中名 映射(NpcName / PlaceName):
 * - 本体与 DLC:本机游戏目录 msg/{engus,zhocn} 下的原版 msgbnd.dcx。
 *   用游戏自带 oo2core_6_win64.dll(koffi FFI)解 Kraken,再走 compass 的 BND4/FMG 解析器。
 * 输出:src/renderer/src/data/zh/official-names.generated.ts
 * 运行:npx tsx scripts/extract-official-zh.ts
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Effect } from 'effect';
import koffi from 'koffi';
import { parseBnd4 } from '../_reference/elden-ring-compass/packages/extractor/src/formats/bnd4.ts';
import { parseFmg } from '../_reference/elden-ring-compass/packages/extractor/src/formats/fmg.ts';

const ROOT = join(import.meta.dirname, '..');
const GAME = 'G:\\SteamLibrary\\steamapps\\common\\ELDEN RING\\Game';
const OODLE_DLL = join(GAME, 'oo2core_6_win64.dll');
const OUT = join(ROOT, 'src/renderer/src/data/zh/official-names.generated.ts');

// ———— Oodle (koffi) ————
const oodleLib = koffi.load(OODLE_DLL);
const OodleLZ_Decompress = oodleLib.func(
  'int64 OodleLZ_Decompress(const uint8_t *compBuf, int64 compBufSize, uint8_t *rawBuf, int64 rawLen, int32 fuzzSafe, int32 checkCRC, int32 verbosity, void *decBufBase, int64 decBufSize, void *fpCallback, void *cbUserData, void *decoderMemory, int64 decoderMemorySize, int32 threadPhase)',
);

function oodleDecompress(compressed: Uint8Array, rawSize: number): Uint8Array {
  const out = new Uint8Array(rawSize);
  const written = Number(
    OodleLZ_Decompress(compressed, BigInt(compressed.length), out, BigInt(rawSize), 1, 0, 0, null, 0n, null, null, null, 0n, 3),
  );
  if (written !== rawSize) throw new Error(`Oodle 解压失败:写出 ${written},期望 ${rawSize}`);
  return out;
}

// ———— DCX 头解析(KRAK)————
function dcxDecompress(bytes: Uint8Array): Uint8Array {
  const ascii = (o: number, n: number) => new TextDecoder('latin1').decode(bytes.subarray(o, o + n));
  if (ascii(0, 4) !== 'DCX\0') throw new Error('不是 DCX 文件');
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const dcsOffset = dv.getUint32(0x08, false);
  const dcpOffset = dv.getUint32(0x0c, false);
  const dataOffset = dv.getUint32(0x14, false);
  const uncompressedSize = dv.getUint32(dcsOffset + 4, false);
  const compressedSize = dv.getUint32(dcsOffset + 8, false);
  const format = ascii(dcpOffset + 4, 4);
  if (format !== 'KRAK') throw new Error(`暂不支持 DCX 格式 ${format}`);
  const end = compressedSize > 0 ? dataOffset + compressedSize : bytes.length;
  return oodleDecompress(bytes.subarray(dataOffset, end), uncompressedSize);
}

// ———— msgbnd(.dcx)→ { fmg名: Map<id, string> } ————
function readMsgBnd(path: string): Map<string, Map<number, string>> {
  const raw = new Uint8Array(readFileSync(path));
  const bnd = dcxDecompress(raw);
  const entries = Effect.runSync(parseBnd4(bnd));
  const result = new Map<string, Map<number, string>>();
  for (const entry of entries) {
    if (!entry.name) continue;
    const file = entry.name.slice(entry.name.lastIndexOf('\\') + 1); // e.g. NpcName_dlc02.fmg
    result.set(file, Effect.runSync(parseFmg(entry.bytes)));
  }
  return result;
}

function readMsgBundle(
  lang: 'engus' | 'zhocn',
  bundle: 'item' | 'menu',
  suffix = '',
): Map<string, Map<number, string>> {
  const path = join(GAME, 'msg', lang, `${bundle}${suffix}.msgbnd.dcx`);
  return existsSync(path) ? readMsgBnd(path) : new Map<string, Map<number, string>>();
}

function mergeMsgBundles(...bundles: Map<string, Map<number, string>>[]): Map<string, Map<number, string>> {
  const result = new Map<string, Map<number, string>>();
  for (const bundle of bundles) {
    for (const [file, entries] of bundle) {
      if (!result.has(file)) result.set(file, entries);
    }
  }
  return result;
}

function clean(s: string): string {
  return s.replace(/\r?\n/g, ' ').trim();
}

/** id 对齐合并:en(id→英文) × zh(id→中文) → Record<英文, 中文>。 */
function joinById(
  pairs: { en: Map<number, string> | undefined; zh: Map<number, string> | undefined }[],
  label: string,
): Record<string, string> {
  const out: Record<string, string> = {};
  const conflicts: string[] = [];
  for (const { en, zh } of pairs) {
    if (!en || !zh) continue;
    for (const [id, enRaw] of en) {
      const zhRaw = zh.get(id);
      if (!zhRaw) continue;
      const enName = clean(enRaw);
      const zhName = clean(zhRaw);
      if (!enName || !zhName || enName === '%null%' || zhName.includes('%null%')) continue;
      if (/^\[ERROR\]|^%/.test(enName)) continue;
      const existing = out[enName];
      if (existing && existing !== zhName) {
        conflicts.push(`${enName}: "${existing}" vs "${zhName}"`);
        continue; // 先到先得
      }
      out[enName] = zhName;
    }
  }
  if (conflicts.length) {
    console.log(`[${label}] ${conflicts.length} 处同名不同译(保留先出现者),示例:`);
    for (const c of conflicts.slice(0, 8)) console.log('  ' + c);
  }
  return out;
}

// ———— 收集 ————
console.log('读取原版 Game/msg 官方文本…');
const baseItemEn = readMsgBundle('engus', 'item');
const baseItemZh = readMsgBundle('zhocn', 'item');
const baseMenuEn = readMsgBundle('engus', 'menu');
const baseMenuZh = readMsgBundle('zhocn', 'menu');

console.log('解包原版 DLC 官方文本(item/menu_dlc01 + dlc02,Oodle)…');
const dlcItemEn = mergeMsgBundles(readMsgBundle('engus', 'item', '_dlc01'), readMsgBundle('engus', 'item', '_dlc02'));
const dlcItemZh = mergeMsgBundles(readMsgBundle('zhocn', 'item', '_dlc01'), readMsgBundle('zhocn', 'item', '_dlc02'));
const dlcMenuEn = mergeMsgBundles(readMsgBundle('engus', 'menu', '_dlc01'), readMsgBundle('engus', 'menu', '_dlc02'));
const dlcMenuZh = mergeMsgBundles(readMsgBundle('zhocn', 'menu', '_dlc01'), readMsgBundle('zhocn', 'menu', '_dlc02'));

console.log('DLC item 包内 FMG:', [...dlcItemEn.keys()].join(', ') || '(无)');

const pick = (m: Map<string, Map<number, string>>, name: string) => m.get(name);

const NPC = joinById(
  [
    { en: pick(baseItemEn, 'NpcName.fmg'), zh: pick(baseItemZh, 'NpcName.fmg') },
    { en: pick(dlcItemEn, 'NpcName_dlc02.fmg'), zh: pick(dlcItemZh, 'NpcName_dlc02.fmg') },
    { en: pick(dlcItemEn, 'NpcName_dlc01.fmg'), zh: pick(dlcItemZh, 'NpcName_dlc01.fmg') },
  ],
  'NpcName',
);

const PLACE = joinById(
  [
    { en: pick(baseItemEn, 'PlaceName.fmg'), zh: pick(baseItemZh, 'PlaceName.fmg') },
    { en: pick(baseMenuEn, 'GR_MenuText.fmg'), zh: pick(baseMenuZh, 'GR_MenuText.fmg') },
    { en: pick(dlcMenuEn, 'GR_MenuText_dlc01.fmg'), zh: pick(dlcMenuZh, 'GR_MenuText_dlc01.fmg') },
    { en: pick(dlcItemEn, 'PlaceName_dlc02.fmg'), zh: pick(dlcItemZh, 'PlaceName_dlc02.fmg') },
    { en: pick(dlcItemEn, 'PlaceName_dlc01.fmg'), zh: pick(dlcItemZh, 'PlaceName_dlc01.fmg') },
    { en: pick(dlcMenuEn, 'GR_MenuText_dlc02.fmg'), zh: pick(dlcMenuZh, 'GR_MenuText_dlc02.fmg') },
  ],
  'PlaceName',
);

console.log(`NpcName 映射 ${Object.keys(NPC).length} 条,PlaceName 映射 ${Object.keys(PLACE).length} 条`);

// 抽查
for (const probe of ['Messmer the Impaler', 'Midra, Lord of Frenzied Flame', 'Promised Consort Radahn', 'Radahn, Consort of Miquella', 'Bayle the Dread', 'Rellana, Twin Moon Knight', 'Divine Beast Dancing Lion', 'Commander Gaius', 'Metyr, Mother of Fingers', 'Romina, Saint of the Bud', 'Starscourge Radahn', 'Malenia, Blade of Miquella']) {
  console.log(`  ${probe} → ${NPC[probe] ?? '(缺)'}`);
}
for (const probe of ['Belurat, Tower Settlement', 'Enir-Ilim', 'Shadow Keep', 'Scadu Altus', 'Gravesite Plain', 'Abyssal Woods', 'Cerulean Coast', 'Stormveil Castle']) {
  console.log(`  ${probe} → ${PLACE[probe] ?? '(缺)'}`);
}

const sortRecord = (r: Record<string, string>) =>
  Object.fromEntries(Object.entries(r).sort((a, b) => a[0].localeCompare(b[0])));

const banner = `// @generated by scripts/extract-official-zh.ts — 请勿手改。
// 来源:原版游戏 Game/msg/{engus,zhocn} msgbnd.dcx(Smithbox Text Editor 对应文本源)。
`;
const body =
  banner +
  `export const OFFICIAL_NPC_ZH: Readonly<Record<string, string>> = ${JSON.stringify(sortRecord(NPC))};\n\n` +
  `export const OFFICIAL_PLACE_ZH: Readonly<Record<string, string>> = ${JSON.stringify(sortRecord(PLACE))};\n`;

writeFileSync(OUT, body, 'utf-8');
console.log(`已写出 ${OUT}`);

// ———— 物品官方名(id → 简中,按类别;类别名对齐 translations.ts 的 CATS_BY_KIND) ————
const ITEM_FMG_TO_CATEGORY: Record<string, string> = {
  WeaponName: 'weapons-shields',
  ProtectorName: 'armor',
  AccessoryName: 'talismans',
  GemName: 'ashes-of-war',
  GoodsName: 'tools',
  MagicName: 'spells',
};

function mergeZhById(target: Map<number, string>, source: Map<number, string> | undefined): void {
  if (!source) return;
  for (const [id, raw] of source) {
    const zh = clean(raw);
    if (!zh || zh.includes('%null%') || /^\[ERROR\]/.test(zh)) continue;
    if (!target.has(id)) target.set(id, zh);
  }
}

const itemsByCategory = new Map<string, Map<number, string>>();
for (const [fmgBase, category] of Object.entries(ITEM_FMG_TO_CATEGORY)) {
  const merged = new Map<number, string>();
  // 顺序:DLC02 > DLC01 > DLC包内基础表 > 本体(先到先得,新内容优先)
  mergeZhById(merged, pick(dlcItemZh, `${fmgBase}_dlc02.fmg`));
  mergeZhById(merged, pick(dlcItemZh, `${fmgBase}_dlc01.fmg`));
  mergeZhById(merged, pick(dlcItemZh, `${fmgBase}.fmg`));
  mergeZhById(merged, pick(baseItemZh, `${fmgBase}.fmg`));
  itemsByCategory.set(category, merged);
  console.log(`物品官方名 [${category}] ${merged.size} 条`);
}

const ITEMS_OUT = join(ROOT, 'src/renderer/src/data/zh/official-items.generated.ts');
const itemsBody =
  banner +
  `export const OFFICIAL_ITEM_ZH: Readonly<Record<string, Readonly<Record<number, string>>>> = {` +
  [...itemsByCategory.entries()]
    .map(([cat, map]) => {
      const obj = Object.fromEntries([...map.entries()].sort((a, b) => a[0] - b[0]));
      return `${JSON.stringify(cat)}:${JSON.stringify(obj)}`;
    })
    .join(',') +
  `};\n`;
writeFileSync(ITEMS_OUT, itemsBody, 'utf-8');
console.log(`已写出 ${ITEMS_OUT}`);

// 抽查骨灰
const tools = itemsByCategory.get('tools')!;
for (const [id, label] of [[229000, 'Mimic Tear ash?'], [260000, 'Dung Eater Puppet'], [200000, 'Black Knife Tiche']] as [number, string][]) {
  console.log(`  goods ${id}(${label}) → ${tools.get(id) ?? '(缺)'}`);
}
