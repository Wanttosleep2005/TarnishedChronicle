import { useMemo, useState, type ReactNode } from 'react';
import { Card, PageHead, ProgressLine } from '../components/ui.tsx';
import { Sts2Art } from '../components/sts2-widgets.tsx';
import { STS2_ZH } from '../data/zh/sts2-zh.generated.ts';
import { useSts2 } from '../lib/sts2-context.tsx';
import { formatDateTime } from '../lib/format.ts';
import { bareId, type Sts2Progress } from '../lib/sts2.ts';
import { fuzzyMatch } from '../lib/fuzzy-search.ts';

type DexMode = 'none' | 'missing' | 'all';

interface DexEntry {
  id: string;
  name: string;
  got: boolean;
  extra?: ReactNode;
}

function DexTile({ entry, artKind }: { entry: DexEntry; artKind?: 'card' | 'relic' | 'potion' }) {
  return (
    <div className="pill" style={{ gap: 8, justifyContent: 'space-between', opacity: entry.got ? 1 : 0.55 }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          minWidth: 0,
          filter: entry.got ? undefined : 'grayscale(1) brightness(0.8)',
        }}
      >
        {artKind && <Sts2Art kind={artKind} id={entry.id} size={20} />}
        <span style={{ color: entry.got ? undefined : 'var(--faint)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {entry.got ? entry.name : `☆ ${entry.name}`}
        </span>
      </span>
      {entry.extra}
    </div>
  );
}

function DexBody({
  entries,
  mode,
  setMode,
  query,
  artKind,
  missingLabel = '未收集',
}: {
  entries: DexEntry[];
  mode: DexMode;
  setMode: (m: DexMode) => void;
  query: string;
  artKind?: 'card' | 'relic' | 'potion';
  missingLabel?: string;
}) {
  const missing = entries.filter((e) => !e.got);
  // 有搜索词时无视折叠状态,直接在全部条目里过滤
  const effectiveMode: DexMode = query ? 'all' : mode;
  const shown =
    effectiveMode === 'none'
      ? []
      : (effectiveMode === 'missing' ? missing : entries).filter((e) => !query || fuzzyMatch(query, e.name));

  return (
    <>
      <div className="row" style={{ marginTop: 10 }}>
        <button
          className={`btn small ${!query && mode === 'missing' ? 'primary' : ''}`}
          disabled={Boolean(query)}
          onClick={() => setMode(mode === 'missing' ? 'none' : 'missing')}
        >
          {missingLabel}({missing.length})
        </button>
        <button
          className={`btn small ${!query && mode === 'all' ? 'primary' : ''}`}
          disabled={Boolean(query)}
          onClick={() => setMode(mode === 'all' ? 'none' : 'all')}
        >
          全部展开({entries.length})
        </button>
        {!query && mode !== 'none' && (
          <button className="btn small" onClick={() => setMode('none')}>
            收起
          </button>
        )}
      </div>
      {shown.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(196px, 1fr))',
            gap: 6,
            marginTop: 10,
          }}
        >
          {shown.map((entry) => (
            <DexTile key={entry.id} entry={entry} artKind={artKind} />
          ))}
        </div>
      )}
      {query && shown.length === 0 && (
        <div className="undone" style={{ marginTop: 10, fontSize: 12 }}>无匹配条目</div>
      )}
    </>
  );
}

interface CollectionSpec {
  key: 'cards' | 'relics' | 'potions';
  label: string;
  discovered: string[];
  artKind: 'card' | 'relic' | 'potion';
}

function CollectionCard({ spec, query }: { spec: CollectionSpec; query: string }) {
  const [mode, setMode] = useState<DexMode>('none');
  const official = STS2_ZH[spec.key] ?? {};
  const officialIds = Object.keys(official);
  const discoveredBare = new Set(spec.discovered.map((id) => bareId(id)));
  const entries = officialIds.map((id) => ({ id, name: official[id], got: discoveredBare.has(id) }));
  const found = entries.filter((e) => e.got).length;
  const modCount = spec.discovered.length - found;

  return (
    <Card
      title={spec.label}
      hint={`官方 ${found}/${officialIds.length}${modCount > 0 ? ` · 另有 mod 内容 ${modCount} 项` : ''}`}
    >
      <ProgressLine label="官方图鉴进度" value={found} total={officialIds.length} />
      <DexBody entries={entries} mode={mode} setMode={setMode} query={query} artKind={spec.artKind} missingLabel="未收集" />
    </Card>
  );
}

export function Sts2CollectionPage() {
  const { progress } = useSts2();
  const [query, setQuery] = useState('');

  const specs = useMemo<CollectionSpec[]>(() => {
    if (!progress) return [];
    return [
      { key: 'cards', label: '卡牌图鉴', discovered: progress.discovered_cards ?? [], artKind: 'card' },
      { key: 'relics', label: '遗物图鉴', discovered: progress.discovered_relics ?? [], artKind: 'relic' },
      { key: 'potions', label: '药水图鉴', discovered: progress.discovered_potions ?? [], artKind: 'potion' },
    ];
  }, [progress]);

  if (!progress) return null;

  return (
    <div className="page">
      <PageHead
        title="图鉴完成度"
        sub="以游戏官方本地化条目为分母;未收集条目置灰显示"
        right={
          <input
            className="input"
            style={{ width: 220 }}
            placeholder="搜索名称(自动展开)…"
            value={query}
            onChange={(e) => setQuery(e.target.value.trim())}
          />
        }
      />
      {specs.map((spec) => (
        <CollectionCard key={spec.key} spec={spec} query={query} />
      ))}
      <BestiaryCard progress={progress} query={query} />
      <EventsCard progress={progress} query={query} />
      <EpochsCard progress={progress} query={query} />
      <div className="notice">
        官方表以名称条目计(卡牌含部分不可收集的状态/诅咒卡,怪物含变体与召唤物),完成度口径与游戏内图鉴可能略有出入,仅供参考。
      </div>
    </div>
  );
}

function EventsCard({ progress, query }: { progress: Sts2Progress; query: string }) {
  const [mode, setMode] = useState<DexMode>('none');
  const events = STS2_ZH.events ?? {};
  const ancients = STS2_ZH.ancients ?? {};
  const officialIds = Object.keys(events);
  const met = new Set((progress.discovered_events ?? []).filter((e) => typeof e === 'string').map((e) => bareId(e)));
  const entries = officialIds.map((id) => ({ id, name: events[id], got: met.has(id) }));
  const found = entries.filter((e) => e.got).length;
  // 存档把远古(开局庇佑者)也记成 EVENT.*,不属于事件目录;其余未匹配的是 mod 事件
  const modCount = [...met].filter((id) => !(id in events) && !(id in ancients)).length;

  return (
    <Card
      title="事件图鉴"
      hint={`已遇到 ${found}/${officialIds.length}${modCount > 0 ? ` · 另有 mod 事件 ${modCount} 项` : ''}`}
    >
      <ProgressLine label="官方事件遇见进度" value={found} total={officialIds.length} />
      <DexBody entries={entries} mode={mode} setMode={setMode} query={query} missingLabel="未遇见" />
    </Card>
  );
}

function EpochsCard({ progress, query }: { progress: Sts2Progress; query: string }) {
  const [mode, setMode] = useState<DexMode>('none');
  const table = STS2_ZH.epochs ?? {};
  const officialIds = Object.keys(table);
  const owned = new Map(
    (progress.epochs ?? [])
      .filter((e) => typeof e?.id === 'string')
      .map((e) => [bareId(e.id!), e.obtain_date ?? 0] as const),
  );
  const entries: DexEntry[] = officialIds
    .map((id) => ({
      id,
      name: table[id],
      got: owned.has(id),
      date: owned.get(id) ?? 0,
    }))
    .sort((a, b) => Number(b.got) - Number(a.got) || b.date - a.date)
    .map((e) => ({
      id: e.id,
      name: e.name,
      got: e.got,
      extra:
        e.got && e.date > 0 ? (
          <span style={{ fontSize: 10.5, color: 'var(--faint)', flex: 'none' }}>{formatDateTime(e.date * 1000)}</span>
        ) : undefined,
    }));
  const got = entries.filter((e) => e.got).length;

  return (
    <Card title="纪元进度" hint={`已达成 ${got}/${officialIds.length} · 游戏 meta 里程碑`}>
      <ProgressLine label="纪元达成进度" value={got} total={officialIds.length} />
      <DexBody entries={entries} mode={mode} setMode={setMode} query={query} missingLabel="未达成" />
    </Card>
  );
}

function BestiaryCard({ progress, query }: { progress: Sts2Progress; query: string }) {
  const [mode, setMode] = useState<DexMode>('none');
  const monsters = STS2_ZH.monsters ?? {};

  const { entries, modCount } = useMemo(() => {
    const stats = new Map<string, { wins: number; losses: number }>();
    for (const e of progress.enemy_stats ?? []) {
      if (!e.enemy_id) continue;
      const wins = (e.fight_stats ?? []).reduce((n, f) => n + (f.wins ?? 0), 0);
      const losses = (e.fight_stats ?? []).reduce((n, f) => n + (f.losses ?? 0), 0);
      stats.set(bareId(e.enemy_id), { wins, losses });
    }
    const officialIds = Object.keys(monsters);
    const list: DexEntry[] = officialIds
      .map((id) => {
        const s = stats.get(id);
        return {
          id,
          name: monsters[id],
          got: Boolean(s),
          fights: s ? s.wins + s.losses : 0,
          extra: s ? (
            <span style={{ fontSize: 11, color: 'var(--faint)', flex: 'none' }}>
              <span style={{ color: 'var(--ok, #7fbf6a)' }}>{s.wins}胜</span>
              {'/'}
              <span style={{ color: 'var(--crimson, #c05a5a)' }}>{s.losses}负</span>
            </span>
          ) : undefined,
        };
      })
      .sort((a, b) => Number(b.got) - Number(a.got) || b.fights - a.fights)
      .map(({ id, name, got, extra }) => ({ id, name, got, extra }));
    const mod = [...stats.keys()].filter((id) => !(id in monsters)).length;
    return { entries: list, modCount: mod };
  }, [progress, monsters]);

  const met = entries.filter((e) => e.got).length;

  return (
    <Card
      title="怪物图鉴"
      hint={`已交手 ${met}/${entries.length}${modCount > 0 ? ` · 另有 mod 怪物 ${modCount} 种` : ''}`}
    >
      <ProgressLine label="官方怪物交手进度" value={met} total={entries.length} />
      <DexBody entries={entries} mode={mode} setMode={setMode} query={query} missingLabel="未遭遇" />
    </Card>
  );
}
