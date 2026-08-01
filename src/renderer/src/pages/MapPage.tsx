import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { HistorySnapshot } from '../../../shared/contracts';
import { Card, PageHead } from '../components/ui.tsx';
import { deriveProfile, graceForEntityId } from '../lib/derive.ts';
import { MASTER_LABEL, tupleMapIdCandidates, type MasterId } from '../lib/map-affine.ts';
import { getMapExtent, getTile, NATIVE_SIZE, pickZoom } from '../lib/map-tiles.ts';
import { loadMarkers, MARKER_COLORS, saveMarkers, type CustomMarker } from '../lib/markers-store.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';
import {
  buildGraceRegionLights,
  buildPins,
  findNearestUnlitGrace,
  REGION_LABELS,
  type MapPin,
  type PinKind,
} from '../lib/worldmap.ts';
import { fuzzyBestScore } from '../lib/fuzzy-search.ts';

// 底图是明亮的手绘风,点位用高饱和 + 深色描边保证可读
const COLORS: Record<PinKind, { on: string; off: string }> = {
  grace: { on: '#ffd24d', off: 'rgba(90,72,38,0.85)' },
  boss: { on: '#e0442a', off: 'rgba(105,66,48,0.85)' },
  npc: { on: '#5fae7e', off: '#5fae7e' },
  player: { on: '#3fa4ff', off: '#3fa4ff' },
  blood: { on: '#ff3322', off: '#ff3322' },
  'blood-history': { on: 'rgba(150,30,20,0.8)', off: 'rgba(150,30,20,0.8)' },
  custom: { on: '#e8c76a', off: '#e8c76a' },
};

function markerScaleFor(scale: number, minimumScale: number): number {
  return Math.min(3, Math.max(1, Math.sqrt(scale / Math.max(minimumScale, 0.01))));
}

const KIND_ZH: Record<PinKind, string> = {
  grace: '赐福',
  boss: 'Boss',
  npc: 'NPC',
  player: '当前位置',
  blood: '待回收血迹',
  'blood-history': '历史死亡点',
  custom: '我的标记',
};

interface Layers {
  grace: boolean;
  boss: boolean;
  npc: boolean;
  blood: boolean;
  custom: boolean;
}

interface TooltipPosition {
  left: number;
  top: number;
}

type GraceView = 'all' | 'lit' | 'unlit' | 'current-map';

const MASTERS: MasterId[] = ['M00', 'M01', 'M10']; // 幽影之地没有独立地底母图,不显示 M11

export function MapPage() {
  const slot = useActiveSlot();
  const {
    savePath,
    mtimeMs,
    slotIndex,
    mapFocus,
    clearMapFocus,
    mapReplay,
    clearMapReplay,
    planFlags,
    trackedQuestNpc,
    setTrackedQuestNpc,
  } =
    useSaveContext();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [master, setMaster] = useState<MasterId>('M00');
  const [layers, setLayers] = useState<Layers>({ grace: true, boss: true, npc: false, blood: true, custom: true });
  const [graceView, setGraceView] = useState<GraceView>('all');
  const [customMarkers, setCustomMarkers] = useState<CustomMarker[]>([]);

  useEffect(() => {
    setCustomMarkers(savePath ? loadMarkers(savePath) : []);
  }, [savePath]);

  const updateMarkers = useCallback(
    (next: CustomMarker[]) => {
      setCustomMarkers(next);
      if (savePath) saveMarkers(savePath, next);
    },
    [savePath],
  );
  const [hover, setHover] = useState<MapPin | null>(null);
  const [selected, setSelected] = useState<MapPin | null>(null);
  const [hoverTooltipPosition, setHoverTooltipPosition] = useState<TooltipPosition | null>(null);
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<HistorySnapshot[] | null>(null);
  const viewRef = useRef({ scale: 0.08, ox: 0, oy: 0, dragging: false, moved: 0, lastX: 0, lastY: 0 });
  const minScaleRef = useRef(0.015);
  const lastCanvasSizeRef = useRef({ width: 0, height: 0 });
  const pendingFocusRef = useRef<MapPin | null>(null);
  const hoverTooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!savePath) return;
    void window.api.getHistory(savePath).then(setHistory);
  }, [savePath, mtimeMs]);

  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const basePins = useMemo(
    () => (profile && slot ? buildPins(profile, slot, history, slotIndex) : []),
    [profile, slot, history, slotIndex],
  );

  // 时光回放:用历史快照覆盖 boss/赐福状态,隐藏"此刻"类点位
  const replaySnapshot = useMemo(() => {
    if (mapReplay === null || !history) return null;
    return history.find((h) => h.t === mapReplay) ?? null;
  }, [mapReplay, history]);

  const pins = useMemo(() => {
    const withMarkers: MapPin[] = [
      ...basePins,
      ...customMarkers.map((m) => ({
        kind: 'custom' as const,
        master: m.master,
        px: m.px,
        py: m.py,
        name: m.name,
        active: true,
        markerId: m.id,
        color: m.color,
      })),
    ];
    const snap = replaySnapshot?.slots[slotIndex];
    if (!snap) {
      return withMarkers.map((pin) => ({ ...pin, tracked: pin.kind === 'npc' && pin.name === trackedQuestNpc }));
    }
    const bossSet = new Set(snap.bossFlags);
    const graceSet = snap.graceFlags ? new Set(snap.graceFlags) : null;
    return withMarkers
      .filter((p) => p.kind !== 'player' && p.kind !== 'blood' && p.kind !== 'blood-history')
      .map((p) => {
        if (p.kind === 'boss' && p.flagId !== undefined) {
          const defeated = bossSet.has(p.flagId);
          return { ...p, active: defeated, detail: defeated ? '当时已讨伐' : '当时未讨伐' };
        }
        if (p.kind === 'grace' && p.flagId !== undefined && graceSet) {
          return { ...p, active: graceSet.has(p.flagId) };
        }
        return p;
      })
      .map((pin) => ({ ...pin, tracked: pin.kind === 'npc' && pin.name === trackedQuestNpc }));
  }, [basePins, customMarkers, replaySnapshot, slotIndex, trackedQuestNpc]);

  const replaySlot = replaySnapshot?.slots[slotIndex];
  const currentMapIds = useMemo(
    () => tupleMapIdCandidates(replaySlot?.mapId ?? slot?.player_coords.map_id ?? []),
    [replaySlot?.mapId, slot?.player_coords.map_id],
  );
  const graceRegionLights = useMemo(() => buildGraceRegionLights(pins), [pins]);
  const lastRestedGrace = useMemo(
    () => graceForEntityId(replaySlot?.restedGraceEntityId ?? profile?.lastRestedGraceEntityId ?? 0),
    [profile?.lastRestedGraceEntityId, replaySlot?.restedGraceEntityId],
  );
  const lastRestedFlagId = lastRestedGrace?.flagId;
  const nearestUnlitGrace = useMemo(() => {
    if (!slot || replaySlot) return null;
    return findNearestUnlitGrace(
      currentMapIds,
      slot.player_coords.player_coords[0],
      slot.player_coords.player_coords[2],
      pins,
    );
  }, [currentMapIds, pins, replaySlot, slot]);

  useEffect(() => {
    if (trackedQuestNpc) setLayers((current) => (current.npc ? current : { ...current, npc: true }));
  }, [trackedQuestNpc]);

  const masterPins = useMemo(() => pins.filter((p) => p.master === master), [pins, master]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    return pins
      .filter((p) => p.kind !== 'blood-history')
      .map((pin) => ({ pin, score: fuzzyBestScore(query, pin.name, pin.detail ?? '', KIND_ZH[pin.kind]) }))
      .filter((entry) => Number.isFinite(entry.score))
      .sort((left, right) => right.score - left.score || left.pin.name.localeCompare(right.pin.name, 'zh-CN'))
      .map(({ pin }) => pin)
      .slice(0, 8);
  }, [pins, query]);

  // 瓦片异步加载完成后合帧重绘
  const drawRef = useRef<() => void>(() => {});
  const redrawPending = useRef(false);
  const hasCompleteFrameRef = useRef(false);
  const lastDrawnMasterRef = useRef<MasterId | null>(null);
  const scheduleRedraw = useCallback(() => {
    if (redrawPending.current) return;
    redrawPending.current = true;
    requestAnimationFrame(() => {
      redrawPending.current = false;
      drawRef.current();
    });
  }, []);

  const visible = useCallback(
    (pin: MapPin) => {
      if (pin.kind === 'grace') {
        if (!layers.grace) return false;
        if (graceView === 'lit') return pin.active;
        if (graceView === 'unlit') return !pin.active;
        if (graceView === 'current-map') return Boolean(pin.sourceMapId && currentMapIds.includes(pin.sourceMapId));
        return true;
      }
      if (pin.kind === 'boss') return layers.boss;
      if (pin.kind === 'npc') return layers.npc;
      if (pin.kind === 'blood' || pin.kind === 'blood-history') return layers.blood;
      if (pin.kind === 'custom') return layers.custom;
      return true;
    },
    [currentMapIds, graceView, layers],
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const pixelWidth = Math.round(w * dpr);
    const pixelHeight = Math.round(h * dpr);
    const scaleX = pixelWidth / w;
    const scaleY = pixelHeight / h;
    let resized = false;
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
      resized = true;
    }
    const ctx = canvas.getContext('2d')!;

    const { scale, ox, oy } = viewRef.current;
    const sx = (px: number) => px * scale + ox;
    const sy = (py: number) => py * scale + oy;

    // ———— 真实地图瓦片底图 ————
    const z = pickZoom(scale);
    const factor = 2 ** (6 - z);
    const tileNative = 256 * factor;
    const gridN = Math.ceil(NATIVE_SIZE / tileNative);
    const tx0 = Math.max(0, Math.floor(-ox / scale / tileNative));
    const tx1 = Math.min(gridN - 1, Math.ceil((w - ox) / scale / tileNative));
    const ty0 = Math.max(0, Math.floor(-oy / scale / tileNative));
    const ty1 = Math.min(gridN - 1, Math.ceil((h - oy) / scale / tileNative));
    const size = tileNative * scale + 0.6;
    const tileFrames: { image: HTMLImageElement; x: number; y: number }[] = [];
    let pendingTiles = false;
    for (let ty = ty0; ty <= ty1; ty++) {
      for (let tx = tx0; tx <= tx1; tx++) {
        const img = getTile(master, z, ty, tx, scheduleRedraw);
        if (img === null) {
          pendingTiles = true;
          continue;
        }
        if (img) tileFrames.push({ image: img, x: tx, y: ty });
      }
    }
    if (pendingTiles && !resized && hasCompleteFrameRef.current && lastDrawnMasterRef.current === master) return;

    ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    ctx.fillStyle = '#0c0a07';
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    for (const tile of tileFrames) {
      ctx.drawImage(tile.image, sx(tile.x * tileNative), sy(tile.y * tileNative), size, size);
    }
    if (!pendingTiles) {
      hasCompleteFrameRef.current = true;
      lastDrawnMasterRef.current = master;
    }

    // 区域光脉不描绘不存在的行政边界，只在赐福投影簇周围呈现实际点亮比例。
    ctx.save();
    for (const light of graceRegionLights) {
      if (light.master !== master || light.ratio <= 0) continue;
      const x = sx(light.px);
      const y = sy(light.py);
      const radius = light.radius * scale;
      if (radius < 3 || x < -radius || y < -radius || x > w + radius || y > h + radius) continue;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
      const alpha = 0.16 * light.ratio;
      glow.addColorStop(0, `rgba(238, 188, 72, ${alpha})`);
      glow.addColorStop(0.55, `rgba(223, 157, 36, ${alpha * 0.42})`);
      glow.addColorStop(1, 'rgba(223, 157, 36, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // ———— 点位 ————
    const drawOrder: PinKind[] = ['blood-history', 'npc', 'grace', 'boss', 'blood', 'custom', 'player'];
    const pulse = 0.5 + Math.sin(performance.now() / 430) * 0.5;
    const markerScale = markerScaleFor(scale, minScaleRef.current);
    const markerLineWidth = 1.4 * markerScale;
    const markerBounds = 24 * markerScale;
    ctx.lineWidth = markerLineWidth;
    for (const kind of drawOrder) {
      for (const pin of masterPins) {
        if (pin.kind !== kind || !visible(pin)) continue;
        const x = sx(pin.displayPx ?? pin.px);
        const y = sy(pin.displayPy ?? pin.py);
        const anchorX = sx(pin.px);
        const anchorY = sy(pin.py);
        if (x < -markerBounds || y < -markerBounds || x > w + markerBounds || y > h + markerBounds) continue;
        const color = pin.active ? COLORS[kind].on : COLORS[kind].off;
        ctx.fillStyle = color;
        ctx.strokeStyle = 'rgba(16,12,6,0.9)';
        ctx.beginPath();
        if (kind === 'grace') {
          if (pin.active) {
            const glowRadius = 11 * markerScale;
            const glow = ctx.createRadialGradient(x, y, markerScale, x, y, glowRadius);
            glow.addColorStop(0, 'rgba(255, 244, 190, 0.9)');
            glow.addColorStop(0.34, 'rgba(255, 195, 61, 0.56)');
            glow.addColorStop(1, 'rgba(255, 177, 38, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#f6bf37';
            ctx.beginPath();
            ctx.moveTo(x, y + 4.6 * markerScale);
            ctx.bezierCurveTo(x - 5.2 * markerScale, y + 1.5 * markerScale, x - 2.6 * markerScale, y - 4.2 * markerScale, x, y - 8 * markerScale);
            ctx.bezierCurveTo(x + 3.2 * markerScale, y - 3.5 * markerScale, x + 5.2 * markerScale, y + 1.4 * markerScale, x, y + 4.6 * markerScale);
            ctx.fill();
            ctx.fillStyle = '#fff1bb';
            ctx.beginPath();
            ctx.moveTo(x, y + 2.4 * markerScale);
            ctx.quadraticCurveTo(x - 1.7 * markerScale, y - 1.1 * markerScale, x, y - 4.4 * markerScale);
            ctx.quadraticCurveTo(x + 2.1 * markerScale, y - 0.4 * markerScale, x, y + 2.4 * markerScale);
            ctx.fill();
          } else {
            const dormantGraceHeight = 7.2 * markerScale;
            const dormantGraceWidth = 4.3 * markerScale;
            const dormantGraceBase = 4.4 * markerScale;
            const glow = ctx.createRadialGradient(x, y, 0, x, y, dormantGraceHeight * 1.45);
            glow.addColorStop(0, 'rgba(184, 150, 78, 0.3)');
            glow.addColorStop(1, 'rgba(72, 53, 26, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(x, y, dormantGraceHeight * 1.45, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'rgba(47, 36, 21, 0.78)';
            ctx.strokeStyle = 'rgba(196, 160, 87, 0.96)';
            ctx.lineWidth = Math.max(1.2, 1.05 * markerScale);
            ctx.beginPath();
            ctx.moveTo(x, y + dormantGraceBase);
            ctx.bezierCurveTo(x - dormantGraceWidth, y + 1.5 * markerScale, x - dormantGraceWidth * 0.58, y - dormantGraceHeight * 0.5, x, y - dormantGraceHeight);
            ctx.bezierCurveTo(x + dormantGraceWidth * 0.74, y - dormantGraceHeight * 0.48, x + dormantGraceWidth, y + 1.2 * markerScale, x, y + dormantGraceBase);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.strokeStyle = 'rgba(230, 198, 124, 0.82)';
            ctx.lineWidth = Math.max(1, 0.72 * markerScale);
            ctx.beginPath();
            ctx.moveTo(x, y + 2.2 * markerScale);
            ctx.quadraticCurveTo(x - 1.5 * markerScale, y - 0.8 * markerScale, x, y - 4.2 * markerScale);
            ctx.quadraticCurveTo(x + 1.8 * markerScale, y - 0.2 * markerScale, x, y + 2.2 * markerScale);
            ctx.stroke();

            ctx.strokeStyle = 'rgba(135, 101, 53, 0.92)';
            ctx.lineWidth = Math.max(1, 0.8 * markerScale);
            ctx.beginPath();
            ctx.moveTo(x - 4.2 * markerScale, y + 5.2 * markerScale);
            ctx.quadraticCurveTo(x, y + 3.7 * markerScale, x + 4.2 * markerScale, y + 5.2 * markerScale);
            ctx.stroke();
            ctx.lineWidth = markerLineWidth;
          }
          if (pin.flagId === lastRestedFlagId) {
            ctx.strokeStyle = `rgba(255, 228, 126, ${0.35 + pulse * 0.5})`;
            ctx.lineWidth = 1.8 * markerScale;
            ctx.beginPath();
            ctx.arc(x, y, (10 + pulse * 4) * markerScale, 0, Math.PI * 2);
            ctx.stroke();
            ctx.lineWidth = markerLineWidth;
          }
        } else if (kind === 'player') {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((pin.heading ?? 0) - Math.PI / 2);
          ctx.fillStyle = '#3fa4ff';
          ctx.beginPath();
          ctx.moveTo(9 * markerScale, 0);
          ctx.lineTo(-5.5 * markerScale, -5.2 * markerScale);
          ctx.lineTo(-2.1 * markerScale, 0);
          ctx.lineTo(-5.5 * markerScale, 5.2 * markerScale);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = '#eaf6ff';
          ctx.lineWidth = 1.8 * markerScale;
          ctx.stroke();
          ctx.restore();
          ctx.lineWidth = markerLineWidth;
        } else if (kind === 'npc') {
          if (anchorX !== x || anchorY !== y) {
            ctx.save();
            ctx.setLineDash([3 * markerScale, 2.5 * markerScale]);
            ctx.strokeStyle = 'rgba(103, 210, 163, 0.55)';
            ctx.lineWidth = Math.max(1, 0.9 * markerScale);
            ctx.beginPath();
            ctx.moveTo(anchorX, anchorY);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.restore();
          }
          const npcRadius = 5 * markerScale;
          ctx.fillStyle = 'rgba(12, 26, 19, 0.55)';
          ctx.beginPath();
          ctx.arc(x, y, npcRadius * 1.55, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#67d2a3';
          ctx.strokeStyle = 'rgba(10, 31, 23, 0.96)';
          ctx.lineWidth = Math.max(1.3, 1.2 * markerScale);
          ctx.beginPath();
          ctx.moveTo(x, y - npcRadius);
          ctx.lineTo(x + npcRadius * 0.9, y + npcRadius * 0.72);
          ctx.lineTo(x - npcRadius * 0.9, y + npcRadius * 0.72);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#d8ffe9';
          ctx.beginPath();
          ctx.arc(x, y + npcRadius * 0.26, Math.max(1.1, markerScale), 0, Math.PI * 2);
          ctx.fill();
          ctx.lineWidth = markerLineWidth;
          if (pin.tracked) {
            ctx.beginPath();
            ctx.setLineDash([3 * markerScale, 2 * markerScale]);
            ctx.strokeStyle = '#ffd24d';
            ctx.lineWidth = 1.8 * markerScale;
            ctx.arc(x, y, 10 * markerScale, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.lineWidth = markerLineWidth;
            ctx.strokeStyle = 'rgba(16,12,6,0.9)';
          }
        } else if (kind === 'blood') {
          ctx.arc(x, y, 6 * markerScale, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (kind === 'custom') {
          ctx.fillStyle = MARKER_COLORS[pin.color ?? 0] ?? MARKER_COLORS[0];
          ctx.moveTo(x, y - 6 * markerScale);
          ctx.lineTo(x + 5 * markerScale, y);
          ctx.lineTo(x, y + 6 * markerScale);
          ctx.lineTo(x - 5 * markerScale, y);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else if (kind === 'boss') {
          const bossSkullRadius = 6 * markerScale;
          ctx.fillStyle = color;
          ctx.strokeStyle = 'rgba(16,12,6,0.96)';
          ctx.lineWidth = Math.max(1.2, 1.1 * markerScale);
          ctx.beginPath();
          ctx.moveTo(x, y - bossSkullRadius);
          ctx.bezierCurveTo(
            x - bossSkullRadius * 0.68,
            y - bossSkullRadius,
            x - bossSkullRadius * 0.96,
            y - bossSkullRadius * 0.52,
            x - bossSkullRadius * 0.94,
            y - bossSkullRadius * 0.02,
          );
          ctx.bezierCurveTo(
            x - bossSkullRadius * 0.92,
            y + bossSkullRadius * 0.29,
            x - bossSkullRadius * 0.72,
            y + bossSkullRadius * 0.48,
            x - bossSkullRadius * 0.52,
            y + bossSkullRadius * 0.56,
          );
          ctx.lineTo(x - bossSkullRadius * 0.46, y + bossSkullRadius * 0.9);
          ctx.lineTo(x - bossSkullRadius * 0.16, y + bossSkullRadius * 0.78);
          ctx.lineTo(x, y + bossSkullRadius * 0.98);
          ctx.lineTo(x + bossSkullRadius * 0.16, y + bossSkullRadius * 0.78);
          ctx.lineTo(x + bossSkullRadius * 0.46, y + bossSkullRadius * 0.9);
          ctx.lineTo(x + bossSkullRadius * 0.52, y + bossSkullRadius * 0.56);
          ctx.bezierCurveTo(
            x + bossSkullRadius * 0.72,
            y + bossSkullRadius * 0.48,
            x + bossSkullRadius * 0.92,
            y + bossSkullRadius * 0.29,
            x + bossSkullRadius * 0.94,
            y - bossSkullRadius * 0.02,
          );
          ctx.bezierCurveTo(
            x + bossSkullRadius * 0.96,
            y - bossSkullRadius * 0.52,
            x + bossSkullRadius * 0.68,
            y - bossSkullRadius,
            x,
            y - bossSkullRadius,
          );
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = 'rgba(16,12,6,0.9)';
          ctx.beginPath();
          ctx.ellipse(x - bossSkullRadius * 0.34, y - bossSkullRadius * 0.1, bossSkullRadius * 0.2, bossSkullRadius * 0.25, -0.14, 0, Math.PI * 2);
          ctx.ellipse(x + bossSkullRadius * 0.34, y - bossSkullRadius * 0.1, bossSkullRadius * 0.2, bossSkullRadius * 0.25, 0.14, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(x, y + bossSkullRadius * 0.1);
          ctx.lineTo(x - bossSkullRadius * 0.12, y + bossSkullRadius * 0.34);
          ctx.lineTo(x + bossSkullRadius * 0.12, y + bossSkullRadius * 0.34);
          ctx.closePath();
          ctx.fill();

          ctx.strokeStyle = pin.active ? 'rgba(255,190,160,0.72)' : 'rgba(184,139,112,0.72)';
          ctx.lineWidth = Math.max(0.8, 0.55 * markerScale);
          ctx.beginPath();
          ctx.moveTo(x - bossSkullRadius * 0.33, y + bossSkullRadius * 0.58);
          ctx.lineTo(x + bossSkullRadius * 0.33, y + bossSkullRadius * 0.58);
          ctx.moveTo(x - bossSkullRadius * 0.12, y + bossSkullRadius * 0.58);
          ctx.lineTo(x - bossSkullRadius * 0.1, y + bossSkullRadius * 0.81);
          ctx.moveTo(x + bossSkullRadius * 0.12, y + bossSkullRadius * 0.58);
          ctx.lineTo(x + bossSkullRadius * 0.1, y + bossSkullRadius * 0.81);
          ctx.stroke();
          ctx.lineWidth = markerLineWidth;
          ctx.strokeStyle = 'rgba(16,12,6,0.9)';
          if (pin.flagId !== undefined && planFlags.has(pin.flagId)) {
            ctx.beginPath();
            ctx.setLineDash([4 * markerScale, 3 * markerScale]);
            ctx.strokeStyle = '#ffd24d';
            ctx.lineWidth = 1.8 * markerScale;
            ctx.arc(x, y, 10 * markerScale, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.lineWidth = markerLineWidth;
            ctx.strokeStyle = 'rgba(16,12,6,0.9)';
          }
        } else {
          ctx.arc(x, y, (kind === 'blood-history' ? 3.4 : pin.active ? 4.2 : 3) * markerScale, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    // ———— 区域地名(低缩放) ————
    if (scale < 0.24) {
      ctx.font = '600 14px Georgia, "STSong", "SimSun", serif';
      ctx.textAlign = 'center';
      for (const label of REGION_LABELS) {
        if (label.master !== master) continue;
        const x = sx(label.px);
        const y = sy(label.py);
        if (x < -60 || y < -20 || x > w + 60 || y > h + 20) continue;
        ctx.strokeStyle = 'rgba(12,9,5,0.85)';
        ctx.lineWidth = 3.5;
        ctx.strokeText(label.text, x, y);
        ctx.fillStyle = '#f2e2b6';
        ctx.fillText(label.text, x, y);
      }
      ctx.textAlign = 'left';
      ctx.lineWidth = 1.4;
    }

    // ———— 悬停 / 选中高亮 ————
    for (const [pin, color] of [
      [hover, '#e8d3a0'],
      [selected, '#ffde7a'],
    ] as [MapPin | null, string][]) {
      if (!pin || pin.master !== master) continue;
      const x = sx(pin.displayPx ?? pin.px);
      const y = sy(pin.displayPy ?? pin.py);
      ctx.strokeStyle = color;
      ctx.lineWidth = (pin === selected ? 2.2 : 1.5) * markerScale;
      ctx.beginPath();
      ctx.arc(x, y, (pin === selected ? 12 : 9) * markerScale, 0, Math.PI * 2);
      ctx.stroke();
      if (pin === selected) {
        ctx.beginPath();
        ctx.arc(x, y, 17 * markerScale, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,222,122,0.4)';
        ctx.stroke();
      }
    }
    ctx.lineWidth = markerLineWidth;
  }, [masterPins, visible, hover, selected, master, scheduleRedraw, planFlags]);

  drawRef.current = draw;

  useEffect(() => {
    const timer = window.setInterval(() => drawRef.current(), 140);
    return () => window.clearInterval(timer);
  }, []);

  const updateHoverTooltipPosition = useCallback(() => {
    const canvas = canvasRef.current;
    const tooltip = hoverTooltipRef.current;
    if (!canvas || !tooltip || !hover || hover.master !== master) {
      setHoverTooltipPosition(null);
      return;
    }

    const { scale, ox, oy } = viewRef.current;
    const pinX = (hover.displayPx ?? hover.px) * scale + ox;
    const pinY = (hover.displayPy ?? hover.py) * scale + oy;
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const inset = 12;
    const gap = 16;
    const maxLeft = Math.max(inset, canvas.clientWidth - inset - tooltipWidth);
    const maxTop = Math.max(inset, canvas.clientHeight - inset - tooltipHeight);
    const leftOfPin = pinX - gap - tooltipWidth;
    const rightOfPin = pinX + gap;
    const left = Math.min(Math.max(rightOfPin + tooltipWidth <= canvas.clientWidth - inset ? rightOfPin : leftOfPin, inset), maxLeft);
    const top = Math.min(Math.max(pinY - tooltipHeight / 2, inset), maxTop);

    setHoverTooltipPosition((current) => (
      current?.left === left && current.top === top ? current : { left, top }
    ));
  }, [hover, master]);

  useLayoutEffect(() => {
    updateHoverTooltipPosition();
  }, [updateHoverTooltipPosition]);

  const clampScale = useCallback((scale: number) => Math.min(4, Math.max(minScaleRef.current, scale)), []);

  const clampMapPosition = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const view = viewRef.current;
    const extent = getMapExtent(master);
    const clampAxis = (offset: number, mapStart: number, mapSize: number, viewportSize: number) => {
      const scaledSize = mapSize * view.scale;
      const centeredOffset = (viewportSize - scaledSize) / 2 - mapStart * view.scale;
      if (scaledSize <= viewportSize) return centeredOffset;
      const maximumOffset = -mapStart * view.scale;
      const minimumOffset = viewportSize - (mapStart + mapSize) * view.scale;
      return Math.min(maximumOffset, Math.max(minimumOffset, offset));
    };
    view.ox = clampAxis(view.ox, extent.x, extent.width, canvas.clientWidth);
    view.oy = clampAxis(view.oy, extent.y, extent.height, canvas.clientHeight);
  }, [master]);

  const centerOn = useCallback(
    (px: number, py: number, scale?: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const view = viewRef.current;
      if (scale !== undefined) view.scale = clampScale(scale);
      view.ox = canvas.clientWidth / 2 - px * view.scale;
      view.oy = canvas.clientHeight / 2 - py * view.scale;
      clampMapPosition();
      drawRef.current();
      updateHoverTooltipPosition();
    },
    [clampMapPosition, clampScale, updateHoverTooltipPosition],
  );

  const fitView = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w <= 0 || h <= 0) return;
    const extent = getMapExtent(master);
    const coverScale = Math.max(w / extent.width, h / extent.height);
    minScaleRef.current = coverScale;
    lastCanvasSizeRef.current = { width: w, height: h };
    viewRef.current.scale = coverScale;
    viewRef.current.ox = w / 2 - (extent.x + extent.width / 2) * viewRef.current.scale;
    viewRef.current.oy = h / 2 - (extent.y + extent.height / 2) * viewRef.current.scale;
    drawRef.current();
    updateHoverTooltipPosition();
  }, [master, updateHoverTooltipPosition]);

  // 母图切换 / 初始:优先消费待定位目标
  useEffect(() => {
    const pending = pendingFocusRef.current;
    if (pending && pending.master === master) {
      pendingFocusRef.current = null;
      setSelected(pending);
      centerOn(pending.displayPx ?? pending.px, pending.displayPy ?? pending.py, Math.max(viewRef.current.scale, 0.55));
    } else {
      fitView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [master, masterPins.length > 0]);

  const focusPin = useCallback(
    (pin: MapPin) => {
      if (pin.master !== master) {
        pendingFocusRef.current = pin;
        setMaster(pin.master);
      } else {
        setSelected(pin);
        centerOn(pin.displayPx ?? pin.px, pin.displayPy ?? pin.py, Math.max(viewRef.current.scale, 0.55));
      }
    },
    [master, centerOn],
  );

  // 跨页"在地图查看"
  useEffect(() => {
    if (!mapFocus) return;
    focusPin({ kind: 'grace', active: true, ...mapFocus });
    clearMapFocus();
  }, [mapFocus, focusPin, clearMapFocus]);

  useEffect(() => draw(), [draw]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const width = Math.round(entry.contentRect.width);
      const height = Math.round(entry.contentRect.height);
      const previous = lastCanvasSizeRef.current;
      if (width === previous.width && height === previous.height) return;
      fitView();
      requestAnimationFrame(updateHoverTooltipPosition);
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [fitView, updateHoverTooltipPosition]);

  const pinAt = useCallback(
    (clientX: number, clientY: number): MapPin | null => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();
      const mx = clientX - rect.left;
      const my = clientY - rect.top;
      const { scale, ox, oy } = viewRef.current;
      let best: MapPin | null = null;
      const hitRadius = 13 * markerScaleFor(scale, minScaleRef.current);
      let bestDist = hitRadius * hitRadius;
      for (const pin of masterPins) {
        if (!visible(pin)) continue;
        const dx = (pin.displayPx ?? pin.px) * scale + ox - mx;
        const dy = (pin.displayPy ?? pin.py) * scale + oy - my;
        const d = dx * dx + dy * dy;
        if (d < bestDist) {
          bestDist = d;
          best = pin;
        }
      }
      return best;
    },
    [masterPins, visible],
  );

  const zoomAt = useCallback(
    (factor: number, cx: number, cy: number) => {
      const view = viewRef.current;
      const next = clampScale(view.scale * factor);
      if (next === view.scale) return;
      view.ox = cx - ((cx - view.ox) / view.scale) * next;
      view.oy = cy - ((cy - view.oy) / view.scale) * next;
      view.scale = next;
      clampMapPosition();
      drawRef.current();
      updateHoverTooltipPosition();
    },
    [clampMapPosition, clampScale, updateHoverTooltipPosition],
  );

  const zoomBy = useCallback(
    (factor: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      zoomAt(factor, canvas.clientWidth / 2, canvas.clientHeight / 2);
    },
    [zoomAt],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleCanvasWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const rect = canvas.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      const factor = event.deltaY < 0 ? 1.18 : 1 / 1.18;
      zoomAt(factor, mx, my);
    };
    canvas.addEventListener('wheel', handleCanvasWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleCanvasWheel);
  }, [zoomAt]);

  if (!slot || !profile) return null;

  const counts = {
    grace: masterPins.filter((p) => p.kind === 'grace').length,
    boss: masterPins.filter((p) => p.kind === 'boss').length,
    npc: masterPins.filter((p) => p.kind === 'npc').length,
    blood: masterPins.filter((p) => p.kind === 'blood-history' || p.kind === 'blood').length,
  };
  const playerPin = pins.find((p) => p.kind === 'player') ?? null;
  const trackedNpcPin = pins.find((p) => p.kind === 'npc' && p.tracked) ?? null;
  const lastRestedPin = lastRestedFlagId === undefined
    ? null
    : pins.find((p) => p.kind === 'grace' && p.flagId === lastRestedFlagId) ?? null;
  const litGraceCount = masterPins.filter((p) => p.kind === 'grace' && p.active).length;

  const layerButton = (key: keyof Layers, label: string) => (
    <button
      className={`btn small ${layers[key] ? 'primary' : ''}`}
      onClick={() => setLayers({ ...layers, [key]: !layers[key] })}
    >
      {label}
    </button>
  );

  const selectGraceView = (next: GraceView) => {
    setGraceView(next);
    if (next === 'current-map' && playerPin) setMaster(playerPin.master);
  };

  const graceViewButton = (view: GraceView, label: string, title?: string) => (
    <button
      className={`btn small ${graceView === view ? 'primary' : ''}`}
      onClick={() => selectGraceView(view)}
      title={title}
    >
      {label}
    </button>
  );

  return (
    <div className="page" style={{ maxWidth: 1280 }}>
      <PageHead title="交界地图" sub="真实游戏地图 · 滚轮缩放、拖拽平移、悬停点位查看名称" />

      <Card>
        <div className="row map-toolbar" style={{ marginBottom: 10 }}>
          {MASTERS.map((id) => (
            <button key={id} className={`btn small ${master === id ? 'primary' : ''}`} onClick={() => setMaster(id)}>
              {MASTER_LABEL[id]}
            </button>
          ))}
          <span className="spacer" />
          <div style={{ position: 'relative' }}>
            <input
              className="input"
              style={{ width: 240 }}
              placeholder="搜索赐福 / Boss / NPC…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {searchResults.length > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: '105%',
                  left: 0,
                  right: 0,
                  zIndex: 20,
                  background: 'rgba(20,16,10,0.97)',
                  border: '1px solid var(--line-2)',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                {searchResults.map((pin, i) => (
                  <div
                    key={`${pin.name}-${i}`}
                    style={{ padding: '7px 12px', cursor: 'pointer', fontSize: 12.5 }}
                    onMouseDown={() => {
                      setQuery('');
                      focusPin(pin);
                    }}
                  >
                    <span style={{ color: 'var(--gold-2)' }}>{pin.name}</span>
                    <span style={{ color: 'var(--faint)', marginLeft: 8 }}>
                      {KIND_ZH[pin.kind]} · {MASTER_LABEL[pin.master]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="row map-toolbar" style={{ marginBottom: 10 }}>
          {layerButton('grace', `✦ 赐福 ${counts.grace}`)}
          {layerButton('boss', `☠ Boss ${counts.boss}`)}
          {layerButton('npc', `▲ NPC ${counts.npc}`)}
          {layerButton('blood', `🩸 血迹 ${counts.blood}`)}
          {layerButton('custom', `◆ 标记 ${customMarkers.filter((m) => m.master === master).length}`)}
          {trackedNpcPin && (
            <button className="btn small primary" onClick={() => focusPin(trackedNpcPin)} title="定位当前追踪任务">
              追踪:{trackedNpcPin.name}
            </button>
          )}
          <span className="spacer" />
          <button className="btn small" onClick={() => zoomBy(1.35)}>放大 +</button>
          <button className="btn small" onClick={() => zoomBy(1 / 1.35)}>缩小 −</button>
          <button className="btn small" onClick={fitView}>重置视野</button>
          {playerPin && (
            <button className="btn small" onClick={() => focusPin(playerPin)}>回到玩家</button>
          )}
        </div>

        <div className="row map-grace-toolbar" style={{ marginBottom: 10 }}>
          <span className="map-grace-summary">光脉 {litGraceCount}/{counts.grace}</span>
          <div className="map-grace-filter" role="group" aria-label="赐福显示范围">
            {graceViewButton('all', '全部')}
            {graceViewButton('lit', '已点亮')}
            {graceViewButton('unlit', '未点亮')}
            {graceViewButton('current-map', '当前地图', '严格按存档当前 map_id 筛选')}
          </div>
          {lastRestedPin && (
            <button className="btn small map-rested-grace" onClick={() => focusPin(lastRestedPin)}>
              最后休息: {lastRestedPin.name}
            </button>
          )}
          {nearestUnlitGrace && (
            <button
              className="btn small map-nearest-grace"
              onClick={() => focusPin(nearestUnlitGrace.pin)}
              title="同一 map_id 的直线距离估算，不表示导航路线或可达路径"
            >
              最近未点亮: {nearestUnlitGrace.pin.name} ({Math.round(nearestUnlitGrace.distance)} 直线估算，非导航)
            </button>
          )}
        </div>

        <div className="map-canvas-shell">
          <canvas
            ref={canvasRef}
            className="map-canvas"
            onContextMenu={(e) => {
              e.preventDefault();
              const rect = e.currentTarget.getBoundingClientRect();
              const { scale, ox, oy } = viewRef.current;
              const px = (e.clientX - rect.left - ox) / scale;
              const py = (e.clientY - rect.top - oy) / scale;
              const marker: CustomMarker = {
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                master,
                px,
                py,
                name: '我的标记',
                color: 0,
              };
              updateMarkers([...customMarkers, marker]);
              setSelected({ kind: 'custom', master, px, py, name: marker.name, active: true, markerId: marker.id, color: 0 });
            }}
            onMouseDown={(e) => {
              const view = viewRef.current;
              view.dragging = true;
              view.moved = 0;
              view.lastX = e.clientX;
              view.lastY = e.clientY;
            }}
            onMouseUp={(e) => {
              const view = viewRef.current;
              view.dragging = false;
              if (view.moved < 5) {
                setSelected(pinAt(e.clientX, e.clientY));
              }
            }}
            onMouseLeave={() => {
              viewRef.current.dragging = false;
              setHover(null);
            }}
            onMouseMove={(e) => {
              const view = viewRef.current;
              if (view.dragging) {
                view.moved += Math.abs(e.clientX - view.lastX) + Math.abs(e.clientY - view.lastY);
                view.ox += e.clientX - view.lastX;
                view.oy += e.clientY - view.lastY;
                view.lastX = e.clientX;
                view.lastY = e.clientY;
                clampMapPosition();
                draw();
                updateHoverTooltipPosition();
              } else {
                setHover(pinAt(e.clientX, e.clientY));
              }
            }}
          />
          {hover && hover.master === master && (
            <div
              ref={hoverTooltipRef}
              style={{
                position: 'absolute',
                left: hoverTooltipPosition?.left ?? 12,
                top: hoverTooltipPosition?.top ?? 12,
                background: 'rgba(76,43,33,0.88)',
                border: '1px solid rgba(225,176,145,0.45)',
                borderLeft: '2px solid rgba(244,204,172,0.78)',
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(16,10,7,0.4)',
                padding: '7px 18px',
                pointerEvents: 'none',
                maxWidth: 'min(320px, calc(100% - 24px))',
                color: '#f0ddc8',
                fontFamily: 'var(--serif)',
                fontSize: 16,
                lineHeight: 1.25,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                visibility: hoverTooltipPosition ? 'visible' : 'hidden',
                zIndex: 1,
              }}
            >
              {hover.name}
            </div>
          )}
          {selected?.kind === 'custom' && selected.master === master && (
            <div
              style={{
                position: 'absolute',
                right: 12,
                top: 12,
                background: 'rgba(20,16,10,0.96)',
                border: '1px solid var(--gold-dim)',
                borderRadius: 10,
                padding: '12px 16px',
                maxWidth: 320,
              }}
            >
              <div className="row" style={{ flexWrap: 'nowrap' }}>
                <span style={{ color: 'var(--gold-2)', fontSize: 14.5, fontFamily: 'var(--serif)' }}>
                  {selected.name}
                </span>
                <span className="spacer" />
                <span
                  style={{ color: 'var(--faint)', cursor: 'pointer', fontSize: 15, lineHeight: 1 }}
                  onClick={() => setSelected(null)}
                >
                  ✕
                </span>
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 4 }}>
                {KIND_ZH[selected.kind]}
                {selected.detail ? ` · ${selected.detail}` : ''}
              </div>
              {selected.kind === 'custom' && selected.markerId && (
                <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <input
                    className="input"
                    defaultValue={selected.name}
                    placeholder="标记名称"
                    onClick={(e) => e.stopPropagation()}
                    onBlur={(e) => {
                      const name = e.target.value.trim() || '我的标记';
                      updateMarkers(customMarkers.map((m) => (m.id === selected.markerId ? { ...m, name } : m)));
                      setSelected({ ...selected, name });
                    }}
                  />
                  <div className="row">
                    {MARKER_COLORS.map((color, index) => (
                      <span
                        key={color}
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 5,
                          background: color,
                          cursor: 'pointer',
                          border: (selected.color ?? 0) === index ? '2px solid #fff' : '2px solid transparent',
                        }}
                        onClick={() => {
                          updateMarkers(customMarkers.map((m) => (m.id === selected.markerId ? { ...m, color: index } : m)));
                          setSelected({ ...selected, color: index });
                        }}
                      />
                    ))}
                    <span className="spacer" />
                    <button
                      className="btn small"
                      onClick={() => {
                        updateMarkers(customMarkers.filter((m) => m.id !== selected.markerId));
                        setSelected(null);
                      }}
                    >
                      删除标记
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {replaySnapshot && (
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(20,16,10,0.95)',
                border: '1px solid var(--gold-dim)',
                borderRadius: 999,
                padding: '6px 18px',
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                fontSize: 12.5,
              }}
            >
              <span style={{ color: 'var(--gold-2)' }}>
                🕰 回放:{new Date(replaySnapshot.t).toLocaleString('zh-CN', { hour12: false })}
              </span>
              {!replaySnapshot.slots[slotIndex]?.graceFlags && (
                <span style={{ color: 'var(--faint)' }}>(旧快照无赐福明细,仅回放 Boss)</span>
              )}
              <span
                style={{ color: 'var(--muted)', cursor: 'pointer' }}
                onClick={clearMapReplay}
              >
                ✕ 退出回放
              </span>
            </div>
          )}
        </div>

        <div className="row" style={{ marginTop: 10, fontSize: 12, color: 'var(--muted)' }}>
          <span><span style={{ color: '#ffd24d' }}>●</span> 已点亮赐福</span>
          <span><span style={{ color: '#5a4826' }}>●</span> 未点亮</span>
          <span><span style={{ color: '#e0442a' }}>☠</span> 已讨伐 Boss</span>
          <span><span style={{ color: '#694230' }}>☠</span> 未讨伐</span>
          <span><span style={{ color: '#5fae7e' }}>▲</span> NPC</span>
          {trackedQuestNpc && (
            <button className="map-track-clear" onClick={() => setTrackedQuestNpc(null)}>
              取消追踪:{trackedQuestNpc}
            </button>
          )}
          <span><span style={{ color: '#3fa4ff' }}>●</span> 当前位置</span>
          <span><span style={{ color: '#ff3322' }}>●</span> 待回收血迹</span>
          <span><span style={{ color: '#961e14' }}>●</span> 历史死亡点</span>
        </div>
      </Card>
    </div>
  );
}
