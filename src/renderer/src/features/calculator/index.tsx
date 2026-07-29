import { Fragment, useMemo, useState } from 'react';
import { Card, PageHead, Stat } from '../../components/ui.tsx';
import { ENEMY_COMBAT_DATA, SPELL_COMBAT_DATA } from '../../data/generated/combat-data.ts';
import { zhItemNameByKind } from '../../data/zh/translations.ts';
import { effectiveEnemyDefense, estimateEnemyHit } from '../../lib/build-insights.ts';
import {
  damageMultiplierLabel,
  filterCombatEnemies,
  groupSpellCombatRows,
  spellCombatDisplayName,
  weaponActionBreakdownLabel,
  weaponCombatForId,
} from '../../lib/combat-data.ts';
import { deriveProfile, weaponById } from '../../lib/derive.ts';
import { formatNumber } from '../../lib/format.ts';
import { useActiveSlot } from '../../lib/save-context.tsx';
import { DAMAGE_ZH, profileAttrs, weaponPanelAt } from '../../lib/weapon-ar.ts';

type CalculatorView = 'weapon' | 'spells';

const PLAYABLE_ENEMIES = ENEMY_COMBAT_DATA.filter((enemy) =>
  enemy.hp !== null && enemy.hp > 0 && !enemy.nameEn.startsWith('Internal:') && !/\bMelina\b/i.test(enemy.nameEn),
);
const SPELL_COMBAT_GROUPS = groupSpellCombatRows(SPELL_COMBAT_DATA);
const DEFENSE_FIELDS = [
  ['physical', '物理'], ['magic', '魔力'], ['fire', '火'], ['lightning', '雷'], ['holy', '圣'],
] as const;
const DAMAGE_TAKEN_FIELDS = [
  ['standard', '普通'], ['slash', '斩击'], ['strike', '打击'], ['thrust', '突刺'],
  ['magic', '魔力'], ['fire', '火'], ['lightning', '雷'], ['holy', '圣'],
] as const;
const STATUS_FIELDS = [
  ['poison', '毒'], ['rot', '腐败'], ['bleed', '出血'], ['frost', '冻伤'],
  ['sleep', '睡眠'], ['madness', '发狂'], ['death', '抗死度'],
] as const;
const DAMAGE_TAKEN_ZH: Readonly<Record<string, string>> = Object.fromEntries(DAMAGE_TAKEN_FIELDS);

function damageTakenLabel(value: number | null | undefined): string {
  if (value == null) return '—';
  const resistance = Math.round((1 - value) * 100);
  if (resistance > 0) return `${value.toFixed(2)}x · 减伤 ${resistance}%`;
  if (resistance < 0) return `${value.toFixed(2)}x · 弱点 ${-resistance}%`;
  return `${value.toFixed(2)}x · 无修正`;
}

function combatValue(value: number | null | undefined): string {
  return value == null ? '—' : Number(value.toFixed(3)).toString();
}

function compactSpellValues(values: readonly string[]): string {
  if (values.length === 0) return '—';
  if (values.length === 1) return values[0];
  if (values.every((value) => value === values[0])) return values[0] === '—' ? '—' : `每段 ${values[0]}`;
  return '展开查看';
}

export function CalculatorPage() {
  const slot = useActiveSlot();
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const [view, setView] = useState<CalculatorView>('weapon');
  const [selectedWeaponId, setSelectedWeaponId] = useState<number | null>(null);
  const [selectedEnemyId, setSelectedEnemyId] = useState(PLAYABLE_ENEMIES[0]?.npcParamId ?? 0);
  const [selectedAction, setSelectedAction] = useState('单手 轻击 1');
  const [enemySearch, setEnemySearch] = useState('');
  const [spellSearch, setSpellSearch] = useState('');
  const [spellType, setSpellType] = useState<'all' | 'Sorcery' | 'Incantation'>('all');
  const [expandedSpellGroups, setExpandedSpellGroups] = useState<ReadonlySet<string>>(() => new Set());

  if (!slot || !profile) return null;

  const attrs = profileAttrs(profile);
  const weapons = profile.weaponVariants
    .map(({ id, upgrade }) => {
      const panel = weaponPanelAt(attrs, id, upgrade);
      const combat = weaponCombatForId(id);
      if (!panel || !combat || Object.keys(combat.actions).length === 0) return null;
      const baseId = id - (id % 10000);
      return {
        id,
        upgrade,
        name: zhItemNameByKind('weapon', baseId) ?? weaponById.get(id)?.name ?? weaponById.get(baseId)?.name ?? `武器 ${id}`,
        panel: panel.oneHand,
        combat,
      };
    })
    .filter((row): row is NonNullable<typeof row> => row !== null)
    .sort((a, b) => b.panel.total - a.panel.total);
  const chosenWeapon = weapons.find((row) => row.id === selectedWeaponId) ?? weapons[0] ?? null;
  const chosenActionNames = Object.keys(chosenWeapon?.combat.actions ?? {});
  const chosenActionName = chosenActionNames.includes(selectedAction) ? selectedAction : chosenActionNames[0] ?? '';
  const chosenAction = chosenWeapon?.combat.actions[chosenActionName] ?? null;
  const chosenPoiseDetail = chosenAction
    ? chosenAction.pvePoiseParts.length > 1
      ? weaponActionBreakdownLabel(chosenAction.pvePoiseText)
      : weaponActionBreakdownLabel(chosenAction.physicalAttackType)
    : '';
  const filteredEnemies = filterCombatEnemies(PLAYABLE_ENEMIES, enemySearch);
  const chosenEnemy = filteredEnemies.find((enemy) => enemy.npcParamId === selectedEnemyId) ?? filteredEnemies[0] ?? null;
  const damageEstimate = chosenEnemy && chosenWeapon && chosenAction
    ? estimateEnemyHit(chosenEnemy, chosenWeapon.panel, chosenAction)
    : null;
  const visibleSpellGroups = SPELL_COMBAT_GROUPS
    .map((group) => ({ group, display: spellCombatDisplayName(group.name) }))
    .filter(({ group }) => spellType === 'all' || group.type === spellType)
    .filter(({ group, display }) => !spellSearch || `${display} ${group.name}`.toLocaleLowerCase().includes(spellSearch.toLocaleLowerCase()));

  const toggleSpellGroup = (key: string) => {
    setExpandedSpellGroups((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="page">
      <PageHead
        title="计算器"
        sub={`当前角色属性 · ${profile.name}`}
        right={<div className="calculator-tabs" role="tablist" aria-label="计算器模式">
          <button type="button" role="tab" aria-selected={view === 'weapon'} className={`btn small ${view === 'weapon' ? 'primary' : ''}`} onClick={() => setView('weapon')}>武器动作</button>
          <button type="button" role="tab" aria-selected={view === 'spells'} className={`btn small ${view === 'spells' ? 'primary' : ''}`} onClick={() => setView('spells')}>魔法 / 祷告</button>
        </div>}
      />

      {view === 'weapon' && <Card title="武器动作实战计算" hint="当前角色属性与持有武器 · v1.16 分段攻防公式">
        <div className="row calculator-enemy-search">
          <input
            className="input"
            type="search"
            aria-label="搜索敌人"
            placeholder="搜索敌人中文、英文或地区"
            value={enemySearch}
            onChange={(event) => setEnemySearch(event.target.value)}
          />
          <span className="pill">{filteredEnemies.length} / {PLAYABLE_ENEMIES.length}</span>
        </div>
        <div className="row combat-controls">
          <select className="select" aria-label="武器" value={chosenWeapon?.id ?? ''} onChange={(event) => setSelectedWeaponId(Number(event.target.value))}>
            {weapons.map((weapon) => <option key={weapon.id} value={weapon.id}>{weapon.name}{weapon.upgrade > 0 ? ` +${weapon.upgrade}` : ''}</option>)}
          </select>
          <select className="select" aria-label="武器动作" value={chosenActionName} onChange={(event) => setSelectedAction(event.target.value)}>
            {chosenActionNames.map((action) => (
              <option key={action} value={action}>{action} · 削韧 {combatValue(chosenWeapon?.combat.actions[action]?.pvePoise)}</option>
            ))}
          </select>
          <select
            className="select"
            aria-label="敌人"
            value={chosenEnemy?.npcParamId ?? ''}
            disabled={filteredEnemies.length === 0}
            onChange={(event) => setSelectedEnemyId(Number(event.target.value))}
          >
            {filteredEnemies.length === 0
              ? <option value="">没有匹配的敌人</option>
              : filteredEnemies.map((enemy, index) => <option key={`${enemy.npcParamId}-${index}`} value={enemy.npcParamId}>{enemy.name} · {enemy.region}</option>)}
          </select>
        </div>
        <div className="stat-grid combat-result-grid">
          <Stat label="选中动作总伤害" value={damageEstimate ? formatNumber(Math.round(damageEstimate.damage)) : '—'} sub="各段分别结算后合计" />
          <Stat label="击杀需动作数" value={damageEstimate?.hitsToKill ?? '—'} sub="全部段命中时" />
          <Stat label="本动作削韧" value={combatValue(damageEstimate?.poiseDamage)} sub={chosenPoiseDetail} />
          <Stat label="破韧需动作数" value={damageEstimate?.poiseHits ?? '—'} sub="全部段命中且韧性未恢复" />
          <Stat label="敌人 HP / 韧性" value={chosenEnemy ? `${formatNumber(chosenEnemy.hp ?? 0)} / ${chosenEnemy.saDurability && chosenEnemy.saDurability > 0 ? chosenEnemy.saDurability : '不可破韧'}` : '—'} />
        </div>
        {chosenEnemy && damageEstimate && <>
          <div className="combat-summary">
            <span>{chosenEnemy.name}</span>
            <span>{chosenEnemy.region}</span>
            <span className="desc">按所选动作全部段正面命中计算；部位、暴击、弱点与状态效果未计入。</span>
          </div>
          <section className="combat-data-section">
            <h4>防御值 <span>基础值 × 场景倍率</span></h4>
            <div className="combat-data-grid defense-grid">
              {DEFENSE_FIELDS.map(([key, label]) => {
                const base = chosenEnemy.defense[key];
                const scale = chosenEnemy.defenseScale[key];
                return <div className="combat-data-item" key={key}>
                  <span>{label}</span>
                  <strong>{Math.round(effectiveEnemyDefense(chosenEnemy, key))}</strong>
                  <small>{base ?? '—'} × {scale?.toFixed(3) ?? '—'}</small>
                </div>;
              })}
            </div>
          </section>
          <section className="combat-data-section">
            <h4>承伤倍率 <span>低于 1 为减伤，高于 1 为弱点</span></h4>
            <div className="combat-data-grid damage-taken-grid">
              {DAMAGE_TAKEN_FIELDS.map(([key, label]) => <div className="combat-data-item" key={key}>
                <span>{label}</span>
                <strong>{damageTakenLabel(chosenEnemy.damageTaken[key])}</strong>
              </div>)}
            </div>
          </section>
          <section className="combat-data-section">
            <h4>异常状态抗性 <span>常驻修正后；数值越高越难触发</span></h4>
            <div className="combat-data-grid status-resistance-grid">
              {STATUS_FIELDS.map(([key, label]) => <div className="combat-data-item" key={key}>
                <span>{label}</span>
                <strong className={chosenEnemy.statusImmunity[key] ? 'immune' : ''}>
                  {chosenEnemy.statusImmunity[key] ? '免疫' : chosenEnemy.statusResistance[key] ?? '—'}
                </strong>
                {!chosenEnemy.statusImmunity[key] && <small>基础 {chosenEnemy.baseStatusResistance[key] ?? '—'}</small>}
              </div>)}
            </div>
          </section>
          <details className="combat-details">
            <summary>数据详情</summary>
            <div className="combat-breakdown">
              {damageEstimate.breakdown.map((row, index) => <span key={`${row.type}-${index}`}>
                {DAMAGE_ZH[row.type] ?? row.type}第 {row.partIndex + 1} 段: {Math.round(row.attack * row.actionMultiplier)} 攻击 / {Math.round(row.defense)} 防御 × {DAMAGE_TAKEN_ZH[row.takenType] ?? row.takenType}承伤 {row.taken} = {Math.round(row.damage)}
              </span>)}
              <span>动作倍率构成: {chosenAction ? weaponActionBreakdownLabel(chosenAction.damageMultiplierText) : '—'}</span>
              <span>削韧构成: {chosenAction ? weaponActionBreakdownLabel(chosenAction.pvePoiseText) : '—'}</span>
              <span>表内周目防御倍率: {DEFENSE_FIELDS.map(([key, label]) => `${label} ${chosenEnemy.newGameDefenseScale[key] ?? '—'}x`).join(' / ')}</span>
              <span>表内周目异常倍率: {STATUS_FIELDS.map(([key, label]) => `${label} ${chosenEnemy.newGameStatusScale[key] ?? '—'}x`).join(' / ')}</span>
              <span>参数: 倍率文件(Ver.+1.16.2).xlsx · 攻防公式: 艾尔登法环 威力表v1.16.xlsm</span>
            </div>
          </details>
        </>}
      </Card>}

      {view === 'spells' && <Card title="魔法 / 祷告攻击数据" hint="攻击倍率不是最终伤害；最终伤害还取决于触媒与角色属性">
        <div className="row combat-controls">
          <input className="input" type="search" aria-label="搜索魔法或祷告" placeholder="搜索魔法或祷告" value={spellSearch} onChange={(event) => setSpellSearch(event.target.value)} />
          {([['all', '全部'], ['Sorcery', '魔法'], ['Incantation', '祷告']] as const).map(([key, label]) => (
            <button type="button" key={key} className={`btn small ${spellType === key ? 'primary' : ''}`} onClick={() => setSpellType(key)}>{label}</button>
          ))}
          <span className="pill">显示 {visibleSpellGroups.length} / {SPELL_COMBAT_GROUPS.length}</span>
        </div>
        <div className="combat-table-wrap">
          <table className="tbl">
            <thead><tr><th>法术</th><th>攻击倍率</th><th className="num">PvE 削韧</th><th className="num">PvE 削精</th></tr></thead>
            <tbody>{visibleSpellGroups.length === 0 ? <tr><td colSpan={4} className="undone">没有匹配的魔法或祷告</td></tr> : visibleSpellGroups.map(({ group, display }) => {
              const expandable = group.attacks.length > 1;
              const groupKey = `${group.type}\u0000${group.name}`;
              const open = expandable && expandedSpellGroups.has(groupKey);
              const damage = compactSpellValues(group.attacks.map((attack) => damageMultiplierLabel(attack.damageMultipliers) || '—'));
              const poise = compactSpellValues(group.attacks.map((attack) => combatValue(attack.pvePoiseDamage)));
              const stamina = compactSpellValues(group.attacks.map((attack) => combatValue(attack.pveStaminaDamage)));
              return <Fragment key={groupKey}>
                <tr className={expandable ? 'spell-group-row' : undefined}>
                  <td>
                    {expandable ? <button
                      className="spell-group-toggle"
                      type="button"
                      aria-expanded={open}
                      onClick={() => toggleSpellGroup(groupKey)}
                    >
                      <span aria-hidden="true">{open ? '▾' : '▸'}</span>
                      <strong>{display}</strong>
                      <small>{group.attacks.length} 段</small>
                    </button> : display}
                  </td>
                  <td style={{ color: 'var(--gold-dim)' }}>{damage}</td>
                  <td className="num">{poise}</td>
                  <td className="num">{stamina}</td>
                </tr>
                {open && group.attacks.map((attack, index) => <tr className="spell-hit-row" key={`${attack.atkId ?? 'none'}-${index}`}>
                  <td><span className="spell-hit-label">第 {index + 1} 段</span></td>
                  <td>{damageMultiplierLabel(attack.damageMultipliers) || '—'}</td>
                  <td className="num">{combatValue(attack.pvePoiseDamage)}</td>
                  <td className="num">{combatValue(attack.pveStaminaDamage)}</td>
                </tr>)}
              </Fragment>;
            })}</tbody>
          </table>
        </div>
      </Card>}
    </div>
  );
}
