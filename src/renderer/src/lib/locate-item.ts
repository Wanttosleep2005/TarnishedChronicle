import { WEAPON_ACQUISITION_PINS } from '../data/zh/weapon-acquisition-pins.ts';
import { displayPlace } from '../data/zh/translations.ts';
import { markerToMasterPixel, type MasterPixel } from './map-affine.ts';

export type PlacementType = 'weapon' | 'goods' | 'talisman' | 'armor' | 'ash-of-war';

interface PlacementLite {
  mapId: string;
  x: number;
  z: number;
  source: string;
  chance: number;
}

export interface ItemPlacementSource {
  readonly mapId: string;
  readonly x: number;
  readonly z: number;
  readonly source: string;
  readonly chance: number;
  readonly projected: MasterPixel;
  readonly label?: string;
}

interface ReferencePin {
  readonly mapId: string;
  readonly x: number;
  readonly z: number;
  readonly label?: string;
}

function displayReferenceLabel(label: string | undefined): string | undefined {
  if (!label) return undefined;
  const grace = label.match(/^参考赐福[：:]\s*(.+)$/)?.[1];
  return grace ? `参考赐福：${displayPlace(grace)}` : displayPlace(label);
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
export async function findItemSources(itemType: PlacementType, itemId: number): Promise<readonly ItemPlacementSource[]> {
  const index = await getIndex();
  const list = index.get(`${itemType}:${itemId}`);
  if (list && list.length > 0) {
    const sorted = [...list].sort((a, b) => {
      const score = (e: PlacementLite) => (e.chance >= 1 ? 0 : 2) + (e.source === 'enemy' ? 1 : 0);
      return score(a) - score(b);
    });
    return sorted.flatMap((entry) => {
      const projected = markerToMasterPixel(entry.mapId, entry.x, entry.z);
      return projected ? [{ ...entry, projected }] : [];
    });
  }
  // 无地图放置数据的条目：使用获取表按攻略地点推导的参考坐标定位。
  const pin: ReferencePin | undefined = itemType === 'weapon'
    ? WEAPON_ACQUISITION_PINS[itemId]
    : (await import('../data/zh/collection-acquisition.ts')).COLLECTION_ACQUISITION[`${itemType}:${itemId}`]?.pin;
  if (!pin) return [];
  const projected = markerToMasterPixel(pin.mapId, pin.x, pin.z);
  return projected ? [{
    mapId: pin.mapId,
    x: pin.x,
    z: pin.z,
    source: 'guide',
    chance: 1,
    label: displayReferenceLabel(pin.label),
    projected,
  }] : [];
}

/** 物品的首个可靠地图位置,供现有成就页等轻量调用。 */
export async function findItemPixel(itemType: PlacementType, itemId: number): Promise<MasterPixel | null> {
  return (await findItemSources(itemType, itemId))[0]?.projected ?? null;
}
