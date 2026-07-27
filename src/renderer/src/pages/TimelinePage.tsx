import { useEffect, useMemo, useState } from 'react';
import type { HistorySnapshot, SlotSnapshot } from '../../../shared/contracts';
import { LineChart } from '../components/charts.tsx';
import { Card, PageHead } from '../components/ui.tsx';
import { formatCompact, formatDateTime } from '../lib/format.ts';
import { useSaveContext } from '../lib/save-context.tsx';
import { buildEvents } from '../lib/timeline.ts';
import { deathArchaeology } from '../lib/worldmap.ts';

function GrowthCharts({ timed }: { timed: { t: number; s: SlotSnapshot }[] }) {
  const mk = (pick: (s: SlotSnapshot) => number, unit: string) =>
    timed.map((p, i) => ({
      x: i,
      y: pick(p.s),
      label: (
        <>
          <div>{formatDateTime(p.t)}</div>
          <div style={{ color: 'var(--muted)' }}>
            Lv{p.s.level} · 死亡 {p.s.deaths} · 赐福 {p.s.gracesLit} · Boss {p.s.bossFlags.length}{unit ? '' : ''}
          </div>
        </>
      ),
    }));
  const maxLevel = Math.max(...timed.map((p) => p.s.level), 1);
  const maxDeaths = Math.max(...timed.map((p) => p.s.deaths), 1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontSize: 11.5, color: 'var(--gold-2)' }}>等级(峰值 {maxLevel})</div>
      <LineChart points={mk((s) => s.level, '')} height={120} yMax={maxLevel} yFormat={(v) => `Lv${Math.round(v)}`} />
      <div style={{ fontSize: 11.5, color: 'var(--crimson)' }}>累计死亡(峰值 {maxDeaths})</div>
      <LineChart
        points={mk((s) => s.deaths, '')}
        height={110}
        yMax={maxDeaths}
        yFormat={(v) => `${Math.round(v)} 次`}
        color="var(--crimson)"
      />
    </div>
  );
}

export function TimelinePage() {
  const { savePath, mtimeMs, slotIndex, save, requestMapReplay } = useSaveContext();
  const [history, setHistory] = useState<HistorySnapshot[] | null>(null);
  const [replayIdx, setReplayIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!savePath) return;
    void window.api.getHistory(savePath).then(setHistory);
  }, [savePath, mtimeMs]);

  const currentName = save?.slots[slotIndex]?.player_game_data.character_name || '无名褪色者';

  const timed = useMemo(() => {
    if (!history) return [] as { t: number; s: SlotSnapshot }[];
    return history
      .map((h) => ({ t: h.t, s: h.slots[slotIndex] }))
      .filter((p): p is { t: number; s: SlotSnapshot } => Boolean(p.s) && p.s.name === currentName);
  }, [history, slotIndex, currentName]);
  const points = useMemo(() => timed.map((p) => p.s), [timed]);

  const events = useMemo(() => (history ? buildEvents(history, slotIndex) : []), [history, slotIndex]);
  const deathSpots = useMemo(() => (history ? deathArchaeology(history, slotIndex) : []), [history, slotIndex]);

  if (!save) return null;
  const latest = points[points.length - 1];

  return (
    <div className="page">
      <PageHead
        title="游玩时间线"
        sub={`「${currentName}」的冒险记录 · 已存 ${points.length} 个快照`}
      />

      <div className="notice">
        本页由「自动快照」驱动:应用在每次游戏写存档时记录一份进度切片(等级、死亡、Boss、赐福、卢恩),
        对比相邻快照生成战报。<b style={{ color: 'var(--gold)' }}>开着本工具打游戏,时间线会越来越丰富</b>;
        历史保存在本机,与存档文件绑定。
      </div>

      {points.length >= 2 ? (
        <Card title="成长曲线" hint={`${formatDateTime(history![0].t)} ~ ${formatDateTime(history![history!.length - 1].t)}`}>
          <GrowthCharts timed={timed} />
        </Card>
      ) : (
        <Card title="成长曲线">
          <div className="undone">
            目前只有 {points.length} 个快照,曲线需要至少 2 个。保持本工具开启并正常游玩,游戏每次存档都会自动记录。
          </div>
        </Card>
      )}

      {latest && (
        <div className="stat-grid">
          <div className="stat"><div className="stat-label">最新等级</div><div className="stat-value">{latest.level}</div></div>
          <div className="stat"><div className="stat-label">累计死亡</div><div className="stat-value">{latest.deaths}</div></div>
          <div className="stat"><div className="stat-label">Boss 击杀</div><div className="stat-value">{latest.bossFlags.length}</div></div>
          <div className="stat"><div className="stat-label">赐福点亮</div><div className="stat-value">{latest.gracesLit}</div></div>
          <div className="stat"><div className="stat-label">累计卢恩</div><div className="stat-value">{formatCompact(latest.runesMemory)}</div></div>
        </div>
      )}

      {timed.length >= 2 && (
        <Card title="时光机" hint="拖动滑块回到任意快照,还能在地图上看当时的进度">
          {(() => {
            const idx = replayIdx ?? timed.length - 1;
            const chosen = timed[idx];
            const latest = timed[timed.length - 1];
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                  type="range"
                  min={0}
                  max={timed.length - 1}
                  value={idx}
                  onChange={(e) => setReplayIdx(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#c9a662' }}
                />
                <div className="row">
                  <span className="pill gold">{formatDateTime(chosen.t)}</span>
                  <span className="pill">等级 {chosen.s.level}</span>
                  <span className="pill">死亡 {chosen.s.deaths}</span>
                  <span className="pill">Boss {chosen.s.bossFlags.length}</span>
                  <span className="pill">赐福 {chosen.s.gracesLit}</span>
                  <span className="pill">卢恩 {formatCompact(chosen.s.runesMemory)}</span>
                  <span className="spacer" />
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                    距最新:等级 +{latest.s.level - chosen.s.level} · Boss +
                    {latest.s.bossFlags.length - chosen.s.bossFlags.length} · 死亡 +
                    {latest.s.deaths - chosen.s.deaths}
                  </span>
                  <button className="btn small primary" onClick={() => requestMapReplay(chosen.t)}>
                    在地图看这一刻
                  </button>
                </div>
              </div>
            );
          })()}
        </Card>
      )}

      {deathSpots.length > 0 && (
        <Card title="死亡考古" hint="历史血迹按地区聚合(数据来自快照)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {deathSpots.slice(0, 10).map((spot) => {
              const max = deathSpots[0].count;
              return (
                <div key={spot.area} className="row" style={{ gap: 12 }}>
                  <span style={{ width: 220, fontSize: 12.5, color: 'var(--muted)' }}>{spot.area}</span>
                  <div className="bar" style={{ flex: 1 }}>
                    <div className="bar-fill crimson" style={{ width: `${(spot.count / max) * 100}%` }} />
                  </div>
                  <span className="mono" style={{ width: 56, textAlign: 'right', color: 'var(--gold-2)' }}>
                    {spot.count} 次
                  </span>
                </div>
              );
            })}
            <div className="desc" style={{ marginTop: 4 }}>
              统计的是"留下过血迹的地点"(每个存档周期的最近死亡点),不是全部死亡次数;完整血迹散点见「交界地图」页。
            </div>
          </div>
        </Card>
      )}

      <Card title="战报" hint={events.length ? `${events.length} 条` : undefined}>
        {events.length === 0 ? (
          <div className="undone">还没有可对比的变化。去讨伐一个 Boss,回来就能看到第一条战报。</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: '52vh', overflowY: 'auto' }}>
            {events.slice(0, 120).map((event, i) => (
              <div key={`${event.t}-${i}`}>
                {event.newSession && (
                  <div style={{ textAlign: 'center', color: 'var(--faint)', fontSize: 11.5, letterSpacing: 2, margin: '6px 0' }}>
                    —— 新的冒险时段 ——
                  </div>
                )}
                <div className="row" style={{ alignItems: 'flex-start' }}>
                  <span className="pill" style={{ flex: 'none' }}>{formatDateTime(event.t)}</span>
                  <div style={{ flex: 1, lineHeight: 1.9 }}>
                    {event.bosses.map((boss) => (
                      <span key={boss} className="pill gold" style={{ marginRight: 6 }}>⚔ 击败 {boss}</span>
                    ))}
                    {event.parts.length > 0 && (
                      <span style={{ color: 'var(--muted)', fontSize: 12.5 }}>{event.parts.join(' · ')}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
