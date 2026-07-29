/**
 * 中文本地化层,优先级从高到低:
 * 1. official-names.generated.ts —— 游戏官方 zhoCN 文本(本体 + 黄金树幽影),最权威
 * 2. progress-translations.generated.ts —— 旧项目社区对照表(补官方文本没有的条目)
 * 3. 本文件少量补丁 —— compass 自造的变体名(Duo/括号后缀)与消歧偏好
 * - inventory-catalog.generated.ts:物品 ID → 官方简中名
 */
import { INVENTORY_CATALOG } from './inventory-catalog.generated.ts';
import { OFFICIAL_ITEM_ZH } from './official-items.generated.ts';
import { OFFICIAL_NPC_ZH, OFFICIAL_PLACE_ZH } from './official-names.generated.ts';
import {
  BOSS_TRANSLATIONS as GEN_BOSS,
  PLACE_TRANSLATIONS as GEN_PLACE,
} from './progress-translations.generated.ts';

/**
 * compass 数据里的自造变体名(官方文本没有的组合/后缀写法),以及显示偏好。
 * 注意:凡官方文本已覆盖的英文名,一律不要写在这里。
 */
const BOSS_PATCH: Readonly<Record<string, string>> = {
  // compass 把 DLC 最终 Boss 记为二阶段名(官方=“米凯拉的王”拉塔恩),
  // 但玩家通称一阶段官方名“约定之王”,按后者显示。
  'Radahn, Consort of Miquella': '“约定之王”拉塔恩',
  // 组合名(官方文本只有单体名)
  'Nox Swordstress & Nox Priest': '诺克斯剑士与诺克斯修士',
  'Crucible Knight & Misbegotten Warrior': '熔炉骑士与混种战士',
};

/** 提取器未能命名的 Boss(name=null),按击杀旗标补官方中文名。 */
export const BOSS_FLAG_ZH: Readonly<Record<number, string>> = {
  1252380800: '“碎星”拉塔恩',
  12020390: '“熔炉骑士”志留亚',
};

export const BOSS_ZH: Readonly<Record<string, string>> = {
  ...GEN_BOSS,
  ...OFFICIAL_NPC_ZH,
  ...BOSS_PATCH,
};

export const PLACE_ZH: Readonly<Record<string, string>> = {
  ...GEN_PLACE,
  ...OFFICIAL_PLACE_ZH,
};

function clean(value: string | undefined): string | null {
  if (!value) return null;
  if (value.includes('?')) return null;
  if (value.includes('<font')) return null;
  return value;
}

/** 逐步剥掉 compass 自造后缀,提升命中官方名的概率。 */
function candidates(en: string): string[] {
  const list = [en];
  const noParen = en.replace(/\s*\([^)]*\)\s*$/, '');
  if (noParen !== en) list.push(noParen);
  const noGroup = noParen.replace(/\s+(Duo|Trio)$/, '');
  if (noGroup !== noParen) list.push(noGroup);
  const plural = noGroup.replace(/s$/, '');
  if (plural !== noGroup) list.push(plural);
  return list;
}

/** 英文 boss/NPC 名 → 简中;没有可靠翻译时返回 null。 */
export function zhBoss(en: string | null | undefined): string | null {
  if (!en) return null;
  for (const key of candidates(en)) {
    const hit = clean(BOSS_ZH[key]) ?? clean(PLACE_ZH[key]);
    if (hit) return hit;
  }
  return null;
}

/** 英文地名 → 简中;没有可靠翻译时返回 null。 */
export function zhPlace(en: string | null | undefined): string | null {
  if (!en) return null;
  for (const key of candidates(en)) {
    const hit = clean(PLACE_ZH[key]);
    if (hit) return hit;
  }
  return null;
}

/** 优先中文、回退英文的展示名。 */
export function displayBoss(en: string | null | undefined): string {
  return zhBoss(en) ?? en ?? '未知';
}

export function displayPlace(en: string | null | undefined): string {
  return zhPlace(en) ?? en ?? '未知';
}

const ZH_ITEM_BY_ID: ReadonlyMap<number, string> = new Map(
  INVENTORY_CATALOG.map((item) => [item.id, item.name]),
);

// 不同类别的参数 ID 会重叠(如护符 6060「妲蒂卡的悲哀」vs 祷告 6060「巨人火焰防护」),
// 因此正式查询必须按类别;zhItemName 仅作无类别信息时的兜底。
const ZH_BY_CATEGORY: ReadonlyMap<string, Map<number, string>> = (() => {
  const map = new Map<string, Map<number, string>>();
  for (const item of INVENTORY_CATALOG) {
    let inner = map.get(item.category);
    if (!inner) {
      inner = new Map();
      map.set(item.category, inner);
    }
    if (!inner.has(item.id)) inner.set(item.id, item.name);
  }
  return map;
})();

export type ItemNameKind = 'weapon' | 'armor' | 'talisman' | 'goods' | 'aow';

const CATS_BY_KIND: Readonly<Record<ItemNameKind, string[]>> = {
  weapon: ['weapons-shields', 'ammunition'],
  armor: ['armor'],
  talisman: ['talismans'],
  aow: ['ashes-of-war'],
  goods: [
    'tools',
    'key-items',
    'spells',
    'spirit-ashes',
    'crafting-materials',
    'bolstering-materials',
    'info-items',
    'gestures',
  ],
};

/** 按物品类别查简中名:游戏官方文本优先,社区目录兜底(官方 dump 里法术表残缺等场景)。 */
export function zhItemNameByKind(kind: ItemNameKind, paramId: number): string | null {
  for (const cat of CATS_BY_KIND[kind]) {
    const official = OFFICIAL_ITEM_ZH[cat]?.[paramId];
    if (official) return official;
  }
  for (const cat of CATS_BY_KIND[kind]) {
    const hit = ZH_BY_CATEGORY.get(cat)?.get(paramId);
    if (hit) return hit;
  }
  return null;
}

/** 物品参数 ID → 简中名(无类别信息时的兜底,存在跨类别撞 ID 风险)。 */
export function zhItemName(paramId: number): string | null {
  return ZH_ITEM_BY_ID.get(paramId) ?? null;
}

export const ZH_ARCHETYPE: Readonly<Record<number, string>> = {
  0: '流浪骑士',
  1: '剑士',
  2: '勇者',
  3: '盗贼',
  4: '观星者',
  5: '先知',
  6: '密使',
  7: '武士',
  8: '囚犯',
  9: '一贫如洗',
};

export const ZH_GIFT: Readonly<Record<number, string>> = {
  0: '无',
  1: '绯红琥珀链坠',
  2: '交界地卢恩',
  3: '黄金种子',
  4: '尖牙小恶魔的骨灰',
  5: '龟裂壶',
  6: '石剑钥匙',
  7: '魅惑树枝',
  8: '煮熟的虾子',
  9: '夏玻利利之祸',
};
