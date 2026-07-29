import { useMemo, useState } from 'react';
import { BarChart, LineChart, ScatterChart } from '../components/charts.tsx';
import { Card, PageHead, Stat } from '../components/ui.tsx';
import { CharacterDot, Sts2Art } from '../components/sts2-widgets.tsx';
import { STS2_ZH } from '../data/zh/sts2-zh.generated.ts';
import { formatDateTime, formatPlaytime } from '../lib/format.ts';
import { useSts2 } from '../lib/sts2-context.tsx';
import { ascensionLevel, bareId, cardName, characterName, encounterName, formatRunTime, relicName, runOutcome, sts2Zh, type Sts2CharacterStat } from '../lib/sts2.ts';
import { cardPickRates, coopCombos, killerCounts, relicWinRates } from '../lib/sts2-stats.ts';

export function Sts2OverviewPage() {
  const { progress, runs, summaries, loadedCount, setRunsFocus } = useSts2();

  const curvePoints = useMemo(() => {
    const ordered = runs
      .filter((r) => summaries.has(r.path))
      .sort((a, b) => a.t - b.t)
      .map((r) => ({ meta: r, run: summaries.get(r.path)! }));
    const window = 10;
    return ordered.map((entry, i) => {
      const slice = ordered.slice(Math.max(0, i - window + 1), i + 1);
      const rate = slice.filter((s) => s.run.win).length / slice.length;
      const who = (entry.run.players ?? [])
        .filter((p) => p?.character)
        .map((p) => characterName(p.character))
        .join('+');
      return {
        x: i,
        y: rate,
        label: (
          <>
            <div>{formatDateTime(entry.meta.t)}</div>
            <div style={{ color: 'var(--muted)' }}>
              第 {i + 1} 局 · {who} · {runOutcome(entry.run).label}
            </div>
          </>
        ),
      };
    });
  }, [runs, summaries]);

  const ascensionBars = useMemo(() => {
    const buckets = new Map<number, { wins: number; losses: number }>();
    for (const run of summaries.values()) {
      const a = ascensionLevel(run.ascension);
      const b = buckets.get(a) ?? { wins: 0, losses: 0 };
      if (run.win) b.wins += 1;
      else b.losses += 1;
      buckets.set(a, b);
    }
    return [...buckets.entries()]
      .sort((x, y) => x[0] - y[0])
      .map(([a, b]) => ({
        axis: `A${a}`,
        value: b.wins,
        value2: b.losses,
        label: (
          <>
            <div>进阶 A{a}</div>
            <div style={{ color: 'var(--muted)' }}>
              {b.wins + b.losses} 局 · 胜率 {Math.round((b.wins / (b.wins + b.losses)) * 100)}%
            </div>
          </>
        ),
      }));
  }, [summaries]);

  const cardRows = useMemo(() => {
    return (progress?.card_stats ?? [])
      .map((c) => {
        const games = (c.times_won ?? 0) + (c.times_lost ?? 0);
        const offered = (c.times_picked ?? 0) + (c.times_skipped ?? 0);
        return {
          id: c.id,
          games,
          winrate: games > 0 ? (c.times_won ?? 0) / games : 0,
          picked: c.times_picked ?? 0,
          pickRate: offered > 0 ? (c.times_picked ?? 0) / offered : null,
        };
      })
      .filter((c) => c.games >= 5);
  }, [progress]);

  const best = [...cardRows].sort((a, b) => b.winrate - a.winrate || b.games - a.games).slice(0, 10);
  const worst = [...cardRows].sort((a, b) => a.winrate - b.winrate || b.games - a.games).slice(0, 10);

  const nemesis = useMemo(() => {
    return (progress?.enemy_stats ?? [])
      .map((e) => {
        const wins = (e.fight_stats ?? []).reduce((n, f) => n + (f.wins ?? 0), 0);
        const losses = (e.fight_stats ?? []).reduce((n, f) => n + (f.losses ?? 0), 0);
        return { id: e.enemy_id ?? '', wins, losses };
      })
      .filter((e) => e.losses > 0)
      .sort((a, b) => b.losses - a.losses)
      .slice(0, 8);
  }, [progress]);

  type CharSortKey = 'games' | 'wins' | 'losses' | 'rate' | 'maxA' | 'streak' | 'playtime';
  const [charSort, setCharSort] = useState<CharSortKey>('games');
  const charMetric = (c: Sts2CharacterStat, key: CharSortKey): number => {
    const wins = c.total_wins ?? 0;
    const losses = c.total_losses ?? 0;
    switch (key) {
      case 'wins': return wins;
      case 'losses': return losses;
      case 'rate': return wins + losses > 0 ? wins / (wins + losses) : 0;
      case 'maxA': return ascensionLevel(c.max_ascension);
      case 'streak': return c.best_win_streak ?? 0;
      case 'playtime': return c.playtime ?? 0;
      default: return wins + losses;
    }
  };
  const characterStats = (progress?.character_stats ?? [])
    .filter((c) => (c.total_wins ?? 0) + (c.total_losses ?? 0) > 0)
    .sort((a, b) => charMetric(b, charSort) - charMetric(a, charSort));

  const sortableTh = (key: CharSortKey, label: string) => (
    <th
      className="num"
      style={{ textAlign: 'right', cursor: 'pointer', color: charSort === key ? 'var(--gold-2)' : undefined }}
      title="点击按此列排序"
      onClick={() => setCharSort(key)}
    >
      {label}
      {charSort === key ? ' ▾' : ''}
    </th>
  );

  const loadedRuns = [...summaries.values()];
  const totalWins = loadedRuns.filter((r) => r.win).length;

  const cardDex = useMemo(() => {
    const officialIds = Object.keys(STS2_ZH.cards ?? {});
    const discovered = new Set((progress?.discovered_cards ?? []).map((id) => bareId(id)));
    return { found: officialIds.filter((id) => discovered.has(id)).length, total: officialIds.length };
  }, [progress]);

  const relicRows = useMemo(() => relicWinRates(summaries), [summaries]);
  const bestRelics = [...relicRows].sort((a, b) => b.winrate - a.winrate || b.games - a.games).slice(0, 10);
  const worstRelics = [...relicRows].sort((a, b) => a.winrate - b.winrate || b.games - a.games).slice(0, 10);

  const killers = useMemo(() => killerCounts(summaries).slice(0, 10), [summaries]);

  const pickRows = useMemo(() => cardPickRates(summaries), [summaries]);
  const mostPicked = [...pickRows].sort((a, b) => b.rate - a.rate || b.offered - a.offered).slice(0, 10);
  const mostSkipped = [...pickRows].sort((a, b) => a.rate - b.rate || b.offered - a.offered).slice(0, 10);

  const combos = useMemo(() => coopCombos(summaries).filter((c) => c.games >= 2).slice(0, 10), [summaries]);

  const ancients = useMemo(() => {
    return (progress?.ancient_stats ?? [])
      .filter((a) => a.ancient_id)
      .map((a) => {
        const wins = (a.character_stats ?? []).reduce((n, c) => n + (c.wins ?? 0), 0);
        const losses = (a.character_stats ?? []).reduce((n, c) => n + (c.losses ?? 0), 0);
        return { id: a.ancient_id!, wins, losses, games: wins + losses };
      })
      .filter((a) => a.games > 0)
      .sort((a, b) => b.games - a.games);
  }, [progress]);

  return (
    <div className="page">
      <PageHead
        title="生涯总览"
        sub={`杀戮尖塔 2 · 明文存档直读${loadedCount < runs.length ? ` · 对局加载中 ${loadedCount}/${runs.length}` : ''}`}
      />

      {progress && (
        <>
          <div className="stat-grid">
            <Stat label="总游玩时长" value={formatPlaytime(progress.total_playtime ?? 0)} />
            <Stat label="累计爬层" value={(progress.floors_climbed ?? 0).toLocaleString('zh-CN')} />
            <Stat label="对局 / 胜场" value={`${runs.length} / ${totalWins}`} />
            <Stat
              label="总胜率"
              value={loadedRuns.length > 0 ? `${Math.round((totalWins / loadedRuns.length) * 100)}%` : '—'}
            />
            <Stat label="图鉴·官方卡牌" value={`${cardDex.found}/${cardDex.total}`} />
            <Stat label="Wongo 点数" value={progress.wongo_points ?? 0} />
          </div>

          {curvePoints.length >= 10 && (
            <Card title="胜率曲线" hint="近 10 局滚动胜率 · 悬停查看每一局">
              <LineChart points={curvePoints} height={150} yMax={1} />
            </Card>
          )}

          {ascensionBars.length > 1 && (
            <Card title="进阶分布" hint="各进阶等级的局数与胜负 · 亮色为胜场">
              <BarChart data={ascensionBars} height={150} color="var(--gold)" color2="rgba(200,68,46,0.45)" yFormat={(v) => `${v} 局`} />
            </Card>
          )}

          {characterStats.length > 0 && (
            <Card title="角色战绩" hint="官方统计(progress.save)· 点表头排序">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>角色</th>
                    {sortableTh('wins', '胜')}
                    {sortableTh('losses', '负')}
                    {sortableTh('rate', '胜率')}
                    {sortableTh('maxA', '最高进阶')}
                    {sortableTh('streak', '最佳连胜')}
                    <th className="num" style={{ textAlign: 'right' }}>最快胜利</th>
                    {sortableTh('playtime', '时长')}
                  </tr>
                </thead>
                <tbody>
                  {characterStats.map((c) => {
                    const total = (c.total_wins ?? 0) + (c.total_losses ?? 0);
                    return (
                      <tr key={c.id}>
                        <td>
                          <div className="row" style={{ gap: 8, flexWrap: 'nowrap' }}>
                            <CharacterDot character={c.id} />
                            <span>{characterName(c.id)}</span>
                          </div>
                        </td>
                        <td className="num done">{c.total_wins ?? 0}</td>
                        <td className="num" style={{ color: 'var(--crimson)' }}>{c.total_losses ?? 0}</td>
                        <td className="num">{total > 0 ? `${Math.round(((c.total_wins ?? 0) / total) * 100)}%` : '—'}</td>
                        <td className="num" style={{ color: 'var(--gold-2)' }}>A{ascensionLevel(c.max_ascension)}</td>
                        <td className="num">{c.best_win_streak ?? 0}</td>
                        <td className="num">{formatRunTime(c.fastest_win_time)}</td>
                        <td className="num" style={{ color: 'var(--muted)' }}>{formatPlaytime(c.playtime ?? 0)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          )}

          <div className="grid-2">
            <Card title="本命卡" hint="带这张卡的对局胜率(≥5 局)· 点击看对局">
              <table className="tbl">
                <tbody>
                  {best.map((c) => (
                    <tr key={c.id} style={{ cursor: 'pointer' }} onClick={() => setRunsFocus({ kind: 'card', id: c.id })}>
                      <td style={{ width: 36 }}><Sts2Art kind="card" id={c.id} size={28} /></td>
                      <td>{cardName(c.id)}</td>
                      <td className="num done" style={{ width: 64 }}>{Math.round(c.winrate * 100)}%</td>
                      <td className="num" style={{ width: 64, color: 'var(--faint)' }}>{c.games} 局</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <Card title="毒瘤卡" hint="带上就输?(≥5 局)· 点击看对局">
              <table className="tbl">
                <tbody>
                  {worst.map((c) => (
                    <tr key={c.id} style={{ cursor: 'pointer' }} onClick={() => setRunsFocus({ kind: 'card', id: c.id })}>
                      <td style={{ width: 36 }}><Sts2Art kind="card" id={c.id} size={28} /></td>
                      <td>{cardName(c.id)}</td>
                      <td className="num" style={{ width: 64, color: 'var(--crimson)' }}>{Math.round(c.winrate * 100)}%</td>
                      <td className="num" style={{ width: 64, color: 'var(--faint)' }}>{c.games} 局</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>

          {relicRows.length > 0 && (
            <div className="grid-2">
              <Card title="本命遗物" hint="带这件遗物的对局胜率(≥5 局)· 点击看对局">
                <table className="tbl">
                  <tbody>
                    {bestRelics.map((r) => (
                      <tr key={r.id} style={{ cursor: 'pointer' }} onClick={() => setRunsFocus({ kind: 'relic', id: r.id })}>
                        <td style={{ width: 30 }}><Sts2Art kind="relic" id={r.id} size={22} rounded /></td>
                        <td>{relicName(r.id)}</td>
                        <td className="num done" style={{ width: 64 }}>{Math.round(r.winrate * 100)}%</td>
                        <td className="num" style={{ width: 64, color: 'var(--faint)' }}>{r.games} 局</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
              <Card title="毒瘤遗物" hint="带上就翻车?(≥5 局)· 点击看对局">
                <table className="tbl">
                  <tbody>
                    {worstRelics.map((r) => (
                      <tr key={r.id} style={{ cursor: 'pointer' }} onClick={() => setRunsFocus({ kind: 'relic', id: r.id })}>
                        <td style={{ width: 30 }}><Sts2Art kind="relic" id={r.id} size={22} rounded /></td>
                        <td>{relicName(r.id)}</td>
                        <td className="num" style={{ width: 64, color: 'var(--crimson)' }}>{Math.round(r.winrate * 100)}%</td>
                        <td className="num" style={{ width: 64, color: 'var(--faint)' }}>{r.games} 局</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          )}

          {pickRows.length >= 10 && (
            <Card title="卡牌选取率散点" hint="横轴=见到次数,纵轴=拿取率 · 点击某点看对局">
              <ScatterChart
                points={pickRows.map((c) => ({
                  x: c.offered,
                  y: c.rate,
                  size: Math.min(3 + Math.sqrt(c.offered) * 0.5, 8),
                  color: c.rate >= 0.5 ? 'var(--gold)' : c.rate >= 0.2 ? 'var(--azure)' : 'var(--crimson)',
                  label: <div>{cardName(c.id)}</div>,
                }))}
                height={230}
                xLabel="见到次数"
                yLabel="拿取率"
                onPick={(i) => setRunsFocus({ kind: 'card', id: pickRows[i].id })}
              />
            </Card>
          )}

          {pickRows.length > 0 && (
            <div className="grid-2">
              <Card title="最常拿的卡" hint="三选一真实拿取率(见到 ≥10 次)">
                <table className="tbl">
                  <tbody>
                    {mostPicked.map((c) => (
                      <tr key={c.id}>
                        <td style={{ width: 36 }}><Sts2Art kind="card" id={c.id} size={28} /></td>
                        <td>{cardName(c.id)}</td>
                        <td className="num done" style={{ width: 64 }}>{Math.round(c.rate * 100)}%</td>
                        <td className="num" style={{ width: 72, color: 'var(--faint)' }}>见 {c.offered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
              <Card title="最常跳的卡" hint="出现了也不拿(见到 ≥10 次)">
                <table className="tbl">
                  <tbody>
                    {mostSkipped.map((c) => (
                      <tr key={c.id}>
                        <td style={{ width: 36 }}><Sts2Art kind="card" id={c.id} size={28} /></td>
                        <td>{cardName(c.id)}</td>
                        <td className="num" style={{ width: 64, color: 'var(--crimson)' }}>{Math.round(c.rate * 100)}%</td>
                        <td className="num" style={{ width: 72, color: 'var(--faint)' }}>见 {c.offered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          )}

          <div className="grid-2">
            {nemesis.length > 0 && (
              <Card title="苦手敌人榜" hint="让你倒下次数最多的家伙">
                <div className="tag-cloud">
                  {nemesis.map((e) => (
                    <span key={e.id} className="pill" style={{ color: 'var(--crimson)' }}>
                      {encounterName(e.id)} · 败 {e.losses}(胜 {e.wins})
                    </span>
                  ))}
                </div>
              </Card>
            )}
            {killers.length > 0 && (
              <Card title="终结者榜" hint="真正终结整局的凶手(killed_by)">
                <div className="tag-cloud">
                  {killers.map(([id, count]) => (
                    <span key={id} className="pill" style={{ color: 'var(--crimson)', borderColor: 'var(--crimson)' }}>
                      ☠ {encounterName(id)} ×{count}
                    </span>
                  ))}
                </div>
              </Card>
            )}
          </div>

          <div className="grid-2">
            {ancients.length > 0 && (
              <Card title="远古庇佑战绩" hint="每位远古麾下的胜负(progress.save)">
                <table className="tbl">
                  <tbody>
                    {ancients.map((a) => (
                      <tr key={a.id}>
                        <td>◈ {sts2Zh('ancients', a.id)}</td>
                        <td className="num" style={{ width: 56 }}>{a.games} 局</td>
                        <td className="num done" style={{ width: 48 }}>{a.wins} 胜</td>
                        <td className="num" style={{ width: 48, color: 'var(--crimson)' }}>{a.losses} 负</td>
                        <td className="num" style={{ width: 56, color: 'var(--gold-2)' }}>
                          {Math.round((a.wins / a.games) * 100)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            )}
            {combos.length > 0 && (
              <Card title="联机搭档" hint="双人组合胜率(≥2 局)">
                <table className="tbl">
                  <tbody>
                    {combos.map((c) => (
                      <tr key={c.characters.join('+')}>
                        <td>
                          <span className="row" style={{ gap: 4 }}>
                            {c.characters.map((ch, i) => (
                              <CharacterDot key={i} character={ch} />
                            ))}
                            <span style={{ fontSize: 12 }}>{c.characters.map((ch) => characterName(ch)).join(' + ')}</span>
                          </span>
                        </td>
                        <td className="num" style={{ width: 56 }}>{c.games} 局</td>
                        <td className="num done" style={{ width: 48 }}>{c.wins} 胜</td>
                        <td className="num" style={{ width: 56, color: 'var(--gold-2)' }}>
                          {Math.round((c.wins / c.games) * 100)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            )}
          </div>
        </>
      )}
    </div>
  );
}
