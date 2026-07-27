import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { HistorySnapshot } from '../../../shared/contracts';
import { Card, PageHead } from '../components/ui.tsx';
import { deriveProfile } from '../lib/derive.ts';
import { MASTER_LABEL, type MasterId } from '../lib/map-affine.ts';
import { getTile, NATIVE_SIZE, pickZoom } from '../lib/map-tiles.ts';
import { loadMarkers, MARKER_COLORS, saveMarkers, type CustomMarker } from '../lib/markers-store.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';
import { buildPins, REGION_LABELS, type MapPin, type PinKind } from '../lib/worldmap.ts';

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
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<HistorySnapshot[] | null>(null);
  const viewRef = useRef({ scale: 0.08, ox: 0, oy: 0, dragging: false, moved: 0, lastX: 0, lastY: 0 });
  const pendingFocusRef = useRef<MapPin | null>(null);

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

  useEffect(() => {
    if (trackedQuestNpc) setLayers((current) => (current.npc ? current : { ...current, npc: true }));
  }, [trackedQuestNpc]);

  const masterPins = useMemo(() => pins.filter((p) => p.master === master), [pins, master]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return pins
      .filter((p) => p.kind !== 'blood-history' && p.name.toLowerCase().includes(q))
      .slice(0, 8);
  }, [pins, query]);

  // 瓦片异步加载完成后合帧重绘
  const drawRef = useRef<() => void>(() => {});
  const redrawPending = useRef(false);
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
      if (pin.kind === 'grace') return layers.grace;
      if (pin.kind === 'boss') return layers.boss;
      if (pin.kind === 'npc') return layers.npc;
      if (pin.kind === 'blood' || pin.kind === 'blood-history') return layers.blood;
      if (pin.kind === 'custom') return layers.custom;
      return true;
    },
    [layers],
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }
    const ctx = canvas.getContext('2d')!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#0c0a07';
    ctx.fillRect(0, 0, w, h);

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
    ctx.imageSmoothingEnabled = true;
    const size = tileNative * scale + 0.6;
    for (let ty = ty0; ty <= ty1; ty++) {
      for (let tx = tx0; tx <= tx1; tx++) {
        const img = getTile(master, z, ty, tx, scheduleRedraw);
        if (!img) continue;
        ctx.drawImage(img, sx(tx * tileNative), sy(ty * tileNative), size, size);
      }
    }

    // ———— 点位 ————
    const drawOrder: PinKind[] = ['blood-history', 'npc', 'grace', 'boss', 'blood', 'custom', 'player'];
    ctx.lineWidth = 1.4;
    for (const kind of drawOrder) {
      for (const pin of masterPins) {
        if (pin.kind !== kind || !visible(pin)) continue;
        const x = sx(pin.px);
        const y = sy(pin.py);
        if (x < -20 || y < -20 || x > w + 20 || y > h + 20) continue;
        const color = pin.active ? COLORS[kind].on : COLORS[kind].off;
        ctx.fillStyle = color;
        ctx.strokeStyle = 'rgba(16,12,6,0.9)';
        ctx.beginPath();
        if (kind === 'player') {
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#eaf6ff';
          ctx.lineWidth = 2.4;
          ctx.stroke();
          ctx.lineWidth = 1.4;
        } else if (kind === 'npc') {
          ctx.moveTo(x, y - 4.4);
          ctx.lineTo(x + 4, y + 3.2);
          ctx.lineTo(x - 4, y + 3.2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          if (pin.tracked) {
            ctx.beginPath();
            ctx.setLineDash([3, 2]);
            ctx.strokeStyle = '#ffd24d';
            ctx.lineWidth = 1.8;
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.lineWidth = 1.4;
            ctx.strokeStyle = 'rgba(16,12,6,0.9)';
          }
        } else if (kind === 'blood') {
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (kind === 'custom') {
          ctx.fillStyle = MARKER_COLORS[pin.color ?? 0] ?? MARKER_COLORS[0];
          ctx.moveTo(x, y - 6);
          ctx.lineTo(x + 5, y);
          ctx.lineTo(x, y + 6);
          ctx.lineTo(x - 5, y);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else if (kind === 'boss') {
          const r = pin.active ? 5 : 3.6;
          ctx.rect(x - r, y - r, r * 2, r * 2);
          ctx.fill();
          ctx.stroke();
          if (pin.flagId !== undefined && planFlags.has(pin.flagId)) {
            ctx.beginPath();
            ctx.setLineDash([4, 3]);
            ctx.strokeStyle = '#ffd24d';
            ctx.lineWidth = 1.8;
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.lineWidth = 1.4;
            ctx.strokeStyle = 'rgba(16,12,6,0.9)';
          }
        } else {
          ctx.arc(x, y, kind === 'blood-history' ? 3.4 : pin.active ? 4.2 : 3, 0, Math.PI * 2);
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
      const x = sx(pin.px);
      const y = sy(pin.py);
      ctx.strokeStyle = color;
      ctx.lineWidth = pin === selected ? 2.2 : 1.5;
      ctx.beginPath();
      ctx.arc(x, y, pin === selected ? 12 : 9, 0, Math.PI * 2);
      ctx.stroke();
      if (pin === selected) {
        ctx.beginPath();
        ctx.arc(x, y, 17, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,222,122,0.4)';
        ctx.stroke();
      }
    }
    ctx.lineWidth = 1.4;
  }, [masterPins, visible, hover, selected, master, scheduleRedraw, planFlags]);

  drawRef.current = draw;

  const centerOn = useCallback(
    (px: number, py: number, scale?: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const view = viewRef.current;
      if (scale) view.scale = scale;
      view.ox = canvas.clientWidth / 2 - px * view.scale;
      view.oy = canvas.clientHeight / 2 - py * view.scale;
      draw();
    },
    [draw],
  );

  const fitView = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let minX = 0;
    let maxX = NATIVE_SIZE;
    let minY = 0;
    let maxY = NATIVE_SIZE;
    if (masterPins.length > 0) {
      const xs = masterPins.map((p) => p.px);
      const ys = masterPins.map((p) => p.py);
      minX = Math.min(...xs) - 400;
      maxX = Math.max(...xs) + 400;
      minY = Math.min(...ys) - 400;
      maxY = Math.max(...ys) + 400;
    }
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    viewRef.current.scale = Math.min(w / Math.max(maxX - minX, 1), h / Math.max(maxY - minY, 1));
    viewRef.current.ox = w / 2 - ((minX + maxX) / 2) * viewRef.current.scale;
    viewRef.current.oy = h / 2 - ((minY + maxY) / 2) * viewRef.current.scale;
    draw();
  }, [masterPins, draw]);

  // 母图切换 / 初始:优先消费待定位目标
  useEffect(() => {
    const pending = pendingFocusRef.current;
    if (pending && pending.master === master) {
      pendingFocusRef.current = null;
      setSelected(pending);
      centerOn(pending.px, pending.py, Math.max(viewRef.current.scale, 0.55));
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
        centerOn(pin.px, pin.py, Math.max(viewRef.current.scale, 0.55));
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
    const onResize = () => draw();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [draw]);

  const pinAt = useCallback(
    (clientX: number, clientY: number): MapPin | null => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();
      const mx = clientX - rect.left;
      const my = clientY - rect.top;
      const { scale, ox, oy } = viewRef.current;
      let best: MapPin | null = null;
      let bestDist = 13 * 13;
      for (const pin of masterPins) {
        if (!visible(pin)) continue;
        const dx = pin.px * scale + ox - mx;
        const dy = pin.py * scale + oy - my;
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

  const zoomBy = useCallback(
    (factor: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const view = viewRef.current;
      const cx = canvas.clientWidth / 2;
      const cy = canvas.clientHeight / 2;
      const next = Math.min(4, Math.max(0.015, view.scale * factor));
      view.ox = cx - ((cx - view.ox) / view.scale) * next;
      view.oy = cy - ((cy - view.oy) / view.scale) * next;
      view.scale = next;
      draw();
    },
    [draw],
  );

  if (!slot || !profile) return null;

  const counts = {
    grace: masterPins.filter((p) => p.kind === 'grace').length,
    boss: masterPins.filter((p) => p.kind === 'boss').length,
    npc: masterPins.filter((p) => p.kind === 'npc').length,
    blood: masterPins.filter((p) => p.kind === 'blood-history' || p.kind === 'blood').length,
  };
  const playerPin = pins.find((p) => p.kind === 'player') ?? null;
  const trackedNpcPin = pins.find((p) => p.kind === 'npc' && p.tracked) ?? null;

  const layerButton = (key: keyof Layers, label: string) => (
    <button
      className={`btn small ${layers[key] ? 'primary' : ''}`}
      onClick={() => setLayers({ ...layers, [key]: !layers[key] })}
    >
      {label}
    </button>
  );

  return (
    <div className="page" style={{ maxWidth: 1280 }}>
      <PageHead title="交界地图" sub="真实游戏地图 · 滚轮缩放、拖拽平移、点击点位查看详情" />

      <Card>
        <div className="row" style={{ marginBottom: 10 }}>
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

        <div className="row" style={{ marginBottom: 10 }}>
          {layerButton('grace', `✦ 赐福 ${counts.grace}`)}
          {layerButton('boss', `⚔ Boss ${counts.boss}`)}
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

        <div style={{ position: 'relative' }}>
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '62vh', borderRadius: 8, border: '1px solid var(--line)', cursor: 'grab', display: 'block' }}
            onWheel={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const mx = e.clientX - rect.left;
              const my = e.clientY - rect.top;
              const view = viewRef.current;
              const factor = e.deltaY < 0 ? 1.18 : 1 / 1.18;
              const next = Math.min(4, Math.max(0.015, view.scale * factor));
              view.ox = mx - ((mx - view.ox) / view.scale) * next;
              view.oy = my - ((my - view.oy) / view.scale) * next;
              view.scale = next;
              draw();
            }}
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
                draw();
              } else {
                setHover(pinAt(e.clientX, e.clientY));
              }
            }}
          />
          {hover && hover !== selected && (
            <div
              style={{
                position: 'absolute',
                left: 12,
                bottom: 12,
                background: 'rgba(18,15,10,0.92)',
                border: '1px solid var(--line-2)',
                borderRadius: 8,
                padding: '7px 13px',
                pointerEvents: 'none',
                maxWidth: 360,
              }}
            >
              <span style={{ color: 'var(--gold-2)', fontSize: 13 }}>{hover.name}</span>
              <span style={{ color: 'var(--faint)', fontSize: 11.5, marginLeft: 8 }}>{KIND_ZH[hover.kind]}</span>
            </div>
          )}
          {selected && (
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
                {selected.kind === 'grace' && (selected.active ? ' · 已点亮' : ' · 未点亮')}
                {selected.kind === 'boss' && (selected.active ? ' · 已讨伐' : ' · 未讨伐')}
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
          <span><span style={{ color: '#e0442a' }}>■</span> 已讨伐 Boss</span>
          <span><span style={{ color: '#694230' }}>■</span> 未讨伐</span>
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
