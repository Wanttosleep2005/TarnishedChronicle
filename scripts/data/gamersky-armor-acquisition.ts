// @generated from the acquisition images in Gamersky's Chinese armor guide.

export interface GamerskyArmorAcquisitionRecord {
  readonly itemId: number;
  readonly sourceKind: 'shop' | 'enemy' | 'quest' | 'map' | 'other';
  readonly summary: string;
  readonly sourceTitle: string;
  readonly sourceUrl: string;
  readonly verification?: 'OCR原图提取' | '用户补充图片提取' | '同页资料补全';
}

const USER_IMAGE_SOURCE = {
  sourceTitle: '用户补充图片：游民星空《艾尔登法环》防具图鉴',
  sourceUrl: 'https://www.gamersky.com/handbook/202204/1475060_3.shtml',
} as const;

export const GAMERSKY_ARMOR_ACQUISITION: Readonly<Record<string, GamerskyArmorAcquisitionRecord>> = {
  "armor:1800000": {
    "itemId": 1800000,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞或红狮子城中的【红狮子骑士】有小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml"
  },
  "armor:1800100": {
    "itemId": 1800100,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞中的【红狮子骑士】有小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml"
  },
  "armor:1801100": {
    "itemId": 1801100,
    "sourceKind": "map",
    "summary": "在赐福点调整红狮子骑士铠甲",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml"
  },
  "armor:1800200": {
    "itemId": 1800200,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞中的【红狮子骑士】有小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml"
  },
  "armor:1800300": {
    "itemId": 1800300,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞或红狮子城中的【红狮子骑士】有小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml"
  },
  "armor:870000": {
    "itemId": 870000,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml"
  },
  "armor:870100": {
    "itemId": 870100,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml"
  },
  "armor:870200": {
    "itemId": 870200,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml"
  },
  "armor:870300": {
    "itemId": 870300,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml"
  },
  "armor:581000": {
    "itemId": 581000,
    "sourceKind": "quest",
    "summary": "瑟濂支线，选择协助瑟濂，之后可以在亚坛高原格密尔火山的亚兹勒所在位置拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：亚兹勒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml"
  },
  "armor:581100": {
    "itemId": 581100,
    "sourceKind": "quest",
    "summary": "瑟濂支线，选择协助瑟濂，之后可以在亚坛高原格密尔火山的亚兹勒所在位置拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：亚兹勒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml"
  },
  "armor:581200": {
    "itemId": 581200,
    "sourceKind": "quest",
    "summary": "瑟濂支线，选择协助瑟濂，之后可以在亚坛高原格密尔火山的亚兹勒所在位置拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：亚兹勒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml"
  },
  "armor:120000": {
    "itemId": 120000,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml"
  },
  "armor:121000": {
    "itemId": 121000,
    "sourceKind": "enemy",
    "summary": "可以通过在赐福调整衣服来更换轻装，需要使用缝纫工具（需要击败宁姆格福海岸洞窟的首领）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml"
  },
  "armor:120100": {
    "itemId": 120100,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml"
  },
  "armor:121100": {
    "itemId": 121100,
    "sourceKind": "enemy",
    "summary": "可以通过在赐福调整衣服来更换轻装，需要使用缝纫工具（需要击败宁姆格福海岸洞窟的首领）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml"
  },
  "armor:120200": {
    "itemId": 120200,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml"
  },
  "armor:120300": {
    "itemId": 120300,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml"
  },
  "armor:260000": {
    "itemId": 260000,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml"
  },
  "armor:260100": {
    "itemId": 260100,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml"
  },
  "armor:260200": {
    "itemId": 260200,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml"
  },
  "armor:260300": {
    "itemId": 260300,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml"
  },
  "armor:1000000": {
    "itemId": 1000000,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml"
  },
  "armor:1000100": {
    "itemId": 1000100,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml"
  },
  "armor:1000200": {
    "itemId": 1000200,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml"
  },
  "armor:1000300": {
    "itemId": 1000300,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml"
  },
  "armor:1890000": {
    "itemId": 1890000,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原王城罗德尔的恶兆猎人掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml"
  },
  "armor:1890100": {
    "itemId": 1890100,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原调香师废墟中的恶兆猎人（拿着2棍棒的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml"
  },
  "armor:1890200": {
    "itemId": 1890200,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原调香师废墟中的恶兆猎人（拿着2棍棒的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml"
  },
  "armor:1890300": {
    "itemId": 1890300,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原调香师废墟中的恶兆猎人（拿着2棍棒的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml"
  },
  "armor:460000": {
    "itemId": 460000,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml"
  },
  "armor:460100": {
    "itemId": 460100,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml"
  },
  "armor:461100": {
    "itemId": 461100,
    "sourceKind": "map",
    "summary": "在赐福点调整（需要黄金裁缝工具，可在湖之利耶尼亚的结缘教堂宝箱中获得）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml"
  },
  "armor:460200": {
    "itemId": 460200,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml"
  },
  "armor:460300": {
    "itemId": 460300,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml"
  },
  "armor:140000": {
    "itemId": 140000,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml"
  },
  "armor:140100": {
    "itemId": 140100,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml"
  },
  "armor:140200": {
    "itemId": 140200,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml"
  },
  "armor:140300": {
    "itemId": 140300,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml"
  },
  "armor:1780000": {
    "itemId": 1780000,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml"
  },
  "armor:1780100": {
    "itemId": 1780100,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml"
  },
  "armor:1781100": {
    "itemId": 1781100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml"
  },
  "armor:1780200": {
    "itemId": 1780200,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml"
  },
  "armor:1780300": {
    "itemId": 1780300,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml"
  },
  "armor:530000": {
    "itemId": 530000,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml"
  },
  "armor:530100": {
    "itemId": 530100,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml"
  },
  "armor:530200": {
    "itemId": 530200,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml"
  },
  "armor:740300": {
    "itemId": 740300,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml"
  },
  "armor:520000": {
    "itemId": 520000,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml"
  },
  "armor:520100": {
    "itemId": 520100,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml"
  },
  "armor:520200": {
    "itemId": 520200,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml"
  },
  "armor:520300": {
    "itemId": 520300,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml"
  },
  "armor:980000": {
    "itemId": 980000,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml"
  },
  "armor:980100": {
    "itemId": 980100,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml"
  },
  "armor:981100": {
    "itemId": 981100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml"
  },
  "armor:980200": {
    "itemId": 980200,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml"
  },
  "armor:980300": {
    "itemId": 980300,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml"
  },
  "armor:940000": {
    "itemId": 940000,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml"
  },
  "armor:941000": {
    "itemId": 941000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml"
  },
  "armor:940100": {
    "itemId": 940100,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml"
  },
  "armor:940200": {
    "itemId": 940200,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml"
  },
  "armor:940300": {
    "itemId": 940300,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml"
  },
  "armor:340000": {
    "itemId": 340000,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml"
  },
  "armor:341000": {
    "itemId": 341000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml"
  },
  "armor:340100": {
    "itemId": 340100,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml"
  },
  "armor:341100": {
    "itemId": 341100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml"
  },
  "armor:340200": {
    "itemId": 340200,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml"
  },
  "armor:340300": {
    "itemId": 340300,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml"
  },
  "armor:1760000": {
    "itemId": 1760000,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml"
  },
  "armor:1760100": {
    "itemId": 1760100,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml"
  },
  "armor:1761100": {
    "itemId": 1761100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml"
  },
  "armor:1760200": {
    "itemId": 1760200,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml"
  },
  "armor:1760300": {
    "itemId": 1760300,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml"
  },
  "armor:351000": {
    "itemId": 351000,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml"
  },
  "armor:351100": {
    "itemId": 351100,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml"
  },
  "armor:351200": {
    "itemId": 351200,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml"
  },
  "armor:351300": {
    "itemId": 351300,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml"
  },
  "armor:1770000": {
    "itemId": 1770000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml"
  },
  "armor:1770100": {
    "itemId": 1770100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml"
  },
  "armor:1771100": {
    "itemId": 1771100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml"
  },
  "armor:1770200": {
    "itemId": 1770200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml"
  },
  "armor:1770300": {
    "itemId": 1770300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml"
  },
  "armor:1700000": {
    "itemId": 1700000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml"
  },
  "armor:1700100": {
    "itemId": 1700100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml"
  },
  "armor:1700200": {
    "itemId": 1700200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml"
  },
  "armor:1700300": {
    "itemId": 1700300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml"
  },
  "armor:1070000": {
    "itemId": 1070000,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml"
  },
  "armor:1070100": {
    "itemId": 1070100,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml"
  },
  "armor:1070200": {
    "itemId": 1070200,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml"
  },
  "armor:1070300": {
    "itemId": 1070300,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml"
  },
  "armor:200000": {
    "itemId": 200000,
    "sourceKind": "enemy",
    "summary": "盖利德大龙飨教堂北边出现的失乡骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml"
  },
  "armor:201000": {
    "itemId": 201000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml"
  },
  "armor:200100": {
    "itemId": 200100,
    "sourceKind": "enemy",
    "summary": "巨人山顶索尔城赐福点「日蚀教堂」附近的失乡骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml"
  },
  "armor:201100": {
    "itemId": 201100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml"
  },
  "armor:200200": {
    "itemId": 200200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml"
  },
  "armor:200300": {
    "itemId": 200300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml"
  },
  "armor:1060000": {
    "itemId": 1060000,
    "sourceKind": "map",
    "summary": "从亚坛高原火山官邸赐福点「牢镇教堂」沿着屋顶往西南边走进入房间，在尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：白金之子",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_48.shtml"
  },
  "armor:1060100": {
    "itemId": 1060100,
    "sourceKind": "enemy",
    "summary": "从湖之利耶尼亚赐福点「学院门前镇」往西北方向走，拿矛的敌人有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：白金之子",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_48.shtml"
  },
  "armor:280000": {
    "itemId": 280000,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml"
  },
  "armor:280100": {
    "itemId": 280100,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml"
  },
  "armor:281100": {
    "itemId": 281100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml"
  },
  "armor:280200": {
    "itemId": 280200,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml"
  },
  "armor:280300": {
    "itemId": 280300,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml"
  },
  "armor:1990000": {
    "itemId": 1990000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚杜鹃教堂附近出现的随从（拿着弩的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：上流随从",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_51.shtml"
  },
  "armor:1991100": {
    "itemId": 1991100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：上流随从",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_51.shtml"
  },
  "armor:220300": {
    "itemId": 220300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚卡利亚城寨出现的随从（蒙面敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：上流随从",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_51.shtml"
  },
  "armor:1820000": {
    "itemId": 1820000,
    "sourceKind": "map",
    "summary": "巨人山顶米凯拉圣树赐福点「艾布雷菲尔城墙内部」梯子上房间的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml"
  },
  "armor:1820100": {
    "itemId": 1820100,
    "sourceKind": "enemy",
    "summary": "化圣雪原“圣树分枝”艾布雷菲尔出现的圣树骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml"
  },
  "armor:1821100": {
    "itemId": 1821100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml"
  },
  "armor:1820200": {
    "itemId": 1820200,
    "sourceKind": "enemy",
    "summary": "化圣雪原“圣树分枝”艾布雷菲尔出现的圣树骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml"
  },
  "armor:1820300": {
    "itemId": 1820300,
    "sourceKind": "enemy",
    "summary": "化圣雪原“圣树分枝”艾布雷菲尔出现的圣树骑士有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml"
  },
  "armor:900000": {
    "itemId": 900000,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废城沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml"
  },
  "armor:900100": {
    "itemId": 900100,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废城沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml"
  },
  "armor:901100": {
    "itemId": 901100,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废墟沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml"
  },
  "armor:900200": {
    "itemId": 900200,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废墟沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml"
  },
  "armor:900300": {
    "itemId": 900300,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废城沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml"
  },
  "armor:540000": {
    "itemId": 540000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml"
  },
  "armor:540100": {
    "itemId": 540100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml"
  },
  "armor:541100": {
    "itemId": 541100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml"
  },
  "armor:540200": {
    "itemId": 540200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml"
  },
  "armor:540300": {
    "itemId": 540300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml"
  },
  "armor:320000": {
    "itemId": 320000,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶化圣雪原西边出现的入侵角色鲜血贵族后获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：鲜血贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_65.shtml"
  },
  "armor:320100": {
    "itemId": 320100,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶化圣雪原西边出现的入侵角色鲜血贵族后获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：鲜血贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_65.shtml"
  },
  "armor:320300": {
    "itemId": 320300,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶化圣雪原西边出现的入侵角色鲜血贵族后获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：鲜血贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_65.shtml"
  },
  "armor:90000": {
    "itemId": 90000,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml"
  },
  "armor:90100": {
    "itemId": 90100,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml"
  },
  "armor:91100": {
    "itemId": 91100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml"
  },
  "armor:90200": {
    "itemId": 90200,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml"
  },
  "armor:90300": {
    "itemId": 90300,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml"
  },
  "armor:270000": {
    "itemId": 270000,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml"
  },
  "armor:270100": {
    "itemId": 270100,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml"
  },
  "armor:271100": {
    "itemId": 271100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml"
  },
  "armor:270200": {
    "itemId": 270200,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml"
  },
  "armor:270300": {
    "itemId": 270300,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml"
  },
  "armor:840000": {
    "itemId": 840000,
    "sourceKind": "enemy",
    "summary": "盖利德瑟利亚关卡附近出现的好多手的敌人掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：人偶兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_71.shtml"
  },
  "armor:840100": {
    "itemId": 840100,
    "sourceKind": "enemy",
    "summary": "盖利德瑟利亚关卡附近出现的好多手的敌人掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：人偶兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_71.shtml"
  },
  "armor:292000": {
    "itemId": 292000,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉士兵（带着长头盔的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml"
  },
  "armor:294000": {
    "itemId": 294000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml"
  },
  "armor:292100": {
    "itemId": 292100,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉士兵（带着长头盔的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml"
  },
  "armor:294100": {
    "itemId": 294100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml"
  },
  "armor:290200": {
    "itemId": 290200,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的士兵（头盔很长的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml"
  },
  "armor:290300": {
    "itemId": 290300,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的士兵（头盔很长的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml"
  },
  "armor:290000": {
    "itemId": 290000,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉赐福点河对岸废墟中的诺克斯修士（带着白色帽子的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml"
  },
  "armor:291000": {
    "itemId": 291000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml"
  },
  "armor:290100": {
    "itemId": 290100,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉赐福点河对岸废墟中的诺克斯修士（带着白色帽子的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml"
  },
  "armor:291100": {
    "itemId": 291100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml"
  },
  "armor:360000": {
    "itemId": 360000,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml"
  },
  "armor:360100": {
    "itemId": 360100,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml"
  },
  "armor:361100": {
    "itemId": 361100,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml"
  },
  "armor:360200": {
    "itemId": 360200,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml"
  },
  "armor:360300": {
    "itemId": 360300,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml"
  },
  "armor:350000": {
    "itemId": 350000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml"
  },
  "armor:350100": {
    "itemId": 350100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml"
  },
  "armor:350200": {
    "itemId": 350200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml"
  },
  "armor:350300": {
    "itemId": 350300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml"
  },
  "armor:660000": {
    "itemId": 660000,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml"
  },
  "armor:660100": {
    "itemId": 660100,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml"
  },
  "armor:661100": {
    "itemId": 661100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml"
  },
  "armor:660200": {
    "itemId": 660200,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml"
  },
  "armor:660300": {
    "itemId": 660300,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml"
  },
  "armor:630000": {
    "itemId": 630000,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml"
  },
  "armor:630100": {
    "itemId": 630100,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml"
  },
  "armor:631100": {
    "itemId": 631100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml"
  },
  "armor:630300": {
    "itemId": 630300,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml"
  },
  "armor:650000": {
    "itemId": 650000,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml"
  },
  "armor:650100": {
    "itemId": 650100,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml"
  },
  "armor:652100": {
    "itemId": 652100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml"
  },
  "armor:650200": {
    "itemId": 650200,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml"
  },
  "armor:650300": {
    "itemId": 650300,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml"
  },
  "armor:963000": {
    "itemId": 963000,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原北部日荫城西侧出现的敌对角色「“日荫城主”玛雷玛雷」掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：玛雷家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_92.shtml"
  },
  "armor:963100": {
    "itemId": 963100,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原北部日荫城西侧出现的敌对角色「“日荫城主”玛雷玛雷」掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：玛雷家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_92.shtml"
  },
  "armor:902000": {
    "itemId": 902000,
    "sourceKind": "map",
    "summary": "从湖之利耶尼亚镇静教堂中的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml"
  },
  "armor:902100": {
    "itemId": 902100,
    "sourceKind": "map",
    "summary": "从湖之利耶尼亚镇静教堂中的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml"
  },
  "armor:903100": {
    "itemId": 903100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml"
  },
  "armor:902300": {
    "itemId": 902300,
    "sourceKind": "map",
    "summary": "从湖之利耶尼亚镇静教堂中的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml"
  },
  "armor:1030000": {
    "itemId": 1030000,
    "sourceKind": "quest",
    "summary": "绘画《再世》奖励",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年幼学徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_98.shtml"
  },
  "armor:1030100": {
    "itemId": 1030100,
    "sourceKind": "quest",
    "summary": "绘画《再世》奖励",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年幼学徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_98.shtml"
  },
  "armor:620000": {
    "itemId": 620000,
    "sourceKind": "shop",
    "summary": "预言家初始装备从亚坛高原「遁世者的破屋」中的遁世商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml"
  },
  "armor:622100": {
    "itemId": 622100,
    "sourceKind": "shop",
    "summary": "预言家初始装备从亚坛高原「遁世者的破屋」中的遁世商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml"
  },
  "armor:621100": {
    "itemId": 621100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml"
  },
  "armor:620300": {
    "itemId": 620300,
    "sourceKind": "shop",
    "summary": "预言家初始装备从亚坛高原「遁世者的破屋」中的遁世商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml"
  },
  "armor:230000": {
    "itemId": 230000,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml"
  },
  "armor:231000": {
    "itemId": 231000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml"
  },
  "armor:230100": {
    "itemId": 230100,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml"
  },
  "armor:231100": {
    "itemId": 231100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml"
  },
  "armor:230200": {
    "itemId": 230200,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml"
  },
  "armor:230300": {
    "itemId": 230300,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml"
  },
  "armor:293000": {
    "itemId": 293000,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的黑夜女巫（头盔上有角的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml"
  },
  "armor:293100": {
    "itemId": 293100,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的黑夜女巫（头盔上有角的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml"
  },
  "armor:640000": {
    "itemId": 640000,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml"
  },
  "armor:640100": {
    "itemId": 640100,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml"
  },
  "armor:641100": {
    "itemId": 641100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml"
  },
  "armor:640200": {
    "itemId": 640200,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml"
  },
  "armor:640300": {
    "itemId": 640300,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml"
  },
  "armor:470000": {
    "itemId": 470000,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml"
  },
  "armor:471100": {
    "itemId": 471100,
    "sourceKind": "map",
    "summary": "在赐福点调整（需要黄金缝衣针）",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml"
  },
  "armor:470200": {
    "itemId": 470200,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml"
  },
  "armor:470300": {
    "itemId": 470300,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml"
  },
  "armor:60000": {
    "itemId": 60000,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml"
  },
  "armor:61000": {
    "itemId": 61000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml"
  },
  "armor:60100": {
    "itemId": 60100,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml"
  },
  "armor:61100": {
    "itemId": 61100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml"
  },
  "armor:60200": {
    "itemId": 60200,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml"
  },
  "armor:60300": {
    "itemId": 60300,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml"
  },
  "armor:790000": {
    "itemId": 790000,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml"
  },
  "armor:790100": {
    "itemId": 790100,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml"
  },
  "armor:791100": {
    "itemId": 791100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml"
  },
  "armor:790200": {
    "itemId": 790200,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml"
  },
  "armor:790300": {
    "itemId": 790300,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml"
  },
  "armor:190000": {
    "itemId": 190000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml"
  },
  "armor:190100": {
    "itemId": 190100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml"
  },
  "armor:190200": {
    "itemId": 190200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml"
  },
  "armor:190300": {
    "itemId": 190300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml"
  },
  "armor:580000": {
    "itemId": 580000,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml"
  },
  "armor:580100": {
    "itemId": 580100,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml"
  },
  "armor:580200": {
    "itemId": 580200,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml"
  },
  "armor:580300": {
    "itemId": 580300,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml"
  },
  "armor:1710000": {
    "itemId": 1710000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚四钟楼山脚附近的雷亚卢卡利亚士兵（拿着红布的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：雷亚卢卡利亚士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_114.shtml"
  },
  "armor:1710200": {
    "itemId": 1710200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚四钟楼山脚附近的雷亚卢卡利亚士兵（拿着红布的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：雷亚卢卡利亚士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_114.shtml"
  },
  "armor:1710300": {
    "itemId": 1710300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚四钟楼山脚附近的雷亚卢卡利亚士兵（拿着红布的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：雷亚卢卡利亚士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_114.shtml"
  },
  "armor:1810100": {
    "itemId": 1810100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚黑刀地下墓地入口前的灵庙骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml"
  },
  "armor:1811100": {
    "itemId": 1811100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml"
  },
  "armor:1810200": {
    "itemId": 1810200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚黑刀地下墓地入口前的灵庙骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml"
  },
  "armor:1810300": {
    "itemId": 1810300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚黑刀地下墓地入口前的灵庙骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml"
  },
  "armor:390000": {
    "itemId": 390000,
    "sourceKind": "enemy",
    "summary": "宁姆格福驿站街遗迹附近出现的年迈权贵（举旗的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年迈权贵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_119.shtml"
  },
  "armor:390100": {
    "itemId": 390100,
    "sourceKind": "enemy",
    "summary": "宁姆格福驿站街遗迹附近出现的年迈权贵（举旗的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年迈权贵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_119.shtml"
  },
  "armor:390300": {
    "itemId": 390300,
    "sourceKind": "enemy",
    "summary": "宁姆格福驿站街遗迹附近出现的年迈权贵（举旗的敌人）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年迈权贵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_119.shtml"
  },
  "armor:1790000": {
    "itemId": 1790000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml"
  },
  "armor:1790100": {
    "itemId": 1790100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml"
  },
  "armor:1791100": {
    "itemId": 1791100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml"
  },
  "armor:1790200": {
    "itemId": 1790200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml"
  },
  "armor:1790300": {
    "itemId": 1790300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml"
  },
  "armor:1720000": {
    "itemId": 1720000,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml"
  },
  "armor:1720100": {
    "itemId": 1720100,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml"
  },
  "armor:1720200": {
    "itemId": 1720200,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml"
  },
  "armor:1720300": {
    "itemId": 1720300,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml"
  },
  "armor:1750000": {
    "itemId": 1750000,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树祈祷室附近的士兵（头盔上有锁链的敌人）掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml"
  },
  "armor:1750100": {
    "itemId": 1750100,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树赐福点「祈祷室」附近出现的士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml"
  },
  "armor:1750200": {
    "itemId": 1750200,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树赐福点「祈祷室」附近出现的士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml"
  },
  "armor:1750300": {
    "itemId": 1750300,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树赐福点「祈祷室」附近出现的士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml"
  },
  "armor:832000": {
    "itemId": 832000,
    "sourceKind": "enemy",
    "summary": "从湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「讨论室」跳过屋顶击败矿石螃蟹掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml"
  },
  "armor:2030000": {
    "itemId": 2030000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「校舍内的教室」周围出现的魔法学徒有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml"
  },
  "armor:830200": {
    "itemId": 830200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚中的魔法师有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml"
  },
  "armor:830300": {
    "itemId": 830300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚中的魔法师掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml"
  },
  "armor:1740100": {
    "itemId": 1740100,
    "sourceKind": "enemy",
    "summary": "宁姆格福啜泣半岛赐福点「灵庙原野」附近的灵庙士兵（无头士兵）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_117.shtml"
  },
  "armor:1740200": {
    "itemId": 1740200,
    "sourceKind": "enemy",
    "summary": "宁姆格福啜泣半岛赐福点「灵庙原野」附近的灵庙士兵（无头士兵）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_117.shtml"
  },
  "armor:1740300": {
    "itemId": 1740300,
    "sourceKind": "enemy",
    "summary": "宁姆格福啜泣半岛赐福点「灵庙原野」附近的灵庙士兵（无头士兵）有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_117.shtml"
  },
  "armor:990000": {
    "itemId": 990000,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔火山赐福点「“起源魔法师”亚兹勒」南边遁世者村中的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml"
  },
  "armor:990100": {
    "itemId": 990100,
    "sourceKind": "map",
    "summary": "从亚坛高原遁世者村中的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml"
  },
  "armor:991100": {
    "itemId": 991100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml"
  },
  "armor:990200": {
    "itemId": 990200,
    "sourceKind": "map",
    "summary": "从亚坛高原遁世者村中的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml"
  },
  "armor:990300": {
    "itemId": 990300,
    "sourceKind": "map",
    "summary": "从亚坛高原遁世者村中的尸体处拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml"
  },
  "armor:1730000": {
    "itemId": 1730000,
    "sourceKind": "enemy",
    "summary": "盖利德赐福点「盖尔要塞北方」出现的拉塔恩士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml"
  },
  "armor:1730100": {
    "itemId": 1730100,
    "sourceKind": "enemy",
    "summary": "盖利德赐福点「盖尔要塞北方」出现的拉塔恩士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml"
  },
  "armor:1730200": {
    "itemId": 1730200,
    "sourceKind": "enemy",
    "summary": "盖利德赐福点「盖尔要塞北方」出现的拉塔恩士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml"
  },
  "armor:1730300": {
    "itemId": 1730300,
    "sourceKind": "enemy",
    "summary": "盖利德的盖尔要塞附近出现的拉塔恩士兵有概率掉落",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml"
  },
  "armor:1020100": {
    "itemId": 1020100,
    "sourceKind": "map",
    "summary": "巨人山顶“圣树分枝”艾布雷菲尔赐福点「圣树底层」隔壁房间的花蕾旁边拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_61.shtml"
  },
  "armor:1020200": {
    "itemId": 1020200,
    "sourceKind": "map",
    "summary": "巨人山顶“圣树分枝”艾布雷菲尔赐福点「圣树底层」隔壁房间的花蕾旁边拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_61.shtml"
  },
  "armor:1020300": {
    "itemId": 1020300,
    "sourceKind": "map",
    "summary": "巨人山顶“圣树分枝”艾布雷菲尔赐福点「圣树底层」隔壁房间的花蕾旁边拾取",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_61.shtml"
  },
  "armor:470100": {
    "itemId": 470100,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml"
  },
  "armor:630200": {
    "itemId": 630200,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml"
  },
  "armor:80000": {
    "itemId": 80000,
    "sourceKind": "enemy",
    "summary": "完成火山官邸第一次信件任务，击杀“古老骑士”伊修托邦后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:80100": {
    "itemId": 80100,
    "sourceKind": "enemy",
    "summary": "完成火山官邸第一次信件任务，击杀“古老骑士”伊修托邦后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:80200": {
    "itemId": 80200,
    "sourceKind": "enemy",
    "summary": "完成火山官邸第一次信件任务，击杀“古老骑士”伊修托邦后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:80300": {
    "itemId": 80300,
    "sourceKind": "enemy",
    "summary": "完成火山官邸第一次信件任务，击杀“古老骑士”伊修托邦后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:81100": {
    "itemId": 81100,
    "sourceKind": "other",
    "summary": "裁缝改",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:440000": {
    "itemId": 440000,
    "sourceKind": "enemy",
    "summary": "击杀“圣人桥”上的南瓜士兵获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:570000": {
    "itemId": 570000,
    "sourceKind": "enemy",
    "summary": "王城罗德尔亚雷萨英雄墓地，击败双熔炉骑士后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:570100": {
    "itemId": 570100,
    "sourceKind": "enemy",
    "summary": "王城罗德尔亚雷萨英雄墓地，击败双熔炉骑士后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:570200": {
    "itemId": 570200,
    "sourceKind": "enemy",
    "summary": "王城罗德尔亚雷萨英雄墓地，击败双熔炉骑士后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:570300": {
    "itemId": 570300,
    "sourceKind": "enemy",
    "summary": "王城罗德尔亚雷萨英雄墓地，击败双熔炉骑士后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:571000": {
    "itemId": 571000,
    "sourceKind": "enemy",
    "summary": "深根底层“无名永恒之城”赐福点西方巨大断树下，击败首领“熔炉骑士”志留亚后，在其身后树洞里的宝箱获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:571100": {
    "itemId": 571100,
    "sourceKind": "enemy",
    "summary": "深根底层“无名永恒之城”赐福点西方巨大断树下，击败首领“熔炉骑士”志留亚后，在其身后树洞里的宝箱获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:572100": {
    "itemId": 572100,
    "sourceKind": "other",
    "summary": "裁缝改",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:573100": {
    "itemId": 573100,
    "sourceKind": "other",
    "summary": "裁缝改",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:610000": {
    "itemId": 610000,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:610100": {
    "itemId": 610100,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:610200": {
    "itemId": 610200,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:610300": {
    "itemId": 610300,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:611000": {
    "itemId": 611000,
    "sourceKind": "other",
    "summary": "来源未知，目前持有非轻装版也不能通过裁缝获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:611100": {
    "itemId": 611100,
    "sourceKind": "other",
    "summary": "来源未知，目前持有非轻装版也不能通过裁缝获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:720000": {
    "itemId": 720000,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:720100": {
    "itemId": 720100,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:720200": {
    "itemId": 720200,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:720300": {
    "itemId": 720300,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:721100": {
    "itemId": 721100,
    "sourceKind": "other",
    "summary": "裁缝改",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:780000": {
    "itemId": 780000,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:780100": {
    "itemId": 780100,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:780200": {
    "itemId": 780200,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:780300": {
    "itemId": 780300,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:781100": {
    "itemId": 781100,
    "sourceKind": "other",
    "summary": "裁缝改",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:820000": {
    "itemId": 820000,
    "sourceKind": "map",
    "summary": "圣树区域“圣树镇”赐福点出发，东门梯子上去沿着大树根走，沿朝南的主干先走到头，尽头位置分出两条路，走左边的那条，尽头尸体上拾取（这里有个拿扇形笛子的使者）",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1080000": {
    "itemId": 1080000,
    "sourceKind": "enemy",
    "summary": "宁姆格福“蒙流地下墓地”中，猫头小恶魔（拿分叉斧的）掉落",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1081000": {
    "itemId": 1081000,
    "sourceKind": "enemy",
    "summary": "利耶尼亚“断崖下的地下墓地”中，狼头小恶魔（拿剑的）掉落",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1082000": {
    "itemId": 1082000,
    "sourceKind": "enemy",
    "summary": "利耶尼亚“断崖下的地下墓地”中，尖牙小恶魔（扔魔法球的）掉落",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1083000": {
    "itemId": 1083000,
    "sourceKind": "enemy",
    "summary": "王城罗德尔“地底大道旁”赐福点出门正东方向洞内下爬梯，出门管道上的小恶魔掉落",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1084000": {
    "itemId": 1084000,
    "sourceKind": "map",
    "summary": "王城罗德尔“大道旁露台”赐福点上楼梯左拐沿大路直走，走到大门跟前不过门，右拐一条小道走到尽头，尸体上拾取（两个小兵围观）",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1085000": {
    "itemId": 1085000,
    "sourceKind": "map",
    "summary": "化圣雪原地下墓地中，有持剑腐败树灵看门的房间里，尸体上拾取",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1090000": {
    "itemId": 1090000,
    "sourceKind": "enemy",
    "summary": "地下希芙拉河区域击败首领“仿身泪滴”后获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1110000": {
    "itemId": 1110000,
    "sourceKind": "enemy",
    "summary": "宁姆格福“海岸洞窟”赐福点出洞右拐，击杀海滩上的小章鱼掉落（注意是小的）",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1120000": {
    "itemId": 1120000,
    "sourceKind": "quest",
    "summary": "战士壶亚历山大线推至格密尔火山区域，在“莱多要塞”南边的熔岩中和其对话获得",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1300000": {
    "itemId": 1300000,
    "sourceKind": "map",
    "summary": "利耶尼亚“断崖下的地下墓地”中的雾门房间拾取",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1301000": {
    "itemId": 1301000,
    "sourceKind": "quest",
    "summary": "菈妮线最后杀了布莱泽后，找伊吉对话；对话后刷新，伊吉会被黑焰烧死，在他的铁匠台上拾取",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1900000": {
    "itemId": 1900000,
    "sourceKind": "map",
    "summary": "宁姆格福神授塔（桥上）赐福点沿着大路向神授塔走，但是断桥处不要坐传送门，继续往断裂处走下去，在此处的尸体上拾取",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1901000": {
    "itemId": 1901000,
    "sourceKind": "quest",
    "summary": "完成绘画任务《归巢》后获得（太长了不写了，自行查找攻略）",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1902000": {
    "itemId": 1902000,
    "sourceKind": "map",
    "summary": "雷亚卢卡利亚大书库赐福点东大门出去坐升降机下去，出门往南边走过镂空铁门立刻左拐，直走跳窗进入一个有爬梯的房间，上爬梯，在这个房间的宝箱中拾取（怪比较多还有南瓜士兵）",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1910000": {
    "itemId": 1910000,
    "sourceKind": "map",
    "summary": "火山官邸“艾格蕾教堂”赐福点进入北方向房间里的升降机，上去出门走右手边的门来到有熔岩刀蛇人的桥上，桥上有个摆着椅子的地方可以跳下去，捡取尸体上的光点获得（没开升降机就正常走教堂二楼绕过去也可以，到遇到第一个熔岩刀蛇人的地方）",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  },
  "armor:1920000": {
    "itemId": 1920000,
    "sourceKind": "map",
    "summary": "盖利德“魔法镇瑟利亚”的屋顶尸体拾取",
    ...USER_IMAGE_SOURCE,
    "verification": "用户补充图片提取"
  }
};
