import { Card, PageHead, Stat } from '../components/ui.tsx';
import { ResourceBar, StatRadar } from '../components/ds3-widgets.tsx';
import { formatDateTime, formatPlaytime } from '../lib/format.ts';
import { DS3_STAT_ZH, SOFTCAPS, buildArchetype, formatSouls } from '../lib/ds3.ts';
import { useDs3 } from '../lib/ds3-context.tsx';

export function Ds3OverviewPage() {
  const { characters, mtimeMs, setPlannerSlot } = useDs3();
  const totalPlay = characters.reduce((n, c) => n + c.playtimeSec, 0);
  const totalSouls = characters.reduce((n, c) => n + c.totalSouls, 0);

  return (
    <div className="page">
      <PageHead
        title="不死人名册"
        sub={`存档只读解析${mtimeMs ? ` · 最后写入 ${formatDateTime(mtimeMs)}` : ''}`}
      />

      <div className="stat-grid">
        <Stat label="角色数" value={characters.length} sub="/ 10 槽位" />
        <Stat label="总游玩时长" value={formatPlaytime(totalPlay)} />
        <Stat label="生涯累计获魂" value={formatSouls(totalSouls)} />
        <Stat label="最高等级" value={characters.reduce((m, c) => Math.max(m, c.level), 0)} />
      </div>

      {characters.map((c) => (
        <Card key={c.slot}>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', minWidth: 280 }}>
              <div className="row" style={{ marginBottom: 6 }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--gold-2)' }}>{c.name}</span>
                <span className="pill gold">Lv {c.level}</span>
                {c.stats && <span className="pill">{buildArchetype(c.stats)}</span>}
                <span className="pill" style={{ color: 'var(--faint)' }}>槽位 {c.slot + 1}</span>
                {c.stats && (
                  <button className="btn small" onClick={() => setPlannerSlot(c.slot)}>
                    去规划 →
                  </button>
                )}
              </div>
              <div className="row" style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>
                <span>时长 {formatPlaytime(c.playtimeSec)}</span>
                <span>累计获魂 {formatSouls(c.totalSouls)}</span>
                {c.soulsHeld !== undefined && <span>持有 {formatSouls(c.soulsHeld)}</span>}
              </div>
              {c.hp && c.fp && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, maxWidth: 380 }}>
                  <ResourceBar label="HP" current={c.hp.current} max={c.hp.max} tone="var(--crimson)" />
                  <ResourceBar label="FP" current={c.fp.current} max={c.fp.max} tone="var(--azure)" />
                  {c.staminaMax !== undefined && (
                    <ResourceBar label="精力" current={c.staminaMax} max={c.staminaMax} tone="var(--moss)" />
                  )}
                </div>
              )}
              {c.stats && (
                <table className="tbl" style={{ marginTop: 12, maxWidth: 420 }}>
                  <tbody>
                    {DS3_STAT_ZH.map((s) => (
                      <tr key={s.key}>
                        <td style={{ width: 64 }}>{s.zh}</td>
                        <td className="num" style={{ width: 44, color: 'var(--gold-2)' }}>{c.stats![s.key]}</td>
                        <td style={{ fontSize: 10.5, color: 'var(--faint)' }}>软上限 {SOFTCAPS[s.key] ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {!c.stats && (
                <div className="notice" style={{ marginTop: 10 }}>
                  该槽位仅档案级信息(槽内数据校验未通过,可能为异常/修改过的角色数据)。
                </div>
              )}
            </div>
            {c.stats && (
              <div style={{ flex: '0 0 auto' }}>
                <StatRadar stats={c.stats} size={230} max={Math.max(60, ...DS3_STAT_ZH.map((s) => c.stats![s.key]))} />
              </div>
            )}
          </div>
        </Card>
      ))}

      {characters.length === 0 && (
        <div className="empty-hero">
          <div className="glyph">🔥</div>
          <h2>灰烬尚未苏醒</h2>
          <p>存档里没有角色。</p>
        </div>
      )}
    </div>
  );
}
