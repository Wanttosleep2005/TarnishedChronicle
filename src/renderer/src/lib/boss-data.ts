/**
 * Boss 数据修正层:修补 compass 上游的两类问题——
 * ① name:null 的无名条目(能验证的给官中名,验证不了的标"隐藏强敌")
 * ② 个别 DLC Boss 的 mapId/坐标被错录(梅瑟莫、黄金河马被录成了圣树萝蕾塔的位置)
 * 所有下游(讨伐页/地图/快照)一律使用 FIXED_BOSSES。
 */
import { BOSSES, type Boss } from '../data/generated/bosses.ts';
import { GRACE_PINS } from '../data/generated/grace-pins.ts';
import { GRACES } from '../data/generated/graces.ts';
import { OFFICIAL_NPC_ZH } from '../data/zh/official-names.generated.ts';

interface BossFix {
  /** 覆盖显示名(官中)。 */
  zh?: string;
  /** 覆盖位置(mapId + 本地坐标)。 */
  mapId?: string;
  x?: number;
  z?: number;
}

// 幽影城正门赐福的坐标,用来校正被错录到圣树的两个 Boss(近似到所在区域,分组与地图定位都正确)
const shadowKeepAnchor = (() => {
  const grace = GRACES.find((g) => g.region === 'Shadow Keep');
  if (!grace) return null;
  const pin = GRACE_PINS.find((p) => p.entityId === grace.bonfireEntityId);
  return pin ? { mapId: pin.mapId, x: pin.x, z: pin.z } : null;
})();

const FIXES: Readonly<Record<number, BossFix>> = {
  // 已验证的无名 Boss(地点唯一 + 奖励吻合)
  1252380800: { zh: '“碎星”拉塔恩' },
  12020390: { zh: '“熔炉骑士”志留亚' },
  30200810: { zh: '仿身泪滴(圣树秘径)' },
  1038520800: { zh: OFFICIAL_NPC_ZH['Festering Fingerprint Vyke'] ?? '“溃烂指痕”薇克' },
  1043370800: { zh: OFFICIAL_NPC_ZH['Bloody Finger Nerijus'] ?? '“血指”尼力斯' },
  // 0.2 审查补齐(坐标→最近赐福 + 卢恩数与 wiki 精确吻合,官中取自官方表)
  1044320800: { zh: '死之鸟(啜泣半岛)' }, // 摩恩城墙夜晚,3900 卢恩
  1044320850: { zh: '黑夜骑兵(啜泣半岛)' }, // 3400 卢恩
  1254560800: { zh: '死亡仪式鸟(结冰湖)' }, // 巨人山顶结冰湖夜晚
  2050480800: { zh: '坠星兽物(幽影树的树脚)' }, // DLC 望影露台基部弹坑
  2051450800: { zh: OFFICIAL_NPC_ZH['Count Ymir, Mother of Fingers'] ?? '“指头之母”尤弥尔' },
  // 终战:上游只录了艾尔登之兽,补上同场战斗的拉达冈(共用讨伐旗标 19000800)
  19000800: { zh: '“黄金律法”拉达冈 & 艾尔登之兽' },
  // 上游错位修正(原数据用了圣树萝蕾塔的 mapId/坐标)
  21010800: shadowKeepAnchor ? { ...shadowKeepAnchor } : {},
  21000850: shadowKeepAnchor ? { ...shadowKeepAnchor } : {},
};

export interface FixedBoss extends Boss {
  /** 修正后的显示名。 */
  zhOverride: string | null;
  /** 同一击杀旗标对应的可区分地点;近距离重复参数行已合并。 */
  locations: readonly BossLocation[];
}

export interface BossLocation {
  mapId: string;
  x: number;
  y: number;
  z: number;
}

const corrected = BOSSES.map((boss) => {
  const fix = FIXES[boss.defeatFlagId];
  if (!fix) return { ...boss, zhOverride: null };
  return {
    ...boss,
    mapId: fix.mapId ?? boss.mapId,
    x: fix.x ?? boss.x,
    z: fix.z ?? boss.z,
    zhOverride: fix.zh ?? null,
  };
});

/** 官方参数按实体列出;UI 进度必须按击杀旗标唯一化。 */
export const FIXED_BOSSES: readonly FixedBoss[] = (() => {
  const byFlag = new Map<number, FixedBoss>();
  for (const boss of corrected) {
    const location: BossLocation = { mapId: boss.mapId, x: boss.x, y: boss.y, z: boss.z };
    const current = byFlag.get(boss.defeatFlagId);
    if (!current) {
      byFlag.set(boss.defeatFlagId, { ...boss, locations: [location] });
      continue;
    }

    const duplicateLocation = current.locations.some((candidate) => {
      if (candidate.mapId !== location.mapId) return false;
      return Math.hypot(candidate.x - location.x, candidate.z - location.z) < 100;
    });
    if (!duplicateLocation) {
      byFlag.set(boss.defeatFlagId, { ...current, locations: [...current.locations, location] });
    }
  }
  return [...byFlag.values()];
})();
