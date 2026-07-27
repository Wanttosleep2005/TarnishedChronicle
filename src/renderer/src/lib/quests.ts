import { ARMOR } from '../data/generated/armor.ts';
import { GOODS } from '../data/generated/goods.ts';
import { GRACES } from '../data/generated/graces.ts';
import { SPELLS } from '../data/generated/spells.ts';
import { SPIRIT_ASHES } from '../data/generated/spirit-ashes.ts';
import { TALISMANS } from '../data/generated/talismans.ts';
import { WEAPONS } from '../data/generated/weapons.ts';
import { OFFICIAL_NPC_ZH } from '../data/zh/official-names.generated.ts';
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
  terminal?: 'done' | 'interrupted';
}

interface QuestDef {
  npcEn: string;
  fallbackZh: string;
  dlc?: boolean;
  summary: string;
  stages: readonly QuestStageDef[];
}

export type QuestStatus = 'done' | 'ongoing' | 'unstarted' | 'interrupted';
export type QuestStageState = 'done' | 'current' | 'next' | 'later';

export interface QuestStageView {
  region: string;
  location: string;
  objective: string;
  state: QuestStageState;
  mapGraceFlagId: number | null;
}

export interface QuestView {
  npc: string;
  dlc: boolean;
  summary: string;
  status: QuestStatus;
  currentIndex: number;
  current: QuestStageView;
  next: QuestStageView | null;
  stages: readonly QuestStageView[];
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
      { region: '深根底层', location: '死王子宝座', objective: '在菲雅任务结束后回收孪生铠甲与分离式大剑。', graceEn: "Prince of Death's Throne", reachedBy: { all: [{ kind: 'weapon', en: 'Inseparable Sword' }] }, terminal: 'done' },
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
      { region: '湖之利耶尼亚', location: '菈妮魔法师塔', objective: '把黑刀烙印交给罗杰尔，并追查菈妮的线索。', graceEn: "Ranni's Rise", reachedBy: { all: [{ kind: 'goods', en: 'Black Knifeprint' }] } },
      { region: '圆桌厅堂', location: '露台', objective: '罗杰尔已经长眠。', reachedBy: { all: [{ kind: 'goods', en: "Rogier's Bell Bearing" }] }, terminal: 'done' },
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
      { region: '化圣雪原', location: '离教废屋', objective: '带勒缇娜前往巨大的白金之子女性身旁。', graceEn: 'Apostate Derelict', reachedBy: { all: [{ kind: 'ash', en: 'Latenna the Albinauric' }] } },
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
      { region: '火山官邸', location: '入口走廊', objective: '加入官邸后接受帕奇的委托。', graceEn: 'Volcano Manor', reachedBy: { all: [{ kind: 'goods', en: 'Volcano Manor Invitation' }] } },
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

export function deriveQuests(profile: CharacterProfile, eventFlags?: Uint8Array): QuestView[] {
  const defeatedRows = profile.bossRows.filter((row) => row.defeated);
  const defeatedNames = new Set(defeatedRows.flatMap((row) => (row.boss.name ? [row.boss.name] : [])));
  const defeatedFlags = new Set(defeatedRows.map((row) => row.boss.defeatFlagId));

  return QUESTS.map((quest) => {
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
    }));

    return {
      npc: OFFICIAL_NPC_ZH[quest.npcEn] ?? quest.fallbackZh,
      dlc: quest.dlc ?? false,
      summary: quest.summary,
      status,
      currentIndex,
      current: stages[currentIndex]!,
      next: stages[currentIndex + 1] ?? null,
      stages,
    };
  }).sort((a, b) => {
    const order: QuestStatus[] = ['ongoing', 'unstarted', 'interrupted', 'done'];
    return order.indexOf(a.status) - order.indexOf(b.status) || a.current.region.localeCompare(b.current.region, 'zh-CN');
  });
}

export function questDefinitionAudit(): { quests: number; unresolvedGraces: string[]; unresolvedSignals: string[] } {
  const unresolvedGraces = new Set<string>();
  const unresolvedSignals = new Set<string>();
  for (const quest of QUESTS) {
    for (const stage of quest.stages) {
      if (stage.graceEn && !graceFlagByName.has(stage.graceEn)) unresolvedGraces.add(stage.graceEn);
      const signals = [...(stage.reachedBy?.all ?? []), ...(stage.reachedBy?.any ?? [])];
      for (const signal of signals) {
        if (signal.kind === 'boss' || signal.kind === 'flag') continue;
        if (!ITEM_IDS[signal.kind].has(signal.en)) unresolvedSignals.add(`${signal.kind}:${signal.en}`);
      }
    }
  }
  return { quests: QUESTS.length, unresolvedGraces: [...unresolvedGraces], unresolvedSignals: [...unresolvedSignals] };
}
