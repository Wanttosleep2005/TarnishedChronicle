import { ARMOR } from '../data/generated/armor.ts';
import { ASHES_OF_WAR } from '../data/generated/ashes-of-war.ts';
import { GOODS } from '../data/generated/goods.ts';
import { GRACES } from '../data/generated/graces.ts';
import { SPELLS } from '../data/generated/spells.ts';
import { SPIRIT_ASHES } from '../data/generated/spirit-ashes.ts';
import { TALISMANS } from '../data/generated/talismans.ts';
import { WEAPONS } from '../data/generated/weapons.ts';
import { OFFICIAL_NPC_ZH } from '../data/zh/official-names.generated.ts';
import { type ItemNameKind, zhItemNameByKind } from '../data/zh/translations.ts';
import type { CharacterProfile } from './derive.ts';
import { isFlagSet } from './flags.ts';

type ItemSignalKind = 'weapon' | 'talisman' | 'goods' | 'armor' | 'ash' | 'spell';
type QuestSignal =
  | { kind: ItemSignalKind; en: string }
  | { kind: 'boss'; en?: string; flagId?: number }
  | { kind: 'flag'; flagId: number };

interface QuestPredicate {
  all?: readonly QuestSignal[];
  any?: readonly QuestSignal[];
}

interface QuestStageDef {
  region: string;
  location: string;
  objective: string;
  graceEn?: string;
  reachedBy?: QuestPredicate;
  rewards?: readonly QuestReward[];
  terminal?: 'done' | 'interrupted';
}

interface QuestDef {
  npcEn: string;
  fallbackZh: string;
  dlc?: boolean;
  summary: string;
  stages: readonly QuestStageDef[];
}

export type QuestRewardKind = 'weapon' | 'talisman' | 'spell' | 'incantation' | 'ash' | 'ash-of-war' | 'armor' | 'key-item' | 'gesture' | 'upgrade';

export interface QuestReward {
  name: string;
  kind: QuestRewardKind;
  branch?: string;
}

interface QuestRewardIconItem {
  readonly id: number;
  readonly icon: number;
}

function normalizedRewardName(kind: QuestRewardKind, name: string): string {
  const normalized = name
    .normalize('NFKC')
    .replace(/\s+/g, '')
    .replace(/^战灰:/, '');
  return kind === 'weapon' ? normalized.replace(/\+[0-9]+$/, '') : normalized;
}

function rewardIconKey(kind: QuestRewardKind, name: string): string {
  return `${kind}|${normalizedRewardName(kind, name)}`;
}

function indexQuestRewardIcons(
  index: Map<string, number>,
  kinds: readonly QuestRewardKind[],
  rows: readonly QuestRewardIconItem[],
  itemNameKind: ItemNameKind,
): void {
  for (const row of rows) {
    if (row.icon <= 0) continue;
    const name = zhItemNameByKind(itemNameKind, row.id);
    if (!name) continue;
    for (const kind of kinds) {
      index.set(rewardIconKey(kind, name), row.icon);
    }
  }
}

function addQuestRewardAliases(index: Map<string, number>, kind: QuestRewardKind, aliases: Readonly<Record<string, string>>): void {
  for (const [name, itemName] of Object.entries(aliases)) {
    const icon = index.get(rewardIconKey(kind, itemName));
    if (icon !== undefined) index.set(rewardIconKey(kind, name), icon);
  }
}

function firstAvailableIcon(rows: readonly QuestRewardIconItem[]): number | null {
  return rows.find((row) => row.icon > 0)?.icon ?? null;
}

const QUEST_REWARD_ICON_INDEX: ReadonlyMap<string, number> = (() => {
  const index = new Map<string, number>();
  indexQuestRewardIcons(index, ['weapon'], WEAPONS, 'weapon');
  indexQuestRewardIcons(index, ['talisman'], TALISMANS, 'talisman');
  indexQuestRewardIcons(index, ['spell', 'incantation'], SPELLS, 'goods');
  indexQuestRewardIcons(index, ['spell', 'incantation'], GOODS, 'goods');
  indexQuestRewardIcons(index, ['ash'], SPIRIT_ASHES, 'goods');
  indexQuestRewardIcons(index, ['armor'], ARMOR, 'armor');
  indexQuestRewardIcons(index, ['key-item', 'gesture', 'upgrade'], GOODS, 'goods');
  indexQuestRewardIcons(index, ['ash-of-war'], ASHES_OF_WAR, 'aow');
  addQuestRewardAliases(index, 'armor', {
    '鳞片套装': '鳞片头盔',
    '白面具套装': '白面具',
    '雪魔女套装': '雪魔女尖帽',
    '卢瑟特套装': '卢瑟特辉石头冠',
    '亚兹勒套装': '亚兹勒辉石头冠',
    '魔法剑士套装': '魔法剑士尖帽',
    '休里耶套装': '休里耶面具',
    '布莱泽套装': '布莱泽铠甲',
    '霍斯劳套装': '霍斯劳头盔',
    '孪生套装': '孪生头盔',
    '金面具套装': '光耀金面具',
    '恶兆套装': '恶兆笑脸面具',
    '大山羊套装': '大山羊头盔',
    '聚兽套装': '聚兽头盔',
    '侧室套装': '侧室面具',
    '奇异骑士套装': '奇异骑士风帽',
    '魔法教授套装': '魔法教授大帽子',
    '战鬼套装': '战鬼头盔',
    '铜绿套装': '铜绿头盔',
    '角人套装': '毛虫面具',
    '大祭司套装': '大祭司帽子',
    '安帕赫套装': '安帕赫上衣',
    '弗蕾亚套装': '弗蕾亚头盔',
    '落叶套装': '落叶派长袍',
    '埃贡套装': '埃贡头盔',
  });
  addQuestRewardAliases(index, 'ash', {
    '古龙弗罗里萨克斯': '“古龙”芙柔桑克斯',
    '火焰骑士昆兰的骨灰': '“火焰骑士”昆兰',
    '约兰的骨灰': '“黑夜剑士”约兰',
  });
  addQuestRewardAliases(index, 'key-item', {
    '战灰：落叶旋风腿': '战灰：落叶旋风脚',
    '遗迹地图（第一张）': '遗迹地图',
    '给安帕赫的信': '保藏库十字记号旁的信',
  });
  addQuestRewardAliases(index, 'gesture', {
    蹲下: '说明：蹲下',
  });
  return index;
})();

const QUEST_REWARD_FALLBACK_ICONS: Readonly<Record<QuestRewardKind, number | null>> = {
  weapon: firstAvailableIcon(WEAPONS),
  talisman: firstAvailableIcon(TALISMANS),
  spell: firstAvailableIcon(SPELLS),
  incantation: firstAvailableIcon(SPELLS),
  ash: firstAvailableIcon(SPIRIT_ASHES),
  'ash-of-war': firstAvailableIcon(ASHES_OF_WAR),
  armor: 14040,
  'key-item': firstAvailableIcon(GOODS),
  gesture: firstAvailableIcon(GOODS),
  upgrade: firstAvailableIcon(GOODS),
};

/** Returns a precise item icon when possible, otherwise a stable icon for the reward category. */
export function questRewardIconId(reward: QuestReward): number | null {
  return QUEST_REWARD_ICON_INDEX.get(rewardIconKey(reward.kind, reward.name)) ?? QUEST_REWARD_FALLBACK_ICONS[reward.kind];
}

/** True when the reward name resolves to an item-specific icon instead of a category fallback. */
export function questRewardHasExactIcon(reward: QuestReward): boolean {
  return QUEST_REWARD_ICON_INDEX.has(rewardIconKey(reward.kind, reward.name));
}

export type QuestRelationKind = 'reference' | 'prerequisite' | 'branch' | 'impact' | 'reward' | 'route';
export type QuestRelationLevel = 'confirmed' | 'inferred' | 'unknown';

export interface QuestRelationDef {
  /** 目标 NPC 英文 id（与 QuestView.id 一致） */
  to: string;
  kind: QuestRelationKind;
  /** 关系说明；留空则由 kind 生成默认说明 */
  note?: string;
  /** 证据等级：手工整理的关系默认为 inferred，资料明确陈述的可用 confirmed */
  level?: QuestRelationLevel;
}

interface QuestEnrichment {
  related?: readonly string[];
  warnings?: readonly string[];
  rewardsByStage?: Readonly<Record<number, readonly QuestReward[]>>;
  /** 结构化关系边：比 related 更明确的语义（前置/分支/影响/奖励来源/顺路） */
  relations?: readonly QuestRelationDef[];
}

export type QuestStatus = 'done' | 'ongoing' | 'unstarted' | 'interrupted';
export type QuestStageState = 'done' | 'current' | 'next' | 'later';

export interface QuestStageView {
  region: string;
  location: string;
  objective: string;
  state: QuestStageState;
  mapGraceFlagId: number | null;
  rewards: readonly QuestReward[];
}

export interface QuestRelationView {
  toId: string;
  toNpc: string;
  kind: QuestRelationKind;
  note: string;
  level: QuestRelationLevel;
}

export interface QuestView {
  id: string;
  npc: string;
  dlc: boolean;
  summary: string;
  status: QuestStatus;
  currentIndex: number;
  current: QuestStageView;
  next: QuestStageView | null;
  stages: readonly QuestStageView[];
  related: readonly { id: string; npc: string }[];
  relations: readonly QuestRelationView[];
  warnings: readonly string[];
}

const QUESTS: readonly QuestDef[] = [
  {
    npcEn: 'Ranni the Witch',
    fallbackZh: '魔女菈妮',
    summary: '沿着星星时代的道路寻找永恒之城与暗月祭坛。',
    stages: [
      { region: '湖之利耶尼亚', location: '菈妮魔法师塔', objective: '在塔顶与菈妮交谈，选择为她效力。', graceEn: "Ranni's Rise" },
      { region: '永恒之城诺克隆恩', location: '黑夜神域', objective: '从陨石坑进入诺克隆恩，取得猎杀指头刀。', graceEn: "Night's Sacred Ground", reachedBy: { all: [{ kind: 'boss', en: 'Starscourge Radahn' }] } },
      { region: '安瑟尔河', location: '安瑟尔河主流', objective: '从蕾娜魔法师塔的传送门前往地底，找到娇小菈妮。', graceEn: 'Ainsel River Main', reachedBy: { any: [{ kind: 'goods', en: 'Carian Inverted Statue' }, { kind: 'goods', en: 'Miniature Ranni' }] } },
      { region: '腐败湖', location: '腐败湖畔', objective: '穿过诺克史黛拉与腐败湖，前往大回廊。', graceEn: 'Lake of Rot Shoreside', reachedBy: { any: [{ kind: 'goods', en: 'Discarded Palace Key' }, { kind: 'goods', en: 'Dark Moon Ring' }] } },
      { region: '月光祭坛', location: '玛努斯·瑟利斯大教堂', objective: '通过黑暗弃子的竞技场，在大教堂下方找到菈妮。', graceEn: 'Cathedral of Manus Celes', reachedBy: { all: [{ kind: 'boss', flagId: 12040800 }] } },
      { region: '月光祭坛', location: '玛努斯·瑟利斯大教堂', objective: '誓约已经完成。', graceEn: 'Cathedral of Manus Celes', reachedBy: { all: [{ kind: 'weapon', en: 'Dark Moon Greatsword' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Blaidd the Half-Wolf',
    fallbackZh: '“半狼”布莱泽',
    summary: '布莱泽会随菈妮任务在宁姆格福、地底与三姊妹塔之间迁移。',
    stages: [
      { region: '宁姆格福', location: '雾林废墟', objective: '在雾林听到狼嚎后向咖列询问，并用弹指动作呼唤布莱泽。', graceEn: 'Mistwood Outskirts' },
      { region: '希芙拉河', location: '希芙拉河岸边', objective: '在地底悬崖边找到布莱泽，继续调查诺克隆恩的入口。', graceEn: 'Siofra River Bank', reachedBy: { all: [{ kind: 'boss', en: 'Bloodhound Knight Darriwil' }] } },
      { region: '宁姆格福', location: '无主猎犬的封印监牢', objective: '碎星陨落后返回封印监牢，确认布莱泽的处境。', graceEn: 'Agheel Lake South', reachedBy: { all: [{ kind: 'boss', en: 'Starscourge Radahn' }] } },
      { region: '湖之利耶尼亚', location: '菈妮魔法师塔外', objective: '菈妮的誓约完成后回到塔外，面对失去理智的布莱泽。', graceEn: "Ranni's Rise", reachedBy: { all: [{ kind: 'weapon', en: 'Dark Moon Greatsword' }] } },
      { region: '湖之利耶尼亚', location: '菈妮魔法师塔外', objective: '布莱泽的旅程已经结束。', graceEn: "Ranni's Rise", reachedBy: { all: [{ kind: 'weapon', en: 'Royal Greatsword' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Preceptor Seluvis',
    fallbackZh: '魔法教授赛尔维斯',
    summary: '处理赛尔维斯的药水交易与琥珀星光计划。',
    stages: [
      { region: '湖之利耶尼亚', location: '赛尔维斯魔法师塔', objective: '接受药水委托，并决定把药水交给谁。', graceEn: 'Road to the Manor' },
      { region: '圆桌厅堂', location: '圆桌厅堂', objective: '处理赛尔维斯的药水，再返回他的地下室。', reachedBy: { all: [{ kind: 'goods', en: "Seluvis's Potion" }] } },
      { region: '亚坛高原', location: '亚坛大道三叉口东北', objective: '取得琥珀星光后交给赛尔维斯。', graceEn: 'Altus Highway Junction', reachedBy: { any: [{ kind: 'ash', en: 'Nepheli Loux Puppet' }, { kind: 'ash', en: 'Dung Eater Puppet' }] } },
      { region: '湖之利耶尼亚', location: '赛尔维斯魔法师塔', objective: '确认赛尔维斯计划的结局。', graceEn: 'Road to the Manor', reachedBy: { all: [{ kind: 'goods', en: 'Amber Starlight' }] } },
      { region: '湖之利耶尼亚', location: '赛尔维斯魔法师塔', objective: '赛尔维斯的交易已经终止。', graceEn: 'Road to the Manor', reachedBy: { all: [{ kind: 'goods', en: "Seluvis's Bell Bearing" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Fia, Deathbed Companion',
    fallbackZh: '“死眠少女”菲雅',
    summary: '追随死眠少女前往深根底层，寻找死王子的修复卢恩。',
    stages: [
      { region: '圆桌厅堂', location: '菲雅的房间', objective: '接受拥抱，并在她提出请求时收下侵蚀短剑。' },
      { region: '圆桌厅堂', location: '铁匠走廊', objective: '把侵蚀短剑交给 D，重新休息后检查房间深处。', reachedBy: { all: [{ kind: 'goods', en: 'Weathered Dagger' }] } },
      { region: '深根底层', location: '死王子宝座', objective: '击败菲雅的英雄，与菲雅交谈并交出死亡的咒痕。', graceEn: "Prince of Death's Throne", reachedBy: { all: [{ kind: 'boss', flagId: 12030800 }] } },
      { region: '深根底层', location: '死王子宝座', objective: '取得死王子的修复卢恩。', graceEn: "Prince of Death's Throne", reachedBy: { all: [{ kind: 'goods', en: 'Mending Rune of the Death-Prince' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'D, Hunter of the Dead',
    fallbackZh: '“猎人”D',
    summary: '追踪猎杀死诞者的孪生兄弟与菲雅事件。',
    stages: [
      { region: '宁姆格福', location: '水唤村外', objective: '与 D 交谈并调查水唤村的死诞者。', graceEn: 'Saintsbridge' },
      { region: '圆桌厅堂', location: '铁匠走廊', objective: '把菲雅交付的侵蚀短剑交给 D。', reachedBy: { all: [{ kind: 'goods', en: 'Weathered Dagger' }] } },
      { region: '希芙拉河', location: '导水桥旁断崖', objective: '把孪生铠甲交给沉睡的弟弟。', graceEn: 'Aqueduct-Facing Cliffs', reachedBy: { all: [{ kind: 'armor', en: 'Twinned Helm' }] } },
      { region: '深根底层', location: '死王子宝座', objective: '在菲雅任务结束后回收孪生铠甲与紧密孪生剑。', graceEn: "Prince of Death's Throne", reachedBy: { all: [{ kind: 'weapon', en: 'Inseparable Sword' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Dung Eater',
    fallbackZh: '食粪者',
    summary: '收集温床的诅咒，并决定诅咒或傀儡的结局。',
    stages: [
      { region: '圆桌厅堂', location: '孪生老妪旁的房间', objective: '取得第一份温床的诅咒后与红色灵体交谈。' },
      { region: '弃置恶兆的地底', location: '地底大道旁', objective: '使用下水道监牢钥匙释放食粪者。', graceEn: 'Underground Roadside', reachedBy: { all: [{ kind: 'goods', en: 'Sewer-Gaol Key' }] } },
      { region: '王城外围', location: '王城外壕沟', objective: '前往壕沟接受入侵，再回地底监牢作出选择。', graceEn: 'Outer Wall Phantom Tree', reachedBy: { all: [{ kind: 'goods', en: 'Seedbed Curse' }] } },
      { region: '弃置恶兆的地底', location: '食粪者监牢', objective: '这条任务线已经抵达结局。', graceEn: 'Underground Roadside', reachedBy: { any: [{ kind: 'goods', en: 'Mending Rune of the Fell Curse' }, { kind: 'ash', en: 'Dung Eater Puppet' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'The Noble Goldmask',
    fallbackZh: '金面具',
    summary: '与柯林一同追寻黄金律法的矛盾。',
    stages: [
      { region: '亚坛高原', location: '穿林大桥北端', objective: '找到沉默的金面具，并把位置告诉柯林。', graceEn: 'Forest-Spanning Greatbridge' },
      { region: '王城罗德尔', location: '黄金树大教堂西侧斗技场', objective: '施展回归性原理，向金面具揭示拉达冈的秘密。', graceEn: 'Erdtree Sanctuary', reachedBy: { all: [{ kind: 'spell', en: 'Law of Regression' }] } },
      { region: '巨人山顶', location: '古遗迹降雪谷上方的桥', objective: '在桥上找到金面具与柯林。', graceEn: 'Ancient Snow Valley Ruins', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }] } },
      { region: '灰城罗德尔', location: '斗技场下方', objective: '在灰城寻找金面具留下的修复卢恩。', graceEn: 'Leyndell, Capital of Ash', reachedBy: { all: [{ kind: 'boss', en: 'Maliketh, the Black Blade' }] } },
      { region: '灰城罗德尔', location: '斗技场下方', objective: '完美律法的修复卢恩已经取得。', graceEn: 'Leyndell, Capital of Ash', reachedBy: { all: [{ kind: 'goods', en: 'Mending Rune of Perfect Order' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Brother Corhyn',
    fallbackZh: '柯林',
    summary: '柯林会从圆桌厅堂迁往亚坛、王城与巨人山顶。',
    stages: [
      { region: '圆桌厅堂', location: '大赐福', objective: '与柯林交谈并推进主线，直到他决定寻找金面具。' },
      { region: '亚坛高原', location: '亚坛大道三叉口', objective: '在大道旁找到柯林，并告诉他金面具的位置。', graceEn: 'Altus Highway Junction', reachedBy: { all: [{ kind: 'spell', en: 'Law of Regression' }] } },
      { region: '王城罗德尔', location: '黄金树大教堂西侧斗技场', objective: '解决拉达冈雕像的谜题后向两人报告。', graceEn: 'Erdtree Sanctuary', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }] } },
      { region: '巨人山顶', location: '古遗迹降雪谷上方的桥', objective: '再次与柯林交谈，听取他对金面具的疑虑。', graceEn: 'Ancient Snow Valley Ruins', reachedBy: { all: [{ kind: 'boss', en: 'Fire Giant' }] } },
      { region: '灰城罗德尔', location: '灰城中心', objective: '在灰城确认柯林最后的去向。', graceEn: 'Leyndell, Capital of Ash', reachedBy: { all: [{ kind: 'boss', en: 'Maliketh, the Black Blade' }] } },
      { region: '灰城罗德尔', location: '灰城中心', objective: '柯林的旅程已经结束。', graceEn: 'Leyndell, Capital of Ash', reachedBy: { all: [{ kind: 'goods', en: "Corhyn's Bell Bearing" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Alexander, Warrior Jar',
    fallbackZh: '“战士壶”亚历山大',
    summary: '亚历山大会沿宁姆格福、盖利德、格密尔与法姆·亚兹拉旅行。',
    stages: [
      { region: '宁姆格福', location: '圣人桥南侧山坡', objective: '把陷在土里的亚历山大敲出来。', graceEn: 'Saintsbridge' },
      { region: '盖利德', location: '红狮子城广场', objective: '在碎星祭典前后与亚历山大交谈。', graceEn: 'Chamber Outside the Plaza', reachedBy: { all: [{ kind: 'boss', en: 'Starscourge Radahn' }] } },
      { region: '湖之利耶尼亚', location: '壶村上方悬崖', objective: '用油壶帮助再次陷住的亚历山大。', graceEn: 'Jarburg', reachedBy: { all: [{ kind: 'boss', en: 'Starscourge Radahn' }, { kind: 'goods', en: 'Oil Pot' }] } },
      { region: '格密尔火山', location: '沸滚河终点西侧熔岩湖', objective: '在熔岩中与亚历山大交谈。', graceEn: 'Seethewater Terminus', reachedBy: { all: [{ kind: 'boss', en: 'Magma Wyrm Makar' }] } },
      { region: '逐渐崩毁的法姆·亚兹拉', location: '龙教堂升降机上层', objective: '在浮空遗迹找到亚历山大，接受最后的决斗。', graceEn: 'Dragon Temple Lift', reachedBy: { all: [{ kind: 'boss', en: 'Fire Giant' }] } },
      { region: '逐渐崩毁的法姆·亚兹拉', location: '龙教堂升降机上层', objective: '战士壶的决斗已经结束。', graceEn: 'Dragon Temple Lift', reachedBy: { all: [{ kind: 'talisman', en: 'Shard of Alexander' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Millicent',
    fallbackZh: '米莉森',
    summary: '治疗米莉森，并沿亚坛、风车村与圣树推进她的命运。',
    stages: [
      { region: '盖利德', location: '腐败病教堂', objective: '把修复后的纯净金针交给米莉森。', graceEn: 'Church of the Plague' },
      { region: '盖利德', location: '格威的破屋', objective: '重新与格威和恢复行动的米莉森交谈。', graceEn: 'Sellia Under-Stair', reachedBy: { all: [{ kind: 'goods', en: 'Unalloyed Gold Needle' }] } },
      { region: '亚坛高原', location: '近黄金树的山丘', objective: '把女武神的义手交给米莉森。', graceEn: 'Erdtree-Gazing Hill', reachedBy: { all: [{ kind: 'goods', en: "Valkyrie's Prosthesis" }] } },
      { region: '亚坛高原', location: '风车村高台', objective: '击败神皮使徒后在高台与米莉森交谈。', graceEn: 'Windmill Heights', reachedBy: { all: [{ kind: 'boss', en: 'Godskin Apostle' }] } },
      { region: '圣树分枝艾布雷菲尔', location: '祈祷室至排水通道', objective: '在腐败池旁选择协助或挑战米莉森。', graceEn: 'Prayer Room', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }] } },
      { region: '圣树分枝艾布雷菲尔', location: '排水通道外', objective: '米莉森的命运已经确定。', graceEn: 'Drainage Channel', reachedBy: { any: [{ kind: 'talisman', en: 'Rotten Winged Sword Insignia' }, { kind: 'talisman', en: "Millicent's Prosthesis" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Sage Gowry',
    fallbackZh: '贤者格威',
    summary: '格威的任务与米莉森的病情和最终选择相连。',
    stages: [
      { region: '盖利德', location: '格威的破屋', objective: '取得纯净金针并让格威修复。', graceEn: 'Sellia Under-Stair' },
      { region: '盖利德', location: '腐败病教堂', objective: '把修复后的金针交给米莉森，再返回格威的破屋。', graceEn: 'Church of the Plague', reachedBy: { all: [{ kind: 'goods', en: 'Unalloyed Gold Needle' }] } },
      { region: '盖利德', location: '格威的破屋', objective: '米莉森任务结束后确认格威的结局。', graceEn: 'Sellia Under-Stair', reachedBy: { all: [{ kind: 'boss', en: 'Malenia, Blade of Miquella' }] } },
      { region: '盖利德', location: '格威的破屋', objective: '格威的铃珠已经取得。', graceEn: 'Sellia Under-Stair', reachedBy: { all: [{ kind: 'goods', en: "Gowry's Bell Bearing" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Sorcerer Rogier',
    fallbackZh: '魔法师罗杰尔',
    summary: '调查史东薇尔地下的死根与黑刀阴谋。',
    stages: [
      { region: '史东薇尔城', location: '教堂', objective: '在城内教堂找到罗杰尔，并调查城底的巨大面孔。', graceEn: 'Rampart Tower' },
      { region: '圆桌厅堂', location: '露台', objective: '击败接肢葛瑞克后与罗杰尔讨论死根。', reachedBy: { all: [{ kind: 'boss', en: 'Godrick the Grafted' }] } },
      { region: '圆桌厅堂', location: '露台', objective: '把黑刀烙印交给罗杰尔，听他说明黑刀与菈妮的线索。', reachedBy: { all: [{ kind: 'goods', en: 'Black Knifeprint' }] } },
      { region: '湖之利耶尼亚', location: '菈妮魔法师塔与圆桌厅堂', objective: '接受菈妮的委托后回圆桌厅堂，与罗杰尔完成最后交谈。', graceEn: "Ranni's Rise", reachedBy: { all: [{ kind: 'goods', en: "Rogier's Bell Bearing" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Sorceress Sellen',
    fallbackZh: '魔法师瑟濂',
    summary: '寻找起源魔法师，并决定瑟濂与杰廉的结局。',
    stages: [
      { region: '宁姆格福', location: '驿站街遗迹地下室', objective: '击败南瓜头士兵并拜瑟濂为师。', graceEn: 'Waypoint Ruins Cellar' },
      { region: '格密尔火山', location: '“起源魔法师”亚兹勒附近', objective: '取得彗星亚兹勒后向瑟濂报告。', graceEn: 'Primeval Sorcerer Azur', reachedBy: { all: [{ kind: 'spell', en: 'Comet Azur' }] } },
      { region: '盖利德', location: '瑟利亚隐藏洞窟', objective: '找到卢瑟特并取得毁灭流星。', graceEn: 'Sellia Hideaway', reachedBy: { all: [{ kind: 'spell', en: 'Stars of Ruin' }] } },
      { region: '啜泣半岛', location: '封印魔女的废墟', objective: '取出瑟濂的源辉石，并寻找新的身体。', graceEn: 'Fourth Church of Marika', reachedBy: { all: [{ kind: 'goods', en: "Sellen's Primal Glintstone" }] } },
      { region: '魔法学院雷亚卢卡利亚', location: '大书库门外', objective: '选择协助瑟濂或杰廉。', graceEn: 'Raya Lucaria Grand Library', reachedBy: { all: [{ kind: 'boss', en: 'Starscourge Radahn' }] } },
      { region: '魔法学院雷亚卢卡利亚', location: '大书库', objective: '瑟濂的任务线已经结束。', graceEn: 'Raya Lucaria Grand Library', reachedBy: { any: [{ kind: 'armor', en: "Witch's Glintstone Crown" }, { kind: 'goods', en: "Sellen's Bell Bearing" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Thops',
    fallbackZh: '托普斯',
    summary: '帮助托普斯返回雷亚卢卡利亚学院。',
    stages: [
      { region: '湖之利耶尼亚', location: '伊利斯教堂', objective: '找到第二把学院辉石钥匙并交给托普斯。', graceEn: 'Lake-Facing Cliffs' },
      { region: '魔法学院雷亚卢卡利亚', location: '校舍内的教室外', objective: '托普斯已返回学院，留下了毕生研究。', graceEn: 'Schoolhouse Classroom', reachedBy: { all: [{ kind: 'spell', en: "Thops's Barrier" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Yura, Hunter of Bloody Fingers',
    fallbackZh: '“血指猎人”尤拉',
    summary: '沿宁姆格福、学院与亚坛追猎血指。',
    stages: [
      { region: '宁姆格福', location: '亚基尔湖南侧桥洞', objective: '与尤拉交谈，并在蒙流洞窟外共同对抗血指。', graceEn: 'Agheel Lake North' },
      { region: '湖之利耶尼亚', location: '学院正门桥上', objective: '触碰红色召唤记号，协助尤拉击败鸦山的杀手。', graceEn: 'Main Academy Gate', reachedBy: { all: [{ kind: 'boss', flagId: 1043370800 }] } },
      { region: '亚坛高原', location: '玛莉卡第二教堂', objective: '在教堂找到尤拉，并应对纯紫血指的入侵。', graceEn: 'Altus Highway Junction', reachedBy: { all: [{ kind: 'weapon', en: "Eleonora's Poleblade" }] } },
      { region: '亚坛高原', location: '玛莉卡第二教堂', objective: '尤拉的猎杀之旅已经结束。', graceEn: 'Altus Highway Junction', reachedBy: { all: [{ kind: 'weapon', en: 'Nagakiba' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'White Mask Varré',
    fallbackZh: '“白面具”梵雷',
    summary: '从引导之始前往蔷薇教堂与蒙格温王朝。',
    stages: [
      { region: '宁姆格福', location: '引导之始', objective: '与梵雷交谈，击败接肢葛瑞克后再来找他。', graceEn: 'The First Step' },
      { region: '湖之利耶尼亚', location: '蔷薇教堂', objective: '接受鲜血君王的试炼，完成入侵并染红白布。', graceEn: 'Boilprawn Shack', reachedBy: { all: [{ kind: 'boss', en: 'Godrick the Grafted' }] } },
      { region: '蒙格温王朝', location: '王朝灵庙中段', objective: '使用纯血骑士勋章前往王朝，并寻找梵雷的入侵记号。', graceEn: 'Dynasty Mausoleum Midpoint', reachedBy: { all: [{ kind: 'goods', en: "Pureblood Knight's Medal" }] } },
      { region: '蒙格温王朝', location: '王朝灵庙', objective: '梵雷的试炼已经结束。', graceEn: 'Dynasty Mausoleum Midpoint', reachedBy: { all: [{ kind: 'weapon', en: "Varré's Bouquet" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Nepheli Loux, Warrior',
    fallbackZh: '战士涅斐丽·露',
    summary: '帮助涅斐丽走出迷惘并继承宁姆格福。',
    stages: [
      { region: '史东薇尔城', location: '深处小房间', objective: '在接肢葛瑞克前找到涅斐丽并与她交谈。', graceEn: 'Secluded Cell' },
      { region: '圆桌厅堂', location: '百智爵士书房外', objective: '击败葛瑞克后与涅斐丽和百智爵士交谈。', reachedBy: { all: [{ kind: 'boss', en: 'Godrick the Grafted' }] } },
      { region: '湖之利耶尼亚', location: '白金村', objective: '在村庄入口找到涅斐丽，并击败恶兆猎人。', graceEn: 'Village of the Albinaurics', reachedBy: { all: [{ kind: 'boss', en: 'Omenkiller' }] } },
      { region: '圆桌厅堂', location: '铁匠下方', objective: '把风暴鹰古王交给涅斐丽。', reachedBy: { all: [{ kind: 'goods', en: 'The Stormhawk King' }] } },
      { region: '史东薇尔城', location: '葛瑞克的王座厅', objective: '击败恶兆王后返回王座厅，确认涅斐丽与肯尼斯的结局。', graceEn: 'Godrick the Grafted', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }, { kind: 'goods', en: 'The Stormhawk King' }] } },
    ],
  },
  {
    npcEn: 'Lightseeker Hyetta',
    fallbackZh: '“探寻灯火”海妲',
    summary: '沿利耶尼亚一路献上葡萄，最终抵达癫火封印。',
    stages: [
      { region: '湖之利耶尼亚', location: '傍湖断崖', objective: '在赐福旁找到海妲并交出夏玻利利葡萄。', graceEn: 'Lake-Facing Cliffs' },
      { region: '湖之利耶尼亚', location: '受净化的废墟与门前镇大桥', objective: '继续寻找海妲，并交出下一颗葡萄。', graceEn: 'Gate Town Bridge', reachedBy: { all: [{ kind: 'goods', en: 'Shabriri Grape' }] } },
      { region: '彼鲁姆大道', location: '彼鲁姆教堂', objective: '把指痕葡萄交给海妲并告诉她真相。', graceEn: 'Bellum Church', reachedBy: { all: [{ kind: 'goods', en: 'Fingerprint Grape' }] } },
      { region: '弃置恶兆的地底', location: '癫火封印', objective: '在三指门前再次与海妲交谈。', graceEn: 'Frenzied Flame Proscription', reachedBy: { all: [{ kind: 'boss', en: 'Mohg, the Omen' }] } },
      { region: '弃置恶兆的地底', location: '癫火封印', objective: '海妲已经成为癫火的引导者。', graceEn: 'Frenzied Flame Proscription', reachedBy: { all: [{ kind: 'weapon', en: 'Frenzied Flame Seal' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Boc the Seamster',
    fallbackZh: '裁缝师柏克',
    summary: '帮助柏克取回缝衣工具，并陪他走向王城。',
    stages: [
      { region: '宁姆格福', location: '亚基尔湖北方大道', objective: '寻找会说话的树，解除柏克身上的魔法。', graceEn: 'Agheel Lake North' },
      { region: '宁姆格福', location: '海岸洞窟', objective: '击败亚人首领并把缝衣针交还柏克。', graceEn: 'Coastal Cave', reachedBy: { all: [{ kind: 'goods', en: 'Sewing Needle' }] } },
      { region: '湖之利耶尼亚', location: '傍湖断崖', objective: '在赐福旁与迁移后的柏克交谈。', graceEn: 'Lake-Facing Cliffs', reachedBy: { all: [{ kind: 'boss', en: 'Godrick the Grafted' }] } },
      { region: '彼鲁姆大道', location: '雷亚卢卡利亚东门', objective: '取得黄金缝衣针后与柏克交谈。', graceEn: 'East Raya Lucaria Gate', reachedBy: { all: [{ kind: 'goods', en: 'Gold Sewing Needle' }] } },
      { region: '王城罗德尔', location: '王城东边城墙', objective: '在王城与柏克交谈，谨慎回应他的愿望。', graceEn: 'East Capital Rampart', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }] } },
    ],
  },
  {
    npcEn: 'Rya',
    fallbackZh: '菈雅',
    summary: '从项链委托进入火山官邸，调查菈雅的出身。',
    stages: [
      { region: '湖之利耶尼亚', location: '远眺岛东侧凉亭', objective: '帮助菈雅从煮虾子的破屋取回项链。', graceEn: 'Scenic Isle' },
      { region: '亚坛高原', location: '近黄金树的山丘', objective: '在亚坛再次找到菈雅，由她带你前往火山官邸。', graceEn: 'Erdtree-Gazing Hill', reachedBy: { all: [{ kind: 'goods', en: "Rya's Necklace" }] } },
      { region: '火山官邸', location: '客房走廊', objective: '使用客房钥匙推进官邸委托，并寻找蛇形态的菈雅。', graceEn: 'Volcano Manor', reachedBy: { any: [{ kind: 'goods', en: 'Volcano Manor Invitation' }, { kind: 'goods', en: 'Drawing-Room Key' }] } },
      { region: '火山官邸', location: '艾格蕾教堂后的密室', objective: '把蛇的羊膜交给菈雅，随后决定是否使用遗忘秘药。', graceEn: 'Temple of Eiglay', reachedBy: { all: [{ kind: 'goods', en: "Serpent's Amnion" }] } },
      { region: '火山官邸', location: '会客厅', objective: '击败拉卡德后返回官邸，确认菈雅的去向。', graceEn: 'Volcano Manor', reachedBy: { all: [{ kind: 'boss', en: 'Rykard, Lord of Blasphemy' }] } },
      { region: '火山官邸', location: '会客厅', objective: '菈雅留下了最后的谢礼。', graceEn: 'Volcano Manor', reachedBy: { all: [{ kind: 'talisman', en: "Daedicar's Woe" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Latenna the Albinauric',
    fallbackZh: '白金之子勒缇娜',
    summary: '带勒缇娜与秘密符节前往化圣雪原。',
    stages: [
      { region: '湖之利耶尼亚', location: '白金村与湖旁结晶洞窟', objective: '取得秘密符节右半部，再穿过洞窟寻找勒缇娜。', graceEn: 'Village of the Albinaurics' },
      { region: '湖之利耶尼亚', location: '眠狼的破屋', objective: '向勒缇娜展示符节并接受她的同行请求。', graceEn: "Slumbering Wolf's Shack", reachedBy: { all: [{ kind: 'goods', en: 'Haligtree Secret Medallion (Right)' }] } },
      { region: '化圣雪原', location: '离教废屋', objective: '在巨大的白金之子女性身旁召唤勒缇娜，完成她的托付。', graceEn: 'Apostate Derelict', reachedBy: { all: [{ kind: 'ash', en: 'Latenna the Albinauric' }] } },
      { region: '化圣雪原', location: '离教废屋', objective: '领取勒缇娜留下的古龙岩失色锻造石。', graceEn: 'Apostate Derelict', reachedBy: { all: [{ kind: 'goods', en: 'Somber Ancient Dragon Smithing Stone' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Knight Diallos',
    fallbackZh: '骑士狄亚罗斯',
    summary: '狄亚罗斯会从圆桌厅堂迁往学院门前镇、火山官邸与壶村。',
    stages: [
      { region: '圆桌厅堂', location: '大赐福', objective: '与狄亚罗斯交谈，听取他寻找勒妮亚的请求。' },
      { region: '湖之利耶尼亚', location: '学院门前镇', objective: '在淹没的屋顶上找到狄亚罗斯。', graceEn: 'Academy Gate Town', reachedBy: { all: [{ kind: 'boss', en: 'Godrick the Grafted' }] } },
      { region: '火山官邸', location: '会客厅', objective: '在火山官邸再次与狄亚罗斯交谈。', graceEn: 'Volcano Manor', reachedBy: { all: [{ kind: 'goods', en: 'Volcano Manor Invitation' }] } },
      { region: '湖之利耶尼亚', location: '壶村', objective: '击败拉卡德后前往壶村，多次刷新并推进狄亚罗斯与小壶的对话。', graceEn: 'Jarburg', reachedBy: { all: [{ kind: 'boss', en: 'Rykard, Lord of Blasphemy' }] } },
      { region: '湖之利耶尼亚', location: '壶村', objective: '狄亚罗斯的守护得到了壶村回应。', graceEn: 'Jarburg', reachedBy: { all: [{ kind: 'talisman', en: 'Companion Jar' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Patches',
    fallbackZh: '帕奇',
    summary: '帕奇会从蒙流洞窟迁往利耶尼亚、火山官邸与日荫城。',
    stages: [
      { region: '宁姆格福', location: '蒙流洞窟', objective: '与帕奇交战，在他求饶时停手并重新刷新洞窟。', graceEn: 'Murkwater Cave' },
      { region: '湖之利耶尼亚', location: '远眺岛', objective: '在赐福旁找到迁移后的帕奇。', graceEn: 'Scenic Isle', reachedBy: { all: [{ kind: 'boss', en: 'Godrick the Grafted' }] } },
      { region: '火山官邸', location: '会客厅与古遗迹断崖', objective: '加入官邸后接受帕奇的委托，入侵大角忒拉格斯并返回领取报酬。', graceEn: 'Volcano Manor', reachedBy: { all: [{ kind: 'goods', en: 'Volcano Manor Invitation' }] }, rewards: [{ name: '大山羊套装', kind: 'armor' }, { name: '熔岩烛台鞭', kind: 'weapon' }] },
      { region: '亚坛高原', location: '日荫城内门前', objective: '击败拉卡德后在木桥上找到帕奇。', graceEn: 'Shaded Castle Inner Gate', reachedBy: { all: [{ kind: 'boss', en: 'Rykard, Lord of Blasphemy' }] } },
      { region: '宁姆格福', location: '蒙流洞窟', objective: '把舞娘的打击乐器交给塔妮丝，并回洞窟确认帕奇的结局。', graceEn: 'Murkwater Cave', reachedBy: { all: [{ kind: 'goods', en: "Dancer's Castanets" }] } },
      { region: '宁姆格福', location: '蒙流洞窟', objective: '帕奇的铃珠已经取得。', graceEn: 'Murkwater Cave', reachedBy: { all: [{ kind: 'goods', en: "Patches' Bell Bearing" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Needle Knight Leda',
    fallbackZh: '“金针骑士”蕾妲',
    dlc: true,
    summary: '米凯拉的魅惑破碎后，蕾妲会在大道、幽影城与艾尼尔·伊利姆行动。',
    stages: [
      { region: '墓地平原', location: '三叉口的十字记号', objective: '与蕾妲和角人交谈，了解米凯拉的十字记号。', graceEn: 'Three-Path Cross' },
      { region: '幽影亚坛', location: '大道旁的十字记号', objective: '击败双月骑士后与蕾妲讨论追随者。', graceEn: 'Highroad Cross', reachedBy: { all: [{ kind: 'boss', en: 'Rellana, Twin Moon Knight' }] } },
      { region: '幽影城', location: '保藏库与正门广场', objective: '魅惑破碎后处理蕾妲、角人和安帕赫之间的选择。', graceEn: 'Storehouse, First Floor', reachedBy: { all: [{ kind: 'boss', en: 'Base Serpent Messmer' }] } },
      { region: '艾尼尔·伊利姆', location: '净身厅前室', objective: '在净身厅面对蕾妲与米凯拉的追随者。', graceEn: 'Cleansing Chamber Anteroom', reachedBy: { all: [{ kind: 'boss', flagId: 20010850 }] } },
      { region: '艾尼尔·伊利姆', location: '净身厅', objective: '蕾妲的追随已经终结。', graceEn: 'Cleansing Chamber Anteroom', reachedBy: { all: [{ kind: 'weapon', en: "Leda's Sword" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Sir Ansbach',
    fallbackZh: '老兵安帕赫',
    dlc: true,
    summary: '帮助安帕赫调查米凯拉的计划，并在终局与他并肩。',
    stages: [
      { region: '墓地平原', location: '正门前方的十字记号', objective: '与安帕赫交谈，并把发现的米凯拉十字记号告诉他。', graceEn: 'Main Gate Cross' },
      { region: '幽影城', location: '保藏库一楼', objective: '找到安帕赫，并把秘密仪式卷轴交给他。', graceEn: 'Storehouse, First Floor', reachedBy: { all: [{ kind: 'goods', en: 'Secret Rite Scroll' }] } },
      { region: '艾尼尔·伊利姆', location: '净身厅前室', objective: '在蕾妲战与最终战前寻找安帕赫的召唤记号。', graceEn: 'Cleansing Chamber Anteroom', reachedBy: { all: [{ kind: 'boss', en: 'Base Serpent Messmer' }] } },
      { region: '艾尼尔·伊利姆', location: '神之门', objective: '安帕赫已经完成最后的战斗。', graceEn: 'Gate of Divinity', reachedBy: { any: [{ kind: 'weapon', en: "Ansbach's Longbow" }, { kind: 'weapon', en: 'Obsidian Lamina' }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Thiollier',
    fallbackZh: '休里耶',
    dlc: true,
    summary: '把休里耶引向沉眠的圣女，并带他走到米凯拉的终局。',
    stages: [
      { region: '墓地平原', location: '通柱坡的十字记号', objective: '与休里耶交谈，并从穆尔处取得黑色浓浆。', graceEn: 'Pillar Path Cross' },
      { region: '石棺大洞', location: '深紫花园', objective: '找到圣女托莉娜，反复吸取花蜜并把话转告休里耶。', graceEn: 'Garden of Deep Purple', reachedBy: { all: [{ kind: 'goods', en: "Thiollier's Concoction" }] } },
      { region: '石棺大洞', location: '深紫花园', objective: '击败融泥骑士后推进休里耶与托莉娜的对话。', graceEn: 'Garden of Deep Purple', reachedBy: { all: [{ kind: 'boss', en: 'Putrescent Knight' }] } },
      { region: '艾尼尔·伊利姆', location: '净身厅前室', objective: '在蕾妲战与最终战前寻找休里耶的召唤记号。', graceEn: 'Cleansing Chamber Anteroom', reachedBy: { all: [{ kind: 'boss', flagId: 20010850 }] } },
      { region: '艾尼尔·伊利姆', location: '神之门', objective: '休里耶已经完成最后的战斗。', graceEn: 'Gate of Divinity', reachedBy: { all: [{ kind: 'weapon', en: "Thiollier's Hidden Needle" }] }, terminal: 'done' },
    ],
  },
];

const EXTRA_QUESTS: readonly QuestDef[] = [
  {
    npcEn: 'Tanith', fallbackZh: '塔妮丝', summary: '火山官邸的女主人会将三封委托、菈雅与拉卡德的结局串在一起。',
    stages: [
      { region: '火山官邸', location: '会客厅', objective: '接受塔妮丝的邀请，取得客房钥匙并阅读第一封委托信。', graceEn: 'Volcano Manor', rewards: [{ name: '客房钥匙', kind: 'key-item' }] },
      { region: '宁姆格福', location: '习战者的破屋北边', objective: '入侵古老骑士伊修托邦，返回官邸领取第一份报酬。', graceEn: "Warmaster's Shack", rewards: [{ name: '鳞片套装', kind: 'armor' }, { name: '熔岩球', kind: 'spell' }] },
      { region: '亚坛高原', location: '旧亚坛坑道附近', objective: '完成第二封委托，返回官邸领取蛇骨刀。', graceEn: 'Altus Plateau', rewards: [{ name: '蛇骨刀', kind: 'weapon' }] },
      { region: '巨人山顶', location: '离群独行者的破屋附近', objective: '完成第三封委托，取得霍斯劳花瓣鞭与霍斯劳套装。', rewards: [{ name: '霍斯劳花瓣鞭', kind: 'weapon' }, { name: '霍斯劳套装', kind: 'armor' }, { name: '掠夺浮雕坠饰', kind: 'talisman' }] },
      { region: '格密尔火山', location: '吞噬大蛇／拉卡德的遗体旁', objective: '击败拉卡德后与塔妮丝交谈；是否攻击她会改变后续取得物品。', graceEn: 'Audience Pathway', reachedBy: { all: [{ kind: 'boss', en: 'Rykard, Lord of Blasphemy' }] }, rewards: [{ name: '侧室套装', kind: 'armor', branch: '攻击塔妮丝' }, { name: '熔炉百相之喉囊', kind: 'incantation', branch: '击败塔妮丝的骑士' }, { name: '舞娘的打击乐器', kind: 'key-item', branch: '帕奇后续' }] },
    ],
  },
  {
    npcEn: 'Recusant Bernahl', fallbackZh: '贝纳尔', summary: '从习战者到火山官邸，最后在法姆·亚兹拉以入侵者身份现身。',
    stages: [
      { region: '宁姆格福', location: '习战者的破屋', objective: '与贝纳尔交谈，可购买战灰。', graceEn: "Warmaster's Shack" },
      { region: '火山官邸', location: '会客厅', objective: '加入官邸并完成塔妮丝的前两封委托，再与贝纳尔交谈。', graceEn: 'Volcano Manor' },
      { region: '火山官邸', location: '会客厅', objective: '接受贝纳尔的联手委托，取得给贝纳尔的信。', graceEn: 'Volcano Manor', rewards: [{ name: '给贝纳尔的信', kind: 'key-item' }] },
      { region: '王城罗德尔', location: '城寨一楼', objective: '与贝纳尔联合入侵“白狼战鬼”巴格莱姆与“离群魔法师”维赫勒。', graceEn: 'Fortified Manor, First Floor', rewards: [{ name: '战鬼套装', kind: 'armor' }, { name: '格密尔之怒', kind: 'spell' }] },
      { region: '逐渐崩毁的法姆·亚兹拉', location: '大桥旁', objective: '击败拉卡德后，在大桥旁应对贝纳尔的入侵。', graceEn: 'Beside the Great Bridge', reachedBy: { all: [{ kind: 'boss', en: 'Rykard, Lord of Blasphemy' }] }, rewards: [{ name: '吞世权杖', kind: 'weapon' }, { name: '亵渎兽爪', kind: 'key-item' }, { name: '聚兽套装', kind: 'armor' }] },
    ],
  },
  {
    npcEn: 'Kenneth Haight', fallbackZh: '肯尼斯·海德', summary: '海德要塞的领主在宁姆格福继承线中与涅斐丽、葛托克相连。',
    stages: [
      { region: '宁姆格福', location: '玛莉卡第三教堂西侧的断桥', objective: '与肯尼斯交谈，接受夺回海德要塞的请求。', graceEn: 'Third Church of Marika' },
      { region: '宁姆格福', location: '海德要塞深处', objective: '击败骑士长，取得战灰：鲜血斩击后向肯尼斯复命。', graceEn: 'Fort Haight West', rewards: [{ name: '战灰：鲜血斩击', kind: 'ash-of-war' }, { name: '黄铜短刀', kind: 'weapon' }] },
      { region: '史东薇尔城', location: '葛瑞克的王座厅', objective: '在涅斐丽任务完成且击败恶兆王后，见证肯尼斯拥立她为王。', graceEn: 'Godrick the Grafted', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }] } },
    ],
  },
  {
    npcEn: 'Gatekeeper Gostoc', fallbackZh: '葛托克', summary: '史东薇尔城的门卫会影响进城路线，并在涅斐丽继承后提供锻造石。',
    stages: [
      { region: '史东薇尔城', location: '正门旁小屋', objective: '与葛托克交谈，决定由正门或小路进入城内。', graceEn: 'Stormveil Main Gate' },
      { region: '史东薇尔城', location: '城墙塔与葛瑞克门口', objective: '探索城堡时留意葛托克会拾取尸体上的卢恩；击败接肢葛瑞克后与他交谈。', graceEn: 'Rampart Tower', rewards: [{ name: '生锈钥匙', kind: 'key-item' }] },
      { region: '史东薇尔城', location: '葛瑞克的王座厅', objective: '涅斐丽与肯尼斯完成继承后，葛托克会在王座厅出售古龙岩锻造石。', graceEn: 'Godrick the Grafted', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }] }, rewards: [{ name: '古龙岩锻造石', kind: 'upgrade' }] },
    ],
  },
  {
    npcEn: 'Irina and Edgar', fallbackZh: '伊蕾娜与城主艾德格', summary: '摩恩城的求援信会通往狮子混种、复仇者的破屋与海妲路线。',
    stages: [
      { region: '啜泣半岛', location: '献祭大桥', objective: '与伊蕾娜交谈，取得伊蕾娜的信。', graceEn: 'Bridge of Sacrifice' },
      { region: '啜泣半岛', location: '摩恩城东侧城墙', objective: '将信交给城主艾德格，取得牺牲细枝。', graceEn: 'Behind the Castle', rewards: [{ name: '牺牲细枝', kind: 'talisman' }] },
      { region: '啜泣半岛', location: '摩恩城Boss门口', objective: '击败狮子混种，取得剑骸大剑后向艾德格复命。', graceEn: 'Morne Moangrave', rewards: [{ name: '剑骸大剑', kind: 'weapon' }] },
      { region: '湖之利耶尼亚', location: '复仇者的破屋', objective: '在伊蕾娜遇害后应对“复仇者”艾德格的入侵，取得失乡骑士戟＋８与两个生肉丸。', graceEn: "Revenger's Shack", rewards: [{ name: '失乡骑士戟＋８', kind: 'weapon' }, { name: '生肉丸', kind: 'key-item', branch: '数量：２' }] },
    ],
  },
  {
    npcEn: 'Roderika and Hewg', fallbackZh: '罗德莉卡与修古', summary: '灵魂调律的两位伙伴会在风暴山丘、圆桌厅堂与灰城共同推进。',
    stages: [
      { region: '宁姆格福', location: '风暴山丘的破屋', objective: '与罗德莉卡交谈，取得灵魂水母的骨灰并寻找蛹群的遗物。', graceEn: 'Stormhill Shack', rewards: [{ name: '灵魂水母的骨灰', kind: 'ash' }, { name: '收拢双腿而坐', kind: 'gesture' }] },
      { region: '圆桌厅堂', location: '铁匠修古旁', objective: '在圆桌厅堂来回交谈，让罗德莉卡成为灵魂调律师。' },
      { region: '史东薇尔城', location: '接肢葛瑞克一楼', objective: '找回蛹群的遗物并向罗德莉卡复命，取得黄金种子。', graceEn: 'Rampart Tower', rewards: [{ name: '黄金种子', kind: 'upgrade' }] },
      { region: '灰城罗德尔', location: '圆桌厅堂', objective: '火焰烧树后继续与两人交谈，确认他们留在圆桌厅堂直到最后。', graceEn: 'Leyndell, Capital of Ash', reachedBy: { all: [{ kind: 'boss', en: 'Maliketh, the Black Blade' }] } },
    ],
  },
  {
    npcEn: 'Blackguard Big Boggart', fallbackZh: '流氓与食粪者', summary: '流氓的虾与食粪者的温床诅咒互相牵制，先后顺序会决定商店与掉落。',
    stages: [
      { region: '湖之利耶尼亚', location: '煮虾子的破屋', objective: '买回菈雅的项链，可购买煮熟虾子并取得“大字躺”。', graceEn: 'Boilprawn Shack', rewards: [{ name: '菈雅的项链', kind: 'key-item' }, { name: '大字躺', kind: 'gesture' }] },
      { region: '亚坛高原', location: '王城外壕沟', objective: '取得温床的诅咒后，流氓会迁至壕沟并出售煮熟蟹。不要在此之前击败食粪者。', graceEn: 'Outer Wall Phantom Tree' },
      { region: '弃置恶兆的地底', location: '食粪者监牢', objective: '食粪者会杀害流氓；若想保留商店与剧情，请先完成壕沟相关对话。', graceEn: 'Underground Roadside', rewards: [{ name: '铁球拳套', kind: 'weapon', branch: '流氓死亡后' }, { name: '流氓铁面具', kind: 'armor', branch: '流氓死亡后' }, { name: '流氓的铃珠', kind: 'key-item', branch: '流氓死亡后' }, { name: '温床的诅咒', kind: 'key-item', branch: '流氓死亡后' }] },
    ],
  },
  {
    npcEn: 'Great-Jar', fallbackZh: '巨壶', summary: '希芙拉河出口的三场红灵决斗会换来负重护符。',
    stages: [
      { region: '盖利德', location: '希芙拉河出口的竞技场', objective: '与巨壶交谈，击败三名“红符”决斗者。', graceEn: 'Deep Siofra Well', rewards: [{ name: '大壶众武护符', kind: 'talisman' }] },
    ],
  },
  {
    npcEn: 'Melina', fallbackZh: '梅琳娜（主线关联）', summary: '梅琳娜是任务线的主线锚点，她的抉择会影响柏克、罗德莉卡与癫火分支。',
    stages: [
      { region: '宁姆格福', location: '关卡前方赐福', objective: '与梅琳娜缔结协议，取得灵马哨笛并开启圆桌厅堂。', graceEn: 'Gatefront', rewards: [{ name: '灵马哨笛', kind: 'key-item' }] },
      { region: '王城罗德尔', location: '黄金树大教堂', objective: '击败恶兆王后，与梅琳娜前往巨人山顶。', graceEn: 'Erdtree Sanctuary', reachedBy: { all: [{ kind: 'boss', en: 'Morgott, the Omen King' }] } },
      { region: '巨人山顶', location: '火焰大锅', objective: '击败火焰巨人后，选择让梅琳娜献身或以癫火代替她。', graceEn: 'Forge of the Giants', reachedBy: { all: [{ kind: 'boss', en: 'Fire Giant' }] }, rewards: [{ name: '癫火圣印记', kind: 'weapon', branch: '接受三指' }] },
    ],
  },
  {
    npcEn: 'Sir Gideon Ofnir, the All-Knowing', fallbackZh: '“百智爵士”基甸·奥夫尼尔', summary: '向百智爵士汇报蒙格温王朝、圣树与玛莲妮亚的情报，换取三项祷告。',
    stages: [
      { region: '圆桌厅堂', location: '百智爵士书房', objective: '进入圆桌厅堂并与百智爵士交谈，听取五位大卢恩持有者的情报。' },
      { region: '圆桌厅堂', location: '百智爵士书房', objective: '抵达蒙格温王朝、击败“鲜血君王”蒙格，再向百智爵士汇报。', reachedBy: { all: [{ kind: 'boss', en: 'Mohg, Lord of Blood' }] }, rewards: [{ name: '因果性原理', kind: 'incantation' }] },
      { region: '圆桌厅堂', location: '百智爵士书房', objective: '取得圣树秘密符节并抵达化圣雪原后，汇报通往圣树的线索。', reachedBy: { all: [{ kind: 'goods', en: 'Haligtree Secret Medallion (Left)' }] }, rewards: [{ name: '黑焰庇佑', kind: 'incantation' }] },
      { region: '圆桌厅堂', location: '百智爵士书房', objective: '击败“米凯拉的锋刃”玛莲妮亚后，向百智爵士汇报。', reachedBy: { all: [{ kind: 'boss', en: 'Malenia, Blade of Miquella' }] }, rewards: [{ name: '王之圣防护', kind: 'incantation' }] },
      { region: '圆桌厅堂', location: '百智爵士书房', objective: '百智爵士需要的三条秘密情报已经汇报完毕。', reachedBy: { all: [{ kind: 'spell', en: "Lord's Divine Fortification" }] }, terminal: 'done' },
    ],
  },
  {
    npcEn: 'Hornsent Grandam', fallbackZh: '角人老妪', dlc: true, summary: '神兽头部、炖煮蝎子与角人支线的早期关键节点。',
    stages: [
      { region: '“塔之镇”贝瑞特', location: '小祭坛旁的仓库', objective: '取得仓库钥匙后进入仓库，与角人老妪交谈。', graceEn: 'Small Private Altar', rewards: [{ name: '仓库钥匙', kind: 'key-item' }] },
      { region: '“塔之镇”贝瑞特', location: '神兽舞台', objective: '击败神兽舞狮，取得舞狮的追忆与神兽头部。', graceEn: 'Theatre of the Divine Beast', rewards: [{ name: '舞狮的追忆', kind: 'key-item' }, { name: '神兽头部', kind: 'armor' }] },
      { region: '“塔之镇”贝瑞特', location: '仓库', objective: '戴上神兽头部向老妪交谈，取得守护灵；可重复取得炖煮蝎子交给角人。', graceEn: 'Small Private Altar', rewards: [{ name: '守护灵', kind: 'incantation' }, { name: '炖煮蝎子', kind: 'key-item' }] },
      { region: '“塔之镇”贝瑞特', location: '仓库', objective: '大卢恩破碎后继续交谈，可取得豪华炖煮蝎子。', rewards: [{ name: '豪华炖煮蝎子', kind: 'key-item' }] },
    ],
  },
  {
    npcEn: 'Hornsent', fallbackZh: '角人', dlc: true, summary: '蕾妲的处置提议、梅瑟莫与车轮战都会改变角人的去向。',
    stages: [
      { region: '墓地平原', location: '三叉口的十字记号', objective: '与角人和蕾妲交谈，取得并交付炖煮蝎子以补全早期对话。', graceEn: 'Three-Path Cross' },
      { region: '幽影亚坛', location: '大道旁的十字记号', objective: '在大卢恩破碎前处理蕾妲提出的处置角人；不做选择可保留更多剧情。', graceEn: 'Highroad Cross' },
      { region: '幽影城', location: '保藏库一楼与正门广场', objective: '在追杀安帕赫与角人的分支中作出选择；一周目建议先阅读蕾妲的注意事项。', graceEn: 'Storehouse, First Floor', reachedBy: { all: [{ kind: 'boss', en: 'Base Serpent Messmer' }] }, rewards: [{ name: '镰型刀', kind: 'weapon', branch: '协助蕾妲击败角人' }, { name: '角人套装', kind: 'armor', branch: '协助蕾妲击败角人' }, { name: '战灰：迅斩', kind: 'ash-of-war', branch: '协助角人击败蕾妲' }, { name: '蕾妲的卢恩', kind: 'key-item', branch: '协助角人击败蕾妲' }] },
      { region: '艾尼尔·伊利姆', location: '净身厅前室', objective: '车轮战中角人可能作为敌人出现；最终战前可按存活分支决定是否召唤安帕赫。', graceEn: 'Cleansing Chamber Anteroom' },
    ],
  },
  {
    npcEn: 'Moore', fallbackZh: '穆尔', dlc: true, summary: '集物虫笔记、黑色浓浆与大卢恩破碎后的三选一结局相连。',
    stages: [
      { region: '墓地平原', location: '正门前方的十字记号', objective: '初见穆尔并先与安帕赫交谈，可购买集物虫相关物品。', graceEn: 'Main Gate Cross' },
      { region: '墓地平原', location: '正门前方的十字记号', objective: '先向穆尔询问休里耶，取得黑色浓浆与集物虫的制作笔记，再交给休里耶。', rewards: [{ name: '黑色浓浆', kind: 'key-item' }, { name: '集物虫的制作笔记【７】', kind: 'key-item' }] },
      { region: '幽影亚坛', location: '六只集物虫的所在区域', objective: '依序与六只集物虫交谈，取得六份对应制作笔记；请在大卢恩破碎前完成。', rewards: [{ name: '集物虫的制作笔记【１】', kind: 'key-item' }, { name: '集物虫的制作笔记【２】', kind: 'key-item' }, { name: '集物虫的制作笔记【３】', kind: 'key-item' }, { name: '集物虫的制作笔记【４】', kind: 'key-item' }, { name: '集物虫的制作笔记【５】', kind: 'key-item' }, { name: '集物虫的制作笔记【６】', kind: 'key-item' }] },
      { region: '墓地平原', location: '正门前方的十字记号', objective: '魅惑失效后回答穆尔；“忘记就行了”“一直很伤心吧”“我不知道”会产生不同后续。', rewards: [{ name: '铜绿大盾', kind: 'weapon', branch: '穆尔死亡或车轮战后' }, { name: '铜绿套装', kind: 'armor', branch: '穆尔死亡或车轮战后' }, { name: '穆尔的铃珠', kind: 'key-item', branch: '穆尔死亡后' }] },
    ],
  },
  {
    npcEn: 'Fire Knight Queelign', fallbackZh: '“火焰骑士”昆兰', dlc: true, summary: '两次入侵、两种覆眼膜与祈祷厅的二选一奖励。',
    stages: [
      { region: '墓地平原', location: '民宅小祭坛的喷水池／圣战教堂', objective: '两处都会遭到昆兰入侵；先后顺序不限，第一次击败获得圣战徽章，第二次获得战灰与祈祷厅钥匙。', rewards: [{ name: '圣战徽章', kind: 'talisman', branch: '第一次入侵' }, { name: '战灰：火焰穿刺', kind: 'ash-of-war', branch: '第二次入侵' }, { name: '祈祷厅钥匙', kind: 'key-item', branch: '第二次入侵' }] },
      { region: '幽影城', location: '保藏库一楼与教区礼树教堂', objective: '取得两枚赐福覆眼膜与两枚黑暗覆眼膜，它们也用于尤弥尔分支。', rewards: [{ name: '赐福覆眼膜', kind: 'key-item' }, { name: '黑暗覆眼膜', kind: 'key-item' }] },
      { region: '幽影城', location: '祈祷厅', objective: '与昆兰交谈并选择覆眼膜：赐福覆眼膜会让他消失，黑暗覆眼膜会让他死亡。', graceEn: 'Prayer Room', rewards: [{ name: '“火焰骑士”昆兰', kind: 'ash', branch: '赐福覆眼膜' }, { name: '昆兰的大剑', kind: 'weapon', branch: '黑暗覆眼膜' }] },
    ],
  },
  {
    npcEn: 'Count Ymir', fallbackZh: '尤弥尔与约兰', dlc: true, summary: '手指遗迹地图与约兰的覆眼膜选择相互交织，需保留一枚覆眼膜到结尾。',
    stages: [
      { region: '利亚指头遗迹', location: '玛努斯·美特大教堂', objective: '初见尤弥尔，取得孔洞项链与第一张遗迹地图，学习米丽安的消失。', graceEn: 'Cathedral of Manus Metyr', rewards: [{ name: '孔洞项链', kind: 'key-item' }, { name: '遗迹地图', kind: 'key-item' }, { name: '米丽安的消失', kind: 'spell' }] },
      { region: '青蓝海岸', location: '利亚指头遗迹', objective: '吹响吊钟取得红种子护符＋１，回去与尤弥尔和约兰交谈。', rewards: [{ name: '红种子护符＋１', kind: 'talisman' }] },
      { region: '利亚指头遗迹', location: '利亚与迪欧指头遗迹', objective: '取得第二、三张地图，分别吹响两处吊钟，再调查尤弥尔的椅子。', rewards: [{ name: '遗迹地图（第二张）', kind: 'key-item' }, { name: '亲爱的星尘', kind: 'talisman' }, { name: '辉石指爪', kind: 'spell' }, { name: '辉石繁指爪', kind: 'spell' }, { name: '蓝种子护符＋１', kind: 'talisman' }, { name: '遗迹地图（第三张）', kind: 'key-item' }, { name: '虚幻小宇宙', kind: 'spell' }] },
      { region: '利亚指头遗迹', location: '玛努斯·美特大教堂', objective: '击败“指头之母”梅蒂尔、尤弥尔与约兰，处理覆眼膜选择并调查教堂外墓地。', graceEn: 'Cathedral of Manus Metyr', rewards: [{ name: '尤弥尔的铃珠', kind: 'key-item' }, { name: '母亲杖', kind: 'weapon' }, { name: '大祭司套装', kind: 'armor' }, { name: '“黑夜剑士”约兰', kind: 'ash', branch: '赐福覆眼膜' }, { name: '黑夜刀', kind: 'weapon', branch: '黑暗覆眼膜' }, { name: '约兰与安娜', kind: 'ash', branch: '将约兰骨灰与安娜合成' }, { name: '守护指头', kind: 'spell', branch: '任务结束后调查教堂外墓地' }] },
    ],
  },
  {
    npcEn: 'Igon and Florissax', fallbackZh: '埃贡与龙飨女巫', dlc: true, summary: '尖刺山的贝勒之战与休里耶秘药互相锁定；要收齐奖励至少需要两个周目。',
    stages: [
      { region: '墓地平原', location: '通柱坡的十字记号', objective: '不要先完成本路线；先完成休里耶的黑色浓浆与秘药流程。', graceEn: 'Pillar Path Cross', rewards: [{ name: '休里耶的秘药', kind: 'key-item', branch: '先完成休里耶前置' }] },
      { region: '尖刺山的山脚', location: '龙洞与龙洞终点', objective: '初见埃贡，穿过龙洞并沿尖刺山的山脚寻找他的留言。', graceEn: "Dragon's Pit Terminus" },
      { region: '尖刺山', location: '龙飨大祭坛', objective: '初见龙飨女巫，取得可重复领取的古龙恩泽；可在夜晚按秘药分支推进。', graceEn: 'Grand Altar of Dragon Communion', rewards: [{ name: '古龙恩泽', kind: 'key-item' }] },
      { region: '尖刺山', location: '尖刺山山顶', objective: '击败两条巨龙后与埃贡交谈，取得埃贡的勾指；在贝勒战中可召唤他。', rewards: [{ name: '埃贡的勾指', kind: 'key-item' }] },
      { region: '尖刺山', location: '贝勒的战场', objective: '击败“狂龙”贝勒后回访埃贡与龙飨女巫。两种结局的奖励不能在同一周目同时取得。', rewards: [{ name: '贝勒的心脏', kind: 'key-item' }, { name: '埃贡的大弓', kind: 'weapon' }, { name: '埃贡套装', kind: 'armor' }, { name: '埃贡的铃珠', kind: 'key-item' }, { name: '女巫心脏', kind: 'key-item', branch: '直接击败贝勒' }, { name: '花岩槌', kind: 'weapon', branch: '直接击败贝勒' }, { name: '芙柔桑克斯的龙雷', kind: 'incantation', branch: '使用休里耶的秘药' }, { name: '“古龙”芙柔桑克斯', kind: 'ash', branch: '使用休里耶的秘药' }] },
    ],
  },
  {
    npcEn: 'Dryleaf Dane', fallbackZh: '丹恩', dlc: true, summary: '丹恩的支线短而独立，但会在车轮战与花蕾圣女战中提供关键协助。',
    stages: [
      { region: '幽影亚坛', location: '大道旁的十字记号', objective: '取得修士的信与“期待切磋”动作。', graceEn: 'Highroad Cross', rewards: [{ name: '修士的信', kind: 'key-item' }, { name: '期待切磋', kind: 'gesture' }] },
      { region: '穆斯废墟', location: '瀑布边的场地', objective: '对丹恩使用“期待切磋”，切磋后取得落叶格斗术与丹恩帽子。', graceEn: 'Moorth Ruins', rewards: [{ name: '落叶格斗术', kind: 'weapon' }, { name: '丹恩帽子', kind: 'armor' }] },
      { region: '劳弗古遗迹', location: '东方的十字记号', objective: '魅惑失效后取得古遗迹十字记号旁的信、落叶圣印记与落叶套装。', rewards: [{ name: '古遗迹十字记号旁的信', kind: 'key-item' }, { name: '落叶圣印记', kind: 'weapon' }, { name: '落叶套装', kind: 'armor' }] },
      { region: '劳弗古遗迹', location: '古遗迹基地', objective: '击败梅瑟莫后取得战灰：落叶旋风脚；可在花蕾教堂召唤丹恩协助。', rewards: [{ name: '战灰：落叶旋风脚', kind: 'ash-of-war' }] },
      { region: '艾尼尔·伊利姆', location: '净身厅前室', objective: '车轮战中丹恩固定作为敌人出现，尸体可取得丹恩流踢击术。', graceEn: 'Cleansing Chamber Anteroom', rewards: [{ name: '丹恩流踢击术', kind: 'weapon' }] },
    ],
  },
  {
    npcEn: 'Redmane Freyja', fallbackZh: '红狮子弗蕾亚', dlc: true, summary: '弗蕾亚的秘密信与安帕赫的卷轴顺序决定两人的剧情与最终战支援。',
    stages: [
      { region: '墓地平原', location: '正门前方的十字记号', objective: '与弗蕾亚交谈并探索多个米凯拉的十字记号。', graceEn: 'Main Gate Cross' },
      { region: '“塔之镇”贝瑞特', location: '舞台前方', objective: '可召唤弗蕾亚协助击败神兽舞狮，返回后询问她的记忆。', graceEn: 'Theatre of the Divine Beast' },
      { region: '幽影城', location: '保藏库四楼至七楼', objective: '先取得保藏库十字记号旁的信，再与弗蕾亚和安帕赫按顺序交谈。', graceEn: 'Storehouse, Fourth Floor', rewards: [{ name: '保藏库十字记号旁的信', kind: 'key-item' }] },
      { region: '幽影城', location: '保藏库一楼', objective: '将秘密仪式卷轴交给安帕赫并取得给弗蕾亚的信；随后交给弗蕾亚。', graceEn: 'Storehouse, First Floor', rewards: [{ name: '给弗蕾亚的信', kind: 'key-item' }, { name: '黄金狮子盾', kind: 'weapon' }] },
      { region: '艾尼尔·伊利姆', location: '净身厅前室与神之门', objective: '车轮战与最终战前确认弗蕾亚、安帕赫的敌友分支；安帕赫可被召唤协助最终Boss。', graceEn: 'Cleansing Chamber Anteroom', rewards: [{ name: '弗蕾亚的大剑', kind: 'weapon', branch: '弗蕾亚结局' }, { name: '弗蕾亚套装', kind: 'armor', branch: '弗蕾亚结局' }, { name: '安帕赫的狂刃', kind: 'incantation', branch: '召唤安帕赫击败最终Boss' }, { name: '黑曜薄刀', kind: 'weapon', branch: '召唤安帕赫击败最终Boss' }] },
    ],
  },
];

const QUEST_ENRICHMENTS: ReadonlyMap<string, QuestEnrichment> = new Map<string, QuestEnrichment>([
  ['Ranni the Witch', { related: ['Blaidd the Half-Wolf', 'Preceptor Seluvis', 'Sorcerer Rogier', 'Fia, Deathbed Companion'], rewardsByStage: { 0: [{ name: '召魂铃', kind: 'key-item', branch: '夜晚在艾雷教堂初见蕾娜' }, { name: '离群野狼的骨灰', kind: 'ash', branch: '夜晚在艾雷教堂初见蕾娜' }], 1: [{ name: '猎杀指头刀', kind: 'key-item' }, { name: '卡利亚颠倒像', kind: 'key-item' }], 2: [{ name: '娇小菈妮', kind: 'key-item' }], 3: [{ name: '被丢弃的王室钥匙', kind: 'key-item' }], 4: [{ name: '暗月戒指', kind: 'key-item' }], 5: [{ name: '暗月大剑', kind: 'weapon' }, { name: '雪魔女套装', kind: 'armor' }] } }],
  ['Blaidd the Half-Wolf', { related: ['Ranni the Witch', 'Preceptor Seluvis'], rewardsByStage: { 0: [{ name: '弹指', kind: 'gesture' }], 1: [{ name: '失色锻造石【２】', kind: 'upgrade' }, { name: '卡利亚徽章', kind: 'talisman' }], 4: [{ name: '王室巨剑', kind: 'weapon' }, { name: '布莱泽套装', kind: 'armor' }, { name: '黑狼面具', kind: 'armor' }] } }],
  ['Preceptor Seluvis', { related: ['Ranni the Witch', 'Nepheli Loux, Warrior', 'Dung Eater'], warnings: ['药水的交付对象会影响涅斐丽与食粪者路线；想完整体验请先阅读各关联任务。'], relations: [{ to: 'Nepheli Loux, Warrior', kind: 'impact', note: '药水交给涅斐丽会中断她的继承线' }, { to: 'Dung Eater', kind: 'impact', note: '药水交给食粪者会获得食粪者傀儡' }], rewardsByStage: { 1: [{ name: '赛尔维斯的药水', kind: 'key-item' }], 2: [{ name: '涅斐丽·露的傀儡', kind: 'ash', branch: '交给涅斐丽' }, { name: '食粪者的傀儡', kind: 'ash', branch: '交给食粪者' }, { name: '“深眠之箭”朵罗雷丝的傀儡', kind: 'ash', branch: '交给百智爵士后购买' }], 3: [{ name: '琥珀星光', kind: 'key-item' }, { name: '琥珀色药水', kind: 'key-item' }], 4: [{ name: '赛尔维斯的铃珠', kind: 'key-item' }, { name: '魔法教授套装', kind: 'armor' }] } }],
  ['Fia, Deathbed Companion', { related: ['D, Hunter of the Dead', 'Ranni the Witch'], rewardsByStage: { 0: [{ name: '床帘恩泽', kind: 'key-item' }], 1: [{ name: '侵蚀短剑', kind: 'key-item' }, { name: 'Ｄ的铃珠', kind: 'key-item' }, { name: '菲雅风帽', kind: 'armor' }], 3: [{ name: '死王子的修复卢恩', kind: 'key-item' }, { name: '紧密孪生剑', kind: 'weapon' }, { name: '孪生套装', kind: 'armor' }] } }],
  ['D, Hunter of the Dead', { related: ['Fia, Deathbed Companion'], rewardsByStage: { 2: [{ name: '孪生铠甲', kind: 'armor' }], 3: [{ name: '紧密孪生剑', kind: 'weapon' }] } }],
  ['Dung Eater', { related: ['Blackguard Big Boggart', 'Preceptor Seluvis'], warnings: ['食粪者的壕沟步骤会杀死流氓；先完成流氓的对话和购买。'], relations: [{ to: 'Blackguard Big Boggart', kind: 'impact', note: '食粪者任务会在王城外壕沟杀死流氓' }], rewardsByStage: { 0: [{ name: '下水道监牢钥匙', kind: 'key-item' }], 3: [{ name: '忌讳诅咒的修复卢恩', kind: 'key-item', branch: '交付五个温床诅咒' }, { name: '恶兆套装', kind: 'armor', branch: '交付五个温床诅咒' }, { name: '食粪者的傀儡', kind: 'ash', branch: '赛尔维斯分支' }] } }],
  ['The Noble Goldmask', { related: ['Brother Corhyn'], rewardsByStage: { 1: [{ name: '回归性原理', kind: 'incantation' }, { name: '黄金律法全貌', kind: 'gesture' }], 3: [{ name: '完美律法的修复卢恩', kind: 'key-item' }, { name: '金面具套装', kind: 'armor' }] } }],
  ['Brother Corhyn', { related: ['The Noble Goldmask'], rewardsByStage: { 2: [{ name: '黄金律法原本', kind: 'key-item' }], 5: [{ name: '柯林的铃珠', kind: 'key-item' }, { name: '柯林长袍', kind: 'armor' }] } }],
  ['Alexander, Warrior Jar', { related: ['Knight Diallos'], rewardsByStage: { 0: [{ name: '勇者肉块', kind: 'key-item' }], 3: [{ name: '壶头罩', kind: 'armor' }], 5: [{ name: '亚历山大的碎片', kind: 'talisman' }, { name: '亚历山大的内容物', kind: 'key-item' }] } }],
  ['Millicent', { related: ['Sage Gowry'], rewardsByStage: { 0: [{ name: '纯净金针', kind: 'key-item' }], 2: [{ name: '女武神的义手', kind: 'key-item' }], 5: [{ name: '腐败翼剑徽章', kind: 'talisman', branch: '协助米莉森' }, { name: '纯净金针', kind: 'key-item', branch: '协助米莉森后回收' }, { name: '米莉森的义手', kind: 'talisman', branch: '挑战米莉森' }, { name: '米凯拉的针', kind: 'key-item', branch: '将纯净金针归还玛莲妮亚花朵' }, { name: '古龙岩失色锻造石', kind: 'upgrade', branch: '协助米莉森并击败女武神' }] } }],
  ['Sage Gowry', { related: ['Millicent'], rewardsByStage: { 3: [{ name: '格威的铃珠', kind: 'key-item' }] } }],
  ['Sorcerer Rogier', { related: ['Ranni the Witch'], rewardsByStage: { 1: [{ name: '罗杰尔刺剑＋８', kind: 'weapon' }], 2: [{ name: '黑刀烙印', kind: 'key-item' }], 3: [{ name: '罗杰尔的信', kind: 'key-item' }, { name: '罗杰尔的铃珠', kind: 'key-item' }, { name: '魔法剑士套装', kind: 'armor' }] } }],
  ['Sorceress Sellen', { related: ['Preceptor Seluvis'], rewardsByStage: { 1: [{ name: '彗星亚兹勒', kind: 'spell' }, { name: '瑟利亚封印钥匙', kind: 'key-item' }], 2: [{ name: '毁灭流星', kind: 'spell' }], 3: [{ name: '瑟濂的源辉石', kind: 'key-item' }], 4: [{ name: '辉石克力士', kind: 'weapon', branch: '协助瑟濂' }, { name: '旋飞魔砾', kind: 'spell', branch: '协助瑟濂' }, { name: '奇异骑士套装', kind: 'armor', branch: '协助瑟濂' }, { name: '古龙岩锻造石', kind: 'upgrade', branch: '协助杰廉' }, { name: '瑟濂的铃珠', kind: 'key-item', branch: '协助杰廉' }], 5: [{ name: '魔女辉石头罩', kind: 'armor' }, { name: '卢瑟特套装', kind: 'armor' }, { name: '亚兹勒套装', kind: 'armor' }] } }],
  ['Thops', { rewardsByStage: { 0: [{ name: '深具睿智', kind: 'gesture' }], 1: [{ name: '托普斯的力场', kind: 'spell' }, { name: '学院辉石杖', kind: 'weapon' }, { name: '托普斯的铃珠', kind: 'key-item' }] } }],
  ['Yura, Hunter of Bloody Fingers', { related: ['Lightseeker Hyetta'], rewardsByStage: { 1: [{ name: '逆刺', kind: 'weapon' }], 2: [{ name: '长牙', kind: 'weapon' }], 3: [{ name: '战灰：潜雾猛禽', kind: 'ash-of-war' }], 4: [{ name: '艾琉诺拉的双头刀', kind: 'weapon' }, { name: '净血结晶露滴', kind: 'key-item' }] } }],
  ['White Mask Varré', { related: ['Sir Gideon Ofnir, the All-Knowing'], rewardsByStage: { 1: [{ name: '溃烂血指', kind: 'key-item' }, { name: '鲜血君王的立誓布', kind: 'key-item' }], 2: [{ name: '血指', kind: 'key-item' }, { name: '纯血骑士勋章', kind: 'key-item' }, { name: '拍手', kind: 'gesture' }], 3: [{ name: '梵雷的花束', kind: 'weapon' }, { name: '白面具套装', kind: 'armor' }] } }],
  ['Nepheli Loux, Warrior', { related: ['Kenneth Haight', 'Gatekeeper Gostoc', 'Preceptor Seluvis', 'Sir Gideon Ofnir, the All-Knowing'], warnings: ['赛尔维斯的药水不要直接交给涅斐丽，否则她的继承线会中断。'], rewardsByStage: { 1: [{ name: '众武护符', kind: 'talisman' }], 3: [{ name: '风暴鹰古王', kind: 'key-item' }], 4: [{ name: '古龙岩锻造石', kind: 'upgrade' }] } }],
  ['Lightseeker Hyetta', { related: ['Yura, Hunter of Bloody Fingers', 'Melina'], rewardsByStage: { 0: [{ name: '夏玻利利葡萄', kind: 'key-item' }], 2: [{ name: '指痕葡萄', kind: 'key-item' }], 4: [{ name: '癫火圣印记', kind: 'weapon' }, { name: '癫火石', kind: 'key-item' }] } }],
  ['Boc the Seamster', { related: ['Melina'], warnings: ['最后请使用“你长得很好看”与柏克对话；交出泪滴幼体会使他死亡。'], rewardsByStage: { 1: [{ name: '缝衣针', kind: 'key-item' }], 3: [{ name: '黄金缝衣针', kind: 'key-item' }], 4: [{ name: '唤声泥颅“你长得很好看”', kind: 'key-item' }, { name: '吾王啊', kind: 'gesture' }] } }],
  ['Rya', { related: ['Tanith', 'Blackguard Big Boggart', 'Patches', 'Recusant Bernahl', 'Knight Diallos'], rewardsByStage: { 0: [{ name: '菈雅的项链', kind: 'key-item' }, { name: '火山官邸的邀请函', kind: 'key-item' }], 3: [{ name: '蛇的羊膜', kind: 'key-item' }, { name: '遗忘秘药', kind: 'key-item', branch: '交给菈雅' }], 5: [{ name: '狄蒂卡之祸', kind: 'talisman' }, { name: '泽菈雅丝的信', kind: 'key-item' }] } }],
  ['Latenna the Albinauric', { related: ['Sir Gideon Ofnir, the All-Knowing'], rewardsByStage: { 0: [{ name: '圣树秘密符节（右）', kind: 'key-item' }], 1: [{ name: '白金之子勒缇娜', kind: 'ash' }], 3: [{ name: '古龙岩失色锻造石', kind: 'upgrade' }] } }],
  ['Knight Diallos', { related: ['Alexander, Warrior Jar', 'Tanith', 'Rya'], rewardsByStage: { 4: [{ name: '狄亚罗斯头盔', kind: 'armor' }, { name: '霍斯劳花瓣鞭', kind: 'weapon' }, { name: '友好壶', kind: 'talisman' }] } }],
  ['Patches', { related: ['Tanith', 'Rya', 'Recusant Bernahl'], rewardsByStage: { 0: [{ name: '求饶', kind: 'gesture' }], 3: [{ name: '舞娘的打击乐器', kind: 'key-item' }], 4: [{ name: '帕奇坐姿', kind: 'gesture' }, { name: '帕奇的铃珠', kind: 'key-item' }] } }],
  ['Tanith', { related: ['Rya', 'Patches', 'Recusant Bernahl', 'Knight Diallos'], warnings: ['击败拉卡德后先完成官邸成员的对话；攻击塔妮丝会终止她与帕奇的后续。'] }],
  ['Recusant Bernahl', { related: ['Tanith', 'Rya', 'Patches'], warnings: ['火山官邸委托会与塔妮丝、菈雅和帕奇的推进互相影响；离开前请完成需要的对话。'] }],
  ['Kenneth Haight', { related: ['Nepheli Loux, Warrior', 'Gatekeeper Gostoc'] }],
  ['Gatekeeper Gostoc', { related: ['Nepheli Loux, Warrior', 'Kenneth Haight'] }],
  ['Irina and Edgar', { related: ['Lightseeker Hyetta'] }],
  ['Roderika and Hewg', { related: ['Melina'] }],
  ['Blackguard Big Boggart', { related: ['Rya', 'Dung Eater'], warnings: ['食粪者会在王城外壕沟杀死流氓；先购买需要的煮熟虾子、煮熟蟹并完成对话。'] }],
  ['Melina', { related: ['Boc the Seamster', 'Roderika and Hewg', 'Lightseeker Hyetta'], warnings: ['接受癫火会改变梅琳娜结局；若希望恢复原状，需完成米莉森路线并在法鲁姆·亚兹拉使用米凯拉的针。'] }],
  ['Sir Gideon Ofnir, the All-Knowing', { related: ['Nepheli Loux, Warrior', 'White Mask Varré', 'Latenna the Albinauric'] }],
  ['Needle Knight Leda', { related: ['Hornsent', 'Hornsent Grandam', 'Sir Ansbach', 'Redmane Freyja', 'Moore', 'Thiollier', 'Dryleaf Dane'], warnings: ['大卢恩破碎前完成能完成的早期对话；蕾妲的处置选择会连锁影响角人、安帕赫与最终车轮战。'], rewardsByStage: { 2: [{ name: '贯刺交错树', kind: 'talisman', branch: '协助蕾妲击败角人' }, { name: '回击交错树', kind: 'talisman', branch: '协助蕾妲击败安帕赫' }], 3: [{ name: '蕾妲的剑', kind: 'weapon' }, { name: '蕾妲铠甲', kind: 'armor' }] } }],
  ['Sir Ansbach', { related: ['Needle Knight Leda', 'Redmane Freyja', 'Hornsent'], warnings: ['保藏库中先与安帕赫、弗蕾亚按推荐顺序交谈，再交付秘密仪式卷轴与弗蕾亚的信。'], rewardsByStage: { 1: [{ name: '秘密仪式卷轴', kind: 'key-item' }], 2: [{ name: '安帕赫的长弓', kind: 'weapon', branch: '协助蕾妲击败安帕赫' }], 3: [{ name: '黑曜薄刀', kind: 'weapon', branch: '召唤安帕赫击败最终Boss' }, { name: '安帕赫的狂刃', kind: 'incantation', branch: '召唤安帕赫击败最终Boss' }, { name: '老翁面具', kind: 'armor', branch: '召唤安帕赫击败最终Boss' }, { name: '安帕赫套装', kind: 'armor', branch: '召唤安帕赫击败最终Boss' }] } }],
  ['Thiollier', { related: ['Moore', 'Igon and Florissax'], warnings: ['在完成埃贡与龙飨女巫前，先从穆尔取得黑色浓浆并拿到休里耶的秘药。'], rewardsByStage: { 0: [{ name: '黑色浓浆', kind: 'key-item' }], 2: [{ name: '托莉娜的微笑', kind: 'talisman' }], 4: [{ name: '休里耶的暗针', kind: 'weapon' }, { name: '休里耶套装', kind: 'armor' }, { name: '托莉娜孤花', kind: 'armor' }] } }],
  ['Hornsent Grandam', { related: ['Hornsent', 'Needle Knight Leda'] }],
  ['Hornsent', { related: ['Hornsent Grandam', 'Needle Knight Leda', 'Sir Ansbach'], warnings: ['大卢恩破碎前的选择会影响蕾妲袭击、梅瑟莫战召唤与艾尼尔·伊利姆车轮战阵容。'] }],
  ['Moore', { related: ['Thiollier', 'Needle Knight Leda'], warnings: ['六只集物虫和休里耶的黑色浓浆都应在大卢恩破碎前处理；之后的回答会锁定穆尔结局。'] }],
  ['Fire Knight Queelign', { related: ['Count Ymir'], warnings: ['覆眼膜同时用于昆兰和约兰分支；想保留两条路线的选择，请不要过早用完全部覆眼膜。'] }],
  ['Count Ymir', { related: ['Fire Knight Queelign'], warnings: ['为约兰保留一枚覆眼膜；覆眼膜决定黑夜刀或约兰骨灰，守护指头则需在任务结束后调查教堂外墓地。'] }],
  ['Igon and Florissax', { related: ['Thiollier'], warnings: ['龙飨女巫的两种终局奖励无法同一周目全拿；先取得休里耶的秘药再推进。'] }],
  ['Dryleaf Dane', { related: ['Needle Knight Leda'] }],
  ['Redmane Freyja', { related: ['Sir Ansbach', 'Needle Knight Leda'], warnings: ['保藏库内必须先完成弗蕾亚与安帕赫的信件对话，再处理蕾妲相关选择。'] }],
]);

const ALL_QUESTS: readonly QuestDef[] = [...QUESTS, ...EXTRA_QUESTS];

function idsByName(rows: readonly { id: number; name: string }[]): ReadonlyMap<string, readonly number[]> {
  const result = new Map<string, number[]>();
  for (const row of rows) {
    const values = result.get(row.name);
    if (values) values.push(row.id);
    else result.set(row.name, [row.id]);
  }
  return result;
}

const ITEM_IDS: Record<ItemSignalKind, ReadonlyMap<string, readonly number[]>> = {
  weapon: idsByName(WEAPONS),
  talisman: idsByName(TALISMANS),
  goods: idsByName(GOODS),
  armor: idsByName(ARMOR),
  ash: idsByName(SPIRIT_ASHES),
  spell: idsByName(SPELLS),
};

const graceFlagByName = new Map(GRACES.map((grace) => [grace.name, grace.flagId]));

function signalMet(
  signal: QuestSignal,
  profile: CharacterProfile,
  eventFlags: Uint8Array | undefined,
  defeatedNames: ReadonlySet<string>,
  defeatedFlags: ReadonlySet<number>,
): boolean {
  if (signal.kind === 'flag') return Boolean(eventFlags && isFlagSet(eventFlags, signal.flagId));
  if (signal.kind === 'boss') {
    if (signal.flagId !== undefined && defeatedFlags.has(signal.flagId)) return true;
    return Boolean(signal.en && defeatedNames.has(signal.en));
  }

  const ids = ITEM_IDS[signal.kind].get(signal.en) ?? [];
  const owned =
    signal.kind === 'weapon'
      ? profile.ownedWeaponBaseIds
      : signal.kind === 'talisman'
        ? profile.ownedTalismanIds
        : signal.kind === 'armor'
          ? profile.ownedArmorIds
          : profile.ownedGoodsIds;
  return ids.some((id) => owned.has(id));
}

function predicateMet(
  predicate: QuestPredicate | undefined,
  profile: CharacterProfile,
  eventFlags: Uint8Array | undefined,
  defeatedNames: ReadonlySet<string>,
  defeatedFlags: ReadonlySet<number>,
): boolean {
  if (!predicate) return false;
  const met = (signal: QuestSignal) => signalMet(signal, profile, eventFlags, defeatedNames, defeatedFlags);
  return (predicate.all?.every(met) ?? true) && (predicate.any ? predicate.any.some(met) : true);
}

const QUEST_RELATION_NOTE: Record<QuestRelationKind, string> = {
  reference: '资料收录的关联路线',
  prerequisite: '资料收录的前置条件',
  branch: '资料收录的分支选择',
  impact: '资料收录的相互影响',
  reward: '资料收录的奖励来源',
  route: '资料收录的顺路路线',
};

const QUEST_RELATION_LEVEL: Record<QuestRelationKind, QuestRelationLevel> = {
  reference: 'confirmed',
  prerequisite: 'inferred',
  branch: 'inferred',
  impact: 'inferred',
  reward: 'inferred',
  route: 'inferred',
};

export function deriveQuests(profile: CharacterProfile, eventFlags?: Uint8Array): QuestView[] {
  const defeatedRows = profile.bossRows.filter((row) => row.defeated);
  const defeatedNames = new Set(defeatedRows.flatMap((row) => (row.boss.name ? [row.boss.name] : [])));
  const defeatedFlags = new Set(defeatedRows.map((row) => row.boss.defeatFlagId));
  const npcById = new Map(ALL_QUESTS.map((quest) => [quest.npcEn, OFFICIAL_NPC_ZH[quest.npcEn] ?? quest.fallbackZh]));

  return ALL_QUESTS.map((quest) => {
    const enrichment = QUEST_ENRICHMENTS.get(quest.npcEn);
    let currentIndex = 0;
    for (let index = 1; index < quest.stages.length; index += 1) {
      if (predicateMet(quest.stages[index]?.reachedBy, profile, eventFlags, defeatedNames, defeatedFlags)) {
        currentIndex = index;
      }
    }

    const active = quest.stages[currentIndex]!;
    const status: QuestStatus = active.terminal ?? (currentIndex === 0 ? 'unstarted' : 'ongoing');
    const stages: QuestStageView[] = quest.stages.map((stage, index) => ({
      region: stage.region,
      location: stage.location,
      objective: stage.objective,
      state: index < currentIndex ? 'done' : index === currentIndex ? 'current' : index === currentIndex + 1 ? 'next' : 'later',
      mapGraceFlagId: stage.graceEn ? (graceFlagByName.get(stage.graceEn) ?? null) : null,
      rewards: stage.rewards ?? enrichment?.rewardsByStage?.[index] ?? [],
    }));

    return {
      id: quest.npcEn,
      npc: OFFICIAL_NPC_ZH[quest.npcEn] ?? quest.fallbackZh,
      dlc: quest.dlc ?? false,
      summary: quest.summary,
      status,
      currentIndex,
      current: stages[currentIndex]!,
      next: stages[currentIndex + 1] ?? null,
      stages,
      related: (enrichment?.related ?? []).flatMap((id) => {
        const npc = npcById.get(id);
        return npc ? [{ id, npc }] : [];
      }),
      relations: (enrichment?.relations ?? []).flatMap((relation) => {
        const npc = npcById.get(relation.to);
        if (!npc) return [];
        return [{
          toId: relation.to,
          toNpc: npc,
          kind: relation.kind,
          note: relation.note ?? QUEST_RELATION_NOTE[relation.kind],
          level: relation.level ?? QUEST_RELATION_LEVEL[relation.kind],
        }];
      }),
      warnings: enrichment?.warnings ?? [],
    };
  }).sort((a, b) => {
    const order: QuestStatus[] = ['ongoing', 'unstarted', 'interrupted', 'done'];
    return order.indexOf(a.status) - order.indexOf(b.status) || a.current.region.localeCompare(b.current.region, 'zh-CN');
  });
}

export function questDefinitionAudit(): { quests: number; unresolvedGraces: string[]; unresolvedSignals: string[] } {
  const unresolvedGraces = new Set<string>();
  const unresolvedSignals = new Set<string>();
  for (const quest of ALL_QUESTS) {
    for (const stage of quest.stages) {
      if (stage.graceEn && !graceFlagByName.has(stage.graceEn)) unresolvedGraces.add(stage.graceEn);
      const signals = [...(stage.reachedBy?.all ?? []), ...(stage.reachedBy?.any ?? [])];
      for (const signal of signals) {
        if (signal.kind === 'boss' || signal.kind === 'flag') continue;
        if (!ITEM_IDS[signal.kind].has(signal.en)) unresolvedSignals.add(`${signal.kind}:${signal.en}`);
      }
    }
  }
  return { quests: ALL_QUESTS.length, unresolvedGraces: [...unresolvedGraces], unresolvedSignals: [...unresolvedSignals] };
}
