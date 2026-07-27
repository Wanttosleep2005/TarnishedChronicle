import { useMemo, useState } from 'react';
import { Card, PageHead, Stat } from '../components/ui.tsx';
import { deriveProfile, weaponById } from '../lib/derive.ts';
import { formatCompact, formatNumber } from '../lib/format.ts';
import { useActiveSlot } from '../lib/save-context.tsx';
import { weaponPanelAt, profileAttrs, DAMAGE_ZH } from '../lib/weapon-ar.ts';
import { zhItemNameByKind } from '../data/zh/translations.ts';

// 升级所需卢恩(社区验证公式,wiki 同源):x = 当前等级 + 81
function runeCostForNext(level: number): number {
  const x = level + 81;
  return Math.max(0, Math.floor(0.02 * x ** 3 + 3.06 * x ** 2 + 105.6 * x - 895));
}

function runesBetween(from: number, to: number): number {
  let sum = 0;
  for (let l = from; l < to; l++) sum += runeCostForNext(l);
  return sum;
}

const ATTRS: { key: 'vig' | 'mnd' | 'end' | 'str' | 'dex' | 'int' | 'fai' | 'arc'; label: string }[] = [
  { key: 'vig', label: '生命力' },
  { key: 'mnd', label: '集中力' },
  { key: 'end', label: '耐力' },
  { key: 'str', label: '力气' },
  { key: 'dex', label: '灵巧' },
  { key: 'int', label: '智力' },
  { key: 'fai', label: '信仰' },
  { key: 'arc', label: '感应' },
];

type AttrState = Record<(typeof ATTRS)[number]['key'], number>;

const LARVAL_TEAR_ID = 8185;

export function BuildPage() {
  const slot = useActiveSlot();
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const [attrs, setAttrs] = useState<AttrState | null>(null);
  const [search, setSearch] = useState('');
  const [onlyViable, setOnlyViable] = useState(false);

  if (!slot || !profile) return null;

  const current: AttrState = profile.stats;
  const sim = attrs ?? current;
  const simLevel = Object.values(sim).reduce((a, b) => a + b, 0) - 79;
  const levelDiff = simLevel - profile.level;
  const runesNeeded = levelDiff > 0 ? runesBetween(profile.level, simLevel) : 0;
  const larvalTears = profile.inventory
    .filter((r) => r.kind === 'goods' && r.paramId === LARVAL_TEAR_ID)
    .reduce((n, r) => n + r.quantity, 0);

  const simArAttrs = { str: sim.str, dex: sim.dex, int: sim.int, fai: sim.fai, arc: sim.arc };
  const currentArAttrs = profileAttrs(profile);

  const ranking = profile.weaponVariants
    .map(({ id, upgrade }) => {
      const panel = weaponPanelAt(simArAttrs, id, upgrade);
      if (!panel) return null;
      const nowPanel = weaponPanelAt(currentArAttrs, id, upgrade);
      const pureBase = id - (id % 10000);
      const zh = zhItemNameByKind('weapon', pureBase) ?? weaponById.get(id)?.name ?? weaponById.get(pureBase)?.name ?? `武器 ${id}`;
      return {
        id,
        upgrade,
        name: zh,
        ar: panel.oneHand.total,
        arTwo: panel.twoHand.total,
        delta: nowPanel ? panel.oneHand.total - nowPanel.oneHand.total : 0,
        unmet: panel.unmetRequirements,
        damage: panel.oneHand.damage,
      };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)
    .filter((r) => !onlyViable || r.unmet.length === 0)
    .filter((r) => !search || r.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.ar - a.ar);

  const setAttr = (key: keyof AttrState, value: number) =>
    setAttrs({ ...sim, [key]: Math.min(99, Math.max(1, value)) });

  return (
    <div className="page">
      <PageHead
        title="洗点模拟"
        sub="拖动属性,实时重算你持有的每一把武器的面板攻击力——洗点前先在这里试"
        right={
          <div className="row">
            <button className="btn small" onClick={() => setAttrs(null)}>重置为当前属性</button>
          </div>
        }
      />

      <div className="grid-2">
        <Card title="属性配点" hint={attrs ? '模拟中(未写入存档)' : '当前属性'}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ATTRS.map(({ key, label }) => (
              <div key={key} className="row" style={{ gap: 10, flexWrap: 'nowrap' }}>
                <span style={{ width: 52, fontSize: 12.5, color: 'var(--muted)', flex: 'none' }}>{label}</span>
                <input
                  type="range"
                  min={1}
                  max={99}
                  value={sim[key]}
                  onChange={(e) => setAttr(key, Number(e.target.value))}
                  style={{ flex: 1, accentColor: '#c9a662' }}
                />
                <input
                  className="input"
                  style={{ width: 58, padding: '3px 8px', textAlign: 'center', flex: 'none' }}
                  type="number"
                  min={1}
                  max={99}
                  value={sim[key]}
                  onChange={(e) => setAttr(key, Number(e.target.value))}
                />
                <span
                  className="mono"
                  style={{
                    width: 38,
                    flex: 'none',
                    fontSize: 11.5,
                    textAlign: 'right',
                    color: sim[key] > current[key] ? 'var(--moss)' : sim[key] < current[key] ? 'var(--crimson)' : 'var(--faint)',
                  }}
                >
                  {sim[key] === current[key] ? '—' : (sim[key] > current[key] ? '+' : '') + (sim[key] - current[key])}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="配点结果">
          <div className="stat-grid">
            <Stat label="模拟等级" value={simLevel} sub={levelDiff === 0 ? '' : `(${levelDiff > 0 ? '+' : ''}${levelDiff})`} />
            <Stat label="当前等级" value={profile.level} />
            <Stat label="升级所需卢恩" value={levelDiff > 0 ? formatCompact(runesNeeded) : '—'} />
            <Stat label="持有卢恩" value={formatCompact(profile.runesHeld)} />
            <Stat label="幼生泪滴" value={larvalTears} sub="滴" />
          </div>
          <div className="notice" style={{ marginTop: 12 }}>
            {levelDiff > 0
              ? `从 ${profile.level} 级练到 ${simLevel} 级需要 ${formatNumber(runesNeeded)} 卢恩${runesNeeded > profile.runesHeld ? `,还差 ${formatCompact(runesNeeded - profile.runesHeld)}` : ',手头的卢恩已经够了'}。`
              : levelDiff < 0
                ? `模拟等级低于当前——这是"重生"方案,找蕾娜菈重生需消耗 1 滴幼生泪滴(你有 ${larvalTears} 滴)。`
                : '拖动左侧滑块,看看不同流派下哪把武器最适合你。'}
          </div>
        </Card>
      </div>

      <Card
        title="武器面板排行"
        hint={`按模拟属性实时计算 · 你共持有 ${profile.weaponVariants.length} 件武器变体`}
      >
        <div className="row" style={{ marginBottom: 10 }}>
          <button className={`btn small ${onlyViable ? 'primary' : ''}`} onClick={() => setOnlyViable(!onlyViable)}>
            只看已达标
          </button>
          <input
            className="input"
            style={{ width: 220 }}
            placeholder="搜索武器…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="spacer" />
          <span className="pill">{ranking.length} 件</span>
        </div>
        <div style={{ maxHeight: '48vh', overflowY: 'auto' }}>
          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: 40 }}>#</th>
                <th>武器</th>
                <th className="num" style={{ textAlign: 'right', width: 90 }}>单手 AR</th>
                <th className="num" style={{ textAlign: 'right', width: 90 }}>双手 AR</th>
                <th className="num" style={{ textAlign: 'right', width: 80 }}>较当前</th>
                <th style={{ width: 220 }}>伤害构成 / 需求</th>
              </tr>
            </thead>
            <tbody>
              {ranking.slice(0, 60).map((row, i) => (
                <tr key={row.id} style={row.unmet.length > 0 ? { opacity: 0.55 } : {}}>
                  <td className="num" style={{ color: 'var(--faint)' }}>{i + 1}</td>
                  <td>
                    {row.name}
                    {row.upgrade > 0 && <span style={{ color: 'var(--gold-dim)' }}> +{row.upgrade}</span>}
                  </td>
                  <td className="num" style={{ color: 'var(--gold-2)' }}>{Math.floor(row.ar)}</td>
                  <td className="num">{Math.floor(row.arTwo)}</td>
                  <td className="num" style={{ color: row.delta > 0.5 ? 'var(--moss)' : row.delta < -0.5 ? 'var(--crimson)' : 'var(--faint)' }}>
                    {row.delta > 0.5 ? `+${Math.floor(row.delta)}` : row.delta < -0.5 ? `${Math.ceil(row.delta)}` : '—'}
                  </td>
                  <td style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                    {row.unmet.length > 0 ? (
                      <span style={{ color: 'var(--crimson)' }}>需求未达标:{row.unmet.join('、')}</span>
                    ) : (
                      Object.entries(row.damage)
                        .filter(([, v]) => (v ?? 0) > 0)
                        .map(([k, v]) => `${DAMAGE_ZH[k] ?? k} ${Math.floor(v ?? 0)}`)
                        .join(' + ')
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
