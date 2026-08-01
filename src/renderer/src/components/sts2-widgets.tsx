import { useEffect, useState } from 'react';
import {
  BADGE_RARITY_COLOR,
  actName,
  badgeDesc,
  badgeName,
  bareId,
  cardName,
  characterInitial,
  characterName,
  encounterName,
  looseId,
  parseSts2Run,
  potionName,
  prettifyId,
  relicName,
  sts2Zh,
  type Sts2MapNode,
  type Sts2NodePlayerStats,
  type Sts2Run,
} from '../lib/sts2.ts';

export function CharacterDot({ character }: { character: string }) {
  return (
    <span
      title={characterName(character)}
      style={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--panel-3)',
        border: '1px solid var(--line-2)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: 'var(--gold-2)',
        fontFamily: 'var(--serif)',
        flex: 'none',
      }}
    >
      {characterInitial(character)}
    </span>
  );
}

// 图片内存缓存(主进程另有磁盘缓存)
const artCache = new Map<string, string | null>();

export function Sts2Art({
  kind,
  id,
  size,
  rounded,
}: {
  kind: 'card' | 'relic' | 'potion' | 'badge';
  id: string;
  size: number;
  rounded?: boolean;
}) {
  const key = `${kind}:${id}`;
  const [url, setUrl] = useState<string | null | undefined>(artCache.get(key));

  useEffect(() => {
    if (artCache.has(key)) {
      setUrl(artCache.get(key));
      return;
    }
    let cancelled = false;
    void window.api.sts2Art(kind, bareId(id)).then((result) => {
      const value = result.ok ? result.dataUrl : null;
      artCache.set(key, value);
      if (!cancelled) setUrl(value);
    });
    return () => {
      cancelled = true;
    };
  }, [key, kind, id]);

  if (!url) return null;
  return (
    <img
      src={url}
      width={size}
      height={size}
      style={{ objectFit: 'contain', borderRadius: rounded ? '50%' : 6, flex: 'none' }}
      alt=""
    />
  );
}

/** 宽松取安全数组(mod 数据可能塞 null / 字符串)。 */
export function safeItems<T extends { id?: unknown }>(list: unknown): (T & { id: string })[] {
  if (!Array.isArray(list)) return [];
  return list.filter(
    (x): x is T & { id: string } => Boolean(x) && typeof x === 'object' && typeof (x as { id?: unknown }).id === 'string',
  );
}

export function RunDetail({ path, preloaded, timestampMs }: { path: string; preloaded?: Sts2Run; timestampMs?: number }) {
  const [run, setRun] = useState<Sts2Run | null>(preloaded ?? null);
  const [error, setError] = useState<string | null>(null);
  const [playerIdx, setPlayerIdx] = useState(0);
  const [exporting, setExporting] = useState<'idle' | 'busy' | 'done'>('idle');

  useEffect(() => {
    setPlayerIdx(0);
    if (preloaded) {
      setRun(preloaded);
      return;
    }
    void window.api.sts2Run(path).then((result) => {
      if (result.ok) {
        try {
          setRun(parseSts2Run(result.json));
        } catch (e) {
          setError(`解析失败:${e instanceof Error ? e.message : String(e)}`);
        }
      } else setError(result.message);
    });
  }, [path, preloaded]);

  if (error) return <div className="notice">{error}</div>;
  if (!run) return <div className="undone" style={{ padding: 8 }}>读取中…</div>;

  const players = (run.players ?? []).filter((p) => p && typeof p.character === 'string');
  const player = players[Math.min(playerIdx, Math.max(players.length - 1, 0))];
  const deck = player ? safeItems<{ id: string; current_upgrade_level?: number }>(player.deck) : [];
  const relics = player ? safeItems<{ id: string }>(player.relics) : [];
  const potions = player ? safeItems<{ id: string }>(player.potions) : [];
  const badges = player ? safeItems<{ id: string; rarity?: string }>(player.badges as unknown) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
      <div className="row" style={{ fontSize: 12, color: 'var(--muted)' }}>
        {Array.isArray(run.acts) && run.acts.length > 0 && (
          <span>路线:{run.acts.filter((a) => typeof a === 'string').map(actName).join(' → ')}</span>
        )}
        {run.seed && <span className="pill">种子 {run.seed}</span>}
        {run.build_id && <span className="pill">{run.build_id}</span>}
        <span className="spacer" />
        <button
          className="btn small"
          disabled={exporting === 'busy'}
          onClick={(e) => {
            e.stopPropagation();
            setExporting('busy');
            void (async () => {
              try {
                const { buildSts2RunCard } = await import('../lib/sts2-share-card.ts');
                const ts = timestampMs ?? (run.start_time ? run.start_time * 1000 : Date.now());
                const dataUrl = await buildSts2RunCard(run, ts);
                const result = await window.api.exportPng(`尖塔战报-${new Date(ts).toISOString().slice(0, 10)}.png`, dataUrl);
                setExporting(result.ok ? 'done' : 'idle');
                setTimeout(() => setExporting('idle'), 2500);
              } catch {
                setExporting('idle');
              }
            })();
          }}
        >
          {exporting === 'busy' ? '生成中…' : exporting === 'done' ? '已保存 ✓' : '导出战报卡'}
        </button>
      </div>

      {players.length > 1 && (
        <div className="row">
          {players.map((p, i) => (
            <button
              key={i}
              className={`btn small ${i === playerIdx ? 'primary' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setPlayerIdx(i);
              }}
            >
              {characterName(p.character)}
            </button>
          ))}
        </div>
      )}

      {player && (
        <div className="card" style={{ padding: '12px 14px', background: 'var(--panel-3)' }}>
          <div className="row" style={{ marginBottom: 8 }}>
            <CharacterDot character={player.character} />
            <span style={{ color: 'var(--gold-2)', fontSize: 13.5 }}>{characterName(player.character)}</span>
            <span className="en-name">{prettifyId(player.character)}</span>
            <span className="spacer" />
            {badges.map((badge, bi) => (
              <span
                key={bi}
                className="pill"
                title={badgeDesc(badge.id, badge.rarity ?? '')}
                style={{
                  fontSize: 10.5,
                  color: BADGE_RARITY_COLOR[badge.rarity ?? ''] ?? 'var(--muted)',
                  borderColor: BADGE_RARITY_COLOR[badge.rarity ?? ''] ?? 'var(--line-2)',
                }}
              >
                {badgeName(badge.id, badge.rarity)}
              </span>
            ))}
          </div>

          <div className="equip-slot-label" style={{ marginBottom: 6 }}>牌组({deck.length})</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 6 }}>
            {deck.map((card, ci) => (
              <div
                key={ci}
                className="row"
                style={{
                  gap: 7,
                  flexWrap: 'nowrap',
                  background: 'var(--panel-2)',
                  border: '1px solid var(--line)',
                  borderRadius: 7,
                  padding: '4px 8px',
                }}
              >
                <Sts2Art kind="card" id={card.id} size={30} />
                <span style={{ fontSize: 11.5, lineHeight: 1.4 }}>
                  {cardName(card.id)}
                  {card.current_upgrade_level ? (
                    <span style={{ color: 'var(--moss)' }}>+{card.current_upgrade_level}</span>
                  ) : null}
                </span>
              </div>
            ))}
          </div>

          {relics.length > 0 && (
            <>
              <div className="equip-slot-label" style={{ margin: '10px 0 6px' }}>遗物({relics.length})</div>
              <div className="tag-cloud">
                {relics.map((relic, ri) => (
                  <span key={ri} className="pill" style={{ gap: 6 }}>
                    <Sts2Art kind="relic" id={relic.id} size={20} rounded />
                    {relicName(relic.id)}
                  </span>
                ))}
              </div>
            </>
          )}

          {potions.length > 0 && (
            <>
              <div className="equip-slot-label" style={{ margin: '10px 0 6px' }}>药水</div>
              <div className="tag-cloud">
                {potions.map((potion, pi) => (
                  <span key={pi} className="pill" style={{ gap: 6, color: 'var(--azure)' }}>
                    <Sts2Art kind="potion" id={potion.id} size={20} />
                    {potionName(potion.id)}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {Array.isArray(run.map_point_history) && run.map_point_history.length > 0 && (
        <RunTimeline run={run} playerIdx={playerIdx} />
      )}
    </div>
  );
}

const NODE_GLYPH: Record<string, string> = {
  monster: '⚔',
  elite: '☠',
  boss: '♛',
  unknown: '?',
  event: '?',
  rest_site: '⛺',
  treasure: '▣',
  shop: '¤',
  merchant: '¤',
  ancient: '◈',
};

const isRealId = (id: string | null | undefined): id is string => Boolean(id) && !id!.startsWith('NONE');

function nodeName(node: Sts2MapNode): string {
  const room = node.rooms?.[0];
  if (room?.model_id) return encounterName(room.model_id);
  if (node.map_point_type === 'rest_site') return '篝火';
  if (node.map_point_type === 'treasure') return '宝箱';
  return prettifyId(node.map_point_type ?? '');
}

function pickStats(node: Sts2MapNode, playerIdx: number): Sts2NodePlayerStats | undefined {
  const stats = node.player_stats;
  if (!Array.isArray(stats) || stats.length === 0) return undefined;
  return stats[Math.min(playerIdx, stats.length - 1)];
}

function ChoiceLine({ label, picked, skipped, kind }: { label: string; picked: string[]; skipped: string[]; kind: 'card' | 'relic' | 'potion' }) {
  const name = kind === 'card' ? cardName : kind === 'relic' ? relicName : potionName;
  if (picked.length === 0 && skipped.length === 0) return null;
  return (
    <div style={{ fontSize: 11, lineHeight: 1.8 }}>
      <span style={{ color: 'var(--faint)' }}>{label}:</span>
      {picked.map((id, i) => (
        <span key={`p${i}`} style={{ color: 'var(--moss, #8fbf6a)', marginRight: 8, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
          <Sts2Art kind={kind} id={id} size={16} />
          {name(id)}
        </span>
      ))}
      {skipped.length > 0 && (
        <span style={{ color: 'var(--faint)', textDecoration: 'line-through', opacity: 0.7 }}>
          {skipped.map((id) => name(id)).join('、')}
        </span>
      )}
    </div>
  );
}

function RunTimeline({ run, playerIdx }: { run: Sts2Run; playerIdx: number }) {
  const [open, setOpen] = useState(false);
  const acts = run.map_point_history ?? [];
  const flat = acts.flatMap((nodes, actIdx) => nodes.map((node) => ({ node, actIdx })));
  const hpSeries = flat.map(({ node }) => pickStats(node, playerIdx));
  const maxHp = Math.max(...hpSeries.map((s) => s?.max_hp ?? 0), 1);
  const maxGold = Math.max(...hpSeries.map((s) => s?.current_gold ?? 0), 1);

  const W = 620;
  const H = 90;
  const px = (i: number) => (flat.length > 1 ? (i / (flat.length - 1)) * (W - 10) + 5 : W / 2);
  const hpPath = hpSeries
    .map((s, i) => `${i === 0 ? 'M' : 'L'}${px(i).toFixed(1)},${(H - 5 - ((s?.current_hp ?? 0) / maxHp) * (H - 14)).toFixed(1)}`)
    .join(' ');
  const goldPath = hpSeries
    .map((s, i) => `${i === 0 ? 'M' : 'L'}${px(i).toFixed(1)},${(H - 5 - ((s?.current_gold ?? 0) / maxGold) * (H - 14)).toFixed(1)}`)
    .join(' ');

  return (
    <div className="card" style={{ padding: '12px 14px', background: 'var(--panel-3)' }}>
      <div className="row">
        <button
          className="btn small"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? '收起逐层复盘' : `▶ 逐层复盘(${flat.length} 层)`}
        </button>
        {!run.win && isRealId(run.killed_by_encounter) && (
          <span className="pill" style={{ color: 'var(--crimson)', borderColor: 'var(--crimson)' }}>
            倒在:{encounterName(run.killed_by_encounter)}
          </span>
        )}
        {(Array.isArray(run.modifiers) ? run.modifiers : [])
          .map((m) => looseId(m))
          .filter(isRealId)
          .map((id) => (
            <span key={id} className="pill" style={{ color: 'var(--azure)' }}>
              修饰:{sts2Zh('modifiers', id)}
            </span>
          ))}
      </div>

      {open && (
        <>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 90, marginTop: 10 }}>
            <path d={goldPath} fill="none" stroke="var(--gold-dim)" strokeWidth="1" strokeDasharray="3 3" />
            <path d={hpPath} fill="none" stroke="var(--crimson)" strokeWidth="1.6" />
            {hpSeries.map((s, i) =>
              (s?.damage_taken ?? 0) >= maxHp * 0.25 ? (
                <circle key={i} cx={px(i)} cy={H - 5 - ((s?.current_hp ?? 0) / maxHp) * (H - 14)} r="2.4" fill="var(--crimson)" />
              ) : null,
            )}
          </svg>
          <div className="row" style={{ fontSize: 10.5, color: 'var(--faint)', marginBottom: 6 }}>
            <span style={{ color: 'var(--crimson)' }}>— 生命</span>
            <span style={{ color: 'var(--gold-dim)' }}>--- 金币(峰值 {maxGold})</span>
          </div>

          {acts.map((nodes, actIdx) => (
            <div key={actIdx}>
              <div className="equip-slot-label" style={{ margin: '10px 0 4px' }}>
                第 {actIdx + 1} 幕{Array.isArray(run.acts) && typeof run.acts[actIdx] === 'string' ? ` · ${actName(run.acts[actIdx])}` : ''}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {nodes.map((node, ni) => {
                  const stats = pickStats(node, playerIdx);
                  const room = node.rooms?.[0];
                  const damage = stats?.damage_taken ?? 0;
                  const pickedCards = (stats?.card_choices ?? []).filter((c) => c.was_picked).map((c) => looseId(c)).filter(isRealId);
                  const skippedCards = (stats?.card_choices ?? []).filter((c) => !c.was_picked).map((c) => looseId(c)).filter(isRealId);
                  const pickedRelics = (stats?.relic_choices ?? []).filter((c) => c.was_picked).map((c) => c.choice ?? null).filter(isRealId);
                  const pickedPotions = (stats?.potion_choices ?? []).filter((c) => c.was_picked).map((c) => looseId(c)).filter(isRealId);
                  const upgraded = (stats?.upgraded_cards ?? []).map((u) => looseId(u)).filter(isRealId);
                  const events = (stats?.event_choices ?? [])
                    .map((e) => {
                      const key = e?.title?.key;
                      const table = e?.title?.table;
                      if (!key || !table) return null;
                      return sts2Zh(table, key.split('.')[0]);
                    })
                    .filter((n): n is string => n !== null);
                  return (
                    <div
                      key={ni}
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'baseline',
                        padding: '4px 8px',
                        borderRadius: 6,
                        background: 'var(--panel-2)',
                        border: '1px solid var(--line)',
                      }}
                    >
                      <span style={{ width: 16, textAlign: 'center', color: node.map_point_type === 'boss' || node.map_point_type === 'elite' ? 'var(--crimson)' : 'var(--gold-dim)', flex: 'none' }}>
                        {NODE_GLYPH[node.map_point_type ?? ''] ?? '·'}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12 }}>
                          {nodeName(node)}
                          {room?.turns_taken ? <span style={{ color: 'var(--faint)', fontSize: 10.5 }}>({room.turns_taken} 回合)</span> : null}
                          {(stats?.rest_site_choices ?? []).some((c) => c === 'HEAL') && <span style={{ color: 'var(--moss, #8fbf6a)', fontSize: 11 }}> · 休息回血</span>}
                        </div>
                        <ChoiceLine label="卡牌" picked={pickedCards} skipped={skippedCards} kind="card" />
                        <ChoiceLine label="遗物" picked={pickedRelics} skipped={[]} kind="relic" />
                        <ChoiceLine label="药水" picked={pickedPotions} skipped={[]} kind="potion" />
                        {upgraded.length > 0 && (
                          <div style={{ fontSize: 11, color: 'var(--moss, #8fbf6a)' }}>升级:{upgraded.map((id) => cardName(id)).join('、')}</div>
                        )}
                        {events.length > 0 && (
                          <div style={{ fontSize: 11, color: 'var(--azure)' }}>事件所得:{events.join('、')}</div>
                        )}
                      </div>
                      <span style={{ fontSize: 11, color: damage > 0 ? 'var(--crimson)' : 'var(--faint)', flex: 'none' }}>
                        {damage > 0 ? `-${damage} ` : ''}
                        <span style={{ color: 'var(--muted)' }}>{stats?.current_hp ?? '—'}/{stats?.max_hp ?? '—'}</span>
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--gold-dim)', width: 52, textAlign: 'right', flex: 'none' }}>
                        ¤{stats?.current_gold ?? '—'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
