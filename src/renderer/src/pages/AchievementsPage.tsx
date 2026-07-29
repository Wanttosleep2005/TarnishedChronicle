import { useEffect, useMemo, useState } from 'react';
import type { SteamAchievementsResult } from '../../../shared/contracts';
import { formatDateTime } from '../lib/format.ts';
import { Card, CollapsibleCard, PageHead, ProgressLine } from '../components/ui.tsx';
import { MapPinIcon } from '../components/icons.tsx';
import { deriveAchievements } from '../lib/achievements.ts';
import { deriveBadges } from '../lib/badges.ts';
import { deriveProfile } from '../lib/derive.ts';
import { findItemPixel } from '../lib/locate-item.ts';
import type { MasterPixel } from '../lib/map-affine.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';

export function AchievementsPage({ onOpenCollection }: { onOpenCollection?: () => void }) {
  const slot = useActiveSlot();
  const { requestMapFocus } = useSaveContext();
  const [steam, setSteam] = useState<SteamAchievementsResult | null>(null);
  const [steamLoading, setSteamLoading] = useState(false);

  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const badges = useMemo(() => (profile ? deriveBadges(profile) : []), [profile]);
  const derived = useMemo(() => (profile ? deriveAchievements(profile) : null), [profile]);

  // 开页即读本地缓存(不发网络请求);仅点"拉取/刷新"才联网。
  // 注意必须在任何提前 return 之前调用(rules of hooks)。
  useEffect(() => {
    void window.api.steamAchievements({ forceRefresh: false }).then(setSteam);
  }, []);

  // 缺失物品的地图位置(placements 懒加载)
  const [missPins, setMissPins] = useState<ReadonlyMap<string, MasterPixel>>(new Map());
  useEffect(() => {
    if (!derived) return;
    let cancelled = false;
    void (async () => {
      const entries: [string, MasterPixel][] = [];
      for (const col of derived.collections) {
        for (const item of col.missing) {
          if (item.id === null) continue;
          const projected = await findItemPixel(item.placementType, item.id);
          if (projected) entries.push([`${item.placementType}:${item.id}`, projected]);
        }
      }
      if (!cancelled) setMissPins(new Map(entries));
    })();
    return () => {
      cancelled = true;
    };
  }, [derived]);

  if (!slot || !profile || !derived) return null;

  const earned = badges.filter((b) => b.earned);
  const bossDone = derived.bossKills.filter((b) => b.done).length;
  const bossAvailable = derived.bossKills.filter((b) => b.available);

  const loadSteam = async () => {
    setSteamLoading(true);
    try {
      setSteam(await window.api.steamAchievements({ forceRefresh: true }));
    } finally {
      setSteamLoading(false);
    }
  };

  return (
    <div className="page">
      <PageHead
        title="成就与徽章"
        sub={`趣味徽章 ${earned.length}/${badges.length} · 存档推演成就 + Steam 官方成就`}
        right={onOpenCollection ? <button className="btn small" onClick={onOpenCollection}>{'\u67e5\u770b\u6536\u85cf\u56fe\u9274'}</button> : undefined}
      />

      <div className="grid-2">
        <Card title="Boss 讨伐成就(存档推演)" hint={`${bossDone}/${bossAvailable.length}`}>
          <div style={{ maxHeight: '46vh', overflowY: 'auto' }}>
            <table className="tbl">
              <tbody>
                {derived.bossKills.map((entry) => (
                  <tr key={entry.zh}>
                    <td className={entry.done ? 'done' : 'undone'} style={{ width: 36 }}>
                      <span className="check">{entry.done ? '✓' : '—'}</span>
                    </td>
                    <td>
                      <div className={entry.done ? '' : 'undone'}>{entry.zh}</div>
                      {!entry.available && <div className="en-name">未能在数据中匹配旗标</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="传说收集成就(存档推演)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {derived.collections.map((col) => (
              <div key={col.zh}>
                <ProgressLine label={col.zh} value={col.have} total={col.total} tone={col.done ? 'gold' : 'azure'} />
                {!col.done && col.missing.length > 0 && (
                  <div className="tag-cloud" style={{ marginTop: 6 }}>
                    {col.missing.map((item) => {
                      const projected =
                        item.id !== null ? (missPins.get(`${item.placementType}:${item.id}`) ?? null) : null;
                      return (
                        <span
                          key={item.label}
                          className={`pill collection-missing ${projected ? 'has-location' : ''}`}
                        >
                          <span>缺 {item.label}</span>
                          {projected && (
                            <button
                              className="icon-button achievement-map-button"
                              type="button"
                              title="在地图上定位拾取点"
                              aria-label={`在地图上定位${item.label}`}
                              onClick={() => requestMapFocus({ ...projected, name: item.label })}
                            >
                              <MapPinIcon />
                            </button>
                          )}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div className="notice">
              结局类成就(艾尔登之王 / 星星时代 / 癫火之王)与首个大卢恩等事件成就无法从存档可靠判定,
              可在下方拉取 Steam 官方记录。
            </div>
          </div>
        </Card>
      </div>

      <CollapsibleCard title="Steam 官方成就" hint="本地常驻缓存,仅手动刷新时联网">
        {steam && !steam.ok && (
          <div className="row">
            <div className="notice" style={{ flex: 1 }}>{steam.message}</div>
            <button className="btn" onClick={loadSteam} disabled={steamLoading}>
              {steamLoading ? '正在拉取…' : '拉取 Steam 成就'}
            </button>
          </div>
        )}
        {steam?.ok && (
          <>
            <div className="row" style={{ marginBottom: 10 }}>
              <span className="pill">上次拉取:{formatDateTime(steam.fetchedAt)}</span>
              {steam.fromCache && <span className="pill ok">本地缓存</span>}
              <span className="spacer" />
              <button className="btn small" onClick={loadSteam} disabled={steamLoading}>
                {steamLoading ? '刷新中…' : '联网刷新'}
              </button>
            </div>
            <ProgressLine
              label="官方成就解锁"
              value={steam.achievements.filter((a) => a.unlocked).length}
              total={steam.achievements.length}
            />
            <div className="badge-grid" style={{ marginTop: 14 }}>
              {steam.achievements.map((a) => (
                <div key={a.id} className={`badge-card r-common ${a.unlocked ? 'earned' : 'locked'}`}>
                  {a.iconUrl && (
                    <img
                      src={a.unlocked ? a.iconUrl : (a.grayIconUrl ?? a.iconUrl)}
                      width={44}
                      height={44}
                      style={{ borderRadius: 8, flex: 'none' }}
                      alt=""
                    />
                  )}
                  <div>
                    <div className="badge-name" style={{ fontSize: 13.5 }}>
                      {a.name}
                    </div>
                    {a.description && <div className="badge-desc">{a.description}</div>}
                    {a.unlocked && a.unlockedAt && (
                      <div className="badge-detail">{new Date(a.unlockedAt * 1000).toLocaleDateString('zh-CN')} 解锁</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </CollapsibleCard>

      <CollapsibleCard title="趣味徽章墙" hint={`已获得 ${earned.length}/${badges.length}`}>
        <div className="badge-grid">
          {badges.map((badge) => (
            <div key={badge.id} className={`badge-card r-${badge.rarity} ${badge.earned ? 'earned' : 'locked'}`}>
              <div className="badge-icon">{badge.icon}</div>
              <div>
                <div className="badge-name">{badge.name}</div>
                <div className="badge-desc">{badge.desc}</div>
                {badge.detail && <div className="badge-detail">{badge.detail}</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="notice" style={{ marginTop: 14 }}>
          游戏存档不记录翻滚、弹反、挨打次数等操作行为；趣味徽章仅使用可验证的等级、进度、死亡与探索数据。
        </div>
      </CollapsibleCard>
    </div>
  );
}
