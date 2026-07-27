/**
 * 杀戮尖塔 2 存档解析(明文 JSON,结构经 scripts/probe-sts2.ts 对真实存档核实)。
 * 命名:官方简中,由 scripts/extract-sts2-zh.ts 从游戏 pck 的 localization/zhs 提取;
 * 表里没有的(mod 内容)回退整洁英文,绝不猜译名。
 */
import { STS2_BADGE_TIERS, STS2_ZH } from '../data/zh/sts2-zh.generated.ts';

export interface Sts2Card {
  id: string;
  floor_added_to_deck?: number;
  current_upgrade_level?: number;
}

export interface Sts2Relic {
  id: string;
  floor_added_to_deck?: number;
}

export interface Sts2Badge {
  id: string;
  rarity: string;
  count?: number;
}

export interface Sts2Player {
  id?: string | number;
  character: string;
  deck?: Sts2Card[];
  relics?: Sts2Relic[];
  potions?: { id: string }[];
  badges?: Sts2Badge[];
  max_potion_slot_count?: number;
}

export interface Sts2ChoiceOption {
  card?: { id?: string };
  choice?: string;
  was_picked?: boolean;
}

export interface Sts2NodeRoom {
  model_id?: string;
  monster_ids?: string[];
  room_type?: string;
  turns_taken?: number;
}

export interface Sts2NodePlayerStats {
  player_id?: string | number;
  current_hp?: number;
  max_hp?: number;
  damage_taken?: number;
  hp_healed?: number;
  max_hp_gained?: number;
  max_hp_lost?: number;
  current_gold?: number;
  gold_gained?: number;
  gold_spent?: number;
  card_choices?: Sts2ChoiceOption[];
  relic_choices?: Sts2ChoiceOption[];
  potion_choices?: Sts2ChoiceOption[];
  cards_gained?: unknown[];
  upgraded_cards?: unknown[];
  rest_site_choices?: unknown[];
  event_choices?: { title?: { key?: string; table?: string } }[];
}

export interface Sts2MapNode {
  map_point_type?: string;
  rooms?: Sts2NodeRoom[];
  player_stats?: Sts2NodePlayerStats[];
}

export interface Sts2Run {
  acts?: string[];
  ascension?: number;
  build_id?: string;
  game_mode?: string;
  killed_by_encounter?: string;
  killed_by_event?: string;
  map_point_history?: Sts2MapNode[][];
  modifiers?: { id?: string }[] | string[];
  players?: Sts2Player[];
  run_time?: number;
  seed?: string;
  start_time?: number;
  was_abandoned?: boolean;
  win?: boolean;
}

/** 宽松取字符串 id:兼容 'CARD.X' / {id} / {card:{id}} 三种形态。 */
export function looseId(value: unknown): string | null {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') {
    const o = value as { id?: unknown; card?: { id?: unknown } };
    if (typeof o.id === 'string') return o.id;
    if (o.card && typeof o.card.id === 'string') return o.card.id;
  }
  return null;
}

export interface Sts2CharacterStat {
  id: string;
  total_wins?: number;
  total_losses?: number;
  best_win_streak?: number;
  current_streak?: number;
  fastest_win_time?: number;
  max_ascension?: number;
  playtime?: number;
  badges?: Sts2Badge[];
}

export interface Sts2CardStat {
  id: string;
  times_won?: number;
  times_lost?: number;
  times_picked?: number;
  times_skipped?: number;
}

export interface Sts2FightStat {
  character: string;
  wins?: number;
  losses?: number;
}

export interface Sts2EnemyStat {
  enemy_id?: string;
  encounter_id?: string;
  fight_stats?: Sts2FightStat[];
}

export interface Sts2AncientStat {
  ancient_id?: string;
  character_stats?: Sts2FightStat[];
}

export interface Sts2Epoch {
  id?: string;
  obtain_date?: number;
  state?: string;
}

export interface Sts2Progress {
  total_playtime?: number;
  floors_climbed?: number;
  architect_damage?: number;
  wongo_points?: number;
  test_subject_kills?: number;
  character_stats?: Sts2CharacterStat[];
  card_stats?: Sts2CardStat[];
  enemy_stats?: Sts2EnemyStat[];
  encounter_stats?: Sts2EnemyStat[];
  ancient_stats?: Sts2AncientStat[];
  epochs?: Sts2Epoch[];
  discovered_cards?: string[];
  discovered_relics?: string[];
  discovered_potions?: string[];
  discovered_events?: string[];
  discovered_acts?: unknown[];
  unlocked_achievements?: string[];
  schema_version?: number;
}

export const bareId = (raw: string): string => raw.replace(/^[A-Z_]+\./, '');

export function prettifyId(raw: string | undefined | null): string {
  if (!raw) return '未知';
  const bare = bareId(raw);
  if (bare === 'NONE') return '—';
  return bare
    .toLowerCase()
    .split('_')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

/** 按官方简中表查名(cat: cards/relics/characters/potions/acts/badges/encounters/monsters/events)。 */
export function sts2Zh(cat: string, raw: string | undefined | null): string {
  if (!raw) return '未知';
  const bare = bareId(raw);
  if (bare === 'NONE') return '—';
  return STS2_ZH[cat]?.[bare] ?? prettifyId(raw);
}

export const cardName = (raw: string | undefined | null) => sts2Zh('cards', raw);
export const relicName = (raw: string | undefined | null) => sts2Zh('relics', raw);
export const potionName = (raw: string | undefined | null) => sts2Zh('potions', raw);

/** 徽章名:分级徽章(大牌组/巨大牌组/怪物牌组)按稀有度取官方分级名。 */
export function badgeName(raw: string | undefined | null, rarity?: string): string {
  if (raw && rarity) {
    const tier = STS2_BADGE_TIERS[bareId(raw)]?.[rarity as 'bronze' | 'silver' | 'gold'];
    if (tier?.title) return tier.title;
  }
  return sts2Zh('badges', raw);
}

/** 徽章达成条件(官方描述),没有分级描述则返回 undefined。 */
export function badgeDesc(raw: string | undefined | null, rarity: string): string | undefined {
  if (!raw) return undefined;
  return STS2_BADGE_TIERS[bareId(raw)]?.[rarity as 'bronze' | 'silver' | 'gold']?.desc;
}

export function characterName(raw: string | undefined): string {
  return sts2Zh('characters', raw);
}

export function characterInitial(raw: string | undefined): string {
  return characterName(raw).slice(0, 1);
}

export function actName(raw: string): string {
  return sts2Zh('acts', raw);
}

/** 败因(遭遇→怪物→事件逐级查表)。 */
export function encounterName(raw: string | undefined | null): string {
  if (!raw) return '未知';
  const bare = bareId(raw);
  if (bare === 'NONE') return '—';
  return (
    STS2_ZH.encounters?.[bare] ??
    STS2_ZH.monsters?.[bare] ??
    STS2_ZH.events?.[bare] ??
    prettifyId(raw)
  );
}

export function runOutcome(run: Sts2Run): { label: string; tone: 'win' | 'loss' | 'abandon' } {
  if (run.win) return { label: '胜利', tone: 'win' };
  if (run.was_abandoned) return { label: '放弃', tone: 'abandon' };
  const killer = run.killed_by_encounter && run.killed_by_encounter !== 'NONE.NONE'
    ? encounterName(run.killed_by_encounter)
    : run.killed_by_event && run.killed_by_event !== 'NONE.NONE'
      ? encounterName(run.killed_by_event)
      : null;
  return { label: killer ? `败于 ${killer}` : '失败', tone: 'loss' };
}

export function formatRunTime(seconds: number | undefined): string {
  if (!seconds || seconds <= 0) return '—';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
}

export const BADGE_RARITY_COLOR: Record<string, string> = {
  bronze: '#b0793f',
  silver: '#b8c0cc',
  gold: '#e0af4e',
};

export function parseSts2Progress(json: string): Sts2Progress {
  return JSON.parse(json) as Sts2Progress;
}

export function parseSts2Run(json: string): Sts2Run {
  return JSON.parse(json) as Sts2Run;
}
