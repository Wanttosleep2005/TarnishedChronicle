/**
 * 冒烟测试:用 compass 的测试存档验证 解析器 + 事件旗标 + 数据关联 全链路。
 * 运行:npm run smoke
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Effect } from 'effect';
import { parseSave } from '../src/renderer/src/vendor/save-parser/index.ts';
import { BOSSES } from '../src/renderer/src/data/generated/bosses.ts';
import { GRACES } from '../src/renderer/src/data/generated/graces.ts';
import { eventFlagOffset } from '../src/renderer/src/data/generated/event-flags.ts';
import { ZH_ARCHETYPE, displayBoss, zhItemName } from '../src/renderer/src/data/zh/translations.ts';

function isFlagSet(flags: Uint8Array, flagId: number): boolean {
  const offset = eventFlagOffset(flagId);
  if (!offset) return false;
  const [byteOffset, bitPos] = offset;
  return ((flags[byteOffset] ?? 0) & (1 << bitPos)) !== 0;
}

const fixture = join(import.meta.dirname, '../test-fixtures/ER0000.sl2');
const bytes = readFileSync(fixture);
const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);

const started = performance.now();
const save = Effect.runSync(parseSave(buffer as ArrayBuffer));
const elapsed = (performance.now() - started).toFixed(1);

console.log(`解析成功,用时 ${elapsed}ms`);
console.log(`Steam ID: ${save.global_steam_id}`);
console.log(`角色槽位: ${save.slots.length}`);

for (const slot of save.slots) {
  const p = slot.player_game_data;
  const flags = slot.event_flags.flags;
  const defeated = BOSSES.filter((b) => isFlagSet(flags, b.defeatFlagId));
  const lit = GRACES.filter((g) => isFlagSet(flags, g.flagId));
  const hours = (slot.seconds_played / 3600).toFixed(1);

  console.log('----------------------------------------');
  console.log(`角色: ${p.character_name}  等级 ${p.level}  职业 ${ZH_ARCHETYPE[p.arche_type] ?? p.arche_type}`);
  console.log(`游玩 ${hours} 小时  死亡 ${slot.deaths} 次  累计卢恩 ${p.soulsmemory.toLocaleString()}`);
  console.log(`八维: 生${p.vigor} 集${p.mind} 耐${p.endurance} 力${p.strength} 敏${p.dexterity} 智${p.intelligence} 信${p.faith} 感${p.arcane}`);
  console.log(`圣杯瓶: 红${p.max_crimson_flask_count} 蓝${p.max_cerulean_flask_count}`);
  console.log(`Boss 击杀: ${defeated.length}/${BOSSES.length}  赐福: ${lit.length}/${GRACES.length}  地区解锁: ${slot.regions.unlocked_regions_count}`);
  console.log(`DLC 进入: ${slot.dlc.shadow_of_erdtree}`);
  console.log(`最近击败示例: ${defeated.slice(0, 5).map((b) => displayBoss(b.name)).join('、')}`);

  const firstWeapon = slot.chr_asm2.right_hand_armaments[0];
  const gaItem = slot.ga_items.find((g) => g.gaitem_handle === firstWeapon);
  if (gaItem) {
    const baseId = gaItem.item_id - (gaItem.item_id % 100);
    console.log(`右手武器 item_id=${gaItem.item_id} 中文名=${zhItemName(baseId) ?? '(未收录)'} 强化+${gaItem.item_id % 100}`);
  }
}

// ———— 完整推导链验证(画像 → 徽章 → 成就 → 故事档案) ————
const { deriveProfile } = await import('../src/renderer/src/lib/derive.ts');
const { deriveBadges } = await import('../src/renderer/src/lib/badges.ts');
const { deriveAchievements } = await import('../src/renderer/src/lib/achievements.ts');
const { summarizeFacts } = await import('../src/renderer/src/lib/story-profile.ts');

const target = save.slots.reduce((a, b) => (a.seconds_played > b.seconds_played ? a : b));
const profile = deriveProfile(target);
const badges = deriveBadges(profile);
const achievements = deriveAchievements(profile);

console.log('========================================');
console.log(`推导链验证(取时长最长的角色「${profile.name}」):`);
console.log(`徽章: ${badges.filter((b) => b.earned).length}/${badges.length} 已获得 → ${badges.filter((b) => b.earned).map((b) => b.name).join('、')}`);
console.log(`Boss 成就推演: ${achievements.bossKills.filter((b) => b.done).length}/${achievements.bossKills.length};数据未匹配: ${achievements.bossKills.filter((b) => !b.available).map((b) => b.zh).join('、') || '无'}`);
for (const col of achievements.collections) {
  console.log(`收集成就「${col.zh}」: ${col.have}/${col.total}${col.missing.length ? ` 缺:${col.missing.slice(0, 3).join('、')}${col.missing.length > 3 ? '…' : ''}` : ''}`);
}
console.log('———— 故事事实档案 ————');
console.log(summarizeFacts(profile, badges));
