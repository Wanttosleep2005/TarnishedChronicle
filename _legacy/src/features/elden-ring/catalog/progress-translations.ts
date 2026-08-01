import {
  BOSS_TRANSLATIONS as generatedBossTranslations,
  PLACE_TRANSLATIONS as generatedPlaceTranslations
} from './progress-translations.generated.js'

const BOSS_OVERRIDES: Readonly<Record<string, string>> = {
  'Dragonkin Soldier (Lake of Rot)': '腐败湖的龙人士兵',
  'Valiant Gargoyles': '英雄石像鬼',
  'Dragonkin Soldier (Siofra River)': '希芙拉河的龙人士兵',
  "Fia's Champions": '菲雅的英雄',
  'Godskin Duo': '神皮双人组',
  'Abductor Virgins': '掳人少女人偶',
  'Soldier of Godrick': '葛瑞克的士兵',
  'Spirit-Caller Snail': '唤灵蜗牛',
  'Red Wolf of the Champion': '英雄的红狼',
  'Erdtree Burial Watchdog Duo': '归树看门犬',
  'Putrid Grave Warden Duelist': '腐败守墓斗士',
  'Bloodhound Knight': '猎犬骑士',
  'Crystalian Duo': '结晶人',
  'Kindred of Rot Duo': '腐败眷属',
  'Beastman of Farum Azula Duo': '法姆・亚兹拉的兽人',
  'Putrid Crystalian Trio': '腐败结晶人',
  'Demi-Human Chiefs': '亚人首领',
  'Black Knife Assassin (Sage\'s Cave)': '黑刀刺客',
  'Cleanrot Knight Duo': '玛莲妮亚的尊腐骑士',
  'Frenzied Duelist': '发狂斗士',
  'Fell Twins': '恶兆孪生子',
  'Erdtree Avatar (SW)': '黄金树的化身',
  'Erdtree Avatar (NE)': '黄金树的化身',
  'Godefroy the Grafted': '“接肢”葛孚亚',
  'Black Knife Assassin (Sainted Hero\'s Grave)': '黑刀刺客',
  'Tree Sentinel Duo': '大树守卫',
  'Mad Pumpkin Head Duo': '发狂南瓜头士兵',
  'Nox Swordstress & Nox Priest': '诺克斯剑士、诺克斯修士',
  'Crucible Knight & Misbegotten Warrior': '熔炉骑士、混种战士',
  'Tree Sentinel (Ambush)': '大树守卫',
  'Tree Sentinel (Exposed)': '大树守卫',
  'Jagged Peak Drake Duo': '尖刺山的飞龙'
}

const PLACE_OVERRIDES: Readonly<Record<string, string>> = {
  'Gateside Chamber': '关卡前方',
  'Consecrated Snowfield Catacombs': '化圣雪原地下墓地',
  "Spiritcaller's Cave": '唤灵洞窟',
  Tombsward: '墓地平原',
  'Behind the Castle': '城寨后方',
  'Beside the Rampart Gaol': '城墙牢狱旁',
  'Fallen Ruins of the Lake': '湖之落下遗迹',
  'Behind Caria Manor': '卡利亚城寨后方',
  'Chamber Outside the Plaza': '广场外',
  "Giant's Gravepost": '巨人墓碑'
}

export const BOSS_TRANSLATIONS: Readonly<Record<string, string>> = {
  ...generatedBossTranslations,
  ...BOSS_OVERRIDES
}

export const PLACE_TRANSLATIONS: Readonly<Record<string, string>> = {
  ...generatedPlaceTranslations,
  ...PLACE_OVERRIDES
}

export function readableProgressTranslation(value: string | undefined): string | undefined {
  if (!value || value.includes('?')) return undefined
  return value
}
