/**
 * Boss 元数据,移植自 elden-ring-compass 的 boss-meta.ts(wiki 校验的策展数据):
 * 击杀旗标 → 追忆奖励物品(拿它的官方图标当 Boss 头像)、半神/卢恩持有者/传说分级、
 * 以及 mapId → 可读地点名(由 REGIONS 推导,再走官方中文)。
 */
import { GOODS } from '../data/generated/goods.ts';
import { GRACE_PINS } from '../data/generated/grace-pins.ts';
import { GRACES } from '../data/generated/graces.ts';
import { REGIONS } from '../data/generated/regions.ts';
import { iconThumbUrl } from '../data/images.ts';
import { zhItemNameByKind, zhPlace } from '../data/zh/translations.ts';
import { markerToMasterPixel } from './map-affine.ts';

export type BossBadge = 'demigod' | 'shardbearer' | 'legend' | 'great-enemy' | 'field' | 'dungeon';

/** 击杀旗标 → 奖励物品 id(追忆,或贝勒之心)。 */
const BOSS_REWARD_GOOD_BY_FLAG: ReadonlyMap<number, number> = new Map([
  [10000800, 2950],
  [11000800, 2952],
  [11050800, 2957],
  [12030850, 2960],
  [12040800, 2964],
  [12050800, 2955],
  [12090800, 2962],
  [13000800, 2956],
  [13000830, 2958],
  [14000800, 2959],
  [15000800, 2954],
  [16000800, 2953],
  [19000800, 2963],
  [1052520800, 2961],
  [1252380800, 2951],
  [20000800, 2002905],
  [20010800, 2002907],
  [20020800, 2002902],
  [21010800, 2002901],
  [22000800, 2002910],
  [25000800, 2002909],
  [28000800, 2002908],
  [2044450800, 2002904],
  [2048440800, 2002903],
  [2049480800, 2002900],
  [2050480800, 2002902],
  [2054390800, 2008011],
]);

const DEMIGOD_FLAGS: ReadonlySet<number> = new Set([
  10000800, 11000800, 11050800, 12050800, 16000800, 15000800, 1252380800, 21010800, 20010800,
]);

const SHARDBEARER_FLAGS: ReadonlySet<number> = new Set([
  10000800, 1252380800, 16000800, 11000800, 12050800, 15000800, 14000800,
]);

const goodById = new Map(GOODS.map((g) => [g.id, g]));

export function bossReward(flag: number): { zh: string; iconUrl: string | undefined } | undefined {
  const goodId = BOSS_REWARD_GOOD_BY_FLAG.get(flag);
  if (goodId === undefined) return undefined;
  const good = goodById.get(goodId);
  if (!good) return undefined;
  return {
    zh: zhItemNameByKind('goods', goodId) ?? good.name,
    iconUrl: iconThumbUrl(good.icon),
  };
}

export function bossBadgesFor(flag: number, mapId: string): BossBadge[] {
  const badges: BossBadge[] = [];
  if (DEMIGOD_FLAGS.has(flag)) badges.push('demigod');
  if (SHARDBEARER_FLAGS.has(flag)) badges.push('shardbearer');
  if (badges.length === 0 && BOSS_REWARD_GOOD_BY_FLAG.has(flag)) badges.push('legend');
  if (badges.length > 0) return badges;

  const area = Number(/^m(\d+)_/.exec(mapId)?.[1] ?? -1);
  if (area === 60 || area === 61) return ['field'];
  if ([30, 31, 32, 34, 39, 40, 41, 43].includes(area)) return ['dungeon'];
  return ['great-enemy'];
}

export const BADGE_ZH: Record<BossBadge, string> = {
  demigod: '半神',
  shardbearer: '卢恩持有者',
  legend: '传说',
  'great-enemy': '大型强敌',
  field: '野外强敌',
  dungeon: '地牢强敌',
};

// ———— mapId → 可读地点(REGIONS 按 area_block 推导,compass 同源算法) ————
const REGION_NAME_BY_BLOCK: ReadonlyMap<string, string> = (() => {
  const byBlock = new Map<string, { name: string; area: string | null }[]>();
  for (const r of REGIONS) {
    const area = Math.floor(r.id / 100000);
    const block = Math.floor((r.id % 100000) / 1000);
    const key = `${area}_${block}`;
    const cur = byBlock.get(key);
    if (cur) cur.push({ name: r.name, area: r.area });
    else byBlock.set(key, [{ name: r.name, area: r.area }]);
  }
  const mode = (xs: (string | null)[]): string | undefined => {
    const counts = new Map<string, number>();
    for (const x of xs) if (x) counts.set(x, (counts.get(x) ?? 0) + 1);
    let best: string | undefined;
    let bestN = 0;
    for (const [k, n] of counts) {
      if (n > bestN) {
        best = k;
        bestN = n;
      }
    }
    return best;
  };
  const out = new Map<string, string>();
  for (const [key, regions] of byBlock) {
    const first = regions[0];
    if (!first) continue;
    const names = new Set(regions.map((r) => r.name));
    const label = names.size === 1 ? first.name : (mode(regions.map((r) => r.area)) ?? first.name);
    out.set(key, label);
  }
  return out;
})();

const AREA_FALLBACK: Record<number, string> = {
  60: '交界地(野外)',
  61: '幽影之地(野外)',
};

/** REGIONS 不覆盖的传统区块兜底(DLC 传统地图等)。 */
const LEGACY_FALLBACK: Record<string, string> = {
  m10: '史东薇尔城 / 候王礼拜堂',
  m12: '地底世界',
  m13: '逐渐崩毁的法姆·亚兹拉',
  m19: '石舞台',
  m20: '“塔之镇”贝瑞特 / 艾尼尔·伊利姆',
  m21: '幽影城',
  m22: '石棺大洞',
  m25: '指头遗迹',
  m28: '谷底森林 / 米德拉府邸',
};

/** 不能从传统地图区块可靠推导的剧情场景与已复核的易错地点。 */
const BOSS_PLACE_BY_FLAG: Readonly<Record<number, string>> = {
  10010800: '候王礼拜堂',
  12010800: '安瑟尔河 · 诺克史黛拉',
  12010850: '安瑟尔河',
  12020390: '深根底层',
  12020800: '希芙拉河 · 导水桥',
  12020830: '希芙拉河',
  12020850: '永恒之城诺克隆恩',
  12030800: '深根底层',
  12030850: '深根底层 · 死王子宝座',
  12040800: '腐败湖 · 大回廊深处',
  12050800: '蒙格温王朝庙',
  12080800: '希芙拉河 · 祖灵森林',
  12090800: '永恒之城诺克隆恩 · 祖灵森林',
  13000800: '逐渐崩毁的法姆·亚兹拉',
  13000830: '逐渐崩毁的法姆·亚兹拉',
  13000850: '逐渐崩毁的法姆·亚兹拉',
  19000800: '石舞台',
  30100800: '亚雷萨英雄墓地',
  30120800: '红狮子城',
  32050800: '学院结晶洞窟',
  1043530800: '交界地 · 多地出现',
  20000800: '“塔之镇”贝瑞特',
  20010800: '艾尼尔·伊利姆 · 神之门',
  20010850: '艾尼尔·伊利姆 · 净身厅',
  21000850: '幽影城 · 正门',
  21010800: '幽影城 · 暗室',
  22000800: '石棺大洞',
  25000800: '指头遗迹 · 密亚指头遗迹',
  28000800: '米德拉府邸',
  2044450800: '花蕾教堂',
  2048440800: '恩希斯城',
  2049410800: '尖刺山',
  2049480800: '幽影城 · 后门',
  2050480800: '幽影树的树脚',
  2051450800: '玛努斯·美特大教堂',
  2052400800: '尖刺山',
  2052430800: '暗光地下墓地',
  2054390800: '尖刺山 · 山顶',
  2054390850: '尖刺山',
};

// 大地图 Boss 定位:最近赐福的所属地区(带母图像素坐标的赐福索引)
const graceRegionPixels: readonly { px: number; py: number; master: string; region: string }[] = (() => {
  const byEntity = new Map(GRACES.map((g) => [g.bonfireEntityId, g]));
  const rows: { px: number; py: number; master: string; region: string }[] = [];
  for (const pin of GRACE_PINS) {
    const grace = byEntity.get(pin.entityId);
    if (!grace?.region) continue;
    const projected = markerToMasterPixel(pin.mapId, pin.x, pin.z);
    if (projected) rows.push({ px: projected.px, py: projected.py, master: projected.master, region: grace.region });
  }
  return rows;
})();

/** 竞技场位置 → 官方中文地点名(大地图按最近赐福的地区精确归属)。 */
export function bossPlaceZh(mapId: string, x = 0, z = 0, defeatFlagId?: number): string {
  if (defeatFlagId !== undefined) {
    const curated = BOSS_PLACE_BY_FLAG[defeatFlagId];
    if (curated) return curated;
  }
  const m = /^m(\d+)_(\d+)_/.exec(mapId);
  if (!m) return '其他地点';
  const area = Number(m[1]);
  const block = Number(m[2]);

  if (area === 60 || area === 61) {
    const projected = markerToMasterPixel(mapId, x, z);
    if (projected) {
      let best: string | null = null;
      let bestDist = Infinity;
      for (const grace of graceRegionPixels) {
        if (grace.master !== projected.master) continue;
        const d = (grace.px - projected.px) ** 2 + (grace.py - projected.py) ** 2;
        if (d < bestDist) {
          bestDist = d;
          best = grace.region;
        }
      }
      // 3000 世界单位内视为同地区,否则回退"野外"
      if (best && bestDist < 3000 * 3000) return zhPlace(best) ?? best;
    }
    return AREA_FALLBACK[area] ?? '野外';
  }

  const en = REGION_NAME_BY_BLOCK.get(`${area}_${block}`);
  if (en) return zhPlace(en) ?? en;
  return LEGACY_FALLBACK[mapId.slice(0, 3)] ?? AREA_FALLBACK[area] ?? '其他地点';
}
