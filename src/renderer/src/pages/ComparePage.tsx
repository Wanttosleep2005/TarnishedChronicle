import { useMemo } from 'react';
import { ZH_ARCHETYPE } from '../data/zh/translations.ts';
import { Card, PageHead } from '../components/ui.tsx';
import { deriveBadges } from '../lib/badges.ts';
import { deriveProfile } from '../lib/derive.ts';
import { formatCompact } from '../lib/format.ts';
import { useSaveContext } from '../lib/save-context.tsx';

export function ComparePage() {
  const { save, slotIndex, setSlotIndex } = useSaveContext();

  const rows = useMemo(() => {
    if (!save) return [];
    return save.slots.map((slot, index) => {
      const profile = deriveProfile(slot);
      const badges = deriveBadges(profile).filter((b) => b.earned).length;
      return { index, profile, badges };
    });
  }, [save]);

  if (!save || rows.length === 0) return null;

  const best = {
    level: Math.max(...rows.map((r) => r.profile.level)),
    hours: Math.max(...rows.map((r) => r.profile.hoursPlayed)),
    bosses: Math.max(...rows.map((r) => r.profile.bossesDefeated)),
    deaths: Math.max(...rows.map((r) => r.profile.deaths)),
  };

  const hi = (cond: boolean) => (cond ? { color: 'var(--gold-2)', fontWeight: 600 } : {});

  return (
    <div className="page">
      <PageHead title="角色对比" sub={`同一份存档里的 ${rows.length} 位褪色者,并肩排开`} />

      <Card>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl">
            <thead>
              <tr>
                <th>角色</th>
                <th className="num" style={{ textAlign: 'right' }}>等级</th>
                <th className="num" style={{ textAlign: 'right' }}>时长(小时)</th>
                <th className="num" style={{ textAlign: 'right' }}>死亡</th>
                <th className="num" style={{ textAlign: 'right' }}>累计卢恩</th>
                <th className="num" style={{ textAlign: 'right' }}>Boss</th>
                <th className="num" style={{ textAlign: 'right' }}>赐福</th>
                <th className="num" style={{ textAlign: 'right' }}>大卢恩</th>
                <th className="num" style={{ textAlign: 'right' }}>徽章</th>
                <th style={{ width: 90 }}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ index, profile, badges }) => (
                <tr key={index} style={index === slotIndex ? { background: 'rgba(201,166,98,0.07)' } : {}}>
                  <td>
                    <div style={{ color: index === slotIndex ? 'var(--gold-2)' : undefined }}>
                      {profile.name}
                      {profile.dlcEntered && <span className="pill" style={{ marginLeft: 8, fontSize: 10 }}>DLC</span>}
                    </div>
                    <div className="en-name">{ZH_ARCHETYPE[profile.archetype] ?? '未知职业'}</div>
                  </td>
                  <td className="num" style={hi(profile.level === best.level)}>{profile.level}</td>
                  <td className="num" style={hi(profile.hoursPlayed === best.hours)}>{profile.hoursPlayed.toFixed(1)}</td>
                  <td className="num" style={hi(profile.deaths === best.deaths)}>{profile.deaths.toLocaleString('zh-CN')}</td>
                  <td className="num">{formatCompact(profile.runesMemory)}</td>
                  <td className="num" style={hi(profile.bossesDefeated === best.bosses)}>
                    {profile.bossesDefeated}/{profile.bossTotal}
                  </td>
                  <td className="num">{profile.gracesLit}/{profile.graceTotal}</td>
                  <td className="num">{profile.greatRunes.filter((r) => r.owned).length}/7</td>
                  <td className="num">{badges}</td>
                  <td>
                    {index !== slotIndex && (
                      <button className="btn small" onClick={() => setSlotIndex(index)}>
                        切换
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="notice" style={{ marginTop: 12 }}>
          金色数字为该列最高值。死亡最多不一定是坏事——那往往是打得最狠的一位。
        </div>
      </Card>
    </div>
  );
}
