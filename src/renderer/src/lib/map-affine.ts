/**
 * 世界坐标 → 母图像素投影,改编自 elden-ring-compass 的 map-affine.ts
 * (1px = 1 世界单位;m60/m61 瓦片网格 + 传统地牢经 WORLD_MAP_LEGACY_CONV 平移)。
 */
import { WORLD_MAP_LEGACY_CONV, type LegacyConv } from '../data/generated/world-map-legacy-conv.ts';

const OFFSET_X = -7168;
const OFFSET_Y = 16640;

export type MasterId = 'M00' | 'M01' | 'M10' | 'M11';

export const MASTER_LABEL: Record<MasterId, string> = {
  M00: '交界地 · 地表',
  M01: '交界地 · 地底',
  M10: '幽影之地 · 地表',
  M11: '幽影之地 · 地底',
};

export interface MasterPixel {
  master: MasterId;
  px: number;
  py: number;
}

/** 跨页面"在地图上查看"的目标。 */
export interface MapFocusTarget extends MasterPixel {
  name: string;
}

function worldToMasterPixel(master: MasterId, worldX: number, worldZ: number): MasterPixel {
  return { master, px: worldX + OFFSET_X, py: OFFSET_Y - worldZ };
}

interface DisplayTransform {
  master: MasterId;
  sourceX: number;
  sourceZ: number;
  targetX: number;
  targetY: number;
  scaleX?: number;
  scaleZ?: number;
}

/**
 * 独立地图在游戏世界中没有可直接复用的母图坐标。这里的锚点只负责地图 UI 显示，
 * 不参与真实世界连接关系。m13 的目标框对应 M00 东侧的法姆·亚兹拉图形。
 */
const DISPLAY_TRANSFORMS: Readonly<Record<string, DisplayTransform>> = {
  m13_00_00: {
    master: 'M00',
    sourceX: 0,
    sourceZ: 0,
    targetX: 8520,
    targetY: 4925,
    scaleX: 1.55,
    scaleZ: 1.18,
  },
  // 候王礼拜堂、祖灵竞技场与石舞台在 WorldMapLegacyConvParam 中没有显示锚点。
  m10_01_00: { master: 'M00', sourceX: -17, sourceZ: -18, targetX: 2900, targetY: 6700 },
  m12_08_00: { master: 'M01', sourceX: 1530.68, sourceZ: -1052.55, targetX: 5279.5, targetY: 6675.8 },
  m12_09_00: { master: 'M01', sourceX: 1184.79, sourceZ: 1899.71, targetX: 4856.4, targetY: 6729.1 },
  m19_00_00: { master: 'M00', sourceX: 214, sourceZ: -687, targetX: 4534.3, targetY: 3737.1 },
};

function specialMarkerToMasterPixel(mapId: string, x: number, z: number): MasterPixel | null {
  const key = /^(m\d\d_\d\d_\d\d)_/.exec(mapId)?.[1];
  if (!key) return null;
  const transform = DISPLAY_TRANSFORMS[key];
  if (!transform) return null;
  return {
    master: transform.master,
    px: transform.targetX + (x - transform.sourceX) * (transform.scaleX ?? 1),
    py: transform.targetY - (z - transform.sourceZ) * (transform.scaleZ ?? 1),
  };
}

const legacyConvByBlock: ReadonlyMap<string, readonly LegacyConv[]> = (() => {
  const map = new Map<string, LegacyConv[]>();
  for (const conv of WORLD_MAP_LEGACY_CONV) {
    const cur = map.get(conv.srcMapId);
    if (cur) cur.push(conv);
    else map.set(conv.srcMapId, [conv]);
  }
  return map;
})();

function dungeonMarkerToMasterPixel(mapId: string, x: number, z: number): MasterPixel | null {
  const match = /^(m\d\d_\d\d_\d\d)_/.exec(mapId);
  if (!match) return null;
  const points = legacyConvByBlock.get(match[1]);
  if (!points || points.length === 0) return null;
  let best: LegacyConv | null = null;
  let bestDist = Infinity;
  for (const p of points) {
    const dx = x - p.srcX;
    const dz = z - p.srcZ;
    const d = dx * dx + dz * dz;
    if (d < bestDist) {
      bestDist = d;
      best = p;
    }
  }
  if (!best) return null;
  return worldToMasterPixel(best.master, x + best.addX, z + best.addZ);
}

export function markerToMasterPixel(mapId: string, x: number, z: number): MasterPixel | null {
  const special = specialMarkerToMasterPixel(mapId, x, z);
  if (special) return special;

  const m = /^m(60|61)_(\d+)_(\d+)_\d(\d)$/.exec(mapId);
  if (m) {
    const tier = Number(m[4]);
    if (tier > 2) return null;
    const size = 256 * 2 ** tier;
    const worldX = Number(m[2]) * size + size / 2 + x;
    const worldZ = Number(m[3]) * size + size / 2 + z;
    return worldToMasterPixel(m[1] === '60' ? 'M00' : 'M10', worldX, worldZ);
  }
  return dungeonMarkerToMasterPixel(mapId, x, z);
}

/** 存档 map_id 4 字节顺序不确定,两种顺序都试,取能投影的那个。 */
export function tupleMapIdCandidates(mapId: ReadonlyArray<number>): readonly string[] {
  if (mapId.length < 4) return [];
  const [a, b, c, d] = mapId as [number, number, number, number];
  const pad = (n: number) => n.toString().padStart(2, '0');
  const forward = `m${pad(a)}_${pad(b)}_${pad(c)}_${pad(d)}`;
  const reverse = `m${pad(d)}_${pad(c)}_${pad(b)}_${pad(a)}`;
  return forward === reverse ? [forward] : [forward, reverse];
}

export function tupleToMasterPixel(
  mapId: ReadonlyArray<number>,
  x: number,
  z: number,
): MasterPixel | null {
  for (const candidate of tupleMapIdCandidates(mapId)) {
    const projected = markerToMasterPixel(candidate, x, z);
    if (projected) return projected;
  }
  return null;
}
