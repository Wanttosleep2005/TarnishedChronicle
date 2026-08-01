/**
 * Audit English -> Simplified Chinese coverage in the extracted Elden Ring
 * message bundles. The audit is ID-based, so duplicate display names do not
 * hide missing text.
 *
 * Run:
 *   npx tsx scripts/audit-official-text.ts
 *
 * Override the game directory when needed:
 *   $env:ER_GAME_DIR = 'G:\\SteamLibrary\\steamapps\\common\\ELDEN RING\\Game'
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Effect } from 'effect';
import koffi from 'koffi';
import { parseBnd4 } from '../_reference/elden-ring-compass/packages/extractor/src/formats/bnd4.ts';
import { parseFmg } from '../_reference/elden-ring-compass/packages/extractor/src/formats/fmg.ts';

type Language = 'engus' | 'zhocn';
type Bundle = 'item' | 'menu' | 'ngword';
type Table = Map<string, Map<number, string>>;

const gameDir = process.env.ER_GAME_DIR ?? 'G:\\SteamLibrary\\steamapps\\common\\ELDEN RING\\Game';
const oodle = koffi.load(join(gameDir, 'oo2core_6_win64.dll'));
const decompress = oodle.func(
  'int64 OodleLZ_Decompress(const uint8_t *compBuf, int64 compBufSize, uint8_t *rawBuf, int64 rawLen, int32 fuzzSafe, int32 checkCRC, int32 verbosity, void *decBufBase, int64 decBufSize, void *fpCallback, void *cbUserData, void *decoderMemory, int64 decoderMemorySize, int32 threadPhase)',
);

function oodleDecompress(compressed: Uint8Array, rawSize: number): Uint8Array {
  const output = new Uint8Array(rawSize);
  const written = Number(
    decompress(compressed, BigInt(compressed.length), output, BigInt(rawSize), 1, 0, 0, null, 0n, null, null, null, 0n, 3),
  );
  if (written !== rawSize) throw new Error(`Oodle output ${written}, expected ${rawSize}`);
  return output;
}

function dcxDecompress(bytes: Uint8Array): Uint8Array {
  const ascii = (offset: number, length: number) => Buffer.from(bytes.subarray(offset, offset + length)).toString('latin1');
  if (ascii(0, 4) !== 'DCX\0') throw new Error('Not a DCX file');
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const dcsOffset = view.getUint32(0x08, false);
  const dcpOffset = view.getUint32(0x0c, false);
  const dataOffset = view.getUint32(0x14, false);
  const uncompressedSize = view.getUint32(dcsOffset + 4, false);
  const compressedSize = view.getUint32(dcsOffset + 8, false);
  if (ascii(dcpOffset + 4, 4) !== 'KRAK') throw new Error('Unsupported DCX compression');
  const end = compressedSize > 0 ? dataOffset + compressedSize : bytes.length;
  return oodleDecompress(bytes.subarray(dataOffset, end), uncompressedSize);
}

function readBundle(language: Language, bundle: Bundle, suffix = ''): Table {
  const path = join(gameDir, 'msg', language, `${bundle}${suffix}.msgbnd.dcx`);
  if (!existsSync(path)) return new Map();
  const entries = Effect.runSync(parseBnd4(dcxDecompress(new Uint8Array(readFileSync(path)))));
  const result: Table = new Map();
  for (const entry of entries) {
    if (!entry.name) continue;
    const file = entry.name.slice(entry.name.lastIndexOf('\\') + 1);
    result.set(file, Effect.runSync(parseFmg(entry.bytes)));
  }
  return result;
}

function clean(value: string): string {
  return value.replace(/\r?\n/g, ' ').trim();
}

function isUsable(value: string | undefined): value is string {
  if (!value) return false;
  const text = clean(value);
  return text.length > 0 && text !== '%null%' && !/^\[ERROR\]/.test(text);
}

function countUsable(entries: Map<number, string> | undefined): number {
  return entries ? [...entries.values()].filter(isUsable).length : 0;
}

function compareFile(file: string, en: Map<number, string> | undefined, zh: Map<number, string> | undefined) {
  const english = [...(en ?? [])].filter(([, value]) => isUsable(value));
  const missing = english.filter(([id]) => !isUsable(zh?.get(id))).map(([id]) => id);
  const matched = english.length - missing.length;
  return { file, english: english.length, chinese: countUsable(zh), matched, missing };
}

function compareTables(label: string, en: Table, zh: Table, onlySuffix?: string): void {
  const files = [...new Set([...en.keys(), ...zh.keys()])].sort();
  const results = files
    .filter((file) => !onlySuffix || file.endsWith(onlySuffix))
    .map((file) => compareFile(file, en.get(file), zh.get(file)));
  const english = results.reduce((sum, result) => sum + result.english, 0);
  const matched = results.reduce((sum, result) => sum + result.matched, 0);
  console.log(`\n[${label}] files=${results.length}, en=${english}, matched=${matched}, coverage=${english ? ((matched / english) * 100).toFixed(3) : '100.000'}%`);
  for (const result of results.filter((entry) => entry.missing.length > 0)) {
    const sample = result.missing.slice(0, 20).join(', ');
    const suffix = result.missing.length > 20 ? ', ...' : '';
    console.log(`MISSING ${result.file}: en=${result.english}, zh=${result.chinese}, missing=${result.missing.length}`);
    console.log(`  missing IDs: ${sample}${suffix}`);
  }
}

function reportFiles(label: string, en: Table, zh: Table, files: string[]): void {
  console.log(`\n[${label} selected files]`);
  for (const file of files) {
    const result = compareFile(file, en.get(file), zh.get(file));
    console.log(`${file}: en=${result.english}, zh=${result.chinese}, matched=${result.matched}, missing=${result.missing.length}`);
  }
}

function reportTextKeyCoverage(label: string, en: Table, zh: Table, file: string): void {
  const keys = new Map<string, { ids: number[]; zh: Set<string> }>();
  for (const [id, value] of en.get(file) ?? []) {
    if (!isUsable(value)) continue;
    const key = clean(value);
    const entry = keys.get(key) ?? { ids: [], zh: new Set<string>() };
    entry.ids.push(id);
    const translated = zh.get(file)?.get(id);
    if (isUsable(translated)) entry.zh.add(clean(translated));
    keys.set(key, entry);
  }
  const conflicts = [...keys].filter(([, entry]) => entry.zh.size > 1);
  const translated = [...keys.values()].filter((entry) => entry.zh.size > 0).length;
  console.log(`${label} ${file}: IDs=${[...keys.values()].reduce((sum, entry) => sum + entry.ids.length, 0)}, unique English=${keys.size}, unique with zh=${translated}, conflicting translations=${conflicts.length}`);
  for (const [key, entry] of conflicts.slice(0, 10)) console.log(`  conflict ${JSON.stringify(key)} IDs=${entry.ids.join(',')}: ${[...entry.zh].join(' / ')}`);
}

function merge(...tables: Table[]): Table {
  const result: Table = new Map();
  for (const table of tables) {
    for (const [file, entries] of table) {
      if (!result.has(file)) result.set(file, entries);
    }
  }
  return result;
}

function readReference(referencePath: string): Table {
  const raw = JSON.parse(readFileSync(referencePath, 'utf8')) as Record<string, Record<string, string>>;
  const result: Table = new Map();
  for (const [filePath, entries] of Object.entries(raw)) {
    const file = filePath.slice(filePath.lastIndexOf('\\') + 1);
    result.set(file, new Map(Object.entries(entries).map(([id, value]) => [Number(id), value])));
  }
  return result;
}

function compareReference(label: string, current: Table, reference: Table): void {
  console.log(`\n[${label} current English vs extracted reference]`);
  for (const [file, entries] of current) {
    const known = reference.get(file);
    if (!known) continue;
    const currentIds = new Set([...entries].filter(([, value]) => isUsable(value)).map(([id]) => id));
    const referenceIds = new Set([...known].filter(([, value]) => isUsable(value)).map(([id]) => id));
    const additions = [...currentIds].filter((id) => !referenceIds.has(id));
    const missing = [...referenceIds].filter((id) => !currentIds.has(id));
    const changed = [...currentIds]
      .filter((id) => referenceIds.has(id) && clean(entries.get(id) ?? '') !== clean(known.get(id) ?? ''))
      .map((id) => ({ id, current: clean(entries.get(id) ?? ''), reference: clean(known.get(id) ?? '') }));
    console.log(`${file}: reference=${referenceIds.size}, current=${currentIds.size}, current-only=${additions.length}, reference-only=${missing.length}`);
    if (additions.length > 0) console.log(`  current-only IDs: ${additions.slice(0, 20).join(', ')}${additions.length > 20 ? ', ...' : ''}`);
    if (missing.length > 0) console.log(`  reference-only IDs: ${missing.slice(0, 20).join(', ')}${missing.length > 20 ? ', ...' : ''}`);
    if (/Name\.fmg$/.test(file) && changed.length > 0) {
      console.log(`  changed names: ${changed.length}`);
      for (const item of changed.slice(0, 12)) console.log(`    ${item.id}: current="${item.current}" | reference="${item.reference}"`);
    }
  }
}

function printMissingNames(label: string, english: Table, chinese: Table, onlySuffix?: string, referenceChinese?: Table): void {
  console.log(`\n[${label} missing name values]`);
  for (const [file, entries] of english) {
    if (!/Name(?:_dlc\d+)?\.fmg$/.test(file)) continue;
    if (onlySuffix && !file.endsWith(onlySuffix)) continue;
    const missing = [...entries].filter(([id, value]) => isUsable(value) && !isUsable(chinese.get(file)?.get(id)));
    if (missing.length === 0) continue;
    console.log(`${file}:`);
    for (const [id, value] of missing) {
      const reference = referenceChinese?.get(file)?.get(id);
      const referenceLabel = isUsable(reference) ? ` | reference zh=${JSON.stringify(clean(reference))}` : '';
      console.log(`  ${id}: ${JSON.stringify(clean(value))}${referenceLabel}`);
    }
  }
}

function printNameDifferences(label: string, english: Table, reference: Table): void {
  console.log(`\n[${label} name values changed from extracted reference]`);
  for (const [file, entries] of english) {
    if (!/Name(?:_dlc\d+)?\.fmg$/.test(file)) continue;
    const known = reference.get(file);
    if (!known) continue;
    const changed = [...entries]
      .filter(([id, value]) => isUsable(value) && isUsable(known.get(id)) && clean(value) !== clean(known.get(id) ?? ''))
      .map(([id, value]) => [id, clean(value), clean(known.get(id) ?? '')] as const);
    if (changed.length === 0) continue;
    console.log(`${file}: ${changed.length} changed values`);
    for (const [id, current, old] of changed) console.log(`  ${id}: current=${JSON.stringify(current)} | reference=${JSON.stringify(old)}`);
  }
}

const baseItemEn = readBundle('engus', 'item');
const baseItemZh = readBundle('zhocn', 'item');
const baseMenuEn = readBundle('engus', 'menu');
const baseMenuZh = readBundle('zhocn', 'menu');
const baseNgwordEn = readBundle('engus', 'ngword');
const baseNgwordZh = readBundle('zhocn', 'ngword');
const dlc01En = merge(readBundle('engus', 'item', '_dlc01'), readBundle('engus', 'menu', '_dlc01'));
const dlc01Zh = merge(readBundle('zhocn', 'item', '_dlc01'), readBundle('zhocn', 'menu', '_dlc01'));
const dlc02En = merge(readBundle('engus', 'item', '_dlc02'), readBundle('engus', 'menu', '_dlc02'));
const dlc02Zh = merge(readBundle('zhocn', 'item', '_dlc02'), readBundle('zhocn', 'menu', '_dlc02'));
const referenceItemEn = readReference(join(import.meta.dirname, '..', '_reference', 'er-msg', 'engus', 'item.msgbnd.dcx.json'));
const referenceItemZh = readReference(join(import.meta.dirname, '..', '_reference', 'er-msg', 'zhocn', 'item.msgbnd.dcx.json'));
const referenceMenuEn = readReference(join(import.meta.dirname, '..', '_reference', 'er-msg', 'engus', 'menu.msgbnd.dcx.json'));
const referenceMenuZh = readReference(join(import.meta.dirname, '..', '_reference', 'er-msg', 'zhocn', 'menu.msgbnd.dcx.json'));

console.log(`Game directory: ${gameDir}`);
compareTables('Base item', baseItemEn, baseItemZh);
compareTables('Base menu', baseMenuEn, baseMenuZh);
compareTables('Base ngword (special filter table)', baseNgwordEn, baseNgwordZh);
compareTables('DLC01 item/menu-only', dlc01En, dlc01Zh, '_dlc01.fmg');
compareTables('DLC02 item/menu-only', dlc02En, dlc02Zh, '_dlc02.fmg');
reportFiles('Base names', baseItemEn, baseItemZh, [
  'NpcName.fmg',
  'PlaceName.fmg',
  'WeaponName.fmg',
  'ProtectorName.fmg',
  'AccessoryName.fmg',
  'GemName.fmg',
  'GoodsName.fmg',
  'ArtsName.fmg',
]);
reportFiles('DLC01 names/places', dlc01En, dlc01Zh, [
  'NpcName_dlc01.fmg',
  'PlaceName_dlc01.fmg',
  'GR_MenuText_dlc01.fmg',
  'WeaponName_dlc01.fmg',
  'ProtectorName_dlc01.fmg',
  'AccessoryName_dlc01.fmg',
  'GemName_dlc01.fmg',
  'GoodsName_dlc01.fmg',
  'ArtsName_dlc01.fmg',
]);
reportFiles('DLC02 names/places', dlc02En, dlc02Zh, [
  'NpcName_dlc02.fmg',
  'PlaceName_dlc02.fmg',
  'GR_MenuText_dlc02.fmg',
]);
reportTextKeyCoverage('Base name key coverage', baseItemEn, baseItemZh, 'NpcName.fmg');
reportTextKeyCoverage('Base name key coverage', baseItemEn, baseItemZh, 'PlaceName.fmg');
reportTextKeyCoverage('DLC01 name key coverage', dlc01En, dlc01Zh, 'NpcName_dlc01.fmg');
reportTextKeyCoverage('DLC01 name key coverage', dlc01En, dlc01Zh, 'PlaceName_dlc01.fmg');
printMissingNames('Base item', baseItemEn, baseItemZh, undefined, referenceItemZh);
printMissingNames('DLC01 item/menu-only', dlc01En, dlc01Zh, '_dlc01.fmg');
printMissingNames('DLC02 item/menu-only', dlc02En, dlc02Zh, '_dlc02.fmg');
printNameDifferences('Base item', baseItemEn, referenceItemEn);
printNameDifferences('Base menu', baseMenuEn, referenceMenuEn);
compareReference(
  'Base item',
  baseItemEn,
  referenceItemEn,
);
compareReference(
  'Base menu',
  baseMenuEn,
  referenceMenuEn,
);
