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
    });
  }

  const player = tupleToMasterPixel(slot.player_coords.map_id, slot.player_coords.player_coords[0], slot.player_coords.player_coords[2]);
  if (player) {
    pins.push({ kind: 'player', ...player, name: `${profile.name}(当前位置)`, active: true });
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
