/** 黑暗之魂 3 派生逻辑:属性官中名、升魂成本、流派推断。 */
import type { Ds3Stats } from '../../../shared/contracts';

/** 九维属性官方简中名(游戏内角色状态页顺序)。 */
export const DS3_STAT_ZH: { key: keyof Ds3Stats; zh: string; en: string }[] = [
  { key: 'vigor', zh: '生命力', en: 'Vigor' },
  { key: 'attunement', zh: '集中力', en: 'Attunement' },
  { key: 'endurance', zh: '持久力', en: 'Endurance' },
  { key: 'vitality', zh: '体格', en: 'Vitality' },
  { key: 'strength', zh: '力气', en: 'Strength' },
  { key: 'dexterity', zh: '敏捷', en: 'Dexterity' },
  { key: 'intelligence', zh: '智力', en: 'Intelligence' },
  { key: 'faith', zh: '信仰', en: 'Faith' },
  { key: 'luck', zh: '运气', en: 'Luck' },
];

// 升到 2~12 级的固定成本(Fextralife 核实);13 级起用官式公式
const EARLY_COST = [0, 0, 673, 689, 706, 723, 740, 757, 775, 793, 811, 829, 847];

/** 升到 level 级所需灵魂。 */
export function soulCost(level: number): number {
  if (level < 2) return 0;
  if (level <= 12) return EARLY_COST[level];
  return Math.floor(0.02 * level ** 3 + 3.06 * level ** 2 + 105.6 * level - 895);
}

/** 从 from 级升到 to 级的总灵魂。 */
export function soulCostRange(from: number, to: number): number {
  let total = 0;
  for (let l = from + 1; l <= to; l++) total += soulCost(l);
  return total;
}

/** 社区公认软上限(参考值,非官方数据)。 */
export const SOFTCAPS: Partial<Record<keyof Ds3Stats, string>> = {
  vigor: '27 / 44',
  attunement: '35(FP)',
  endurance: '40',
  vitality: '40',
  strength: '40 / 60',
  dexterity: '40 / 60',
  intelligence: '40 / 60',
  faith: '40 / 60',
  luck: '40',
};

/** 由属性分布推断的流派标签(描述性,非游戏文本)。 */
export function buildArchetype(stats: Ds3Stats): string {
  const { strength: str, dexterity: dex, intelligence: int, faith: fth, luck } = stats;
  const offense = Math.max(str, dex, int, fth, luck);
  if (offense < 20) return '初火之旅';
  if (int >= 30 && fth >= 30) return '咒术之道';
  if (int === offense) return '魔法师';
  if (fth === offense) return '信仰洗礼';
  if (luck === offense) return '天运豪赌';
  if (Math.abs(str - dex) <= 5 && str >= 30) return '力敏双修';
  if (str === offense) return '力量猛汉';
  return '技巧剑士';
}

export function formatSouls(value: number): string {
  return value.toLocaleString('zh-CN');
}
