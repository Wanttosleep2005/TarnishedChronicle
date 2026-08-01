/**
 * 把角色画像整理成给 LLM 的结构化事实 + 系统提示词。
 * 原则:只给存档里真实推导出的事实,叙事可以润色,数据不许编造。
 */
import { GRACES } from '../data/generated/graces.ts';
import { displayPlace, ZH_ARCHETYPE } from '../data/zh/translations.ts';
import type { BadgeResult } from './badges.ts';
import type { CharacterProfile } from './derive.ts';

const graceByEntityId = new Map(GRACES.map((g) => [g.bonfireEntityId, g]));

export function buildLabel(stats: CharacterProfile['stats']): string {
  const entries: [string, number][] = [
    ['力量', stats.str],
    ['灵巧', stats.dex],
    ['智力', stats.int],
    ['信仰', stats.fai],
    ['感应', stats.arc],
  ];
  entries.sort((a, b) => b[1] - a[1]);
  const [top, second] = entries;
  if (!top || top[1] < 25) return '均衡成长';
  if (second && second[1] >= 25 && top[1] - second[1] <= 10) return `${top[0]}/${second[0]} 双修`;
  return `${top[0]}特化`;
}

export function summarizeFacts(
  profile: CharacterProfile,
  badges: BadgeResult[],
  recentEvents: string[] = [],
): string {
  const p = profile;
  const earnedBadges = badges.filter((b) => b.earned);
  const majorKills = p.bossRows
    .filter((r) => r.defeated && r.boss.runes >= 20000 && r.display !== '未知强敌')
    .sort((a, b) => b.boss.runes - a.boss.runes)
    .slice(0, 18)
    .map((r) => r.display);
  const smallKills = p.bossesDefeated - majorKills.length;

  const regionFoot = new Map<string, { lit: number; total: number }>();
  for (const row of p.graceRows) {
    const cur = regionFoot.get(row.regionZh) ?? { lit: 0, total: 0 };
    cur.total += 1;
    if (row.lit) cur.lit += 1;
    regionFoot.set(row.regionZh, cur);
  }
  const explored = [...regionFoot.entries()]
    .filter(([, v]) => v.lit > 0)
    .sort((a, b) => b[1].lit - a[1].lit)
    .slice(0, 12)
    .map(([region, v]) => `${region}(${v.lit}/${v.total})`);

  const rightHand = p.equipment.armaments
    .filter((a) => a.slotLabel.startsWith('右手') && a.kind !== 'empty')
    .map((a) => a.display + (a.ashOfWar ? `(战灰:${a.ashOfWar})` : ''));
  const leftHand = p.equipment.armaments
    .filter((a) => a.slotLabel.startsWith('左手') && a.kind !== 'empty')
    .map((a) => a.display);
  const armorNames = p.equipment.armor.filter((a) => a.kind !== 'empty').map((a) => a.display);
  const talismanNames = p.equipment.talismans.filter((t) => t.kind !== 'empty').map((t) => t.display);
  const spellNames = p.equipment.spells.map((s) => s.display);

  const lastGrace = graceByEntityId.get(p.lastRestedGraceEntityId);

  const lines = [
    `角色名:${p.name}`,
    `起始职业:${ZH_ARCHETYPE[p.archetype] ?? '未知'}`,
    `等级:${p.level}(生命${p.stats.vig} 集中${p.stats.mnd} 耐力${p.stats.end} 力量${p.stats.str} 灵巧${p.stats.dex} 智力${p.stats.int} 信仰${p.stats.fai} 感应${p.stats.arc})`,
    `build 倾向:${buildLabel(p.stats)}`,
    `游玩时长:${p.hoursPlayed.toFixed(1)} 小时`,
    `死亡次数:${p.deaths}`,
    `累计获得卢恩:${p.runesMemory.toLocaleString('zh-CN')}`,
    `圣杯瓶:红 ${p.flasks.crimson} / 蓝 ${p.flasks.cerulean}`,
    `Boss 讨伐:${p.bossesDefeated}/${p.bossTotal}(重要讨伐:${majorKills.join('、') || '暂无'};另有 ${Math.max(smallKills, 0)} 个次级 Boss)`,
    `赐福点亮:${p.gracesLit}/${p.graceTotal}`,
    `足迹(按赐福分布):${explored.join('、') || '尚未远行'}`,
    `是否进入 DLC 幽影之地:${p.dlcEntered ? '是' : '否'}`,
    `右手武器:${rightHand.join('、') || '空手'}`,
    `左手武器:${leftHand.join('、') || '无'}`,
    `防具:${armorNames.join('、') || '无'}`,
    `护符:${talismanNames.join('、') || '无'}`,
    `记忆法术:${spellNames.join('、') || '无'}`,
    `收集:武器 ${p.ownedWeaponBaseIds.size} 种 / 防具 ${p.ownedArmorIds.size} 件 / 法术 ${p.spellsKnown} 个 / 骨灰 ${p.spiritAshesOwned} 个 / 手势 ${p.gesturesUnlocked} 个`,
    lastGrace ? `最后休息的赐福:${displayPlace(lastGrace.name)}` : null,
    p.bloodstainRunes > 0 ? `未回收的血迹:${p.bloodstainRunes.toLocaleString('zh-CN')} 卢恩` : null,
    p.horseDead ? `存档时灵马托雷特处于阵亡状态` : null,
    `获得的徽章:${earnedBadges.map((b) => `${b.name}(${b.desc}${b.detail ? `;${b.detail}` : ''})`).join('、') || '暂无'}`,
    `已收集大卢恩:${p.greatRunes.filter((r) => r.owned).map((r) => r.zh).join('、') || '无'}`,
    recentEvents.length > 0
      ? `近期战报(本工具快照差分,时间为真实时间):\n${recentEvents.map((e) => `  - ${e}`).join('\n')}`
      : null,
  ];
  return lines.filter((l): l is string => l !== null).join('\n');
}

export const STORY_SYSTEM_PROMPT = `你是圆桌厅堂的编年史官,为每一位褪色者撰写专属的《褪色者编年史》。

写作要求:
1. 全文使用简体中文,600~900 字,语气兼具史诗感与幽默感,像一位见惯生死却嘴上不饶人的老学士。
2. 结构:
   - 一个响亮的编年史标题(为这位玩家量身定制)
   - 正文 3~4 段:旅程叙事,基于给定事实还原这位玩家"怎么玩这个游戏"
   - 「闪光时刻」:列出 3~5 条,从数据中发现这位玩家独特、反常、可爱或硬核之处
   - 「授勋词」:挑 1~2 枚玩家已获得的徽章,写一句颁奖词
3. 铁律:只能使用提供的事实,严禁编造 Boss 击杀、任务、事件;可以合理推测玩家的心情与风格,但涉及数据必须准确。
4. 把死亡次数解读为坚持而非失败;把奇怪的数据组合(高等级低进度、低血量高讨伐等)当作最值得书写的传说。
5. 若玩家死亡极少、进度极快,可以敬畏地称其为"无上意志"级别的存在。
6. 不要输出 markdown 代码块,直接输出正文;小节标题可以用「」标注。`;
