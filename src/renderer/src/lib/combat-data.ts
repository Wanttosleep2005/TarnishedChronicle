import { SPELL_COMBAT_DATA, WEAPON_COMBAT_ACTIONS, type EnemyCombatRow, type SpellCombatRow, type WeaponCombatRow } from '../data/generated/combat-data.ts';
import { SPELLS } from '../data/generated/spells.ts';
import { weaponById } from './derive.ts';
import { zhItemNameByKind } from '../data/zh/translations.ts';

const weaponCombatByName = new Map(WEAPON_COMBAT_ACTIONS.map((row) => [row.weapon, row]));
const spellCombatByName = new Map(SPELL_COMBAT_DATA.map((row) => [row.name, row]));
const officialSpellNames = SPELLS
  .map((spell) => ({ en: spell.name, zh: zhItemNameByKind('goods', spell.id) }))
  .filter((spell): spell is { en: string; zh: string } => Boolean(spell.zh))
  .sort((a, b) => b.en.length - a.en.length);

const SPELL_VARIANT_ZH: Readonly<Record<string, string>> = {
  '- Charged': '蓄力',
  '- Bullet': '投射物',
  '- Those Who Live in Death': '死诞者',
  '- Self': '自身',
  '- Ally': '友军',
  '- Self-Madness': '自身发狂',
  '(Offhand)': '副手',
  '(Water AoE)': '水面范围',
  '1': '第 1 段',
  '2': '第 2 段',
  '3': '第 3 段',
  '(above head)': '头顶',
  '(Mounted)': '骑乘',
  '(Mounted) - 2nd in Chain': '骑乘 · 连段第 2 击',
  '- Charged (Water AoE)': '蓄力（水面范围）',
  '- 2nd in Chain': '连段第 2 击',
  '(Offhand) - 2nd in Chain': '副手 · 连段第 2 击',
  '(Offhand) - Charged': '副手 · 蓄力',
  '- Self-Madness - Charged': '自身发狂 · 蓄力',
  '- Charged (AoE)': '蓄力（范围）',
  '(AoE)': '范围',
  'Offhand': '副手',
  'Offhand (AoE)': '副手（范围）',
  '- 2nd in Neutral Chain': '常规连段第 2 击',
  '(Offhand) - 2nd in Neutral Chain': '副手 · 常规连段第 2 击',
  '1 (above head)': '第 1 段（头顶）',
  '2 (above head)': '第 2 段（头顶）',
  '3 (above head)': '第 3 段（头顶）',
  '- Heal': '治疗',
  '- Charged 1st Hit/Uncharged': '蓄力第 1 击／未蓄力',
  '- Charged 2nd Hit': '蓄力第 2 击',
  '(Lingering Effect)': '持续效果',
  '(Lingering Effect) - Charged': '持续效果 · 蓄力',
  '(Lingering Fire)': '持续火焰',
  '(Lingering Ticks)': '持续伤害',
  '(AoE on Cast)': '施放范围',
  '- Charged (Lingering Ticks)': '蓄力（持续伤害）',
  '- Charged (AoE on Cast)': '蓄力（施放范围）',
  '- Confirmed Grab': '抓取命中',
  '- Startup AoE': '起手范围',
  '- Laser [1]': '激光第 1 段',
  '- Laser [2]': '激光第 2 段',
  '#1 - Direct': '第 1 击 · 直接命中',
  '#2 - Direct': '第 2 击 · 直接命中',
  '#1 - DIrect (Offhand)': '第 1 击 · 副手直接命中',
  '#2 - Direct (Offhand)': '第 2 击 · 副手直接命中',
  '#1 - Indirect': '第 1 击 · 间接命中',
  '#2 - Indirect': '第 2 击 · 间接命中',
  '- Startup Lightning': '起手雷击',
  '- Exposions': '爆炸',
  '- Arm': '手臂',
  '- Lightning [1]': '雷击第 1 段',
  '- Lightning [2]': '雷击第 2 段',
  '?': '未标注动作',
};

export interface SpellCombatGroup {
  readonly type: string;
  readonly name: string;
  readonly attacks: readonly SpellCombatRow[];
}

export function groupSpellCombatRows(rows: readonly SpellCombatRow[]): readonly SpellCombatGroup[] {
  const groups = new Map<string, { type: string; name: string; attacks: SpellCombatRow[] }>();
  for (const row of rows) {
    const key = `${row.type}\u0000${row.name}`;
    const group = groups.get(key);
    if (group) group.attacks.push(row);
    else groups.set(key, { type: row.type, name: row.name, attacks: [row] });
  }
  return [...groups.values()];
}

export function filterCombatEnemies(rows: readonly EnemyCombatRow[], query: string): readonly EnemyCombatRow[] {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return rows;
  return rows.filter((enemy) => `${enemy.name} ${enemy.nameEn} ${enemy.region}`.toLocaleLowerCase().includes(needle));
}

export function weaponCombatForId(paramId: number): WeaponCombatRow | null {
  const baseId = paramId - (paramId % 10000);
  const weapon = weaponById.get(paramId) ?? weaponById.get(baseId);
  if (!weapon) return null;
  return weaponCombatByName.get(zhItemNameByKind('weapon', baseId) ?? weapon.name) ?? null;
}

export function spellCombatForName(name: string): SpellCombatRow | null {
  return spellCombatByName.get(name) ?? null;
}

export function spellCombatDisplayName(name: string): string {
  const spell = officialSpellNames.find((candidate) =>
    name === candidate.en
      || name.startsWith(`${candidate.en} `)
      || name.startsWith(`${candidate.en} -`)
      || name.startsWith(`${candidate.en} (`),
  );
  if (!spell) return name;
  const suffix = name.slice(spell.en.length).trim();
  if (!suffix) return spell.zh;
  return `${spell.zh} · ${SPELL_VARIANT_ZH[suffix] ?? suffix}`;
}

export function weaponActionBreakdownLabel(value: string): string {
  return value
    .replaceAll('Projectile', '投射物')
    .replaceAll('Bullet', '弹体')
    .replaceAll('Thrown', '投掷')
    .replaceAll('AoE', '范围');
}

export function damageMultiplierLabel(multipliers: Readonly<Record<string, number>>): string {
  const labels: Record<string, string> = { physical: '物理', magic: '魔力', fire: '火', lightning: '雷', holy: '圣' };
  return Object.entries(multipliers)
    .map(([type, value]) => `${labels[type] ?? type} ${(value / 100).toFixed(2)}x`)
    .join(' + ');
}
