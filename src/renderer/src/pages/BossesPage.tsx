import { useMemo, useState } from 'react';
import { Card, PageHead, ProgressLine } from '../components/ui.tsx';
import { BADGE_ZH, bossBadgesFor, bossPlaceZh, bossReward } from '../lib/boss-meta.ts';
import { deriveBosses, type BossRow } from '../lib/derive.ts';
import { formatNumber } from '../lib/format.ts';
import { markerToMasterPixel } from '../lib/map-affine.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';

type Filter = 'all' | 'done' | 'todo' | 'legend';

function Medallion({ row }: { row: BossRow }) {
  const reward = bossReward(row.boss.defeatFlagId);
  if (reward?.iconUrl) {
    return (
      <img
        src={reward.iconUrl}
        width={46}
        height={46}
        title={`奖励:${reward.zh}`}
        style={{
          borderRadius: '50%',
          border: `2px solid ${row.defeated ? 'var(--legendary)' : 'var(--line-2)'}`,
          background: '#16110a',
          objectFit: 'contain',
          filter: row.defeated ? 'none' : 'grayscale(0.85) brightness(0.75)',
          flex: 'none',
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: 46,
        height: 46,
        borderRadius: '50%',
        border: `1.5px solid ${row.defeated ? 'var(--gold-dim)' : 'var(--line)'}`,
        background: 'radial-gradient(circle at 35% 30%, #262017, #14100a)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--serif)',
        fontSize: 19,
        color: row.defeated ? 'var(--gold-2)' : 'var(--faint)',
        flex: 'none',
      }}
    >
      {row.display.replace(/[“”「」]/g, '').slice(0, 1)}
    </div>
  );
}

function BossCard({ row }: { row: BossRow }) {
  const { requestMapFocus, planFlags, togglePlanFlag } = useSaveContext();
  const badges = bossBadgesFor(row.boss.defeatFlagId, row.boss.mapId);
  const reward = bossReward(row.boss.defeatFlagId);
  const projectedLocations = row.boss.locations
    .map((location) => markerToMasterPixel(location.mapId, location.x, location.z))
    .filter((point) => point !== null);
  const planned = planFlags.has(row.boss.defeatFlagId);

  return (
    <div
      className="equip-item"
      style={{
        opacity: row.defeated ? 1 : 0.82,
        borderColor: badges[0] === 'demigod' || badges[0] === 'shardbearer' ? 'var(--line-2)' : undefined,
      }}
    >
      <Medallion row={row} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="row" style={{ gap: 8, flexWrap: 'nowrap' }}>
          <span
            className={row.defeated ? 'done' : 'undone'}
            style={{ flex: 'none', width: 15, textAlign: 'center' }}
          >
            {row.defeated ? '✓' : '·'}
          </span>
          <span
            style={{
              fontSize: 13.5,
              color: row.defeated ? 'var(--text)' : 'var(--muted)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {row.display}
          </span>
          {badges.slice(0, 2).map((b) => (
            <span
              key={b}
              className="pill"
              style={{
                flex: 'none',
                fontSize: 10,
                padding: '1px 8px',
                color: b === 'demigod' ? 'var(--legendary)' : b === 'shardbearer' ? 'var(--epic)' : b === 'legend' ? 'var(--rare)' : 'var(--faint)',
              }}
            >
              {BADGE_ZH[b]}
            </span>
          ))}
        </div>
        <div className="row" style={{ gap: 10, marginTop: 2 }}>
          {row.boss.name && row.display !== row.boss.name && (
            <span className="en-name" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 220 }}>
              {row.boss.name}
            </span>
          )}
          {row.boss.runes > 0 && (
            <span style={{ fontSize: 11, color: 'var(--gold-dim)' }} title="击杀获得卢恩">
              卢恩 {formatNumber(row.boss.runes)}
            </span>
          )}
          {reward && <span style={{ fontSize: 11, color: 'var(--faint)' }}>掉落:{reward.zh}</span>}
          {row.boss.locations.length > 1 && (
            <span style={{ fontSize: 11, color: 'var(--faint)' }}>共 {row.boss.locations.length} 个地点</span>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 'none' }}>
        {projectedLocations.map((projected, index) => (
          <button
            key={`${projected.master}-${projected.px}-${projected.py}`}
            className="btn small"
            onClick={() => requestMapFocus({ ...projected, name: row.display })}
          >
            {projectedLocations.length > 1 ? `定位 ${index + 1}` : '定位'}
          </button>
        ))}
        {!row.defeated && (
          <button className={`btn small ${planned ? 'primary' : ''}`} onClick={() => togglePlanFlag(row.boss.defeatFlagId)}>
            {planned ? '已计划' : '计划'}
          </button>
        )}
      </div>
    </div>
  );
}

export function BossesPage() {
  const slot = useActiveSlot();
  const { requestMapFocus, planFlags, togglePlanFlag } = useSaveContext();
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const [collapsed, setCollapsed] = useState<ReadonlySet<string>>(new Set());

  const rows = useMemo(() => (slot ? deriveBosses(slot) : []), [slot]);

  const groups = useMemo(() => {
    const byPlace = new Map<string, BossRow[]>();
    for (const row of rows) {
      const place = bossPlaceZh(row.boss.mapId, row.boss.x, row.boss.z, row.boss.defeatFlagId);
      const list = byPlace.get(place) ?? [];
      list.push(row);
      byPlace.set(place, list);
    }
    return [...byPlace.entries()]
      .map(([place, list]) => ({
        place,
        list: [...list].sort((a, b) => b.boss.runes - a.boss.runes),
        done: list.filter((r) => r.defeated).length,
        maxRunes: Math.max(...list.map((r) => r.boss.runes)),
      }))
      .sort((a, b) => b.maxRunes - a.maxRunes);
  }, [rows]);

  if (!slot) return null;

  const defeated = rows.filter((r) => r.defeated).length;
  const q = search.trim().toLowerCase();

  const matches = (row: BossRow) => {
    if (filter === 'done' && !row.defeated) return false;
    if (filter === 'todo' && row.defeated) return false;
    if (filter === 'legend' && bossBadgesFor(row.boss.defeatFlagId, row.boss.mapId).every((b) => b === 'field' || b === 'dungeon' || b === 'great-enemy')) return false;
    if (q) {
      const en = row.boss.name?.toLowerCase() ?? '';
      if (!row.display.toLowerCase().includes(q) && !en.includes(q)) return false;
    }
    return true;
  };

  const toggleGroup = (place: string) => {
    const next = new Set(collapsed);
    if (next.has(place)) next.delete(place);
    else next.add(place);
    setCollapsed(next);
  };

  return (
    <div className="page">
      <PageHead title="Boss 讨伐名录" sub={`已讨伐 ${defeated} / ${rows.length}(含黄金树幽影 DLC)· 按地区分组`} />

      <Card>
        <ProgressLine label="总讨伐进度" value={defeated} total={rows.length} />
        <div className="row" style={{ marginTop: 14 }}>
          {(
            [
              ['all', '全部'],
              ['legend', '半神与传说'],
              ['done', '已讨伐'],
              ['todo', '未讨伐'],
            ] as [Filter, string][]
          ).map(([key, label]) => (
            <button key={key} className={`btn small ${filter === key ? 'primary' : ''}`} onClick={() => setFilter(key)}>
              {label}
            </button>
          ))}
          <input
            className="input"
            style={{ width: 240 }}
            placeholder="搜索 Boss(中/英文)…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="spacer" />
          <button className="btn small" onClick={() => setCollapsed(new Set())}>展开全部</button>
          <button className="btn small" onClick={() => setCollapsed(new Set(groups.map((g) => g.place)))}>收起全部</button>
        </div>
      </Card>

      {planFlags.size > 0 && (
        <Card title="讨伐计划" hint="击杀后自动完成;计划中的 Boss 在地图上有金色虚线环">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {rows
              .filter((row) => planFlags.has(row.boss.defeatFlagId))
              .map((row) => (
                <div key={row.boss.defeatFlagId} className="row" style={{ gap: 10 }}>
                  <span className={row.defeated ? 'done' : 'undone'} style={{ width: 18, textAlign: 'center' }}>
                    {row.defeated ? '✓' : '·'}
                  </span>
                  <span style={row.defeated ? { textDecoration: 'line-through', color: 'var(--faint)' } : {}}>
                    {row.display}
                  </span>
                  <span style={{ color: 'var(--faint)', fontSize: 11.5 }}>
                    {bossPlaceZh(row.boss.mapId, row.boss.x, row.boss.z, row.boss.defeatFlagId)}
                  </span>
                  <span className="spacer" />
                  {(() => {
                    const projected = markerToMasterPixel(row.boss.mapId, row.boss.x, row.boss.z);
                    return projected ? (
                      <button className="btn small" onClick={() => requestMapFocus({ ...projected, name: row.display })}>
                        定位
                      </button>
                    ) : null;
                  })()}
                  <button className="btn small" onClick={() => togglePlanFlag(row.boss.defeatFlagId)}>
                    移除
                  </button>
                </div>
              ))}
          </div>
        </Card>
      )}

      {groups.map((group) => {
        const visible = group.list.filter(matches);
        if (visible.length === 0) return null;
        const isCollapsed = collapsed.has(group.place) && !q && filter === 'all';
        return (
          <Card key={group.place}>
            <div
              className="row"
              style={{ cursor: 'pointer', flexWrap: 'nowrap' }}
              onClick={() => toggleGroup(group.place)}
            >
              <span style={{ color: 'var(--faint)', width: 14, fontSize: 11 }}>{isCollapsed ? '▸' : '▾'}</span>
              <span className="card-title" style={{ marginBottom: 0 }}>✦ {group.place}</span>
              <span className="spacer" />
              <div className="bar" style={{ width: 160 }}>
                <div className="bar-fill" style={{ width: `${(group.done / group.list.length) * 100}%` }} />
              </div>
              <span className="pill" style={{ flex: 'none' }}>
                {group.done}/{group.list.length}
              </span>
            </div>
            {!isCollapsed && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
                  gap: 10,
                  marginTop: 12,
                }}
              >
                {visible.map((row) => (
                  <BossCard key={row.boss.defeatFlagId} row={row} />
                ))}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
