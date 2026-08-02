import { zhItemNameByKind } from '../data/zh/translations.ts';

export const WHETBLADE_GOODS_IDS = {
  whetstoneKnife: 8590,
  iron: 8970,
  redHot: 8971,
  sanctified: 8972,
  glintstone: 8973,
  black: 8974,
} as const;

export const AFFINITY_OFFSET_TO_WHETBLADE: Readonly<Record<number, number>> = {
  0: WHETBLADE_GOODS_IDS.whetstoneKnife,
  100: WHETBLADE_GOODS_IDS.iron,
  200: WHETBLADE_GOODS_IDS.iron,
  300: WHETBLADE_GOODS_IDS.iron,
  400: WHETBLADE_GOODS_IDS.redHot,
  500: WHETBLADE_GOODS_IDS.redHot,
  600: WHETBLADE_GOODS_IDS.sanctified,
  700: WHETBLADE_GOODS_IDS.sanctified,
  800: WHETBLADE_GOODS_IDS.glintstone,
  900: WHETBLADE_GOODS_IDS.glintstone,
  1000: WHETBLADE_GOODS_IDS.black,
  1100: WHETBLADE_GOODS_IDS.black,
  1200: WHETBLADE_GOODS_IDS.black,
};

export function whetbladeForAffinity(affinityOffset: number): number | null {
  return AFFINITY_OFFSET_TO_WHETBLADE[affinityOffset] ?? null;
}

export function whetbladeNameForAffinity(affinityOffset: number): string | null {
  const whetbladeId = whetbladeForAffinity(affinityOffset);
  return whetbladeId === null ? null : zhItemNameByKind('goods', whetbladeId);
}

export function affinityAvailableForSave(
  affinityOffset: number,
  ownedGoodsIds: ReadonlySet<number>,
): boolean {
  const whetbladeId = whetbladeForAffinity(affinityOffset);
  return whetbladeId === null || ownedGoodsIds.has(whetbladeId);
}
