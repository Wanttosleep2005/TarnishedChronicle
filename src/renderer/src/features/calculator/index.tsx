import { Fragment, useMemo, useState } from 'react';
import { Card, PageHead, Stat } from '../../components/ui.tsx';
import { ENEMY_COMBAT_DATA, SPELL_COMBAT_DATA } from '../../data/generated/combat-data.ts';
import {
  SKILL_ATTACKS,
  SKILL_BUFFS,
  SKILL_WEAPONS,
  type SkillBuff,
} from '../../data/generated/weapon-skill-data.ts';
import {
  SPELL_CALCULATOR_ATTACKS,
  SPELL_CALCULATOR_BUFFS,
  type SpellCalculatorAttack,
  type SpellCalculatorBuff,
} from '../../data/generated/spell-calculator-data.ts';
import { WEAPONS, type Weapon } from '../../data/generated/weapons.ts';
import { zhItemNameByKind } from '../../data/zh/translations.ts';
import {
  effectiveEnemyDefense,
  effectiveEnemyHp,
  effectiveEnemyStatusResistance,
  estimateEnemyHit,
  newGameLabel,
} from '../../lib/build-insights.ts';
import {
  damageMultiplierLabel,
  filterCombatEnemies,
  groupSpellCombatRows,
  spellCombatDisplayName,
  weaponActionBreakdownLabel,
  weaponCombatForId,
} from '../../lib/combat-data.ts';
import { deriveProfile } from '../../lib/derive.ts';
import { equippedSpellBuffIds, equipmentSpellModifiers } from '../../lib/equipment-effects.ts';
import { formatNumber } from '../../lib/format.ts';
import { fuzzyMatch } from '../../lib/fuzzy-search.ts';
import { useActiveSlot } from '../../lib/save-context.tsx';
import {
  catalystKey,
  catalystMaxUpgrade,
  estimateSpellAttack,
  spellCatalystsFor,
} from '../../lib/spell-calculator.ts';
import {
  attacksForSkill,
  availableSkillsForWeapon,
  estimateSkillAttack,
} from '../../lib/weapon-skill.ts';
import {
  DAMAGE_ZH,
  profileAttrs,
  STANDARD_AFFINITY,
  weaponAffinityLabel,
  weaponPanelAt,
} from '../../lib/weapon-ar.ts';

type CalculatorView = 'weapon' | 'skills' | 'spells';
type WeaponScope = 'owned' | 'all';
type WeaponHand = 'oneHand' | 'twoHand';

interface CalculatorWeapon {
  readonly id: number;
  readonly baseId: number;
  readonly name: string;
  readonly en: string;
  readonly category: string;
  readonly owned: boolean;
  readonly defaultUpgrade: number;
  readonly maxUpgrade: number;
  readonly weapon: Weapon;
  readonly combat: NonNullable<ReturnType<typeof weaponCombatForId>>;
}

const PLAYABLE_ENEMIES = ENEMY_COMBAT_DATA.filter((enemy) =>
  enemy.hp !== null && enemy.hp > 0 && !enemy.nameEn.startsWith('Internal:') && !/\bMelina\b/i.test(enemy.nameEn),
);
const SPELL_COMBAT_GROUPS = groupSpellCombatRows(SPELL_COMBAT_DATA);
const SPELL_CALCULATOR_ATTACK_BY_ID = new Map<number, SpellCalculatorAttack>(
  SPELL_CALCULATOR_ATTACKS.map((attack) => [attack.atkId, attack]),
);
const SPELL_CALCULATOR_BUFF_BY_ID = new Map<string, SpellCalculatorBuff>(
  SPELL_CALCULATOR_BUFFS.map((buff) => [buff.id, buff]),
);
const SKILL_BUFF_BY_ID = new Map<string, SkillBuff>(SKILL_BUFFS.map((buff) => [buff.id, buff]));
const SKILL_WEAPON_BY_ID = new Map(SKILL_WEAPONS.map((weapon) => [weapon.id, weapon]));
const SPELL_BONUS_SLOT_CATEGORIES = ['减防debuff', '装备buff', '立誓类buff', '身体类buff', '副手类buff'] as const;
const SKILL_BONUS_SLOT_CATEGORIES = ['减防debuff', '装备buff', '立誓类buff', '身体类buff', '副手类buff'] as const;
const EXCLUDED_WEAPON_CATEGORIES = new Set(['Arrow', 'Greatarrow', 'Bolt', 'Greatbolt']);
const NEW_GAME_CYCLES = Array.from({ length: 8 }, (_, cycle) => cycle);
const DAMAGE_TYPE_TO_CONDITION: Readonly<Record<string, string>> = {
  physical: '物',
  magic: '魔',
  fire: '火',
  lightning: '雷',
  holy: '圣',
};
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

function spellBuffEffectsFor(
  buff: SpellCalculatorBuff,
  attack: SpellCalculatorAttack | null,
  damageType: string,
): readonly { multiplier: number; condition: string }[] {
  const tags = attack?.tags ?? [];
  const element = DAMAGE_TYPE_TO_CONDITION[damageType];
  return buff.effects.filter(({ condition }) => condition === '全' || condition === element || tags.includes(condition));
}

function bonusPercent(multiplier: number): string {
  return `${Math.round((multiplier - 1) * 1000) / 10}%`;
}

function calculatorWeaponName(weapon: Weapon, base: Weapon): string {
  const baseName = zhItemNameByKind('weapon', base.id) ?? base.name;
  const affinity = weaponAffinityLabel(weapon, base);
  return affinity === STANDARD_AFFINITY ? baseName : `${affinity}·${baseName}`;
}

export function CalculatorPage() {
  const slot = useActiveSlot();
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const [view, setView] = useState<CalculatorView>('weapon');
  const [selectedWeaponId, setSelectedWeaponId] = useState<number | null>(null);
  const [weaponScope, setWeaponScope] = useState<WeaponScope>('owned');
  const [weaponSearch, setWeaponSearch] = useState('');
  const [weaponUpgrade, setWeaponUpgrade] = useState<number | null>(null);
  const [weaponHand, setWeaponHand] = useState<WeaponHand>('oneHand');
  const [newGameCycle, setNewGameCycle] = useState(0);
  const [selectedEnemyId, setSelectedEnemyId] = useState(PLAYABLE_ENEMIES[0]?.npcParamId ?? 0);
  const [selectedAction, setSelectedAction] = useState('单手 轻击 1');
  const [selectedSkillName, setSelectedSkillName] = useState('');
  const [selectedSkillBuffIds, setSelectedSkillBuffIds] = useState<readonly string[]>([]);
  const [enemySearch, setEnemySearch] = useState('');
  const [spellSearch, setSpellSearch] = useState('');
  const [spellType, setSpellType] = useState<'all' | 'Sorcery' | 'Incantation'>('all');
  const [expandedSpellGroups, setExpandedSpellGroups] = useState<ReadonlySet<string>>(() => new Set());
  const [selectedSpellAtkId, setSelectedSpellAtkId] = useState<number | null>(null);
  const [selectedSpellBuffIds, setSelectedSpellBuffIds] = useState<readonly string[]>([]);
  const [spellCatalystKey, setSpellCatalystKey] = useState('');
  const [spellUpgrade, setSpellUpgrade] = useState<number | null>(null);
  const [spellScaduLevel, setSpellScaduLevel] = useState(0);

  if (!slot || !profile) return null;

  const attrs = profileAttrs(profile);
  const ownedUpgradeById = new Map(profile.weaponVariants.map(({ id, upgrade }) => [id, upgrade]));
  const baseWeaponById = new Map<number, Weapon>();
  for (const weapon of WEAPONS) {
    const baseId = weapon.id - (weapon.id % 10000);
    if (weapon.id === baseId) baseWeaponById.set(baseId, weapon);
  }
  const weaponCatalog = WEAPONS.flatMap((weapon): CalculatorWeapon[] => {
    if (weapon.id <= 0 || weapon.id === 110_000 || weapon.name === 'DLC dummy' || EXCLUDED_WEAPON_CATEGORIES.has(weapon.category)) return [];
    const baseId = weapon.id - (weapon.id % 10000);
    const base = baseWeaponById.get(baseId) ?? weapon;
    const combat = weaponCombatForId(weapon.id);
    if (!combat || Object.keys(combat.actions).length === 0 || !weaponPanelAt(attrs, weapon.id, 0)) return [];
    return [{
      id: weapon.id,
      baseId,
      name: calculatorWeaponName(weapon, base),
      en: weapon.name,
      category: weapon.category,
      owned: ownedUpgradeById.has(weapon.id),
      defaultUpgrade: ownedUpgradeById.get(weapon.id) ?? weapon.upgradeCosts.length,
      maxUpgrade: weapon.upgradeCosts.length,
      weapon,
      combat,
    }];
  });
  const weapons = weaponCatalog
    .filter((weapon) => weaponScope === 'all' || weapon.owned)
    .filter((weapon) => !weaponSearch.trim() || fuzzyMatch(weaponSearch, weapon.name, weapon.en, weapon.category))
    .sort((a, b) => Number(b.owned) - Number(a.owned) || a.name.localeCompare(b.name, 'zh-CN'));
  const chosenCatalogWeapon = weapons.find((weapon) => weapon.id === selectedWeaponId) ?? weapons[0] ?? null;
  const chosenUpgrade = chosenCatalogWeapon ? Math.max(0, Math.min(chosenCatalogWeapon.maxUpgrade, weaponUpgrade ?? chosenCatalogWeapon.defaultUpgrade)) : 0;
  const chosenPanel = chosenCatalogWeapon ? weaponPanelAt(attrs, chosenCatalogWeapon.id, chosenUpgrade) : null;
  const chosenWeapon = chosenCatalogWeapon && chosenPanel ? {
    ...chosenCatalogWeapon,
    upgrade: chosenUpgrade,
    panel: chosenPanel[weaponHand],
  } : null;
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
  const effectiveEnemyHpValue = chosenEnemy ? effectiveEnemyHp(chosenEnemy, newGameCycle) : null;
  const damageEstimate = chosenEnemy && chosenWeapon && chosenAction
    ? estimateEnemyHit(chosenEnemy, chosenWeapon.panel, chosenAction, newGameCycle)
    : null;
  const chosenSkillWeapon = chosenWeapon ? SKILL_WEAPON_BY_ID.get(chosenWeapon.baseId) ?? null : null;
  const availableSkills = chosenSkillWeapon ? availableSkillsForWeapon(chosenSkillWeapon) : [];
  const chosenSkill = availableSkills.find((skill) => skill.name === selectedSkillName) ?? availableSkills[0] ?? null;
  const chosenSkillAttacks = chosenSkill && chosenSkillWeapon ? attacksForSkill(chosenSkill.name, chosenSkillWeapon) : [];
  const selectedSkillBuffs = selectedSkillBuffIds
    .map((id) => SKILL_BUFF_BY_ID.get(id))
    .filter((buff): buff is SkillBuff => Boolean(buff));
  const selectedSkillBuffByCategory = new Map(
    selectedSkillBuffs.filter((buff) => buff.category !== '通用buff').map((buff) => [buff.category, buff]),
  );
  const skillEstimates = chosenEnemy && chosenWeapon && chosenSkillWeapon
    ? chosenSkillAttacks.map((attack) => estimateSkillAttack(
      attrs,
      chosenWeapon.id,
      chosenWeapon.upgrade,
      chosenWeapon.panel,
      chosenSkillWeapon,
      attack,
      chosenEnemy,
      selectedSkillBuffs,
      weaponHand === 'twoHand',
      newGameCycle,
    ))
    : [];
  const visibleSpellGroups = SPELL_COMBAT_GROUPS
    .map((group) => ({ group, display: spellCombatDisplayName(group.name) }))
    .filter(({ group }) => spellType === 'all' || group.type === spellType)
    .filter(({ group, display }) => !spellSearch.trim() || fuzzyMatch(spellSearch, display, group.name));
  const selectedSpellAttack = selectedSpellAtkId == null
    ? null
    : SPELL_COMBAT_DATA.find((attack) => attack.atkId === selectedSpellAtkId) ?? null;
  const selectedSpellCalculatorAttack = selectedSpellAttack?.atkId == null
    ? null
    : SPELL_CALCULATOR_ATTACK_BY_ID.get(selectedSpellAttack.atkId) ?? null;
  const selectedSpellBuffs = selectedSpellBuffIds
    .map((id) => SPELL_CALCULATOR_BUFF_BY_ID.get(id))
    .filter((buff): buff is SpellCalculatorBuff => Boolean(buff));
  const selectedSpellBuffByCategory = new Map(
    selectedSpellBuffs
      .filter((buff) => buff.category !== '通用buff')
      .map((buff) => [buff.category, buff]),
  );
  const selectedSpellElements = Object.entries(selectedSpellAttack?.damageMultipliers ?? {})
    .filter(([, multiplier]) => multiplier !== 0)
    .map(([type, multiplier]) => {
      const applied = selectedSpellBuffs.flatMap((buff) => spellBuffEffectsFor(buff, selectedSpellCalculatorAttack, type)
        .map((effect) => ({ buff, ...effect })));
      const bonusMultiplier = applied.reduce((total, effect) => total * effect.multiplier, 1);
      return { type, multiplier, applied, bonusMultiplier, effectiveMultiplier: multiplier * bonusMultiplier };
    });
  const spellEquipMods = equipmentSpellModifiers(profile);
  const spellCatalysts = spellCatalystsFor(selectedSpellCalculatorAttack);
  const chosenSpellCatalystKey = spellCatalysts.some((catalyst) => catalystKey(catalyst) === spellCatalystKey)
    ? spellCatalystKey
    : spellCatalysts[0] ? catalystKey(spellCatalysts[0]) : '';
  const chosenSpellCatalyst = spellCatalysts.find((catalyst) => catalystKey(catalyst) === chosenSpellCatalystKey) ?? null;
  const ownedSpellUpgrade = chosenSpellCatalyst
    ? profile.weaponVariants.find((variant) => variant.id === chosenSpellCatalyst.itemId)?.upgrade
    : null;
  const chosenSpellUpgrade = chosenSpellCatalyst
    ? Math.max(0, Math.min(catalystMaxUpgrade(chosenSpellCatalyst), spellUpgrade ?? ownedSpellUpgrade ?? catalystMaxUpgrade(chosenSpellCatalyst)))
    : 0;
  const spellEstimate = selectedSpellCalculatorAttack && chosenEnemy && chosenSpellCatalyst
    ? estimateSpellAttack(
      spellEquipMods.attrs,
      selectedSpellCalculatorAttack,
      chosenSpellCatalyst,
      chosenSpellUpgrade,
      chosenEnemy,
      selectedSpellBuffs,
      {
        newGameCycle,
        scaduLevel: spellScaduLevel,
        focusCostMultiplier: spellEquipMods.focusCost,
        damageMultipliers: spellEquipMods.damageMultipliers,
      },
    )
    : null;
  const equipmentNames = new Set([
    ...profile.equipment.talismans,
    ...profile.equipment.armor,
  ].map((item) => item.display.replace(/ \+\d+$/, '')));
  const offhandNames = new Set(profile.equipment.armaments
    .filter((item) => item.slotLabel.startsWith('左手'))
    .map((item) => item.display.replace(/ \+\d+$/, '')));
  const equippedSpellBonusIds = equippedSpellBuffIds(profile);
  const equippedSkillBonusIds = SKILL_BUFFS
    .filter((buff) => {
      const names = buff.name.replace('（副手）', '').split('/');
      const source = buff.category === '副手类buff' ? offhandNames : equipmentNames;
      return names.some((name) => source.has(name));
    })
    .map((buff) => buff.id);

  const selectSpellBuff = (buffId: string) => {
    const buff = SPELL_CALCULATOR_BUFF_BY_ID.get(buffId);
    if (!buff) return;
    setSelectedSpellBuffIds((current) => {
      if (current.includes(buffId)) return current;
      if (buff.category === '通用buff') return [...current, buffId];
      return [...current.filter((id) => SPELL_CALCULATOR_BUFF_BY_ID.get(id)?.category !== buff.category), buffId];
    });
  };

  const removeSpellBuff = (buffId: string) => {
    setSelectedSpellBuffIds((current) => current.filter((id) => id !== buffId));
  };

  const addEquippedSpellBonuses = () => {
    for (const buffId of equippedSpellBonusIds) selectSpellBuff(buffId);
  };

  const selectSkillBuff = (buffId: string) => {
    const buff = SKILL_BUFF_BY_ID.get(buffId);
    if (!buff) return;
    setSelectedSkillBuffIds((current) => {
      if (current.includes(buffId)) return current;
      if (buff.category === '通用buff') return [...current, buffId];
      return [...current.filter((id) => SKILL_BUFF_BY_ID.get(id)?.category !== buff.category), buffId];
    });
  };

  const removeSkillBuff = (buffId: string) => {
    setSelectedSkillBuffIds((current) => current.filter((id) => id !== buffId));
  };

  const addEquippedSkillBonuses = () => {
    for (const buffId of equippedSkillBonusIds) selectSkillBuff(buffId);
  };

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
          <button type="button" role="tab" aria-selected={view === 'skills'} className={`btn small ${view === 'skills' ? 'primary' : ''}`} onClick={() => setView('skills')}>战技</button>
          <button type="button" role="tab" aria-selected={view === 'spells'} className={`btn small ${view === 'spells' ? 'primary' : ''}`} onClick={() => setView('spells')}>魔法 / 祷告</button>
        </div>}
      />

      {view === 'weapon' && <Card title="武器动作实战计算" hint="完整武器与质变目录 · v1.16 分段攻防公式">
        <div className="row calculator-catalog-tools">
          <input
            className="input"
            type="search"
            aria-label="搜索武器"
            placeholder="搜索武器、质变或类别"
            value={weaponSearch}
            onChange={(event) => setWeaponSearch(event.target.value)}
          />
          <div className="calculator-segmented" role="group" aria-label="武器范围">
            <button type="button" className={`btn small ${weaponScope === 'owned' ? 'primary' : ''}`} onClick={() => setWeaponScope('owned')}>已持有</button>
            <button type="button" className={`btn small ${weaponScope === 'all' ? 'primary' : ''}`} onClick={() => setWeaponScope('all')}>全部武器</button>
          </div>
          <span className="pill">{weapons.length} / {weaponCatalog.length}</span>
        </div>
        <div className="row calculator-enemy-search">
          <input
            className="input"
            type="search"
            aria-label="搜索敌人"
            placeholder="搜索敌人中文、英文、变体或地区"
            value={enemySearch}
            onChange={(event) => setEnemySearch(event.target.value)}
          />
          <span className="pill">{filteredEnemies.length} / {PLAYABLE_ENEMIES.length}</span>
        </div>
        <div className="row combat-controls">
          <select className="select" aria-label="武器" value={chosenWeapon?.id ?? ''} onChange={(event) => { setSelectedWeaponId(Number(event.target.value)); setWeaponUpgrade(null); }}>
            {weapons.length === 0
              ? <option value="">没有匹配的武器</option>
              : weapons.map((weapon) => <option key={weapon.id} value={weapon.id}>{weapon.name}{weapon.owned ? ` · 已持有 +${weapon.defaultUpgrade}` : ''}</option>)}
          </select>
          <label className="calculator-upgrade"><span>强化</span><input
            className="input"
            type="number"
            min={0}
            max={chosenCatalogWeapon?.maxUpgrade ?? 0}
            value={chosenUpgrade}
            disabled={!chosenWeapon}
            onChange={(event) => setWeaponUpgrade(Number(event.target.value))}
          /></label>
          <div className="calculator-segmented" role="group" aria-label="持握方式">
            <button type="button" className={`btn small ${weaponHand === 'oneHand' ? 'primary' : ''}`} onClick={() => setWeaponHand('oneHand')}>单持</button>
            <button type="button" className={`btn small ${weaponHand === 'twoHand' ? 'primary' : ''}`} onClick={() => setWeaponHand('twoHand')}>双持</button>
          </div>
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
              : filteredEnemies.map((enemy, index) => <option key={`${enemy.npcParamId}-${index}`} value={enemy.npcParamId}>{enemy.nameVariant || enemy.name} · {enemy.region}</option>)}
          </select>
          <label className="calculator-upgrade calculator-cycle"><span>周目</span><select className="select" aria-label="模拟周目" value={newGameCycle} onChange={(event) => setNewGameCycle(Number(event.target.value))}>
            {NEW_GAME_CYCLES.map((cycle) => <option key={cycle} value={cycle}>{newGameLabel(cycle)}</option>)}
          </select></label>
        </div>
        <div className="stat-grid combat-result-grid">
          <Stat label="选中动作总伤害" value={damageEstimate ? formatNumber(Math.round(damageEstimate.damage)) : '—'} sub="各段分别结算后合计" />
          <Stat label="击杀需动作数" value={damageEstimate?.hitsToKill ?? '—'} sub="全部段命中时" />
          <Stat label="本动作削韧" value={combatValue(damageEstimate?.poiseDamage)} sub={chosenPoiseDetail} />
          <Stat label="破韧需动作数" value={damageEstimate?.poiseHits ?? '—'} sub="全部段命中且韧性未恢复" />
          <Stat label="敌人 HP / 韧性" value={chosenEnemy ? `${formatNumber(effectiveEnemyHpValue ?? 0)} / ${chosenEnemy.saDurability && chosenEnemy.saDurability > 0 ? chosenEnemy.saDurability : '不可破韧'}` : '—'} sub={newGameLabel(newGameCycle)} />
        </div>
        {chosenWeapon && <div className="combat-summary calculator-weapon-summary">
          <span>{chosenWeapon.name} +{chosenWeapon.upgrade}</span>
          <span>{weaponHand === 'oneHand' ? '单持' : '双持'}面板 {Math.round(chosenWeapon.panel.total)}</span>
          <span className="desc">{chosenWeapon.owned ? '当前角色持有' : '完整目录模拟'} · {chosenWeapon.category}</span>
        </div>}
          {chosenEnemy && damageEstimate && <>
          <div className="combat-summary">
            <span>{chosenEnemy.nameVariant || chosenEnemy.name}</span>
            <span>{chosenEnemy.region}</span>
            <span>{newGameLabel(newGameCycle)}</span>
            <span className="desc">按所选动作全部段正面命中计算；部位、暴击、弱点与状态效果未计入。</span>
          </div>
          <section className="combat-data-section">
            <h4>防御值 <span>基础值 × 场景倍率 × {newGameLabel(newGameCycle)}修正</span></h4>
            <div className="combat-data-grid defense-grid">
              {DEFENSE_FIELDS.map(([key, label]) => {
                const base = chosenEnemy.defense[key];
                const scale = chosenEnemy.defenseScale[key];
                return <div className="combat-data-item" key={key}>
                  <span>{label}</span>
                  <strong>{Math.round(effectiveEnemyDefense(chosenEnemy, key, newGameCycle))}</strong>
                  <small>{base ?? '—'} × {scale?.toFixed(3) ?? '—'}{newGameCycle > 0 ? ` × ${chosenEnemy.newGameDefenseScale[key] ?? '—'}` : ''}</small>
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
            <h4>异常状态抗性 <span>{newGameLabel(newGameCycle)}修正后；数值越高越难触发</span></h4>
            <div className="combat-data-grid status-resistance-grid">
              {STATUS_FIELDS.map(([key, label]) => <div className="combat-data-item" key={key}>
                <span>{label}</span>
                <strong className={chosenEnemy.statusImmunity[key] ? 'immune' : ''}>
                  {chosenEnemy.statusImmunity[key] ? '免疫' : effectiveEnemyStatusResistance(chosenEnemy, key, newGameCycle)?.toFixed(0) ?? '—'}
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

      {view === 'skills' && <Card title="战技实战计算" hint={`战技表 v1.16 · ${SKILL_ATTACKS.length} 条攻击参数`}>
        <div className="row calculator-catalog-tools">
          <input className="input" type="search" aria-label="搜索战技武器" placeholder="搜索武器、质变或类别" value={weaponSearch} onChange={(event) => setWeaponSearch(event.target.value)} />
          <div className="calculator-segmented" role="group" aria-label="战技武器范围">
            <button type="button" className={`btn small ${weaponScope === 'owned' ? 'primary' : ''}`} onClick={() => setWeaponScope('owned')}>已持有</button>
            <button type="button" className={`btn small ${weaponScope === 'all' ? 'primary' : ''}`} onClick={() => setWeaponScope('all')}>全部武器</button>
          </div>
          <input className="input" type="search" aria-label="搜索战技敌人" placeholder="搜索敌人中文、英文或地区" value={enemySearch} onChange={(event) => setEnemySearch(event.target.value)} />
        </div>
        <div className="row combat-controls skill-calculator-controls">
          <select className="select" aria-label="战技武器" value={chosenWeapon?.id ?? ''} onChange={(event) => { setSelectedWeaponId(Number(event.target.value)); setWeaponUpgrade(null); setSelectedSkillName(''); }}>
            {weapons.length === 0
              ? <option value="">没有匹配的武器</option>
              : weapons.map((weapon) => <option key={weapon.id} value={weapon.id}>{weapon.name}{weapon.owned ? ` · 已持有 +${weapon.defaultUpgrade}` : ''}</option>)}
          </select>
          <label className="calculator-upgrade"><span>强化</span><input className="input" type="number" min={0} max={chosenCatalogWeapon?.maxUpgrade ?? 0} value={chosenUpgrade} disabled={!chosenWeapon} onChange={(event) => setWeaponUpgrade(Number(event.target.value))} /></label>
          <div className="calculator-segmented" role="group" aria-label="战技持握方式">
            <button type="button" className={`btn small ${weaponHand === 'oneHand' ? 'primary' : ''}`} onClick={() => setWeaponHand('oneHand')}>单持</button>
            <button type="button" className={`btn small ${weaponHand === 'twoHand' ? 'primary' : ''}`} onClick={() => setWeaponHand('twoHand')}>双持</button>
          </div>
          <select className="select" aria-label="战技" value={chosenSkill?.name ?? ''} disabled={availableSkills.length === 0} onChange={(event) => setSelectedSkillName(event.target.value)}>
            {availableSkills.length === 0
              ? <option value="">该武器没有可计算战技</option>
              : availableSkills.map((skill) => <option key={skill.name} value={skill.name}>{skill.name} · {skill.affinity}</option>)}
          </select>
          <select className="select" aria-label="战技敌人" value={chosenEnemy?.npcParamId ?? ''} disabled={filteredEnemies.length === 0} onChange={(event) => setSelectedEnemyId(Number(event.target.value))}>
            {filteredEnemies.length === 0
              ? <option value="">没有匹配的敌人</option>
              : filteredEnemies.map((enemy, index) => <option key={`${enemy.npcParamId}-${index}`} value={enemy.npcParamId}>{enemy.nameVariant || enemy.name} · {enemy.region}</option>)}
          </select>
          <label className="calculator-upgrade calculator-cycle"><span>周目</span><select className="select" aria-label="战技模拟周目" value={newGameCycle} onChange={(event) => setNewGameCycle(Number(event.target.value))}>
            {NEW_GAME_CYCLES.map((cycle) => <option key={cycle} value={cycle}>{newGameLabel(cycle)}</option>)}
          </select></label>
        </div>
        <div className="stat-grid skill-result-grid">
          <Stat label="当前战技" value={chosenSkill?.name ?? '—'} sub={chosenSkillWeapon ? `${chosenSkillWeapon.name} · ${chosenSkillWeapon.category}` : '没有表内武器映射'} />
          <Stat label="攻击段 / 变体" value={skillEstimates.length} sub="每行独立结算，不自动假定连段" />
          <Stat label="最高单段伤害" value={skillEstimates.length > 0 ? formatNumber(Math.round(Math.max(...skillEstimates.map((row) => row.damage)))) : '—'} sub="当前敌人与增益配置" />
          <Stat label="敌人 HP / 韧性" value={chosenEnemy ? `${formatNumber(effectiveEnemyHpValue ?? 0)} / ${chosenEnemy.saDurability && chosenEnemy.saDurability > 0 ? chosenEnemy.saDurability : '不可破韧'}` : '—'} sub={newGameLabel(newGameCycle)} />
        </div>
        <section className="spell-bonus-config skill-bonus-config" aria-label="战技增益配置">
          <div className="spell-bonus-heading">
            <div><span>增益配置</span><strong>{selectedSkillBuffs.length > 0 ? `已启用 ${selectedSkillBuffs.length} 项` : '未选择增益'}</strong></div>
            <button type="button" className="btn small" disabled={equippedSkillBonusIds.length === 0} onClick={addEquippedSkillBonuses}>载入已装备加成 {equippedSkillBonusIds.length > 0 ? `(${equippedSkillBonusIds.length})` : ''}</button>
          </div>
          <div className="spell-bonus-selects">
            {SKILL_BONUS_SLOT_CATEGORIES.map((category) => {
              const active = selectedSkillBuffByCategory.get(category);
              const options = SKILL_BUFFS.filter((buff) => buff.category === category);
              return <label key={category}><span>{category.replace('buff', '')}</span><select
                className="select"
                aria-label={`战技${category}`}
                value={active?.id ?? ''}
                onChange={(event) => event.target.value ? selectSkillBuff(event.target.value) : active && removeSkillBuff(active.id)}
              ><option value="">不使用</option>{options.map((buff) => <option key={buff.id} value={buff.id}>{buff.name}</option>)}</select></label>;
            })}
            <label><span>通用加成</span><select className="select" aria-label="战技通用加成" value="" onChange={(event) => selectSkillBuff(event.target.value)}>
              <option value="">添加可叠加效果</option>
              {SKILL_BUFFS.filter((buff) => buff.category === '通用buff' && !selectedSkillBuffIds.includes(buff.id)).map((buff) => <option key={buff.id} value={buff.id}>{buff.name}</option>)}
            </select></label>
          </div>
          <div className="spell-bonus-active" aria-live="polite">
            {selectedSkillBuffs.length === 0 ? <span>未选择增益</span> : selectedSkillBuffs.map((buff) => <button key={buff.id} type="button" className="spell-bonus-chip" title={buff.note || undefined} onClick={() => removeSkillBuff(buff.id)}>
              {buff.name} <small>{buff.targets.join('/')} {bonusPercent(buff.multiplier)}{buff.restriction ? ` · 限 ${buff.restriction}` : ''}</small>
            </button>)}
          </div>
        </section>
        <div className="combat-table-wrap skill-result-table-wrap">
          <table className="tbl skill-result-table">
            <thead><tr><th>攻击段</th><th>攻击力构成</th><th className="num">实战伤害</th><th className="num">削韧</th><th>异常 / 累积</th><th>标签</th></tr></thead>
            <tbody>{skillEstimates.length === 0 ? <tr><td colSpan={6} className="undone">所选武器或战技没有可计算的伤害参数</td></tr> : skillEstimates.map((estimate) => <tr key={estimate.attack.id}>
              <td><strong>{estimate.attack.note || chosenSkill?.name}</strong><small className="skill-atk-id">Atk {estimate.attack.id} · {estimate.attack.valueDescription || estimate.attack.kind}</small></td>
              <td>{estimate.parts.map((part) => `${DAMAGE_ZH[part.type] ?? part.type} ${Math.round(part.attack)}`).join(' + ') || '—'}</td>
              <td className="num"><strong>{formatNumber(Math.round(estimate.damage))}</strong><small className="skill-atk-id">击杀约 {estimate.hitsToKill ?? '—'} 次</small></td>
              <td className="num">{combatValue(estimate.poiseDamage)}<small className="skill-atk-id">破韧约 {estimate.poiseHits ?? '—'} 次</small></td>
              <td>{estimate.status || '无'}{estimate.attack.buildup ? <small className="skill-atk-id">累积值 {estimate.attack.buildup}</small> : null}</td>
              <td>{[estimate.physicalType, ...estimate.attack.specialTypes].filter(Boolean).join(' / ')}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <details className="combat-details">
          <summary>计算说明</summary>
          <div className="combat-breakdown">
            <span>攻击力：武器面板 × 动作倍率 + 战技基础威力（强化与属性补正）+ 表内强制附魔。</span>
            <span>伤害：每种属性分别经过敌人防御曲线和承伤倍率，再应用符合元素与限定标签的增益。</span>
            <span>削韧：武器基础削韧 × 战技削韧倍率 + 战技固定削韧；各攻击段独立显示。</span>
            <span>参数：艾尔登法环 战技计算器v1.16.xlsx · 武器字段交叉核对：艾尔登法环 武器模拟器v1.16.xlsx。</span>
          </div>
        </details>
      </Card>}

      {view === 'spells' && <Card title="魔法 / 祷告攻击数据" hint="攻击倍率不是最终伤害；最终伤害还取决于触媒与角色属性">
        <div className="row combat-controls">
          <input className="input" type="search" aria-label="搜索魔法或祷告" placeholder="搜索魔法或祷告" value={spellSearch} onChange={(event) => setSpellSearch(event.target.value)} />
          {([['all', '全部'], ['Sorcery', '魔法'], ['Incantation', '祷告']] as const).map(([key, label]) => (
            <button type="button" key={key} className={`btn small ${spellType === key ? 'primary' : ''}`} onClick={() => setSpellType(key)}>{label}</button>
          ))}
          <span className="pill">显示 {visibleSpellGroups.length} / {SPELL_COMBAT_GROUPS.length}</span>
        </div>
        <div className="row calculator-enemy-search">
          <input
            className="input"
            type="search"
            aria-label="搜索法术敌人"
            placeholder="搜索敌人中文、英文、变体或地区"
            value={enemySearch}
            onChange={(event) => setEnemySearch(event.target.value)}
          />
          <span className="pill">{filteredEnemies.length} / {PLAYABLE_ENEMIES.length}</span>
        </div>
        <div className="row combat-controls spell-calculator-controls">
          <select
            className="select"
            aria-label="法术触媒"
            value={chosenSpellCatalystKey}
            disabled={spellCatalysts.length === 0}
            onChange={(event) => { setSpellCatalystKey(event.target.value); setSpellUpgrade(null); }}
          >
            {spellCatalysts.length === 0
              ? <option value="">没有匹配触媒</option>
              : spellCatalysts.map((catalyst) => <option key={catalystKey(catalyst)} value={catalystKey(catalyst)}>{catalyst.name} · {catalyst.kind}</option>)}
          </select>
          <label className="calculator-upgrade"><span>强化</span><input
            className="input"
            type="number"
            min={0}
            max={chosenSpellCatalyst ? catalystMaxUpgrade(chosenSpellCatalyst) : 0}
            value={chosenSpellUpgrade}
            disabled={!chosenSpellCatalyst}
            onChange={(event) => setSpellUpgrade(Number(event.target.value))}
          /></label>
          <label className="calculator-upgrade"><span>幽影树</span><select className="select" aria-label="幽影树庇佑等级" value={spellScaduLevel} onChange={(event) => setSpellScaduLevel(Number(event.target.value))}>
            {Array.from({ length: 21 }, (_, level) => <option key={level} value={level}>庇佑 +{level}</option>)}
          </select></label>
          <select
            className="select"
            aria-label="法术敌人"
            value={chosenEnemy?.npcParamId ?? ''}
            disabled={filteredEnemies.length === 0}
            onChange={(event) => setSelectedEnemyId(Number(event.target.value))}
          >
            {filteredEnemies.length === 0
              ? <option value="">没有匹配的敌人</option>
              : filteredEnemies.map((enemy, index) => <option key={`${enemy.npcParamId}-${index}`} value={enemy.npcParamId}>{enemy.nameVariant || enemy.name} · {enemy.region}</option>)}
          </select>
          <label className="calculator-upgrade calculator-cycle"><span>周目</span><select className="select" aria-label="法术模拟周目" value={newGameCycle} onChange={(event) => setNewGameCycle(Number(event.target.value))}>
            {NEW_GAME_CYCLES.map((cycle) => <option key={cycle} value={cycle}>{newGameLabel(cycle)}</option>)}
          </select></label>
        </div>
        <section className="spell-bonus-config" aria-label="法术增益配置">
          <div className="spell-bonus-heading">
            <div>
              <span>增益配置</span>
              <strong>{selectedSpellAttack ? spellCombatDisplayName(selectedSpellAttack.name) : '从下方选择攻击动作'}</strong>
            </div>
            <button
              type="button"
              className="btn small"
              disabled={equippedSpellBonusIds.length === 0}
              onClick={addEquippedSpellBonuses}
            >
              载入已装备加成 {equippedSpellBonusIds.length > 0 ? `(${equippedSpellBonusIds.length})` : ''}
            </button>
          </div>
          {selectedSpellAttack && <>
            <div className="spell-bonus-meta">
              <span>攻击参数 {selectedSpellAttack.atkId ?? '无'}</span>
              {selectedSpellCalculatorAttack && <>
                <span>需求 智 {selectedSpellCalculatorAttack.requirements.int} / 信 {selectedSpellCalculatorAttack.requirements.fai} / 感 {selectedSpellCalculatorAttack.requirements.arc}</span>
                {selectedSpellCalculatorAttack.tags.length > 0 && <span>类别 {selectedSpellCalculatorAttack.tags.join(' / ')}</span>}
                {selectedSpellCalculatorAttack.status && <span>异常 {selectedSpellCalculatorAttack.buildup ?? 0} {selectedSpellCalculatorAttack.status}</span>}
              </>}
            </div>
            <div className="spell-bonus-selects">
              {SPELL_BONUS_SLOT_CATEGORIES.map((category) => {
                const active = selectedSpellBuffByCategory.get(category);
                const options = SPELL_CALCULATOR_BUFFS.filter((buff) => buff.category === category);
                return <label key={category}>
                  <span>{category.replace('buff', '')}</span>
                  <select
                    className="select"
                    aria-label={category}
                    value={active?.id ?? ''}
                    onChange={(event) => event.target.value ? selectSpellBuff(event.target.value) : active && removeSpellBuff(active.id)}
                  >
                    <option value="">不使用</option>
                    {options.map((buff) => <option key={buff.id} value={buff.id}>{buff.name}</option>)}
                  </select>
                </label>;
              })}
              <label>
                <span>通用加成</span>
                <select className="select" aria-label="通用加成" value="" onChange={(event) => selectSpellBuff(event.target.value)}>
                  <option value="">添加可叠加效果</option>
                  {SPELL_CALCULATOR_BUFFS
                    .filter((buff) => buff.category === '通用buff' && !selectedSpellBuffIds.includes(buff.id))
                    .map((buff) => <option key={buff.id} value={buff.id}>{buff.name}</option>)}
                </select>
              </label>
            </div>
            <div className="spell-bonus-active" aria-live="polite">
              {selectedSpellBuffs.length === 0
                ? <span>未选择增益</span>
                : selectedSpellBuffs.map((buff) => <button
                  key={buff.id}
                  type="button"
                  className="spell-bonus-chip"
                  title={buff.note || undefined}
                  onClick={() => removeSpellBuff(buff.id)}
                >
                  {buff.name} <small>{buff.effects.map((effect) => `${effect.condition} ${bonusPercent(effect.multiplier)}`).join(' / ')}</small>
                </button>)}
            </div>
            {selectedSpellElements.length > 0 && <div className="spell-bonus-results">
              {selectedSpellElements.map((element) => <div key={element.type}>
                <span>{DAMAGE_ZH[element.type] ?? element.type}</span>
                <strong>{(element.effectiveMultiplier / 100).toFixed(2)}x</strong>
                <small>基础 {(element.multiplier / 100).toFixed(2)}x x 增益 {element.bonusMultiplier.toFixed(3)}x</small>
              </div>)}
            </div>}
            {!selectedSpellCalculatorAttack && <p className="spell-bonus-warning">该攻击动作没有 v1.16 计算器标签，仍可查看基础倍率，但不会套用专属类别加成。</p>}
          </>}
        </section>
        {spellEstimate && <>
          <div className="stat-grid spell-result-grid">
            <Stat label="单段伤害" value={formatNumber(Math.round(spellEstimate.damagePerHit))} sub="按命中敌人防御结算" />
            <Stat label="单次施放总伤" value={formatNumber(Math.round(spellEstimate.damageTotal))} sub={`${spellEstimate.attack.hitCount} 段全部命中`} />
            <Stat label="击杀需施放" value={spellEstimate.hitsToKill ?? '—'} sub="全部段命中" />
            <Stat label="削韧 / 破韧" value={combatValue(spellEstimate.poiseTotal)} sub={spellEstimate.poiseHits == null ? '不可破韧' : `约 ${spellEstimate.poiseHits} 次施放`} />
            <Stat label="蓝耗 / 异常" value={spellEstimate.focusCost == null ? '—' : `${Math.round(spellEstimate.focusCost)} FP`} sub={spellEstimate.status || '无异常'} />
          </div>
          <div className="combat-summary">
            <span>{chosenEnemy?.nameVariant || chosenEnemy?.name}</span>
            <span>{chosenSpellCatalyst?.name ?? '—'} +{chosenSpellUpgrade}</span>
            <span>{newGameLabel(newGameCycle)} · 幽影树庇佑 +{spellScaduLevel}</span>
            <span className="desc">按所选法术全部段正面命中计算；暴击、部位与敌人抗性削减未计入。</span>
          </div>
          <section className="combat-data-section">
            <h4>伤害结算 <span>攻击力 → 防御曲线 → 承伤 → 增益 → 幽影树庇佑</span></h4>
            <div className="combat-table-wrap spell-breakdown-table-wrap">
              <table className="tbl spell-breakdown-table">
                <thead><tr><th>属性</th><th className="num">攻击力</th><th className="num">成长</th><th className="num">防御</th><th className="num">承伤</th><th className="num">增益</th><th className="num">装备</th><th className="num">伤害</th></tr></thead>
                <tbody>{spellEstimate.parts.map((part) => <tr key={part.type}>
                  <td>{DAMAGE_ZH[part.type] ?? part.type}</td>
                  <td className="num">{Math.round(part.attack)}</td>
                  <td className="num">{part.scaling.toFixed(2)}x</td>
                  <td className="num">{Math.round(part.defense)}</td>
                  <td className="num">{part.taken.toFixed(2)}x</td>
                  <td className="num">{part.buffMultiplier.toFixed(3)}x</td>
                  <td className="num">{part.equipmentMultiplier.toFixed(3)}x</td>
                  <td className="num"><strong>{formatNumber(Math.round(part.damage))}</strong></td>
                </tr>)}</tbody>
              </table>
            </div>
            {!spellEstimate.requirementSatisfied && <p className="spell-bonus-warning">属性未满足法术或触媒需求，成长按 0.6 结算。</p>}
          </section>
        </>}
        <div className="combat-table-wrap">
          <table className="tbl">
            <thead><tr><th>法术</th><th>攻击倍率</th><th className="num">PvE 削韧</th><th className="num">PvE 削精</th><th aria-label="配置" /></tr></thead>
            <tbody>{visibleSpellGroups.length === 0 ? <tr><td colSpan={5} className="undone">没有匹配的魔法或祷告</td></tr> : visibleSpellGroups.map(({ group, display }) => {
              const expandable = group.attacks.length > 1;
              const groupKey = `${group.type}\u0000${group.name}`;
              const open = expandable && expandedSpellGroups.has(groupKey);
              const groupAttack = group.attacks.find((attack) => (attack.atkId ?? 0) > 0) ?? null;
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
                  <td className="num"><button
                    type="button"
                    className={`btn small spell-config-button ${selectedSpellAttack?.atkId === groupAttack?.atkId ? 'primary' : ''}`}
                    disabled={!groupAttack?.atkId}
                    onClick={() => groupAttack?.atkId && setSelectedSpellAtkId(groupAttack.atkId)}
                  >配置</button></td>
                </tr>
                {open && group.attacks.map((attack, index) => <tr className="spell-hit-row" key={`${attack.atkId ?? 'none'}-${index}`}>
                  <td><span className="spell-hit-label">第 {index + 1} 段</span></td>
                  <td>{damageMultiplierLabel(attack.damageMultipliers) || '—'}</td>
                  <td className="num">{combatValue(attack.pvePoiseDamage)}</td>
                  <td className="num">{combatValue(attack.pveStaminaDamage)}</td>
                  <td className="num"><button
                    type="button"
                    className={`btn small spell-config-button ${selectedSpellAttack?.atkId === attack.atkId ? 'primary' : ''}`}
                    disabled={!attack.atkId}
                    onClick={() => attack.atkId && setSelectedSpellAtkId(attack.atkId)}
                  >配置</button></td>
                </tr>)}
              </Fragment>;
            })}</tbody>
          </table>
        </div>
      </Card>}
    </div>
  );
}
