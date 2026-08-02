import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, ItemThumb, PageHead, ProgressLine } from '../components/ui.tsx';
import { MapPinIcon } from '../components/icons.tsx';
import { deriveProfile } from '../lib/derive.ts';
import {
  COLLECTION_GROUPS,
  armorSetStatus,
  compareCollectionEntries,
  deriveCollections,
  entryStatus,
  enrichCollectionLocations,
  groupArmorSetVariants,
  groupArmorSets,
  isDlcArmorId,
  type ArmorSetVariant,
  type ArmorSetVariantGroup,
  type CollectionEntry,
  type CollectionKind,
  type CollectionStatus,
  type ArmorSetStatus,
  type ArmorSetView,
  unresolvedAcquisitionHint,
} from '../lib/collections.ts';
import { iconThumbUrl } from '../data/images.ts';
import { findItemSources, type ItemPlacementSource } from '../lib/locate-item.ts';
import { fuzzyMatch } from '../lib/fuzzy-search.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';

type StatusFilter = 'all' | CollectionStatus | ArmorSetStatus;
type WorldFilter = 'all' | 'base' | 'dlc';

const categoryOrder = new Map(COLLECTION_GROUPS.map((group) => [group.kind, group.order]));

function sourceChance(chance: number): string {
  if (chance >= 1) return '必得';
  return `${Math.max(1, Math.round(chance * 100))}%`;
}

const ACQUISITION_KIND_LABEL: Readonly<Record<string, string>> = {
  shop: '商店 / 兑换',
  enemy: '敌人 / 首领掉落',
  quest: '任务 / 事件奖励',
  map: '地图拾取 / 宝箱',
  other: '其他来源',
  unknown: '待核对',
};

function statusText(status: CollectionStatus | ArmorSetStatus): string {
  if (status === 'owned') return '已拥有';
  if (status === 'missing') return '未获取';
  if (status === 'partial') return '部分获取';
  return '无法确认';
}

function categoryLabel(entry: CollectionEntry): string {
  if (entry.kind === 'weapon') return '武器';
  if (entry.kind === 'armor') {
    return ({ Head: '头部', Body: '身体', Arms: '腕部', Legs: '腿部' } as Readonly<Record<string, string>>)[entry.category] ?? '防具';
  }
  return COLLECTION_GROUPS.find((group) => group.kind === entry.kind)?.label ?? entry.category;
}

function entryRegion(entry: CollectionEntry): string {
  return entry.sources[0]?.region ?? '未归类';
}

function CollectionEntryCard({
  entry,
  locationsReady,
  onLocate,
}: {
  entry: CollectionEntry;
  locationsReady: boolean;
  onLocate: (entry: CollectionEntry, source: CollectionEntry['sources'][number]) => void;
}) {
  const status = entryStatus(entry, locationsReady);
  const primary = entry.sources[0];
  const acquisition = entry.acquisitionZhRecord;
  const acquisitionSummary = acquisition?.summary ?? (entry.kind === 'weapon' ? entry.acquisition : undefined);
  const acquisitionPending = entry.kind !== 'weapon' && !acquisition?.verified;
  return (
    <article className={`collection-entry ${status}`}>
      <div className="collection-entry-head">
        <ItemThumb icon={entry.icon} size={48} />
        <div className="collection-entry-title">
          <div className="collection-entry-name">{entry.name}</div>
        </div>
        <span
          className={`collection-state ${status}`}
          title={status === 'unresolved' ? '不是不可获得，只是当前数据没有可靠的获取记录或坐标。' : undefined}
        >
          {statusText(status)}
        </span>
      </div>
      <div className="collection-entry-meta">
        <span>{categoryLabel(entry)}</span>
        <span>{entry.dlc === true ? '黄金树幽影' : entry.dlc === false ? '本体' : '未归类'}</span>
        <span>{entryRegion(entry)}</span>
      </div>
      {(acquisitionSummary || acquisitionPending) && (
        <div className={`collection-acquisition${acquisitionPending ? ' unverified' : ''}`}>
          <div className="collection-acquisition-head">
            <span className="collection-acquisition-label">
              {acquisitionPending ? '中文攻略待补' : acquisition ? (ACQUISITION_KIND_LABEL[acquisition.sourceKind] ?? '获取方式') : '获取方式'}
            </span>
            {acquisition?.verified && (
              <a
                className="collection-source-link"
                href={acquisition.sourceUrl}
                target="_blank"
                rel="noreferrer"
                title={`查看资料来源：${acquisition.sourceTitle}`}
              >
                来源
              </a>
            )}
          </div>
          <div className="collection-acquisition-summary">{acquisitionSummary ?? '中文攻略待补：暂未找到包含该条目获取途径的中文页面。'}</div>
          {acquisition?.details && (
            <details className="collection-acquisition-details">
              <summary>攻略细节</summary>
              <div>{acquisition.details}</div>
            </details>
          )}
        </div>
      )}
      {!entry.owned && !locationsReady && <div className="collection-location-loading">正在读取可靠来源…</div>}
      {locationsReady && primary && (
        <div className="collection-source-primary">
          <div>
            <div className="collection-source-label">{primary.sourceLabel}</div>
            <div className="collection-source-detail">
              {primary.referenceLabel ?? primary.region ?? '未归类'} · {sourceChance(primary.chance)}
            </div>
          </div>
          <button
            className="icon-button"
            type="button"
            title="在地图上定位拾取点"
            aria-label={`在地图上定位${entry.name}`}
            onClick={() => onLocate(entry, primary)}
          >
            <MapPinIcon />
          </button>
        </div>
      )}
      {!entry.owned && locationsReady && entry.sources.length === 0 && status === 'unresolved' && (
        <details className="collection-source-empty">
          <summary>为什么显示“无法确认”？</summary>
          <div>
            {unresolvedAcquisitionHint(entry.kind)}
            <br />
            这不代表物品无法获得；商店、NPC 对话、兑换和部分任务条件尚未与当前地图数据关联，因此不会显示伪定位按钮。
          </div>
        </details>
      )}
      {!entry.owned && locationsReady && entry.sources.length > 1 && (
        <details className="collection-sources">
          <summary>其他可靠来源 · {entry.sources.length - 1}</summary>
          <div className="collection-source-list">
            {entry.sources.slice(1).map((source) => (
              <button key={`${source.mapId}-${source.source}-${source.projected.px}`} className="collection-source-row" type="button" onClick={() => onLocate(entry, source)}>
                <span>{source.referenceLabel ?? source.region ?? '未归类'} · {source.sourceLabel}</span>
                <span>{sourceChance(source.chance)} <MapPinIcon size={12} /></span>
              </button>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}

const ARMOR_SLOTS = [
  { category: 'Head', label: '头部', className: 'head' },
  { category: 'Body', label: '身体', className: 'body' },
  { category: 'Arms', label: '腕部', className: 'arms' },
  { category: 'Legs', label: '腿部', className: 'legs' },
] as const;

type VisibleArmorSetGroup = ArmorSetVariantGroup & { readonly preferredVariant: ArmorSetVariant };

function armorSetVariantsFor(group: ArmorSetVariantGroup): readonly ArmorSetView[] {
  return group.altered ? [group.standard, group.altered] : [group.standard];
}

function armorSlotsFor(view: ArmorSetView, locationsReady: boolean) {
  return ARMOR_SLOTS.map((slot) => {
    const entries = view.entries.filter((entry) => entry.category === slot.category);
    const ownedCount = entries.filter((entry) => entry.owned).length;
    return {
      ...slot,
      entries,
      ownedCount,
      status: entries.length > 0 ? armorSetStatus(entries, ownedCount, locationsReady) : 'empty',
      preview: entries.find((entry) => entry.owned) ?? entries[0],
    } as const;
  });
}

const ArmorSetCard = memo(function ArmorSetCard({
  set,
  onOpen,
  locationsReady,
}: {
  set: VisibleArmorSetGroup;
  onOpen: (key: string) => void;
  locationsReady: boolean;
}) {
  const [variant, setVariant] = useState<ArmorSetVariant>(set.preferredVariant);
  useEffect(() => setVariant(set.preferredVariant), [set.preferredVariant]);
  const view = variant === 'altered' && set.altered ? set.altered : set.standard;
  const slots = armorSlotsFor(view, locationsReady);
  const pct = view.entries.length > 0 ? Math.round((view.ownedCount / view.entries.length) * 100) : 0;
  return (
    <article className={`collection-set ${view.status}${set.altered ? ' has-variants' : ''}`}>
      {set.altered && (
        <div className="collection-set-variant-switch" role="group" aria-label={`${set.def.name}版本`}>
          <button
            className={`collection-set-variant-button standard${variant === 'standard' ? ' active' : ''}`}
            type="button"
            aria-pressed={variant === 'standard'}
            onClick={() => setVariant('standard')}
          >
            原装
          </button>
          <button
            className={`collection-set-variant-button altered${variant === 'altered' ? ' active' : ''}`}
            type="button"
            aria-pressed={variant === 'altered'}
            onClick={() => setVariant('altered')}
          >
            轻装
          </button>
        </div>
      )}
      <button
        className="collection-set-toggle"
        type="button"
        aria-haspopup="dialog"
        aria-label={`查看${view.name}详情`}
        onClick={() => onOpen(view.key)}
      >
        <span className="collection-set-main">
          <span
            className="armor-set-display"
            role="img"
            aria-label={`${view.name}穿戴展示，${view.ownedCount}件已拥有，共${view.entries.length}件`}
          >
            <span className="armor-stand-silhouette" aria-hidden="true" />
            {slots.map((slot) => {
              const imageUrl = iconThumbUrl(slot.preview?.icon);
              return (
                <span
                  className={`armor-set-piece ${slot.className} ${slot.status}`}
                  key={slot.category}
                  title={slot.preview ? `${slot.preview.name} · ${slot.ownedCount}/${slot.entries.length}` : `${slot.label}空位`}
                >
                  {imageUrl
                    ? <img src={imageUrl} alt="" loading="lazy" decoding="async" />
                    : <span className="armor-set-empty-mark" aria-hidden="true">—</span>}
                  <span className="armor-set-piece-label">{slot.label}</span>
                  <span className="armor-set-piece-state" aria-hidden="true" />
                </span>
              );
            })}
          </span>

          <span className="collection-set-info">
            <span className="collection-set-title-row">
              <span className="collection-set-name">{set.def.name}</span>
              <span className="collection-set-meta">
                <span className="collection-set-dlc">{view.def.dlc ? '黄金树幽影' : '本体'}</span>
                <span className={`collection-state ${view.status}`}>{statusText(view.status)}</span>
              </span>
            </span>
            <span className="collection-set-progress">
              <span>收藏进度</span>
              <strong>{view.ownedCount} / {view.entries.length}</strong>
              <span className="collection-set-percent">{pct}%</span>
            </span>
            <span className="collection-set-bar"><span style={{ width: `${pct}%` }} /></span>
            <span className="collection-set-slot-strip">
              {slots.map((slot) => (
                <span className={`collection-set-slot ${slot.status}`} key={slot.category}>
                  <span>{slot.label}</span>
                  <strong>{slot.entries.length > 0 ? `${slot.ownedCount}/${slot.entries.length}` : '无'}</strong>
                </span>
              ))}
            </span>
            <span className="collection-set-action">
              <span>查看套装详情</span>
              <span className="collection-set-caret" aria-hidden="true" />
            </span>
          </span>
        </span>
      </button>
    </article>
  );
});

function ArmorSetDialog({
  view,
  onClose,
  onLocate,
  locationsReady,
}: {
  view: ArmorSetView;
  onClose: () => void;
  onLocate: (entry: CollectionEntry, source: CollectionEntry['sources'][number]) => void;
  locationsReady: boolean;
}) {
  const slots = armorSlotsFor(view, locationsReady);
  const pct = view.entries.length > 0 ? Math.round((view.ownedCount / view.entries.length) * 100) : 0;
  const titleId = `armor-set-dialog-title-${view.def.order}-${view.variant}`;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="armor-set-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="armor-set-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <header className="armor-set-dialog-head">
          <div className="armor-set-dialog-title">
            <div className="armor-set-dialog-meta">
              {view.hasAlteredVariant && (
                <span className={`collection-set-variant ${view.variant}`}>
                  {view.variant === 'altered' ? '轻装' : '原装'}
                </span>
              )}
              <span>{view.def.dlc ? '黄金树幽影' : '本体'}</span>
              <span className={`collection-state ${view.status}`}>{statusText(view.status)}</span>
            </div>
            <h2 id={titleId}>{view.name}</h2>
            <div className="armor-set-dialog-progress">
              <span>收藏进度</span>
              <strong>{view.ownedCount} / {view.entries.length}</strong>
              <span>{pct}%</span>
              <span className="collection-set-bar"><span style={{ width: `${pct}%` }} /></span>
            </div>
          </div>
          <div className="armor-set-dialog-tools">
            <button className="armor-set-dialog-close" type="button" aria-label="关闭套装详情" onClick={onClose} autoFocus>
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </header>
        <div className="collection-set-body armor-set-dialog-body">
          {slots.filter((slot) => slot.entries.length > 0).map((slot, index) => (
            <section className="collection-set-part-group" key={slot.category}>
              <div className="collection-set-part-heading">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{slot.label}</h3>
                  <p>{slot.entries.length > 1 ? `${slot.entries.length} 个同部位部件` : slot.entries[0].name}</p>
                </div>
              </div>
              <div className="collection-set-part-entries">
                {slot.entries.map((entry) => (
                  <CollectionEntryCard key={entry.key} entry={entry} locationsReady={locationsReady} onLocate={onLocate} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>,
    document.body,
  );
}

export function CollectionPage() {
  const slot = useActiveSlot();
  const { requestMapFocus } = useSaveContext();
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const catalog = useMemo(() => (profile ? deriveCollections(profile) : null), [profile]);
  const [sourceMap, setSourceMap] = useState<ReadonlyMap<string, readonly ItemPlacementSource[]>>(new Map());
  const [locationsReady, setLocationsReady] = useState(false);
  const [category, setCategory] = useState<CollectionKind | 'all'>('all');
  const [status, setStatus] = useState<StatusFilter>('all');
  const [world, setWorld] = useState<WorldFilter>('all');
  const [armorView, setArmorView] = useState<'set' | 'piece'>('set');
  const [query, setQuery] = useState('');
  const [resultLimit, setResultLimit] = useState(240);
  const [selectedSetKey, setSelectedSetKey] = useState<string | null>(null);
  const setViewActive = category === 'armor' && armorView === 'set';

  useEffect(() => {
    if (!catalog) return;
    let cancelled = false;
    setLocationsReady(false);
    setSourceMap(new Map());
    void Promise.all(
      catalog.entries.map(async (entry) => [entry.key, await findItemSources(entry.placementType, entry.id)] as const),
    ).then((results) => {
      if (cancelled) return;
      setSourceMap(new Map(results));
      setLocationsReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [catalog]);

  useEffect(() => {
    setResultLimit(240);
  }, [category, status, world, query]);

  useEffect(() => {
    if (!setViewActive && status === 'partial') setStatus('all');
  }, [setViewActive, status]);

  const locatedCatalog = useMemo(
    () => (catalog ? enrichCollectionLocations(catalog, sourceMap) : null),
    [catalog, sourceMap],
  );

  const visibleEntries = useMemo(() => {
    if (!locatedCatalog) return [];
    return locatedCatalog.entries
      .filter((entry) => category === 'all' || entry.kind === category)
      .filter((entry) => status === 'all' || entryStatus(entry, locationsReady) === status)
      .filter((entry) => world === 'all' || (world === 'dlc' ? entry.dlc === true : entry.dlc === false))
      .filter((entry) => {
        if (!query.trim()) return true;
        const groupLabel = COLLECTION_GROUPS.find((group) => group.kind === entry.kind)?.label ?? '';
        return fuzzyMatch(query, entry.name, entry.en, entry.category, groupLabel);
      })
      .sort((left, right) => categoryOrder.get(left.kind)! - categoryOrder.get(right.kind)! || compareCollectionEntries(left, right));
  }, [category, locatedCatalog, locationsReady, query, status, world]);

  const visibleSets = useMemo(() => {
    if (!locatedCatalog || !setViewActive) return null;
    const grouped = groupArmorSets(locatedCatalog.entries, locationsReady);
    const sets = groupArmorSetVariants(grouped.sets)
      .filter((set) => world === 'all' || (world === 'dlc' ? set.def.dlc : !set.def.dlc))
      .map((set) => {
        const matchingVariants = armorSetVariantsFor(set).filter((view) => {
          if (status !== 'all' && view.status !== status) return false;
          if (!query.trim()) return true;
          const text = [view.name, view.def.name, ...view.entries.map((entry) => `${entry.name} ${entry.en} ${entry.category}`)].join(' ');
          return fuzzyMatch(query, text);
        });
        return matchingVariants.length > 0 ? { ...set, preferredVariant: matchingVariants[0].variant } : null;
      })
      .filter((set): set is VisibleArmorSetGroup => set !== null)
      .sort((left, right) => left.def.order - right.def.order);
    const singles = grouped.singles
      .filter((entry) => status === 'all' || entryStatus(entry, locationsReady) === status)
      .filter((entry) => world === 'all' || (world === 'dlc' ? isDlcArmorId(entry.id) : !isDlcArmorId(entry.id)))
      .filter((entry) => {
        if (!query.trim()) return true;
        return fuzzyMatch(query, entry.name, entry.en, entry.category, '防具');
      })
      .sort(compareCollectionEntries);
    return { sets, singles };
  }, [locatedCatalog, locationsReady, query, setViewActive, status, world]);

  const locate = useCallback((entry: CollectionEntry, source: CollectionEntry['sources'][number]) => {
    requestMapFocus({ ...source.projected, name: `${entry.name} · ${source.referenceLabel ?? source.sourceLabel}` });
  }, [requestMapFocus]);
  const openSet = useCallback((key: string) => setSelectedSetKey(key), []);
  const closeSet = useCallback(() => setSelectedSetKey(null), []);
  const selectedSet = visibleSets?.sets.flatMap((set) => armorSetVariantsFor(set)).find((view) => view.key === selectedSetKey) ?? null;

  useEffect(() => {
    if (selectedSetKey && (!setViewActive || (visibleSets && !selectedSet))) setSelectedSetKey(null);
  }, [selectedSet, selectedSetKey, setViewActive, visibleSets]);

  if (!slot || !profile || !locatedCatalog) return null;

  const groups = locatedCatalog.groups.filter((group) => category === 'all' || group.kind === category);
  const unresolved = locatedCatalog.entries.filter((entry) => entryStatus(entry, locationsReady) === 'unresolved').length;

  const statusOptions: readonly StatusFilter[] = setViewActive
    ? ['all', 'owned', 'missing', 'partial', 'unresolved']
    : ['all', 'owned', 'missing', 'unresolved'];

  return (
    <div className="page collection-page">
      <PageHead
        title="收藏图鉴"
        sub={`当前角色 · ${locatedCatalog.owned.toLocaleString('zh-CN')}/${locatedCatalog.total.toLocaleString('zh-CN')} 件核心收藏 · “无法确认”仅表示获取来源未收录`}
      />

      <Card className="collection-overview">
        <div className="collection-overview-row">
          <div className="collection-total">
            <span className="collection-total-label">完成度</span>
            <strong>{locatedCatalog.total > 0 ? Math.round((locatedCatalog.owned / locatedCatalog.total) * 100) : 0}%</strong>
            <span>{locatedCatalog.owned.toLocaleString('zh-CN')} / {locatedCatalog.total.toLocaleString('zh-CN')}</span>
          </div>
          <div className="collection-total-bar"><div style={{ width: `${locatedCatalog.total > 0 ? (locatedCatalog.owned / locatedCatalog.total) * 100 : 0}%` }} /></div>
          <div className="collection-overview-note">
            {locationsReady ? `已核对 ${unresolved.toLocaleString('zh-CN')} 件暂无可靠获取记录或坐标` : '地点索引正在后台加载'}
          </div>
        </div>
        <div className="collection-progress-grid">
          {groups.map((group) => (
            <ProgressLine key={group.kind} label={group.label} value={group.owned} total={group.total} tone={group.owned === group.total ? 'gold' : 'azure'} />
          ))}
        </div>
      </Card>

      <Card className="collection-filter-card">
        <div className="collection-filter-row">
          <div className="collection-filter-label">类别</div>
          <button className={`btn small ${category === 'all' ? 'primary' : ''}`} onClick={() => setCategory('all')}>全部</button>
          {COLLECTION_GROUPS.map((group) => (
            <button key={group.kind} className={`btn small ${category === group.kind ? 'primary' : ''}`} onClick={() => setCategory(group.kind)}>{group.label}</button>
          ))}
        </div>
        <div className="collection-filter-row">
          <div className="collection-filter-label">状态</div>
          {statusOptions.map((value) => (
            <button key={value} className={`btn small ${status === value ? 'primary' : ''}`} onClick={() => setStatus(value)}>
              {value === 'all' ? '全部' : statusText(value)}
            </button>
          ))}
          <div className="collection-filter-label">版本</div>
          {(['all', 'base', 'dlc'] as const).map((value) => (
            <button key={value} className={`btn small ${world === value ? 'primary' : ''}`} onClick={() => setWorld(value)}>
              {value === 'all' ? '全部' : value === 'base' ? '本体' : '黄金树幽影'}
            </button>
          ))}
          {category === 'armor' && (
            <>
              <div className="collection-filter-label">视图</div>
              <button className={`btn small ${armorView === 'set' ? 'primary' : ''}`} onClick={() => setArmorView('set')}>按套装</button>
              <button className={`btn small ${armorView === 'piece' ? 'primary' : ''}`} onClick={() => setArmorView('piece')}>按散件</button>
            </>
          )}
          <input className="input collection-search" placeholder="搜索名称 / 类别…" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
      </Card>

      <div className="collection-results-head">
        <span>
          {setViewActive && visibleSets
            ? `显示 ${(visibleSets.sets.length + visibleSets.singles.length).toLocaleString('zh-CN')} 项（套装 ${visibleSets.sets.length.toLocaleString('zh-CN')} · 单件 ${visibleSets.singles.length.toLocaleString('zh-CN')}）`
            : `显示 ${Math.min(resultLimit, visibleEntries.length).toLocaleString('zh-CN')} / ${visibleEntries.length.toLocaleString('zh-CN')} 项`}
        </span>
        <span className="hint">武器按基础型号计数 · 未定位不代表未拥有</span>
      </div>
      {setViewActive && visibleSets ? (
        <div className="collection-set-list">
          {visibleSets.sets.map((set) => (
            <ArmorSetCard
              key={set.key}
              set={set}
              onOpen={openSet}
              locationsReady={locationsReady}
            />
          ))}
          {visibleSets.singles.length > 0 && (
            <>
              <div className="collection-set-section">单件</div>
              <div className="collection-grid">
                {visibleSets.singles.slice(0, resultLimit).map((entry) => (
                  <CollectionEntryCard key={entry.key} entry={entry} locationsReady={locationsReady} onLocate={locate} />
                ))}
              </div>
            </>
          )}
          {visibleSets.sets.length === 0 && visibleSets.singles.length === 0 && (
            <div className="collection-empty">没有符合条件的防具</div>
          )}
        </div>
      ) : (
        <div className="collection-grid">
          {visibleEntries.slice(0, resultLimit).map((entry) => (
            <CollectionEntryCard key={entry.key} entry={entry} locationsReady={locationsReady} onLocate={locate} />
          ))}
        </div>
      )}
      {!setViewActive && visibleEntries.length === 0 && <div className="notice">没有符合当前筛选条件的收藏条目。</div>}
      {resultLimit < visibleEntries.length && (
        <button className="btn" onClick={() => setResultLimit((limit) => limit + 240)}>加载更多</button>
      )}
      {selectedSet && (
        <ArmorSetDialog
          view={selectedSet}
          onClose={closeSet}
          onLocate={locate}
          locationsReady={locationsReady}
        />
      )}
    </div>
  );
}
