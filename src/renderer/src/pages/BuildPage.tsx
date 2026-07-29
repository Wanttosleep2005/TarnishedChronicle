import { useMemo, useState } from 'react';
import { Card, PageHead, Stat } from '../components/ui.tsx';
import { deriveProfile, weaponById } from '../lib/derive.ts';
import { formatCompact, formatNumber } from '../lib/format.ts';
import { useActiveSlot } from '../lib/save-context.tsx';
import { weaponPanelAt, profileAttrs, DAMAGE_ZH } from '../lib/weapon-ar.ts';
import { ENEMY_COMBAT_DATA, SPELL_COMBAT_DATA } from '../data/generated/combat-data.ts';
import { combatTypeLabel, damageMultiplierLabel, weaponCombatForId } from '../lib/combat-data.ts';
import { SPELLS } from '../data/generated/spells.ts';
import { zhItemNameByKind } from '../data/zh/translations.ts';
import { estimateEnemyHit, inferBuildTags } from '../lib/build-insights.ts';

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

const PLAYABLE_ENEMIES = ENEMY_COMBAT_DATA.filter((enemy) =>
  enemy.hp !== null && enemy.hp > 0 && !enemy.nameEn.startsWith('Internal:') && !/\bMelina\b/i.test(enemy.nameEn),
);

export function BuildPage() {
  const slot = useActiveSlot();
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const [attrs, setAttrs] = useState<AttrState | null>(null);
  const [search, setSearch] = useState('');
  const [onlyViable, setOnlyViable] = useState(false);
  const [selectedWeaponId, setSelectedWeaponId] = useState<number | null>(null);
  const [selectedEnemyId, setSelectedEnemyId] = useState(PLAYABLE_ENEMIES[0]?.npcParamId ?? 0);
  const [selectedAction, setSelectedAction] = useState('单手 轻击 1');
  const [spellSearch, setSpellSearch] = useState('');
  const [spellType, setSpellType] = useState<'all' | 'Sorcery' | 'Incantation'>('all');

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
        combat: weaponCombatForId(id),
      };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)
    .filter((r) => !onlyViable || r.unmet.length === 0)
    .filter((r) => !search || r.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.ar - a.ar);

  const setAttr = (key: keyof AttrState, value: number) =>
    setAttrs({ ...sim, [key]: Math.min(99, Math.max(1, value)) });
  const chosenWeapon = ranking.find((row) => row.id === selectedWeaponId) ?? ranking[0] ?? null;
  const chosenEnemy = PLAYABLE_ENEMIES.find((row) => row.npcParamId === selectedEnemyId) ?? PLAYABLE_ENEMIES[0] ?? null;
  const chosenAction = chosenWeapon?.combat?.actions[selectedAction] ?? null;
  const chosenPanel = chosenWeapon ? weaponPanelAt(simArAttrs, chosenWeapon.id, chosenWeapon.upgrade) : null;
  const damageEstimate = chosenEnemy && chosenPanel && chosenAction ? estimateEnemyHit(chosenEnemy, chosenPanel.oneHand, chosenAction) : null;
  const buildTags = inferBuildTags(profile, chosenWeapon?.id ?? null);
  const visibleSpells = SPELL_COMBAT_DATA
    .filter((row) => spellType === 'all' || row.type === spellType)
    .filter((row) => !spellSearch || row.name.toLowerCase().includes(spellSearch.toLowerCase()))
    .slice(0, 240);

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

      <Card title="当前流派标签" hint="由当前属性、装备武器与战灰组合推断">
        <div className="tag-cloud">
          {buildTags.map((tag) => <span key={tag} className="pill gold">{tag}</span>)}
        </div>
      </Card>

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
                <th style={{ width: 170 }}>轻击 / 重击 / 蓄力削韧</th>
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
                  <td className="num" style={{ color: 'var(--gold-dim)', whiteSpace: 'nowrap' }}>
                    {(['单手 轻击 1', '单手 重击 1', '单手 满蓄力 重击 1'] as const)
                      .map((action) => row.combat?.actions[action]?.pvePoise ?? '—')
                      .join(' / ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="敌人破韧预估" hint="敌人 SA 与武器动作削韧均来自本地数据表">
        <div className="row combat-controls">
          <select className="select" value={chosenWeapon?.id ?? ''} onChange={(e) => setSelectedWeaponId(Number(e.target.value))}>
            {ranking.slice(0, 120).map((row) => <option key={row.id} value={row.id}>{row.name}{row.upgrade > 0 ? ` +${row.upgrade}` : ''}</option>)}
          </select>
          <select className="select" value={selectedAction} onChange={(e) => setSelectedAction(e.target.value)}>
            {['单手 轻击 1', '单手 重击 1', '单手 满蓄力 重击 1', '单手 跳 轻击', '单手 跳 重击', '双持 轻击 1', '双持 重击 1', '双持 满蓄力 重击 1'].map((action) => (
              <option key={action}>{action}</option>
            ))}
          </select>
          <select className="select" value={selectedEnemyId} onChange={(e) => setSelectedEnemyId(Number(e.target.value))}>
            {PLAYABLE_ENEMIES.map((enemy, index) => <option key={`${enemy.npcParamId}-${index}`} value={enemy.npcParamId}>{enemy.name} · {enemy.region}</option>)}
          </select>
        </div>
        <div className="stat-grid combat-result-grid" style={{ marginTop: 12 }}>
          <Stat label="单次实际伤害" value={damageEstimate ? formatNumber(Math.round(damageEstimate.damage)) : '—'} sub="防御/属性抗性后" />
          <Stat label="击杀需命中" value={damageEstimate?.hitsToKill ?? '—'} sub="不含部位修正" />
          <Stat label="预计破韧次数" value={damageEstimate?.poiseHits ?? '—'} sub={damageEstimate?.poiseDamage ? `每次 ${damageEstimate.poiseDamage}` : ''} />
          <Stat label="敌人 HP / SA" value={chosenEnemy ? `${formatCompact(chosenEnemy.hp ?? 0)} / ${chosenEnemy.saDurability ?? '—'}` : '—'} />
        </div>
        {chosenEnemy && damageEstimate && <>
          <div className="combat-summary">
            <span>{chosenEnemy.name}</span>
            <span>{chosenEnemy.region}</span>
            <span className="desc">当前估算按单手动作、正面普通命中计算；部位、暴击、弱点和状态效果未计入。</span>
          </div>
          <details className="combat-details">
            <summary>数据详情</summary>
            <div className="combat-breakdown">
              {damageEstimate.breakdown.map((row) => <span key={row.type}>{row.type}: {Math.round(row.attack)} AR - {row.defense} 防御 × {row.taken} = {Math.round(row.damage)}</span>)}
              <span>动作倍率: {chosenAction?.damageMultiplier == null ? '—' : `${(chosenAction.damageMultiplier / 100).toFixed(2)}x`}</span>
              <span>来源: 本地武器动作表 + NpcParam HP/防御/SA/承伤数据</span>
            </div>
          </details>
        </>}
      </Card>

      <Card title="魔法 / 祷告攻击数据" hint="攻击倍率不是最终伤害；最终伤害还取决于法杖/圣印与角色属性">
        <div className="row combat-controls">
          <input className="input" placeholder="搜索魔法或祷告" value={spellSearch} onChange={(e) => setSpellSearch(e.target.value)} />
          {([['all', '全部'], ['Sorcery', '魔法'], ['Incantation', '祷告']] as const).map(([key, label]) => (
            <button key={key} className={`btn small ${spellType === key ? 'primary' : ''}`} onClick={() => setSpellType(key)}>{label}</button>
          ))}
          <span className="pill">显示 {visibleSpells.length} / {SPELL_COMBAT_DATA.length}</span>
        </div>
        <div className="combat-table-wrap">
          <table className="tbl">
            <thead><tr><th>法术</th><th>类型</th><th>攻击倍率</th><th className="num">PvE 削韧</th><th className="num">PvE 削精</th><th className="num">Atk ID</th></tr></thead>
            <tbody>{visibleSpells.map((row) => {
              const spell = SPELLS.find((item) => item.name === row.name);
              const display = spell ? zhItemNameByKind('goods', spell.id) ?? row.name : row.name;
              return <tr key={`${row.name}-${row.atkId}`}>
                <td>{display}{SPELL_COMBAT_DATA.filter((item) => item.name === row.name).length > 1 ? ` · ${row.atkId}` : ''}</td>
                <td>{combatTypeLabel(row.type)}</td>
                <td style={{ color: 'var(--gold-dim)' }}>{damageMultiplierLabel(row.damageMultipliers) || '—'}</td>
                <td className="num">{row.pvePoiseDamage ?? '—'}</td>
                <td className="num">{row.pveStaminaDamage ?? '—'}</td>
                <td className="num" style={{ color: 'var(--faint)' }}>{row.atkId ?? '—'}</td>
              </tr>;
            })}</tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
