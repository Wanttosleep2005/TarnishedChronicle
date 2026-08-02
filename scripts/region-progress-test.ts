/**
 * 回归测试：角色总览的“地图区块”只统计 REGIONS 中列出的可见区块，
 * 不能直接用存档原始 unlocked_regions_count（该计数包含联机匹配/隐藏分区）。
 * 运行：npm run test:region-progress
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Effect } from 'effect';
import { REGIONS } from '../src/renderer/src/data/generated/regions.ts';
import { deriveProfile } from '../src/renderer/src/lib/derive.ts';
import { parseSave } from '../src/renderer/src/vendor/save-parser/index.ts';

const fixture = join(import.meta.dirname, '../test-fixtures/ER0000.sl2');
const bytes = readFileSync(fixture);
const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
const save = Effect.runSync(parseSave(buffer));
const slot = save.slots.reduce((a, b) => (a.seconds_played > b.seconds_played ? a : b));
const profile = deriveProfile(slot);
const visibleIds = new Set(REGIONS.map((region) => region.id));
const expected = slot.regions.unlocked_regions.filter((id) => visibleIds.has(id)).length;

if (profile.mapRegionsUnlocked !== expected) {
  throw new Error(`地图区块统计错误: 期望 ${expected}, 实际 ${profile.mapRegionsUnlocked}`);
}
if (profile.mapRegionsUnlocked > REGIONS.length) {
  throw new Error(`地图区块不可能超过可见总数 ${REGIONS.length}: ${profile.mapRegionsUnlocked}`);
}

console.log(
  `角色总览地图区块: ${profile.mapRegionsUnlocked}/${REGIONS.length}（存档原始 ${slot.regions.unlocked_regions_count}）`,
);
