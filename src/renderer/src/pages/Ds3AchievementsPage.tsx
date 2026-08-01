import { useEffect, useMemo, useState } from 'react';
import type { SteamAchievementsResult } from '../../../shared/contracts';
import { Card, PageHead, ProgressLine } from '../components/ui.tsx';
import { formatDateTime } from '../lib/format.ts';

export function Ds3AchievementsPage() {
  const [steam, setSteam] = useState<SteamAchievementsResult | null>(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    void window.api.ds3SteamAchievements({ forceRefresh: false }).then(setSteam);
  }, []);

  const refresh = async () => {
    setFetching(true);
    try {
      setSteam(await window.api.ds3SteamAchievements({ forceRefresh: true }));
    } finally {
      setFetching(false);
    }
  };

  const rows = useMemo(() => {
    if (!steam?.ok) return [];
    return [...steam.achievements].sort(
      (a, b) => Number(b.unlocked) - Number(a.unlocked) || (b.globalPercent ?? 0) - (a.globalPercent ?? 0),
    );
  }, [steam]);
  const done = rows.filter((r) => r.unlocked).length;

  return (
    <div className="page">
      <PageHead
        title="火之意志"
        sub="Steam 官方成就(官方简中)· 含全球解锁率"
        right={
          <button className="btn small" disabled={fetching} onClick={() => void refresh()}>
            {fetching ? '拉取中…' : steam?.ok ? '刷新' : '拉取 Steam 成就'}
          </button>
        }
      />

      {steam && !steam.ok && (
        <div className="notice" style={steam.code === 'no-cache' ? {} : { borderColor: 'var(--crimson)' }}>
          {steam.message}
        </div>
      )}

      {steam?.ok && (
        <>
          <Card hint={`拉取于 ${formatDateTime(steam.fetchedAt)}${steam.fromCache ? '(本地缓存)' : ''}`}>
            <ProgressLine label="成就进度" value={done} total={rows.length} />
          </Card>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 10 }}>
            {rows.map((ach) => (
              <div
                key={ach.id}
                className="card"
                style={{
                  display: 'flex',
                  gap: 12,
                  padding: '12px 14px',
                  opacity: ach.unlocked ? 1 : 0.55,
                  borderColor: ach.unlocked ? 'var(--gold-dim)' : 'var(--line)',
                }}
              >
                {(ach.unlocked ? ach.iconUrl : ach.grayIconUrl ?? ach.iconUrl) && (
                  <img
                    src={ach.unlocked ? ach.iconUrl : ach.grayIconUrl ?? ach.iconUrl}
                    width={52}
                    height={52}
                    style={{ borderRadius: 6, flex: 'none', filter: ach.unlocked ? undefined : 'grayscale(0.4)' }}
                    alt=""
                  />
                )}
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontSize: 13.5, color: ach.unlocked ? 'var(--gold-2)' : 'var(--muted)' }}>
                      {ach.unlocked ? '★' : '☆'} {ach.name}
                    </span>
                    {ach.globalPercent !== undefined && (
                      <span style={{ fontSize: 10.5, color: ach.globalPercent < 10 ? 'var(--gold)' : 'var(--faint)', flex: 'none' }}>
                        全球 {ach.globalPercent.toFixed(1)}%
                      </span>
                    )}
                  </div>
                  {ach.description && (
                    <div style={{ fontSize: 11.5, color: 'var(--faint)', marginTop: 4, lineHeight: 1.6 }}>{ach.description}</div>
                  )}
                  {ach.unlocked && ach.unlockedAt && (
                    <div style={{ fontSize: 10.5, color: 'var(--gold-dim)', marginTop: 4 }}>
                      {formatDateTime(ach.unlockedAt * 1000)} 解锁
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {!steam && (
        <div className="empty-hero">
          <div className="spin" />
        </div>
      )}
    </div>
  );
}
