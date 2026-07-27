import { markerToMasterPixel, type MasterPixel } from './map-affine.ts';

export type PlacementType = 'weapon' | 'goods' | 'talisman' | 'protector' | 'gem';

interface PlacementLite {
  mapId: string;
  x: number;
  z: number;
  source: string;
  chance: number;
}

// placements.ts 有 3.4MB,启动时同步解析拖慢首屏;首次调用时再动态加载(独立 chunk)。
let indexPromise: Promise<ReadonlyMap<string, PlacementLite[]>> | null = null;

function getIndex(): Promise<ReadonlyMap<string, PlacementLite[]>> {
  if (!indexPromise) {
    indexPromise = import('../data/generated/placements.ts').then(({ PLACEMENTS }) => {
      const map = new Map<string, PlacementLite[]>();
      for (const p of PLACEMENTS) {
        const key = `${p.itemType}:${p.itemId}`;
        const list = map.get(key) ?? [];
        list.push({ mapId: p.mapId, x: p.x, z: p.z, source: p.source, chance: p.chance });
        map.set(key, list);
      }
      return map;
    });
  }
  return indexPromise;
}

/** 物品在世界中的拾取/掉落位置(优先必得的宝箱/拾取点)。 */
export async function findItemPixel(itemType: PlacementType, itemId: number): Promise<MasterPixel | null> {
  const index = await getIndex();
  const list = index.get(`${itemType}:${itemId}`);
  if (!list || list.length === 0) return null;
  const sorted = [...list].sort((a, b) => {
    const score = (e: PlacementLite) => (e.chance >= 1 ? 0 : 2) + (e.source === 'enemy' ? 1 : 0);
    return score(a) - score(b);
  });
  for (const entry of sorted) {
    const projected = markerToMasterPixel(entry.mapId, entry.x, entry.z);
    if (projected) return projected;
  }
  return null;
}
