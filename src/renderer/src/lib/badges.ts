/**
 * 趣味徽章引擎 — 全部基于存档里真实存在的数据推导。
 * 注:游戏存档不记录翻滚/弹反/受击等战斗行为计数,这类徽章无法从存档还原,
 * 我们用可推导的行为侧写(等级 vs 进度、死亡、探索、收集、build 倾向)代替。
 */
import type { CharacterProfile } from './derive.ts';

export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface BadgeResult {
  id: string;
  icon: string;
  name: string;
  rarity: BadgeRarity;
  desc: string;
  earned: boolean;
  detail: string | null;
}

interface BadgeDef {
  id: string;
  icon: string;
  name: string;
  rarity: BadgeRarity;
  desc: string;
  test: (p: CharacterProfile) => { earned: boolean; detail?: string };
}

const h = (n: number) => n.toFixed(1);

function defeatedByName(p: CharacterProfile, en: string): boolean {
  return p.bossRows.some((row) => row.boss.name === en && row.defeated);
}

const BADGES: BadgeDef[] = [
  {
    id: 'shilipo',
    icon: '⚔️',
    name: '十里坡剑神',
    rarity: 'legendary',
    desc: '等级高得离谱,讨伐的 Boss 却屈指可数——你在低级野怪身上磨出了传说。',
    test: (p) => ({
      earned: p.level >= 70 && p.bossesDefeated < 10,
      detail: `等级 ${p.level},Boss 击杀仅 ${p.bossesDefeated} 个`,
    }),
  },
  {
    id: 'unbowed',
    icon: '💀',
    name: '不屈的褪色者',
    rarity: 'epic',
    desc: '死亡 500 次以上仍未放弃。碑文会记住每一次"YOU DIED"。',
    test: (p) => ({ earned: p.deaths >= 500, detail: `死亡 ${p.deaths} 次` }),
  },
  {
    id: 'deathless-soul',
    icon: '🧘',
    name: '心如止水',
    rarity: 'legendary',
    desc: '讨伐超过 30 名 Boss,死亡却不足 50 次——冷静得可怕。',
    test: (p) => ({
      earned: p.bossesDefeated >= 30 && p.deaths < 50,
      detail: `${p.bossesDefeated} 个 Boss / 仅 ${p.deaths} 次死亡`,
    }),
  },
  {
    id: 'liver-lord',
    icon: '🕰️',
    name: '肝到天明',
    rarity: 'epic',
    desc: '单角色游玩超过 150 小时。交界地就是第二个家。',
    test: (p) => ({ earned: p.hoursPlayed >= 150, detail: `已游玩 ${h(p.hoursPlayed)} 小时` }),
  },
  {
    id: 'speed-lord',
    icon: '🌠',
    name: '神行褪色者',
    rarity: 'legendary',
    desc: '不到 20 小时就讨伐了艾尔登之兽。传说中的速通体质。',
    test: (p) => ({
      earned: p.hoursPlayed < 20 && defeatedByName(p, 'Elden Beast'),
      detail: `${h(p.hoursPlayed)} 小时通关`,
    }),
  },
  {
    id: 'rune-tycoon',
    icon: '💰',
    name: '卢恩大富翁',
    rarity: 'epic',
    desc: '累计获得超过 1 亿卢恩。玛莉卡见了都要眨眼。',
    test: (p) => ({
      earned: p.runesMemory >= 100_000_000,
      detail: `累计 ${(p.runesMemory / 100_000_000).toFixed(2)} 亿卢恩`,
    }),
  },
  {
    id: 'rune-rich',
    icon: '🪙',
    name: '小有积蓄',
    rarity: 'rare',
    desc: '累计获得超过 1000 万卢恩。',
    test: (p) => ({
      earned: p.runesMemory >= 10_000_000,
      detail: `累计 ${(p.runesMemory / 10_000).toFixed(0)} 万卢恩`,
    }),
  },
  {
    id: 'step-king',
    icon: '👟',
    name: '微信步数之王',
    rarity: 'epic',
    desc: '点亮 300 处以上赐福。交界地的每一条路都有你的脚印(和马蹄印)。',
    test: (p) => ({ earned: p.gracesLit >= 300, detail: `已点亮 ${p.gracesLit} 处赐福` }),
  },
  {
    id: 'cartographer',
    icon: '🗺️',
    name: '交界地测绘师',
    rarity: 'rare',
    desc: '解锁 250 个以上地图区块,探索率惊人。',
    test: (p) => ({ earned: p.regionsUnlocked >= 250, detail: `${p.regionsUnlocked} 个区块` }),
  },
  {
    id: 'flask-lord',
    icon: '🍶',
    name: '超级药罐子',
    rarity: 'rare',
    desc: '圣杯瓶接近满配——黄金种子和圣杯露滴一个没落下。',
    test: (p) => ({
      earned: p.flasks.crimson + p.flasks.cerulean >= 13,
      detail: `红瓶 ${p.flasks.crimson} + 蓝瓶 ${p.flasks.cerulean}`,
    }),
  },
  {
    id: 'valkyrie-slayer',
    icon: '🌸',
    name: '女武神终结者',
    rarity: 'legendary',
    desc: '击败了"米凯拉的锋刃"玛莲妮亚。我从未见过如此坚韧的褪色者。',
    test: (p) => ({ earned: defeatedByName(p, 'Malenia, Blade of Miquella') }),
  },
  {
    id: 'god-slayer',
    icon: '👑',
    name: '弑神之路',
    rarity: 'epic',
    desc: '讨伐 100 名以上 Boss。诸神的黄昏由你执笔。',
    test: (p) => ({ earned: p.bossesDefeated >= 100, detail: `${p.bossesDefeated} 个 Boss` }),
  },
  {
    id: 'boss-sweeper',
    icon: '🏆',
    name: '讨伐名录·大满贯',
    rarity: 'legendary',
    desc: '几乎清空了整张 Boss 名录(≥95%)。',
    test: (p) => ({
      earned: p.bossesDefeated / p.bossTotal >= 0.95,
      detail: `${p.bossesDefeated}/${p.bossTotal}`,
    }),
  },
  {
    id: 'glass-cannon',
    icon: '💥',
    name: '玻璃大炮',
    rarity: 'legendary',
    desc: '生命力不超过 20 点却讨伐了 20 名以上 Boss。一触即碎,一击致命。',
    test: (p) => ({
      earned: p.stats.vig <= 20 && p.bossesDefeated >= 20,
      detail: `生命力 ${p.stats.vig} / ${p.bossesDefeated} 个 Boss`,
    }),
  },
  {
    id: 'scholar',
    icon: '🔮',
    name: '雷亚卢卡利亚首席',
    rarity: 'rare',
    desc: '智力堆到 60 以上。满月的奥秘尽在掌握。',
    test: (p) => ({ earned: p.stats.int >= 60, detail: `智力 ${p.stats.int}` }),
  },
  {
    id: 'strongman',
    icon: '🦍',
    name: '巨人级臂力',
    rarity: 'rare',
    desc: '力气堆到 60 以上。大剑就该双手抡圆了砸。',
    test: (p) => ({ earned: p.stats.str >= 60, detail: `力气 ${p.stats.str}` }),
  },
  {
    id: 'blade-dancer',
    icon: '🌪️',
    name: '剑舞者',
    rarity: 'rare',
    desc: '灵巧堆到 60 以上。出手快过残影。',
    test: (p) => ({ earned: p.stats.dex >= 60, detail: `灵巧 ${p.stats.dex}` }),
  },
  {
    id: 'faithful',
    icon: '✨',
    name: '黄金律法忠实信徒',
    rarity: 'rare',
    desc: '信仰堆到 60 以上。祷告即是力量。',
    test: (p) => ({ earned: p.stats.fai >= 60, detail: `信仰 ${p.stats.fai}` }),
  },
  {
    id: 'occultist',
    icon: '🩸',
    name: '血之奥义',
    rarity: 'rare',
    desc: '感应堆到 60 以上。出血,还是出血。',
    test: (p) => ({ earned: p.stats.arc >= 60, detail: `感应 ${p.stats.arc}` }),
  },
  {
    id: 'all-rounder',
    icon: '⚖️',
    name: '八边形战士',
    rarity: 'epic',
    desc: '所有属性均不低于 30。没有短板就是最大的长板。',
    test: (p) => {
      const s = p.stats;
      const min = Math.min(s.vig, s.mnd, s.end, s.str, s.dex, s.int, s.fai, s.arc);
      return { earned: min >= 30, detail: `最低属性 ${min}` };
    },
  },
  {
    id: 'arsenal',
    icon: '🗡️',
    name: '武器库管理员',
    rarity: 'rare',
    desc: '收集 60 种以上武器。每一把都想练,每一把都没练。',
    test: (p) => ({ earned: p.ownedWeaponBaseIds.size >= 60, detail: `${p.ownedWeaponBaseIds.size} 种武器` }),
  },
  {
    id: 'fashion-souls',
    icon: '🎭',
    name: '时装之魂',
    rarity: 'rare',
    desc: '收集 120 件以上防具。变强?不,变好看。',
    test: (p) => ({ earned: p.ownedArmorIds.size >= 120, detail: `${p.ownedArmorIds.size} 件防具` }),
  },
  {
    id: 'librarian',
    icon: '📖',
    name: '法术图书馆',
    rarity: 'rare',
    desc: '收集 40 个以上魔法与祷告。',
    test: (p) => ({ earned: p.spellsKnown >= 40, detail: `${p.spellsKnown} 个法术` }),
  },
  {
    id: 'necromancer',
    icon: '🫙',
    name: '骨灰收藏家',
    rarity: 'rare',
    desc: '收集 30 个以上骨灰。你不是一个人在战斗。',
    test: (p) => ({ earned: p.spiritAshesOwned >= 30, detail: `${p.spiritAshesOwned} 个骨灰` }),
  },
  {
    id: 'social-butterfly',
    icon: '🙇',
    name: '交界地社交达人',
    rarity: 'common',
    desc: '解锁 40 个以上手势。见谁都能比划两下。',
    test: (p) => ({ earned: p.gesturesUnlocked >= 40, detail: `${p.gesturesUnlocked} 个手势` }),
  },
  {
    id: 'dlc-pioneer',
    icon: '🌒',
    name: '幽影之地开拓者',
    rarity: 'epic',
    desc: '踏入了幽影之地。米凯拉在前方等你。',
    test: (p) => ({ earned: p.dlcEntered }),
  },
  {
    id: 'night-and-flame',
    icon: '🌙',
    name: '夜与火的传人',
    rarity: 'epic',
    desc: '持有"夜与火之剑"。一手星星,一手烈焰。',
    test: (p) => ({ earned: p.ownedWeaponBaseIds.has(2140000) }),
  },
  {
    id: 'lost-runes',
    icon: '🩹',
    name: '血迹上的巨款',
    rarity: 'common',
    desc: '地上躺着超过 5 万卢恩的血迹还没捡。快去,别再死了。',
    test: (p) => ({
      earned: p.bloodstainRunes >= 50_000,
      detail: `${p.bloodstainRunes.toLocaleString('zh-CN')} 卢恩待回收`,
    }),
  },
  {
    id: 'torrent-mourner',
    icon: '🐎',
    name: '对不起,托雷特',
    rarity: 'common',
    desc: '存档时灵马处于阵亡状态。它为你挡下了最后一击。',
    test: (p) => ({ earned: p.horseDead }),
  },
  {
    id: 'elden-lord',
    icon: '🌅',
    name: '王的候补者',
    rarity: 'legendary',
    desc: '讨伐了艾尔登之兽。无论选择哪个结局,你都走完了这条路。',
    test: (p) => ({ earned: defeatedByName(p, 'Elden Beast') }),
  },
  {
    id: 'rune-bearer',
    icon: '◈',
    name: '命定之王',
    rarity: 'epic',
    desc: '集齐七枚大卢恩。诸王的力量在你手中。',
    test: (p) => {
      const owned = p.greatRunes.filter((r) => r.owned).length;
      return { earned: owned >= 7, detail: `${owned}/7 枚` };
    },
  },
  {
    id: 'dragon-hunter',
    icon: '🐉',
    name: '屠龙志',
    rarity: 'rare',
    desc: '讨伐 8 个以上龙类强敌。古龙的时代由你终结。',
    test: (p) => {
      const count = p.bossRows.filter(
        (r) => r.defeated && r.boss.name && /Dragon|Wyrm|Drake/i.test(r.boss.name),
      ).length;
      return { earned: count >= 8, detail: `${count} 条龙` };
    },
  },
  {
    id: 'catacomb-clearer',
    icon: '🕯️',
    name: '地底清道夫',
    rarity: 'epic',
    desc: '扫荡 25 个以上地下墓地/洞窟/坑道的强敌。阴暗角落无一幸免。',
    test: (p) => {
      const count = p.bossRows.filter(
        (r) => r.defeated && /^m3[012]/.test(r.boss.mapId),
      ).length;
      return { earned: count >= 25, detail: `${count} 个地底强敌` };
    },
  },
  {
    id: 'nightfolk',
    icon: '🌌',
    name: '永恒之城访客',
    rarity: 'common',
    desc: '在诺克隆恩或诺克史黛拉点亮过赐福。见过地底的星空。',
    test: (p) => ({
      earned: p.graceRows.some(
        (g) => g.lit && (g.grace.region === 'Nokron, Eternal City' || g.grace.region === 'Nokstella, Eternal City'),
      ),
    }),
  },
  {
    id: 'physick-mixer',
    icon: '⚗️',
    name: '调香师',
    rarity: 'common',
    desc: '调香瓶配了两滴结晶泪滴。开战前先干一口。',
    test: (p) => ({ earned: p.equipment.physick.length >= 2 }),
  },
  {
    id: 'no-death-run',
    icon: '🌟',
    name: '完美褪色者',
    rarity: 'legendary',
    desc: '讨伐 10 名以上 Boss 且死亡为零。无上意志亲自引导的存在。',
    test: (p) => ({ earned: p.deaths === 0 && p.bossesDefeated >= 10, detail: `${p.bossesDefeated} 个 Boss / 0 死亡` }),
  },
  {
    id: 'hoarder',
    icon: '📦',
    name: '仓鼠症候群',
    rarity: 'common',
    desc: '随身与仓库物品总数超过 3000。万一以后用得上呢?',
    test: (p) => {
      const total = p.inventory.reduce((n, row) => n + row.quantity, 0);
      return { earned: total >= 3000, detail: `${total.toLocaleString('zh-CN')} 件` };
    },
  },
];

export function deriveBadges(profile: CharacterProfile): BadgeResult[] {
  return BADGES.map((def) => {
    const { earned, detail } = def.test(profile);
    return {
      id: def.id,
      icon: def.icon,
      name: def.name,
      rarity: def.rarity,
      desc: def.desc,
      earned,
      detail: earned ? (detail ?? null) : null,
    };
  }).sort((a, b) => {
    if (a.earned !== b.earned) return a.earned ? -1 : 1;
    const order: BadgeRarity[] = ['legendary', 'epic', 'rare', 'common'];
    return order.indexOf(a.rarity) - order.indexOf(b.rarity);
  });
}
