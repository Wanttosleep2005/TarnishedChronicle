import type { HistorySnapshot } from '../../../shared/contracts';
import { GRACE_PINS } from '../data/generated/grace-pins.ts';
import { GRACES } from '../data/generated/graces.ts';
import { displayPlace } from '../data/zh/translations.ts';
import type { LeanSlot } from '../vendor/save-parser/index.ts';
import { MAP_AREA_ZH, type CharacterProfile } from './derive.ts';
import { markerToMasterPixel, tupleToMasterPixel, type MasterId, type MasterPixel } from './map-affine.ts';
import { deriveQuests } from './quests.ts';

export type PinKind = 'grace' | 'boss' | 'npc' | 'player' | 'blood' | 'blood-history' | 'custom';

export interface MapPin {
  kind: PinKind;
  master: MasterId;
  px: number;
  py: number;
  name: string;
  active: boolean;
  detail?: string;
  /** boss=击杀旗标 / grace=赐福旗标(讨伐计划环、回放用)。 */
  flagId?: number;
  /** 自定义标记 id / 颜色。 */
  markerId?: string;
  color?: number;
  /** 用户追踪的当前任务阶段。 */
  tracked?: boolean;
  /** NPC 当前阶段所属赐福旗标，用于同赐福聚合后错开绘制。 */
  mapGraceFlagId?: number;
  /** NPC 图标的展示坐标（绕所属赐福错开）；没有时由 px/py 兜底。 */
  displayPx?: number;
  displayPy?: number;
  /** 赐福所属地区，仅赐福点使用。 */
  region?: string;
  /** 原始地图和坐标，仅赐福点使用，用于同图直线距离计算。 */
  sourceMapId?: string;
  sourceX?: number;
  sourceZ?: number;
  /** 角色朝向的平面弧度，仅玩家点使用。 */
  heading?: number;
}

export interface GraceRegionLight {
  master: MasterId;
  region: string;
  px: number;
  py: number;
  radius: number;
  lit: number;
  total: number;
  ratio: number;
}

export interface NearestUnlitGrace {
  pin: MapPin;
  distance: number;
}

/** 按已投影赐福聚合区域光脉，亮度由点亮比例唯一决定。 */
export function buildGraceRegionLights(pins: readonly MapPin[]): GraceRegionLight[] {
  const groups = new Map<string, {
    master: MasterId;
    region: string;
    x: number;
    y: number;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    lit: number;
    total: number;
  }>();

  for (const pin of pins) {
    if (pin.kind !== 'grace' || !pin.region) continue;
    const key = `${pin.master}|${pin.region}`;
    const group = groups.get(key) ?? {
      master: pin.master,
      region: pin.region,
      x: 0,
      y: 0,
      minX: pin.px,
      maxX: pin.px,
      minY: pin.py,
      maxY: pin.py,
      lit: 0,
      total: 0,
    };
    group.x += pin.px;
    group.y += pin.py;
    group.minX = Math.min(group.minX, pin.px);
    group.maxX = Math.max(group.maxX, pin.px);
    group.minY = Math.min(group.minY, pin.py);
    group.maxY = Math.max(group.maxY, pin.py);
    group.lit += pin.active ? 1 : 0;
    group.total += 1;
    groups.set(key, group);
  }

  return [...groups.values()].map((group) => {
    const spread = Math.max(group.maxX - group.minX, group.maxY - group.minY);
    return {
      master: group.master,
      region: group.region,
      px: group.x / group.total,
      py: group.y / group.total,
      radius: Math.min(700, Math.max(95, spread * 0.85 + 90)),
      lit: group.lit,
      total: group.total,
      ratio: group.lit / group.total,
    };
  });
}

/** 只在存档当前 map_id 完全匹配的地图内计算直线最近的未点亮赐福。 */
export function findNearestUnlitGrace(
  currentMapIds: readonly string[],
  playerX: number,
  playerZ: number,
  pins: readonly MapPin[],
): NearestUnlitGrace | null {
  const maps = new Set(currentMapIds);
  let nearest: NearestUnlitGrace | null = null;
  for (const pin of pins) {
    if (
      pin.kind !== 'grace' ||
      pin.active ||
      !pin.sourceMapId ||
      pin.sourceX === undefined ||
      pin.sourceZ === undefined ||
      !maps.has(pin.sourceMapId)
    ) continue;
    const distance = Math.hypot(pin.sourceX - playerX, pin.sourceZ - playerZ);
    if (!nearest || distance < nearest.distance) nearest = { pin, distance };
  }
  return nearest;
}

const graceByEntityId = new Map(GRACES.map((g) => [g.bonfireEntityId, g]));

/** 赐福旗标 → 母图像素(跨页"在地图查看"用)。 */
export const gracePixelByFlagId: ReadonlyMap<number, MasterPixel> = (() => {
  const map = new Map<number, MasterPixel>();
  for (const pin of GRACE_PINS) {
    const grace = graceByEntityId.get(pin.entityId);
    if (!grace) continue;
    const projected = markerToMasterPixel(pin.mapId, pin.x, pin.z);
    if (projected) map.set(grace.flagId, projected);
  }
  return map;
})();

export interface RegionLabel {
  master: MasterId;
  px: number;
  py: number;
  region: string;
  text: string;
}

/** 低缩放时显示的区域地名(按该区域赐福点位的质心)。 */
export const REGION_LABELS: readonly RegionLabel[] = (() => {
  const groups = new Map<string, { sx: number; sy: number; n: number; master: MasterId; region: string }>();
  for (const pin of GRACE_PINS) {
    const grace = graceByEntityId.get(pin.entityId);
    if (!grace?.region) continue;
    const projected = markerToMasterPixel(pin.mapId, pin.x, pin.z);
    if (!projected) continue;
    const key = `${projected.master}|${grace.region}`;
    const group = groups.get(key) ?? { sx: 0, sy: 0, n: 0, master: projected.master, region: grace.region };
    group.sx += projected.px;
    group.sy += projected.py;
    group.n += 1;
    groups.set(key, group);
  }
  return [...groups.values()]
    .map((g) => ({ master: g.master, px: g.sx / g.n, py: g.sy / g.n, region: g.region, text: displayPlace(g.region) }));
})();

export function buildPins(
  profile: CharacterProfile,
  slot: LeanSlot,
  history: HistorySnapshot[] | null,
  slotIndex: number,
): MapPin[] {
  const pins: MapPin[] = [];
  const litFlagIds = new Set(profile.graceRows.filter((r) => r.lit).map((r) => r.grace.flagId));
  const graceZhByFlagId = new Map(profile.graceRows.map((r) => [r.grace.flagId, r.display]));

  for (const pin of GRACE_PINS) {
    const grace = graceByEntityId.get(pin.entityId);
    if (!grace) continue;
    const projected = markerToMasterPixel(pin.mapId, pin.x, pin.z);
    if (!projected) continue;
    pins.push({
      kind: 'grace',
      ...projected,
      name: graceZhByFlagId.get(grace.flagId) ?? grace.name,
      active: litFlagIds.has(grace.flagId),
      flagId: grace.flagId,
      region: grace.region ?? undefined,
      sourceMapId: pin.mapId,
      sourceX: pin.x,
      sourceZ: pin.z,
    });
  }

  for (const row of profile.bossRows) {
    for (const location of row.boss.locations) {
      const projected = markerToMasterPixel(location.mapId, location.x, location.z);
      if (!projected) continue;
      pins.push({
        kind: 'boss',
        ...projected,
        name: row.display,
        active: row.defeated,
        detail: row.defeated ? '已讨伐' : '未讨伐',
        flagId: row.boss.defeatFlagId,
      });
    }
  }

  for (const quest of deriveQuests(profile, slot.event_flags.flags)) {
    const flagId = quest.current.mapGraceFlagId;
    const projected = flagId === null ? null : gracePixelByFlagId.get(flagId);
    if (!projected || quest.status === 'done' || quest.status === 'interrupted') continue;
    pins.push({
      kind: 'npc',
      ...projected,
      name: quest.npc,
      active: quest.status === 'ongoing',
      detail: `${quest.current.region} · ${quest.current.location} · ${quest.current.objective}`,
      mapGraceFlagId: flagId ?? undefined,
    });
  }

  const player = tupleToMasterPixel(slot.player_coords.map_id, slot.player_coords.player_coords[0], slot.player_coords.player_coords[2]);
  if (player) {
    const [x, y, z, w] = slot.player_coords.angle;
    const heading = Math.atan2(2 * (w * y + x * z), 1 - 2 * (y * y + z * z));
    pins.push({ kind: 'player', ...player, name: `${profile.name}(当前位置)`, active: true, heading });
  }

  if (slot.blood_stain.runes > 0) {
    const blood = tupleToMasterPixel(slot.blood_stain.map_id, slot.blood_stain.coords[0], slot.blood_stain.coords[2]);
    if (blood) {
      pins.push({
        kind: 'blood',
        ...blood,
        name: '最近的血迹',
        active: true,
        detail: `${slot.blood_stain.runes.toLocaleString('zh-CN')} 卢恩待回收`,
      });
    }
  }

  // 历史血迹(死亡考古):快照记录的血迹位置,连续重复去重
  if (history) {
    let lastKey = '';
    for (const snapshot of history) {
      const blood = snapshot.slots[slotIndex]?.blood;
      if (!blood || blood.r <= 0) continue;
      const key = `${blood.m.join(',')}:${Math.round(blood.x)}:${Math.round(blood.z)}`;
      if (key === lastKey) continue;
      lastKey = key;
      const projected = tupleToMasterPixel(blood.m, blood.x, blood.z);
      if (!projected) continue;
      pins.push({
        kind: 'blood-history',
        ...projected,
        name: '曾经倒下的地方',
        active: false,
        detail: new Date(snapshot.t).toLocaleString('zh-CN', { hour12: false }),
      });
    }
  }

  spreadNpcPins(pins);
  return pins;
}

/** 血迹 map_id 四元组 → 地区中文标签(两种字节序都试)。 */
export function bloodAreaLabel(m: ReadonlyArray<number>): string {
  const candidates = [m[0], m[3]];
  for (const area of candidates) {
    if (area === 60) return '交界地(大地图)';
    if (area === 61) return '幽影之地(大地图)';
    const key = `m${String(area).padStart(2, '0')}`;
    const hit = MAP_AREA_ZH[key];
    if (hit) return hit;
  }
  return '未知区域';
}

/** 死亡考古:历史血迹按地区聚合(连续重复去重)。 */
export function deathArchaeology(
  history: HistorySnapshot[],
  slotIndex: number,
): { area: string; count: number }[] {
  const counts = new Map<string, number>();
  let lastKey = '';
  for (const snapshot of history) {
    const blood = snapshot.slots[slotIndex]?.blood;
    if (!blood || blood.r <= 0) continue;
    const key = `${blood.m.join(',')}:${Math.round(blood.x)}:${Math.round(blood.z)}`;
    if (key === lastKey) continue;
    lastKey = key;
    const area = bloodAreaLabel(blood.m);
    counts.set(area, (counts.get(area) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([area, count]) => ({ area, count }))
    .sort((a, b) => b.count - a.count);
}

/** 各母图的像素范围(用于初始视野)。 */
export const MASTER_EXTENT: Record<MasterId, { w: number; h: number }> = {
  M00: { w: 10496, h: 10496 },
  M01: { w: 10496, h: 10496 },
  M10: { w: 10496, h: 10496 },
  M11: { w: 10496, h: 10496 },
};

export type { MasterPixel };

/** 同一赐福上的多个 NPC 沿圆周错开，防止图标完全重合。 */
const NPC_RING_SLOTS = 8;
const NPC_RING_BASE = 34;
const NPC_RING_STEP = 17;

function spreadNpcPins(pins: MapPin[]): void {
  const groups = new Map<string, MapPin[]>();
  for (const pin of pins) {
    if (pin.kind !== 'npc' || pin.mapGraceFlagId === undefined) continue;
    const key = `${pin.master}|${pin.mapGraceFlagId}`;
    const group = groups.get(key);
    if (group) group.push(pin);
    else groups.set(key, [pin]);
  }

  for (const group of groups.values()) {
    group.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
    group.forEach((pin, index) => {
      const ring = Math.floor(index / NPC_RING_SLOTS);
      const slot = index % NPC_RING_SLOTS;
      const radius = NPC_RING_BASE + ring * NPC_RING_STEP;
      const angle = -Math.PI / 2 + (slot + (ring % 2) * 0.5) * ((Math.PI * 2) / NPC_RING_SLOTS);
      pin.displayPx = pin.px + Math.cos(angle) * radius;
      pin.displayPy = pin.py + Math.sin(angle) * radius;
    });
  }
}
