import { useEffect, useMemo, useState } from 'react';
import { Card, ItemThumb, PageHead, ProgressLine } from '../components/ui.tsx';
import { MapPinIcon } from '../components/icons.tsx';
import { deriveProfile } from '../lib/derive.ts';
import {
  COLLECTION_GROUPS,
  compareCollectionEntries,
  deriveCollections,
  entryStatus,
  enrichCollectionLocations,
  type CollectionEntry,
  type CollectionKind,
  type CollectionStatus,
  unresolvedAcquisitionHint,
} from '../lib/collections.ts';
import { findItemSources, type ItemPlacementSource } from '../lib/locate-item.ts';
import { fuzzyMatch } from '../lib/fuzzy-search.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';

type StatusFilter = 'all' | CollectionStatus;
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
          {status === 'owned' ? '已拥有' : status === 'unresolved' ? '无法确认' : '缺失'}
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
  const [query, setQuery] = useState('');
  const [resultLimit, setResultLimit] = useState(240);

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

  if (!slot || !profile || !locatedCatalog) return null;

  const groups = locatedCatalog.groups.filter((group) => category === 'all' || group.kind === category);
  const unresolved = locatedCatalog.entries.filter((entry) => entryStatus(entry, locationsReady) === 'unresolved').length;

  const locate = (entry: CollectionEntry, source: CollectionEntry['sources'][number]) => {
    requestMapFocus({ ...source.projected, name: `${entry.name} · ${source.referenceLabel ?? source.sourceLabel}` });
  };

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
          {(['all', 'owned', 'missing', 'unresolved'] as const).map((value) => (
            <button key={value} className={`btn small ${status === value ? 'primary' : ''}`} onClick={() => setStatus(value)}>
              {value === 'all' ? '全部' : value === 'owned' ? '已拥有' : value === 'missing' ? '缺失' : '无法确认'}
            </button>
          ))}
          <div className="collection-filter-label">版本</div>
          {(['all', 'base', 'dlc'] as const).map((value) => (
            <button key={value} className={`btn small ${world === value ? 'primary' : ''}`} onClick={() => setWorld(value)}>
              {value === 'all' ? '全部' : value === 'base' ? '本体' : '黄金树幽影'}
            </button>
          ))}
          <input className="input collection-search" placeholder="搜索名称 / 类别…" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
      </Card>

      <div className="collection-results-head">
        <span>显示 {Math.min(resultLimit, visibleEntries.length).toLocaleString('zh-CN')} / {visibleEntries.length.toLocaleString('zh-CN')} 项</span>
        <span className="hint">武器按基础型号计数 · 未定位不代表未拥有</span>
      </div>
      <div className="collection-grid">
        {visibleEntries.slice(0, resultLimit).map((entry) => (
          <CollectionEntryCard key={entry.key} entry={entry} locationsReady={locationsReady} onLocate={locate} />
        ))}
      </div>
      {visibleEntries.length === 0 && <div className="notice">没有符合当前筛选条件的收藏条目。</div>}
      {resultLimit < visibleEntries.length && (
        <button className="btn" onClick={() => setResultLimit((limit) => limit + 240)}>加载更多</button>
      )}
    </div>
  );
}
