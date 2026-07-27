import { useMemo, useState } from 'react';
import { Card, PageHead } from '../components/ui.tsx';
import { CharacterDot, RunDetail, Sts2Art } from '../components/sts2-widgets.tsx';
import { formatDateTime } from '../lib/format.ts';
import { useSts2 } from '../lib/sts2-context.tsx';
import { bareId, cardName, characterName, formatRunTime, looseId, relicName, runOutcome, type Sts2Run } from '../lib/sts2.ts';

type OutcomeFilter = 'all' | 'win' | 'loss' | 'abandon';

function runCarries(run: Sts2Run, kind: 'card' | 'relic', id: string): boolean {
  const bare = bareId(id);
  for (const p of run.players ?? []) {
    if (!p) continue;
    const list = kind === 'card' ? p.deck : p.relics;
    if (Array.isArray(list) && list.some((item) => {
      const itemId = looseId(item);
      return itemId !== null && bareId(itemId) === bare;
    }))
      return true;
  }
  return false;
}

function mergedCounts(run: Sts2Run, kind: 'card' | 'relic'): Map<string, number> {
  const map = new Map<string, number>();
  for (const p of run.players ?? []) {
    if (!p) continue;
    const list = kind === 'card' ? p.deck : p.relics;
    if (!Array.isArray(list)) continue;
    for (const item of list) {
      const id = looseId(item);
      if (!id) continue;
      const bare = bareId(id);
      map.set(bare, (map.get(bare) ?? 0) + 1);
    }
  }
  return map;
}

function DiffChips({ ids, counts, kind, tone }: { ids: string[]; counts?: Map<string, number>; kind: 'card' | 'relic'; tone: string }) {
  if (ids.length === 0) return <span style={{ fontSize: 11, color: 'var(--faint)' }}>无</span>;
  return (
    <div className="tag-cloud">
      {ids.map((id) => (
        <span key={id} className="pill" style={{ gap: 5, fontSize: 10.5, color: tone }}>
          <Sts2Art kind={kind} id={id} size={16} />
          {kind === 'card' ? cardName(id) : relicName(id)}
          {counts && (counts.get(id) ?? 0) > 1 ? ` ×${counts.get(id)}` : ''}
        </span>
      ))}
    </div>
  );
}

function RunCompareCard({
  a,
  b,
  metaA,
  metaB,
  onClose,
}: {
  a: Sts2Run;
  b: Sts2Run;
  metaA: { t: number };
  metaB: { t: number };
  onClose: () => void;
}) {
  const head = (run: Sts2Run, t: number) => {
    const who = (run.players ?? []).filter((p) => p?.character).map((p) => characterName(p.character)).join('+');
    const o = runOutcome(run);
    return `${formatDateTime(t)} · ${who} · A${run.ascension ?? 0} · ${o.label} · ${formatRunTime(run.run_time)}`;
  };
  const diff = (kind: 'card' | 'relic') => {
    const ca = mergedCounts(a, kind);
    const cb = mergedCounts(b, kind);
    const onlyA = [...ca.keys()].filter((id) => !cb.has(id));
    const onlyB = [...cb.keys()].filter((id) => !ca.has(id));
    const shared = [...ca.keys()].filter((id) => cb.has(id));
    return { ca, cb, onlyA, onlyB, shared };
  };
  const cards = diff('card');
  const relics = diff('relic');

  return (
    <Card title="对局对比">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 14, fontSize: 12, alignItems: 'center' }}>
        <div style={{ color: 'var(--azure)' }}>甲:{head(a, metaA.t)}</div>
        <div style={{ color: 'var(--gold-2)' }}>乙:{head(b, metaB.t)}</div>
        <button className="btn small" onClick={onClose}>
          退出对比
        </button>
      </div>
      <div className="divider" style={{ margin: '10px 0' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        <div>
          <div className="equip-slot-label">甲独有卡({cards.onlyA.length})</div>
          <DiffChips ids={cards.onlyA} counts={cards.ca} kind="card" tone="var(--azure)" />
        </div>
        <div>
          <div className="equip-slot-label">共同卡({cards.shared.length})</div>
          <DiffChips ids={cards.shared} kind="card" tone="var(--muted)" />
        </div>
        <div>
          <div className="equip-slot-label">乙独有卡({cards.onlyB.length})</div>
          <DiffChips ids={cards.onlyB} counts={cards.cb} kind="card" tone="var(--gold-2)" />
        </div>
        <div>
          <div className="equip-slot-label">甲独有遗物({relics.onlyA.length})</div>
          <DiffChips ids={relics.onlyA} kind="relic" tone="var(--azure)" />
        </div>
        <div>
          <div className="equip-slot-label">共同遗物({relics.shared.length})</div>
          <DiffChips ids={relics.shared} kind="relic" tone="var(--muted)" />
        </div>
        <div>
          <div className="equip-slot-label">乙独有遗物({relics.onlyB.length})</div>
          <DiffChips ids={relics.onlyB} kind="relic" tone="var(--gold-2)" />
        </div>
      </div>
    </Card>
  );
}

export function Sts2RunsPage() {
  const { runs, summaries, loadedCount, runsFocus, setRunsFocus } = useSts2();
  const [openRun, setOpenRun] = useState<string | null>(null);
  const [comparePick, setComparePick] = useState<string[]>([]);
  const [outcome, setOutcome] = useState<OutcomeFilter>('all');
  const [character, setCharacter] = useState('全部角色');
  const [minAscension, setMinAscension] = useState(0);
  const [coopOnly, setCoopOnly] = useState(false);
  const [shown, setShown] = useState(40);

  const characters = useMemo(() => {
    const set = new Set<string>();
    for (const run of summaries.values()) {
      for (const p of run.players ?? []) if (p?.character) set.add(p.character);
    }
    return ['全部角色', ...[...set].map(characterName).sort()];
  }, [summaries]);

  const filtered = useMemo(() => {
    return runs.filter((meta) => {
      const run = summaries.get(meta.path);
      if (!run) return outcome === 'all' && character === '全部角色' && minAscension === 0 && !coopOnly && !runsFocus;
      if (outcome !== 'all') {
        const tone = runOutcome(run).tone;
        if (tone !== outcome) return false;
      }
      if (character !== '全部角色') {
        if (!(run.players ?? []).some((p) => p?.character && characterName(p.character) === character)) return false;
      }
      if ((run.ascension ?? 0) < minAscension) return false;
      if (coopOnly && (run.players?.length ?? 1) < 2) return false;
      if (runsFocus && !runCarries(run, runsFocus.kind, runsFocus.id)) return false;
      return true;
    });
  }, [runs, summaries, outcome, character, minAscension, coopOnly, runsFocus]);

  return (
    <div className="page">
      <PageHead
        title="对局复盘"
        sub={`共 ${runs.length} 局${loadedCount < runs.length ? ` · 加载中 ${loadedCount}/${runs.length}` : ''} · 点击展开,多人局可点角色查看各自卡组`}
      />

      <Card>
        <div className="row">
          {(
            [
              ['all', '全部'],
              ['win', '胜利'],
              ['loss', '失败'],
              ['abandon', '放弃'],
            ] as [OutcomeFilter, string][]
          ).map(([key, label]) => (
            <button key={key} className={`btn small ${outcome === key ? 'primary' : ''}`} onClick={() => setOutcome(key)}>
              {label}
            </button>
          ))}
          <select className="select" style={{ width: 150 }} value={character} onChange={(e) => setCharacter(e.target.value)}>
            {characters.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            className="select"
            style={{ width: 120 }}
            value={minAscension}
            onChange={(e) => setMinAscension(Number(e.target.value))}
          >
            {[0, 1, 5, 10, 15, 20].map((a) => (
              <option key={a} value={a}>
                进阶 ≥ A{a}
              </option>
            ))}
          </select>
          <button className={`btn small ${coopOnly ? 'primary' : ''}`} onClick={() => setCoopOnly(!coopOnly)}>
            只看联机
          </button>
          {runsFocus && (
            <span
              className="pill"
              style={{ cursor: 'pointer', color: 'var(--gold-2)', borderColor: 'var(--gold-dim)', gap: 6 }}
              title="点击清除该筛选"
              onClick={() => setRunsFocus(null)}
            >
              <Sts2Art kind={runsFocus.kind} id={runsFocus.id} size={18} />
              携带{runsFocus.kind === 'card' ? '卡' : '遗物'}:
              {runsFocus.kind === 'card' ? cardName(runsFocus.id) : relicName(runsFocus.id)} ✕
            </span>
          )}
          <span className="spacer" />
          <span className="pill">{filtered.length} 局</span>
        </div>
      </Card>

      {comparePick.length === 2 &&
        summaries.has(comparePick[0]) &&
        summaries.has(comparePick[1]) &&
        (() => {
          const [pa, pb] = comparePick;
          const ma = runs.find((r) => r.path === pa);
          const mb = runs.find((r) => r.path === pb);
          if (!ma || !mb) return null;
          return (
            <RunCompareCard
              a={summaries.get(pa)!}
              b={summaries.get(pb)!}
              metaA={ma}
              metaB={mb}
              onClose={() => setComparePick([])}
            />
          );
        })()}
      {comparePick.length === 1 && (
        <div className="notice">已选 1 局,再点一局的 ⚖ 即可并排对比。</div>
      )}

      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.slice(0, shown).map((meta) => {
            const summary = summaries.get(meta.path);
            const outcomeInfo = summary ? runOutcome(summary) : null;
            const open = openRun === meta.path;
            return (
              <div key={meta.path}>
                <div
                  className="row"
                  style={{ cursor: 'pointer', padding: '6px 8px', borderRadius: 8, background: open ? 'rgba(224,121,63,0.08)' : undefined }}
                  onClick={() => setOpenRun(open ? null : meta.path)}
                >
                  <span style={{ color: 'var(--faint)', width: 12, fontSize: 11 }}>{open ? '▾' : '▸'}</span>
                  <span className="pill" style={{ flex: 'none' }}>{formatDateTime(meta.t)}</span>
                  {summary ? (
                    <>
                      <span style={{ display: 'flex', gap: 4 }}>
                        {(summary.players ?? []).filter((p) => p?.character).map((p, i) => (
                          <CharacterDot key={i} character={p.character} />
                        ))}
                      </span>
                      <span className="pill gold" style={{ flex: 'none' }}>A{summary.ascension ?? 0}</span>
                      {outcomeInfo && (
                        <span
                          className="pill"
                          style={{
                            flex: 'none',
                            color: outcomeInfo.tone === 'win' ? 'var(--moss)' : outcomeInfo.tone === 'abandon' ? 'var(--faint)' : 'var(--crimson)',
                          }}
                        >
                          {outcomeInfo.label}
                        </span>
                      )}
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{formatRunTime(summary.run_time)}</span>
                      {(summary.players?.length ?? 0) > 1 && (
                        <span className="pill" style={{ fontSize: 10.5 }}>{summary.players!.length} 人联机</span>
                      )}
                    </>
                  ) : (
                    <span className="undone" style={{ fontSize: 12 }}>读取中…</span>
                  )}
                  <span className="spacer" />
                  {summary && (
                    <button
                      className={`btn small ${comparePick.includes(meta.path) ? 'primary' : ''}`}
                      title="选入对比(选两局并排看卡组差异)"
                      onClick={(e) => {
                        e.stopPropagation();
                        setComparePick((p) =>
                          p.includes(meta.path) ? p.filter((x) => x !== meta.path) : [...p.slice(-1), meta.path],
                        );
                      }}
                    >
                      ⚖
                    </button>
                  )}
                  <span style={{ color: 'var(--faint)', fontSize: 11 }}>{(meta.sizeBytes / 1024).toFixed(0)} KB</span>
                </div>
                {open && <RunDetail path={meta.path} preloaded={summaries.get(meta.path)} timestampMs={meta.t} />}
              </div>
            );
          })}
        </div>
        {shown < filtered.length && (
          <div className="row" style={{ marginTop: 12, justifyContent: 'center' }}>
            <button className="btn" onClick={() => setShown(shown + 40)}>
              显示更多({filtered.length - shown} 局)
            </button>
          </div>
        )}
      </Card>
    </div>
  );
}
