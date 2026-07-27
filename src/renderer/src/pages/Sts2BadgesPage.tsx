import { useEffect, useMemo, useState } from 'react';
import type { SteamAchievementsResult } from '../../../shared/contracts';
import { Card, PageHead, ProgressLine } from '../components/ui.tsx';
import { CharacterDot, Sts2Art } from '../components/sts2-widgets.tsx';
import { STS2_ACHIEVEMENTS } from '../data/zh/sts2-zh.generated.ts';
import { formatDateTime } from '../lib/format.ts';
import { useSts2 } from '../lib/sts2-context.tsx';
import { BADGE_RARITY_COLOR, badgeDesc, badgeName, bareId, characterName } from '../lib/sts2.ts';

const TIERS = ['gold', 'silver', 'bronze'] as const;
const TIER_LABEL: Record<string, string> = { gold: '金', silver: '银', bronze: '铜' };

interface BadgeAgg {
  id: string;
  counts: Record<string, number>;
  byCharacter: { character: string; count: number }[];
}

export function Sts2BadgesPage() {
  const { progress } = useSts2();

  const badges = useMemo<BadgeAgg[]>(() => {
    const map = new Map<string, { counts: Record<string, number>; perChar: Map<string, number> }>();
    for (const cs of progress?.character_stats ?? []) {
      for (const badge of cs.badges ?? []) {
        if (!badge?.id) continue;
        const agg = map.get(badge.id) ?? { counts: { bronze: 0, silver: 0, gold: 0 }, perChar: new Map() };
        const count = badge.count ?? 1;
        const tier = badge.rarity === 'gold' || badge.rarity === 'silver' ? badge.rarity : 'bronze';
        agg.counts[tier] += count;
        agg.perChar.set(cs.id, (agg.perChar.get(cs.id) ?? 0) + count);
        map.set(badge.id, agg);
      }
    }
    return [...map.entries()]
      .map(([id, a]) => ({
        id,
        counts: a.counts,
        byCharacter: [...a.perChar.entries()].map(([character, count]) => ({ character, count })).sort((x, y) => y.count - x.count),
      }))
      .sort(
        (a, b) =>
          b.counts.gold - a.counts.gold || b.counts.silver - a.counts.silver || b.counts.bronze - a.counts.bronze,
      );
  }, [progress]);

  if (!progress) return null;

  const totals = badges.reduce(
    (acc, b) => ({
      bronze: acc.bronze + b.counts.bronze,
      silver: acc.silver + b.counts.silver,
      gold: acc.gold + b.counts.gold,
    }),
    { bronze: 0, silver: 0, gold: 0 },
  );

  return (
    <div className="page">
      <PageHead
        title="徽章墙"
        sub={`局内表现徽章生涯累计 · 金 ${totals.gold} / 银 ${totals.silver} / 铜 ${totals.bronze} · 名称与条件取自官方简中`}
      />

      {badges.length === 0 ? (
        <div className="empty-hero">
          <div className="glyph">🎖</div>
          <h2>还没有徽章</h2>
          <p>打几局漂亮的,回来看你的荣誉墙。</p>
        </div>
      ) : (
        <div className="badge-grid">
          {badges.map((badge) => {
            const topTier = TIERS.find((t) => badge.counts[t] > 0) ?? 'bronze';
            return (
              <div key={badge.id} className={`badge-card earned ${topTier === 'gold' ? 'r-legendary' : topTier === 'silver' ? 'r-rare' : 'r-common'}`}>
                <div className="badge-icon" style={{ color: BADGE_RARITY_COLOR[topTier] }}>
                  <Sts2Art kind="badge" id={badge.id} size={34} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="badge-name">{badgeName(badge.id, topTier)}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 5 }}>
                    {TIERS.filter((t) => badge.counts[t] > 0).map((tier) => {
                      const desc = badgeDesc(badge.id, tier);
                      return (
                        <div key={tier} title={desc} style={{ fontSize: 11.5, color: BADGE_RARITY_COLOR[tier], lineHeight: 1.6 }}>
                          {TIER_LABEL[tier]} · {badgeName(badge.id, tier)} ×{badge.counts[tier]}
                          {desc && <span style={{ color: 'var(--faint)', marginLeft: 6 }}>{desc}</span>}
                        </div>
                      );
                    })}
                  </div>
                  <div className="row" style={{ gap: 4, marginTop: 7 }}>
                    {badge.byCharacter.slice(0, 6).map((entry) => (
                      <span key={entry.character} title={`${characterName(entry.character)} ×${entry.count}`}>
                        <CharacterDot character={entry.character} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Sts2AchievementsSection unlocked={progress.unlocked_achievements ?? []} />
    </div>
  );
}

const normalizeAchId = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, '');

function Sts2AchievementsSection({ unlocked }: { unlocked: string[] }) {
  const [steam, setSteam] = useState<SteamAchievementsResult | null>(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    void window.api.sts2SteamAchievements({ forceRefresh: false }).then(setSteam);
  }, []);

  const refresh = async () => {
    setFetching(true);
    try {
      setSteam(await window.api.sts2SteamAchievements({ forceRefresh: true }));
    } finally {
      setFetching(false);
    }
  };

  const steamByNorm = useMemo(() => {
    const map = new Map<string, { unlockedAt?: number; unlocked: boolean; globalPercent?: number }>();
    if (steam?.ok) {
      for (const a of steam.achievements) {
        map.set(normalizeAchId(a.id), { unlocked: a.unlocked, unlockedAt: a.unlockedAt, globalPercent: a.globalPercent });
      }
    }
    return map;
  }, [steam]);

  const saveUnlocked = new Set(unlocked.map((id) => normalizeAchId(bareId(id))));
  const rows = Object.entries(STS2_ACHIEVEMENTS).map(([id, ach]) => {
    const fromSteam = steamByNorm.get(normalizeAchId(id));
    return {
      id,
      ...ach,
      got: saveUnlocked.has(normalizeAchId(id)) || Boolean(fromSteam?.unlocked),
      unlockedAt: fromSteam?.unlockedAt,
      globalPercent: fromSteam?.globalPercent,
    };
  });
  rows.sort((a, b) => Number(b.got) - Number(a.got) || a.id.localeCompare(b.id));
  const done = rows.filter((r) => r.got).length;

  return (
    <Card
      title="游戏成就"
      hint={
        steam?.ok
          ? `Steam 数据 · ${formatDateTime(steam.fetchedAt)}${steam.fromCache ? '(缓存)' : ''}`
          : '名称与条件取自游戏官方简中'
      }
    >
      <div className="row" style={{ marginBottom: 10 }}>
        <ProgressLine label="成就进度" value={done} total={rows.length} />
      </div>
      <div className="row" style={{ marginBottom: 10 }}>
        <button className="btn small" disabled={fetching} onClick={() => void refresh()}>
          {fetching ? '拉取中…' : steam?.ok ? '刷新 Steam 成就' : '拉取 Steam 成就'}
        </button>
        {steam && !steam.ok && steam.code !== 'no-cache' && (
          <span style={{ fontSize: 11.5, color: 'var(--crimson)' }}>{steam.message}</span>
        )}
        {steam && !steam.ok && steam.code === 'no-cache' && (
          <span style={{ fontSize: 11.5, color: 'var(--faint)' }}>{steam.message}</span>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 8 }}>
        {rows.map((ach) => (
          <div
            key={ach.id}
            style={{
              border: `1px solid ${ach.got ? 'var(--gold-dim)' : 'var(--line)'}`,
              borderRadius: 8,
              padding: '8px 12px',
              opacity: ach.got ? 1 : 0.55,
              background: ach.got ? 'rgba(224,175,78,0.06)' : 'transparent',
            }}
          >
            <div style={{ fontSize: 13, color: ach.got ? 'var(--gold-2)' : 'var(--muted)', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <span>{ach.got ? '★' : '☆'} {ach.title}</span>
              {ach.globalPercent !== undefined && (
                <span style={{ fontSize: 10.5, color: ach.globalPercent < 10 ? 'var(--gold)' : 'var(--faint)', flex: 'none' }}>
                  全球 {ach.globalPercent.toFixed(1)}%
                </span>
              )}
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--faint)', marginTop: 3, lineHeight: 1.6 }}>{ach.desc}</div>
            {ach.got && ach.unlockedAt && (
              <div style={{ fontSize: 10.5, color: 'var(--gold-dim)', marginTop: 3 }}>{formatDateTime(ach.unlockedAt * 1000)} 解锁</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
