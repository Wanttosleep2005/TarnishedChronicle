import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, PageHead, ProgressLine } from '../components/ui.tsx';
import { bossPortrait } from '../data/boss-images.ts';
import { iconThumbUrl } from '../data/images.ts';
import { BADGE_ZH, bossBadgesFor, bossPlaceZh, bossReward } from '../lib/boss-meta.ts';
import { bossScope, type BossScope } from '../lib/boss-data.ts';
import {
  BOSS_LOOT_KIND_ZH,
  BOSS_LOOT_SOURCE_ZH,
  bossLootDetails,
  bossLootSearchTerms,
  bossRemembranceExchange,
  type BossLootItem,
} from '../lib/boss-loot-details.ts';
import { deriveBosses, type BossRow } from '../lib/derive.ts';
import { formatNumber } from '../lib/format.ts';
import { fuzzyMatch } from '../lib/fuzzy-search.ts';
import { markerToMasterPixel } from '../lib/map-affine.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';

type Filter = 'all' | 'done' | 'todo' | 'legend';
type ScopeFilter = 'all' | BossScope;

const SCOPE_OPTIONS: readonly { value: ScopeFilter; label: string }[] = [
  { value: 'all', label: '全部' },
  { value: 'base', label: '本体' },
  { value: 'dlc', label: '黄金树幽影' },
];

function scopeLabel(scope: ScopeFilter): string {
  if (scope === 'base') return '本体';
  if (scope === 'dlc') return '黄金树幽影';
  return '全部记录';
}

function locationLabel(row: BossRow, locationIndex: number): string {
  const location = row.boss.locations[locationIndex];
  if (!location) return '其他地点';
  return bossPlaceZh(location.mapId, location.x, location.z, locationIndex === 0 ? row.boss.defeatFlagId : undefined);
}

function compareByRunes(left: BossRow, right: BossRow): number {
  return right.boss.runes - left.boss.runes || left.display.localeCompare(right.display, 'zh-CN');
}

function Medallion({ row, size = 46 }: { row: BossRow; size?: number }) {
  const reward = bossReward(row.boss.defeatFlagId);
  const portrait = bossPortrait(row.boss.defeatFlagId);
  if (reward?.iconUrl) {
    return (
      <img
        src={reward.iconUrl}
        width={size}
        height={size}
        alt=""
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
  if (portrait) {
    return (
      <img
        src={portrait.url}
        width={size}
        height={size}
        alt=""
        title={`Boss 肖像 (${portrait.source === 'fanapi' ? 'Fan API' : 'Fandom'})`}
        style={{
          borderRadius: '50%',
          border: `2px solid ${row.defeated ? 'var(--gold-dim)' : 'var(--line-2)'}`,
          background: '#16110a',
          objectFit: 'cover',
          filter: row.defeated ? 'none' : 'grayscale(0.72) brightness(0.72)',
          flex: 'none',
        }}
      />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `1.5px solid ${row.defeated ? 'var(--gold-dim)' : 'var(--line)'}`,
        background: 'radial-gradient(circle at 35% 30%, #262017, #14100a)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--serif)',
        fontSize: Math.max(18, Math.round(size * 0.38)),
        color: row.defeated ? 'var(--gold-2)' : 'var(--faint)',
        flex: 'none',
      }}
    >
      {row.display.replace(/[“”·]/g, '').slice(0, 1)}
    </div>
  );
}

function BossLootGrid({ items }: { items: readonly BossLootItem[] }) {
  return (
    <div className="boss-loot-grid">
      {items.map((item, index) => {
        const iconUrl = iconThumbUrl(item.icon);
        return (
          <article className="boss-loot-item" key={`${item.en}-${item.quantity}-${item.source ?? 'drop'}-${index}`}>
            {iconUrl ? (
              <img className="boss-loot-icon" src={iconUrl} width={42} height={42} alt="" />
            ) : (
              <span className="boss-loot-icon placeholder" aria-hidden="true" />
            )}
            <div className="boss-loot-copy">
              <strong>{item.zh}</strong>
              {item.zh !== item.en && <span>{item.en}</span>}
              <div className="boss-loot-meta">
                <span>{BOSS_LOOT_KIND_ZH[item.kind]}</span>
                {item.quantity > 1 && <span>x{item.quantity}</span>}
                {item.source && <span>{BOSS_LOOT_SOURCE_ZH[item.source]}</span>}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function BossCard({
  row,
  onOpenDetail,
  onFocus,
}: {
  row: BossRow;
  onOpenDetail: (row: BossRow) => void;
  onFocus: (row: BossRow, locationIndex: number) => void;
}) {
  const { planFlags, togglePlanFlag } = useSaveContext();
  const badges = bossBadgesFor(row.boss.defeatFlagId, row.boss.mapId);
  const reward = bossReward(row.boss.defeatFlagId);
  const planned = planFlags.has(row.boss.defeatFlagId);
  const locationPins = row.boss.locations.reduce<{ index: number; key: string }[]>((pins, location, index) => {
    const projected = markerToMasterPixel(location.mapId, location.x, location.z);
    if (projected) pins.push({ index, key: `${projected.master}-${projected.px}-${projected.py}` });
    return pins;
  }, []);

  return (
    <article className={`boss-card ${row.defeated ? 'is-defeated' : 'is-pending'}`}>
      <Medallion row={row} />
      <div className="boss-card-main">
        <div className="boss-card-title-row">
          <span className={`boss-status ${row.defeated ? 'is-defeated' : 'is-pending'}`}>{row.defeated ? '已讨伐' : '未讨伐'}</span>
          <button type="button" className="boss-card-name" onClick={() => onOpenDetail(row)}>
            {row.display}
          </button>
          {badges.slice(0, 2).map((badge) => (
            <span key={badge} className={`boss-badge ${badge}`}>
              {BADGE_ZH[badge]}
            </span>
          ))}
        </div>
        <div className="boss-card-meta">
          {row.boss.name && row.display !== row.boss.name && <span className="en-name">{row.boss.name}</span>}
          {row.boss.runes > 0 && <span>卢恩 {formatNumber(row.boss.runes)}</span>}
          {reward && <span>奖励:{reward.zh}</span>}
          {row.boss.locations.length > 1 && <span>共 {row.boss.locations.length} 个地点</span>}
        </div>
      </div>
      <div className="boss-card-actions">
        <button type="button" className="btn small" onClick={() => onOpenDetail(row)}>
          详情
        </button>
        {locationPins.map((pin) => (
          <button type="button" key={pin.key} className="btn small" onClick={() => onFocus(row, pin.index)}>
            {locationPins.length > 1 ? `定位 ${pin.index + 1}` : '定位'}
          </button>
        ))}
        {!row.defeated && (
          <button type="button" className={`btn small ${planned ? 'primary' : ''}`} onClick={() => togglePlanFlag(row.boss.defeatFlagId)}>
            {planned ? '已计划' : '计划'}
          </button>
        )}
      </div>
    </article>
  );
}

function BossDialog({
  row,
  onClose,
  onFocus,
}: {
  row: BossRow;
  onClose: () => void;
  onFocus: (row: BossRow, locationIndex: number) => void;
}) {
  const { planFlags, togglePlanFlag } = useSaveContext();
  const loot = bossLootDetails(row.boss.defeatFlagId) ?? [];
  const remembranceExchange = bossRemembranceExchange(row.boss.defeatFlagId);
  const badges = bossBadgesFor(row.boss.defeatFlagId, row.boss.mapId);
  const planned = planFlags.has(row.boss.defeatFlagId);
  const titleId = `boss-dialog-title-${row.boss.defeatFlagId}`;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="boss-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="boss-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <header className="boss-dialog-head">
          <div className="boss-dialog-heading">
            <div className="boss-dialog-meta">
              <span className={`boss-status ${row.defeated ? 'is-defeated' : 'is-pending'}`}>{row.defeated ? '已讨伐' : '未讨伐'}</span>
              <span>{bossScope(row.boss) === 'dlc' ? '黄金树幽影' : '本体'}</span>
              {badges.map((badge) => (
                <span key={badge}>{BADGE_ZH[badge]}</span>
              ))}
            </div>
            <h2 id={titleId}>{row.display}</h2>
            {row.boss.name && row.display !== row.boss.name && <p>{row.boss.name}</p>}
          </div>
          <button type="button" className="boss-dialog-close" aria-label="关闭 Boss 详情" onClick={onClose} autoFocus>
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <div className="boss-dialog-body">
          <aside className="boss-dialog-profile">
            <Medallion row={row} size={88} />
            <dl className="boss-dialog-stats">
              <div>
                <dt>击杀卢恩</dt>
                <dd>{row.boss.runes > 0 ? formatNumber(row.boss.runes) : '未记录'}</dd>
              </div>
              <div>
                <dt>讨伐地点</dt>
                <dd>{row.boss.locations.length}</dd>
              </div>
            </dl>
            {!row.defeated && (
              <button type="button" className={`btn small ${planned ? 'primary' : ''}`} onClick={() => togglePlanFlag(row.boss.defeatFlagId)}>
                {planned ? '移出计划' : '加入计划'}
              </button>
            )}
          </aside>
          <div className="boss-dialog-facts">
            <section className="boss-dialog-section">
              <h3>讨伐地点</h3>
              <div className="boss-dialog-location-list">
                {row.boss.locations.map((location, index) => {
                  const canLocate = markerToMasterPixel(location.mapId, location.x, location.z) !== null;
                  return (
                    <div className="boss-dialog-location" key={`${location.mapId}-${location.x}-${location.z}`}>
                      <div>
                        <strong>{locationLabel(row, index)}</strong>
                        {row.boss.locations.length > 1 && <span>地点 {index + 1}</span>}
                      </div>
                      {canLocate && (
                        <button type="button" className="btn small" onClick={() => onFocus(row, index)}>
                          地图定位
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="boss-dialog-section boss-loot-section">
              <h3>固定掉落</h3>
              {loot.length > 0 ? (
                <BossLootGrid items={loot} />
              ) : (
                <p className="boss-dialog-muted">没有固定装备或道具，仅奖励击杀卢恩。</p>
              )}
            </section>
            {remembranceExchange && (
              <section className="boss-dialog-section boss-loot-section">
                <h3>追忆兑换</h3>
                <div className="boss-remembrance-caption">
                  <strong>{remembranceExchange.remembrance.zh}</strong>
                  <span>圆桌厅堂 · 解指恩雅</span>
                </div>
                <BossLootGrid items={remembranceExchange.rewards} />
              </section>
            )}
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}

export function BossesPage() {
  const slot = useActiveSlot();
  const { requestMapFocus, planFlags } = useSaveContext();
  const [filter, setFilter] = useState<Filter>('all');
  const [scope, setScope] = useState<ScopeFilter>('all');
  const [search, setSearch] = useState('');
  const [collapsed, setCollapsed] = useState<ReadonlySet<string>>(new Set());
  const [selectedFlag, setSelectedFlag] = useState<number | null>(null);

  const rows = useMemo(() => (slot ? deriveBosses(slot) : []), [slot]);
  const scopedRows = useMemo(
    () => rows.filter((row) => scope === 'all' || bossScope(row.boss) === scope),
    [rows, scope],
  );
  const groups = useMemo(() => {
    const byPlace = new Map<string, BossRow[]>();
    for (const row of scopedRows) {
      const place = bossPlaceZh(row.boss.mapId, row.boss.x, row.boss.z, row.boss.defeatFlagId);
      const list = byPlace.get(place) ?? [];
      list.push(row);
      byPlace.set(place, list);
    }
    return [...byPlace.entries()]
      .map(([place, list]) => ({
        place,
        list: [...list].sort(compareByRunes),
        done: list.filter((row) => row.defeated).length,
        maxRunes: Math.max(...list.map((row) => row.boss.runes)),
      }))
      .sort((left, right) => right.maxRunes - left.maxRunes || left.place.localeCompare(right.place, 'zh-CN'));
  }, [scopedRows]);
  const plannedRows = useMemo(() => {
    const byFlag = new Map(scopedRows.map((row) => [row.boss.defeatFlagId, row]));
    return [...planFlags].flatMap((flag) => {
      const row = byFlag.get(flag);
      return row ? [row] : [];
    });
  }, [planFlags, scopedRows]);
  const plannedTargets = useMemo(() => plannedRows.filter((row) => !row.defeated), [plannedRows]);
  const fallbackTargets = useMemo(
    () => scopedRows.filter((row) => !row.defeated).sort(compareByRunes),
    [scopedRows],
  );

  const defeated = scopedRows.filter((row) => row.defeated).length;
  const remainingRunes = scopedRows.filter((row) => !row.defeated).reduce((sum, row) => sum + row.boss.runes, 0);
  const target = plannedTargets[0] ?? fallbackTargets[0] ?? null;
  const targetReason = target
    ? plannedTargets.length > 0
      ? '讨伐计划中的首个目标'
      : '未讨伐目标中卢恩最高'
    : '当前范围已全部讨伐';
  const hasSearch = Boolean(search.trim());
  const selectedRow = selectedFlag === null ? null : rows.find((row) => row.boss.defeatFlagId === selectedFlag) ?? null;
  const matches = (row: BossRow) => {
    if (filter === 'done' && !row.defeated) return false;
    if (filter === 'todo' && row.defeated) return false;
    if (filter === 'legend' && bossBadgesFor(row.boss.defeatFlagId, row.boss.mapId).every((badge) => badge === 'field' || badge === 'dungeon' || badge === 'great-enemy')) return false;
    if (hasSearch && !fuzzyMatch(search, row.display, row.boss.name ?? '', ...bossLootSearchTerms(row.boss.defeatFlagId))) return false;
    return true;
  };
  const visibleGroups = groups
    .map((group) => ({ ...group, visible: group.list.filter(matches) }))
    .filter((group) => group.visible.length > 0);

  const focusLocation = (row: BossRow, locationIndex: number) => {
    const location = row.boss.locations[locationIndex];
    if (!location) return;
    const projected = markerToMasterPixel(location.mapId, location.x, location.z);
    if (projected) requestMapFocus({ ...projected, name: row.display });
  };
  const toggleGroup = (place: string) => {
    const next = new Set(collapsed);
    if (next.has(place)) next.delete(place);
    else next.add(place);
    setCollapsed(next);
  };

  if (!slot) return null;

  return (
    <div className="page">
      <PageHead title="Boss 讨伐战报" sub={`${scopeLabel(scope)} · 已讨伐 ${defeated} / ${scopedRows.length} · 按真实击杀旗标统计`} />

      <Card className="boss-command-panel">
        <div className="boss-command-layout">
          <section className="boss-command-summary" aria-label="讨伐进度总览">
            <div className="boss-command-eyebrow">战况总览</div>
            <div className="boss-scope-switch" aria-label="Boss 范围">
              {SCOPE_OPTIONS.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  className={`btn small ${scope === option.value ? 'primary' : ''}`}
                  aria-pressed={scope === option.value}
                  onClick={() => setScope(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <ProgressLine label={`${scopeLabel(scope)}讨伐进度`} value={defeated} total={scopedRows.length} />
            <dl className="boss-overview-stats">
              <div>
                <dt>未讨伐</dt>
                <dd>{scopedRows.length - defeated}</dd>
              </div>
              <div>
                <dt>计划中</dt>
                <dd>{plannedTargets.length}</dd>
              </div>
              <div>
                <dt>待获卢恩</dt>
                <dd>{formatNumber(remainingRunes)}</dd>
              </div>
            </dl>
          </section>
          <section className="boss-command-target" aria-label="当前追猎目标">
            <div className="boss-command-eyebrow">当前追猎</div>
            {target ? (
              <div className="boss-target-content">
                <Medallion row={target} size={54} />
                <div>
                  <button type="button" className="boss-target-name" onClick={() => setSelectedFlag(target.boss.defeatFlagId)}>
                    {target.display}
                  </button>
                  <span>{locationLabel(target, 0)}</span>
                  <small>{targetReason}</small>
                </div>
              </div>
            ) : (
              <p className="boss-command-empty">当前范围没有待讨伐目标。</p>
            )}
            {target && (
              <div className="boss-target-actions">
                <button type="button" className="btn small" onClick={() => focusLocation(target, 0)}>
                  地图定位
                </button>
                {!target.defeated && (
                  <button type="button" className={`btn small ${planFlags.has(target.boss.defeatFlagId) ? 'primary' : ''}`} onClick={() => setSelectedFlag(target.boss.defeatFlagId)}>
                    查看详情
                  </button>
                )}
              </div>
            )}
          </section>
          <section className="boss-hunt-queue" aria-label="讨伐计划队列">
            <div className="boss-command-eyebrow">讨伐队列</div>
            {plannedTargets.length > 0 ? (
              <ol className="boss-queue-list">
                {plannedTargets.slice(0, 4).map((row, index) => (
                  <li key={row.boss.defeatFlagId}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <button type="button" onClick={() => setSelectedFlag(row.boss.defeatFlagId)}>{row.display}</button>
                    <small>{row.boss.runes > 0 ? formatNumber(row.boss.runes) : '—'} 卢恩</small>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="boss-command-empty">尚未标记讨伐计划。</p>
            )}
            {plannedTargets.length > 4 && <span className="boss-queue-more">另有 {plannedTargets.length - 4} 个待讨伐目标</span>}
            {plannedRows.length > plannedTargets.length && <span className="boss-queue-more">本范围已有 {plannedRows.length - plannedTargets.length} 个计划完成</span>}
          </section>
        </div>
        <div className="boss-filter-bar">
          <div className="boss-filter-tabs" aria-label="Boss 状态筛选">
            {(
              [
                ['all', '全部'],
                ['legend', '半神与传说'],
                ['done', '已讨伐'],
                ['todo', '未讨伐'],
              ] as [Filter, string][]
            ).map(([value, label]) => (
              <button type="button" key={value} className={`btn small ${filter === value ? 'primary' : ''}`} onClick={() => setFilter(value)}>
                {label}
              </button>
            ))}
          </div>
          <input
            className="input boss-filter-search"
            placeholder="搜索 Boss、掉落或兑换物（中 / 英文）"
            aria-label="搜索 Boss、掉落或兑换物"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <span className="boss-filter-count">显示 {visibleGroups.reduce((sum, group) => sum + group.visible.length, 0)} 个</span>
          <div className="boss-filter-actions">
            <button type="button" className="btn small" onClick={() => setCollapsed(new Set())}>展开全部</button>
            <button type="button" className="btn small" onClick={() => setCollapsed(new Set(groups.map((group) => group.place)))}>收起全部</button>
          </div>
        </div>
      </Card>

      {visibleGroups.length === 0 ? (
        <section className="boss-empty">没有符合当前范围和筛选条件的 Boss。</section>
      ) : (
        visibleGroups.map((group) => {
          const isCollapsed = collapsed.has(group.place) && !hasSearch && filter === 'all';
          return (
            <Card key={group.place} className="boss-region-card">
              <button type="button" className="boss-region-head" onClick={() => toggleGroup(group.place)} aria-expanded={!isCollapsed}>
                <span className="boss-region-caret" aria-hidden="true">{isCollapsed ? '▸' : '▾'}</span>
                <span className="boss-region-name">{group.place}</span>
                <span className="boss-region-spacer" />
                <span className="boss-region-progress" aria-label={`${group.place} 已讨伐 ${group.done}/${group.list.length}`}>
                  <span><i style={{ width: `${(group.done / group.list.length) * 100}%` }} /></span>
                  <strong>{group.done}/{group.list.length}</strong>
                </span>
              </button>
              {!isCollapsed && (
                <div className="boss-region-body">
                  <div className="boss-card-grid">
                    {group.visible.map((row) => (
                      <BossCard key={row.boss.defeatFlagId} row={row} onOpenDetail={(candidate) => setSelectedFlag(candidate.boss.defeatFlagId)} onFocus={focusLocation} />
                    ))}
                  </div>
                </div>
              )}
            </Card>
          );
        })
      )}

      {selectedRow && <BossDialog row={selectedRow} onClose={() => setSelectedFlag(null)} onFocus={focusLocation} />}
    </div>
  );
}
