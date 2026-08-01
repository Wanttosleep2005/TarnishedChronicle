// @generated from Chinese BWiki entries and Chinese guide pages (2026-07-31).
// The English acquisition table remains in collection-acquisition.ts.

import type { CollectionAcquisitionKind, CollectionAcquisitionPin } from './collection-acquisition.ts';

export interface CollectionAcquisitionZhRecord {
  readonly kind: 'armor' | 'talisman' | 'sorcery' | 'incantation' | 'spirit-ash' | 'ash-of-war';
  readonly itemId: number;
  readonly sourceKind: CollectionAcquisitionKind;
  readonly summary: string;
  readonly details: string;
  readonly sourceTitle: string;
  readonly sourceUrl: string;
  readonly verified: boolean;
  readonly pin?: CollectionAcquisitionPin;
}

export const COLLECTION_ACQUISITION_ZH: Readonly<Record<string, CollectionAcquisitionZhRecord>> = {
  "armor:10000": {
    "kind": "armor",
    "itemId": 10000,
    "sourceKind": "unknown",
    "summary": "中文攻略待补：暂未找到包含该条目获取途径的中文页面。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": false
  },
  "armor:10100": {
    "kind": "armor",
    "itemId": 10100,
    "sourceKind": "unknown",
    "summary": "中文攻略待补：暂未找到包含该条目获取途径的中文页面。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": false
  },
  "armor:10200": {
    "kind": "armor",
    "itemId": 10200,
    "sourceKind": "unknown",
    "summary": "中文攻略待补：暂未找到包含该条目获取途径的中文页面。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": false
  },
  "armor:10300": {
    "kind": "armor",
    "itemId": 10300,
    "sourceKind": "unknown",
    "summary": "中文攻略待补：暂未找到包含该条目获取途径的中文页面。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": false
  },
  "armor:40000": {
    "kind": "armor",
    "itemId": 40000,
    "sourceKind": "shop",
    "summary": "啜泣半岛——摩恩城城墙前方赐福——商人处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：铁头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%93%81%E5%A4%B4%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "armor:40100": {
    "kind": "armor",
    "itemId": 40100,
    "sourceKind": "shop",
    "summary": "啜泣半岛——摩恩城城墙前方赐福点——旁边的流浪商人处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：鳞甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%B3%9E%E7%94%B2",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "armor:40200": {
    "kind": "armor",
    "itemId": 40200,
    "sourceKind": "shop",
    "summary": "每一个单件都由一个商人出售，大树桶形外衣由亚坛高原“穿林大桥”赐福旁流浪商人出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=87",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "armor:40300": {
    "kind": "armor",
    "itemId": 40300,
    "sourceKind": "shop",
    "summary": "啜泣半岛「摩恩城（城墙前方）」赐福旁边的流浪商人出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=66",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "armor:50000": {
    "kind": "armor",
    "itemId": 50000,
    "sourceKind": "enemy",
    "summary": "宁姆格福各地的凯丹佣兵概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：凯丹头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%87%AF%E4%B8%B9%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:50100": {
    "kind": "armor",
    "itemId": 50100,
    "sourceKind": "enemy",
    "summary": "宁姆格福各地的凯丹佣兵概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：凯丹铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%87%AF%E4%B8%B9%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:50200": {
    "kind": "armor",
    "itemId": 50200,
    "sourceKind": "enemy",
    "summary": "击败宁姆格福各地的凯丹佣兵概率掉落",
    "details": "",
    "sourceTitle": "《艾尔登法环》凯丹套装获取攻略",
    "sourceUrl": "https://game.china.com/industry/gl/13003155/20240327/46308031.html",
    "verified": true
  },
  "armor:50300": {
    "kind": "armor",
    "itemId": 50300,
    "sourceKind": "enemy",
    "summary": "击败宁姆格福各地的凯丹佣兵概率掉落",
    "details": "",
    "sourceTitle": "《艾尔登法环》凯丹套装获取攻略",
    "sourceUrl": "https://game.china.com/industry/gl/13003155/20240327/46308031.html",
    "verified": true
  },
  "armor:60000": {
    "kind": "armor",
    "itemId": 60000,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 84,
      "z": 608.5,
      "label": "参考赐福：Dragon Temple Rooftop"
    }
  },
  "armor:60100": {
    "kind": "armor",
    "itemId": 60100,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 84,
      "z": 608.5,
      "label": "参考赐福：Dragon Temple Rooftop"
    }
  },
  "armor:60200": {
    "kind": "armor",
    "itemId": 60200,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 84,
      "z": 608.5,
      "label": "参考赐福：Dragon Temple Rooftop"
    }
  },
  "armor:60300": {
    "kind": "armor",
    "itemId": 60300,
    "sourceKind": "enemy",
    "summary": "从赐福点「龙教堂（屋顶）」出发，遇到第一个敌人时往下跳，绕到另一侧尽头打开宝箱获得，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 84,
      "z": 608.5,
      "label": "参考赐福：Dragon Temple Rooftop"
    }
  },
  "armor:61000": {
    "kind": "armor",
    "itemId": 61000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 84,
      "z": 608.5,
      "label": "参考赐福：Dragon Temple Rooftop"
    }
  },
  "armor:61100": {
    "kind": "armor",
    "itemId": 61100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：龙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_107.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 84,
      "z": 608.5,
      "label": "参考赐福：Dragon Temple Rooftop"
    }
  },
  "armor:80000": {
    "kind": "armor",
    "itemId": 80000,
    "sourceKind": "enemy",
    "summary": "火山官邸任务——宁姆格福——击杀“古老骑士”伊修托邦获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：鳞片头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%B3%9E%E7%89%87%E5%A4%B4%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:80100": {
    "kind": "armor",
    "itemId": 80100,
    "sourceKind": "enemy",
    "summary": "火山官邸任务——“古老骑士”伊修托邦——击杀获取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：鳞片铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%B3%9E%E7%89%87%E9%93%A0%E7%94%B2",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:80200": {
    "kind": "armor",
    "itemId": 80200,
    "sourceKind": "enemy",
    "summary": "完成火山官邸第一次信件任务，击杀“古老骑士”伊修托邦后获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:80300": {
    "kind": "armor",
    "itemId": 80300,
    "sourceKind": "enemy",
    "summary": "完成火山官邸第一次信件任务，击杀“古老骑士”伊修托邦后获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:81100": {
    "kind": "armor",
    "itemId": 81100,
    "sourceKind": "other",
    "summary": "裁缝改",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:90000": {
    "kind": "armor",
    "itemId": 90000,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml",
    "verified": true
  },
  "armor:90100": {
    "kind": "armor",
    "itemId": 90100,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml",
    "verified": true
  },
  "armor:90200": {
    "kind": "armor",
    "itemId": 90200,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml",
    "verified": true
  },
  "armor:90300": {
    "kind": "armor",
    "itemId": 90300,
    "sourceKind": "enemy",
    "summary": "亚坛高原调香师的藏身洞窟出现的调香师（蒙面敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml",
    "verified": true
  },
  "armor:91100": {
    "kind": "armor",
    "itemId": 91100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_66.shtml",
    "verified": true
  },
  "armor:100000": {
    "kind": "armor",
    "itemId": 100000,
    "sourceKind": "map",
    "summary": "艾奥尼亚沼泽——贤者镇的废墟——一尸体上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：旅行帽子",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%97%85%E8%A1%8C%E5%B8%BD%E5%AD%90",
    "verified": true
  },
  "armor:100100": {
    "kind": "armor",
    "itemId": 100100,
    "sourceKind": "map",
    "summary": "盖利德艾奥尼亚沼泽（深处）赐福附近的贤者镇的废墟里拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：调香师旅行装",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%B0%83%E9%A6%99%E5%B8%88%E6%97%85%E8%A1%8C%E8%A3%85",
    "verified": true
  },
  "armor:100200": {
    "kind": "armor",
    "itemId": 100200,
    "sourceKind": "map",
    "summary": "圣树女武神赐福旁边房间的猩红之花旁拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=2",
    "verified": true
  },
  "armor:100300": {
    "kind": "armor",
    "itemId": 100300,
    "sourceKind": "map",
    "summary": "圣树女武神赐福旁边房间的猩红之花旁拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=2",
    "verified": true
  },
  "armor:101100": {
    "kind": "armor",
    "itemId": 101100,
    "sourceKind": "map",
    "summary": "在盖利德贤者镇废墟拾取旅行调香师套装，该部件可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=37",
    "verified": true
  },
  "armor:120000": {
    "kind": "armor",
    "itemId": 120000,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml",
    "verified": true
  },
  "armor:120100": {
    "kind": "armor",
    "itemId": 120100,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml",
    "verified": true
  },
  "armor:120200": {
    "kind": "armor",
    "itemId": 120200,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml",
    "verified": true
  },
  "armor:120300": {
    "kind": "armor",
    "itemId": 120300,
    "sourceKind": "enemy",
    "summary": "从王城罗德尔赐福「王城西边城墙」处祈祷的敌人处到达围栏缺口位置往下跳到屋顶上，再从屋顶跳到地面走右侧楼梯，进入像圆桌厅堂一样的房间正前方尸体拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml",
    "verified": true
  },
  "armor:121000": {
    "kind": "armor",
    "itemId": 121000,
    "sourceKind": "enemy",
    "summary": "可以通过在赐福调整衣服来更换轻装，需要使用缝纫工具（需要击败宁姆格福海岸洞窟的首领）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml",
    "verified": true
  },
  "armor:121100": {
    "kind": "armor",
    "itemId": 121100,
    "sourceKind": "enemy",
    "summary": "可以通过在赐福调整衣服来更换轻装，需要使用缝纫工具（需要击败宁姆格福海岸洞窟的首领）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：阿尔佩利希",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_4.shtml",
    "verified": true
  },
  "armor:130000": {
    "kind": "armor",
    "itemId": 130000,
    "sourceKind": "map",
    "summary": "罗杰尔尸体上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：魔法剑士尖帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%AD%94%E6%B3%95%E5%89%91%E5%A3%AB%E5%B0%96%E5%B8%BD",
    "verified": true
  },
  "armor:130100": {
    "kind": "armor",
    "itemId": 130100,
    "sourceKind": "map",
    "summary": "罗杰尔随进度推进病逝于圆桌厅堂后拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=20",
    "verified": true
  },
  "armor:130200": {
    "kind": "armor",
    "itemId": 130200,
    "sourceKind": "map",
    "summary": "罗杰尔随进度推进病逝于圆桌厅堂后拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=20",
    "verified": true
  },
  "armor:130300": {
    "kind": "armor",
    "itemId": 130300,
    "sourceKind": "map",
    "summary": "罗杰尔随进度推进病逝于圆桌厅堂后拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=20",
    "verified": true
  },
  "armor:131100": {
    "kind": "armor",
    "itemId": 131100,
    "sourceKind": "quest",
    "summary": "罗杰尔随进度推进病逝于圆桌厅堂后拾取魔法剑士套装，旅行装可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=20",
    "verified": true
  },
  "armor:140000": {
    "kind": "armor",
    "itemId": 140000,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml",
    "verified": true,
    "pin": {
      "mapId": "m39_20_00_00",
      "x": 91.3,
      "z": -1312,
      "label": "参考赐福：Ruin-Strewn Precipice"
    }
  },
  "armor:140100": {
    "kind": "armor",
    "itemId": 140100,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:140200": {
    "kind": "armor",
    "itemId": 140200,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml",
    "verified": true,
    "pin": {
      "mapId": "m39_20_00_00",
      "x": 91.3,
      "z": -1312,
      "label": "参考赐福：Ruin-Strewn Precipice"
    }
  },
  "armor:140300": {
    "kind": "armor",
    "itemId": 140300,
    "sourceKind": "quest",
    "summary": "推进帕奇支线获得（帕奇初始位置在宁姆格福蒙流洞窟）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大山羊",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_12.shtml",
    "verified": true
  },
  "armor:150000": {
    "kind": "armor",
    "itemId": 150000,
    "sourceKind": "enemy",
    "summary": "巨人山顶——萨米尔废墟——击杀夏玻利利获得；巨人山顶——萨米尔废墟——受赐癫火后在夏玻利利所在地拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：铁笠帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%93%81%E7%AC%A0%E5%B8%BD",
    "verified": true
  },
  "armor:150100": {
    "kind": "armor",
    "itemId": 150100,
    "sourceKind": "map",
    "summary": "巨人山顶——‘萨米尔废墟’赐福点——砍死夏玻利利获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：浪人铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%B5%AA%E4%BA%BA%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:150200": {
    "kind": "armor",
    "itemId": 150200,
    "sourceKind": "enemy",
    "summary": "巨人山顶“萨米尔废墟”赐福边能看到被夏玻利利夺舍的长牙铁斗笠哥，直接击杀拾取或者成为癫火之王后他会消失留下装备",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=94",
    "verified": true,
    "pin": {
      "mapId": "m60_49_53_00",
      "x": 78.9,
      "z": 101,
      "label": "参考赐福：Zamor Ruins"
    }
  },
  "armor:150300": {
    "kind": "armor",
    "itemId": 150300,
    "sourceKind": "enemy",
    "summary": "巨人山顶“萨米尔废墟”赐福边能看到被夏玻利利夺舍的长牙铁斗笠哥，直接击杀拾取或者成为癫火之王后他会消失留下装备",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=94",
    "verified": true
  },
  "armor:151100": {
    "kind": "armor",
    "itemId": 151100,
    "sourceKind": "quest",
    "summary": "巨人山顶「萨米尔废墟」赐福边能看到被夏玻利利夺舍的长牙铁斗笠哥，直接击杀拾取或成为癫火之王后他消失留下装备；浪人铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=94",
    "verified": true
  },
  "armor:160000": {
    "kind": "armor",
    "itemId": 160000,
    "sourceKind": "shop",
    "summary": "格密尔火山第一休息站赐福点，西北方向过石桥后爬梯，上去后再爬一个爬梯到达流浪商人处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：罪人风帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%BD%AA%E4%BA%BA%E9%A3%8E%E5%B8%BD",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -180.4,
      "z": -185.5,
      "label": "参考赐福：Avenue Balcony"
    }
  },
  "armor:160100": {
    "kind": "armor",
    "itemId": 160100,
    "sourceKind": "map",
    "summary": "宁姆格福蒙流洞窟开启帕奇的宝箱获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=1",
    "verified": true,
    "pin": {
      "mapId": "m31_00_00_00",
      "x": 42.5,
      "z": 54,
      "label": "参考赐福：Murkwater Cave"
    }
  },
  "armor:160300": {
    "kind": "armor",
    "itemId": 160300,
    "sourceKind": "map",
    "summary": "宁姆格福蒙流洞窟开启帕奇的宝箱获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=1",
    "verified": true,
    "pin": {
      "mapId": "m31_00_00_00",
      "x": 42.5,
      "z": 54,
      "label": "参考赐福：Murkwater Cave"
    }
  },
  "armor:170000": {
    "kind": "armor",
    "itemId": 170000,
    "sourceKind": "other",
    "summary": "从赛尔维斯的魔法塔左侧墙壁向上跳，从尸体上获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黑狼面具",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%91%E7%8B%BC%E9%9D%A2%E5%85%B7",
    "verified": true
  },
  "armor:170100": {
    "kind": "armor",
    "itemId": 170100,
    "sourceKind": "other",
    "summary": "推进菈妮支线，打败黑暗弃子之后，布莱泽会在菈妮魔法师塔门口发狂，击杀他后拾取全套装备",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：布莱泽铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%B8%83%E8%8E%B1%E6%B3%BD%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:170200": {
    "kind": "armor",
    "itemId": 170200,
    "sourceKind": "enemy",
    "summary": "推进菈妮支线，打败黑暗弃子之后，狼哥会在菈妮魔法师塔门口被双指逼疯，击杀获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=116",
    "verified": true,
    "pin": {
      "mapId": "m60_08_12_02",
      "x": 42.7,
      "z": 141.8,
      "label": "参考赐福：Ranni's Rise"
    }
  },
  "armor:170300": {
    "kind": "armor",
    "itemId": 170300,
    "sourceKind": "enemy",
    "summary": "推进菈妮支线，打败黑暗弃子之后，狼哥会在菈妮魔法师塔门口被双指逼疯，击杀获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=116",
    "verified": true
  },
  "armor:171100": {
    "kind": "armor",
    "itemId": 171100,
    "sourceKind": "quest",
    "summary": "推进菈妮支线，打败黑暗弃子之后，布莱泽会在菈妮魔法师塔门口发狂，击杀后拾取；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=116",
    "verified": true
  },
  "armor:180000": {
    "kind": "armor",
    "itemId": 180000,
    "sourceKind": "map",
    "summary": "仪典镇最北面的桥下拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=102",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": -353.4,
      "z": -163.5,
      "label": "参考赐福：Ordina, Liturgical Town"
    }
  },
  "armor:180100": {
    "kind": "armor",
    "itemId": 180100,
    "sourceKind": "map",
    "summary": "仪典镇”奥缇娜赐福点北方桥洞下拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黑刀铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%91%E5%88%80%E9%93%A0%E7%94%B2",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": -353.4,
      "z": -163.5,
      "label": "参考赐福：Ordina, Liturgical Town"
    }
  },
  "armor:180200": {
    "kind": "armor",
    "itemId": 180200,
    "sourceKind": "map",
    "summary": "仪典镇最北面的桥下拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=102",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": -353.4,
      "z": -163.5,
      "label": "参考赐福：Ordina, Liturgical Town"
    }
  },
  "armor:180300": {
    "kind": "armor",
    "itemId": 180300,
    "sourceKind": "map",
    "summary": "仪典镇最北面的桥下拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=102",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": -353.4,
      "z": -163.5,
      "label": "参考赐福：Ordina, Liturgical Town"
    }
  },
  "armor:181100": {
    "kind": "armor",
    "itemId": 181100,
    "sourceKind": "map",
    "summary": "化圣雪原仪典镇最北面的桥下拾取黑刀套装，铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=102",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": -353.4,
      "z": -163.5,
      "label": "参考赐福：Ordina, Liturgical Town"
    }
  },
  "armor:190000": {
    "kind": "armor",
    "itemId": 190000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml",
    "verified": true
  },
  "armor:190100": {
    "kind": "armor",
    "itemId": 190100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml",
    "verified": true
  },
  "armor:190200": {
    "kind": "armor",
    "itemId": 190200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml",
    "verified": true
  },
  "armor:190300": {
    "kind": "armor",
    "itemId": 190300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城流刑士兵（带风帽的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流刑士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_111.shtml",
    "verified": true
  },
  "armor:200000": {
    "kind": "armor",
    "itemId": 200000,
    "sourceKind": "enemy",
    "summary": "盖利德大龙飨教堂北边出现的失乡骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "armor:200100": {
    "kind": "armor",
    "itemId": 200100,
    "sourceKind": "enemy",
    "summary": "巨人山顶索尔城赐福点「日蚀教堂」附近的失乡骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml",
    "verified": true
  },
  "armor:200200": {
    "kind": "armor",
    "itemId": 200200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml",
    "verified": true
  },
  "armor:200300": {
    "kind": "armor",
    "itemId": 200300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml",
    "verified": true
  },
  "armor:201000": {
    "kind": "armor",
    "itemId": 201000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml",
    "verified": true
  },
  "armor:201100": {
    "kind": "armor",
    "itemId": 201100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城赐福点「城墙塔」附近的失乡骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：失乡骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_42.shtml",
    "verified": true
  },
  "armor:210000": {
    "kind": "armor",
    "itemId": 210000,
    "sourceKind": "shop",
    "summary": "击杀日荫城关底首领后在圆桌厅堂老奶奶处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：铁棘头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%93%81%E6%A3%98%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:210100": {
    "kind": "armor",
    "itemId": 210100,
    "sourceKind": "shop",
    "summary": "打死日荫城关底首领“铁棘”艾隆梅尔后在圆桌厅堂老奶奶处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：铁棘铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%93%81%E6%A3%98%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:210200": {
    "kind": "armor",
    "itemId": 210200,
    "sourceKind": "shop",
    "summary": "击败日荫城首领“铁棘”艾隆梅尔后圆桌厅堂解指婆婆出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=117",
    "verified": true
  },
  "armor:210300": {
    "kind": "armor",
    "itemId": 210300,
    "sourceKind": "shop",
    "summary": "击败日荫城首领“铁棘”艾隆梅尔后圆桌厅堂解指婆婆出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=117",
    "verified": true
  },
  "armor:211100": {
    "kind": "armor",
    "itemId": 211100,
    "sourceKind": "shop",
    "summary": "击败日荫城首领「铁棘」艾隆梅尔后，圆桌厅堂解指老妪出售铁棘套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=117",
    "verified": true
  },
  "armor:220000": {
    "kind": "armor",
    "itemId": 220000,
    "sourceKind": "enemy",
    "summary": "交界地各地的随从概率掉落。建议刷点：利耶尼亚——卡利亚城寨——王室赏猎地赐福点——门口的三个随从【其中两个可背刺】",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：随从风帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%9A%8F%E4%BB%8E%E9%A3%8E%E5%B8%BD",
    "verified": true
  },
  "armor:220100": {
    "kind": "armor",
    "itemId": 220100,
    "sourceKind": "enemy",
    "summary": "交界地各地的随从概率掉落。建议刷点：利耶尼亚——卡利亚城寨——王室赏月地赐福点——门口的三个随从【其中两个可背刺】",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：随从上衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%9A%8F%E4%BB%8E%E4%B8%8A%E8%A1%A3",
    "verified": true
  },
  "armor:220300": {
    "kind": "armor",
    "itemId": 220300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚卡利亚城寨出现的随从（蒙面敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：上流随从",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_51.shtml",
    "verified": true
  },
  "armor:221100": {
    "kind": "armor",
    "itemId": 221100,
    "sourceKind": "enemy",
    "summary": "穿着此套装的随从和上流随从概率掉落，上衣可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=6",
    "verified": true
  },
  "armor:230000": {
    "kind": "armor",
    "itemId": 230000,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:230100": {
    "kind": "armor",
    "itemId": 230100,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:230200": {
    "kind": "armor",
    "itemId": 230200,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:230300": {
    "kind": "armor",
    "itemId": 230300,
    "sourceKind": "enemy",
    "summary": "击败化圣雪原西侧夜晚与马车一起出现的2名黑夜骑兵掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:231000": {
    "kind": "armor",
    "itemId": 231000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:231100": {
    "kind": "armor",
    "itemId": 231100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜骑兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_100.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:240000": {
    "kind": "armor",
    "itemId": 240000,
    "sourceKind": "enemy",
    "summary": "化圣雪原的白金之子射手概率掉落；击杀白金之子勒缇娜可获得全套（不建议）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：苍银风帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%8B%8D%E9%93%B6%E9%A3%8E%E5%B8%BD",
    "verified": true
  },
  "armor:240100": {
    "kind": "armor",
    "itemId": 240100,
    "sourceKind": "enemy",
    "summary": "化圣雪原的白金之子射手概率掉落；击杀白金之子勒缇娜可获得全套（不建议）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：苍银铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%8B%8D%E9%93%B6%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:240200": {
    "kind": "armor",
    "itemId": 240200,
    "sourceKind": "enemy",
    "summary": "化圣雪原的白金之子射手概率掉落；击杀白金之子勒缇娜可获得全套（不建议）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：苍银手环",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%8B%8D%E9%93%B6%E6%89%8B%E7%8E%AF",
    "verified": true
  },
  "armor:240300": {
    "kind": "armor",
    "itemId": 240300,
    "sourceKind": "enemy",
    "summary": "化圣雪原的白金之子射手概率掉落；击杀白金之子勒缇娜可获得全套（不建议）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：苍银长裙",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%8B%8D%E9%93%B6%E9%95%BF%E8%A3%99",
    "verified": true
  },
  "armor:241100": {
    "kind": "armor",
    "itemId": 241100,
    "sourceKind": "enemy",
    "summary": "化圣雪原仪典镇外围的苍银弓箭手概率掉落苍银套装，铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=98",
    "verified": true
  },
  "armor:250000": {
    "kind": "armor",
    "itemId": 250000,
    "sourceKind": "map",
    "summary": "王城罗德尔地下癫火跳跳乐上层：从弃置恶兆的大教堂赐福点出发，沿东北方的隐藏门通道前进，勾引怪用癫火烧掉帐篷后拾取",
    "details": "",
    "sourceTitle": "《艾尔登法环》流浪商人帽子获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911017.html",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": 74.4,
      "z": -80.6,
      "label": "参考赐福：Cathedral of the Forsaken"
    }
  },
  "armor:250100": {
    "kind": "armor",
    "itemId": 250100,
    "sourceKind": "shop",
    "summary": "亚坛高原-王城-弃置恶兆的大教堂赐福点，流浪商人套装在隐藏墙后的癫火跳跳乐上层帐篷内，需勾引发癫商人打破帐篷才能获取。（另可以贴近需打破帐篷，任意放置个物品再捡起来，然后退出重进，进入游戏时的起身动作能把帐篷挤破）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：流浪商人上衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%B5%81%E6%B5%AA%E5%95%86%E4%BA%BA%E4%B8%8A%E8%A1%A3",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": 74.4,
      "z": -80.6,
      "label": "参考赐福：Cathedral of the Forsaken"
    }
  },
  "armor:250300": {
    "kind": "armor",
    "itemId": 250300,
    "sourceKind": "map",
    "summary": "王城罗德尔地下癫火跳跳乐上层：从弃置恶兆的大教堂赐福点出发，沿东北方的隐藏门通道前进，勾引怪用癫火烧掉帐篷后拾取",
    "details": "",
    "sourceTitle": "《艾尔登法环》流浪商人帽子获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911017.html",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": 74.4,
      "z": -80.6,
      "label": "参考赐福：Cathedral of the Forsaken"
    }
  },
  "armor:251100": {
    "kind": "armor",
    "itemId": 251100,
    "sourceKind": "map",
    "summary": "王城罗德尔地下癫火跳跳乐上层：从弃置恶兆的大教堂赐福点出发，沿东北方的隐藏门通道前进，勾引怪用癫火烧掉帐篷后拾取",
    "details": "",
    "sourceTitle": "《艾尔登法环》流浪商人帽子获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911017.html",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": 126.1,
      "z": -63.3,
      "label": "参考赐福：Frenzied Flame Proscription"
    }
  },
  "armor:260000": {
    "kind": "armor",
    "itemId": 260000,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 64.1,
      "z": 497.5,
      "label": "参考赐福：Beside the Great Bridge"
    }
  },
  "armor:260100": {
    "kind": "armor",
    "itemId": 260100,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 64.1,
      "z": 497.5,
      "label": "参考赐福：Beside the Great Bridge"
    }
  },
  "armor:260200": {
    "kind": "armor",
    "itemId": 260200,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 64.1,
      "z": 497.5,
      "label": "参考赐福：Beside the Great Bridge"
    }
  },
  "armor:260300": {
    "kind": "armor",
    "itemId": 260300,
    "sourceKind": "enemy",
    "summary": "击败逐渐崩毁的法姆·亚兹拉中的龙装大树守卫",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：异形龙",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_5.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 64.1,
      "z": 497.5,
      "label": "参考赐福：Beside the Great Bridge"
    }
  },
  "armor:270000": {
    "kind": "armor",
    "itemId": 270000,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:270100": {
    "kind": "armor",
    "itemId": 270100,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:270200": {
    "kind": "armor",
    "itemId": 270200,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:270300": {
    "kind": "armor",
    "itemId": 270300,
    "sourceKind": "enemy",
    "summary": "亚坛高原亚雷萨英雄墓地中的大树守卫（战车）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:271100": {
    "kind": "armor",
    "itemId": 271100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：大树守卫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_67.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:280000": {
    "kind": "armor",
    "itemId": 280000,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml",
    "verified": true
  },
  "armor:280100": {
    "kind": "armor",
    "itemId": 280100,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml",
    "verified": true
  },
  "armor:280200": {
    "kind": "armor",
    "itemId": 280200,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml",
    "verified": true
  },
  "armor:280300": {
    "kind": "armor",
    "itemId": 280300,
    "sourceKind": "shop",
    "summary": "击败化圣雪原米凯拉圣树的首领禁卫骑士罗蕾塔后，从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml",
    "verified": true
  },
  "armor:281100": {
    "kind": "armor",
    "itemId": 281100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：禁卫骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_49.shtml",
    "verified": true
  },
  "armor:290000": {
    "kind": "armor",
    "itemId": 290000,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉赐福点河对岸废墟中的诺克斯修士（带着白色帽子的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml",
    "verified": true
  },
  "armor:290100": {
    "kind": "armor",
    "itemId": 290100,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉赐福点河对岸废墟中的诺克斯修士（带着白色帽子的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml",
    "verified": true
  },
  "armor:290200": {
    "kind": "armor",
    "itemId": 290200,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的士兵（头盔很长的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": 29.6,
      "z": 76.5,
      "label": "参考赐福：Nokstella, Eternal City"
    }
  },
  "armor:290300": {
    "kind": "armor",
    "itemId": 290300,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的士兵（头盔很长的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml",
    "verified": true
  },
  "armor:291000": {
    "kind": "armor",
    "itemId": 291000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml",
    "verified": true
  },
  "armor:291100": {
    "kind": "armor",
    "itemId": 291100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_73.shtml",
    "verified": true
  },
  "armor:292000": {
    "kind": "armor",
    "itemId": 292000,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉士兵（带着长头盔的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml",
    "verified": true
  },
  "armor:292100": {
    "kind": "armor",
    "itemId": 292100,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉士兵（带着长头盔的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml",
    "verified": true
  },
  "armor:293000": {
    "kind": "armor",
    "itemId": 293000,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的黑夜女巫（头盔上有角的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml",
    "verified": true
  },
  "armor:293100": {
    "kind": "armor",
    "itemId": 293100,
    "sourceKind": "enemy",
    "summary": "“永恒之城”诺克史黛拉出现的黑夜女巫（头盔上有角的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑夜女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_101.shtml",
    "verified": true
  },
  "armor:294000": {
    "kind": "armor",
    "itemId": 294000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml",
    "verified": true
  },
  "armor:294100": {
    "kind": "armor",
    "itemId": 294100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：诺克斯剑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_72.shtml",
    "verified": true
  },
  "armor:300000": {
    "kind": "armor",
    "itemId": 300000,
    "sourceKind": "enemy",
    "summary": "永恒之城诺克隆恩牛头人概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=44",
    "verified": true
  },
  "armor:300100": {
    "kind": "armor",
    "itemId": 300100,
    "sourceKind": "enemy",
    "summary": "永恒之城诺克隆恩唱歌的牛头人大妈，光角头带为清掉几个之后固定掉落，其余为概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=45",
    "verified": true
  },
  "armor:300300": {
    "kind": "armor",
    "itemId": 300300,
    "sourceKind": "enemy",
    "summary": "永恒之城诺克隆恩牛头人概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=44",
    "verified": true
  },
  "armor:301000": {
    "kind": "armor",
    "itemId": 301000,
    "sourceKind": "enemy",
    "summary": "永恒之城诺克隆恩唱歌的牛头人大妈，光角头带为清掉几个之后固定掉落，其余为概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=45",
    "verified": true
  },
  "armor:301100": {
    "kind": "armor",
    "itemId": 301100,
    "sourceKind": "enemy",
    "summary": "地底-希芙拉河-祖灵森林赐福，往空地走，灯柱那唱歌的祖灵之民祭司概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：祭司毛皮上衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%A5%AD%E5%8F%B8%E6%AF%9B%E7%9A%AE%E4%B8%8A%E8%A1%A3",
    "verified": true
  },
  "armor:301300": {
    "kind": "armor",
    "itemId": 301300,
    "sourceKind": "enemy",
    "summary": "地底-希芙拉河-祖灵森林赐福，往空地走，灯柱那唱歌的祖灵之民祭司概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：祭司绑腿",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%A5%AD%E5%8F%B8%E7%BB%91%E8%85%BF",
    "verified": true
  },
  "armor:310000": {
    "kind": "armor",
    "itemId": 310000,
    "sourceKind": "enemy",
    "summary": "斗士概率掉落，王城「王城西边城墙」赐福向南走，角斗场外有两只斗士可以刷",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=80",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:310100": {
    "kind": "armor",
    "itemId": 310100,
    "sourceKind": "enemy",
    "summary": "“王城西边城墙”往竞技场走，有两个守墓斗士，杀掉可以掉落。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：守墓斗篷",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AE%88%E5%A2%93%E6%96%97%E7%AF%B7",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:310300": {
    "kind": "armor",
    "itemId": 310300,
    "sourceKind": "enemy",
    "summary": "斗士概率掉落，王城「王城西边城墙」赐福向南走，角斗场外有两只斗士可以刷",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=80",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:311100": {
    "kind": "armor",
    "itemId": 311100,
    "sourceKind": "enemy",
    "summary": "斗士概率掉落（王城「王城西边城墙」赐福向南的角斗场外有两只可刷），守墓斗篷可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=79",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:320000": {
    "kind": "armor",
    "itemId": 320000,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶化圣雪原西边出现的入侵角色鲜血贵族后获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：鲜血贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_65.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:320100": {
    "kind": "armor",
    "itemId": 320100,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶化圣雪原西边出现的入侵角色鲜血贵族后获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：鲜血贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_65.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:320300": {
    "kind": "armor",
    "itemId": 320300,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶化圣雪原西边出现的入侵角色鲜血贵族后获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：鲜血贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_65.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:330000": {
    "kind": "armor",
    "itemId": 330000,
    "sourceKind": "enemy",
    "summary": "小黄金树守卫概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：守卫面具",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AE%88%E5%8D%AB%E9%9D%A2%E5%85%B7",
    "verified": true
  },
  "armor:330100": {
    "kind": "armor",
    "itemId": 330100,
    "sourceKind": "enemy",
    "summary": "小黄金树守卫概率掉落守卫套装，开花上衣由王城开花守卫概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=7",
    "verified": true
  },
  "armor:330200": {
    "kind": "armor",
    "itemId": 330200,
    "sourceKind": "enemy",
    "summary": "小黄金树守卫概率掉落，开花上衣由王城开花守卫概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=7",
    "verified": true
  },
  "armor:330300": {
    "kind": "armor",
    "itemId": 330300,
    "sourceKind": "enemy",
    "summary": "小黄金树守卫概率掉落，开花上衣由王城开花守卫概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=7",
    "verified": true
  },
  "armor:331100": {
    "kind": "armor",
    "itemId": 331100,
    "sourceKind": "enemy",
    "summary": "交界地各地没开花的小黄金树守卫概率掉落（推荐：黄金树大教堂出来的树杈子上一大堆，开花不开花都有）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：守卫上衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AE%88%E5%8D%AB%E4%B8%8A%E8%A1%A3",
    "verified": true
  },
  "armor:340000": {
    "kind": "armor",
    "itemId": 340000,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml",
    "verified": true
  },
  "armor:340100": {
    "kind": "armor",
    "itemId": 340100,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml",
    "verified": true
  },
  "armor:340200": {
    "kind": "armor",
    "itemId": 340200,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml",
    "verified": true
  },
  "armor:340300": {
    "kind": "armor",
    "itemId": 340300,
    "sourceKind": "enemy",
    "summary": "击败盖利德赐福点「艾奥尼亚中心地」南边出现的尊腐骑士（穿着红色披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml",
    "verified": true
  },
  "armor:341000": {
    "kind": "armor",
    "itemId": 341000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml",
    "verified": true
  },
  "armor:341100": {
    "kind": "armor",
    "itemId": 341100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：尊腐骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_24.shtml",
    "verified": true
  },
  "armor:350000": {
    "kind": "armor",
    "itemId": 350000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml",
    "verified": true
  },
  "armor:350100": {
    "kind": "armor",
    "itemId": 350100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml",
    "verified": true
  },
  "armor:350200": {
    "kind": "armor",
    "itemId": 350200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml",
    "verified": true
  },
  "armor:350300": {
    "kind": "armor",
    "itemId": 350300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「东边台地」西边据点中的火焰修士（红色斗篷的敌人）有较小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_78.shtml",
    "verified": true
  },
  "armor:351000": {
    "kind": "armor",
    "itemId": 351000,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml",
    "verified": true
  },
  "armor:351100": {
    "kind": "armor",
    "itemId": 351100,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml",
    "verified": true
  },
  "armor:351200": {
    "kind": "armor",
    "itemId": 351200,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml",
    "verified": true
  },
  "armor:351300": {
    "kind": "armor",
    "itemId": 351300,
    "sourceKind": "enemy",
    "summary": "盖利德的盖利德神授塔地下的黑焰修士（拿着大剑的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：黑焰习武修士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_34.shtml",
    "verified": true
  },
  "armor:360000": {
    "kind": "armor",
    "itemId": 360000,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml",
    "verified": true
  },
  "armor:360100": {
    "kind": "armor",
    "itemId": 360100,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml",
    "verified": true
  },
  "armor:360200": {
    "kind": "armor",
    "itemId": 360200,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml",
    "verified": true
  },
  "armor:360300": {
    "kind": "armor",
    "itemId": 360300,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落巨人山顶赐福点「巨人山顶地下墓地」附近的火焰主教掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml",
    "verified": true
  },
  "armor:361100": {
    "kind": "armor",
    "itemId": 361100,
    "sourceKind": "enemy",
    "summary": "亚坛高原莱多要塞的火焰主教掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：火焰主教",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_77.shtml",
    "verified": true
  },
  "armor:370000": {
    "kind": "armor",
    "itemId": 370000,
    "sourceKind": "enemy",
    "summary": "交界地各地的权贵魔法师概率掉落。可以在赐福点“通往城寨的道路”南方的“王室领地废墟”刷取。宁姆格福---“驿站街遗迹的地下室”赐福点---外面的棺材车队---击败车队里的权贵魔法师（有大斗篷的）---有几率得到权贵头带，相对更好刷",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：权贵头带",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%9D%83%E8%B4%B5%E5%A4%B4%E5%B8%A6",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -422.2,
      "z": 431.3,
      "label": "参考赐福：Agheel Lake South"
    }
  },
  "armor:370100": {
    "kind": "armor",
    "itemId": 370100,
    "sourceKind": "enemy",
    "summary": "交界地各地的权贵魔法师概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：权贵上衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%9D%83%E8%B4%B5%E4%B8%8A%E8%A1%A3",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -422.2,
      "z": 431.3,
      "label": "参考赐福：Agheel Lake South"
    }
  },
  "armor:370300": {
    "kind": "armor",
    "itemId": 370300,
    "sourceKind": "enemy",
    "summary": "穿着此套装的权贵活尸概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=4",
    "verified": true
  },
  "armor:371100": {
    "kind": "armor",
    "itemId": 371100,
    "sourceKind": "enemy",
    "summary": "“校舍内的教室”西门出去3个权贵掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：权贵上衣（轻装）",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%9D%83%E8%B4%B5%E4%B8%8A%E8%A1%A3%EF%BC%88%E8%BD%BB%E8%A3%85%EF%BC%89",
    "verified": true
  },
  "armor:380000": {
    "kind": "armor",
    "itemId": 380000,
    "sourceKind": "enemy",
    "summary": "交界地各地的权贵骑士。推荐刷点：“驿站街遗迹的地下室”赐福点传送上来，车队中的权贵骑士掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：权贵帽子",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%9D%83%E8%B4%B5%E5%B8%BD%E5%AD%90",
    "verified": true,
    "pin": {
      "mapId": "m60_11_09_02",
      "x": -261.8,
      "z": -19.8,
      "label": "参考赐福：Mistwood Outskirts"
    }
  },
  "armor:380100": {
    "kind": "armor",
    "itemId": 380100,
    "sourceKind": "enemy",
    "summary": "交界地各地的权贵骑士（戴帽子拿刺剑的）概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：权贵大衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%9D%83%E8%B4%B5%E5%A4%A7%E8%A1%A3",
    "verified": true
  },
  "armor:390000": {
    "kind": "armor",
    "itemId": 390000,
    "sourceKind": "enemy",
    "summary": "宁姆格福驿站街遗迹附近出现的年迈权贵（举旗的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年迈权贵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_119.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -422.2,
      "z": 431.3,
      "label": "参考赐福：Agheel Lake South"
    }
  },
  "armor:390100": {
    "kind": "armor",
    "itemId": 390100,
    "sourceKind": "enemy",
    "summary": "宁姆格福驿站街遗迹附近出现的年迈权贵（举旗的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年迈权贵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_119.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -422.2,
      "z": 431.3,
      "label": "参考赐福：Agheel Lake South"
    }
  },
  "armor:390300": {
    "kind": "armor",
    "itemId": 390300,
    "sourceKind": "enemy",
    "summary": "宁姆格福驿站街遗迹附近出现的年迈权贵（举旗的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年迈权贵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_119.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -422.2,
      "z": 431.3,
      "label": "参考赐福：Agheel Lake South"
    }
  },
  "armor:420000": {
    "kind": "armor",
    "itemId": 420000,
    "sourceKind": "enemy",
    "summary": "击杀野兽神殿 前区域的恶兵概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：恶兵头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%81%B6%E5%85%B5%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:420100": {
    "kind": "armor",
    "itemId": 420100,
    "sourceKind": "enemy",
    "summary": "恶兵概率掉落，禁域那条路上全是恶兵",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=78",
    "verified": true
  },
  "armor:420200": {
    "kind": "armor",
    "itemId": 420200,
    "sourceKind": "enemy",
    "summary": "恶兵概率掉落，禁域那条路上全是恶兵",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=78",
    "verified": true
  },
  "armor:420300": {
    "kind": "armor",
    "itemId": 420300,
    "sourceKind": "enemy",
    "summary": "恶兵概率掉落，禁域那条路上全是恶兵",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=78",
    "verified": true
  },
  "armor:430000": {
    "kind": "armor",
    "itemId": 430000,
    "sourceKind": "map",
    "summary": "流水洞窟–沿着墙壁往前走–跳到对面–进入矿道进入后继续往前–看见毒池有白色物品–收刮",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：贤者风帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%B4%A4%E8%80%85%E9%A3%8E%E5%B8%BD",
    "verified": true,
    "pin": {
      "mapId": "m31_04_00_00",
      "x": 26.1,
      "z": -59.3,
      "label": "参考赐福：Stillwater Cave"
    }
  },
  "armor:430100": {
    "kind": "armor",
    "itemId": 430100,
    "sourceKind": "map",
    "summary": "湖区留水洞窟内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=33",
    "verified": true,
    "pin": {
      "mapId": "m31_04_00_00",
      "x": 26.1,
      "z": -59.3,
      "label": "参考赐福：Stillwater Cave"
    }
  },
  "armor:430300": {
    "kind": "armor",
    "itemId": 430300,
    "sourceKind": "map",
    "summary": "湖区留水洞窟内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=33",
    "verified": true,
    "pin": {
      "mapId": "m31_04_00_00",
      "x": 26.1,
      "z": -59.3,
      "label": "参考赐福：Stillwater Cave"
    }
  },
  "armor:440000": {
    "kind": "armor",
    "itemId": 440000,
    "sourceKind": "enemy",
    "summary": "交界地所有南瓜头士兵均会掉落（推荐圣人桥赐福点处南瓜头士兵）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：南瓜头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%8D%97%E7%93%9C%E5%A4%B4%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 404.9,
      "z": 384.7,
      "label": "参考赐福：圣人桥"
    }
  },
  "armor:460000": {
    "kind": "armor",
    "itemId": 460000,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml",
    "verified": true
  },
  "armor:460100": {
    "kind": "armor",
    "itemId": 460100,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml",
    "verified": true
  },
  "armor:460200": {
    "kind": "armor",
    "itemId": 460200,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml",
    "verified": true
  },
  "armor:460300": {
    "kind": "armor",
    "itemId": 460300,
    "sourceKind": "shop",
    "summary": "击败灰城罗德尔的葛孚雷后可以从圆桌厅堂的“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml",
    "verified": true
  },
  "armor:461100": {
    "kind": "armor",
    "itemId": 461100,
    "sourceKind": "map",
    "summary": "在赐福点调整（需要黄金裁缝工具，可在湖之利耶尼亚的结缘教堂宝箱中获得）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：艾尔登之王",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_9.shtml",
    "verified": true
  },
  "armor:470000": {
    "kind": "armor",
    "itemId": 470000,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_09_02",
      "x": -427.5,
      "z": 86.1,
      "label": "参考赐福：Starscourge Radahn"
    }
  },
  "armor:470100": {
    "kind": "armor",
    "itemId": 470100,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_09_02",
      "x": -427.5,
      "z": 86.1,
      "label": "参考赐福：Starscourge Radahn"
    }
  },
  "armor:470200": {
    "kind": "armor",
    "itemId": 470200,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_09_02",
      "x": -427.5,
      "z": 86.1,
      "label": "参考赐福：Starscourge Radahn"
    }
  },
  "armor:470300": {
    "kind": "armor",
    "itemId": 470300,
    "sourceKind": "shop",
    "summary": "击败“碎星”拉塔恩后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_09_02",
      "x": -427.5,
      "z": 86.1,
      "label": "参考赐福：Starscourge Radahn"
    }
  },
  "armor:471100": {
    "kind": "armor",
    "itemId": 471100,
    "sourceKind": "map",
    "summary": "在赐福点调整（需要黄金缝衣针）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_104.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_09_02",
      "x": -427.5,
      "z": 86.1,
      "label": "参考赐福：Starscourge Radahn"
    }
  },
  "armor:480100": {
    "kind": "armor",
    "itemId": 480100,
    "sourceKind": "shop",
    "summary": "击败鲜血君王蒙格后在大赐福婆婆处购买，建议买两件，可以修改轻装",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：鲜血君王上衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%B2%9C%E8%A1%80%E5%90%9B%E7%8E%8B%E4%B8%8A%E8%A1%A3",
    "verified": true
  },
  "armor:481100": {
    "kind": "armor",
    "itemId": 481100,
    "sourceKind": "shop",
    "summary": "击败鲜血君王蒙格后，圆桌厅堂解指老妪出售鲜血君王套装；上衣可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=50",
    "verified": true
  },
  "armor:510000": {
    "kind": "armor",
    "itemId": 510000,
    "sourceKind": "shop",
    "summary": "打败主线首领“满月女王”蕾娜菈在圆桌厅堂购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：女王弯月冠",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%A5%B3%E7%8E%8B%E5%BC%AF%E6%9C%88%E5%86%A0",
    "verified": true
  },
  "armor:510100": {
    "kind": "armor",
    "itemId": 510100,
    "sourceKind": "shop",
    "summary": "击败满月女王后圆桌厅堂解指婆婆出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=25",
    "verified": true
  },
  "armor:510200": {
    "kind": "armor",
    "itemId": 510200,
    "sourceKind": "shop",
    "summary": "在击败“满月女王”蕾娜菈后在“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：女王手环",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%A5%B3%E7%8E%8B%E6%89%8B%E7%8E%AF",
    "verified": true
  },
  "armor:510300": {
    "kind": "armor",
    "itemId": 510300,
    "sourceKind": "shop",
    "summary": "击败满月女王后圆桌厅堂解指婆婆出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=25",
    "verified": true
  },
  "armor:520000": {
    "kind": "armor",
    "itemId": 520000,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml",
    "verified": true
  },
  "armor:520100": {
    "kind": "armor",
    "itemId": 520100,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml",
    "verified": true
  },
  "armor:520200": {
    "kind": "armor",
    "itemId": 520200,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml",
    "verified": true
  },
  "armor:520300": {
    "kind": "armor",
    "itemId": 520300,
    "sourceKind": "enemy",
    "summary": "击败盖利德神授塔的首领「神皮使徒」掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮使徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_17.shtml",
    "verified": true
  },
  "armor:530000": {
    "kind": "armor",
    "itemId": 530000,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_11_00_00",
      "x": 53.3,
      "z": 14.9,
      "label": "参考赐福：Liurnia Tower Bridge"
    }
  },
  "armor:530100": {
    "kind": "armor",
    "itemId": 530100,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_11_00_00",
      "x": 453.8,
      "z": 80,
      "label": "参考赐福：Divine Tower of Liurnia"
    }
  },
  "armor:530200": {
    "kind": "armor",
    "itemId": 530200,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_11_00_00",
      "x": 453.8,
      "z": 80,
      "label": "参考赐福：Divine Tower of Liurnia"
    }
  },
  "armor:530300": {
    "kind": "armor",
    "itemId": 530300,
    "sourceKind": "enemy",
    "summary": "击杀卡利亚书斋通往利耶尼亚神授塔桥上的神皮贵族后获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=47",
    "verified": true,
    "pin": {
      "mapId": "m34_11_00_00",
      "x": 53.3,
      "z": 14.9,
      "label": "参考赐福：Liurnia Tower Bridge"
    }
  },
  "armor:540000": {
    "kind": "armor",
    "itemId": 540000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml",
    "verified": true
  },
  "armor:540100": {
    "kind": "armor",
    "itemId": 540100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml",
    "verified": true
  },
  "armor:540200": {
    "kind": "armor",
    "itemId": 540200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml",
    "verified": true
  },
  "armor:540300": {
    "kind": "armor",
    "itemId": 540300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚赐福点「白金村」附近的堕落调香师（穿着毛皮披风的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml",
    "verified": true
  },
  "armor:541100": {
    "kind": "armor",
    "itemId": 541100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：堕落调香师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_63.shtml",
    "verified": true
  },
  "armor:570000": {
    "kind": "armor",
    "itemId": 570000,
    "sourceKind": "enemy",
    "summary": "亚雷萨英雄墓地首领双熔炉骑士，击败掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：熔炉斧形盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%86%94%E7%82%89%E6%96%A7%E5%BD%A2%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:570100": {
    "kind": "armor",
    "itemId": 570100,
    "sourceKind": "enemy",
    "summary": "王城外围——亚雷萨英雄墓地——首领掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：熔炉斧形铠",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%86%94%E7%82%89%E6%96%A7%E5%BD%A2%E9%93%A0",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:570200": {
    "kind": "armor",
    "itemId": 570200,
    "sourceKind": "enemy",
    "summary": "王城罗德尔亚雷萨英雄墓地，击败双熔炉骑士后获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:570300": {
    "kind": "armor",
    "itemId": 570300,
    "sourceKind": "enemy",
    "summary": "王城罗德尔亚雷萨英雄墓地，击败双熔炉骑士后获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:571000": {
    "kind": "armor",
    "itemId": 571000,
    "sourceKind": "enemy",
    "summary": "深根底层——击败首领“熔炉骑士”志留亚获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：熔炉树形盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%86%94%E7%82%89%E6%A0%91%E5%BD%A2%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -598.4,
      "z": -609.9,
      "label": "参考赐福：Deeproot Depths"
    }
  },
  "armor:571100": {
    "kind": "armor",
    "itemId": 571100,
    "sourceKind": "enemy",
    "summary": "深根底层——熔炉骑士志留亚掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：熔炉树形铠",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%86%94%E7%82%89%E6%A0%91%E5%BD%A2%E9%93%A0",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -598.4,
      "z": -609.9,
      "label": "参考赐福：Deeproot Depths"
    }
  },
  "armor:572100": {
    "kind": "armor",
    "itemId": 572100,
    "sourceKind": "other",
    "summary": "裁缝改",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "armor:573100": {
    "kind": "armor",
    "itemId": 573100,
    "sourceKind": "other",
    "summary": "裁缝改",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -598.4,
      "z": -609.9,
      "label": "参考赐福：Deeproot Depths"
    }
  },
  "armor:580000": {
    "kind": "armor",
    "itemId": 580000,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_11_00_00",
      "x": 140.4,
      "z": 92.3,
      "label": "参考赐福：Sellia Hideaway"
    }
  },
  "armor:580100": {
    "kind": "armor",
    "itemId": 580100,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_11_00_00",
      "x": 140.4,
      "z": 92.3,
      "label": "参考赐福：Sellia Hideaway"
    }
  },
  "armor:580200": {
    "kind": "armor",
    "itemId": 580200,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_11_00_00",
      "x": 140.4,
      "z": 92.3,
      "label": "参考赐福：Sellia Hideaway"
    }
  },
  "armor:580300": {
    "kind": "armor",
    "itemId": 580300,
    "sourceKind": "quest",
    "summary": "在角色瑟濂支线中选择协助瑟濂后，返回瑟利亚隐藏洞窟中拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卢瑟特",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_113.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_11_00_00",
      "x": 140.4,
      "z": 92.3,
      "label": "参考赐福：Sellia Hideaway"
    }
  },
  "armor:581000": {
    "kind": "armor",
    "itemId": 581000,
    "sourceKind": "quest",
    "summary": "瑟濂支线，选择协助瑟濂，之后可以在亚坛高原格密尔火山的亚兹勒所在位置拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：亚兹勒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_13_02",
      "x": -122.8,
      "z": -182.8,
      "label": "参考赐福：Primeval Sorcerer Azur"
    }
  },
  "armor:581100": {
    "kind": "armor",
    "itemId": 581100,
    "sourceKind": "quest",
    "summary": "瑟濂支线，选择协助瑟濂，之后可以在亚坛高原格密尔火山的亚兹勒所在位置拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：亚兹勒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true
  },
  "armor:581200": {
    "kind": "armor",
    "itemId": 581200,
    "sourceKind": "quest",
    "summary": "瑟濂支线，选择协助瑟濂，之后可以在亚坛高原格密尔火山的亚兹勒所在位置拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：亚兹勒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_13_02",
      "x": -122.8,
      "z": -182.8,
      "label": "参考赐福：Primeval Sorcerer Azur"
    }
  },
  "armor:590000": {
    "kind": "armor",
    "itemId": 590000,
    "sourceKind": "enemy",
    "summary": "灰城罗德尔——击败首领“百智爵士”基旬.奥夫尼尔获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：百智头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%99%BE%E6%99%BA%E5%A4%B4%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -132,
      "z": -386.5,
      "label": "参考赐福：Erdtree Sanctuary"
    }
  },
  "armor:590100": {
    "kind": "armor",
    "itemId": 590100,
    "sourceKind": "enemy",
    "summary": "击败主线首领——“百智爵士”基甸·奥夫尼尔后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：百智铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%99%BE%E6%99%BA%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:590200": {
    "kind": "armor",
    "itemId": 590200,
    "sourceKind": "enemy",
    "summary": "灰城后击败首领“百智爵士”基甸·奥夫尼尔获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=120",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -132,
      "z": -386.5,
      "label": "参考赐福：Erdtree Sanctuary"
    }
  },
  "armor:590300": {
    "kind": "armor",
    "itemId": 590300,
    "sourceKind": "enemy",
    "summary": "灰城后击败首领“百智爵士”基甸·奥夫尼尔获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=120",
    "verified": true
  },
  "armor:591100": {
    "kind": "armor",
    "itemId": 591100,
    "sourceKind": "enemy",
    "summary": "灰城后击败首领「百智爵士」基甸后获得百智套装，铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=120",
    "verified": true
  },
  "armor:600000": {
    "kind": "armor",
    "itemId": 600000,
    "sourceKind": "quest",
    "summary": "死眠少女菲雅支线——迪的尸体上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：孪生头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AD%AA%E7%94%9F%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:600100": {
    "kind": "armor",
    "itemId": 600100,
    "sourceKind": "map",
    "summary": "‘狩猎死亡’迪的尸体上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：孪生铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AD%AA%E7%94%9F%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:600200": {
    "kind": "armor",
    "itemId": 600200,
    "sourceKind": "quest",
    "summary": "死眠少女菲雅在圆桌杀害迪之后拾取(在永恒之城诺克隆恩导水桥可以把这套铠甲交给迪的弟弟，可以得到一个动作，迪的弟弟会帮你打双石像鬼，菲雅支线完成后迪的弟弟会来鞭菲雅的尸，坐火刷新能再次得到孪生一套，还多一把孪生剑)",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=114",
    "verified": true
  },
  "armor:600300": {
    "kind": "armor",
    "itemId": 600300,
    "sourceKind": "quest",
    "summary": "死眠少女菲雅在圆桌杀害迪之后拾取(在永恒之城诺克隆恩导水桥可以把这套铠甲交给迪的弟弟，可以得到一个动作，迪的弟弟会帮你打双石像鬼，菲雅支线完成后迪的弟弟会来鞭菲雅的尸，坐火刷新能再次得到孪生一套，还多一把孪生剑)",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=114",
    "verified": true
  },
  "armor:601100": {
    "kind": "armor",
    "itemId": 601100,
    "sourceKind": "quest",
    "summary": "死眠少女菲雅在圆桌杀害「狩猎死亡」之后拾取孪生套装，铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=114",
    "verified": true
  },
  "armor:610000": {
    "kind": "armor",
    "itemId": 610000,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true
  },
  "armor:610100": {
    "kind": "armor",
    "itemId": 610100,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true
  },
  "armor:610200": {
    "kind": "armor",
    "itemId": 610200,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true
  },
  "armor:610300": {
    "kind": "armor",
    "itemId": 610300,
    "sourceKind": "other",
    "summary": "未实装。原本有个关于“游僧”里可的支线，在支线最后他会在我们击杀血王后出现在米凯拉蛋旁边，对话完刷新地图就能捡到",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true
  },
  "armor:611000": {
    "kind": "armor",
    "itemId": 611000,
    "sourceKind": "other",
    "summary": "来源未知，目前持有非轻装版也不能通过裁缝获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true
  },
  "armor:611100": {
    "kind": "armor",
    "itemId": 611100,
    "sourceKind": "other",
    "summary": "来源未知，目前持有非轻装版也不能通过裁缝获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true
  },
  "armor:620000": {
    "kind": "armor",
    "itemId": 620000,
    "sourceKind": "shop",
    "summary": "预言家初始装备从亚坛高原「遁世者的破屋」中的遁世商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": 380.8,
      "z": -117.4,
      "label": "参考赐福：Hermit Merchant's Shack"
    }
  },
  "armor:620100": {
    "kind": "armor",
    "itemId": 620100,
    "sourceKind": "quest",
    "summary": "推进金面具支线，王城变成灰城后能找到柯林，对话，刷新地图后柯林消失，留下柯林长袍",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=30",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "armor:620300": {
    "kind": "armor",
    "itemId": 620300,
    "sourceKind": "shop",
    "summary": "预言家初始装备从亚坛高原「遁世者的破屋」中的遁世商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml",
    "verified": true
  },
  "armor:621100": {
    "kind": "armor",
    "itemId": 621100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml",
    "verified": true
  },
  "armor:622100": {
    "kind": "armor",
    "itemId": 622100,
    "sourceKind": "shop",
    "summary": "预言家初始装备从亚坛高原「遁世者的破屋」中的遁世商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：预言家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_99.shtml",
    "verified": true
  },
  "armor:630000": {
    "kind": "armor",
    "itemId": 630000,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": 172.1,
      "z": -268.8,
      "label": "参考赐福：Liurnia Lake Shore"
    }
  },
  "armor:630100": {
    "kind": "armor",
    "itemId": 630100,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": 172.1,
      "z": -268.8,
      "label": "参考赐福：Liurnia Lake Shore"
    }
  },
  "armor:630200": {
    "kind": "armor",
    "itemId": 630200,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": 172.1,
      "z": -268.8,
      "label": "参考赐福：Liurnia Lake Shore"
    }
  },
  "armor:630300": {
    "kind": "armor",
    "itemId": 630300,
    "sourceKind": "shop",
    "summary": "观星者初始装备从湖之利耶尼亚赐福点「利耶尼亚湖（湖边）」的流浪民族商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": 172.1,
      "z": -268.8,
      "label": "参考赐福：Liurnia Lake Shore"
    }
  },
  "armor:631100": {
    "kind": "armor",
    "itemId": 631100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：观星者",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_85.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": 172.1,
      "z": -268.8,
      "label": "参考赐福：Liurnia Lake Shore"
    }
  },
  "armor:640000": {
    "kind": "armor",
    "itemId": 640000,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -220.2,
      "z": -220.5,
      "label": "参考赐福：Lower Capital Church"
    }
  },
  "armor:640100": {
    "kind": "armor",
    "itemId": 640100,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -220.2,
      "z": -220.5,
      "label": "参考赐福：Lower Capital Church"
    }
  },
  "armor:640200": {
    "kind": "armor",
    "itemId": 640200,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -220.2,
      "z": -220.5,
      "label": "参考赐福：Lower Capital Church"
    }
  },
  "armor:640300": {
    "kind": "armor",
    "itemId": 640300,
    "sourceKind": "map",
    "summary": "亚坛高原王城罗德尔赐福点「大道旁露台」出发，在教堂内拾取，具体路线请参考下方视频",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -220.2,
      "z": -220.5,
      "label": "参考赐福：Lower Capital Church"
    }
  },
  "armor:641100": {
    "kind": "armor",
    "itemId": 641100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：莱恩尼尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_102.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -220.2,
      "z": -220.5,
      "label": "参考赐福：Lower Capital Church"
    }
  },
  "armor:650000": {
    "kind": "armor",
    "itemId": 650000,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml",
    "verified": true
  },
  "armor:650100": {
    "kind": "armor",
    "itemId": 650100,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:650200": {
    "kind": "armor",
    "itemId": 650200,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml",
    "verified": true
  },
  "armor:650300": {
    "kind": "armor",
    "itemId": 650300,
    "sourceKind": "quest",
    "summary": "完成亚坛高原火山官邸角色塔妮丝的支线奖励获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml",
    "verified": true
  },
  "armor:651000": {
    "kind": "armor",
    "itemId": 651000,
    "sourceKind": "quest",
    "summary": "狄亚罗斯支线——最终在狄亚罗斯尸体上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：狄亚罗斯头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8B%84%E4%BA%9A%E7%BD%97%E6%96%AF%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:652100": {
    "kind": "armor",
    "itemId": 652100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：霍斯劳",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_86.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:660000": {
    "kind": "armor",
    "itemId": 660000,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml",
    "verified": true
  },
  "armor:660100": {
    "kind": "armor",
    "itemId": 660100,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml",
    "verified": true
  },
  "armor:660200": {
    "kind": "armor",
    "itemId": 660200,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml",
    "verified": true
  },
  "armor:660300": {
    "kind": "armor",
    "itemId": 660300,
    "sourceKind": "shop",
    "summary": "流浪骑士初始装备巨人山顶观星废墟西边山崖左转下方的「遁世商人」处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml",
    "verified": true
  },
  "armor:661100": {
    "kind": "armor",
    "itemId": 661100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：流浪骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_84.shtml",
    "verified": true
  },
  "armor:670000": {
    "kind": "armor",
    "itemId": 670000,
    "sourceKind": "shop",
    "summary": "剑士职业初始装备，也可在魔法学院雷亚卢卡利亚学院正门口赐福沿路向东南走的商人处购买",
    "details": "",
    "sourceTitle": "《艾尔登法环》剑士套装获取攻略",
    "sourceUrl": "https://playgame.wiki/eldenring/gonglue/d28edf8ce0",
    "verified": true
  },
  "armor:670100": {
    "kind": "armor",
    "itemId": 670100,
    "sourceKind": "shop",
    "summary": "剑士职业初始装备，也可在魔法学院雷亚卢卡利亚学院正门口赐福沿路向东南走的商人处购买",
    "details": "",
    "sourceTitle": "《艾尔登法环》剑士套装获取攻略",
    "sourceUrl": "https://playgame.wiki/eldenring/gonglue/d28edf8ce0",
    "verified": true
  },
  "armor:670200": {
    "kind": "armor",
    "itemId": 670200,
    "sourceKind": "shop",
    "summary": "剑士职业初始装备，也可在魔法学院雷亚卢卡利亚学院正门口赐福沿路向东南走的商人处购买",
    "details": "",
    "sourceTitle": "《艾尔登法环》剑士套装获取攻略",
    "sourceUrl": "https://playgame.wiki/eldenring/gonglue/d28edf8ce0",
    "verified": true
  },
  "armor:670300": {
    "kind": "armor",
    "itemId": 670300,
    "sourceKind": "shop",
    "summary": "剑士职业初始装备，也可在魔法学院雷亚卢卡利亚学院正门口赐福沿路向东南走的商人处购买",
    "details": "",
    "sourceTitle": "《艾尔登法环》剑士套装获取攻略",
    "sourceUrl": "https://playgame.wiki/eldenring/gonglue/d28edf8ce0",
    "verified": true
  },
  "armor:680000": {
    "kind": "armor",
    "itemId": 680000,
    "sourceKind": "enemy",
    "summary": "蒙格温王朝区域，击败白面具梵雷的三次入侵后获得整套战场医师装备（需到达特定点位且未击杀血王）",
    "details": "",
    "sourceTitle": "《艾尔登法环》战场医师白上衣获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911076.html",
    "verified": true,
    "pin": {
      "mapId": "m12_05_00_00",
      "x": 1899.1,
      "z": 1115.7,
      "label": "参考赐福：Palace Approach Ledge-Road"
    }
  },
  "armor:680100": {
    "kind": "armor",
    "itemId": 680100,
    "sourceKind": "enemy",
    "summary": "蒙格温王朝区域，击败白面具梵雷的三次入侵后获得整套战场医师装备（需到达特定点位且未击杀血王）",
    "details": "",
    "sourceTitle": "《艾尔登法环》战场医师白上衣获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911076.html",
    "verified": true
  },
  "armor:680200": {
    "kind": "armor",
    "itemId": 680200,
    "sourceKind": "enemy",
    "summary": "蒙格温王朝区域，击败白面具梵雷的三次入侵后获得整套战场医师装备（需到达特定点位且未击杀血王）",
    "details": "",
    "sourceTitle": "《艾尔登法环》战场医师白上衣获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911076.html",
    "verified": true
  },
  "armor:680300": {
    "kind": "armor",
    "itemId": 680300,
    "sourceKind": "enemy",
    "summary": "蒙格温王朝区域，击败白面具梵雷的三次入侵后获得整套战场医师装备（需到达特定点位且未击杀血王）",
    "details": "",
    "sourceTitle": "《艾尔登法环》战场医师白上衣获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911076.html",
    "verified": true
  },
  "armor:681100": {
    "kind": "armor",
    "itemId": 681100,
    "sourceKind": "enemy",
    "summary": "蒙格温王朝区域，击败白面具梵雷的三次入侵后获得整套战场医师装备（需到达特定点位且未击杀血王）",
    "details": "",
    "sourceTitle": "《艾尔登法环》战场医师白上衣获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3911076.html",
    "verified": true
  },
  "armor:690000": {
    "kind": "armor",
    "itemId": 690000,
    "sourceKind": "enemy",
    "summary": "击退“王骸”恩夏的入侵后在“百智爵士”基旬.奥夫尼尔的门口拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：王骸头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8E%8B%E9%AA%B8%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:690100": {
    "kind": "armor",
    "itemId": 690100,
    "sourceKind": "enemy",
    "summary": "在击退“王骸”恩夏的入侵后在“百智爵士”的门前拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：王骸铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8E%8B%E9%AA%B8%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:690200": {
    "kind": "armor",
    "itemId": 690200,
    "sourceKind": "enemy",
    "summary": "在湖区白金村取得圣树秘密符节后，传送回圆桌厅堂触发“王骸”恩夏入侵，击败后在百智爵士门口拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=119",
    "verified": true
  },
  "armor:690300": {
    "kind": "armor",
    "itemId": 690300,
    "sourceKind": "enemy",
    "summary": "在湖区白金村取得圣树秘密符节后，传送回圆桌厅堂触发“王骸”恩夏入侵，击败后在百智爵士门口拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=119",
    "verified": true
  },
  "armor:720000": {
    "kind": "armor",
    "itemId": 720000,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 93.7,
      "z": -116.1,
      "label": "参考赐福：Rykard, Lord of Blasphemy"
    }
  },
  "armor:720100": {
    "kind": "armor",
    "itemId": 720100,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "armor:720200": {
    "kind": "armor",
    "itemId": 720200,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 93.7,
      "z": -116.1,
      "label": "参考赐福：Rykard, Lord of Blasphemy"
    }
  },
  "armor:720300": {
    "kind": "armor",
    "itemId": 720300,
    "sourceKind": "quest",
    "summary": "完成“叛律者”贝纳尔在火山官邸交给你的全部任务后，在挑战逐渐崩毁的法姆·亚兹拉的最终首领野兽祭祀前会遭遇其入侵（位置大概在一个单独的圆亭，进入开宝箱时他就会出来），击杀后获得；前期直接击杀骑士贝纳尔也能获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "armor:721100": {
    "kind": "armor",
    "itemId": 721100,
    "sourceKind": "other",
    "summary": "裁缝改",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "armor:730000": {
    "kind": "armor",
    "itemId": 730000,
    "sourceKind": "shop",
    "summary": "勇者初始携带，在盖利德的艾奥尼亚沼泽（南岸）赐福点西南方的流浪民族的商人处可购买勇者一套，头带+肩甲+臂甲+绑腿。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：勇者头带",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%8B%87%E8%80%85%E5%A4%B4%E5%B8%A6",
    "verified": true
  },
  "armor:730100": {
    "kind": "armor",
    "itemId": 730100,
    "sourceKind": "shop",
    "summary": "勇者初始携带，在盖利德的艾奥尼亚沼泽（南岸）赐福点西南方的流浪民族的商人处可购买勇者一套，头带+肩甲+臂甲+绑腿。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：勇者肩甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%8B%87%E8%80%85%E8%82%A9%E7%94%B2",
    "verified": true
  },
  "armor:730200": {
    "kind": "armor",
    "itemId": 730200,
    "sourceKind": "shop",
    "summary": "勇者初始携带，在盖利德的艾奥尼亚沼泽（南岸）赐福点西南方的流浪民族的商人处可购买勇者一套，头带+肩甲+臂甲+绑腿。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：勇者臂甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%8B%87%E8%80%85%E8%87%82%E7%94%B2",
    "verified": true
  },
  "armor:730300": {
    "kind": "armor",
    "itemId": 730300,
    "sourceKind": "shop",
    "summary": "勇者初始携带，在盖利德的艾奥尼亚沼泽（南岸）赐福点西南方的流浪民族的商人处可购买勇者一套，头带+肩甲+臂甲+绑腿。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：勇者绑腿",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%8B%87%E8%80%85%E7%BB%91%E8%85%BF",
    "verified": true
  },
  "armor:740000": {
    "kind": "armor",
    "itemId": 740000,
    "sourceKind": "map",
    "summary": "暗红风帽在史东薇尔城吊着巨人的露天小房间拾取（捡蛹群的遗物的地方）；其余部件在亚坛高原「移送罪人之路（路旁）」赐福北边的风车附近拾取",
    "details": "",
    "sourceTitle": "《艾尔登法环》贵族套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933772.html",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -262.3,
      "z": 113,
      "label": "参考赐福：Rampart Tower"
    }
  },
  "armor:740100": {
    "kind": "armor",
    "itemId": 740100,
    "sourceKind": "map",
    "summary": "暗红风帽在史东薇尔城吊着巨人的露天小房间拾取（捡蛹群的遗物的地方）；其余部件在亚坛高原「移送罪人之路（路旁）」赐福北边的风车附近拾取",
    "details": "",
    "sourceTitle": "《艾尔登法环》贵族套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933772.html",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:740200": {
    "kind": "armor",
    "itemId": 740200,
    "sourceKind": "map",
    "summary": "暗红风帽在史东薇尔城吊着巨人的露天小房间拾取（捡蛹群的遗物的地方）；其余部件在亚坛高原「移送罪人之路（路旁）」赐福北边的风车附近拾取",
    "details": "",
    "sourceTitle": "《艾尔登法环》贵族套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933772.html",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:740300": {
    "kind": "armor",
    "itemId": 740300,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚卡利亚书斋赐福点「利耶尼亚神授塔（桥上）」附近出现的神皮贵族掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：神皮贵族",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_16.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:741000": {
    "kind": "armor",
    "itemId": 741000,
    "sourceKind": "map",
    "summary": "暗红风帽在史东薇尔城吊着巨人的露天小房间拾取（捡蛹群的遗物的地方）；其余部件在亚坛高原「移送罪人之路（路旁）」赐福北边的风车附近拾取",
    "details": "",
    "sourceTitle": "《艾尔登法环》贵族套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933772.html",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:760000": {
    "kind": "armor",
    "itemId": 760000,
    "sourceKind": "shop",
    "summary": "天空城击败首领「黑剑」玛利喀斯后，圆桌厅堂解指老妪出售玛利喀斯套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=122",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "armor:760100": {
    "kind": "armor",
    "itemId": 760100,
    "sourceKind": "shop",
    "summary": "天空城击败首领「黑剑」玛利喀斯后，圆桌厅堂解指老妪出售玛利喀斯套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=122",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "armor:760200": {
    "kind": "armor",
    "itemId": 760200,
    "sourceKind": "shop",
    "summary": "天空城击败首领「黑剑」玛利喀斯后，圆桌厅堂解指老妪出售玛利喀斯套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=122",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "armor:760300": {
    "kind": "armor",
    "itemId": 760300,
    "sourceKind": "shop",
    "summary": "天空城击败首领「黑剑」玛利喀斯后，圆桌厅堂解指老妪出售玛利喀斯套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=122",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "armor:761100": {
    "kind": "armor",
    "itemId": 761100,
    "sourceKind": "shop",
    "summary": "天空城击败首领「黑剑」玛利喀斯后，圆桌厅堂解指老妪出售玛利喀斯套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=122",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "armor:770000": {
    "kind": "armor",
    "itemId": 770000,
    "sourceKind": "shop",
    "summary": "在击败“腐败女神”玛莲妮亚后在圆桌厅堂老奶奶处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：玛莲妮亚飞翼头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8E%9B%E8%8E%B2%E5%A6%AE%E4%BA%9A%E9%A3%9E%E7%BF%BC%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:770100": {
    "kind": "armor",
    "itemId": 770100,
    "sourceKind": "shop",
    "summary": "击败女武神后圆桌厅堂解指婆婆购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：玛莲妮亚铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8E%9B%E8%8E%B2%E5%A6%AE%E4%BA%9A%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:770200": {
    "kind": "armor",
    "itemId": 770200,
    "sourceKind": "shop",
    "summary": "击败女武神后圆桌厅堂解指婆婆出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=103",
    "verified": true
  },
  "armor:770300": {
    "kind": "armor",
    "itemId": 770300,
    "sourceKind": "shop",
    "summary": "击败女武神后圆桌厅堂解指婆婆出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=103",
    "verified": true
  },
  "armor:771100": {
    "kind": "armor",
    "itemId": 771100,
    "sourceKind": "shop",
    "summary": "击败女武神玛莲妮亚后，圆桌厅堂解指老妪出售玛莲妮亚套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=103",
    "verified": true
  },
  "armor:780000": {
    "kind": "armor",
    "itemId": 780000,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": 466.5,
      "z": 69.4,
      "label": "参考赐福：索尔城屋顶"
    }
  },
  "armor:780100": {
    "kind": "armor",
    "itemId": 780100,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": 466.5,
      "z": 69.4,
      "label": "参考赐福：索尔城屋顶"
    }
  },
  "armor:780200": {
    "kind": "armor",
    "itemId": 780200,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": 466.5,
      "z": 69.4,
      "label": "参考赐福：索尔城屋顶"
    }
  },
  "armor:780300": {
    "kind": "armor",
    "itemId": 780300,
    "sourceKind": "shop",
    "summary": "击败索尔城的老将尼奥后，从圆桌厅堂“解指”恩雅处购买",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": 466.5,
      "z": 69.4,
      "label": "参考赐福：索尔城屋顶"
    }
  },
  "armor:781100": {
    "kind": "armor",
    "itemId": 781100,
    "sourceKind": "other",
    "summary": "裁缝改",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": 466.5,
      "z": 69.4,
      "label": "参考赐福：索尔城屋顶"
    }
  },
  "armor:790000": {
    "kind": "armor",
    "itemId": 790000,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:790100": {
    "kind": "armor",
    "itemId": 790100,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:790200": {
    "kind": "armor",
    "itemId": 790200,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:790300": {
    "kind": "armor",
    "itemId": 790300,
    "sourceKind": "enemy",
    "summary": "击杀亚坛高原格密尔英雄墓地的猎犬骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:791100": {
    "kind": "armor",
    "itemId": 791100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：猎犬骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_108.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:800000": {
    "kind": "armor",
    "itemId": 800000,
    "sourceKind": "enemy",
    "summary": "风车村多明努拉的舞娘概率掉落庆典风帽、庆典礼服与庆典蓝套装（小镰刀蓝衣大妈掉落蓝风帽与蓝礼服）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=8",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "armor:800100": {
    "kind": "armor",
    "itemId": 800100,
    "sourceKind": "enemy",
    "summary": "风车村多明努拉的舞娘概率掉落庆典风帽、庆典礼服与庆典蓝套装（小镰刀蓝衣大妈掉落蓝风帽与蓝礼服）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=8",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "armor:801000": {
    "kind": "armor",
    "itemId": 801000,
    "sourceKind": "enemy",
    "summary": "风车村多明努拉的舞娘概率掉落庆典风帽与庆典礼服；庆典风帽可在赐福处修改为简化版，庆典礼服（简化）由风车村舞娘概率直接掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=8",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "armor:801100": {
    "kind": "armor",
    "itemId": 801100,
    "sourceKind": "enemy",
    "summary": "风车村多明努拉的舞娘概率掉落庆典风帽与庆典礼服；庆典风帽可在赐福处修改为简化版，庆典礼服（简化）由风车村舞娘概率直接掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=8",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "armor:802000": {
    "kind": "armor",
    "itemId": 802000,
    "sourceKind": "enemy",
    "summary": "风车村多明努拉的舞娘概率掉落庆典风帽、庆典礼服与庆典蓝套装（小镰刀蓝衣大妈掉落蓝风帽与蓝礼服）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=8",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "armor:802100": {
    "kind": "armor",
    "itemId": 802100,
    "sourceKind": "enemy",
    "summary": "风车村多明努拉的舞娘概率掉落庆典风帽、庆典礼服与庆典蓝套装（小镰刀蓝衣大妈掉落蓝风帽与蓝礼服）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=8",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "armor:810000": {
    "kind": "armor",
    "itemId": 810000,
    "sourceKind": "enemy",
    "summary": "在格密尔火山的一具尸体上获取。从艾格蕾教堂赐福点出发，乘坐升降梯向上，从阳台跳下到下方区域后沿路一直走，遇到铁处女后跳入侧边的窗子，然后沿路继续走到一段走廊，右侧是熔岩湖和一排大蛇雕像，居民头巾就在第二个大蛇雕像处的尸体上。火山官邸；---“艾格蕾教堂”赐福点（打完神皮贵族后出现的那个赐福点）；---坐电梯上楼，跳出阳台，经过熔岩池和熔岩瀑布，继续向前走---经过铁处女，跳进房间；---击杀三只蛇人，来到走廊；---下到走廊右侧的蛇头上，光点拾取；（这是我的版本，上面是其他人的版本，哪个顺眼看哪个）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：居民头巾",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%B1%85%E6%B0%91%E5%A4%B4%E5%B7%BE",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 54.9,
      "z": -207.9,
      "label": "参考赐福：Temple of Eiglay"
    }
  },
  "armor:810100": {
    "kind": "armor",
    "itemId": 810100,
    "sourceKind": "enemy",
    "summary": "交界地各地的居民概率掉落（推荐：史东薇尔城中居民刷取）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：居民上衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%B1%85%E6%B0%91%E4%B8%8A%E8%A1%A3",
    "verified": true
  },
  "armor:810300": {
    "kind": "armor",
    "itemId": 810300,
    "sourceKind": "enemy",
    "summary": "居民头巾在火山官邸艾格蕾教堂坐捷径电梯上楼，路右侧突出蛇头上拾取；居民便衣在史东薇尔城门旁小屋赐福边拾取；其余部件穿着此套装的居民概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=3",
    "verified": true
  },
  "armor:811000": {
    "kind": "armor",
    "itemId": 811000,
    "sourceKind": "map",
    "summary": "居民头巾（轻装）在火山官邸艾格蕾教堂坐捷径电梯上楼，路右侧突出蛇头上拾取，与普通头巾为分别获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=3",
    "verified": true
  },
  "armor:811100": {
    "kind": "armor",
    "itemId": 811100,
    "sourceKind": "enemy",
    "summary": "居民上衣由穿着此套装的居民概率掉落，可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=3",
    "verified": true
  },
  "armor:812000": {
    "kind": "armor",
    "itemId": 812000,
    "sourceKind": "map",
    "summary": "门旁小屋赐福点门外尸体拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：居民便衣",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%B1%85%E6%B0%91%E4%BE%BF%E8%A1%A3",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -122.5,
      "z": 11.9,
      "label": "参考赐福：Gateside Chamber"
    }
  },
  "armor:812100": {
    "kind": "armor",
    "itemId": 812100,
    "sourceKind": "map",
    "summary": "居民便衣在史东薇尔城门旁小屋赐福边拾取，可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=3",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -122.5,
      "z": 11.9,
      "label": "参考赐福：Gateside Chamber"
    }
  },
  "armor:820000": {
    "kind": "armor",
    "itemId": 820000,
    "sourceKind": "map",
    "summary": "圣树区域“圣树镇”赐福点出发，东门梯子上去沿着大树根走，沿朝南的主干先走到头，尽头位置分出两条路，走左边的那条，尽头尸体上拾取（这里有个拿扇形笛子的使者）",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": -0.5,
      "z": 42.9,
      "label": "参考赐福：Haligtree Canopy"
    }
  },
  "armor:830000": {
    "kind": "armor",
    "itemId": 830000,
    "sourceKind": "enemy",
    "summary": "魔法学院雷亚卢卡利亚杜鹃教堂二楼，击杀边上的结晶螃蟹后获得（首杀几乎必掉）",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》辉石头罩获取攻略",
    "sourceUrl": "https://m.925g.com/jxgl/293379.html",
    "verified": true
  },
  "armor:830100": {
    "kind": "armor",
    "itemId": 830100,
    "sourceKind": "enemy",
    "summary": "魔法学院雷亚卢卡利亚的学院法师敌人概率掉落",
    "details": "",
    "sourceTitle": "悠狐游戏网《艾尔登法环》防具全收集",
    "sourceUrl": "https://www.uhyx.cn/gonglue/nExgNRep4q.html",
    "verified": true
  },
  "armor:830200": {
    "kind": "armor",
    "itemId": 830200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚中的魔法师有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml",
    "verified": true
  },
  "armor:830300": {
    "kind": "armor",
    "itemId": 830300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚中的魔法师掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml",
    "verified": true
  },
  "armor:831000": {
    "kind": "armor",
    "itemId": 831000,
    "sourceKind": "map",
    "summary": "魔法学院校舍内教室赐福左拐，击破隐藏门后跳下走到底，在阳台左转沿岩石跳跃后拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》辉石头罩获取攻略",
    "sourceUrl": "https://m.925g.com/jxgl/293379.html",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 134.2,
      "z": -185,
      "label": "参考赐福：Schoolhouse Classroom"
    }
  },
  "armor:832000": {
    "kind": "armor",
    "itemId": 832000,
    "sourceKind": "enemy",
    "summary": "从湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「讨论室」跳过屋顶击败矿石螃蟹掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml",
    "verified": true
  },
  "armor:833000": {
    "kind": "armor",
    "itemId": 833000,
    "sourceKind": "enemy",
    "summary": "魔法学院雷亚卢卡利亚讨论室出发，击败附近的结晶螃蟹后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》辉石头罩获取攻略",
    "sourceUrl": "https://m.925g.com/jxgl/293379.html",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 154.8,
      "z": -222.4,
      "label": "参考赐福：Debate Parlor"
    }
  },
  "armor:834000": {
    "kind": "armor",
    "itemId": 834000,
    "sourceKind": "quest",
    "summary": "魔法学院大书库中，需先触发瑟濂支线，等角色变成球之后与其互动获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》辉石头罩获取攻略",
    "sourceUrl": "https://m.925g.com/jxgl/293379.html",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 32.9,
      "z": -20.3,
      "label": "参考赐福：Raya Lucaria Grand Library"
    }
  },
  "armor:840000": {
    "kind": "armor",
    "itemId": 840000,
    "sourceKind": "enemy",
    "summary": "盖利德瑟利亚关卡附近出现的好多手的敌人掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：人偶兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_71.shtml",
    "verified": true
  },
  "armor:840100": {
    "kind": "armor",
    "itemId": 840100,
    "sourceKind": "enemy",
    "summary": "盖利德瑟利亚关卡附近出现的好多手的敌人掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：人偶兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_71.shtml",
    "verified": true
  },
  "armor:850000": {
    "kind": "armor",
    "itemId": 850000,
    "sourceKind": "enemy",
    "summary": "鸟形人偶兵概率掉落，魔法学院屋顶上有不少",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=97",
    "verified": true
  },
  "armor:860000": {
    "kind": "armor",
    "itemId": 860000,
    "sourceKind": "enemy",
    "summary": "火山官邸任务——击杀“白狼战鬼”巴格莱姆获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战鬼头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E9%AC%BC%E5%A4%B4%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:860100": {
    "kind": "armor",
    "itemId": 860100,
    "sourceKind": "enemy",
    "summary": "火山官邸任务，击杀白狼战鬼获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战鬼铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E9%AC%BC%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:860200": {
    "kind": "armor",
    "itemId": 860200,
    "sourceKind": "enemy",
    "summary": "火山官邸完成一次入侵任务后，和贝纳尔对话得到入侵任务，在王城现实圆桌厅堂和贝纳尔联手入侵获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=112",
    "verified": true
  },
  "armor:860300": {
    "kind": "armor",
    "itemId": 860300,
    "sourceKind": "enemy",
    "summary": "火山官邸完成一次入侵任务后，和贝纳尔对话得到入侵任务，在王城现实圆桌厅堂和贝纳尔联手入侵获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=112",
    "verified": true
  },
  "armor:861100": {
    "kind": "armor",
    "itemId": 861100,
    "sourceKind": "quest",
    "summary": "火山官邸完成一次入侵任务后与贝纳尔对话取得入侵任务，在王城现实圆桌厅堂与贝纳尔联手入侵获得战鬼套装；铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=112",
    "verified": true
  },
  "armor:870000": {
    "kind": "armor",
    "itemId": 870000,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml",
    "verified": true
  },
  "armor:870100": {
    "kind": "armor",
    "itemId": 870100,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml",
    "verified": true
  },
  "armor:870200": {
    "kind": "armor",
    "itemId": 870200,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml",
    "verified": true
  },
  "armor:870300": {
    "kind": "armor",
    "itemId": 870300,
    "sourceKind": "shop",
    "summary": "武士初始装备从盖利德桂奥尔龙墓西北边的隐世商人处购买",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：芦苇之地",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_2.shtml",
    "verified": true
  },
  "armor:871100": {
    "kind": "armor",
    "itemId": 871100,
    "sourceKind": "shop",
    "summary": "龙墓西侧隐居商人出售芦苇之地套装，铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=92",
    "verified": true
  },
  "armor:872000": {
    "kind": "armor",
    "itemId": 872000,
    "sourceKind": "enemy",
    "summary": "巨人山顶安歇教堂，击败入侵的「血指」老翁后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：老翁面具",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%80%81%E7%BF%81%E9%9D%A2%E5%85%B7",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": 333.1,
      "z": -193.2,
      "label": "参考赐福：Church of Repose"
    }
  },
  "armor:872100": {
    "kind": "armor",
    "itemId": 872100,
    "sourceKind": "map",
    "summary": "巨人山顶——唤灵洞窟——一紫色光点拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：待殓铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%BE%85%E6%AE%93%E9%93%A0%E7%94%B2",
    "verified": true,
    "pin": {
      "mapId": "m31_22_00_00",
      "x": -39.6,
      "z": 83.4,
      "label": "参考赐福：Spiritcaller Cave"
    }
  },
  "armor:872200": {
    "kind": "armor",
    "itemId": 872200,
    "sourceKind": "enemy",
    "summary": "老翁面具在巨人山顶安歇教堂击杀入侵的老翁获取;其余部件在巨人山顶唤灵洞窟内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=93",
    "verified": true,
    "pin": {
      "mapId": "m31_22_00_00",
      "x": -39.6,
      "z": 83.4,
      "label": "参考赐福：Spiritcaller Cave"
    }
  },
  "armor:872300": {
    "kind": "armor",
    "itemId": 872300,
    "sourceKind": "enemy",
    "summary": "老翁面具在巨人山顶安歇教堂击杀入侵的老翁获取;其余部件在巨人山顶唤灵洞窟内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=93",
    "verified": true,
    "pin": {
      "mapId": "m31_22_00_00",
      "x": -39.6,
      "z": 83.4,
      "label": "参考赐福：Spiritcaller Cave"
    }
  },
  "armor:880000": {
    "kind": "armor",
    "itemId": 880000,
    "sourceKind": "shop",
    "summary": "密使初始携带，在格密尔火山（第9休息站）赐福点东方的流浪民族的商人处可购买密使一套，风帽+铠甲+手套+靴子。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：密使风帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AF%86%E4%BD%BF%E9%A3%8E%E5%B8%BD",
    "verified": true
  },
  "armor:880100": {
    "kind": "armor",
    "itemId": 880100,
    "sourceKind": "shop",
    "summary": "格密尔火山（第九休息站）赐福出发，过桥后爬梯子下去附近商人购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：密使铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AF%86%E4%BD%BF%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:880200": {
    "kind": "armor",
    "itemId": 880200,
    "sourceKind": "shop",
    "summary": "密使初始携带，在格密尔火山（第9休息站）赐福点东方的流浪民族的商人处可购买密使一套，风帽+铠甲+手套+靴子。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：密使手套",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AF%86%E4%BD%BF%E6%89%8B%E5%A5%97",
    "verified": true
  },
  "armor:880300": {
    "kind": "armor",
    "itemId": 880300,
    "sourceKind": "shop",
    "summary": "密使初始携带，在格密尔火山（第9休息站）赐福点东方的流浪民族的商人处可购买密使一套，风帽+铠甲+手套+靴子。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：密使靴子",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AF%86%E4%BD%BF%E9%9D%B4%E5%AD%90",
    "verified": true
  },
  "armor:881000": {
    "kind": "armor",
    "itemId": 881000,
    "sourceKind": "shop",
    "summary": "密使初始携带，也可在格密尔火山第九休息站赐福点东方的流浪民族商人处购买密使一套；风帽与铠甲可修改为轻装",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：密使手套",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AF%86%E4%BD%BF%E6%89%8B%E5%A5%97",
    "verified": true
  },
  "armor:881100": {
    "kind": "armor",
    "itemId": 881100,
    "sourceKind": "shop",
    "summary": "密使初始携带，也可在格密尔火山第九休息站赐福点东方的流浪民族商人处购买密使一套；风帽与铠甲可修改为轻装",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：密使手套",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%AF%86%E4%BD%BF%E6%89%8B%E5%A5%97",
    "verified": true
  },
  "armor:890000": {
    "kind": "armor",
    "itemId": 890000,
    "sourceKind": "shop",
    "summary": "【安瑟尔河（下游）】赐福点附近的遁世商人处可购买囚犯一套，铁面具+布衣+长裤",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：囚犯铁面具",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%9B%9A%E7%8A%AF%E9%93%81%E9%9D%A2%E5%85%B7",
    "verified": true
  },
  "armor:890100": {
    "kind": "armor",
    "itemId": 890100,
    "sourceKind": "shop",
    "summary": "安瑟尔河商人出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=9",
    "verified": true
  },
  "armor:890300": {
    "kind": "armor",
    "itemId": 890300,
    "sourceKind": "shop",
    "summary": "安瑟尔河商人出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=9",
    "verified": true
  },
  "armor:891000": {
    "kind": "armor",
    "itemId": 891000,
    "sourceKind": "map",
    "summary": "煮虾哥（逮虾户）死后拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：流氓铁面具",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%B5%81%E6%B0%93%E9%93%81%E9%9D%A2%E5%85%B7",
    "verified": true
  },
  "armor:900000": {
    "kind": "armor",
    "itemId": 900000,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废城沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml",
    "verified": true
  },
  "armor:900100": {
    "kind": "armor",
    "itemId": 900100,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废城沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml",
    "verified": true
  },
  "armor:900200": {
    "kind": "armor",
    "itemId": 900200,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废墟沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml",
    "verified": true
  },
  "armor:900300": {
    "kind": "armor",
    "itemId": 900300,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废城沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml",
    "verified": true
  },
  "armor:901100": {
    "kind": "armor",
    "itemId": 901100,
    "sourceKind": "map",
    "summary": "巨人山顶离群独行者的破屋中的尸体处拾取，地图位置请参考下图（从萨米尔废墟沿路出发走到古遗迹降雪谷，再沿河往左走即可到达）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_62.shtml",
    "verified": true
  },
  "armor:902000": {
    "kind": "armor",
    "itemId": 902000,
    "sourceKind": "map",
    "summary": "从湖之利耶尼亚镇静教堂中的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -51.7,
      "z": -155,
      "label": "参考赐福：Church of Inhibition"
    }
  },
  "armor:902100": {
    "kind": "armor",
    "itemId": 902100,
    "sourceKind": "map",
    "summary": "从湖之利耶尼亚镇静教堂中的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -51.7,
      "z": -155,
      "label": "参考赐福：Church of Inhibition"
    }
  },
  "armor:902300": {
    "kind": "armor",
    "itemId": 902300,
    "sourceKind": "map",
    "summary": "从湖之利耶尼亚镇静教堂中的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -51.7,
      "z": -155,
      "label": "参考赐福：Church of Inhibition"
    }
  },
  "armor:903100": {
    "kind": "armor",
    "itemId": 903100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：指头女巫",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_97.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -51.7,
      "z": -155,
      "label": "参考赐福：Church of Inhibition"
    }
  },
  "armor:910000": {
    "kind": "armor",
    "itemId": 910000,
    "sourceKind": "map",
    "summary": "塞尔维斯魔法塔——塞尔维斯死后尸体上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：魔法教授大帽子",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%AD%94%E6%B3%95%E6%95%99%E6%8E%88%E5%A4%A7%E5%B8%BD%E5%AD%90",
    "verified": true
  },
  "armor:910100": {
    "kind": "armor",
    "itemId": 910100,
    "sourceKind": "quest",
    "summary": "隐匿面具在颠倒后的卡利亚书斋拾取;其余部件在菈妮支线推进到菈妮出发去安瑟尔河时，魔法教授赛尔维斯会在他的魔法师塔中死亡，尸体上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=22",
    "verified": true
  },
  "armor:910200": {
    "kind": "armor",
    "itemId": 910200,
    "sourceKind": "quest",
    "summary": "隐匿面具在颠倒后的卡利亚书斋拾取;其余部件在菈妮支线推进到菈妮出发去安瑟尔河时，魔法教授赛尔维斯会在他的魔法师塔中死亡，尸体上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=22",
    "verified": true
  },
  "armor:910300": {
    "kind": "armor",
    "itemId": 910300,
    "sourceKind": "quest",
    "summary": "隐匿面具在颠倒后的卡利亚书斋拾取;其余部件在菈妮支线推进到菈妮出发去安瑟尔河时，魔法教授赛尔维斯会在他的魔法师塔中死亡，尸体上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=22",
    "verified": true
  },
  "armor:911000": {
    "kind": "armor",
    "itemId": 911000,
    "sourceKind": "quest",
    "summary": "隐匿面具在颠倒后的卡利亚书斋拾取;其余部件在菈妮支线推进到菈妮出发去安瑟尔河时，魔法教授赛尔维斯会在他的魔法师塔中死亡，尸体上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=22",
    "verified": true
  },
  "armor:911100": {
    "kind": "armor",
    "itemId": 911100,
    "sourceKind": "quest",
    "summary": "菈妮支线推进到菈妮出发去安瑟尔河时，魔法教授赛尔维斯会在魔法师塔中死亡，从尸体上拾取魔法教授套装；长袍可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=22",
    "verified": true
  },
  "armor:930000": {
    "kind": "armor",
    "itemId": 930000,
    "sourceKind": "map",
    "summary": "宁姆格福死亡降临的地下墓地内拾取亡骨面具与猛禽黑羽",
    "details": "",
    "sourceTitle": "电玩部落论坛《艾尔登法环》全收集图文攻略",
    "sourceUrl": "https://bbs.a9vg.com/forum.php?mod=viewthread&tid=8818734",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:930100": {
    "kind": "armor",
    "itemId": 930100,
    "sourceKind": "map",
    "summary": "宁姆格福死亡降临的地下墓地内拾取亡骨面具与猛禽黑羽",
    "details": "",
    "sourceTitle": "电玩部落论坛《艾尔登法环》全收集图文攻略",
    "sourceUrl": "https://bbs.a9vg.com/forum.php?mod=viewthread&tid=8818734",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:930200": {
    "kind": "armor",
    "itemId": 930200,
    "sourceKind": "shop",
    "summary": "盗贼面具在宁姆格福「圣人桥」赐福桥对面的流浪商人处出售；黑布风帽在亚坛高原贤者的洞窟拾取；盗贼束腰衣、盗贼腕套、盗贼靴子由史东薇尔城门卫葛托克出售",
    "details": "",
    "sourceTitle": "《艾尔登法环》盗贼套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933775.html",
    "verified": true
  },
  "armor:930300": {
    "kind": "armor",
    "itemId": 930300,
    "sourceKind": "shop",
    "summary": "盗贼面具在宁姆格福「圣人桥」赐福桥对面的流浪商人处出售；黑布风帽在亚坛高原贤者的洞窟拾取；盗贼束腰衣、盗贼腕套、盗贼靴子由史东薇尔城门卫葛托克出售",
    "details": "",
    "sourceTitle": "《艾尔登法环》盗贼套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933775.html",
    "verified": true
  },
  "armor:931100": {
    "kind": "armor",
    "itemId": 931100,
    "sourceKind": "shop",
    "summary": "盗贼面具在宁姆格福「圣人桥」赐福桥对面的流浪商人处出售；黑布风帽在亚坛高原贤者的洞窟拾取；盗贼束腰衣、盗贼腕套、盗贼靴子由史东薇尔城门卫葛托克出售",
    "details": "",
    "sourceTitle": "《艾尔登法环》盗贼套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933775.html",
    "verified": true
  },
  "armor:940000": {
    "kind": "armor",
    "itemId": 940000,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml",
    "verified": true
  },
  "armor:940100": {
    "kind": "armor",
    "itemId": 940100,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml",
    "verified": true
  },
  "armor:940200": {
    "kind": "armor",
    "itemId": 940200,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml",
    "verified": true
  },
  "armor:940300": {
    "kind": "armor",
    "itemId": 940300,
    "sourceKind": "enemy",
    "summary": "在角色瑟濂支线中协助瑟濂击败「杰廉」获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml",
    "verified": true
  },
  "armor:941000": {
    "kind": "armor",
    "itemId": 941000,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：奇异骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_19.shtml",
    "verified": true
  },
  "armor:950000": {
    "kind": "armor",
    "itemId": 950000,
    "sourceKind": "enemy",
    "summary": "巨人山顶准王者的封印监牢击败维克获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=118",
    "verified": true
  },
  "armor:950100": {
    "kind": "armor",
    "itemId": 950100,
    "sourceKind": "other",
    "summary": "在巨人山顶准王者的封印监牢击败维克后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：指痕铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%8C%87%E7%97%95%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:950200": {
    "kind": "armor",
    "itemId": 950200,
    "sourceKind": "enemy",
    "summary": "巨人山顶准王者的封印监牢击败维克获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=118",
    "verified": true
  },
  "armor:950300": {
    "kind": "armor",
    "itemId": 950300,
    "sourceKind": "enemy",
    "summary": "巨人山顶准王者的封印监牢击败维克获取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=118",
    "verified": true
  },
  "armor:951100": {
    "kind": "armor",
    "itemId": 951100,
    "sourceKind": "enemy",
    "summary": "巨人山顶准王者的封印监牢击败维克获得指痕套装，铠甲可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=118",
    "verified": true
  },
  "armor:960000": {
    "kind": "armor",
    "itemId": 960000,
    "sourceKind": "enemy",
    "summary": "完成火山支线，击败大蛇后，再击杀大蛇旁边的塔妮丝后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：侧室面具",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E4%BE%A7%E5%AE%A4%E9%9D%A2%E5%85%B7",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 93.7,
      "z": -116.1,
      "label": "参考赐福：Rykard, Lord of Blasphemy"
    }
  },
  "armor:960100": {
    "kind": "armor",
    "itemId": 960100,
    "sourceKind": "enemy",
    "summary": "击败大蛇后与火山官邸塔妮丝对话，她会转移去大蛇首领房吃大蛇的尸体，击杀获得(之后会被她的熔炉骑士入侵)",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=41",
    "verified": true
  },
  "armor:960300": {
    "kind": "armor",
    "itemId": 960300,
    "sourceKind": "enemy",
    "summary": "击败大蛇后与火山官邸塔妮丝对话，她会转移去大蛇首领房吃大蛇的尸体，击杀获得(之后会被她的熔炉骑士入侵)",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=41",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:961000": {
    "kind": "armor",
    "itemId": 961000,
    "sourceKind": "map",
    "summary": "亚坛高原——弃置棺材赐福点——其中一辆棺材处拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：领主面具",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%A2%86%E4%B8%BB%E9%9D%A2%E5%85%B7",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -174.1,
      "z": 321.4,
      "label": "参考赐福：Abandoned Coffin"
    }
  },
  "armor:961100": {
    "kind": "armor",
    "itemId": 961100,
    "sourceKind": "map",
    "summary": "亚坛高原“弃置棺材”赐福往前走，大棺材旁拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=40",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -174.1,
      "z": 321.4,
      "label": "参考赐福：Abandoned Coffin"
    }
  },
  "armor:962100": {
    "kind": "armor",
    "itemId": 962100,
    "sourceKind": "shop",
    "summary": "王城遁世商人出售，在王城内也可以捡到",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=39",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:963000": {
    "kind": "armor",
    "itemId": 963000,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原北部日荫城西侧出现的敌对角色「“日荫城主”玛雷玛雷」掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：玛雷家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_92.shtml",
    "verified": true
  },
  "armor:963100": {
    "kind": "armor",
    "itemId": 963100,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原北部日荫城西侧出现的敌对角色「“日荫城主”玛雷玛雷」掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：玛雷家",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_92.shtml",
    "verified": true
  },
  "armor:963200": {
    "kind": "armor",
    "itemId": 963200,
    "sourceKind": "map",
    "summary": "弃置恶兆的底层地底大道旁赐福出门左转拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=11",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": -147.4,
      "z": -166,
      "label": "参考赐福：Underground Roadside"
    }
  },
  "armor:964000": {
    "kind": "armor",
    "itemId": 964000,
    "sourceKind": "map",
    "summary": "弃置恶兆的底层地底大道旁赐福出门左转拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=11",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": -147.4,
      "z": -166,
      "label": "参考赐福：Underground Roadside"
    }
  },
  "armor:964100": {
    "kind": "armor",
    "itemId": 964100,
    "sourceKind": "map",
    "summary": "禁域电梯夹层中拾取(和使命短刀一起)",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=42",
    "verified": true,
    "pin": {
      "mapId": "m60_11_12_02",
      "x": 379.4,
      "z": 359.8,
      "label": "参考赐福：Forbidden Lands"
    }
  },
  "armor:970000": {
    "kind": "armor",
    "itemId": 970000,
    "sourceKind": "quest",
    "summary": "王城下水道击杀食粪者本体获得，或推进食粪者支线获得忌讳诅咒的修复卢恩后刷新地图拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=134",
    "verified": true
  },
  "armor:970100": {
    "kind": "armor",
    "itemId": 970100,
    "sourceKind": "quest",
    "summary": "王城下水道击杀食粪者本体获得，或推进食粪者支线获得忌讳诅咒的修复卢恩后刷新地图拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=134",
    "verified": true
  },
  "armor:970200": {
    "kind": "armor",
    "itemId": 970200,
    "sourceKind": "quest",
    "summary": "王城下水道击杀食粪者本体获得，或推进食粪者支线获得忌讳诅咒的修复卢恩后刷新地图拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=134",
    "verified": true
  },
  "armor:970300": {
    "kind": "armor",
    "itemId": 970300,
    "sourceKind": "quest",
    "summary": "王城下水道击杀食粪者本体获得，或推进食粪者支线获得忌讳诅咒的修复卢恩后刷新地图拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=134",
    "verified": true
  },
  "armor:980000": {
    "kind": "armor",
    "itemId": 980000,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml",
    "verified": true
  },
  "armor:980100": {
    "kind": "armor",
    "itemId": 980100,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml",
    "verified": true
  },
  "armor:980200": {
    "kind": "armor",
    "itemId": 980200,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml",
    "verified": true
  },
  "armor:980300": {
    "kind": "armor",
    "itemId": 980300,
    "sourceKind": "map",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「杜鹃教堂」附近岔道的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml",
    "verified": true
  },
  "armor:981100": {
    "kind": "armor",
    "itemId": 981100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：卡利亚骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_18.shtml",
    "verified": true
  },
  "armor:990000": {
    "kind": "armor",
    "itemId": 990000,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔火山赐福点「“起源魔法师”亚兹勒」南边遁世者村中的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml",
    "verified": true
  },
  "armor:990100": {
    "kind": "armor",
    "itemId": 990100,
    "sourceKind": "map",
    "summary": "从亚坛高原遁世者村中的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml",
    "verified": true
  },
  "armor:990200": {
    "kind": "armor",
    "itemId": 990200,
    "sourceKind": "map",
    "summary": "从亚坛高原遁世者村中的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_13_02",
      "x": -282.4,
      "z": -408.6,
      "label": "参考赐福：Craftsman's Shack"
    }
  },
  "armor:990300": {
    "kind": "armor",
    "itemId": 990300,
    "sourceKind": "map",
    "summary": "从亚坛高原遁世者村中的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml",
    "verified": true
  },
  "armor:991100": {
    "kind": "armor",
    "itemId": 991100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：离群魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_75.shtml",
    "verified": true
  },
  "armor:1000000": {
    "kind": "armor",
    "itemId": 1000000,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -317.6,
      "z": 241.1,
      "label": "参考赐福：Road of Iniquity Side Path"
    }
  },
  "armor:1000100": {
    "kind": "armor",
    "itemId": 1000100,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -317.6,
      "z": 241.1,
      "label": "参考赐福：Road of Iniquity Side Path"
    }
  },
  "armor:1000200": {
    "kind": "armor",
    "itemId": 1000200,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -317.6,
      "z": 241.1,
      "label": "参考赐福：Road of Iniquity Side Path"
    }
  },
  "armor:1000300": {
    "kind": "armor",
    "itemId": 1000300,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原赐福点「移送罪人之路（路旁）」西北边山崖上的魔术师",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：战场魔法师",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_6.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -317.6,
      "z": 241.1,
      "label": "参考赐福：Road of Iniquity Side Path"
    }
  },
  "armor:1010000": {
    "kind": "armor",
    "itemId": 1010000,
    "sourceKind": "quest",
    "summary": "菈妮支线中，在蕾娜魔法塔上层箱子里；提升寒冷魔法10%伤害，受加成魔法有且仅有：； 菈妮的暗月 辉石冰块 萨米尔冰风暴 亚杜拉的月光剑",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：雪魔女尖帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%9B%AA%E9%AD%94%E5%A5%B3%E5%B0%96%E5%B8%BD",
    "verified": true
  },
  "armor:1010100": {
    "kind": "armor",
    "itemId": 1010100,
    "sourceKind": "map",
    "summary": "蕾娜魔法塔电梯上去背后宝箱",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：雪魔女长袍",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%9B%AA%E9%AD%94%E5%A5%B3%E9%95%BF%E8%A2%8D",
    "verified": true
  },
  "armor:1010300": {
    "kind": "armor",
    "itemId": 1010300,
    "sourceKind": "quest",
    "summary": "在菈妮支线推进到菈妮出发去安瑟尔河后在蕾娜魔法师塔拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=26",
    "verified": true
  },
  "armor:1011100": {
    "kind": "armor",
    "itemId": 1011100,
    "sourceKind": "quest",
    "summary": "菈妮支线推进到菈妮出发去安瑟尔河后，在蕾娜魔法师塔拾取雪魔女套装；长袍可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=26",
    "verified": true
  },
  "armor:1020100": {
    "kind": "armor",
    "itemId": 1020100,
    "sourceKind": "map",
    "summary": "巨人山顶“圣树分枝”艾布雷菲尔赐福点「圣树底层」隔壁房间的花蕾旁边拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_61.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 88.9,
      "z": 549.1,
      "label": "参考赐福：Haligtree Roots"
    }
  },
  "armor:1020200": {
    "kind": "armor",
    "itemId": 1020200,
    "sourceKind": "map",
    "summary": "巨人山顶“圣树分枝”艾布雷菲尔赐福点「圣树底层」隔壁房间的花蕾旁边拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_61.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 88.9,
      "z": 549.1,
      "label": "参考赐福：Haligtree Roots"
    }
  },
  "armor:1020300": {
    "kind": "armor",
    "itemId": 1020300,
    "sourceKind": "map",
    "summary": "巨人山顶“圣树分枝”艾布雷菲尔赐福点「圣树底层」隔壁房间的花蕾旁边拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：旅行",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_61.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 88.9,
      "z": 549.1,
      "label": "参考赐福：Haligtree Roots"
    }
  },
  "armor:1030000": {
    "kind": "armor",
    "itemId": 1030000,
    "sourceKind": "quest",
    "summary": "绘画《再世》奖励",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年幼学徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_98.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -467.4,
      "z": 201.1,
      "label": "参考赐福：Behind Caria Manor"
    }
  },
  "armor:1030100": {
    "kind": "armor",
    "itemId": 1030100,
    "sourceKind": "quest",
    "summary": "绘画《再世》奖励",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：年幼学徒",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_98.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -467.4,
      "z": 201.1,
      "label": "参考赐福：Behind Caria Manor"
    }
  },
  "armor:1040000": {
    "kind": "armor",
    "itemId": 1040000,
    "sourceKind": "quest",
    "summary": "推进圣职者柯林支线进行到最后，金面具的尸体会在灰城罗德尔出现，调查尸体可获得铠甲、腕甲和腿甲三个部位的防具。头盔防具可以从亚坛高原的赐福点「移送罪人之路（路旁）」出发往前走，到达断桥边拾取。金面具尸体路线请参考下方视频，头盔位置参考下方图片。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：金面具",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_25.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:1040100": {
    "kind": "armor",
    "itemId": 1040100,
    "sourceKind": "quest",
    "summary": "推进圣职者柯林支线进行到最后，金面具的尸体会在灰城罗德尔出现，调查尸体可获得铠甲、腕甲和腿甲三个部位的防具。头盔防具可以从亚坛高原的赐福点「移送罪人之路（路旁）」出发往前走，到达断桥边拾取。金面具尸体路线请参考下方视频，头盔位置参考下方图片。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：金面具",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_25.shtml",
    "verified": true
  },
  "armor:1040200": {
    "kind": "armor",
    "itemId": 1040200,
    "sourceKind": "quest",
    "summary": "金面具支线完成获得完美律法的修复卢恩之后刷新地图，在金面具身上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=35",
    "verified": true
  },
  "armor:1040300": {
    "kind": "armor",
    "itemId": 1040300,
    "sourceKind": "quest",
    "summary": "金面具支线完成获得完美律法的修复卢恩之后刷新地图，在金面具身上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=35",
    "verified": true
  },
  "armor:1050100": {
    "kind": "armor",
    "itemId": 1050100,
    "sourceKind": "shop",
    "summary": "击败恶兆王后，圆桌厅堂解指老妪出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=48",
    "verified": true
  },
  "armor:1060000": {
    "kind": "armor",
    "itemId": 1060000,
    "sourceKind": "map",
    "summary": "从亚坛高原火山官邸赐福点「牢镇教堂」沿着屋顶往西南边走进入房间，在尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：白金之子",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_48.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "armor:1060100": {
    "kind": "armor",
    "itemId": 1060100,
    "sourceKind": "enemy",
    "summary": "从湖之利耶尼亚赐福点「学院门前镇」往西北方向走，拿矛的敌人有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：白金之子",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_48.shtml",
    "verified": true
  },
  "armor:1070000": {
    "kind": "armor",
    "itemId": 1070000,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_17_00_00",
      "x": -118.6,
      "z": 120,
      "label": "参考赐福：Giant-Conquering Hero's Grave"
    }
  },
  "armor:1070100": {
    "kind": "armor",
    "itemId": 1070100,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_17_00_00",
      "x": -118.6,
      "z": 120,
      "label": "参考赐福：Giant-Conquering Hero's Grave"
    }
  },
  "armor:1070200": {
    "kind": "armor",
    "itemId": 1070200,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_17_00_00",
      "x": -118.6,
      "z": 120,
      "label": "参考赐福：Giant-Conquering Hero's Grave"
    }
  },
  "armor:1070300": {
    "kind": "armor",
    "itemId": 1070300,
    "sourceKind": "enemy",
    "summary": "击败巨人山顶巨人战争的英雄墓地首领萨米尔的古英雄获得",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：萨米尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_40.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_17_00_00",
      "x": -118.6,
      "z": 120,
      "label": "参考赐福：Giant-Conquering Hero's Grave"
    }
  },
  "armor:1080000": {
    "kind": "armor",
    "itemId": 1080000,
    "sourceKind": "enemy",
    "summary": "宁姆格福“蒙流地下墓地”中，猫头小恶魔（拿分叉斧的）掉落",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_02_00_00",
      "x": 32.8,
      "z": 5.8,
      "label": "参考赐福：Stormfoot Catacombs"
    }
  },
  "armor:1081000": {
    "kind": "armor",
    "itemId": 1081000,
    "sourceKind": "enemy",
    "summary": "利耶尼亚“断崖下的地下墓地”中，狼头小恶魔（拿剑的）掉落",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_06_00_00",
      "x": 57.6,
      "z": 68.1,
      "label": "参考赐福：Cliffbottom Catacombs"
    }
  },
  "armor:1082000": {
    "kind": "armor",
    "itemId": 1082000,
    "sourceKind": "enemy",
    "summary": "利耶尼亚“断崖下的地下墓地”中，尖牙小恶魔（扔魔法球的）掉落",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_06_00_00",
      "x": 57.6,
      "z": 68.1,
      "label": "参考赐福：断崖下的地下墓地"
    }
  },
  "armor:1083000": {
    "kind": "armor",
    "itemId": 1083000,
    "sourceKind": "enemy",
    "summary": "王城罗德尔“地底大道旁”赐福点出门正东方向洞内下爬梯，出门管道上的小恶魔掉落",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -136,
      "z": -228.1,
      "label": "参考赐福：Grand Lift of Rold"
    }
  },
  "armor:1084000": {
    "kind": "armor",
    "itemId": 1084000,
    "sourceKind": "map",
    "summary": "王城罗德尔“大道旁露台”赐福点上楼梯左拐沿大路直走，走到大门跟前不过门，右拐一条小道走到尽头，尸体上拾取（两个小兵围观）",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_14_00_00",
      "x": -54.5,
      "z": 67.6,
      "label": "参考赐福：Minor Erdtree Catacombs"
    }
  },
  "armor:1085000": {
    "kind": "armor",
    "itemId": 1085000,
    "sourceKind": "map",
    "summary": "化圣雪原地下墓地中，有持剑腐败树灵看门的房间里，尸体上拾取",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_19_00_00",
      "x": -38.8,
      "z": -94.5,
      "label": "参考赐福：Consecrated Snowfield Catacombs"
    }
  },
  "armor:1090000": {
    "kind": "armor",
    "itemId": 1090000,
    "sourceKind": "enemy",
    "summary": "地下希芙拉河区域击败首领“仿身泪滴”后获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "armor:1100000": {
    "kind": "armor",
    "itemId": 1100000,
    "sourceKind": "shop",
    "summary": "在艾雷教堂的商人咖列处购买。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：锁子头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%94%81%E5%AD%90%E5%A4%B4%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 82.6,
      "z": -303,
      "label": "参考赐福：Church of Elleh"
    }
  },
  "armor:1100100": {
    "kind": "armor",
    "itemId": 1100100,
    "sourceKind": "shop",
    "summary": "宁姆格福——艾雷教堂——流浪商人咖列处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：锁子铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%94%81%E5%AD%90%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:1100200": {
    "kind": "armor",
    "itemId": 1100200,
    "sourceKind": "shop",
    "summary": "艾雷教堂流浪商人伽列出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=85",
    "verified": true
  },
  "armor:1100300": {
    "kind": "armor",
    "itemId": 1100300,
    "sourceKind": "shop",
    "summary": "艾雷教堂流浪商人伽列出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=85",
    "verified": true
  },
  "armor:1101000": {
    "kind": "armor",
    "itemId": 1101000,
    "sourceKind": "shop",
    "summary": "在盖利德的艾奥尼亚沼泽（南岸）赐福点西南方的流浪民族的商人处购买。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：巨盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%B7%A8%E7%9B%94",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -125.5,
      "z": -65.8,
      "label": "参考赐福：Southern Aeonia Swamp Bank"
    }
  },
  "armor:1101100": {
    "kind": "armor",
    "itemId": 1101100,
    "sourceKind": "map",
    "summary": "大蛇首领房内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=88",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 93.7,
      "z": -116.1,
      "label": "参考赐福：Rykard, Lord of Blasphemy"
    }
  },
  "armor:1102100": {
    "kind": "armor",
    "itemId": 1102100,
    "sourceKind": "shop",
    "summary": "亚坛高原「穿林大桥」赐福旁的流浪商人出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=87",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:1110000": {
    "kind": "armor",
    "itemId": 1110000,
    "sourceKind": "enemy",
    "summary": "宁姆格福“海岸洞窟”赐福点出洞右拐，击杀海滩上的小章鱼掉落（注意是小的）",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_15_00_00",
      "x": 45.8,
      "z": -18.7,
      "label": "参考赐福：海岸洞窟"
    }
  },
  "armor:1120000": {
    "kind": "armor",
    "itemId": 1120000,
    "sourceKind": "quest",
    "summary": "战士壶亚历山大线推至格密尔火山区域，在“莱多要塞”南边的熔岩中和其对话获得",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_13_02",
      "x": 510.2,
      "z": -47.6,
      "label": "参考赐福：沸腾河终点"
    }
  },
  "armor:1130000": {
    "kind": "armor",
    "itemId": 1130000,
    "sourceKind": "map",
    "summary": "蘑菇王冠在腐败湖拾取，其余部件在格密尔火山滚沸河洞窟拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=13",
    "verified": true,
    "pin": {
      "mapId": "m31_07_00_00",
      "x": -24.9,
      "z": 165.8,
      "label": "参考赐福：Seethewater Cave"
    }
  },
  "armor:1130100": {
    "kind": "armor",
    "itemId": 1130100,
    "sourceKind": "map",
    "summary": "蘑菇王冠在腐败湖拾取，其余部件在格密尔火山滚沸河洞窟拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=13",
    "verified": true,
    "pin": {
      "mapId": "m31_07_00_00",
      "x": -24.9,
      "z": 165.8,
      "label": "参考赐福：Seethewater Cave"
    }
  },
  "armor:1130200": {
    "kind": "armor",
    "itemId": 1130200,
    "sourceKind": "map",
    "summary": "蘑菇王冠在腐败湖拾取，其余部件在格密尔火山滚沸河洞窟拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=13",
    "verified": true,
    "pin": {
      "mapId": "m31_07_00_00",
      "x": -24.9,
      "z": 165.8,
      "label": "参考赐福：Seethewater Cave"
    }
  },
  "armor:1130300": {
    "kind": "armor",
    "itemId": 1130300,
    "sourceKind": "map",
    "summary": "蘑菇王冠在腐败湖拾取，其余部件在格密尔火山滚沸河洞窟拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=13",
    "verified": true,
    "pin": {
      "mapId": "m31_07_00_00",
      "x": -24.9,
      "z": 165.8,
      "label": "参考赐福：Seethewater Cave"
    }
  },
  "armor:1300000": {
    "kind": "armor",
    "itemId": 1300000,
    "sourceKind": "map",
    "summary": "利耶尼亚“断崖下的地下墓地”中的雾门房间拾取",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_06_00_00",
      "x": 57.6,
      "z": 68.1,
      "label": "参考赐福：Cliffbottom Catacombs"
    }
  },
  "armor:1301000": {
    "kind": "armor",
    "itemId": 1301000,
    "sourceKind": "quest",
    "summary": "菈妮线最后杀了布莱泽后，找伊吉对话；对话后刷新，伊吉会被黑焰烧死，在他的铁匠台上拾取",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_12_02",
      "x": 180.1,
      "z": -196.6,
      "label": "参考赐福：通往城寨的道路"
    }
  },
  "armor:1400000": {
    "kind": "armor",
    "itemId": 1400000,
    "sourceKind": "shop",
    "summary": "盗贼面具在宁姆格福「圣人桥」赐福桥对面的流浪商人处出售；黑布风帽在亚坛高原贤者的洞窟拾取；盗贼束腰衣、盗贼腕套、盗贼靴子由史东薇尔城门卫葛托克出售",
    "details": "",
    "sourceTitle": "《艾尔登法环》盗贼套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933775.html",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:1400100": {
    "kind": "armor",
    "itemId": 1400100,
    "sourceKind": "enemy",
    "summary": "帕奇死后掉落。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：皮革铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%9A%AE%E9%9D%A9%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:1400200": {
    "kind": "armor",
    "itemId": 1400200,
    "sourceKind": "shop",
    "summary": "啜泣半岛“摩恩城(城墙前方)”赐福旁边流浪商人出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=66",
    "verified": true
  },
  "armor:1400300": {
    "kind": "armor",
    "itemId": 1400300,
    "sourceKind": "shop",
    "summary": "啜泣半岛“摩恩城(城墙前方)”赐福旁边流浪商人出售",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=66",
    "verified": true
  },
  "armor:1401000": {
    "kind": "armor",
    "itemId": 1401000,
    "sourceKind": "shop",
    "summary": "盗贼面具在宁姆格福「圣人桥」赐福桥对面的流浪商人处出售；黑布风帽在亚坛高原贤者的洞窟拾取；盗贼束腰衣、盗贼腕套、盗贼靴子由史东薇尔城门卫葛托克出售",
    "details": "",
    "sourceTitle": "《艾尔登法环》盗贼套装获取攻略",
    "sourceUrl": "https://www.3dmgame.com/gl/3933775.html",
    "verified": true
  },
  "armor:1500000": {
    "kind": "armor",
    "itemId": 1500000,
    "sourceKind": "shop",
    "summary": "圆桌厅堂铃珠商人处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：骑士头盔",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%AA%91%E5%A3%AB%E5%A4%B4%E7%9B%94",
    "verified": true
  },
  "armor:1500100": {
    "kind": "armor",
    "itemId": 1500100,
    "sourceKind": "shop",
    "summary": "圆桌厅堂老奶奶购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：骑士铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%AA%91%E5%A3%AB%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:1500200": {
    "kind": "armor",
    "itemId": 1500200,
    "sourceKind": "enemy",
    "summary": "失乡骑士头盔、失乡骑士铠甲的轻重装不互通，需要分别刷取；【获取】失乡骑士概率掉落，臂甲、腿甲所有失乡骑士都掉，轻装头盔、铠甲可以刷史东薇尔城内的失乡骑士，重装头盔可以刷盖利徳大龙飨教堂巡逻的失乡骑士，重装铠甲可以从“索尔城(屋顶)”赐福出发，下台阶后从右侧城墙跳下，木桥对面有一个持戟带狗的失乡骑士，他概率掉落重装铠甲",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=123",
    "verified": true
  },
  "armor:1500300": {
    "kind": "armor",
    "itemId": 1500300,
    "sourceKind": "enemy",
    "summary": "失乡骑士头盔、失乡骑士铠甲的轻重装不互通，需要分别刷取；【获取】失乡骑士概率掉落，臂甲、腿甲所有失乡骑士都掉，轻装头盔、铠甲可以刷史东薇尔城内的失乡骑士，重装头盔可以刷盖利徳大龙飨教堂巡逻的失乡骑士，重装铠甲可以从“索尔城(屋顶)”赐福出发，下台阶后从右侧城墙跳下，木桥对面有一个持戟带狗的失乡骑士，他概率掉落重装铠甲",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=123",
    "verified": true
  },
  "armor:1600000": {
    "kind": "armor",
    "itemId": 1600000,
    "sourceKind": "quest",
    "summary": "巨人山顶绘画奖励",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=34",
    "verified": true
  },
  "armor:1700000": {
    "kind": "armor",
    "itemId": 1700000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml",
    "verified": true
  },
  "armor:1700100": {
    "kind": "armor",
    "itemId": 1700100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml",
    "verified": true
  },
  "armor:1700200": {
    "kind": "armor",
    "itemId": 1700200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml",
    "verified": true
  },
  "armor:1700300": {
    "kind": "armor",
    "itemId": 1700300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_36.shtml",
    "verified": true
  },
  "armor:1710000": {
    "kind": "armor",
    "itemId": 1710000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚四钟楼山脚附近的雷亚卢卡利亚士兵（拿着红布的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：雷亚卢卡利亚士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_114.shtml",
    "verified": true
  },
  "armor:1710100": {
    "kind": "armor",
    "itemId": 1710100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚的雷亚卢卡利亚士兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=89",
    "verified": true
  },
  "armor:1710200": {
    "kind": "armor",
    "itemId": 1710200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚四钟楼山脚附近的雷亚卢卡利亚士兵（拿着红布的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：雷亚卢卡利亚士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_114.shtml",
    "verified": true
  },
  "armor:1710300": {
    "kind": "armor",
    "itemId": 1710300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚四钟楼山脚附近的雷亚卢卡利亚士兵（拿着红布的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：雷亚卢卡利亚士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_114.shtml",
    "verified": true
  },
  "armor:1720000": {
    "kind": "armor",
    "itemId": 1720000,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml",
    "verified": true
  },
  "armor:1720100": {
    "kind": "armor",
    "itemId": 1720100,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml",
    "verified": true
  },
  "armor:1720200": {
    "kind": "armor",
    "itemId": 1720200,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml",
    "verified": true
  },
  "armor:1720300": {
    "kind": "armor",
    "itemId": 1720300,
    "sourceKind": "enemy",
    "summary": "亚坛高原王城罗德尔出现的士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_122.shtml",
    "verified": true
  },
  "armor:1730000": {
    "kind": "armor",
    "itemId": 1730000,
    "sourceKind": "enemy",
    "summary": "盖利德赐福点「盖尔要塞北方」出现的拉塔恩士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml",
    "verified": true
  },
  "armor:1730100": {
    "kind": "armor",
    "itemId": 1730100,
    "sourceKind": "enemy",
    "summary": "盖利德赐福点「盖尔要塞北方」出现的拉塔恩士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml",
    "verified": true
  },
  "armor:1730200": {
    "kind": "armor",
    "itemId": 1730200,
    "sourceKind": "enemy",
    "summary": "盖利德赐福点「盖尔要塞北方」出现的拉塔恩士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml",
    "verified": true
  },
  "armor:1730300": {
    "kind": "armor",
    "itemId": 1730300,
    "sourceKind": "enemy",
    "summary": "盖利德的盖尔要塞附近出现的拉塔恩士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉塔恩士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_105.shtml",
    "verified": true
  },
  "armor:1740100": {
    "kind": "armor",
    "itemId": 1740100,
    "sourceKind": "enemy",
    "summary": "宁姆格福啜泣半岛赐福点「灵庙原野」附近的灵庙士兵（无头士兵）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_117.shtml",
    "verified": true
  },
  "armor:1740200": {
    "kind": "armor",
    "itemId": 1740200,
    "sourceKind": "enemy",
    "summary": "宁姆格福啜泣半岛赐福点「灵庙原野」附近的灵庙士兵（无头士兵）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_117.shtml",
    "verified": true
  },
  "armor:1740300": {
    "kind": "armor",
    "itemId": 1740300,
    "sourceKind": "enemy",
    "summary": "宁姆格福啜泣半岛赐福点「灵庙原野」附近的灵庙士兵（无头士兵）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_117.shtml",
    "verified": true
  },
  "armor:1750000": {
    "kind": "armor",
    "itemId": 1750000,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树祈祷室附近的士兵（头盔上有锁链的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 77.2,
      "z": 432,
      "label": "参考赐福：Prayer Room"
    }
  },
  "armor:1750100": {
    "kind": "armor",
    "itemId": 1750100,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树赐福点「祈祷室」附近出现的士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 77.2,
      "z": 432,
      "label": "参考赐福：Prayer Room"
    }
  },
  "armor:1750200": {
    "kind": "armor",
    "itemId": 1750200,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树赐福点「祈祷室」附近出现的士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 77.2,
      "z": 432,
      "label": "参考赐福：Prayer Room"
    }
  },
  "armor:1750300": {
    "kind": "armor",
    "itemId": 1750300,
    "sourceKind": "enemy",
    "summary": "巨人山顶米凯拉的圣树赐福点「祈祷室」附近出现的士兵有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树士兵",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_54.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 77.2,
      "z": 432,
      "label": "参考赐福：Prayer Room"
    }
  },
  "armor:1760000": {
    "kind": "armor",
    "itemId": 1760000,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:1760100": {
    "kind": "armor",
    "itemId": 1760100,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:1760200": {
    "kind": "armor",
    "itemId": 1760200,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:1760300": {
    "kind": "armor",
    "itemId": 1760300,
    "sourceKind": "map",
    "summary": "从亚坛高原格密尔英雄墓地的猎犬骑士所在房间的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:1761100": {
    "kind": "armor",
    "itemId": 1761100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：格密尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "armor:1770000": {
    "kind": "armor",
    "itemId": 1770000,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml",
    "verified": true
  },
  "armor:1770100": {
    "kind": "armor",
    "itemId": 1770100,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml",
    "verified": true
  },
  "armor:1770200": {
    "kind": "armor",
    "itemId": 1770200,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml",
    "verified": true
  },
  "armor:1770300": {
    "kind": "armor",
    "itemId": 1770300,
    "sourceKind": "enemy",
    "summary": "宁姆格福史东薇尔城关卡前废墟的葛瑞克骑士（拿着大盾的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml",
    "verified": true
  },
  "armor:1771100": {
    "kind": "armor",
    "itemId": 1771100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：葛瑞克骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_35.shtml",
    "verified": true
  },
  "armor:1780000": {
    "kind": "armor",
    "itemId": 1780000,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml",
    "verified": true
  },
  "armor:1780100": {
    "kind": "armor",
    "itemId": 1780100,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml",
    "verified": true
  },
  "armor:1780200": {
    "kind": "armor",
    "itemId": 1780200,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml",
    "verified": true
  },
  "armor:1780300": {
    "kind": "armor",
    "itemId": 1780300,
    "sourceKind": "enemy",
    "summary": "击败湖之利耶尼亚彼鲁姆教堂通往迪可达斯大升降机的路上的杜鹃骑士（头盔有蓝羽）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml",
    "verified": true
  },
  "armor:1781100": {
    "kind": "armor",
    "itemId": 1781100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：杜鹃骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_15.shtml",
    "verified": true
  },
  "armor:1790000": {
    "kind": "armor",
    "itemId": 1790000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml",
    "verified": true
  },
  "armor:1790100": {
    "kind": "armor",
    "itemId": 1790100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml",
    "verified": true
  },
  "armor:1790200": {
    "kind": "armor",
    "itemId": 1790200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml",
    "verified": true
  },
  "armor:1790300": {
    "kind": "armor",
    "itemId": 1790300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚画家的破屋附近的罗德尔骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml",
    "verified": true
  },
  "armor:1791100": {
    "kind": "armor",
    "itemId": 1791100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：罗德尔骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_121.shtml",
    "verified": true
  },
  "armor:1800000": {
    "kind": "armor",
    "itemId": 1800000,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞或红狮子城中的【红狮子骑士】有小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": true
  },
  "armor:1800100": {
    "kind": "armor",
    "itemId": 1800100,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞中的【红狮子骑士】有小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": true
  },
  "armor:1800200": {
    "kind": "armor",
    "itemId": 1800200,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞中的【红狮子骑士】有小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": true
  },
  "armor:1800300": {
    "kind": "armor",
    "itemId": 1800300,
    "sourceKind": "enemy",
    "summary": "击败盖利德的盖尔要塞或红狮子城中的【红狮子骑士】有小概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": true
  },
  "armor:1801100": {
    "kind": "armor",
    "itemId": 1801100,
    "sourceKind": "map",
    "summary": "在赐福点调整红狮子骑士铠甲",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：红狮子骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060.shtml",
    "verified": true
  },
  "armor:1810100": {
    "kind": "armor",
    "itemId": 1810100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚黑刀地下墓地入口前的灵庙骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml",
    "verified": true
  },
  "armor:1810200": {
    "kind": "armor",
    "itemId": 1810200,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚黑刀地下墓地入口前的灵庙骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml",
    "verified": true
  },
  "armor:1810300": {
    "kind": "armor",
    "itemId": 1810300,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚黑刀地下墓地入口前的灵庙骑士掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml",
    "verified": true
  },
  "armor:1811100": {
    "kind": "armor",
    "itemId": 1811100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：灵庙骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_116.shtml",
    "verified": true
  },
  "armor:1820000": {
    "kind": "armor",
    "itemId": 1820000,
    "sourceKind": "map",
    "summary": "巨人山顶米凯拉圣树赐福点「艾布雷菲尔城墙内部」梯子上房间的尸体处拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": -28.8,
      "z": 596.6,
      "label": "参考赐福：Elphael Inner Wall"
    }
  },
  "armor:1820100": {
    "kind": "armor",
    "itemId": 1820100,
    "sourceKind": "enemy",
    "summary": "化圣雪原“圣树分枝”艾布雷菲尔出现的圣树骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml",
    "verified": true
  },
  "armor:1820200": {
    "kind": "armor",
    "itemId": 1820200,
    "sourceKind": "enemy",
    "summary": "化圣雪原“圣树分枝”艾布雷菲尔出现的圣树骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml",
    "verified": true
  },
  "armor:1820300": {
    "kind": "armor",
    "itemId": 1820300,
    "sourceKind": "enemy",
    "summary": "化圣雪原“圣树分枝”艾布雷菲尔出现的圣树骑士有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml",
    "verified": true
  },
  "armor:1821100": {
    "kind": "armor",
    "itemId": 1821100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：圣树骑士",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_53.shtml",
    "verified": true
  },
  "armor:1830000": {
    "kind": "armor",
    "itemId": 1830000,
    "sourceKind": "enemy",
    "summary": "宁姆格福随处可见的小兵概率掉落（小兵臂甲、小兵腿甲建议在宁姆格福刷）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1830100": {
    "kind": "armor",
    "itemId": 1830100,
    "sourceKind": "enemy",
    "summary": "宁姆格福随处可见的小兵概率掉落（小兵臂甲、小兵腿甲建议在宁姆格福刷）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1830200": {
    "kind": "armor",
    "itemId": 1830200,
    "sourceKind": "enemy",
    "summary": "宁姆格福随处可见的小兵概率掉落（小兵臂甲、小兵腿甲建议在宁姆格福刷）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1830300": {
    "kind": "armor",
    "itemId": 1830300,
    "sourceKind": "enemy",
    "summary": "宁姆格福随处可见的小兵概率掉落（小兵臂甲、小兵腿甲建议在宁姆格福刷）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1840000": {
    "kind": "armor",
    "itemId": 1840000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚的小兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1840100": {
    "kind": "armor",
    "itemId": 1840100,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚的小兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1850000": {
    "kind": "armor",
    "itemId": 1850000,
    "sourceKind": "enemy",
    "summary": "王城罗德尔及亚坛高原地区的小兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1850100": {
    "kind": "armor",
    "itemId": 1850100,
    "sourceKind": "enemy",
    "summary": "王城罗德尔及亚坛高原地区的小兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1860000": {
    "kind": "armor",
    "itemId": 1860000,
    "sourceKind": "enemy",
    "summary": "盖利德的小兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1860100": {
    "kind": "armor",
    "itemId": 1860100,
    "sourceKind": "enemy",
    "summary": "盖利德的小兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=75",
    "verified": true
  },
  "armor:1870100": {
    "kind": "armor",
    "itemId": 1870100,
    "sourceKind": "enemy",
    "summary": "化圣雪原的漫步灵庙（会放法术那个）外围吹号的小兵概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=76",
    "verified": true
  },
  "armor:1880000": {
    "kind": "armor",
    "itemId": 1880000,
    "sourceKind": "enemy",
    "summary": "圣树（艾布雷菲尔）祈祷室赐福附近的小兵概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：象牙披肩软铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%B1%A1%E7%89%99%E6%8A%AB%E8%82%A9%E8%BD%AF%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:1880100": {
    "kind": "armor",
    "itemId": 1880100,
    "sourceKind": "enemy",
    "summary": "圣树（艾布雷菲尔）祈祷室赐福附近的小兵概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：象牙披肩软铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%B1%A1%E7%89%99%E6%8A%AB%E8%82%A9%E8%BD%AF%E9%93%A0%E7%94%B2",
    "verified": true
  },
  "armor:1890000": {
    "kind": "armor",
    "itemId": 1890000,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原王城罗德尔的恶兆猎人掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -220.2,
      "z": -220.5,
      "label": "参考赐福：Lower Capital Church"
    }
  },
  "armor:1890100": {
    "kind": "armor",
    "itemId": 1890100,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原调香师废墟中的恶兆猎人（拿着2棍棒的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:1890200": {
    "kind": "armor",
    "itemId": 1890200,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原调香师废墟中的恶兆猎人（拿着2棍棒的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:1890300": {
    "kind": "armor",
    "itemId": 1890300,
    "sourceKind": "enemy",
    "summary": "击败亚坛高原调香师废墟中的恶兆猎人（拿着2棍棒的敌人）掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：恶兆猎人",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_7.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "armor:1900000": {
    "kind": "armor",
    "itemId": 1900000,
    "sourceKind": "map",
    "summary": "宁姆格福神授塔（桥上）赐福点沿着大路向神授塔走，但是断桥处不要坐传送门，继续往断裂处走下去，在此处的尸体上拾取",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_10_00_00",
      "x": 932.1,
      "z": 604.2,
      "label": "参考赐福：宁姆格福神授塔"
    }
  },
  "armor:1901000": {
    "kind": "armor",
    "itemId": 1901000,
    "sourceKind": "quest",
    "summary": "完成绘画任务《归巢》后获得（太长了不写了，自行查找攻略）",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_09_02",
      "x": -395.8,
      "z": 103,
      "label": "参考赐福：Artist's Shack"
    }
  },
  "armor:1902000": {
    "kind": "armor",
    "itemId": 1902000,
    "sourceKind": "map",
    "summary": "雷亚卢卡利亚大书库赐福点东大门出去坐升降机下去，出门往南边走过镂空铁门立刻左拐，直走跳窗进入一个有爬梯的房间，上爬梯，在这个房间的宝箱中拾取（怪比较多还有南瓜士兵）",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 154.8,
      "z": -222.4,
      "label": "参考赐福：Debate Parlor"
    }
  },
  "armor:1910000": {
    "kind": "armor",
    "itemId": 1910000,
    "sourceKind": "map",
    "summary": "火山官邸“艾格蕾教堂”赐福点进入北方向房间里的升降机，上去出门走右手边的门来到有熔岩刀蛇人的桥上，桥上有个摆着椅子的地方可以跳下去，捡取尸体上的光点获得（没开升降机就正常走教堂二楼绕过去也可以，到遇到第一个熔岩刀蛇人的地方）",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 54.9,
      "z": -207.9,
      "label": "参考赐福：Temple of Eiglay"
    }
  },
  "armor:1920000": {
    "kind": "armor",
    "itemId": 1920000,
    "sourceKind": "map",
    "summary": "盖利德“魔法镇瑟利亚”的屋顶尸体拾取",
    "details": "",
    "sourceTitle": "用户补充图片：游民星空《艾尔登法环》防具图鉴",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": 0.5,
      "z": 439,
      "label": "参考赐福：瑟利亚后街"
    }
  },
  "armor:1930100": {
    "kind": "armor",
    "itemId": 1930100,
    "sourceKind": "other",
    "summary": "在王城底层教堂赐福旁的床上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：死眠连身裙",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%AD%BB%E7%9C%A0%E8%BF%9E%E8%BA%AB%E8%A3%99",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -220.2,
      "z": -220.5,
      "label": "参考赐福：Lower Capital Church"
    }
  },
  "armor:1940000": {
    "kind": "armor",
    "itemId": 1940000,
    "sourceKind": "map",
    "summary": "王城“王城底层教堂”赐福旁的床上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=28",
    "verified": true
  },
  "armor:1940100": {
    "kind": "armor",
    "itemId": 1940100,
    "sourceKind": "quest",
    "summary": "死眠少女菲雅支线获得死王子的修复卢恩后坐火刷新，在菲雅身上拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=27",
    "verified": true
  },
  "armor:1941100": {
    "kind": "armor",
    "itemId": 1941100,
    "sourceKind": "quest",
    "summary": "死眠少女菲雅支线获得死王子的修复卢恩后坐火刷新，在菲雅身上拾取；长袍可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=27",
    "verified": true
  },
  "armor:1980000": {
    "kind": "armor",
    "itemId": 1980000,
    "sourceKind": "enemy",
    "summary": "宁姆格福——蒙流洞窟——落魄强盗概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：强盗风帽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%BC%BA%E7%9B%97%E9%A3%8E%E5%B8%BD",
    "verified": true,
    "pin": {
      "mapId": "m31_00_00_00",
      "x": 42.5,
      "z": 54,
      "label": "参考赐福：Murkwater Cave"
    }
  },
  "armor:1980100": {
    "kind": "armor",
    "itemId": 1980100,
    "sourceKind": "map",
    "summary": "宁姆格福蒙流洞窟内强盗概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：强盗软铠甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%BC%BA%E7%9B%97%E8%BD%AF%E9%93%A0%E7%94%B2",
    "verified": true,
    "pin": {
      "mapId": "m31_00_00_00",
      "x": 42.5,
      "z": 54,
      "label": "参考赐福：Murkwater Cave"
    }
  },
  "armor:1980200": {
    "kind": "armor",
    "itemId": 1980200,
    "sourceKind": "map",
    "summary": "宁姆格福蒙流洞窟内强盗概率掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：强盗臂甲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%BC%BA%E7%9B%97%E8%87%82%E7%94%B2",
    "verified": true,
    "pin": {
      "mapId": "m31_00_00_00",
      "x": 42.5,
      "z": 54,
      "label": "参考赐福：Murkwater Cave"
    }
  },
  "armor:1990000": {
    "kind": "armor",
    "itemId": 1990000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚杜鹃教堂附近出现的随从（拿着弩的敌人）有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：上流随从",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_51.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -216.5,
      "z": -260.1,
      "label": "参考赐福：West Capital Rampart"
    }
  },
  "armor:1990100": {
    "kind": "armor",
    "itemId": 1990100,
    "sourceKind": "enemy",
    "summary": "上流随从概率掉落上流随从套装，上衣可在赐福处修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=6",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -216.5,
      "z": -260.1,
      "label": "参考赐福：West Capital Rampart"
    }
  },
  "armor:1991100": {
    "kind": "armor",
    "itemId": 1991100,
    "sourceKind": "map",
    "summary": "在赐福点调整",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：上流随从",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_51.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -216.5,
      "z": -260.1,
      "label": "参考赐福：West Capital Rampart"
    }
  },
  "armor:2000000": {
    "kind": "armor",
    "itemId": 2000000,
    "sourceKind": "enemy",
    "summary": "化圣雪原的三个腐败斗士各必定掉落一个配件，其中一个在化圣雪原地下墓地当首领；守墓斗篷可修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=80",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "armor:2000100": {
    "kind": "armor",
    "itemId": 2000100,
    "sourceKind": "enemy",
    "summary": "化圣雪原的三个腐败斗士各必定掉落一个配件，其中一个在化圣雪原地下墓地当首领；守墓斗篷可修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=80",
    "verified": true,
    "pin": {
      "mapId": "m30_19_00_00",
      "x": -38.8,
      "z": -94.5,
      "label": "参考赐福：Consecrated Snowfield Catacombs"
    }
  },
  "armor:2000300": {
    "kind": "armor",
    "itemId": 2000300,
    "sourceKind": "enemy",
    "summary": "化圣雪原的三个腐败斗士各必定掉落一个配件，其中一个在化圣雪原地下墓地当首领；守墓斗篷可修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=80",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": -353.4,
      "z": -163.5,
      "label": "参考赐福：Ordina, Liturgical Town"
    }
  },
  "armor:2001100": {
    "kind": "armor",
    "itemId": 2001100,
    "sourceKind": "enemy",
    "summary": "化圣雪原的三个腐败斗士各必定掉落一个配件，其中一个在化圣雪原地下墓地当首领；守墓斗篷可修改为轻装",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=80",
    "verified": true,
    "pin": {
      "mapId": "m30_19_00_00",
      "x": -38.8,
      "z": -94.5,
      "label": "参考赐福：Consecrated Snowfield Catacombs"
    }
  },
  "armor:2010000": {
    "kind": "armor",
    "itemId": 2010000,
    "sourceKind": "map",
    "summary": "蘑菇王冠在腐败湖拾取，其余部件在格密尔火山滚沸河洞窟拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=13",
    "verified": true
  },
  "armor:2020000": {
    "kind": "armor",
    "itemId": 2020000,
    "sourceKind": "enemy",
    "summary": "火山官邸爬地咬人哥概率掉落",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》装备图鉴大全",
    "sourceUrl": "https://m.doyo.cn/article/478704?&p=12",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 163,
      "z": -149,
      "label": "参考赐福：Subterranean Inquisition Chamber"
    }
  },
  "armor:2030000": {
    "kind": "armor",
    "itemId": 2030000,
    "sourceKind": "enemy",
    "summary": "湖之利耶尼亚魔法学院雷亚卢卡利亚赐福点「校舍内的教室」周围出现的魔法学徒有概率掉落",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》防具图鉴：拉兹利",
    "sourceUrl": "https://www.gamersky.com/handbook/202204/1475060_103.shtml",
    "verified": true
  },
  "armor:3000000": {
    "kind": "armor",
    "itemId": 3000000,
    "sourceKind": "enemy",
    "summary": "丹恩帽子在穆斯废墟边上挑战丹恩并赢得胜利获得；其余部件从隐者河下游的赐福绕到后方，顺着右边悬崖去往发光的墓碑，沿着边缘跳到瀑布的最下面拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:3000100": {
    "kind": "armor",
    "itemId": 3000100,
    "sourceKind": "enemy",
    "summary": "丹恩帽子在穆斯废墟边上挑战丹恩并赢得胜利获得；其余部件从隐者河下游的赐福绕到后方，顺着右边悬崖去往发光的墓碑，沿着边缘跳到瀑布的最下面拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": -8.6,
      "z": -386.4,
      "label": "参考赐福：Bonny Village"
    }
  },
  "armor:3000200": {
    "kind": "armor",
    "itemId": 3000200,
    "sourceKind": "enemy",
    "summary": "丹恩帽子在穆斯废墟边上挑战丹恩并赢得胜利获得；其余部件从隐者河下游的赐福绕到后方，顺着右边悬崖去往发光的墓碑，沿着边缘跳到瀑布的最下面拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:3000300": {
    "kind": "armor",
    "itemId": 3000300,
    "sourceKind": "enemy",
    "summary": "丹恩帽子在穆斯废墟边上挑战丹恩并赢得胜利获得；其余部件从隐者河下游的赐福绕到后方，顺着右边悬崖去往发光的墓碑，沿着边缘跳到瀑布的最下面拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:3001100": {
    "kind": "armor",
    "itemId": 3001100,
    "sourceKind": "enemy",
    "summary": "丹恩帽子在穆斯废墟边上挑战丹恩并赢得胜利获得；其余部件从隐者河下游的赐福绕到后方，顺着右边悬崖去往发光的墓碑，沿着边缘跳到瀑布的最下面拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:3010000": {
    "kind": "armor",
    "itemId": 3010000,
    "sourceKind": "shop",
    "summary": "击败老将盖乌斯后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_12_12_02",
      "x": -118.4,
      "z": -332.1,
      "label": "参考赐福：Scaduview"
    }
  },
  "armor:3010100": {
    "kind": "armor",
    "itemId": 3010100,
    "sourceKind": "shop",
    "summary": "击败老将盖乌斯后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_12_12_02",
      "x": -118.4,
      "z": -332.1,
      "label": "参考赐福：Scaduview"
    }
  },
  "armor:3010200": {
    "kind": "armor",
    "itemId": 3010200,
    "sourceKind": "shop",
    "summary": "击败老将盖乌斯后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_12_12_02",
      "x": -118.4,
      "z": -332.1,
      "label": "参考赐福：Scaduview"
    }
  },
  "armor:3010300": {
    "kind": "armor",
    "itemId": 3010300,
    "sourceKind": "enemy",
    "summary": "在盖乌斯后面的白金之子破屋击杀白金之子获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_12_12_02",
      "x": -118.4,
      "z": -332.1,
      "label": "参考赐福：Scaduview"
    }
  },
  "armor:5000000": {
    "kind": "armor",
    "itemId": 5000000,
    "sourceKind": "map",
    "summary": "誓约骑士套装在恩惠教堂外的悬崖边上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5000100": {
    "kind": "armor",
    "itemId": 5000100,
    "sourceKind": "quest",
    "summary": "最终首领战前打完米卫兵大乱斗后，在场景上蕾妲的尸体上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5000200": {
    "kind": "armor",
    "itemId": 5000200,
    "sourceKind": "map",
    "summary": "誓约骑士套装在恩惠教堂外的悬崖边上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5000300": {
    "kind": "armor",
    "itemId": 5000300,
    "sourceKind": "map",
    "summary": "誓约骑士套装在恩惠教堂外的悬崖边上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5002100": {
    "kind": "armor",
    "itemId": 5002100,
    "sourceKind": "map",
    "summary": "誓约骑士套装在恩惠教堂外的悬崖边上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5010000": {
    "kind": "armor",
    "itemId": 5010000,
    "sourceKind": "quest",
    "summary": "穆尔支线只要不是一直选「不知道」，最终都能获得他的装备，也可以直接击杀穆尔获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5010100": {
    "kind": "armor",
    "itemId": 5010100,
    "sourceKind": "quest",
    "summary": "穆尔支线只要不是一直选「不知道」，最终都能获得他的装备，也可以直接击杀穆尔获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5010200": {
    "kind": "armor",
    "itemId": 5010200,
    "sourceKind": "quest",
    "summary": "穆尔支线只要不是一直选「不知道」，最终都能获得他的装备，也可以直接击杀穆尔获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5010300": {
    "kind": "armor",
    "itemId": 5010300,
    "sourceKind": "quest",
    "summary": "穆尔支线只要不是一直选「不知道」，最终都能获得他的装备，也可以直接击杀穆尔获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5020000": {
    "kind": "armor",
    "itemId": 5020000,
    "sourceKind": "enemy",
    "summary": "击败大红熊首领鲁格利亚获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5020100": {
    "kind": "armor",
    "itemId": 5020100,
    "sourceKind": "enemy",
    "summary": "红熊套装：前往北方无名灵庙，击败此处的红熊首领后获得狮牙头盔与铁铆钉三件",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5020200": {
    "kind": "armor",
    "itemId": 5020200,
    "sourceKind": "enemy",
    "summary": "红熊套装：前往北方无名灵庙，击败此处的红熊首领后获得狮牙头盔与铁铆钉三件",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5020300": {
    "kind": "armor",
    "itemId": 5020300,
    "sourceKind": "enemy",
    "summary": "红熊套装：前往北方无名灵庙，击败此处的红熊首领后获得狮牙头盔与铁铆钉三件",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5021000": {
    "kind": "armor",
    "itemId": 5021000,
    "sourceKind": "enemy",
    "summary": "红熊套装：前往北方无名灵庙，击败此处的红熊首领后获得狮牙头盔与铁铆钉三件",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5030000": {
    "kind": "armor",
    "itemId": 5030000,
    "sourceKind": "quest",
    "summary": "休里耶支线：在任务中告知休里耶托莉娜让我方去杀掉米凯拉，等打败最终首领后坐赐福，无需召唤休里耶参战就能在尸体上拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5030100": {
    "kind": "armor",
    "itemId": 5030100,
    "sourceKind": "quest",
    "summary": "休里耶支线：在任务中告知休里耶托莉娜让我方去杀掉米凯拉，等打败最终首领后坐赐福，无需召唤休里耶参战就能在尸体上拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5030200": {
    "kind": "armor",
    "itemId": 5030200,
    "sourceKind": "quest",
    "summary": "休里耶支线：在任务中告知休里耶托莉娜让我方去杀掉米凯拉，等打败最终首领后坐赐福，无需召唤休里耶参战就能在尸体上拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5030300": {
    "kind": "armor",
    "itemId": 5030300,
    "sourceKind": "quest",
    "summary": "休里耶支线：在任务中告知休里耶托莉娜让我方去杀掉米凯拉，等打败最终首领后坐赐福，无需召唤休里耶参战就能在尸体上拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5031100": {
    "kind": "armor",
    "itemId": 5031100,
    "sourceKind": "quest",
    "summary": "休里耶支线：在任务中告知休里耶托莉娜让我方去杀掉米凯拉，等打败最终首领后坐赐福，无需召唤休里耶参战就能在尸体上拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5060000": {
    "kind": "armor",
    "itemId": 5060000,
    "sourceKind": "enemy",
    "summary": "大祭司（尤弥尔）套装：推进指头之母尤弥尔支线，在马努斯大教堂击败尤弥尔后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "armor:5060100": {
    "kind": "armor",
    "itemId": 5060100,
    "sourceKind": "enemy",
    "summary": "大祭司（尤弥尔）套装：推进指头之母尤弥尔支线，在马努斯大教堂击败尤弥尔后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "armor:5060200": {
    "kind": "armor",
    "itemId": 5060200,
    "sourceKind": "enemy",
    "summary": "大祭司（尤弥尔）套装：推进指头之母尤弥尔支线，在马努斯大教堂击败尤弥尔后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "armor:5060300": {
    "kind": "armor",
    "itemId": 5060300,
    "sourceKind": "enemy",
    "summary": "大祭司（尤弥尔）套装：推进指头之母尤弥尔支线，在马努斯大教堂击败尤弥尔后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "armor:5062100": {
    "kind": "armor",
    "itemId": 5062100,
    "sourceKind": "other",
    "summary": "击败尤弥尔获得大祭司长袍后，在赐福处将大祭司长袍修改为指头长袍",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5070000": {
    "kind": "armor",
    "itemId": 5070000,
    "sourceKind": "quest",
    "summary": "编绳（角人）套装：协助蕾妲在幽影城杀掉入侵的角人，或帮助角人打败蕾妲，随后在花蕾教堂之前完成支线后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5070100": {
    "kind": "armor",
    "itemId": 5070100,
    "sourceKind": "quest",
    "summary": "编绳（角人）套装：协助蕾妲在幽影城杀掉入侵的角人，或帮助角人打败蕾妲，随后在花蕾教堂之前完成支线后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5070200": {
    "kind": "armor",
    "itemId": 5070200,
    "sourceKind": "quest",
    "summary": "编绳（角人）套装：协助蕾妲在幽影城杀掉入侵的角人，或帮助角人打败蕾妲，随后在花蕾教堂之前完成支线后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5070300": {
    "kind": "armor",
    "itemId": 5070300,
    "sourceKind": "quest",
    "summary": "编绳（角人）套装：协助蕾妲在幽影城杀掉入侵的角人，或帮助角人打败蕾妲，随后在花蕾教堂之前完成支线后获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5080000": {
    "kind": "armor",
    "itemId": 5080000,
    "sourceKind": "enemy",
    "summary": "舞娘套装位于南方无名灵庙：找到青蓝海岸西侧的赐福，顺着黑色人影右侧跳过去，穿过隐藏隧道到达灵庙，击杀首领舞娘获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -482.7,
      "z": 343.1,
      "label": "参考赐福：Cerulean Coast"
    }
  },
  "armor:5080100": {
    "kind": "armor",
    "itemId": 5080100,
    "sourceKind": "enemy",
    "summary": "舞娘套装位于南方无名灵庙：找到青蓝海岸西侧的赐福，顺着黑色人影右侧跳过去，穿过隐藏隧道到达灵庙，击杀首领舞娘获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -482.7,
      "z": 343.1,
      "label": "参考赐福：Cerulean Coast"
    }
  },
  "armor:5080200": {
    "kind": "armor",
    "itemId": 5080200,
    "sourceKind": "enemy",
    "summary": "舞娘套装位于南方无名灵庙：找到青蓝海岸西侧的赐福，顺着黑色人影右侧跳过去，穿过隐藏隧道到达灵庙，击杀首领舞娘获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -482.7,
      "z": 343.1,
      "label": "参考赐福：Cerulean Coast"
    }
  },
  "armor:5080300": {
    "kind": "armor",
    "itemId": 5080300,
    "sourceKind": "enemy",
    "summary": "舞娘套装位于南方无名灵庙：找到青蓝海岸西侧的赐福，顺着黑色人影右侧跳过去，穿过隐藏隧道到达灵庙，击杀首领舞娘获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -482.7,
      "z": 343.1,
      "label": "参考赐福：Cerulean Coast"
    }
  },
  "armor:5081100": {
    "kind": "armor",
    "itemId": 5081100,
    "sourceKind": "enemy",
    "summary": "舞娘套装位于南方无名灵庙：找到青蓝海岸西侧的赐福，顺着黑色人影右侧跳过去，穿过隐藏隧道到达灵庙，击杀首领舞娘获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5090000": {
    "kind": "armor",
    "itemId": 5090000,
    "sourceKind": "map",
    "summary": "黑夜剑士套装：波尼监牢到最终首领的升降机处，坐升降机到最上方，跳到平台上可以拾取一整套",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m41_01_00_00",
      "x": -72.5,
      "z": -21.9,
      "label": "参考赐福：Bonny Gaol"
    }
  },
  "armor:5090100": {
    "kind": "armor",
    "itemId": 5090100,
    "sourceKind": "map",
    "summary": "黑夜剑士套装：波尼监牢到最终首领的升降机处，坐升降机到最上方，跳到平台上可以拾取一整套",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m41_01_00_00",
      "x": -72.5,
      "z": -21.9,
      "label": "参考赐福：Bonny Gaol"
    }
  },
  "armor:5090200": {
    "kind": "armor",
    "itemId": 5090200,
    "sourceKind": "map",
    "summary": "黑夜剑士套装：波尼监牢到最终首领的升降机处，坐升降机到最上方，跳到平台上可以拾取一整套",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m41_01_00_00",
      "x": -72.5,
      "z": -21.9,
      "label": "参考赐福：Bonny Gaol"
    }
  },
  "armor:5090300": {
    "kind": "armor",
    "itemId": 5090300,
    "sourceKind": "map",
    "summary": "黑夜剑士套装：波尼监牢到最终首领的升降机处，坐升降机到最上方，跳到平台上可以拾取一整套",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m41_01_00_00",
      "x": -72.5,
      "z": -21.9,
      "label": "参考赐福：Bonny Gaol"
    }
  },
  "armor:5100000": {
    "kind": "armor",
    "itemId": 5100000,
    "sourceKind": "quest",
    "summary": "埃贡支线获得埃贡的血指，最终击败狂龙贝勒后回到尖刺山山脚赐福，在埃贡原先所在位置上的尸体拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5100100": {
    "kind": "armor",
    "itemId": 5100100,
    "sourceKind": "quest",
    "summary": "埃贡支线获得埃贡的血指，最终击败狂龙贝勒后回到尖刺山山脚赐福，在埃贡原先所在位置上的尸体拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_13_10_02",
      "x": -567.3,
      "z": -314.2,
      "label": "参考赐福：Foot of the Jagged Peak"
    }
  },
  "armor:5100200": {
    "kind": "armor",
    "itemId": 5100200,
    "sourceKind": "quest",
    "summary": "埃贡支线获得埃贡的血指，最终击败狂龙贝勒后回到尖刺山山脚赐福，在埃贡原先所在位置上的尸体拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5100300": {
    "kind": "armor",
    "itemId": 5100300,
    "sourceKind": "quest",
    "summary": "埃贡支线获得埃贡的血指，最终击败狂龙贝勒后回到尖刺山山脚赐福，在埃贡原先所在位置上的尸体拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5101000": {
    "kind": "armor",
    "itemId": 5101000,
    "sourceKind": "quest",
    "summary": "埃贡支线获得埃贡的血指，最终击败狂龙贝勒后回到尖刺山山脚赐福，在埃贡原先所在位置上的尸体拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5101100": {
    "kind": "armor",
    "itemId": 5101100,
    "sourceKind": "quest",
    "summary": "埃贡支线获得埃贡的血指，最终击败狂龙贝勒后回到尖刺山山脚赐福，在埃贡原先所在位置上的尸体拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5110000": {
    "kind": "armor",
    "itemId": 5110000,
    "sourceKind": "quest",
    "summary": "安帕赫套装处于老兵安帕赫的支线中：在剧情里帮老兵对抗蕾妲，将最终首领约定之王打败，再坐一次赐福，之后前往场景的尸体处拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5110100": {
    "kind": "armor",
    "itemId": 5110100,
    "sourceKind": "quest",
    "summary": "安帕赫套装处于老兵安帕赫的支线中：在剧情里帮老兵对抗蕾妲，将最终首领约定之王打败，再坐一次赐福，之后前往场景的尸体处拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5110200": {
    "kind": "armor",
    "itemId": 5110200,
    "sourceKind": "quest",
    "summary": "安帕赫套装处于老兵安帕赫的支线中：在剧情里帮老兵对抗蕾妲，将最终首领约定之王打败，再坐一次赐福，之后前往场景的尸体处拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5110300": {
    "kind": "armor",
    "itemId": 5110300,
    "sourceKind": "quest",
    "summary": "安帕赫套装处于老兵安帕赫的支线中：在剧情里帮老兵对抗蕾妲，将最终首领约定之王打败，再坐一次赐福，之后前往场景的尸体处拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5111100": {
    "kind": "armor",
    "itemId": 5111100,
    "sourceKind": "quest",
    "summary": "安帕赫套装处于老兵安帕赫的支线中：在剧情里帮老兵对抗蕾妲，将最终首领约定之王打败，再坐一次赐福，之后前往场景的尸体处拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5120000": {
    "kind": "armor",
    "itemId": 5120000,
    "sourceKind": "quest",
    "summary": "最终首领前打完蕾妲米卫兵大乱斗后，在场景红狮子弗蕾亚的尸体上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5120100": {
    "kind": "armor",
    "itemId": 5120100,
    "sourceKind": "quest",
    "summary": "最终首领前打完蕾妲米卫兵大乱斗后，在场景红狮子弗蕾亚的尸体上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5120200": {
    "kind": "armor",
    "itemId": 5120200,
    "sourceKind": "quest",
    "summary": "最终首领前打完蕾妲米卫兵大乱斗后，在场景红狮子弗蕾亚的尸体上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5120300": {
    "kind": "armor",
    "itemId": 5120300,
    "sourceKind": "quest",
    "summary": "最终首领前打完蕾妲米卫兵大乱斗后，在场景红狮子弗蕾亚的尸体上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5121100": {
    "kind": "armor",
    "itemId": 5121100,
    "sourceKind": "quest",
    "summary": "最终首领前打完蕾妲米卫兵大乱斗后，在场景红狮子弗蕾亚的尸体上拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5130000": {
    "kind": "armor",
    "itemId": 5130000,
    "sourceKind": "enemy",
    "summary": "孤牢骑士套装：在西方无名灵庙击败首领孤牢骑士获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5130100": {
    "kind": "armor",
    "itemId": 5130100,
    "sourceKind": "enemy",
    "summary": "孤牢骑士套装：在西方无名灵庙击败首领孤牢骑士获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "armor:5130200": {
    "kind": "armor",
    "itemId": 5130200,
    "sourceKind": "enemy",
    "summary": "孤牢骑士套装：在西方无名灵庙击败首领孤牢骑士获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "armor:5130300": {
    "kind": "armor",
    "itemId": 5130300,
    "sourceKind": "enemy",
    "summary": "孤牢骑士套装：在西方无名灵庙击败首领孤牢骑士获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "armor:5131100": {
    "kind": "armor",
    "itemId": 5131100,
    "sourceKind": "enemy",
    "summary": "孤牢骑士套装：在西方无名灵庙击败首领孤牢骑士获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5140000": {
    "kind": "armor",
    "itemId": 5140000,
    "sourceKind": "enemy",
    "summary": "梅瑟莫士兵套装：幽影之地的梅瑟莫士兵小怪概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5140100": {
    "kind": "armor",
    "itemId": 5140100,
    "sourceKind": "enemy",
    "summary": "梅瑟莫士兵套装：幽影之地的梅瑟莫士兵小怪概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5140200": {
    "kind": "armor",
    "itemId": 5140200,
    "sourceKind": "enemy",
    "summary": "梅瑟莫士兵套装：幽影之地的梅瑟莫士兵小怪概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5140300": {
    "kind": "armor",
    "itemId": 5140300,
    "sourceKind": "enemy",
    "summary": "梅瑟莫士兵套装：幽影之地的梅瑟莫士兵小怪概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5141100": {
    "kind": "armor",
    "itemId": 5141100,
    "sourceKind": "enemy",
    "summary": "梅瑟莫士兵套装：幽影之地的梅瑟莫士兵小怪概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5150000": {
    "kind": "armor",
    "itemId": 5150000,
    "sourceKind": "enemy",
    "summary": "黑骑士套装：幽影之地的黑骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5150100": {
    "kind": "armor",
    "itemId": 5150100,
    "sourceKind": "enemy",
    "summary": "黑骑士套装：幽影之地的黑骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5150200": {
    "kind": "armor",
    "itemId": 5150200,
    "sourceKind": "enemy",
    "summary": "黑骑士套装：幽影之地的黑骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5150300": {
    "kind": "armor",
    "itemId": 5150300,
    "sourceKind": "enemy",
    "summary": "黑骑士套装：幽影之地的黑骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5160000": {
    "kind": "armor",
    "itemId": 5160000,
    "sourceKind": "enemy",
    "summary": "罗刹套装：在东方无名灵庙击败首领罗刹获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5160100": {
    "kind": "armor",
    "itemId": 5160100,
    "sourceKind": "enemy",
    "summary": "罗刹套装：在东方无名灵庙击败首领罗刹获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5160200": {
    "kind": "armor",
    "itemId": 5160200,
    "sourceKind": "enemy",
    "summary": "罗刹套装：在东方无名灵庙击败首领罗刹获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5160300": {
    "kind": "armor",
    "itemId": 5160300,
    "sourceKind": "enemy",
    "summary": "罗刹套装：在东方无名灵庙击败首领罗刹获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5180000": {
    "kind": "armor",
    "itemId": 5180000,
    "sourceKind": "enemy",
    "summary": "火焰骑士套装：幽影城等地的火焰骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5180100": {
    "kind": "armor",
    "itemId": 5180100,
    "sourceKind": "enemy",
    "summary": "火焰骑士套装：幽影城等地的火焰骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5180200": {
    "kind": "armor",
    "itemId": 5180200,
    "sourceKind": "enemy",
    "summary": "火焰骑士套装：幽影城等地的火焰骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5180300": {
    "kind": "armor",
    "itemId": 5180300,
    "sourceKind": "enemy",
    "summary": "火焰骑士套装：幽影城等地的火焰骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5181100": {
    "kind": "armor",
    "itemId": 5181100,
    "sourceKind": "enemy",
    "summary": "火焰骑士套装：幽影城等地的火焰骑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5182000": {
    "kind": "armor",
    "itemId": 5182000,
    "sourceKind": "map",
    "summary": "幽影城保藏库（内区）赐福点附近区域拾取",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》黄金树幽影全地图探索图文攻略",
    "sourceUrl": "https://www.gamersky.com/handbook/202406/1777217.shtml",
    "verified": true
  },
  "armor:5183000": {
    "kind": "armor",
    "itemId": 5183000,
    "sourceKind": "enemy",
    "summary": "幽影城顶楼，击败暗室门前的火焰骑士获得（同时获得战灰火焰枪）",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》黄金树幽影幽影树碎片收集攻略",
    "sourceUrl": "https://www.gamersky.com/handbook/202406/1777227_5.shtml",
    "verified": true
  },
  "armor:5184000": {
    "kind": "armor",
    "itemId": 5184000,
    "sourceKind": "enemy",
    "summary": "击败幽影城的精英火焰骑士获得（库德、温戈、萨赞三种头套均由精英火焰骑士掉落）",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m21_02_00_00",
      "x": -1.3,
      "z": 260.3,
      "label": "参考赐福：West Rampart"
    }
  },
  "armor:5190000": {
    "kind": "armor",
    "itemId": 5190000,
    "sourceKind": "map",
    "summary": "高地战士套装：这些部件能在首领红熊前面的场地拾取，高地上衣可换成荣誉上衣",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5190100": {
    "kind": "armor",
    "itemId": 5190100,
    "sourceKind": "map",
    "summary": "高地战士套装：这些部件能在首领红熊前面的场地拾取，高地上衣可换成荣誉上衣",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5190200": {
    "kind": "armor",
    "itemId": 5190200,
    "sourceKind": "map",
    "summary": "高地战士套装：这些部件能在首领红熊前面的场地拾取，高地上衣可换成荣誉上衣",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5190300": {
    "kind": "armor",
    "itemId": 5190300,
    "sourceKind": "map",
    "summary": "高地战士套装：这些部件能在首领红熊前面的场地拾取，高地上衣可换成荣誉上衣",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5191000": {
    "kind": "armor",
    "itemId": 5191000,
    "sourceKind": "map",
    "summary": "高地战士套装：这些部件能在首领红熊前面的场地拾取，高地上衣可换成荣誉上衣",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5191100": {
    "kind": "armor",
    "itemId": 5191100,
    "sourceKind": "map",
    "summary": "高地战士套装：这些部件能在首领红熊前面的场地拾取，高地上衣可换成荣誉上衣",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5200000": {
    "kind": "armor",
    "itemId": 5200000,
    "sourceKind": "map",
    "summary": "死骑士套装：驱暗地下墓地第一个升降台后从缺口跳下，在下方房间内拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m40_02_00_00",
      "x": -40,
      "z": 146.2,
      "label": "参考赐福：Darklight Catacombs"
    }
  },
  "armor:5200100": {
    "kind": "armor",
    "itemId": 5200100,
    "sourceKind": "map",
    "summary": "死骑士套装：驱暗地下墓地第一个升降台后从缺口跳下，在下方房间内拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m40_02_00_00",
      "x": -40,
      "z": 146.2,
      "label": "参考赐福：Darklight Catacombs"
    }
  },
  "armor:5200200": {
    "kind": "armor",
    "itemId": 5200200,
    "sourceKind": "map",
    "summary": "死骑士套装：驱暗地下墓地第一个升降台后从缺口跳下，在下方房间内拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m40_02_00_00",
      "x": -40,
      "z": 146.2,
      "label": "参考赐福：Darklight Catacombs"
    }
  },
  "armor:5200300": {
    "kind": "armor",
    "itemId": 5200300,
    "sourceKind": "map",
    "summary": "死骑士套装：驱暗地下墓地第一个升降台后从缺口跳下，在下方房间内拾取",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m40_02_00_00",
      "x": -40,
      "z": 146.2,
      "label": "参考赐福：Darklight Catacombs"
    }
  },
  "armor:5210000": {
    "kind": "armor",
    "itemId": 5210000,
    "sourceKind": "enemy",
    "summary": "咒剑士套装：幽影之地的咒剑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5210100": {
    "kind": "armor",
    "itemId": 5210100,
    "sourceKind": "enemy",
    "summary": "咒剑士套装：幽影之地的咒剑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5210200": {
    "kind": "armor",
    "itemId": 5210200,
    "sourceKind": "enemy",
    "summary": "咒剑士套装：幽影之地的咒剑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5210300": {
    "kind": "armor",
    "itemId": 5210300,
    "sourceKind": "enemy",
    "summary": "咒剑士套装：幽影之地的咒剑士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5220000": {
    "kind": "armor",
    "itemId": 5220000,
    "sourceKind": "shop",
    "summary": "梅瑟莫套装：击败梅瑟莫后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5220100": {
    "kind": "armor",
    "itemId": 5220100,
    "sourceKind": "shop",
    "summary": "梅瑟莫套装：击败梅瑟莫后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5220200": {
    "kind": "armor",
    "itemId": 5220200,
    "sourceKind": "shop",
    "summary": "梅瑟莫套装：击败梅瑟莫后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5220300": {
    "kind": "armor",
    "itemId": 5220300,
    "sourceKind": "shop",
    "summary": "梅瑟莫套装：击败梅瑟莫后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5221000": {
    "kind": "armor",
    "itemId": 5221000,
    "sourceKind": "shop",
    "summary": "梅瑟莫套装：击败梅瑟莫后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5230000": {
    "kind": "armor",
    "itemId": 5230000,
    "sourceKind": "map",
    "summary": "守墓鸟套装：头盔在螺旋塔赐福附近，从窗台爬到顶部，再从升降机往下，中途跳到平台上拾取；其余部件从守墓鸟敌人周边获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5230100": {
    "kind": "armor",
    "itemId": 5230100,
    "sourceKind": "map",
    "summary": "守墓鸟套装：头盔在螺旋塔赐福附近，从窗台爬到顶部，再从升降机往下，中途跳到平台上拾取；其余部件从守墓鸟敌人周边获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5230200": {
    "kind": "armor",
    "itemId": 5230200,
    "sourceKind": "map",
    "summary": "守墓鸟套装：头盔在螺旋塔赐福附近，从窗台爬到顶部，再从升降机往下，中途跳到平台上拾取；其余部件从守墓鸟敌人周边获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5230300": {
    "kind": "armor",
    "itemId": 5230300,
    "sourceKind": "map",
    "summary": "守墓鸟套装：头盔在螺旋塔赐福附近，从窗台爬到顶部，再从升降机往下，中途跳到平台上拾取；其余部件从守墓鸟敌人周边获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5231100": {
    "kind": "armor",
    "itemId": 5231100,
    "sourceKind": "map",
    "summary": "守墓鸟套装：头盔在螺旋塔赐福附近，从窗台爬到顶部，再从升降机往下，中途跳到平台上拾取；其余部件从守墓鸟敌人周边获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "armor:5240000": {
    "kind": "armor",
    "itemId": 5240000,
    "sourceKind": "enemy",
    "summary": "士兵套装：幽影之地的士兵小怪概率掉落，可在墓地平原慰藉教堂附近刷取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5240100": {
    "kind": "armor",
    "itemId": 5240100,
    "sourceKind": "enemy",
    "summary": "士兵套装：幽影之地的士兵小怪概率掉落，可在墓地平原慰藉教堂附近刷取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5240200": {
    "kind": "armor",
    "itemId": 5240200,
    "sourceKind": "enemy",
    "summary": "士兵套装：幽影之地的士兵小怪概率掉落，可在墓地平原慰藉教堂附近刷取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5240300": {
    "kind": "armor",
    "itemId": 5240300,
    "sourceKind": "enemy",
    "summary": "士兵套装：幽影之地的士兵小怪概率掉落，可在墓地平原慰藉教堂附近刷取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5250000": {
    "kind": "armor",
    "itemId": 5250000,
    "sourceKind": "enemy",
    "summary": "角战士套装：幽影之地的角战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5250100": {
    "kind": "armor",
    "itemId": 5250100,
    "sourceKind": "enemy",
    "summary": "角战士套装：幽影之地的角战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5250200": {
    "kind": "armor",
    "itemId": 5250200,
    "sourceKind": "enemy",
    "summary": "角战士套装：幽影之地的角战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5250300": {
    "kind": "armor",
    "itemId": 5250300,
    "sourceKind": "enemy",
    "summary": "角战士套装：幽影之地的角战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5252000": {
    "kind": "armor",
    "itemId": 5252000,
    "sourceKind": "enemy",
    "summary": "神兽战士套装：幽影之地的神兽战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5252100": {
    "kind": "armor",
    "itemId": 5252100,
    "sourceKind": "enemy",
    "summary": "神兽战士套装：幽影之地的神兽战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5253000": {
    "kind": "armor",
    "itemId": 5253000,
    "sourceKind": "enemy",
    "summary": "神鸟战士套装：幽影之地的神鸟战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5253100": {
    "kind": "armor",
    "itemId": 5253100,
    "sourceKind": "enemy",
    "summary": "神鸟战士套装：幽影之地的神鸟战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5253200": {
    "kind": "armor",
    "itemId": 5253200,
    "sourceKind": "enemy",
    "summary": "神鸟战士套装：幽影之地的神鸟战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5253300": {
    "kind": "armor",
    "itemId": 5253300,
    "sourceKind": "enemy",
    "summary": "神鸟战士套装：幽影之地的神鸟战士敌人概率掉落",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5260000": {
    "kind": "armor",
    "itemId": 5260000,
    "sourceKind": "shop",
    "summary": "蕾菈娜套装：击败双月骑士蕾菈娜后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5260100": {
    "kind": "armor",
    "itemId": 5260100,
    "sourceKind": "shop",
    "summary": "蕾菈娜套装：击败双月骑士蕾菈娜后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5260200": {
    "kind": "armor",
    "itemId": 5260200,
    "sourceKind": "shop",
    "summary": "蕾菈娜套装：击败双月骑士蕾菈娜后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5260300": {
    "kind": "armor",
    "itemId": 5260300,
    "sourceKind": "shop",
    "summary": "蕾菈娜套装：击败双月骑士蕾菈娜后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5270000": {
    "kind": "armor",
    "itemId": 5270000,
    "sourceKind": "shop",
    "summary": "年少狮子套装：击败约定之王拉塔恩后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5270100": {
    "kind": "armor",
    "itemId": 5270100,
    "sourceKind": "shop",
    "summary": "年少狮子套装：击败约定之王拉塔恩后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5270200": {
    "kind": "armor",
    "itemId": 5270200,
    "sourceKind": "shop",
    "summary": "年少狮子套装：击败约定之王拉塔恩后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5270300": {
    "kind": "armor",
    "itemId": 5270300,
    "sourceKind": "shop",
    "summary": "年少狮子套装：击败约定之王拉塔恩后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5271100": {
    "kind": "armor",
    "itemId": 5271100,
    "sourceKind": "shop",
    "summary": "年少狮子套装：击败约定之王拉塔恩后，在圆桌厅堂解指老妪处购买",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5272000": {
    "kind": "armor",
    "itemId": 5272000,
    "sourceKind": "quest",
    "summary": "光芒头冠：击杀最终首领后，再和场景中的记忆互动才能拿到",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m20_01_00_00",
      "x": -228.9,
      "z": -171.9,
      "label": "参考赐福：Gate of Divinity"
    }
  },
  "armor:5280000": {
    "kind": "armor",
    "itemId": 5280000,
    "sourceKind": "enemy",
    "summary": "幽影恶兵套装：幽影之地的恶兵小怪概率掉落",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5280100": {
    "kind": "armor",
    "itemId": 5280100,
    "sourceKind": "enemy",
    "summary": "幽影恶兵套装：幽影之地的恶兵小怪概率掉落",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5280200": {
    "kind": "armor",
    "itemId": 5280200,
    "sourceKind": "enemy",
    "summary": "幽影恶兵套装：幽影之地的恶兵小怪概率掉落",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5280300": {
    "kind": "armor",
    "itemId": 5280300,
    "sourceKind": "enemy",
    "summary": "幽影恶兵套装：幽影之地的恶兵小怪概率掉落",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影中后期防具获取攻略",
    "sourceUrl": "https://www.925g.com/jxgl/312416.html",
    "verified": true
  },
  "armor:5290000": {
    "kind": "armor",
    "itemId": 5290000,
    "sourceKind": "enemy",
    "summary": "击败神兽舞狮后获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true,
    "pin": {
      "mapId": "m20_00_00_00",
      "x": -49.7,
      "z": 311.8,
      "label": "参考赐福：Theatre of the Divine Beast"
    }
  },
  "armor:5300000": {
    "kind": "armor",
    "itemId": 5300000,
    "sourceKind": "quest",
    "summary": "将最终首领打败后，重回托莉娜所在位置即可拾取",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m22_00_00_00",
      "x": -115.2,
      "z": 70.8,
      "label": "参考赐福：Garden of Deep Purple"
    }
  },
  "armor:5310000": {
    "kind": "armor",
    "itemId": 5310000,
    "sourceKind": "enemy",
    "summary": "击败劳弗古遗迹的熔炉骑士泥盆亚获得",
    "details": "",
    "sourceTitle": "电玩帮《艾尔登法环》黄金树幽影防具全收集攻略",
    "sourceUrl": "https://www.vgover.com/news/109946",
    "verified": true
  },
  "armor:5320000": {
    "kind": "armor",
    "itemId": 5320000,
    "sourceKind": "map",
    "summary": "大壶头罩位于贝瑞特的监牢：绕到壶堆积区的后方，顺着大壶升降机往上，在房间里面即可找到",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true,
    "pin": {
      "mapId": "m41_00_00_00",
      "x": -153.8,
      "z": -73.1,
      "label": "参考赐福：Belurat Gaol"
    }
  },
  "armor:5330000": {
    "kind": "armor",
    "itemId": 5330000,
    "sourceKind": "map",
    "summary": "小恶魔头罩（狮子）位于蝎河地下墓地：墓地有咒蛙雕像和升降陷阱，从第一个升降陷阱那里升上去即可获得",
    "details": "",
    "sourceTitle": "925游戏网《艾尔登法环》黄金树幽影前中期防具获取攻略",
    "sourceUrl": "https://www.925g.com/djgl/312154.html",
    "verified": true
  },
  "talisman:1000": {
    "kind": "talisman",
    "itemId": 1000,
    "sourceKind": "shop",
    "summary": "该护符位于啜泣半岛【摩恩城（城墙前方）】。在赐福旁边的商人处花费【1500】卢恩即可购买该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：红琥珀链坠",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "talisman:1001": {
    "kind": "talisman",
    "itemId": 1001,
    "sourceKind": "map",
    "summary": "牢镇教堂赐福出门右拐，沿着房顶跑酷至桥梁附近，有道需要石剑钥匙解开的雾门建筑，进入后二楼尸体处获取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：红琥珀链坠＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%BA%A2%E7%90%A5%E7%8F%80%E9%93%BE%E5%9D%A0%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": -63,
      "z": -113.6,
      "label": "参考赐福：Prison Town Church"
    }
  },
  "talisman:1002": {
    "kind": "talisman",
    "itemId": 1002,
    "sourceKind": "other",
    "summary": "灰烬王城罗德尔赐福点，废墟中央有个井口向下跳跃，跳跃途中的横梁处获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：红琥珀链坠＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%BA%A2%E7%90%A5%E7%8F%80%E9%93%BE%E5%9D%A0%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "talisman:1010": {
    "kind": "talisman",
    "itemId": 1010,
    "sourceKind": "enemy",
    "summary": "该护符位于利耶尼亚湖【湖旁结晶洞窟】中。消灭洞窟首领【猎犬骑士】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：蓝琥珀链坠",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_6.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_05_00_00",
      "x": -116.1,
      "z": -4.4,
      "label": "参考赐福：Lakeside Crystal Cave"
    }
  },
  "talisman:1011": {
    "kind": "talisman",
    "itemId": 1011,
    "sourceKind": "map",
    "summary": "雪山地图（西）索尔城的日蚀教堂赐福点出门后左转往教堂深处走，左手边会有一道门，出门后向右走7-8步会看到有梯子的木架，从梯子上木架后有一段城墙，城墙走到头沿着哨塔外的一圈木板路走会看到一个可以向下爬的梯子，下梯子后贴着右边墙往前走会看到一个缺口，缺口外架有木板，护符在木板的最左边尸体上拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：蓝琥珀链坠＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%93%9D%E7%90%A5%E7%8F%80%E9%93%BE%E5%9D%A0%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": 457.2,
      "z": -13.7,
      "label": "参考赐福：Church of the Eclipse"
    }
  },
  "talisman:1012": {
    "kind": "talisman",
    "itemId": 1012,
    "sourceKind": "quest",
    "summary": "月光祭坛赐福点沿着正东方走，月之贵族废墟雾门地下室宝箱获得（需要完成菈妮支线）入口为隐藏门，需要滚地板显形，门旁有小恶魔钥匙座。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：蓝琥珀链坠＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%93%9D%E7%90%A5%E7%8F%80%E9%93%BE%E5%9D%A0%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": -411.5,
      "z": -525.7,
      "label": "参考赐福：Grand Cloister"
    }
  },
  "talisman:1020": {
    "kind": "talisman",
    "itemId": 1020,
    "sourceKind": "enemy",
    "summary": "该护符位于啜泣半岛西侧【灵庙原野洞窟】中。消灭洞窟首领【“病花”米兰达】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：绿琥珀链坠",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_10.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_02_00_00",
      "x": -147.6,
      "z": 24.4,
      "label": "参考赐福：Tombsward Cave"
    }
  },
  "talisman:1021": {
    "kind": "talisman",
    "itemId": 1021,
    "sourceKind": "enemy",
    "summary": "王城外围——幻化成蒙葛特的小兵——击败后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：绿琥珀链坠＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%BB%BF%E7%90%A5%E7%8F%80%E9%93%BE%E5%9D%A0%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": 330.3,
      "z": -206.1,
      "label": "参考赐福：Outer Wall Battleground"
    }
  },
  "talisman:1022": {
    "kind": "talisman",
    "itemId": 1022,
    "sourceKind": "map",
    "summary": "圣树镇（广场）赐福点，旁边房顶上有具尸体，向前再跳跃一个房顶，该房顶下方的走廊内房间的宝箱获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：绿琥珀链坠＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%BB%BF%E7%90%A5%E7%8F%80%E9%93%BE%E5%9D%A0%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": -1.3,
      "z": 295,
      "label": "参考赐福：Haligtree Town Plaza"
    }
  },
  "talisman:1030": {
    "kind": "talisman",
    "itemId": 1030,
    "sourceKind": "enemy",
    "summary": "该护符位于史东薇尔城【深处小房间】南边的房间中。在房间中可以见到【涅斐丽·露】，与其交谈后她表示会帮助我们出手击败葛瑞克。随后返回圆桌厅堂，在孪生老妪隔壁可以再次见到涅斐丽，与她交谈后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：众武护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_14.shtml",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -231.5,
      "z": 347.3,
      "label": "参考赐福：Godrick the Grafted"
    }
  },
  "talisman:1031": {
    "kind": "talisman",
    "itemId": 1031,
    "sourceKind": "other",
    "summary": "亚坛高原亚坛坑道，出矿道到树枝上后爬至最顶部拾取（小心对面的小型黑暗弃子）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：众武护符＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E4%BC%97%E6%AD%A6%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m32_05_00_00",
      "x": -50.7,
      "z": 12.9,
      "label": "参考赐福：Altus Tunnel"
    }
  },
  "talisman:1032": {
    "kind": "talisman",
    "itemId": 1032,
    "sourceKind": "enemy",
    "summary": "该护符位于史东薇尔城【深处小房间】南边的房间中。在房间中可以见到【涅斐丽·露】，与其交谈后她表示会帮助我们出手击败葛瑞克。随后返回圆桌厅堂，在孪生老妪隔壁可以再次见到涅斐丽，与她交谈后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：众武护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_14.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_10_02",
      "x": -273.9,
      "z": -382,
      "label": "参考赐福：Deep Siofra Well"
    }
  },
  "talisman:1040": {
    "kind": "talisman",
    "itemId": 1040,
    "sourceKind": "map",
    "summary": "该护符位于宁姆格福【漂流墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：黄金树的恩惠",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_17.shtml",
    "verified": true,
    "pin": {
      "mapId": "m18_00_00_00",
      "x": -115.7,
      "z": 12.2,
      "label": "参考赐福：Stranded Graveyard"
    }
  },
  "talisman:1041": {
    "kind": "talisman",
    "itemId": 1041,
    "sourceKind": "enemy",
    "summary": "王城罗德尔弃置恶兆的地底，走下水道经过复杂流程（具体过程可参考攻略）到达弃置恶兆的底层赐福点，击败首领“恶兆之子”蒙格后在宝箱内获得。（宝箱后有通往癫火封印的隐藏门）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黄金树的恩惠＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%84%E9%87%91%E6%A0%91%E7%9A%84%E6%81%A9%E6%83%A0%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": 74.4,
      "z": -80.6,
      "label": "参考赐福：Cathedral of the Forsaken"
    }
  },
  "talisman:1042": {
    "kind": "talisman",
    "itemId": 1042,
    "sourceKind": "enemy",
    "summary": "在击败“黑剑”玛利喀斯，烧毁黄金树之后，从禁域赐福点出发，坐电梯上楼，一路直走至电梯下楼至灰城罗德尔（途中有三个小怪）。楼梯左边有三个腐败树灵（数值很高，你死亡后会复活，不建议打），在下面最左侧的树枝上拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黄金树的恩惠＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%84%E9%87%91%E6%A0%91%E7%9A%84%E6%81%A9%E6%83%A0%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "talisman:1050": {
    "kind": "talisman",
    "itemId": 1050,
    "sourceKind": "enemy",
    "summary": "该护符位于啜泣半岛【啜泣的封印监牢】中。消灭首领【萨米尔的古英雄】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：拉达冈的烙印",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_20.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_08_02",
      "x": -74.3,
      "z": -62.4,
      "label": "参考赐福：Fourth Church of Marika"
    }
  },
  "talisman:1051": {
    "kind": "talisman",
    "itemId": 1051,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【法洛斯要塞】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：拉达冈的糜烂烙印",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_21.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": 304.6,
      "z": 507.4,
      "label": "参考赐福：Fort Faroth"
    }
  },
  "talisman:1060": {
    "kind": "talisman",
    "itemId": 1060,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【盖尔要塞】中。打开城堡上层帐篷下的宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：碎星的传说",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_24.shtml",
    "verified": true
  },
  "talisman:1070": {
    "kind": "talisman",
    "itemId": 1070,
    "sourceKind": "enemy",
    "summary": "该护符需要通过【米莉森】的支线任务获得，首先来到盖利德【格威的破屋】中。消灭首领【老将欧尼尔】后获得金针。将金针交给格威后他会对金针进行修复，在附近的赐福休息一次再与格威对话获得完整的金针。将金针交给教堂角落的米莉森后她会陷入昏迷，在赐福休息一次即可恢复，与恢复后的米莉森交谈即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：义手剑士的传说",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_25.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": 147.9,
      "z": 255,
      "label": "参考赐福：Church of the Plague"
    }
  },
  "talisman:1080": {
    "kind": "talisman",
    "itemId": 1080,
    "sourceKind": "quest",
    "summary": "该护符需要通过【菈妮】的支线任务获得，在菈妮的魔法师塔中可以触发该支线任务，详细流程可以点击此处查看。将猎杀指头刀交给菈妮后获得【卡利亚颠倒像】。在神授塔顶部可以获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：观星少女的传说",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_26.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_11_00_00",
      "x": 453.8,
      "z": 80,
      "label": "参考赐福：Divine Tower of Liurnia"
    }
  },
  "talisman:1090": {
    "kind": "talisman",
    "itemId": 1090,
    "sourceKind": "map",
    "summary": "该护符位于利耶尼亚湖【受净化的废墟】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：双指的传说",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_27.shtml",
    "verified": true
  },
  "talisman:1100": {
    "kind": "talisman",
    "itemId": 1100,
    "sourceKind": "map",
    "summary": "该护符位于【通往圣树的密道】中，在洛德大升降机处使用秘密符节可以到达此处。打开后方房间中的宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：银色粪金龟",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_107.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_20_00_00",
      "x": -104.9,
      "z": -139.2,
      "label": "参考赐福：Hidden Path to the Haligtree"
    }
  },
  "talisman:1110": {
    "kind": "talisman",
    "itemId": 1110,
    "sourceKind": "enemy",
    "summary": "该护符位于盖利德【废弃洞窟】之中。消灭洞窟两名首领【玛莲妮亚的尊腐骑士】后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：金色粪金龟",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_106.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -471.9,
      "z": 384.9,
      "label": "参考赐福：Smoldering Wall"
    }
  },
  "talisman:1140": {
    "kind": "talisman",
    "itemId": 1140,
    "sourceKind": "map",
    "summary": "获取该护符需要从赐福【“永恒之城”诺克史黛拉】出发。打开宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：诺克史黛拉之月",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_73.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": 29.6,
      "z": 76.5,
      "label": "参考赐福：Nokstella, Eternal City"
    }
  },
  "talisman:1150": {
    "kind": "talisman",
    "itemId": 1150,
    "sourceKind": "map",
    "summary": "该护符位于宁姆格福【水唤村】东边。在房间中的宝箱里可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：绿龟护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_13.shtml",
    "verified": true
  },
  "talisman:1160": {
    "kind": "talisman",
    "itemId": 1160,
    "sourceKind": "map",
    "summary": "该护符位于利耶尼亚湖东北，从赐福【群集灵庙】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：健壮角饰品",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_49.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -78.9,
      "z": -507.5,
      "label": "参考赐福：Mausoleum Compound"
    }
  },
  "talisman:1161": {
    "kind": "talisman",
    "itemId": 1161,
    "sourceKind": "map",
    "summary": "化圣雪原化圣雪原（深处）出发，朝西南方向前进，在树群祖灵祭司唱歌的地方拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：健壮角饰品＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%81%A5%E5%A3%AE%E8%A7%92%E9%A5%B0%E5%93%81%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "talisman:1170": {
    "kind": "talisman",
    "itemId": 1170,
    "sourceKind": "map",
    "summary": "该护符位于赐福【安瑟尔河（下游）】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：免疫角饰品",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_47.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": -18.6,
      "z": -107.3,
      "label": "参考赐福：Ainsel River Downstream"
    }
  },
  "talisman:1171": {
    "kind": "talisman",
    "itemId": 1171,
    "sourceKind": "enemy",
    "summary": "地下区域腐败湖朝东南方向出发，击杀一只祖灵之民后获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：免疫角饰品＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%85%8D%E7%96%AB%E8%A7%92%E9%A5%B0%E5%93%81%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": -303.5,
      "z": -60.2,
      "label": "参考赐福：Lake of Rot Shoreside"
    }
  },
  "talisman:1180": {
    "kind": "talisman",
    "itemId": 1180,
    "sourceKind": "map",
    "summary": "该护符位于希芙拉河【出口井下方】。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：理智角饰品",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_51.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_10_02",
      "x": -273.9,
      "z": -382,
      "label": "参考赐福：Deep Siofra Well"
    }
  },
  "talisman:1181": {
    "kind": "talisman",
    "itemId": 1181,
    "sourceKind": "shop",
    "summary": "地下区域希芙拉河祖灵森林出发，朝东南方向前进，在到路边悬崖（旁边有个幻影）跳至古遗迹，沿遗迹向北走跳至古建筑屋顶（见弃商人上方），在建筑内部地上拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：理智角饰品＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%90%86%E6%99%BA%E8%A7%92%E9%A5%B0%E5%93%81%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "talisman:1190": {
    "kind": "talisman",
    "itemId": 1190,
    "sourceKind": "map",
    "summary": "该护符位于史东薇尔城地下，从赐福【深处小房间】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：死王子的脓疮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_55.shtml",
    "verified": true
  },
  "talisman:1191": {
    "kind": "talisman",
    "itemId": 1191,
    "sourceKind": "map",
    "summary": "该护符位于赐福【深根底层】北部的下图所示位置。消灭山洞中的巨熊后即可获得该伏护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：死王子的恶性脓疮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_56.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -598.4,
      "z": -609.9,
      "label": "参考赐福：Deeproot Depths"
    }
  },
  "talisman:1200": {
    "kind": "talisman",
    "itemId": 1200,
    "sourceKind": "map",
    "summary": "该护符位于利耶尼亚湖西侧【四钟楼】处。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：斑斓项链",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_53.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "talisman:1201": {
    "kind": "talisman",
    "itemId": 1201,
    "sourceKind": "map",
    "summary": "地下区域希芙拉河祖灵森林出发，朝东北方向出发，在祖灵之王头顶上的横梁处拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：斑斓项链＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%96%91%E6%96%93%E9%A1%B9%E9%93%BE%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "talisman:1210": {
    "kind": "talisman",
    "itemId": 1210,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【龙墓洞窟】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：大山羊护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_83.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_10_00_00",
      "x": 26.5,
      "z": 65.3,
      "label": "参考赐福：Dragonbarrow Cave"
    }
  },
  "talisman:1220": {
    "kind": "talisman",
    "itemId": 1220,
    "sourceKind": "map",
    "summary": "该护符位于希芙拉河【信仰者森林】南边。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：玛莉卡的烙印",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_22.shtml",
    "verified": true
  },
  "talisman:1221": {
    "kind": "talisman",
    "itemId": 1221,
    "sourceKind": "map",
    "summary": "该护符位于圣树中，从赐福【圣树底层】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：玛莉卡的糜烂烙印",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_23.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": -28.8,
      "z": 596.6,
      "label": "参考赐福：Elphael Inner Wall"
    }
  },
  "talisman:1230": {
    "kind": "talisman",
    "itemId": 1230,
    "sourceKind": "enemy",
    "summary": "在去逐渐崩毁的法姆·亚兹拉之前击杀“战士壶”亚历山大后获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战士壶碎片",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E5%A3%AB%E5%A3%B6%E7%A2%8E%E7%89%87",
    "verified": true
  },
  "talisman:1231": {
    "kind": "talisman",
    "itemId": 1231,
    "sourceKind": "enemy",
    "summary": "注意该护符无法和【战士壶】护符同时获得。该护符需要通过【“战士壶”亚历山大】的支线任务获得，首先来到宁姆格福【圣人桥】旁边的高地上。参与战斗祭典击败【“碎星”拉塔恩】。击败拉塔恩后在赐福旁边与亚历山大交谈，得知他在刚刚的战斗中裂开了，正在收集战士的尸体填补自己。进入首领战场地后召唤亚历山大帮助我们击败火焰巨人。在前方会遭遇亚历山大，与其交谈后开始战斗。将亚历山大杀死获得该护符和亚历山大的内容物。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：亚历山大的碎片",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_81.shtml",
    "verified": true
  },
  "talisman:1250": {
    "kind": "talisman",
    "itemId": 1250,
    "sourceKind": "enemy",
    "summary": "该护符需要通过【米莉森】的支线任务获得，首先来到盖利德【格威的破屋】中。消灭首领【老将欧尼尔】后获得金针。将金针交给格威后他会对金针进行修复，在附近的赐福休息一次再与格威对话获得完整的金针。在尽头处房间中的宝箱里获得【女武神的义手】，随后返回亚坛高原将义手交给米莉森。选择红色符文成为米莉森的敌对者，将米莉森杀死后可以获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：米莉森的义手",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_100.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "talisman:2000": {
    "kind": "talisman",
    "itemId": 2000,
    "sourceKind": "shop",
    "summary": "该护符需要通过【赛尔维斯】的支线任务获得，且只能够在将【猎杀指头刀】交给菈妮之前完成。再次找到赛尔维斯后选择询问地下室可以获得一个傀儡。回到赛尔维斯处选择【我想要新的傀儡】，随后使用【星光碎片】即可购买其他的傀儡。将所有傀儡购买完后，与赛尔维斯交谈选择【关于秘密】。琥珀星光位于【亚坛大道的三叉口】东北的下图所示位置。将琥珀星光交给赛尔维斯后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：魔力对蝎",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_85.shtml",
    "verified": true
  },
  "talisman:2010": {
    "kind": "talisman",
    "itemId": 2010,
    "sourceKind": "map",
    "summary": "该护符位于【威达姆地下墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：雷对蝎",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_87.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_07_00_00",
      "x": -127,
      "z": 139.4,
      "label": "参考赐福：Wyndham Catacombs"
    }
  },
  "talisman:2020": {
    "kind": "talisman",
    "itemId": 2020,
    "sourceKind": "map",
    "summary": "该护符位于格密尔火山【莱多要塞】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：火对蝎",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_86.shtml",
    "verified": true
  },
  "talisman:2030": {
    "kind": "talisman",
    "itemId": 2030,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【熏火教堂】中。来到此处后会被【“吞噬褪色者”安娜塔西亚】入侵，将其消灭即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：圣对蝎",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_88.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_10_02",
      "x": 51.1,
      "z": -356.4,
      "label": "参考赐福：Smoldering Church"
    }
  },
  "talisman:2040": {
    "kind": "talisman",
    "itemId": 2040,
    "sourceKind": "map",
    "summary": "该护符位于利耶尼亚湖【远眺岛】旁边。在夜晚来到此处会遭遇【死之鸟】，将其消灭后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：红羽七刃剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_92.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": -226.2,
      "z": 153,
      "label": "参考赐福：Scenic Isle"
    }
  },
  "talisman:2050": {
    "kind": "talisman",
    "itemId": 2050,
    "sourceKind": "map",
    "summary": "该护符位于亚坛高原【卢克斯废墟】中。随后在地下室最深处房间中的宝箱里可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：献斗剑护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_94.shtml",
    "verified": true
  },
  "talisman:2060": {
    "kind": "talisman",
    "itemId": 2060,
    "sourceKind": "map",
    "summary": "该护符位于利耶尼亚湖南部的【湖旁结晶洞窟】中。在最深处的山洞中打开宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：矛护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_62.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_05_00_00",
      "x": -116.1,
      "z": -4.4,
      "label": "参考赐福：Lakeside Crystal Cave"
    }
  },
  "talisman:2070": {
    "kind": "talisman",
    "itemId": 2070,
    "sourceKind": "map",
    "summary": "该护符位于宁姆格福【习战者的破屋】北边的下图所示位置。来到此处后会遭到【“叛律者”亨利克斯】的入侵，将其消灭后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：大槌护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_61.shtml",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -28.5,
      "z": -18.6,
      "label": "参考赐福：Margit, the Fell Omen"
    }
  },
  "talisman:2080": {
    "kind": "talisman",
    "itemId": 2080,
    "sourceKind": "enemy",
    "summary": "该护符位于利耶尼亚湖最南边的【留水洞窟】中。消灭洞窟首领【玛莲妮亚的尊腐骑士】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：带翼剑徽章",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_98.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_04_00_00",
      "x": 26.1,
      "z": -59.3,
      "label": "参考赐福：Stillwater Cave"
    }
  },
  "talisman:2081": {
    "kind": "talisman",
    "itemId": 2081,
    "sourceKind": "enemy",
    "summary": "该护符需要通过【米莉森】的支线任务获得，首先来到盖利德【格威的破屋】中。消灭首领【老将欧尼尔】后获得金针。将金针交给格威后他会对金针进行修复，在附近的赐福休息一次再与格威对话获得完整的金针。在尽头处房间中的宝箱里获得【女武神的义手】，随后返回亚坛高原将义手交给米莉森。消灭四名米莉森的姐妹后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：腐败翼剑徽章",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_99.shtml",
    "verified": true
  },
  "talisman:2090": {
    "kind": "talisman",
    "itemId": 2090,
    "sourceKind": "map",
    "summary": "该赐福位于火山官邸中，需要从赐福【艾格蕾教堂】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：短剑护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_57.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 98.2,
      "z": -11.8,
      "label": "参考赐福：Audience Pathway"
    }
  },
  "talisman:2100": {
    "kind": "talisman",
    "itemId": 2100,
    "sourceKind": "map",
    "summary": "该护符位于风暴山丘的封印监牢旁边，从赐福【风暴山丘的破屋】沿着下图所示线路出发。在城墙上的宝箱中可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：远箭护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_67.shtml",
    "verified": true
  },
  "talisman:2110": {
    "kind": "talisman",
    "itemId": 2110,
    "sourceKind": "enemy",
    "summary": "该护符位于宁姆格福【大道下的洞窟】中。消灭首领【魔像守卫】后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：蓝色舞娘",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_84.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_17_00_00",
      "x": 32.4,
      "z": 100.4,
      "label": "参考赐福：Highroad Cave"
    }
  },
  "talisman:2120": {
    "kind": "talisman",
    "itemId": 2120,
    "sourceKind": "map",
    "summary": "该护符位于摩恩城中，从赐福【城堡后方】出发。在塔楼顶部的宝箱中可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：双头剑护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_59.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_07_02",
      "x": 422.3,
      "z": 268.3,
      "label": "参考赐福：Behind the Castle"
    }
  },
  "talisman:2130": {
    "kind": "talisman",
    "itemId": 2130,
    "sourceKind": "map",
    "summary": "该护符位于宁姆格福东侧的【雾林废墟】中。在地下室中的宝箱里可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：斧护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_60.shtml",
    "verified": true
  },
  "talisman:2140": {
    "kind": "talisman",
    "itemId": 2140,
    "sourceKind": "map",
    "summary": "该护符位于宁姆格福【死亡降临的地下墓地】东北边的地图边缘处。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：骑枪护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_63.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_10_00_00",
      "x": 932.1,
      "z": 604.2,
      "label": "参考赐福：Divine Tower of Limgrave"
    }
  },
  "talisman:2150": {
    "kind": "talisman",
    "itemId": 2150,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【不破大桥】附近。打开角落的宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：硬箭护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_66.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": 59.7,
      "z": -466.8,
      "label": "参考赐福：Impassable Greatbridge"
    }
  },
  "talisman:2160": {
    "kind": "talisman",
    "itemId": 2160,
    "sourceKind": "enemy",
    "summary": "该护符位于王城【罗德尔地下墓地】中。消灭首领【“鲜血祭司”艾斯加】后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：鲜血君王的欢愉",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_103.shtml",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": -138.8,
      "z": -242.3,
      "label": "参考赐福：Leyndell Catacombs"
    }
  },
  "talisman:2170": {
    "kind": "talisman",
    "itemId": 2170,
    "sourceKind": "enemy",
    "summary": "该护符位于格密尔火山【沸滚河洞窟】中。消灭两只首领【腐败眷属】后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：腐败眷属的欢愉",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_102.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_07_00_00",
      "x": -24.9,
      "z": 165.8,
      "label": "参考赐福：Seethewater Cave"
    }
  },
  "talisman:2180": {
    "kind": "talisman",
    "itemId": 2180,
    "sourceKind": "map",
    "summary": "该护符位于史东薇尔城中，从赐福【城墙塔】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：钩爪护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_64.shtml",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -262.3,
      "z": 113,
      "label": "参考赐福：Rampart Tower"
    }
  },
  "talisman:2190": {
    "kind": "talisman",
    "itemId": 2190,
    "sourceKind": "enemy",
    "summary": "该护符位于宁姆格福【宁姆格福坑道】中。击败坑道首领【挖石山妖】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：咆哮链坠",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_76.shtml",
    "verified": true,
    "pin": {
      "mapId": "m32_01_00_00",
      "x": 110.8,
      "z": 16.9,
      "label": "参考赐福：Limgrave Tunnels"
    }
  },
  "talisman:2200": {
    "kind": "talisman",
    "itemId": 2200,
    "sourceKind": "map",
    "summary": "该护符位于史东薇尔城中，从赐福【史东薇尔断崖】出发。在房间角落的宝箱中可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：曲剑护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_58.shtml",
    "verified": true
  },
  "talisman:2210": {
    "kind": "talisman",
    "itemId": 2210,
    "sourceKind": "map",
    "summary": "获取该护符需要先拿到【亚历山大的内容物】，具体流程可以参考本文第81页。该护符位于卡利亚书斋南边的【壶村】中，可以从【画家的破屋】跳至此处。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：友好壶",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_77.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_11_02",
      "x": 431,
      "z": -443,
      "label": "参考赐福：Jarburg"
    }
  },
  "talisman:2220": {
    "kind": "talisman",
    "itemId": 2220,
    "sourceKind": "map",
    "summary": "该护符位于亚坛高原【弃置棺材】西北边的【调香师的废墟】中。在地下室中的宝箱里可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：调香师护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_78.shtml",
    "verified": true
  },
  "talisman:3000": {
    "kind": "talisman",
    "itemId": 3000,
    "sourceKind": "map",
    "summary": "该护符位于赐福【讨论室】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：魔法师球护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_68.shtml",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 154.8,
      "z": -222.4,
      "label": "参考赐福：Debate Parlor"
    }
  },
  "talisman:3001": {
    "kind": "talisman",
    "itemId": 3001,
    "sourceKind": "shop",
    "summary": "在该流浪商人处购买【魅惑树枝】。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：魔法师块护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_69.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "talisman:3040": {
    "kind": "talisman",
    "itemId": 3040,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【瑟利亚结晶坑道】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：信徒的立誓布",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_70.shtml",
    "verified": true,
    "pin": {
      "mapId": "m32_08_00_00",
      "x": 13.1,
      "z": 143,
      "label": "参考赐福：Sellia Crystal Tunnel"
    }
  },
  "talisman:3050": {
    "kind": "talisman",
    "itemId": 3050,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【瑟利亚结晶坑道】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：信徒的立誓布",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_70.shtml",
    "verified": true
  },
  "talisman:3060": {
    "kind": "talisman",
    "itemId": 3060,
    "sourceKind": "map",
    "summary": "该护符位于天空城中，从赐福【大桥侧边】出发。在亭子中的宝箱里可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：古王护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_74.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 64.1,
      "z": 497.5,
      "label": "参考赐福：Beside the Great Bridge"
    }
  },
  "talisman:3070": {
    "kind": "talisman",
    "itemId": 3070,
    "sourceKind": "map",
    "summary": "该护符位于魔法学院中，从赐福【讨论室】出发。通过窗户进入讨论室二层，打开宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：拉达冈的肖像",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_75.shtml",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 154.8,
      "z": -222.4,
      "label": "参考赐福：Debate Parlor"
    }
  },
  "talisman:3080": {
    "kind": "talisman",
    "itemId": 3080,
    "sourceKind": "map",
    "summary": "该护符需要获得【灵魂水母的骨灰】，首先来到宁姆格福【风暴山丘的破屋】中。与破屋中的德萝莉卡交谈三次即可获得该骨灰。打开地下室中的宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：源辉石刀",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_72.shtml",
    "verified": true
  },
  "talisman:3090": {
    "kind": "talisman",
    "itemId": 3090,
    "sourceKind": "enemy",
    "summary": "该护符位于亚坛高原【黄金一族的封印监牢】中。进入封印监牢后消灭首领【“接肢”葛孚亚】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：葛孚雷的肖像",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_82.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "talisman:4000": {
    "kind": "talisman",
    "itemId": 4000,
    "sourceKind": "map",
    "summary": "该护符位于【野兽神殿】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：龙徽盾护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_28.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_10_02",
      "x": 336.9,
      "z": 399.6,
      "label": "参考赐福：Bestial Sanctum"
    }
  },
  "talisman:4001": {
    "kind": "talisman",
    "itemId": 4001,
    "sourceKind": "map",
    "summary": "亚坛高原尊贵者的英雄墓地，通过闸刀上楼后楼梯下方雾门内拾取（需要一把石剑钥匙）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：龙徽盾护符＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BE%99%E5%BE%BD%E7%9B%BE%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m30_08_00_00",
      "x": 26,
      "z": -12.5,
      "label": "参考赐福：Sainted Hero's Grave"
    }
  },
  "talisman:4002": {
    "kind": "talisman",
    "itemId": 4002,
    "sourceKind": "map",
    "summary": "逐渐崩毁的法姆·亚兹拉龙教堂祭坛左侧出门后跳下，左拐后在最远处的窗口跳出，沿破碎的道路到达另一处建筑。在建筑右侧出门，道路左拐，跳下至另一处道路，回身跳到小块碎片处拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：龙徽盾护符＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BE%99%E5%BE%BD%E7%9B%BE%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 13.7,
      "z": 411.5,
      "label": "参考赐福：Dragon Temple Altar"
    }
  },
  "talisman:4003": {
    "kind": "talisman",
    "itemId": 4003,
    "sourceKind": "map",
    "summary": "该护符位于圣树中，从赐福【排水通道】出发。随后在台子上的宝箱中可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：龙徽大盾护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_31.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 121.9,
      "z": 483.5,
      "label": "参考赐福：Drainage Channel"
    }
  },
  "talisman:4010": {
    "kind": "talisman",
    "itemId": 4010,
    "sourceKind": "enemy",
    "summary": "该护符位于啜泣半岛北部的【垂穴洞窟】之中。消灭洞窟首领【卢恩熊】后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：魔力龙徽护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_32.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_01_00_00",
      "x": -115.6,
      "z": -50.5,
      "label": "参考赐福：Earthbore Cave"
    }
  },
  "talisman:4011": {
    "kind": "talisman",
    "itemId": 4011,
    "sourceKind": "other",
    "summary": "盖利德瑟利亚镇解除三个封印之后，在城镇后部的箱子内拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：魔力龙徽护符＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%AD%94%E5%8A%9B%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%91",
    "verified": true
  },
  "talisman:4012": {
    "kind": "talisman",
    "itemId": 4012,
    "sourceKind": "enemy",
    "summary": "涅斐丽支线，湖之利耶尼亚，和白金村伪装成罐子的角色老爷爷对话，他会交出左半秘密符节。击败噩兆王，跑雪山击败索尔城首领老将，拿到右半秘密符节。回到洛德大升降机，在高举符节的位置，按左右切换行动高举秘密符节，到达通往圣树的密道，中间高台下边有隐藏道路，在线可以看好哥哥谏言找路。建议配合本站视频找这个护符。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：魔力龙徽护符＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%AD%94%E5%8A%9B%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m30_20_00_00",
      "x": -104.9,
      "z": -139.2,
      "label": "参考赐福：Hidden Path to the Haligtree"
    }
  },
  "talisman:4020": {
    "kind": "talisman",
    "itemId": 4020,
    "sourceKind": "enemy",
    "summary": "该护符位于宁姆格福中部区域的【近邻洞窟】中。消灭首领【法姆·亚兹拉的兽人】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：火龙徽护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_35.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_03_00_00",
      "x": -64.3,
      "z": -2.6,
      "label": "参考赐福：Groveside Cave"
    }
  },
  "talisman:4021": {
    "kind": "talisman",
    "itemId": 4021,
    "sourceKind": "map",
    "summary": "王城罗德尔大道旁露台出发，往东一直走，坐电梯上楼，在前往神授塔的门口左侧拾取。禁域赐福点出发，坐电梯上楼往回走到第二个电梯门口。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：火龙徽护符＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%81%AB%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -136,
      "z": -228.1,
      "label": "参考赐福：Grand Lift of Rold"
    }
  },
  "talisman:4022": {
    "kind": "talisman",
    "itemId": 4022,
    "sourceKind": "enemy",
    "summary": "桂奥尔龙墓龙墓洞窟进入后沿洞口右侧跳下，击败首领“法姆·亚兹拉的兽人”（投掷刀+大刀）后获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：火龙徽护符＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%81%AB%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m31_10_00_00",
      "x": 26.5,
      "z": 65.3,
      "label": "参考赐福：Dragonbarrow Cave"
    }
  },
  "talisman:4030": {
    "kind": "talisman",
    "itemId": 4030,
    "sourceKind": "map",
    "summary": "该护符位于史东薇尔城【宁姆格福神授塔（桥上）】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：雷龙徽护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_38.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_10_00_00",
      "x": 932.1,
      "z": 604.2,
      "label": "参考赐福：Divine Tower of Limgrave"
    }
  },
  "talisman:4031": {
    "kind": "talisman",
    "itemId": 4031,
    "sourceKind": "other",
    "summary": "格密尔火山旧亚坛坑道，右转上梯子后左手房间内拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：雷龙徽护符＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%9B%B7%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m32_04_00_00",
      "x": -196,
      "z": -95.4,
      "label": "参考赐福：Old Altus Tunnel"
    }
  },
  "talisman:4032": {
    "kind": "talisman",
    "itemId": 4032,
    "sourceKind": "map",
    "summary": "逐渐崩毁的法姆·亚兹拉龙教堂（屋顶）沿道路跳下直走（路上有8只老鹰），从古龙左边悬崖跳下，一路跳到一座建筑。进入后左转上梯子再上电梯（有失乡骑士和老鹰，也有箱子），出来后向右走（有兽人和熔炉骑士），上梯子后在右手边窗口处。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：雷龙徽护符＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%9B%B7%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 84,
      "z": 608.5,
      "label": "参考赐福：Dragon Temple Rooftop"
    }
  },
  "talisman:4040": {
    "kind": "talisman",
    "itemId": 4040,
    "sourceKind": "map",
    "summary": "该护符位于宁姆格福，从赐福【傍海古遗迹】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：圣龙徽护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_41.shtml",
    "verified": true,
    "pin": {
      "mapId": "m18_00_00_00",
      "x": -115.7,
      "z": 12.2,
      "label": "参考赐福：Stranded Graveyard"
    }
  },
  "talisman:4041": {
    "kind": "talisman",
    "itemId": 4041,
    "sourceKind": "map",
    "summary": "王城罗德尔，罗德尔地下墓地赐福坐电梯上楼，右手边楼梯下面隐藏门内。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：圣龙徽护符＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%9C%A3%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%91",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": -138.8,
      "z": -242.3,
      "label": "参考赐福：Leyndell Catacombs"
    }
  },
  "talisman:4042": {
    "kind": "talisman",
    "itemId": 4042,
    "sourceKind": "map",
    "summary": "地下区域蒙格温王朝通往王朝的崖上道路沿道路一直向下走，在西方墓地处拾取。地下区域蒙格温王朝王朝灵庙（入口）西方墓地处拾取。（大鸟银行的平台上）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：圣龙徽护符＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%9C%A3%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%92",
    "verified": true
  },
  "talisman:4050": {
    "kind": "talisman",
    "itemId": 4050,
    "sourceKind": "map",
    "summary": "该护符位于利耶尼亚湖西边的【四钟楼】。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：珍珠龙徽护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_44.shtml",
    "verified": true
  },
  "talisman:4051": {
    "kind": "talisman",
    "itemId": 4051,
    "sourceKind": "other",
    "summary": "亚坛高原沸滚河威达姆废墟最高处的废墟地下室拾取（需一把石剑钥匙）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：珍珠龙徽护符＋１",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8F%8D%E7%8F%A0%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%91",
    "verified": true
  },
  "talisman:4052": {
    "kind": "talisman",
    "itemId": 4052,
    "sourceKind": "map",
    "summary": "米凯拉的圣树圣树镇出发，右侧下楼上梯子（有带翼混种和泥人），跳到对面后拾取。（有一个狮子混种）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：珍珠龙徽护符＋２",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8F%8D%E7%8F%A0%E9%BE%99%E5%BE%BD%E6%8A%A4%E7%AC%A6%EF%BC%8B%EF%BC%92",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 63.5,
      "z": 231.4,
      "label": "参考赐福：Haligtree Town"
    }
  },
  "talisman:4060": {
    "kind": "talisman",
    "itemId": 4060,
    "sourceKind": "map",
    "summary": "该护符位于王城【罗德尔地下墓地】中。在前方神像下的台子上即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：熔炉鳞护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_89.shtml",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": -138.8,
      "z": -242.3,
      "label": "参考赐福：Leyndell Catacombs"
    }
  },
  "talisman:4070": {
    "kind": "talisman",
    "itemId": 4070,
    "sourceKind": "map",
    "summary": "该护符位于【亚雷萨英雄墓地】中。消灭通道尽头的恶兆之子后再神像下方可以获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：熔炉羽护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_90.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "talisman:4080": {
    "kind": "talisman",
    "itemId": 4080,
    "sourceKind": "map",
    "summary": "该护符位于【习战者的破屋】东南边。在夜晚来到此处后会遭遇【死之鸟】，将其消灭后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：蓝羽七刃剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_93.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "talisman:4090": {
    "kind": "talisman",
    "itemId": 4090,
    "sourceKind": "map",
    "summary": "该护符位于王城之中，从赐福【王城西边城墙】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：献斗盾护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_95.shtml",
    "verified": true
  },
  "talisman:4100": {
    "kind": "talisman",
    "itemId": 4100,
    "sourceKind": "map",
    "summary": "该护符位于圣树中，从赐福【排水通道】出发。随后在台子上的宝箱中可以找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：龙徽大盾护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_31.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 110.7,
      "z": 64.8,
      "label": "参考赐福：Grand Lift of Dectus"
    }
  },
  "talisman:4110": {
    "kind": "talisman",
    "itemId": 4110,
    "sourceKind": "enemy",
    "summary": "该护符位于利耶尼亚湖西南边的【白金村】中。在前方的篝火处消灭首领【恶兆猎人】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：熔炉瘤护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_91.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_10_02",
      "x": 178.2,
      "z": 27.6,
      "label": "参考赐福：Village of the Albinaurics"
    }
  },
  "talisman:5000": {
    "kind": "talisman",
    "itemId": 5000,
    "sourceKind": "map",
    "summary": "该护符位于亚坛高原【尊贵者的英雄墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：红种子护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_4.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_08_00_00",
      "x": 26,
      "z": -12.5,
      "label": "参考赐福：Sainted Hero's Grave"
    }
  },
  "talisman:5010": {
    "kind": "talisman",
    "itemId": 5010,
    "sourceKind": "map",
    "summary": "该护符位于未放置雕像的【卡利亚书斋】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：蓝种子护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_9.shtml",
    "verified": true
  },
  "talisman:5020": {
    "kind": "talisman",
    "itemId": 5020,
    "sourceKind": "map",
    "summary": "该护符位于啜泣半岛西南角的【归还塔】中。打开塔顶部的宝箱可以触发传送陷阱。消灭魔像后可以在旁边的宝箱中找到该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：恩惠露滴护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_5.shtml",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -426,
      "z": -294.3,
      "label": "参考赐福：Divine Bridge"
    }
  },
  "talisman:5030": {
    "kind": "talisman",
    "itemId": 5030,
    "sourceKind": "quest",
    "summary": "完成火山官邸第三次任务（鲜红书信指定的尤诺·霍斯劳）后塔妮丝给出。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：掠夺浮雕坠饰",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%8E%A0%E5%A4%BA%E6%B5%AE%E9%9B%95%E5%9D%A0%E9%A5%B0",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "talisman:5040": {
    "kind": "talisman",
    "itemId": 5040,
    "sourceKind": "enemy",
    "summary": "该护符位于雪原【唤灵洞窟】中。消灭洞窟首领【唤灵蜗牛】后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：神皮襁褓",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_101.shtml",
    "verified": true
  },
  "talisman:5050": {
    "kind": "talisman",
    "itemId": 5050,
    "sourceKind": "enemy",
    "summary": "该护符位于宁姆格福【死亡降临的地下墓地】中。击败首领【黑刀刺客】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：染红凶刀",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_96.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_11_00_00",
      "x": -104.2,
      "z": 28.7,
      "label": "参考赐福：Deathtouched Catacombs"
    }
  },
  "talisman:5060": {
    "kind": "talisman",
    "itemId": 5060,
    "sourceKind": "enemy",
    "summary": "该护符位于利耶尼亚湖东北的【黑刀地下墓地】中。在前方房间中消灭首领【黑刀刺客】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：染蓝凶刀",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_97.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_05_00_00",
      "x": -73.1,
      "z": 120.7,
      "label": "参考赐福：Black Knife Catacombs"
    }
  },
  "talisman:6000": {
    "kind": "talisman",
    "itemId": 6000,
    "sourceKind": "quest",
    "summary": "该护符需要通过【火山官邸】的支线任务获得，首先来到【火山官邸】。与塔妮丝交谈获得【客房钥匙】。使用钥匙打开餐厅的门，在桌子上获得【来自火山官邸的信】。返回火山官邸从桌子上获得第二封信。将莱利消灭后即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：克雷普的小瓶子",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_108.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "talisman:6010": {
    "kind": "talisman",
    "itemId": 6010,
    "sourceKind": "enemy",
    "summary": "该护符位于亚坛高原【贤者的洞窟】中。消灭洞窟首领【黑刀刺客】即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：隐身面纱",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_109.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "talisman:6020": {
    "kind": "talisman",
    "itemId": 6020,
    "sourceKind": "shop",
    "summary": "该护符位于利耶尼亚湖西北【通往城寨的道路】。开启菈妮支线任务后即可在【军师伊吉】处购买该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：卡利亚徽章",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_79.shtml",
    "verified": true
  },
  "talisman:6040": {
    "kind": "talisman",
    "itemId": 6040,
    "sourceKind": "map",
    "summary": "该护符位于魔法学院【校舍内的教室】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：长尾猫别针",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_110.shtml",
    "verified": true
  },
  "talisman:6050": {
    "kind": "talisman",
    "itemId": 6050,
    "sourceKind": "map",
    "summary": "该护符位于利耶尼亚湖西北边的【癫火村】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：夏玻利利之祸",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_113.shtml",
    "verified": true
  },
  "talisman:6060": {
    "kind": "talisman",
    "itemId": 6060,
    "sourceKind": "enemy",
    "summary": "该护符需要通过【菈雅】的支线任务获得，首先来到【火山官邸】。与塔妮丝交谈获得【客房钥匙】。使用钥匙打开餐厅的门，在桌子上获得【来自火山官邸的信】。完成第一个委托后返回火山官邸与菈雅对话，她会询问我们是否听到奇怪的声音。消灭首领【神皮贵族】后在教堂的桌子上获得【蛇的羊膜】。完成火山官邸的第二个信封委托后，与菈雅交谈告诉她火山官邸的内幕并将蛇的羊膜交给她。在赐福休息一次后会发现菈雅消失，与塔妮丝交谈获得【遗忘秘药】。消灭【“亵渎君王”拉卡德】后与火山官邸中的角色交谈，当火山官邸人去楼空后再次来到菈雅处即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：狄蒂卡之祸",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_114.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 93.7,
      "z": -116.1,
      "label": "参考赐福：Rykard, Lord of Blasphemy"
    }
  },
  "talisman:6070": {
    "kind": "talisman",
    "itemId": 6070,
    "sourceKind": "shop",
    "summary": "很多商人会售卖，蚯蚓脸、王室幽魂、“接肢”贵族等怪物可能掉落，也能在地上捡到。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：牺牲细枝",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%89%BA%E7%89%B2%E7%BB%86%E6%9E%9D",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 476.6,
      "z": 383.8,
      "label": "参考赐福：Altus Highway Junction"
    }
  },
  "talisman:6080": {
    "kind": "talisman",
    "itemId": 6080,
    "sourceKind": "shop",
    "summary": "该护符可以在圆桌厅堂的【孪生老妪】处购买。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：勾指伪装镜",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_111.shtml",
    "verified": true
  },
  "talisman:6090": {
    "kind": "talisman",
    "itemId": 6090,
    "sourceKind": "shop",
    "summary": "该护符可以在圆桌厅堂的【孪生老妪】处购买。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：主人伪装镜",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_112.shtml",
    "verified": true
  },
  "talisman:6110": {
    "kind": "talisman",
    "itemId": 6110,
    "sourceKind": "shop",
    "summary": "该护符位于【祖灵森林】之中。该护符需要在消灭【祖灵之王】后使用它的追忆在大赐福兑换，激活祖灵之王则需要先点燃六个火焰。消灭祖灵之王获得追忆。随后在圆桌厅堂【“解指”恩雅】处使用追忆即可兑换该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：祖灵角",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_105.shtml",
    "verified": true
  },
  "talisman:7000": {
    "kind": "talisman",
    "itemId": 7000,
    "sourceKind": "enemy",
    "summary": "击败雾谷地下墓地的首领死骑士获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m40_00_00_00",
      "x": -92,
      "z": -28.7,
      "label": "参考赐福：Fog Rift Catacombs"
    }
  },
  "talisman:7010": {
    "kind": "talisman",
    "itemId": 7010,
    "sourceKind": "enemy",
    "summary": "击败蝎河地下墓地的首领死骑士获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m40_01_00_00",
      "x": -42.9,
      "z": 34.6,
      "label": "参考赐福：Scorpion River Catacombs"
    }
  },
  "talisman:7020": {
    "kind": "talisman",
    "itemId": 7020,
    "sourceKind": "map",
    "summary": "驱暗地下墓地第一层灯光拉杆的房间，沿楼梯往下到达的地方跳出栏杆到外侧岩壁，下去一层开宝箱获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m40_02_00_00",
      "x": -40,
      "z": 146.2,
      "label": "参考赐福：Darklight Catacombs"
    }
  },
  "talisman:7030": {
    "kind": "talisman",
    "itemId": 7030,
    "sourceKind": "map",
    "summary": "从艾拉克河赐福点出发，一直往左上方向走到尾端的瀑布（有三只怪），进入后拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m43_00_00_00",
      "x": -84.9,
      "z": 144.7,
      "label": "参考赐福：Rivermouth Cave"
    }
  },
  "talisman:7040": {
    "kind": "talisman",
    "itemId": 7040,
    "sourceKind": "map",
    "summary": "波尼监牢第一层从洞口跳下后往后走（会遇到大老鼠），到尽头爬梯子上去的房间拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m41_01_00_00",
      "x": -72.5,
      "z": -21.9,
      "label": "参考赐福：Bonny Gaol"
    }
  },
  "talisman:7050": {
    "kind": "talisman",
    "itemId": 7050,
    "sourceKind": "enemy",
    "summary": "击败塔之镇下水道粪坑里的腐败树灵获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m20_00_00_00",
      "x": -104.2,
      "z": 189.3,
      "label": "参考赐福：Belurat, Tower Settlement"
    }
  },
  "talisman:7060": {
    "kind": "talisman",
    "itemId": 7060,
    "sourceKind": "map",
    "summary": "喟叹监牢从第一个梯子下去的空间，左侧第二个房间可爬梯子下到老鼠洞，探索拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m41_02_00_00",
      "x": 107.9,
      "z": 1.2,
      "label": "参考赐福：Lamenter's Gaol"
    }
  },
  "talisman:7080": {
    "kind": "talisman",
    "itemId": 7080,
    "sourceKind": "map",
    "summary": "劳弗古遗迹（西方）水池里有一个风场，解锁后利用风场跳到东方向遗迹顶上开宝箱获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true
  },
  "talisman:7090": {
    "kind": "talisman",
    "itemId": 7090,
    "sourceKind": "map",
    "summary": "从赐福「城的前方」往地图左上方走，不要进梅瑟莫士兵的聚集地，从桥底下过去，在尽头的仓库里拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_11_11_02",
      "x": 348.3,
      "z": -445.1,
      "label": "参考赐福：Castle Front"
    }
  },
  "talisman:7100": {
    "kind": "talisman",
    "itemId": 7100,
    "sourceKind": "map",
    "summary": "从惩罚要塞赐福点出发，往下层通道进门左转，踩铁笼越过障碍物开宝箱获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_12_10_02",
      "x": -76.8,
      "z": 340.2,
      "label": "参考赐福：Fort of Reprimand"
    }
  },
  "talisman:7110": {
    "kind": "talisman",
    "itemId": 7110,
    "sourceKind": "map",
    "summary": "从保藏库一楼赐福点出发往右走，从缝隙中跳过去进入的房间内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m21_01_00_00",
      "x": 214.6,
      "z": 249.7,
      "label": "参考赐福：Storehouse, Back Section"
    }
  },
  "talisman:7120": {
    "kind": "talisman",
    "itemId": 7120,
    "sourceKind": "map",
    "summary": "巫者村某棵树的树洞里有一个雕像，在雕像前拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true
  },
  "talisman:7130": {
    "kind": "talisman",
    "itemId": 7130,
    "sourceKind": "map",
    "summary": "保藏库六楼拉动拉杆后等转动完毕，跳上独木桥，往右跳到雕像手上，沿背部走到头部对准的平台，在头部位置拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m21_01_00_00",
      "x": 168.1,
      "z": 272.3,
      "label": "参考赐福：Storehouse, Fourth Floor"
    }
  },
  "talisman:7140": {
    "kind": "talisman",
    "itemId": 7140,
    "sourceKind": "quest",
    "summary": "在利亚指头遗迹吹响吊钟获得（需先到马努斯大教堂与尤弥尔对话取得任务道具）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": 122.6,
      "z": 179.3,
      "label": "参考赐福：Finger Ruins of Rhia"
    }
  },
  "talisman:7150": {
    "kind": "talisman",
    "itemId": 7150,
    "sourceKind": "quest",
    "summary": "在狄欧指头遗迹吹响吊钟后获得任务奖励（需马努斯大教堂的尤弥尔给第二张地图）",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true
  },
  "talisman:8000": {
    "kind": "talisman",
    "itemId": 8000,
    "sourceKind": "map",
    "summary": "恩惠教堂内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true
  },
  "talisman:8010": {
    "kind": "talisman",
    "itemId": 8010,
    "sourceKind": "map",
    "summary": "劳弗古遗迹-高架桥的小塔（赐福点）-出门后朝西方向直走到头，进入右手边遗迹内部，直走到头右转可以看到大门。打开大门后在蝎子（蜘蛛）房间直走到头，再左转直走后左手边下楼梯。下楼梯后直走左转进入大门，直走右转，骑马跳下通风口，直走右转上坡，骑马跳上树干拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：熔炉薄翼护符",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%86%94%E7%82%89%E8%96%84%E7%BF%BC%E6%8A%A4%E7%AC%A6",
    "verified": true
  },
  "talisman:8020": {
    "kind": "talisman",
    "itemId": 8020,
    "sourceKind": "map",
    "summary": "眺望镇宝箱内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "talisman:8030": {
    "kind": "talisman",
    "itemId": 8030,
    "sourceKind": "map",
    "summary": "穆斯废墟探索拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": -182.6,
      "z": -264,
      "label": "参考赐福：Moorth Ruins"
    }
  },
  "talisman:8040": {
    "kind": "talisman",
    "itemId": 8040,
    "sourceKind": "map",
    "summary": "神殿镇废墟建筑高处，角人战士守着的宝箱内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_11_11_02",
      "x": -48.9,
      "z": 10.8,
      "label": "参考赐福：Temple Town Ruins"
    }
  },
  "talisman:8050": {
    "kind": "talisman",
    "itemId": 8050,
    "sourceKind": "enemy",
    "summary": "「塔之镇」贝瑞特-民宅小祭坛（赐福点）附近，击败火焰骑士昆兰，即可获得。（九游网转载）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：圣战徽章",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%9C%A3%E6%88%98%E5%BE%BD%E7%AB%A0",
    "verified": true,
    "pin": {
      "mapId": "m20_00_00_00",
      "x": -104.2,
      "z": 189.3,
      "label": "参考赐福：Belurat, Tower Settlement"
    }
  },
  "talisman:8060": {
    "kind": "talisman",
    "itemId": 8060,
    "sourceKind": "enemy",
    "summary": "谷底森林-林中兽径（赐福点），朝南方向沿小路直走到岔路口，右转，朝西方向（地上有白色谏言的路）直走就能看到小怪，用盾弹反攻击后处决，击杀后获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：老翁的欢愉",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%80%81%E7%BF%81%E7%9A%84%E6%AC%A2%E6%84%89",
    "verified": true,
    "pin": {
      "mapId": "m61_12_10_02",
      "x": 242.8,
      "z": 162.8,
      "label": "参考赐福：Abyssal Woods"
    }
  },
  "talisman:8070": {
    "kind": "talisman",
    "itemId": 8070,
    "sourceKind": "map",
    "summary": "该护符位于盖利德【不破大桥】附近。打开角落的宝箱即可获得该护符。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全护符收集图文攻略：硬箭护符",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1483313_66.shtml",
    "verified": true
  },
  "talisman:8090": {
    "kind": "talisman",
    "itemId": 8090,
    "sourceKind": "map",
    "summary": "从古遗迹下方赐福点出发，往西再往北拐进树林，第一个小兵聚集的篝火处有宝箱",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m42_03_00_00",
      "x": -12.7,
      "z": -80.9,
      "label": "参考赐福：Taylew's Ruined Forge"
    }
  },
  "talisman:8100": {
    "kind": "talisman",
    "itemId": 8100,
    "sourceKind": "map",
    "summary": "「塔之镇」贝瑞特-民宅小祭坛（赐福点），左转出门上楼梯后，右转直走，爬上左手边屋顶。朝西偏北方向两格，直走下屋顶到黄色水流处，朝瀑布方向走，进入右手边建筑。爬上梯子后出门，上右手边楼梯，左转至交叉口。右转，右手边废墟后有一道门。进门上楼梯，门后十字记号处右转出门后，左手边尸体上拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：干枯花束",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%B9%B2%E6%9E%AF%E8%8A%B1%E6%9D%9F",
    "verified": true,
    "pin": {
      "mapId": "m20_00_00_00",
      "x": -104.2,
      "z": 189.3,
      "label": "参考赐福：Belurat, Tower Settlement"
    }
  },
  "talisman:8110": {
    "kind": "talisman",
    "itemId": 8110,
    "sourceKind": "map",
    "summary": "古铁陨石锻造遗迹内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m42_02_00_00",
      "x": 85.5,
      "z": -89.6,
      "label": "参考赐福：Ruined Forge of Starfall Past"
    }
  },
  "talisman:8120": {
    "kind": "talisman",
    "itemId": 8120,
    "sourceKind": "map",
    "summary": "置病村的一个露台处拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "talisman:8130": {
    "kind": "talisman",
    "itemId": 8130,
    "sourceKind": "quest",
    "summary": "老兵安帕赫支线选择帮蕾妲打老兵，然后回大道旁的十字记号赐福点对话获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true
  },
  "talisman:8140": {
    "kind": "talisman",
    "itemId": 8140,
    "sourceKind": "quest",
    "summary": "角人支线选择帮蕾妲打角人，然后回大道旁的十字记号赐福点对话获得",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": -405.9,
      "z": -244.2,
      "label": "参考赐福：Highroad Cross"
    }
  },
  "talisman:8150": {
    "kind": "talisman",
    "itemId": 8150,
    "sourceKind": "map",
    "summary": "望影露台赐福点-西北中间方向出门直走（方向不变），左手边破屋（白金的破屋）里拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：狙击弓护符",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8B%99%E5%87%BB%E5%BC%93%E6%8A%A4%E7%AC%A6",
    "verified": true,
    "pin": {
      "mapId": "m61_12_12_02",
      "x": -118.4,
      "z": -332.1,
      "label": "参考赐福：Scaduview"
    }
  },
  "talisman:8160": {
    "kind": "talisman",
    "itemId": 8160,
    "sourceKind": "enemy",
    "summary": "赐福“大洞深处”往下跳，与托莉娜交谈，连续饮用花蜜直至死亡。此后向休里耶转达托莉娜的位置，并在托莉娜的位置与他反复对话。饮用完花蜜后，休里耶在-通柱坡的十字记号（赐福点）旁坐着。“此后向休里耶转达托莉娜的位置”对话至重复后，传送至地图最下方-深紫花园（赐福点），朝西方向进洞（托莉娜的位置）后触发剧情，与休里耶对话至重复后，回到赐福点坐下刷新，触发入侵，击败后获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：托莉娜的微笑",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%89%98%E8%8E%89%E5%A8%9C%E7%9A%84%E5%BE%AE%E7%AC%91",
    "verified": true
  },
  "talisman:8170": {
    "kind": "talisman",
    "itemId": 8170,
    "sourceKind": "map",
    "summary": "墓地平原-城的前方（赐福点），东南中间方向，走上小路，沿小路直走，左手边第一个篝火的东方向悬崖处，顺着悬崖小路一路向下至水潭处。上坡，朝东南中间方向沿着路一直走，在破屋（老者的破屋）的尸体上拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：狂龙护符",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8B%82%E9%BE%99%E6%8A%A4%E7%AC%A6",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "talisman:8180": {
    "kind": "talisman",
    "itemId": 8180,
    "sourceKind": "enemy",
    "summary": "击败神兽舞狮后，追忆换取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：狂怒神兽",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%8B%82%E6%80%92%E7%A5%9E%E5%85%BD",
    "verified": true
  },
  "talisman:8190": {
    "kind": "talisman",
    "itemId": 8190,
    "sourceKind": "quest",
    "summary": "（来源九游网）玩家在获得红种子护符+1后，传送玛努斯-美特大教堂赐福点，与里面的法师尤弥尔对话后获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：亲爱的星尘",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E4%BA%B2%E7%88%B1%E7%9A%84%E6%98%9F%E5%B0%98",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "talisman:8200": {
    "kind": "talisman",
    "itemId": 8200,
    "sourceKind": "map",
    "summary": "从幽影城正门广场出发，边缘木制楼梯右边第一个房间，从长矛士兵面对的窗口跳到下面的广场，在金黄色的树下拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true
  },
  "talisman:8210": {
    "kind": "talisman",
    "itemId": 8210,
    "sourceKind": "map",
    "summary": "劳弗古遗迹的赐福“古遗迹（大楼梯）”，沿路前往神兽舞狮的位置，边缘跳到古遗迹东，标记处雕像前拾取。大道旁十字记号赐福点，朝西北方向的中间直走，左手悬崖边小路下去，朝南方向过河直走，尖顶建筑前开启传送门。传送至劳弗古遗迹后，朝东北中间方向直走，打败怪物后，在怪物身后的桥下亮起的雕塑前拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：铜绿圆碟",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%93%9C%E7%BB%BF%E5%9C%86%E7%A2%9F",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": -405.9,
      "z": -244.2,
      "label": "参考赐福：Highroad Cross"
    }
  },
  "talisman:8220": {
    "kind": "talisman",
    "itemId": 8220,
    "sourceKind": "map",
    "summary": "恩希斯城的卡利亚骑士穆利缇尔后面的房间内拾取",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true
  },
  "talisman:8230": {
    "kind": "talisman",
    "itemId": 8230,
    "sourceKind": "map",
    "summary": "墓地平原-火吻废墟（赐福点），朝南方向进入火吻废墟，上右手边小楼梯左转直走，上右边楼梯（楼梯下方罐子打破后可以拿到卢恩）右转出门。过左手屋顶上楼梯出门，右手边连着的屋顶直走，左手边开门后，宝箱内获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：介错刀",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E4%BB%8B%E9%94%99%E5%88%80",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 312.2,
      "z": -59.4,
      "label": "参考赐福：Scorched Ruins"
    }
  },
  "talisman:8240": {
    "kind": "talisman",
    "itemId": 8240,
    "sourceKind": "map",
    "summary": "从古遗迹大楼梯赐福点坐电梯下去，外侧栏杆跳跳乐可到达有两个黄衣怪的平台，左边有洞，钻进去即可找到宝箱",
    "details": "",
    "sourceTitle": "逗游网《艾尔登法环》黄金树幽影新增护符获取指南",
    "sourceUrl": "https://m.doyo.cn/article/534269",
    "verified": true,
    "pin": {
      "mapId": "m61_11_11_02",
      "x": -272.9,
      "z": -90.7,
      "label": "参考赐福：Ancient Ruins, Grand Stairway"
    }
  },
  "goods:4000": {
    "kind": "sorcery",
    "itemId": 4000,
    "sourceKind": "shop",
    "summary": "该魔法位于宁姆格福【驿站街遗迹的地下室】。在地下室中的角色【瑟濂】处可以花费卢恩获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉石魔砾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155.shtml",
    "verified": true
  },
  "goods:4001": {
    "kind": "sorcery",
    "itemId": 4001,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖【傍湖断崖】西边的墓地中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉石大魔砾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_3.shtml",
    "verified": true
  },
  "goods:4010": {
    "kind": "sorcery",
    "itemId": 4010,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖【傍湖断崖】西边的墓地中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉石迅魔砾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_2.shtml",
    "verified": true
  },
  "goods:4020": {
    "kind": "sorcery",
    "itemId": 4020,
    "sourceKind": "map",
    "summary": "该魔法位于魔法学院【校舍内的教室】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉石彗星",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_4.shtml",
    "verified": true
  },
  "goods:4021": {
    "kind": "sorcery",
    "itemId": 4021,
    "sourceKind": "map",
    "summary": "【魔法学院雷亚卢卡利亚-讨论室】前一个房间的隐藏墙壁后（唯一没有堆书的墙）宝箱内",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：帚星",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%B8%9A%E6%98%9F",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 154.8,
      "z": -222.4,
      "label": "参考赐福：Debate Parlor"
    }
  },
  "goods:4030": {
    "kind": "sorcery",
    "itemId": 4030,
    "sourceKind": "enemy",
    "summary": "该魔法需要通过【瑟濂】的支线任务获得，首先需要来到格密尔火山【“起源魔法师”亚兹勒】处。与赐福旁边的亚兹勒交谈获得魔法【彗星亚兹勒】。在洞窟中与卢瑟特大师交谈获得魔法【毁灭流星】。返回驿站街遗迹地下室告知瑟濂卢瑟特大师的位置并击败【“碎星”拉塔恩】后，瑟濂会拜托我们前往啜泣半岛寻找她的真身。在废墟地下室中瑟濂的真身上获得【瑟濂的源辉石】。与其交谈后他会对我们参与庆典击败拉塔恩表示谢意，随后会告知我们他要出门旅行。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：旋飞魔砾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_6.shtml",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 32.9,
      "z": -20.3,
      "label": "参考赐福：Raya Lucaria Grand Library"
    }
  },
  "goods:4040": {
    "kind": "sorcery",
    "itemId": 4040,
    "sourceKind": "shop",
    "summary": "该魔法位于宁姆格福【驿站街遗迹的地下室】。在地下室中的角色【瑟濂】处可以花费卢恩获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉石流星",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_7.shtml",
    "verified": true
  },
  "goods:4050": {
    "kind": "sorcery",
    "itemId": 4050,
    "sourceKind": "map",
    "summary": "该魔法位于魔法学院【校舍内的教室】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：流星雨",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_8.shtml",
    "verified": true
  },
  "goods:4060": {
    "kind": "sorcery",
    "itemId": 4060,
    "sourceKind": "shop",
    "summary": "该魔法位于宁姆格福【驿站街遗迹的地下室】。在地下室中的角色【瑟濂】处可以花费卢恩获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：结晶连弹",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_10.shtml",
    "verified": true
  },
  "goods:4070": {
    "kind": "sorcery",
    "itemId": 4070,
    "sourceKind": "shop",
    "summary": "该魔法位于宁姆格福【驿站街遗迹的地下室】。在地下室中的角色【瑟濂】处可以花费卢恩获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉石弯弧",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_9.shtml",
    "verified": true
  },
  "goods:4080": {
    "kind": "sorcery",
    "itemId": 4080,
    "sourceKind": "quest",
    "summary": "来到教堂的露台，消灭角落中的螃蟹获得【双贤辉石头罩】。返回伊利斯教堂将钥匙交给托普斯后获得动作【深具睿智】。随后来到位于利耶尼亚湖东北角的【改宗边境塔】。在塔顶部的宝箱中可以找到该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：海摩炮弹",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_12.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_10_02",
      "x": 36.8,
      "z": 286.7,
      "label": "参考赐福：Converted Tower"
    }
  },
  "goods:4090": {
    "kind": "sorcery",
    "itemId": 4090,
    "sourceKind": "map",
    "summary": "该魔法位于啜泣半岛【亚人森林的废墟】中。消灭废墟中的亚人女王即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：结晶散射",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_11.shtml",
    "verified": true
  },
  "goods:4100": {
    "kind": "sorcery",
    "itemId": 4100,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖【雷亚卢卡利亚结晶坑道】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：爆碎岩盘",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_14.shtml",
    "verified": true,
    "pin": {
      "mapId": "m32_02_00_00",
      "x": -57.2,
      "z": 22.6,
      "label": "参考赐福：Raya Lucaria Crystal Tunnel"
    }
  },
  "goods:4110": {
    "kind": "sorcery",
    "itemId": 4110,
    "sourceKind": "map",
    "summary": "该魔法位于盖利德【瑟利亚结晶坑道】中。打开小屋中的宝箱即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：爆破岩盘",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_15.shtml",
    "verified": true,
    "pin": {
      "mapId": "m32_08_00_00",
      "x": 13.1,
      "z": 143,
      "label": "参考赐福：Sellia Crystal Tunnel"
    }
  },
  "goods:4120": {
    "kind": "sorcery",
    "itemId": 4120,
    "sourceKind": "quest",
    "summary": "来到教堂的露台，消灭角落中的螃蟹获得【双贤辉石头罩】。返回伊利斯教堂将钥匙交给托普斯后获得动作【深具睿智】。随后来到位于利耶尼亚湖东北角的【改宗边境塔】。在塔顶部的宝箱中可以找到该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：海摩大槌",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_13.shtml",
    "verified": true
  },
  "goods:4130": {
    "kind": "sorcery",
    "itemId": 4130,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖【学院结晶洞窟】中。在塔顶部的宝箱中可以获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：魔法之境",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_19.shtml",
    "verified": true
  },
  "goods:4140": {
    "kind": "sorcery",
    "itemId": 4140,
    "sourceKind": "shop",
    "summary": "在魔法师托普斯处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：星光",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%98%9F%E5%85%89",
    "verified": true
  },
  "goods:4200": {
    "kind": "sorcery",
    "itemId": 4200,
    "sourceKind": "map",
    "summary": "该魔法位于格密尔火山赐福【“起源魔法师”亚兹勒】处。与赐福旁边的亚兹勒交谈即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：彗星亚兹勒",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_21.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_13_02",
      "x": -122.8,
      "z": -182.8,
      "label": "参考赐福：Primeval Sorcerer Azur"
    }
  },
  "goods:4210": {
    "kind": "sorcery",
    "itemId": 4210,
    "sourceKind": "map",
    "summary": "该魔法位于雪原【异端魔法师塔】中，该魔法师塔需要从河谷北边的山顶进入。在魔法师塔顶部的宝箱中可以获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：创星雨",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_23.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_14_02",
      "x": 505.4,
      "z": -167.4,
      "label": "参考赐福：Snow Valley Ruins Overlook"
    }
  },
  "goods:4220": {
    "kind": "sorcery",
    "itemId": 4220,
    "sourceKind": "quest",
    "summary": "该魔法需要通过【瑟濂】的支线任务获得，首先需要来到格密尔火山【“起源魔法师”亚兹勒】处。与赐福旁边的亚兹勒交谈获得魔法【彗星亚兹勒】。在洞窟中与卢瑟特大师交谈即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：毁灭流星",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_22.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_11_00_00",
      "x": 140.4,
      "z": 92.3,
      "label": "参考赐福：Sellia Hideaway"
    }
  },
  "goods:4300": {
    "kind": "sorcery",
    "itemId": 4300,
    "sourceKind": "map",
    "summary": "该魔法位于宁姆格福【亚基尔湖南方】东边的高地上。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉剑圆阵",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_25.shtml",
    "verified": true
  },
  "goods:4301": {
    "kind": "sorcery",
    "itemId": 4301,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖西北【赛尔维斯魔法师塔】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：卡利亚圆阵",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_26.shtml",
    "verified": true
  },
  "goods:4302": {
    "kind": "sorcery",
    "itemId": 4302,
    "sourceKind": "enemy",
    "summary": "该魔法位于利耶尼亚湖西侧【杜鹃的封印监牢】中。消灭首领【“卡利亚骑士”波尔斯】后即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：巨剑阵",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_27.shtml",
    "verified": true
  },
  "goods:4360": {
    "kind": "sorcery",
    "itemId": 4360,
    "sourceKind": "shop",
    "summary": "该魔法位于魔法学院【雷亚卢卡利亚大书库】中。消灭首领【“满月女王”蕾娜菈】获得满月女王的追忆。随后在大赐福【“解指”恩雅】处使用追忆即可兑换该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：蕾娜菈的满月",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_31.shtml",
    "verified": true
  },
  "goods:4361": {
    "kind": "sorcery",
    "itemId": 4361,
    "sourceKind": "quest",
    "summary": "该魔法位于【希耶罗那魔法师塔】中，该魔法师塔所在区域需要通过【菈妮】的支线任务到达，详细流程可以点击此处查看。第二只睿智兽物位于平台边缘的角落处。解开封印后在魔法师塔顶部的宝箱里可以找到该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：菈妮的暗月",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_32.shtml",
    "verified": true
  },
  "goods:4370": {
    "kind": "sorcery",
    "itemId": 4370,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖东边的【卡利亚书斋】中。在书斋正置的时候消灭【魔法教授米丽安】即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：天降魔力",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_28.shtml",
    "verified": true
  },
  "goods:4380": {
    "kind": "sorcery",
    "itemId": 4380,
    "sourceKind": "enemy",
    "summary": "该魔法位于卡利亚城寨【王室赏月地】中。来到此处消灭首领【禁卫骑士罗蕾塔】即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：罗蕾塔的大弓",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_29.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_12_02",
      "x": 352.1,
      "z": 228.5,
      "label": "参考赐福：Royal Moongazing Grounds"
    }
  },
  "goods:4381": {
    "kind": "sorcery",
    "itemId": 4381,
    "sourceKind": "enemy",
    "summary": "该魔法位于【圣树大舞台】。消灭首领【“圣树骑士”罗蕾塔】即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：罗蕾塔的绝招",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_30.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 175.9,
      "z": 297.9,
      "label": "参考赐福：Haligtree Promenade"
    }
  },
  "goods:4390": {
    "kind": "sorcery",
    "itemId": 4390,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖东边【结缘教堂】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：魔法辉剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_24.shtml",
    "verified": true
  },
  "goods:4400": {
    "kind": "sorcery",
    "itemId": 4400,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖西北【赛尔维斯魔法师塔】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：辉石冰块",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_50.shtml",
    "verified": true
  },
  "goods:4410": {
    "kind": "sorcery",
    "itemId": 4410,
    "sourceKind": "map",
    "summary": "该魔法位于雪原【萨米尔废墟】南部。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：萨米尔冰风暴",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_53.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_49_53_00",
      "x": 78.9,
      "z": 101,
      "label": "参考赐福：Zamor Ruins"
    }
  },
  "goods:4420": {
    "kind": "sorcery",
    "itemId": 4420,
    "sourceKind": "shop",
    "summary": "在【魔法师赛尔维斯】处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：冰雾",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%86%B0%E9%9B%BE",
    "verified": true
  },
  "goods:4430": {
    "kind": "sorcery",
    "itemId": 4430,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖东边【结缘教堂】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：卡利亚大剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_34.shtml",
    "verified": true
  },
  "goods:4431": {
    "kind": "sorcery",
    "itemId": 4431,
    "sourceKind": "quest",
    "summary": "该魔法需要通过【菈妮】的支线任务获得，具体流程可以点击此处查看。在大教堂前再次遭遇【“辉石龙”亚杜拉】，将其消灭后即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：亚杜拉的月光剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_36.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_10_02",
      "x": 369.9,
      "z": 104.1,
      "label": "参考赐福：Cathedral of Manus Celes"
    }
  },
  "goods:4440": {
    "kind": "sorcery",
    "itemId": 4440,
    "sourceKind": "map",
    "summary": "该魔法位于宁姆格福【亚基尔湖南方】东边的高地上。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：卡利亚迅剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_33.shtml",
    "verified": true
  },
  "goods:4450": {
    "kind": "sorcery",
    "itemId": 4450,
    "sourceKind": "map",
    "summary": "该魔法位于卡利亚城寨中，从赐福【卡利亚城寨（正门）】出发。消灭道路中的粪金龟即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：卡利亚贯刺",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_35.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_12_02",
      "x": 352.1,
      "z": 228.5,
      "label": "参考赐福：Royal Moongazing Grounds"
    }
  },
  "goods:4460": {
    "kind": "sorcery",
    "itemId": 4460,
    "sourceKind": "shop",
    "summary": "该魔法位于宁姆格福【驿站街遗迹的地下室】。在地下室中的角色【瑟濂】处可以花费卢恩获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：魔力武器",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_16.shtml",
    "verified": true
  },
  "goods:4470": {
    "kind": "sorcery",
    "itemId": 4470,
    "sourceKind": "shop",
    "summary": "该魔法位于宁姆格福【驿站街遗迹的地下室】。在地下室中的角色【瑟濂】处可以花费卢恩获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：魔力盾牌",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_17.shtml",
    "verified": true
  },
  "goods:4480": {
    "kind": "sorcery",
    "itemId": 4480,
    "sourceKind": "other",
    "summary": "卡利亚书斋颠倒后，击败魔法教授米丽安后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：镇定",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%95%87%E5%AE%9A",
    "verified": true
  },
  "goods:4490": {
    "kind": "sorcery",
    "itemId": 4490,
    "sourceKind": "map",
    "summary": "该魔法位于【王室赏月地】东北，卡利亚城寨外的小路中。消灭小路上的粪金龟即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：结冰武器",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_52.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -467.4,
      "z": 201.1,
      "label": "参考赐福：Behind Caria Manor"
    }
  },
  "goods:4500": {
    "kind": "sorcery",
    "itemId": 4500,
    "sourceKind": "other",
    "summary": "魔法学院雷亚卢卡利亚杜鹃教堂二层，从讨论室外面绕房顶走一大圈进入二层后拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：爆散结晶",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%88%86%E6%95%A3%E7%BB%93%E6%99%B6",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": -13.9,
      "z": -95.6,
      "label": "参考赐福：Church of the Cuckoo"
    }
  },
  "goods:4510": {
    "kind": "sorcery",
    "itemId": 4510,
    "sourceKind": "enemy",
    "summary": "该魔法位于利耶尼亚湖【学院结晶洞窟】中。消灭两名结晶人首领之后即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：飞散结晶",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_56.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_06_00_00",
      "x": 85.2,
      "z": 95.3,
      "label": "参考赐福：Academy Crystal Cave"
    }
  },
  "goods:4520": {
    "kind": "sorcery",
    "itemId": 4520,
    "sourceKind": "enemy",
    "summary": "该魔法位于盖利德【瑟利亚隐藏洞窟】中。消灭首领【结晶人三姐妹】后即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：奔放结晶",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_55.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_11_00_00",
      "x": 140.4,
      "z": 92.3,
      "label": "参考赐福：Sellia Hideaway"
    }
  },
  "goods:4600": {
    "kind": "sorcery",
    "itemId": 4600,
    "sourceKind": "map",
    "summary": "该魔法位于啜泣半岛【封印魔女的废墟】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：奇袭魔砾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_39.shtml",
    "verified": true
  },
  "goods:4610": {
    "kind": "sorcery",
    "itemId": 4610,
    "sourceKind": "enemy",
    "summary": "该魔法位于盖利德【格威的破屋】中。消灭首领【老将欧尼尔】获得金针。将金针交给格威后在赐福休息一次，随后再与格威对话他会让我们将金针交给米莉森。将金针交给角落处的米莉森，在赐福休息一次后与她对话，她会表示自己将要出门旅行。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：黑夜魔砾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_40.shtml",
    "verified": true
  },
  "goods:4620": {
    "kind": "sorcery",
    "itemId": 4620,
    "sourceKind": "map",
    "summary": "该魔法位于盖利德【魔法镇瑟利亚】中。随后在小镇中央封印后的宝箱里可以获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：黑夜彗星",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_41.shtml",
    "verified": true
  },
  "goods:4630": {
    "kind": "sorcery",
    "itemId": 4630,
    "sourceKind": "quest",
    "summary": "该魔法需要通过【托普斯】的支线任务完成，首先来到利耶尼亚湖【傍湖断崖】旁的伊利斯教堂中。在教室外我们会见到已经死去的托普斯，在他的尸体上可以获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：托普斯的力场",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_20.shtml",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 134.2,
      "z": -185,
      "label": "参考赐福：Schoolhouse Classroom"
    }
  },
  "goods:4640": {
    "kind": "sorcery",
    "itemId": 4640,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖西北【赛尔维斯魔法师塔】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：卡利亚式奉还",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_38.shtml",
    "verified": true
  },
  "goods:4650": {
    "kind": "sorcery",
    "itemId": 4650,
    "sourceKind": "map",
    "summary": "该魔法位于盖利德【沼泽监视塔】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：亘古黑暗",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_45.shtml",
    "verified": true
  },
  "goods:4660": {
    "kind": "sorcery",
    "itemId": 4660,
    "sourceKind": "map",
    "summary": "该魔法位于亚坛高原【海市蜃楼魔法师塔】中。第二个徽章位于魔法师塔南部。第三个徽章位于断桥旁的下图所示位置。碰触三枚徽章后魔法师塔会现形，在魔法师塔顶部的宝箱中可以找到该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：无形刀刃",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_43.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:4670": {
    "kind": "sorcery",
    "itemId": 4670,
    "sourceKind": "map",
    "summary": "该魔法位于亚坛高原【海市蜃楼魔法师塔】中。第二个徽章位于魔法师塔南部。第三个徽章位于断桥旁的下图所示位置。碰触三枚徽章后魔法师塔会现形，在魔法师塔顶部的宝箱中可以找到该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：化为无形",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_44.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:4700": {
    "kind": "sorcery",
    "itemId": 4700,
    "sourceKind": "other",
    "summary": "湖之利耶尼亚卡利亚城寨后方附近的王室封印监牢，击败石肤白王后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：陨石",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%99%A8%E7%9F%B3",
    "verified": true
  },
  "goods:4701": {
    "kind": "sorcery",
    "itemId": 4701,
    "sourceKind": "enemy",
    "summary": "该魔法位于化圣雪原西部的【耶罗·亚尼斯坑道】中。消灭坑道首领【“黑暗繁星”艾丝缇】即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：艾丝缇陨石",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_61.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "goods:4710": {
    "kind": "sorcery",
    "itemId": 4710,
    "sourceKind": "map",
    "summary": "该魔法位于盖利德【贤者镇的废墟】西北边。在地下室中的宝箱里可以获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：岩石球",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_59.shtml",
    "verified": true
  },
  "goods:4720": {
    "kind": "sorcery",
    "itemId": 4720,
    "sourceKind": "enemy",
    "summary": "该魔法位于魔法学院中，从赐福【杜鹃教堂】出发深处学院。消灭前方石碑旁的敌人即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：重力球",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_57.shtml",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 134.2,
      "z": -185,
      "label": "参考赐福：Schoolhouse Classroom"
    }
  },
  "goods:4721": {
    "kind": "sorcery",
    "itemId": 4721,
    "sourceKind": "map",
    "summary": "在【盖利德-碎星拉塔恩】最北【英灵地下墓地】宝箱内拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：碎星",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%A2%8E%E6%98%9F",
    "verified": true,
    "pin": {
      "mapId": "m30_16_00_00",
      "x": 37.6,
      "z": -109.6,
      "label": "参考赐福：War-Dead Catacombs"
    }
  },
  "goods:4800": {
    "kind": "sorcery",
    "itemId": 4800,
    "sourceKind": "map",
    "summary": "该魔法位于【火山官邸】之中。与塔妮丝交谈答应加入火山官邸获得【客房钥匙】。使用客房钥匙打开餐厅大门，在桌子上获得【来自火山官邸的信】。随后返回火山官邸向塔妮丝答复即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：熔岩球",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_46.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "goods:4810": {
    "kind": "sorcery",
    "itemId": 4810,
    "sourceKind": "map",
    "summary": "该魔法位于【火山官邸】之中。通过火山官邸的委托消灭【“古老骑士”伊修托邦】和【“黄昏将尽”莱利】之后，返回官邸与贝纳尔交谈获得信件。返回火山官邸向贝纳尔答复即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：格密尔之怒",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_48.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "goods:4820": {
    "kind": "sorcery",
    "itemId": 4820,
    "sourceKind": "map",
    "summary": "该魔法位于格密尔火山【遁世者的破屋】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：滚烫熔岩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_47.shtml",
    "verified": true
  },
  "goods:4830": {
    "kind": "sorcery",
    "itemId": 4830,
    "sourceKind": "shop",
    "summary": "该魔法位于格密尔火山【“亵渎君王”拉卡德】处。消灭拉卡德后获得亵渎君王的追忆。在大赐福【“解指”恩雅】处使用追忆即可兑换该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：拉卡德的怨魂",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_49.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 93.7,
      "z": -116.1,
      "label": "参考赐福：Rykard, Lord of Blasphemy"
    }
  },
  "goods:4900": {
    "kind": "sorcery",
    "itemId": 4900,
    "sourceKind": "enemy",
    "summary": "该魔法位于利耶尼亚湖【东边台地】西南。消灭下图所示石头边的敌人即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：罪恶荆棘",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_64.shtml",
    "verified": true
  },
  "goods:4910": {
    "kind": "sorcery",
    "itemId": 4910,
    "sourceKind": "map",
    "summary": "该魔法位于【巨人山顶地下墓地】西北边。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：责罚荆棘",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_65.shtml",
    "verified": true
  },
  "goods:5000": {
    "kind": "sorcery",
    "itemId": 5000,
    "sourceKind": "map",
    "summary": "该魔法位于史东薇尔城地下，从赐福【深处小房间】出发。消灭前方的粪金龟后即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：召唤怨魂",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_66.shtml",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -273.1,
      "z": 241.4,
      "label": "参考赐福：Liftside Chamber"
    }
  },
  "goods:5001": {
    "kind": "sorcery",
    "itemId": 5001,
    "sourceKind": "enemy",
    "summary": "该魔法位于赐福【门前镇的北方】南边。在野外来到此处消灭首领【死亡仪式鸟】即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：古老死亡怨魂",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_67.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_11_02",
      "x": -447.6,
      "z": -16.7,
      "label": "参考赐福：Gate Town North"
    }
  },
  "goods:5010": {
    "kind": "sorcery",
    "itemId": 5010,
    "sourceKind": "enemy",
    "summary": "该魔法位于【离教废屋】东南边的河流尽头处。在夜晚来到此处后消灭首领【死亡仪式鸟】即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：迸发灵火",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_68.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "goods:5020": {
    "kind": "sorcery",
    "itemId": 5020,
    "sourceKind": "quest",
    "summary": "该魔法需要通过【菲雅】的支线任务获得，具体流程可以点击此处查看。消灭五名【菲雅的英雄】后即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：菲雅烟雾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_69.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -598.4,
      "z": -609.9,
      "label": "参考赐福：Deeproot Depths"
    }
  },
  "goods:5030": {
    "kind": "sorcery",
    "itemId": 5030,
    "sourceKind": "enemy",
    "summary": "该魔法位于【威达姆废墟】中。将徘徊在此处的首领【提比亚的唤声船】消灭即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：提比亚的唤声",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_70.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:5040": {
    "kind": "incantation",
    "itemId": 5040,
    "sourceKind": "shop",
    "summary": "该祷告需要通过【“死眠少女”菲雅】的支线任务获得，详细流程可以点击此处查看。通过菲雅的梦境消灭【“死龙”弗尔桑克斯】获得死龙的追忆。随后在圆桌厅堂【“解指”恩雅】处使用追忆可以兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：死亡雷击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_46.shtml",
    "verified": true
  },
  "goods:5100": {
    "kind": "sorcery",
    "itemId": 5100,
    "sourceKind": "map",
    "summary": "该魔法位于地下区域，从赐福【希芙拉河（井底）】出发。随后消灭下方房间中雕像残骸顶部的粪金龟即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：神谕泡泡",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_62.shtml",
    "verified": true
  },
  "goods:5110": {
    "kind": "sorcery",
    "itemId": 5110,
    "sourceKind": "map",
    "summary": "该魔法位于希芙拉河中，从赐福【信仰者森林】出发。消灭大殿中的粪金龟即可获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：神谕大泡泡",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_63.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_02_00_00",
      "x": 1437.5,
      "z": 1519.2,
      "label": "参考赐福：Worshippers' Woods"
    }
  },
  "goods:6000": {
    "kind": "incantation",
    "itemId": 6000,
    "sourceKind": "shop",
    "summary": "在圣职人员柯林处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：燃火",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%87%83%E7%81%AB",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6001": {
    "kind": "incantation",
    "itemId": 6001,
    "sourceKind": "quest",
    "summary": "该祷告需要通过【火焰习武修士祷告书】获得，祷告书位于利耶尼亚湖【拉斯卡废墟】西边的营地中。将祷告书交给柯林获得结缘教堂大乌龟即可学习该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰啊！",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_51.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6010": {
    "kind": "incantation",
    "itemId": 6010,
    "sourceKind": "shop",
    "summary": "在圣职人员柯林处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：投火",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%8A%95%E7%81%AB",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6020": {
    "kind": "incantation",
    "itemId": 6020,
    "sourceKind": "map",
    "summary": "该祷告需要通过【巨人祷告书】获得，祷告书位于雪原【监视者要塞】中。在塔顶宝箱中可以找到该祷告书。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰啊，倾注吧",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_54.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6030": {
    "kind": "incantation",
    "itemId": 6030,
    "sourceKind": "map",
    "summary": "该祷告位于盖利德【腐败旁露台】东北的小路上。消灭小路中的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰啊，缠绕吧",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_57.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_10_02",
      "x": 233.4,
      "z": -449.2,
      "label": "参考赐福：Rotview Balcony"
    }
  },
  "goods:6040": {
    "kind": "incantation",
    "itemId": 6040,
    "sourceKind": "map",
    "summary": "该祷告位于利耶尼亚湖【东边台地】西南边的营地中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰的疗愈啊",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_59.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_11_02",
      "x": -137.9,
      "z": 151,
      "label": "参考赐福：Church of Vows"
    }
  },
  "goods:6050": {
    "kind": "incantation",
    "itemId": 6050,
    "sourceKind": "map",
    "summary": "该祷告位于盖利德【盖尔要塞】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰啊，赐予我力量！",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_61.shtml",
    "verified": true
  },
  "goods:6060": {
    "kind": "incantation",
    "itemId": 6060,
    "sourceKind": "map",
    "summary": "该祷告位于【巨人战争的英雄墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰的庇佑啊",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_60.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_17_00_00",
      "x": -118.6,
      "z": 120,
      "label": "参考赐福：Giant-Conquering Hero's Grave"
    }
  },
  "goods:6100": {
    "kind": "incantation",
    "itemId": 6100,
    "sourceKind": "shop",
    "summary": "将【巨人祷告书】交给祷告老师后购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：感受巨人火焰吧",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%84%9F%E5%8F%97%E5%B7%A8%E4%BA%BA%E7%81%AB%E7%84%B0%E5%90%A7",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6110": {
    "kind": "incantation",
    "itemId": 6110,
    "sourceKind": "enemy",
    "summary": "该祷告位于利耶尼亚湖南部【小偷的封印监牢】中。消灭首领【“盗火”亚当】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：恶神火焰",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_55.shtml",
    "verified": true
  },
  "goods:6120": {
    "kind": "incantation",
    "itemId": 6120,
    "sourceKind": "shop",
    "summary": "该祷告位于【火焰巨人】处。消灭火焰巨人后获得追忆。在圆桌厅堂的解指恩雅处使用追忆即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰啊，吞噬一切！",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_58.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_13_02",
      "x": -212.4,
      "z": -357.9,
      "label": "参考赐福：Fire Giant"
    }
  },
  "goods:6210": {
    "kind": "incantation",
    "itemId": 6210,
    "sourceKind": "shop",
    "summary": "将【神皮祷告书】交给祷告老师后购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黑焰",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%91%E7%84%B0",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6220": {
    "kind": "incantation",
    "itemId": 6220,
    "sourceKind": "quest",
    "summary": "该祷告需要通过【火焰习武修士祷告书】获得，祷告书位于利耶尼亚湖【拉斯卡废墟】西边的营地中。将祷告书交给柯林获得结缘教堂大乌龟即可学习该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰啊，喷发吧",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_56.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6230": {
    "kind": "incantation",
    "itemId": 6230,
    "sourceKind": "enemy",
    "summary": "该祷告位于风车村北部的【风车村高台】处。消灭首领【神皮使徒】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：横扫黑焰",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_64.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "goods:6240": {
    "kind": "incantation",
    "itemId": 6240,
    "sourceKind": "enemy",
    "summary": "该祷告位于雪原【唤灵洞窟】之中。击败神秘使徒和神皮贵族的幻影后，消灭幻灵蜗牛即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黑焰仪式",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_65.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_22_00_00",
      "x": -39.6,
      "z": 83.4,
      "label": "参考赐福：Spiritcaller Cave"
    }
  },
  "goods:6250": {
    "kind": "incantation",
    "itemId": 6250,
    "sourceKind": "map",
    "summary": "该祷告需要通过【神皮祷告书】获取，从史东薇尔城赐福【城墙塔】出发。随后在房间中的宝箱里可以找到该祷告书。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黑焰刀刃",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_66.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6260": {
    "kind": "incantation",
    "itemId": 6260,
    "sourceKind": "other",
    "summary": "获取两个大卢恩后与百智爵士交谈，向其打听所在地毫无线索的半神。返回圆桌厅堂告知百智爵士【使用秘密符节抵达后的地方】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黑焰庇佑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_67.shtml",
    "verified": true
  },
  "goods:6270": {
    "kind": "incantation",
    "itemId": 6270,
    "sourceKind": "enemy",
    "summary": "该祷告位于【艾格蕾教堂】中。在教堂中击败首领【神皮贵族】后即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：贵族气场",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_68.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 54.9,
      "z": -207.9,
      "label": "参考赐福：Temple of Eiglay"
    }
  },
  "goods:6300": {
    "kind": "incantation",
    "itemId": 6300,
    "sourceKind": "enemy",
    "summary": "该祷告位于【弃置恶兆的大教堂】中。来到此处消灭首领【“恶兆之子”蒙格】后即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：血焰爪痕",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_76.shtml",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": 74.4,
      "z": -80.6,
      "label": "参考赐福：Cathedral of the Forsaken"
    }
  },
  "goods:6310": {
    "kind": "incantation",
    "itemId": 6310,
    "sourceKind": "shop",
    "summary": "【鲜血君王的追忆】兑换",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：授血",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%8E%88%E8%A1%80",
    "verified": true
  },
  "goods:6320": {
    "kind": "incantation",
    "itemId": 6320,
    "sourceKind": "map",
    "summary": "该祷告位于利耶尼亚湖【蔷薇教堂】北边。消灭湖中的粪金龟后即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：血焰刀刃",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_78.shtml",
    "verified": true
  },
  "goods:6330": {
    "kind": "incantation",
    "itemId": 6330,
    "sourceKind": "shop",
    "summary": "该祷告可以在圆桌厅堂中的角色【柯林】处购买。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：魔力防护",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_7.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "goods:6340": {
    "kind": "incantation",
    "itemId": 6340,
    "sourceKind": "map",
    "summary": "该祷告位于赐福【移送罪人之路（路旁）】东南边。消灭高地上的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黄金树庇佑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_19.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -317.6,
      "z": 241.1,
      "label": "参考赐福：Road of Iniquity Side Path"
    }
  },
  "goods:6400": {
    "kind": "incantation",
    "itemId": 6400,
    "sourceKind": "shop",
    "summary": "在圣职人员柯林处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：拒绝",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%8B%92%E7%BB%9D",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6410": {
    "kind": "incantation",
    "itemId": 6410,
    "sourceKind": "map",
    "summary": "该祷告位于【森林之民的废墟】南边的建筑废墟中。打开地下室中的宝箱即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黄金之怒",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_20.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6420": {
    "kind": "incantation",
    "itemId": 6420,
    "sourceKind": "shop",
    "summary": "该祷告可以在圆桌厅堂中的角色【柯林】处购买。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：紧急恢复",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6421": {
    "kind": "incantation",
    "itemId": 6421,
    "sourceKind": "shop",
    "summary": "在圣职人员柯林处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：恢复",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%81%A2%E5%A4%8D",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6422": {
    "kind": "incantation",
    "itemId": 6422,
    "sourceKind": "other",
    "summary": "推进柯林与金面具支线，在柯林（记录者）处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：大恢复",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%A4%A7%E6%81%A2%E5%A4%8D",
    "verified": true,
    "pin": {
      "mapId": "m60_13_13_02",
      "x": 106.2,
      "z": -149.1,
      "label": "参考赐福：Forge of the Giants"
    }
  },
  "goods:6423": {
    "kind": "incantation",
    "itemId": 6423,
    "sourceKind": "map",
    "summary": "该祷告需要通过【双指祷告书】获得，该祷告书位于王城【城寨一楼】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：王之恢复",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_4.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6424": {
    "kind": "incantation",
    "itemId": 6424,
    "sourceKind": "other",
    "summary": "灰城罗德尔女王闺阁赐福附近的尸体上拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黄金树恢复",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%84%E9%87%91%E6%A0%91%E6%81%A2%E5%A4%8D",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "goods:6430": {
    "kind": "incantation",
    "itemId": 6430,
    "sourceKind": "map",
    "summary": "该祷告位于利耶尼亚湖【结缘教堂】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：恩惠赐福",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_22.shtml",
    "verified": true
  },
  "goods:6431": {
    "kind": "incantation",
    "itemId": 6431,
    "sourceKind": "map",
    "summary": "该祷告位于王城【女王闺阁】中。在赐福旁边的台子上即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黄金树恩惠",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_23.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "goods:6440": {
    "kind": "incantation",
    "itemId": 6440,
    "sourceKind": "shop",
    "summary": "该祷告可以在圆桌厅堂中的角色【柯林】处购买。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：疗愈毒性",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_5.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6441": {
    "kind": "incantation",
    "itemId": 6441,
    "sourceKind": "map",
    "summary": "该祷告需要通过【双指祷告书】获得，该祷告书位于王城【城寨一楼】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：王之疗愈",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_6.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6450": {
    "kind": "incantation",
    "itemId": 6450,
    "sourceKind": "shop",
    "summary": "该祷告可以在圆桌厅堂中的角色【柯林】处购买。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火防护",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_8.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6460": {
    "kind": "incantation",
    "itemId": 6460,
    "sourceKind": "shop",
    "summary": "该祷告可以在圆桌厅堂中的角色【柯林】处购买。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：魔力防护",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_7.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6470": {
    "kind": "incantation",
    "itemId": 6470,
    "sourceKind": "map",
    "summary": "该祷告位于天空城中，从 赐福【龙教堂（升降机前）】出发。消灭前方的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黄金雷防护",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_18.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_13_02",
      "x": 106.2,
      "z": -149.1,
      "label": "参考赐福：Forge of the Giants"
    }
  },
  "goods:6480": {
    "kind": "incantation",
    "itemId": 6480,
    "sourceKind": "map",
    "summary": "该祷告位于啜泣半岛【灵庙原野的废墟】旁的大块建筑残骸上。消灭建筑残骸上的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：圣防护",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_10.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_08_02",
      "x": 205.2,
      "z": -163.5,
      "label": "参考赐福：Tombsward"
    }
  },
  "goods:6490": {
    "kind": "incantation",
    "itemId": 6490,
    "sourceKind": "map",
    "summary": "该祷告位于啜泣半岛【灵庙原野的废墟】旁的大块建筑残骸上。消灭建筑残骸上的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：圣防护",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_10.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 88.9,
      "z": 549.1,
      "label": "参考赐福：Haligtree Roots"
    }
  },
  "goods:6500": {
    "kind": "sorcery",
    "itemId": 6500,
    "sourceKind": "enemy",
    "summary": "该魔法位于盖利德【格威的破屋】中。消灭首领【老将欧尼尔】获得金针。将金针交给格威后在赐福休息一次，随后再与格威对话他会让我们将金针交给米莉森。将金针交给角落处的米莉森，在赐福休息一次后与她对话，她会表示自己将要出门旅行。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全魔法收集图文攻略：黑夜女巫烟雾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_42.shtml",
    "verified": true
  },
  "goods:6510": {
    "kind": "incantation",
    "itemId": 6510,
    "sourceKind": "map",
    "summary": "该祷告需要通过【刺客祷告书】获得，首先来到圆桌厅堂从铁匠旁边的楼梯到达下层。在最深处房间里的宝箱中可以找到刺客祷告书。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：刺客步法",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_15.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6520": {
    "kind": "incantation",
    "itemId": 6520,
    "sourceKind": "map",
    "summary": "该祷告位于王城下水道中，从赐福【地底大道旁】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：诱敌幻影",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_13.shtml",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": -147.4,
      "z": -166,
      "label": "参考赐福：Underground Roadside"
    }
  },
  "goods:6530": {
    "kind": "incantation",
    "itemId": 6530,
    "sourceKind": "shop",
    "summary": "将【刺客祷告书】交给祷告老师后购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黑暗",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%91%E6%9A%97",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6600": {
    "kind": "incantation",
    "itemId": 6600,
    "sourceKind": "map",
    "summary": "该祷告位于【飘尸臭的破屋】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黄金树立誓",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_16.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_13_02",
      "x": -402.4,
      "z": 38.1,
      "label": "参考赐福：Road of Iniquity"
    }
  },
  "goods:6700": {
    "kind": "incantation",
    "itemId": 6700,
    "sourceKind": "other",
    "summary": "推进金面具支线，在柯林（记录者）位置2处购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：光环",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%85%89%E7%8E%AF",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6701": {
    "kind": "incantation",
    "itemId": 6701,
    "sourceKind": "map",
    "summary": "该祷告位于圣树【祈祷室】附近。在房间中的宝箱里可以找到该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：化三光环",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_30.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 77.2,
      "z": 432,
      "label": "参考赐福：Prayer Room"
    }
  },
  "goods:6710": {
    "kind": "incantation",
    "itemId": 6710,
    "sourceKind": "map",
    "summary": "该祷告需要通过【黄金律法原本】学习，黄金律法原本位于王城【黄金树大教堂】中。左转沿着树枝前进，在前方的尸体上可以获得黄金律法原本。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：拉达冈的光环",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_31.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6720": {
    "kind": "incantation",
    "itemId": 6720,
    "sourceKind": "map",
    "summary": "该祷告位于【深根底层】，从赐福【大瀑布顶端】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：艾尔登流星",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_27.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -163.9,
      "z": -624.8,
      "label": "参考赐福：Great Waterfall Crest"
    }
  },
  "goods:6730": {
    "kind": "incantation",
    "itemId": 6730,
    "sourceKind": "map",
    "summary": "该祷告需要通过【黄金律法原本】学习，黄金律法原本位于王城【黄金树大教堂】中。左转沿着树枝前进，在前方的尸体上可以获得黄金律法原本。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：回归性原理",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_37.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6740": {
    "kind": "incantation",
    "itemId": 6740,
    "sourceKind": "other",
    "summary": "获取祷告【回归性原理】并记忆后，来到【黄金树大教堂】。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：不变盾牌",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_35.shtml",
    "verified": true
  },
  "goods:6750": {
    "kind": "incantation",
    "itemId": 6750,
    "sourceKind": "enemy",
    "summary": "将刚刚击杀唤声船获得的死根交给野兽祭司。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：纠死圣律",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_32.shtml",
    "verified": true
  },
  "goods:6760": {
    "kind": "incantation",
    "itemId": 6760,
    "sourceKind": "other",
    "summary": "获取两个大卢恩后与百智爵士交谈，向其打听所在地毫无线索的半神。返回圆桌厅堂告诉百智爵士【关于鲜血君王的茧】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：因果性原理",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_36.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "goods:6770": {
    "kind": "incantation",
    "itemId": 6770,
    "sourceKind": "enemy",
    "summary": "将刚刚击杀唤声船获得的死根交给野兽祭司。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：圣律剑刃",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_34.shtml",
    "verified": true
  },
  "goods:6780": {
    "kind": "incantation",
    "itemId": 6780,
    "sourceKind": "map",
    "summary": "该祷告位于祖灵森林【导水桥旁断崖】。消灭导水桥中的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：圣律疗愈",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "goods:6800": {
    "kind": "incantation",
    "itemId": 6800,
    "sourceKind": "other",
    "summary": "在盖利德野兽神殿向古兰格提交2个死根兑换获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：兽石",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%85%BD%E7%9F%B3",
    "verified": true
  },
  "goods:6810": {
    "kind": "incantation",
    "itemId": 6810,
    "sourceKind": "quest",
    "summary": "该祷告位于盖利德【野兽神殿】中。在赐福休息一次后即可恢复正常，将第六个死根交给野兽祭司可以获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：古兰格的岩石",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_72.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_10_02",
      "x": 336.9,
      "z": 399.6,
      "label": "参考赐福：Bestial Sanctum"
    }
  },
  "goods:6820": {
    "kind": "incantation",
    "itemId": 6820,
    "sourceKind": "other",
    "summary": "在盖利德野兽神殿向古兰格提交5个死根兑换获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：兽爪",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E5%85%BD%E7%88%AA",
    "verified": true
  },
  "goods:6830": {
    "kind": "incantation",
    "itemId": 6830,
    "sourceKind": "quest",
    "summary": "该祷告位于盖利德【野兽神殿】中。在赐福休息一次后即可恢复正常，将第八个死根交给野兽祭司可以获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：古兰格的兽爪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_70.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_10_02",
      "x": 336.9,
      "z": 399.6,
      "label": "参考赐福：Bestial Sanctum"
    }
  },
  "goods:6840": {
    "kind": "incantation",
    "itemId": 6840,
    "sourceKind": "quest",
    "summary": "该祷告位于盖利德【野兽神殿】中。将第三个死根交给野兽祭司后可以获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：野兽活力",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_74.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_10_02",
      "x": 336.9,
      "z": 399.6,
      "label": "参考赐福：Bestial Sanctum"
    }
  },
  "goods:6850": {
    "kind": "incantation",
    "itemId": 6850,
    "sourceKind": "map",
    "summary": "该祷告位于盖利德【雷恩魔法师塔】西边的高地上。消灭下方平台中的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：野兽健壮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_73.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_10_02",
      "x": -492.6,
      "z": 154.1,
      "label": "参考赐福：Farum Greatbridge"
    }
  },
  "goods:6900": {
    "kind": "incantation",
    "itemId": 6900,
    "sourceKind": "quest",
    "summary": "该祷告需要通过【龙信仰祷告书】获得，祷告书位于利耶尼亚湖【画家的破屋】南边的小路上。消灭在小路上巡逻的骑士即可获得该祷告书。将祷告书交给柯林获得结缘教堂大乌龟即可学习该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：雷电枪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_38.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6910": {
    "kind": "incantation",
    "itemId": 6910,
    "sourceKind": "map",
    "summary": "该祷告需要通过【古龙祷告书】获得，祷告书位于天空城【渐毁野兽墓（深处）】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：古龙雷击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_42.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6920": {
    "kind": "incantation",
    "itemId": 6920,
    "sourceKind": "enemy",
    "summary": "【啜泣半岛-摩恩坑道】正上方落雷地里击杀粪金龟获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：雷击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%9B%B7%E5%87%BB",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -445.1,
      "z": -140,
      "label": "参考赐福：The Ravine"
    }
  },
  "goods:6921": {
    "kind": "incantation",
    "itemId": 6921,
    "sourceKind": "enemy",
    "summary": "该祷告位于安瑟尔河深处，从赐福【安瑟尔河（下游）】出发向西北前进即可抵达此处。来到此处后消灭首领【诺克史黛拉的龙人士兵】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：冰雷枪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_45.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": -113.8,
      "z": 118.1,
      "label": "参考赐福：Dragonkin Soldier of Nokstella"
    }
  },
  "goods:6930": {
    "kind": "incantation",
    "itemId": 6930,
    "sourceKind": "quest",
    "summary": "该祷告需要通过【龙信仰祷告书】获得，祷告书位于利耶尼亚湖【画家的破屋】南边的小路上。消灭在小路上巡逻的骑士即可获得该祷告书。将祷告书交给柯林获得结缘教堂大乌龟即可学习该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：精准雷击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_40.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6940": {
    "kind": "incantation",
    "itemId": 6940,
    "sourceKind": "map",
    "summary": "该祷告需要通过【古龙祷告书】获得，祷告书位于天空城【渐毁野兽墓（深处）】附近。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：古龙雷枪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_41.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6941": {
    "kind": "incantation",
    "itemId": 6941,
    "sourceKind": "shop",
    "summary": "该祷告需要通过【“死眠少女”菲雅】的支线任务获得，详细流程可以点击此处查看。通过菲雅的梦境消灭【“死龙”弗尔桑克斯】获得死龙的追忆。随后在圆桌厅堂【“解指”恩雅】处使用追忆可以兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：弗尔桑克斯的雷枪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_44.shtml",
    "verified": true
  },
  "goods:6950": {
    "kind": "incantation",
    "itemId": 6950,
    "sourceKind": "enemy",
    "summary": "该祷告位于赐福【城墙旁小径】南边的高地上。在此处会遭遇首领【“古龙”兰斯桑克斯】将其消灭后即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：兰斯桑克斯的刀",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_43.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -36.1,
      "z": -364.5,
      "label": "参考赐福：Rampartside Path"
    }
  },
  "goods:6960": {
    "kind": "incantation",
    "itemId": 6960,
    "sourceKind": "quest",
    "summary": "该祷告需要通过【龙信仰祷告书】获得，祷告书位于利耶尼亚湖【画家的破屋】南边的小路上。消灭在小路上巡逻的骑士即可获得该祷告书。将祷告书交给柯林获得结缘教堂大乌龟即可学习该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：雷武器",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_47.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:6970": {
    "kind": "incantation",
    "itemId": 6970,
    "sourceKind": "enemy",
    "summary": "该祷告位于雪原【准王者的封印监牢】中。在封印监牢中消灭首领【“圆桌骑士”维克】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：维克的龙雷",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_49.shtml",
    "verified": true
  },
  "goods:6971": {
    "kind": "incantation",
    "itemId": 6971,
    "sourceKind": "map",
    "summary": "该祷告位于亚坛高原【唤雷教堂】中。打开教堂角落中的宝箱即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：龙雷庇佑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_48.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "goods:7000": {
    "kind": "incantation",
    "itemId": 7000,
    "sourceKind": "other",
    "summary": "在龙飨教堂或大龙飨教堂用龙心脏兑换",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：龙焰",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BE%99%E7%84%B0",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:7001": {
    "kind": "incantation",
    "itemId": 7001,
    "sourceKind": "shop",
    "summary": "该祷告位于宁姆格福【引导之始】东北边湖中的小岛处。消灭巨龙后返回大龙飨教堂，在教堂中的祭坛处使用龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：亚基尔的火焰",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_89.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "goods:7010": {
    "kind": "incantation",
    "itemId": 7010,
    "sourceKind": "shop",
    "summary": "该祷告位于【沸滚河终点】西南边。在祭坛中可以使用龙心脏兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：熔岩吐息",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_90.shtml",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:7011": {
    "kind": "incantation",
    "itemId": 7011,
    "sourceKind": "shop",
    "summary": "该祷告位于【安身洞窟】外的河流尽头处。在教堂中的祭坛里使用龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：席欧朵利克的熔岩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_91.shtml",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:7020": {
    "kind": "incantation",
    "itemId": 7020,
    "sourceKind": "shop",
    "summary": "大龙飨教堂购买",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：龙冰",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BE%99%E5%86%B0",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "goods:7021": {
    "kind": "incantation",
    "itemId": 7021,
    "sourceKind": "shop",
    "summary": "该祷告位于雪原【结冰湖】东南方向。在教堂中的祭坛里使用龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：玻列琉斯的冰雾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_97.shtml",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:7030": {
    "kind": "incantation",
    "itemId": 7030,
    "sourceKind": "shop",
    "summary": "该祷告位于盖利德南部的【大龙飨教堂】中。在教堂中的祭坛处使用龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：腐败吐息",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_94.shtml",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:7031": {
    "kind": "incantation",
    "itemId": 7031,
    "sourceKind": "shop",
    "summary": "该祷告位于盖利德【大龙飨教堂】西北边。在教堂中的祭坛处使用两个龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：艾格基斯的腐败",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_95.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "goods:7040": {
    "kind": "incantation",
    "itemId": 7040,
    "sourceKind": "shop",
    "summary": "该祷告位于盖利德南部的【大龙飨教堂】中。在教堂中的祭坛处使用龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：辉石吐息",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_92.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "goods:7041": {
    "kind": "incantation",
    "itemId": 7041,
    "sourceKind": "shop",
    "summary": "该祷告位于利耶尼亚湖【魔法学院】西边的小岛处。消灭巨龙后返回大龙飨教堂，在教堂中的祭坛处使用3个龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：史玛拉格的辉石",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_93.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "goods:7050": {
    "kind": "incantation",
    "itemId": 7050,
    "sourceKind": "shop",
    "summary": "消灭龙王后获得追忆。随后在圆桌厅堂【“解指”恩雅】处使用追忆即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：普拉顿桑克斯的凋亡",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_98.shtml",
    "verified": true
  },
  "goods:7060": {
    "kind": "incantation",
    "itemId": 7060,
    "sourceKind": "other",
    "summary": "在龙飨教堂或大龙飨教堂用龙心脏兑换",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：龙爪",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BE%99%E7%88%AA",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:7080": {
    "kind": "incantation",
    "itemId": 7080,
    "sourceKind": "other",
    "summary": "在龙飨教堂或大龙飨教堂用龙心脏兑换",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：龙咬",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BE%99%E5%92%AC",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:7090": {
    "kind": "incantation",
    "itemId": 7090,
    "sourceKind": "shop",
    "summary": "该祷告位于盖利德【法洛斯要塞】前。消灭巨龙后返回大龙飨教堂，在教堂中的祭坛处使用3个龙心脏即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：桂奥尔的咆哮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_101.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "goods:7200": {
    "kind": "incantation",
    "itemId": 7200,
    "sourceKind": "shop",
    "summary": "【米莉森】支线第二阶段后，由【贤者格威】出售",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：虫丝",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%99%AB%E4%B8%9D",
    "verified": true
  },
  "goods:7210": {
    "kind": "incantation",
    "itemId": 7210,
    "sourceKind": "other",
    "summary": "蒙格温王朝王朝灵庙入口前一个房间的洞穴内拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：蝇群",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%9D%87%E7%BE%A4",
    "verified": true
  },
  "goods:7220": {
    "kind": "incantation",
    "itemId": 7220,
    "sourceKind": "enemy",
    "summary": "【啜泣半岛-摩恩城城墙前方】往摩恩城走，路上地图碎片左拐，左手边第二块大石头后面森林里击杀粪金龟获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：毒雾",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%AF%92%E9%9B%BE",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "goods:7230": {
    "kind": "incantation",
    "itemId": 7230,
    "sourceKind": "other",
    "summary": "盖利德瑟利亚结晶坑道出口往艾奥尼亚沼泽方向走，跟随右边金色脚印找到粪金龟，击杀后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：毒刃",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%AF%92%E5%88%83",
    "verified": true,
    "pin": {
      "mapId": "m32_08_00_00",
      "x": 13.1,
      "z": 143,
      "label": "参考赐福：Sellia Crystal Tunnel"
    }
  },
  "goods:7240": {
    "kind": "incantation",
    "itemId": 7240,
    "sourceKind": "shop",
    "summary": "与玛莲妮亚战斗并将其消灭获得【腐败女神的追忆】。随后返回圆桌厅堂在【“解指”恩雅】处使用追忆即可兑换该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：猩红艾奥尼亚",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_82.shtml",
    "verified": true
  },
  "goods:7300": {
    "kind": "incantation",
    "itemId": 7300,
    "sourceKind": "map",
    "summary": "该祷告位于王城地下，从赐福【弃置恶兆的大教堂】出发。宝箱后面的墙壁为机关门，翻滚或者攻击一下就会打开，随后沿着道路前进。在石棺的尸体上可以获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：发狂扩散",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_87.shtml",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": 126.1,
      "z": -63.3,
      "label": "参考赐福：Frenzied Flame Proscription"
    }
  },
  "goods:7310": {
    "kind": "incantation",
    "itemId": 7310,
    "sourceKind": "map",
    "summary": "【啜泣半岛】卡尔洗礼教堂拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：癫火",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E7%99%AB%E7%81%AB",
    "verified": true
  },
  "goods:7311": {
    "kind": "incantation",
    "itemId": 7311,
    "sourceKind": "map",
    "summary": "该祷告位于【耶罗·亚尼斯废墟】中部。在地下室中的宝箱里可以找到该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：难耐癫火",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_84.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -225.7,
      "z": 124.3,
      "label": "参考赐福：Consecrated Snowfield"
    }
  },
  "goods:7320": {
    "kind": "incantation",
    "itemId": 7320,
    "sourceKind": "map",
    "summary": "该祷告位于利耶尼亚湖东北【镇静教堂】南边的树林中。消灭树林中的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：划空癫火",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_85.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -51.7,
      "z": -155,
      "label": "参考赐福：Church of Inhibition"
    }
  },
  "goods:7330": {
    "kind": "incantation",
    "itemId": 7330,
    "sourceKind": "map",
    "summary": "该祷告位于利耶尼亚湖东北【癫火灯塔】中。在癫火灯塔二层的宝箱中可以找到该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：夏玻利利的嘶吼",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_86.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 110.7,
      "z": 64.8,
      "label": "参考赐福：Grand Lift of Dectus"
    }
  },
  "goods:7500": {
    "kind": "incantation",
    "itemId": 7500,
    "sourceKind": "enemy",
    "summary": "该祷告位于宁姆格福【风暴山丘的封印监牢】中。进入封印监牢消灭首领【熔炉骑士】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：熔炉百相之尾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_25.shtml",
    "verified": true
  },
  "goods:7510": {
    "kind": "incantation",
    "itemId": 7510,
    "sourceKind": "map",
    "summary": "该祷告位于史东薇尔城中，从赐福【城墙塔】出发。消灭下方区域中的熔炉骑士即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：熔炉百相之角",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_26.shtml",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -262.3,
      "z": 113,
      "label": "参考赐福：Rampart Tower"
    }
  },
  "goods:7520": {
    "kind": "incantation",
    "itemId": 7520,
    "sourceKind": "enemy",
    "summary": "该祷告位于【“亵渎君王”拉卡德】处。首先来到此处击败亵渎君王拉卡德。返回火山官邸将拉卡德的死讯告知塔妮丝，反复对话直到塔妮丝说出【永别了】。消灭入侵的【塔妮丝的骑士】即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：熔炉百相之喉囊",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_24.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "goods:7530": {
    "kind": "incantation",
    "itemId": 7530,
    "sourceKind": "shop",
    "summary": "【黑剑的追忆】兑换",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：黑剑",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E9%BB%91%E5%89%91",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": 224.9,
      "z": 365.7,
      "label": "参考赐福：Maliketh, the Black Blade"
    }
  },
  "goods:7900": {
    "kind": "incantation",
    "itemId": 7900,
    "sourceKind": "map",
    "summary": "该祷告位于王城【城寨一楼】中。在此处可以见到画家的灵魂，等待灵魂消散后即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：火焰重罪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_62.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": -51.2,
      "z": 202,
      "label": "参考赐福：Windmill Village"
    }
  },
  "goods:7903": {
    "kind": "incantation",
    "itemId": 7903,
    "sourceKind": "map",
    "summary": "该祷告位于天空城中，从 赐福【龙教堂（升降机前）】出发。消灭前方的粪金龟即可获得该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：黄金雷防护",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_18.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": -73.6,
      "z": 498.8,
      "label": "参考赐福：Dragon Temple Lift"
    }
  },
  "goods:2004300": {
    "kind": "sorcery",
    "itemId": 2004300,
    "sourceKind": "quest",
    "summary": "在马努斯大教堂与尤弥尔对话后向他学习",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "goods:2004310": {
    "kind": "sorcery",
    "itemId": 2004310,
    "sourceKind": "map",
    "summary": "恩希斯城内拾取（在有一个法师和随从的屋顶附近，可以跳到捡盾牌的房间顶上）",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true
  },
  "goods:2004320": {
    "kind": "sorcery",
    "itemId": 2004320,
    "sourceKind": "quest",
    "summary": "用蕾菈娜的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true
  },
  "goods:2004500": {
    "kind": "sorcery",
    "itemId": 2004500,
    "sourceKind": "quest",
    "summary": "在利亚指头遗迹吹响吊钟后，回马努斯大教堂与尤弥尔对话后学习",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "goods:2004510": {
    "kind": "sorcery",
    "itemId": 2004510,
    "sourceKind": "quest",
    "summary": "在利亚指头遗迹吹响吊钟后，回马努斯大教堂与尤弥尔对话后学习",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "goods:2004700": {
    "kind": "sorcery",
    "itemId": 2004700,
    "sourceKind": "quest",
    "summary": "用山猪骑士的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true
  },
  "goods:2004710": {
    "kind": "sorcery",
    "itemId": 2004710,
    "sourceKind": "enemy",
    "summary": "击败指岩山丘赐福点右上角的坠星兽物获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true
  },
  "goods:2004900": {
    "kind": "sorcery",
    "itemId": 2004900,
    "sourceKind": "enemy",
    "summary": "击败沉水礼拜堂外面的腐败树灵获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true
  },
  "goods:2004910": {
    "kind": "sorcery",
    "itemId": 2004910,
    "sourceKind": "map",
    "summary": "保藏库六楼拉动拉杆后等转动完毕，跳上独木桥往上走，看到玛丽卡楔石的房间外有小怪对着平台边缘发呆，仔细往下看有可跳的平台，下去后回头拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true
  },
  "goods:2005000": {
    "kind": "sorcery",
    "itemId": 2005000,
    "sourceKind": "map",
    "summary": "从卡罗隐藏墓地赐福点右边绕上高坡，在巨大守墓鸟雕像下面拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -471.6,
      "z": 343,
      "label": "参考赐福：Charo's Hidden Grave"
    }
  },
  "goods:2006200": {
    "kind": "sorcery",
    "itemId": 2006200,
    "sourceKind": "map",
    "summary": "从大洞中段赐福点出发跳过沟壑，不往前走，左侧有位置可以跳下去，继续前进有白色拾取物",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true
  },
  "goods:2006210": {
    "kind": "sorcery",
    "itemId": 2006210,
    "sourceKind": "quest",
    "summary": "用融泥的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true,
    "pin": {
      "mapId": "m22_00_00_00",
      "x": -397.9,
      "z": 12.6,
      "label": "参考赐福：Stone Coffin Fissure"
    }
  },
  "goods:2006300": {
    "kind": "incantation",
    "itemId": 2006300,
    "sourceKind": "quest",
    "summary": "老兵安帕赫支线没有选择帮蕾妲打老兵的话，最终战之后可以在老兵的尸体处捡到",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2006400": {
    "kind": "incantation",
    "itemId": 2006400,
    "sourceKind": "map",
    "summary": "慕斯废墟附近的湖往深处走，尽头的树下有三个调香师守着，在附近拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": -182.6,
      "z": -264,
      "label": "参考赐福：Moorth Ruins"
    }
  },
  "goods:2006650": {
    "kind": "incantation",
    "itemId": 2006650,
    "sourceKind": "enemy",
    "summary": "击败幽影城的黄金河马获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2006660": {
    "kind": "incantation",
    "itemId": 2006660,
    "sourceKind": "map",
    "summary": "劳弗古遗迹（西方）的水池里有风场，解锁后利用风场跳到东方向遗迹顶上，顺着悬崖边的塔往下可以看到一朵大花，边上的拾取物就是祷告",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_11_11_02",
      "x": 33.8,
      "z": 282.6,
      "label": "参考赐福：Rauh Ancient Ruins, East"
    }
  },
  "goods:2006670": {
    "kind": "incantation",
    "itemId": 2006670,
    "sourceKind": "map",
    "summary": "巫者村里的小黄金树下拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2006680": {
    "kind": "incantation",
    "itemId": 2006680,
    "sourceKind": "quest",
    "summary": "用影轮草的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2006690": {
    "kind": "incantation",
    "itemId": 2006690,
    "sourceKind": "map",
    "summary": "捡火焰蛇的地方附近有个洞可以往上到达保藏库（阁楼）赐福点，在阁楼的一处齿轮圆盘上拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m21_01_00_00",
      "x": 217.4,
      "z": 249.6,
      "label": "参考赐福：Storehouse, Loft"
    }
  },
  "goods:2006700": {
    "kind": "incantation",
    "itemId": 2006700,
    "sourceKind": "quest",
    "summary": "用神祇与王的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2006710": {
    "kind": "incantation",
    "itemId": 2006710,
    "sourceKind": "enemy",
    "summary": "从大洞中段出发，经过巨大史莱姆，击败前方的灵体狮子混种获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m22_00_00_00",
      "x": -397.9,
      "z": 12.6,
      "label": "参考赐福：Stone Coffin Fissure"
    }
  },
  "goods:2006800": {
    "kind": "incantation",
    "itemId": 2006800,
    "sourceKind": "enemy",
    "summary": "击败峡谷北方赐福点西北森林里的大红熊鲁格利亚获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_11_11_02",
      "x": -136,
      "z": 387.5,
      "label": "参考赐福：Ravine North"
    }
  },
  "goods:2006900": {
    "kind": "incantation",
    "itemId": 2006900,
    "sourceKind": "quest",
    "summary": "该祷告需要通过【龙信仰祷告书】获得，祷告书位于利耶尼亚湖【画家的破屋】南边的小路上。消灭在小路上巡逻的骑士即可获得该祷告书。将祷告书交给柯林获得结缘教堂大乌龟即可学习该祷告。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全祷告收集图文攻略：雷电枪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_38.shtml",
    "verified": true,
    "pin": {
      "mapId": "m40_01_00_00",
      "x": -42.9,
      "z": 34.6,
      "label": "参考赐福：Scorpion River Catacombs"
    }
  },
  "goods:2006910": {
    "kind": "incantation",
    "itemId": 2006910,
    "sourceKind": "quest",
    "summary": "龙女巫支线：需要在夜晚喂给她休里耶的秘药，之后击杀狂龙贝勒后回去对话获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:2006920": {
    "kind": "incantation",
    "itemId": 2006920,
    "sourceKind": "map",
    "summary": "雾谷地下墓地有一个法师在道路尽头、头顶全是针刺陷阱的房间，从左边第二个躲避处跳下去，探索拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m40_00_00_00",
      "x": -92,
      "z": -28.7,
      "label": "参考赐福：Fog Rift Catacombs"
    }
  },
  "goods:2007000": {
    "kind": "incantation",
    "itemId": 2007000,
    "sourceKind": "quest",
    "summary": "在龙飨大祭坛处用贝勒的心脏兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:2007010": {
    "kind": "incantation",
    "itemId": 2007010,
    "sourceKind": "quest",
    "summary": "在龙飨大祭坛处用贝勒的心脏兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:2007020": {
    "kind": "incantation",
    "itemId": 2007020,
    "sourceKind": "quest",
    "summary": "击败置病村左侧湖中的灵火龙后，在龙飨大祭坛兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_09_02",
      "x": -35.7,
      "z": 288.8,
      "label": "参考赐福：Grand Altar of Dragon Communion"
    }
  },
  "goods:2007200": {
    "kind": "incantation",
    "itemId": 2007200,
    "sourceKind": "quest",
    "summary": "用花蕾圣女的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2007210": {
    "kind": "incantation",
    "itemId": 2007210,
    "sourceKind": "map",
    "summary": "捡神鸟羽毛的那层，左边遗迹里有红色皮皮虾，那个楼梯的背面直接拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2007300": {
    "kind": "incantation",
    "itemId": 2007300,
    "sourceKind": "quest",
    "summary": "用癫火之王的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2007410": {
    "kind": "sorcery",
    "itemId": 2007410,
    "sourceKind": "quest",
    "summary": "在狄欧指头遗迹吹响吊钟后，回马努斯大教堂与尤弥尔对话后学习",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "goods:2007420": {
    "kind": "sorcery",
    "itemId": 2007420,
    "sourceKind": "quest",
    "summary": "完成指头之母尤弥尔支线后，在马努斯大教堂外的墓地拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影魔法获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10249307.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 299.2,
      "z": -79.1,
      "label": "参考赐福：Cathedral of Manus Metyr"
    }
  },
  "goods:2007600": {
    "kind": "incantation",
    "itemId": 2007600,
    "sourceKind": "quest",
    "summary": "击败神兽舞狮之后，带上神兽头部，和角人老妪对话至重复获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m20_00_00_00",
      "x": -104.2,
      "z": 189.3,
      "label": "参考赐福：Belurat, Tower Settlement"
    }
  },
  "goods:2007700": {
    "kind": "incantation",
    "itemId": 2007700,
    "sourceKind": "map",
    "summary": "穆斯废墟底层宝箱拾取（有三只黄衣怪看守）",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": -182.6,
      "z": -264,
      "label": "参考赐福：Moorth Ruins"
    }
  },
  "goods:2007710": {
    "kind": "incantation",
    "itemId": 2007710,
    "sourceKind": "map",
    "summary": "安提斯废墟宝箱内拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:2007720": {
    "kind": "incantation",
    "itemId": 2007720,
    "sourceKind": "map",
    "summary": "第一塔赐福点南边，探索拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m20_01_00_00",
      "x": -124.3,
      "z": -84.5,
      "label": "参考赐福：First Rise"
    }
  },
  "goods:2007730": {
    "kind": "incantation",
    "itemId": 2007730,
    "sourceKind": "enemy",
    "summary": "从古遗迹（大楼梯）赐福点出发，经过射箭巨人，从断桥处跳下去抵达一个庙宇建筑，击败里面的咒死舞狮掉落",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_11_11_02",
      "x": -272.9,
      "z": -90.7,
      "label": "参考赐福：Ancient Ruins, Grand Stairway"
    }
  },
  "goods:2007740": {
    "kind": "incantation",
    "itemId": 2007740,
    "sourceKind": "map",
    "summary": "劳弗古遗迹（西方）赐福点坐电梯上去的那层，水池里拾取（注意附近有神鸟战士）",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m61_11_11_02",
      "x": -431.5,
      "z": 71.3,
      "label": "参考赐福：Church of the Bud, Main Entrance"
    }
  },
  "goods:2007800": {
    "kind": "incantation",
    "itemId": 2007800,
    "sourceKind": "map",
    "summary": "从保藏库（内区）赐福点出发，爬梯子向上，上去后再上楼梯走到尽头拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m21_01_00_00",
      "x": 214.6,
      "z": 249.7,
      "label": "参考赐福：Storehouse, Back Section"
    }
  },
  "goods:2007810": {
    "kind": "incantation",
    "itemId": 2007810,
    "sourceKind": "enemy",
    "summary": "西边城墙开小门骑马过桥，击败桥尾的特殊火焰骑士固定掉落",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true,
    "pin": {
      "mapId": "m21_02_00_00",
      "x": -1.3,
      "z": 260.3,
      "label": "参考赐福：West Rampart"
    }
  },
  "goods:2007820": {
    "kind": "incantation",
    "itemId": 2007820,
    "sourceKind": "quest",
    "summary": "用穿刺者的追忆兑换",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影祷告获取方法汇总",
    "sourceUrl": "https://www.9game.cn/aedfh/10248966.html",
    "verified": true
  },
  "goods:200000": {
    "kind": "spirit-ash",
    "itemId": 200000,
    "sourceKind": "enemy",
    "summary": "该骨灰首先需要通过【菈妮】的支线任务获得，在利耶尼亚湖西北的【菈妮魔法师塔】中触发该支线任务，由于任务流程过于复杂无法在此展开描述，玩家可以点击此处查看详细攻略。消灭首领【“黑刀之首”亚勒托】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“黑刀”狄希",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_57.shtml",
    "verified": true
  },
  "goods:201000": {
    "kind": "spirit-ash",
    "itemId": 201000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于宁姆格福【边境英雄墓地】中，该墓地需要从出生点【漂流洞穴】中进入。在墓地最深处击败首领【腐烂树灵】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“失乡骑士”奥雷格",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_44.shtml",
    "verified": true
  },
  "goods:202000": {
    "kind": "spirit-ash",
    "itemId": 202000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于宁姆格福【蒙流地下墓地】中。消灭首领【守墓斗士】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“失乡骑士”英格威尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_45.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_04_00_00",
      "x": 73.3,
      "z": 53,
      "label": "参考赐福：Murkwater Catacombs"
    }
  },
  "goods:203000": {
    "kind": "spirit-ash",
    "itemId": 203000,
    "sourceKind": "shop",
    "summary": "该骨灰位于利耶尼亚湖【学院正门口】附近。在商人处可以花费2000卢恩购买该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：尖牙小恶魔的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_19.shtml",
    "verified": true
  },
  "goods:204000": {
    "kind": "spirit-ash",
    "itemId": 204000,
    "sourceKind": "quest",
    "summary": "获取该骨灰首先需要来到利耶尼亚湖西南的【白金村】。攻击一下罐子会出现白金村村长，与其交谈获得道具【圣树秘密符节（右）】；与勒缇娜交谈三次，依次选择【展示秘密符节】、【答应她的请求】后，会在第三次对话时获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：白金之子勒缇娜",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_48.shtml",
    "verified": true
  },
  "goods:205000": {
    "kind": "spirit-ash",
    "itemId": 205000,
    "sourceKind": "map",
    "summary": "该骨灰位于王城下水道中，从赐福【地底大道旁】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：流浪民族的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_3.shtml",
    "verified": true,
    "pin": {
      "mapId": "m35_00_00_00",
      "x": -147.4,
      "z": -166,
      "label": "参考赐福：Underground Roadside"
    }
  },
  "goods:206000": {
    "kind": "spirit-ash",
    "itemId": 206000,
    "sourceKind": "map",
    "summary": "该傀儡位于地底，从赐福【“永恒之城”诺克史黛拉】出发。消灭房间中的两名诺克斯修士后打开宝箱即可获得该傀儡。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：黑夜女巫与剑士的傀儡",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_64.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": 29.6,
      "z": 76.5,
      "label": "参考赐福：Nokstella, Eternal City"
    }
  },
  "goods:207000": {
    "kind": "spirit-ash",
    "itemId": 207000,
    "sourceKind": "map",
    "summary": "该骨灰位于永恒之城诺克隆恩中，从赐福【祖灵森林】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：仿身泪滴的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_58.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "goods:208000": {
    "kind": "spirit-ash",
    "itemId": 208000,
    "sourceKind": "map",
    "summary": "该骨灰位于盖利德【瑟利亚隐藏洞窟】中。消灭房间中的三名法师后打开宝箱即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：结晶人的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_11_00_00",
      "x": 140.4,
      "z": 92.3,
      "label": "参考赐福：Sellia Hideaway"
    }
  },
  "goods:209000": {
    "kind": "spirit-ash",
    "itemId": 209000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于【希夫拉河（岸边）】所在区域中。1-6号火焰位于下图所示位置。7-8号火焰位于下图所示位置。消灭首领祖灵后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：祖灵之民的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_30.shtml",
    "verified": true
  },
  "goods:210000": {
    "kind": "spirit-ash",
    "itemId": 210000,
    "sourceKind": "map",
    "summary": "该骨灰位于亚坛高原【丑恶地下墓地】中，进入该墓地需要使用两把石剑钥匙。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：带翼混种的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_8.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_12_00_00",
      "x": -36.1,
      "z": 121.1,
      "label": "参考赐福：Unsightly Catacombs"
    }
  },
  "goods:211000": {
    "kind": "spirit-ash",
    "itemId": 211000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖【卡利亚城寨（后方）】南边。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：白金之子的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_7.shtml",
    "verified": true
  },
  "goods:212000": {
    "kind": "spirit-ash",
    "itemId": 212000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于宁姆格福【水唤村】中。消灭首领【提比亚的唤声船】即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：骸骨民兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_5.shtml",
    "verified": true
  },
  "goods:213000": {
    "kind": "spirit-ash",
    "itemId": 213000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖东边的【画家的破屋】南边。消灭位于此处的提比亚的唤声船即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：骸骨山贼的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_6.shtml",
    "verified": true
  },
  "goods:214000": {
    "kind": "spirit-ash",
    "itemId": 214000,
    "sourceKind": "map",
    "summary": "该骨灰位于圣树之中，从赐福【圣树树冠】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：神谕众使者的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_11.shtml",
    "verified": true
  },
  "goods:215000": {
    "kind": "spirit-ash",
    "itemId": 215000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于盖利德【牢狱洞窟】中。击败首领【发狂斗士】即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：腐烂长生者的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_4.shtml",
    "verified": true,
    "pin": {
      "mapId": "m31_21_00_00",
      "x": -76.4,
      "z": 67.3,
      "label": "参考赐福：Gaol Cave"
    }
  },
  "goods:216000": {
    "kind": "spirit-ash",
    "itemId": 216000,
    "sourceKind": "map",
    "summary": "该骨灰位于火山官邸之中。与塔妮丝交谈后同意加入火山官邸，获得钥匙后打开右手边第一道门。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“堕落调香师”卡尔曼",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_50.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "goods:217000": {
    "kind": "spirit-ash",
    "itemId": 217000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于亚坛高原【丑恶地下墓地】中，进入该墓地需要使用两把石剑钥匙。消灭首领【调香师托莉夏】和【混种战士】即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：调香师托莉夏",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_49.shtml",
    "verified": true
  },
  "goods:218000": {
    "kind": "spirit-ash",
    "itemId": 218000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖西边的【绝路地下墓地】中。消灭幻灵蜗牛和它召唤出的幻影后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：辉石魔法师的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_35.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_03_00_00",
      "x": 16.8,
      "z": -24,
      "label": "参考赐福：Road's End Catacombs"
    }
  },
  "goods:219000": {
    "kind": "spirit-ash",
    "itemId": 219000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于利耶尼亚湖东北边的【黑刀地下墓地】中。消灭首领【墓地影子】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：双贤魔法师的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_36.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_05_00_00",
      "x": -73.1,
      "z": 120.7,
      "label": "参考赐福：Black Knife Catacombs"
    }
  },
  "goods:220000": {
    "kind": "spirit-ash",
    "itemId": 220000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖【断崖下的地下墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：随从的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_23.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_06_00_00",
      "x": 57.6,
      "z": 68.1,
      "label": "参考赐福：Cliffbottom Catacombs"
    }
  },
  "goods:221000": {
    "kind": "spirit-ash",
    "itemId": 221000,
    "sourceKind": "enemy",
    "summary": "盖利德---瑟利亚的封印监牢---击败首领“战场魔法师”犹格后获得（原地坐化了属于是）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战场魔法师犹格",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E5%9C%BA%E9%AD%94%E6%B3%95%E5%B8%88%E7%8A%B9%E6%A0%BC",
    "verified": true
  },
  "goods:222000": {
    "kind": "spirit-ash",
    "itemId": 222000,
    "sourceKind": "quest",
    "summary": "该骨灰位于安瑟尔河区域，从赐福【安瑟尔河主流】出发，我们可以在菈妮的支线任务中来到该赐福处。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：泥人的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_10.shtml",
    "verified": true
  },
  "goods:223000": {
    "kind": "spirit-ash",
    "itemId": 223000,
    "sourceKind": "map",
    "summary": "该骨灰位于圣树之中，从赐福【祈祷室】出发。消灭房间中的尊腐骑士后打开宝箱即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“尊腐骑士”芬雷",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_56.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 77.2,
      "z": 432,
      "label": "参考赐福：Prayer Room"
    }
  },
  "goods:224000": {
    "kind": "spirit-ash",
    "itemId": 224000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于盖利德南边的【盖利德地下墓地】中。消灭首领【墓地影子】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：腐败眷属的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_34.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_15_00_00",
      "x": 76.1,
      "z": 80.9,
      "label": "参考赐福：Caelid Catacombs"
    }
  },
  "goods:225000": {
    "kind": "spirit-ash",
    "itemId": 225000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖魔法学院中，从赐福【杜鹃教堂】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：人偶士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_25.shtml",
    "verified": true
  },
  "goods:226000": {
    "kind": "spirit-ash",
    "itemId": 226000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖魔法学院中，从赐福【杜鹃教堂】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：人偶士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_25.shtml",
    "verified": true,
    "pin": {
      "mapId": "m14_00_00_00",
      "x": 134.2,
      "z": -185,
      "label": "参考赐福：Schoolhouse Classroom"
    }
  },
  "goods:227000": {
    "kind": "spirit-ash",
    "itemId": 227000,
    "sourceKind": "map",
    "summary": "该骨灰位于雪山【巨人山顶地下墓地】中。消灭尽头房间中的归树看门犬后打开宝箱即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：火焰习武修士的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_29.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_18_00_00",
      "x": 9.1,
      "z": 97.8,
      "label": "参考赐福：Giants' Mountaintop Catacombs"
    }
  },
  "goods:228000": {
    "kind": "spirit-ash",
    "itemId": 228000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于【通往圣树的密道】中，需要使用秘密符节并通过洛德大升降机才能够到达此处。消灭首领【离群仿身泪滴】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：黑焰习武修士亚蒙",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_52.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_20_00_00",
      "x": -104.9,
      "z": -139.2,
      "label": "参考赐福：Hidden Path to the Haligtree"
    }
  },
  "goods:229000": {
    "kind": "spirit-ash",
    "itemId": 229000,
    "sourceKind": "map",
    "summary": "该骨灰位于火山官邸之中，从赐福【艾格蕾教堂】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：蛇人的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_32.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 93.7,
      "z": -116.1,
      "label": "参考赐福：Rykard, Lord of Blasphemy"
    }
  },
  "goods:230000": {
    "kind": "spirit-ash",
    "itemId": 230000,
    "sourceKind": "map",
    "summary": "该骨灰位于天空城中，从赐福【龙卷旁露台】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：亚兹拉的兽人的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_31.shtml",
    "verified": true,
    "pin": {
      "mapId": "m13_00_00_00",
      "x": -75.4,
      "z": 404.7,
      "label": "参考赐福：Dragon Temple"
    }
  },
  "goods:231000": {
    "kind": "spirit-ash",
    "itemId": 231000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于利耶尼亚湖【断崖下的地下墓地】中。消灭首领【归树看门犬】即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：凯丹佣兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_27.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_06_00_00",
      "x": 57.6,
      "z": 68.1,
      "label": "参考赐福：Cliffbottom Catacombs"
    }
  },
  "goods:232000": {
    "kind": "spirit-ash",
    "itemId": 232000,
    "sourceKind": "other",
    "summary": "该赐福可以在游戏初级获得，首先来到赐福【亚基尔湖北方】。在赐福休息与梅琳娜交谈，同意她的请求后获得道具【灵马哨笛】。与坐在墙壁废墟上的魔女菈妮交谈即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：离群野狼的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_12.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 82.6,
      "z": -303,
      "label": "参考赐福：Church of Elleh"
    }
  },
  "goods:233000": {
    "kind": "spirit-ash",
    "itemId": 233000,
    "sourceKind": "map",
    "summary": "该骨灰位于亚坛高原【西边风车牧场】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：大老鼠的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_14.shtml",
    "verified": true
  },
  "goods:234000": {
    "kind": "spirit-ash",
    "itemId": 234000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于啜泣半岛【穿刺地下墓地】。最后来到首领房间消灭【归树看门犬】即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：亚人集团的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_9.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_01_00_00",
      "x": -46.9,
      "z": -62,
      "label": "参考赐福：Impaler's Catacombs"
    }
  },
  "goods:235000": {
    "kind": "spirit-ash",
    "itemId": 235000,
    "sourceKind": "map",
    "summary": "该骨灰位于盖利德【瑟利亚镇（楼梯下方）】北边。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：腐败野狗的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_13.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -28.5,
      "z": 352.3,
      "label": "参考赐福：Sellia Under-Stair"
    }
  },
  "goods:236000": {
    "kind": "spirit-ash",
    "itemId": 236000,
    "sourceKind": "quest",
    "summary": "该骨灰位于宁姆格福【风暴山丘的破屋】中。与破屋中的角色【德罗莉卡】交谈，第三次对话后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：灵魂水母的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_17.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": -111.2,
      "z": 145,
      "label": "参考赐福：Stormhill Shack"
    }
  },
  "goods:237000": {
    "kind": "spirit-ash",
    "itemId": 237000,
    "sourceKind": "other",
    "summary": "在史东薇尔城获取画作《预言》后，到啜泣半岛巡礼教堂附近右侧山崖处拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战鹰的骨灰",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E9%B9%B0%E7%9A%84%E9%AA%A8%E7%81%B0",
    "verified": true,
    "pin": {
      "mapId": "m60_10_08_02",
      "x": 273.3,
      "z": 240.1,
      "label": "参考赐福：Church of Pilgrimage"
    }
  },
  "goods:238000": {
    "kind": "spirit-ash",
    "itemId": 238000,
    "sourceKind": "map",
    "summary": "获取该骨灰首先需要来到利耶尼亚湖东侧的【四钟楼】处。来到出生点二楼后打开宝箱即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：风暴鹰汀涅",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_43.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_11_02",
      "x": -64.6,
      "z": 282,
      "label": "参考赐福：The Four Belfries"
    }
  },
  "goods:239000": {
    "kind": "spirit-ash",
    "itemId": 239000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于火山【格密尔英雄墓地】中。消灭首领【英雄的红狼】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“猎犬骑士”弗罗",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_46.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_09_00_00",
      "x": 98.2,
      "z": 14.4,
      "label": "参考赐福：Gelmir Hero's Grave"
    }
  },
  "goods:240000": {
    "kind": "spirit-ash",
    "itemId": 240000,
    "sourceKind": "map",
    "summary": "该骨灰位于宁姆格福【风暴根脚的地下墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：徘徊权贵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_02_00_00",
      "x": 32.8,
      "z": 5.8,
      "label": "参考赐福：Stormfoot Catacombs"
    }
  },
  "goods:241000": {
    "kind": "spirit-ash",
    "itemId": 241000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于宁姆格福【风暴根脚的地下墓地】中。随后返回墓地入口消灭首领【归树看门犬】即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：权贵魔法师的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_2.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_02_00_00",
      "x": 32.8,
      "z": 5.8,
      "label": "参考赐福：Stormfoot Catacombs"
    }
  },
  "goods:242000": {
    "kind": "spirit-ash",
    "itemId": 242000,
    "sourceKind": "map",
    "summary": "该骨灰位于王城北边【亚雷萨英雄墓地】",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：恶兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_24.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "goods:243000": {
    "kind": "spirit-ash",
    "itemId": 243000,
    "sourceKind": "enemy",
    "summary": "消灭俩只【归树看门犬】首领后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：发狂南瓜头士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_28.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_14_00_00",
      "x": -54.5,
      "z": 67.6,
      "label": "参考赐福：Minor Erdtree Catacombs"
    }
  },
  "goods:244000": {
    "kind": "spirit-ash",
    "itemId": 244000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖【学院门前镇】东北边。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：陆生海鞘的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_16.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_11_02",
      "x": -158.1,
      "z": -481.8,
      "label": "参考赐福：Academy Gate Town"
    }
  },
  "goods:245000": {
    "kind": "spirit-ash",
    "itemId": 245000,
    "sourceKind": "map",
    "summary": "该骨灰位于盖利德【盖利德地下墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：小米兰达的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_18.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_15_00_00",
      "x": 76.1,
      "z": 80.9,
      "label": "参考赐福：Caelid Catacombs"
    }
  },
  "goods:246000": {
    "kind": "spirit-ash",
    "itemId": 246000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于王城北部的【亚雷萨副墓地】中。进入墓地后沿着通道一直前进，打开第1个宝箱触发传送陷阱。打开第2个宝箱再次触发传送陷阱。打开第3个宝箱触发传送陷阱。在房间中打开第4个宝箱触发传送陷阱，随后沿着通道直走即可来到首领房间。消灭首领【守墓斗士】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：特攻先锋群的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_20.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_13_00_00",
      "x": 86.2,
      "z": 34.7,
      "label": "参考赐福：Auriza Side Tomb"
    }
  },
  "goods:247000": {
    "kind": "spirit-ash",
    "itemId": 247000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于王城之中，最近的赐福是【禁域】，如果未进入学院则需要从赐福【大道旁露台】出发向禁域前进。在神授塔上会遭遇首领【恶兆孪生子】，将其全部消灭后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：恶兆猎人罗洛",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_51.shtml",
    "verified": true,
    "pin": {
      "mapId": "m34_14_00_00",
      "x": 625,
      "z": -550,
      "label": "参考赐福：Divine Tower of East Altus"
    }
  },
  "goods:248000": {
    "kind": "spirit-ash",
    "itemId": 248000,
    "sourceKind": "map",
    "summary": "该骨灰位于地下区域。从赐福【“永恒之城”，诺克隆恩】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：大盾士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_22.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "goods:249000": {
    "kind": "spirit-ash",
    "itemId": 249000,
    "sourceKind": "map",
    "summary": "该骨灰位于安瑟尔河区域，从赐福【“永恒之城”诺克史黛拉】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：操弓士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_21.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_01_00_00",
      "x": 29.6,
      "z": 76.5,
      "label": "参考赐福：Nokstella, Eternal City"
    }
  },
  "goods:250000": {
    "kind": "spirit-ash",
    "itemId": 250000,
    "sourceKind": "map",
    "summary": "宁姆格福-风暴山丘的破屋赐福点出发，附近水母聚集的墓地处拾取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：葛瑞克士兵的骨灰",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E8%91%9B%E7%91%9E%E5%85%8B%E5%A3%AB%E5%85%B5%E7%9A%84%E9%AA%A8%E7%81%B0",
    "verified": true
  },
  "goods:251000": {
    "kind": "spirit-ash",
    "itemId": 251000,
    "sourceKind": "map",
    "summary": "该骨灰位于利耶尼亚湖西边的【绝路地下墓地】中。打开房间中的宝箱即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：雷亚卢卡利亚士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_38.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_03_00_00",
      "x": 16.8,
      "z": -24,
      "label": "参考赐福：Road's End Catacombs"
    }
  },
  "goods:252000": {
    "kind": "spirit-ash",
    "itemId": 252000,
    "sourceKind": "map",
    "summary": "该骨灰位于亚坛高原【尊贵者的英雄墓地】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：罗德尔士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_39.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_08_00_00",
      "x": 26,
      "z": -12.5,
      "label": "参考赐福：Sainted Hero's Grave"
    }
  },
  "goods:253000": {
    "kind": "spirit-ash",
    "itemId": 253000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于盖利德【英灵地下墓地】中，该墓地需要我们先消灭首领【碎星拉塔恩】后才能进入。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：拉塔恩士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_40.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_16_00_00",
      "x": 37.6,
      "z": -109.6,
      "label": "参考赐福：War-Dead Catacombs"
    }
  },
  "goods:254000": {
    "kind": "spirit-ash",
    "itemId": 254000,
    "sourceKind": "map",
    "summary": "该骨灰位于深根底层的下图所示位置。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：灵庙士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_42.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -689.7,
      "z": -409.8,
      "label": "参考赐福：The Nameless Eternal City"
    }
  },
  "goods:255000": {
    "kind": "spirit-ash",
    "itemId": 255000,
    "sourceKind": "map",
    "summary": "该骨灰位于圣树中，从赐福【祈祷室】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：圣树士兵的骨灰",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_41.shtml",
    "verified": true,
    "pin": {
      "mapId": "m15_00_00_00",
      "x": 77.2,
      "z": 432,
      "label": "参考赐福：Prayer Room"
    }
  },
  "goods:256000": {
    "kind": "spirit-ash",
    "itemId": 256000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于亚坛高原【尊贵者的英雄墓地】中。消灭首领【萨米尔的古英雄】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“古龙骑士”克里斯托福",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_53.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_08_00_00",
      "x": 26,
      "z": -12.5,
      "label": "参考赐福：Sainted Hero's Grave"
    }
  },
  "goods:257000": {
    "kind": "spirit-ash",
    "itemId": 257000,
    "sourceKind": "enemy",
    "summary": "该骨灰位于盖利德【英灵地下墓地】中，该墓地需要我们先消灭首领【碎星拉塔恩】后才能进入。消灭首领【腐败树灵】后即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“红狮子骑士”奥加",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_54.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_16_00_00",
      "x": 37.6,
      "z": -109.6,
      "label": "参考赐福：War-Dead Catacombs"
    }
  },
  "goods:258000": {
    "kind": "spirit-ash",
    "itemId": 258000,
    "sourceKind": "enemy",
    "summary": "消灭首领【墓地影子】即可获得该骨灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“无头骑士”露缇尔",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_55.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_00_00_00",
      "x": -95.7,
      "z": 88,
      "label": "参考赐福：Tombsward Catacombs"
    }
  },
  "goods:259000": {
    "kind": "spirit-ash",
    "itemId": 259000,
    "sourceKind": "shop",
    "summary": "获取该傀儡需要在触发菈妮的支线任务后，来到利耶尼亚湖西北的【塞尔维斯魔法师塔】。塞尔维斯表示要我们将一瓶药给涅斐丽·露喝下，答应他后获得道具【塞尔维斯的药水】。回到圆桌厅堂后从铁匠旁边的楼梯来到下一层找到涅斐丽，与其对话后她表示想要静一静。随后与塞尔维斯交谈，询问关于地下室，随后可以从塞尔维斯处获得一个普通傀儡。使用普通傀儡战斗几次后即可使用星光碎片在塞尔维斯处购买其他的两个傀儡。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：涅斐丽·露的傀儡",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_62.shtml",
    "verified": true
  },
  "goods:260000": {
    "kind": "spirit-ash",
    "itemId": 260000,
    "sourceKind": "shop",
    "summary": "获取该傀儡需要在触发菈妮的支线任务后，来到利耶尼亚湖西北的【塞尔维斯魔法师塔】。塞尔维斯表示要我们将一瓶药给涅斐丽·露喝下，答应他后获得道具【塞尔维斯的药水】。当玩家角色抵达王城，并获得一个【温床的诅咒】后，回到圆桌厅堂与孪生老妪旁边房间中的食粪者交谈获得【下水道监牢钥匙】。使用获得傀儡战斗几次后返回塞尔维斯处，即可使用5个星光碎片购买食粪者傀儡。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：食粪者的傀儡",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_63.shtml",
    "verified": true
  },
  "goods:261000": {
    "kind": "spirit-ash",
    "itemId": 261000,
    "sourceKind": "shop",
    "summary": "获取该傀儡需要在触发菈妮的支线任务后，来到利耶尼亚湖西北的【塞尔维斯魔法师塔】。塞尔维斯表示要我们将一瓶药给涅斐丽·露喝下，答应他后获得道具【塞尔维斯的药水】。使用塞尔维斯的药水，交给涅斐丽、百智爵士和食粪者均可完成任务。随后即可在塞尔维斯处获得该傀儡。使用获得傀儡战斗几次后即可在塞尔维斯处通过星光碎片兑换其他傀儡。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：指头女巫瑟萝莉娜的傀儡",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_59.shtml",
    "verified": true
  },
  "goods:262000": {
    "kind": "spirit-ash",
    "itemId": 262000,
    "sourceKind": "shop",
    "summary": "获取该傀儡需要在触发菈妮的支线任务后，来到利耶尼亚湖西北的【塞尔维斯魔法师塔】。塞尔维斯表示要我们将一瓶药给涅斐丽·露喝下，答应他后获得道具【塞尔维斯的药水】。使用塞尔维斯的药水，交给涅斐丽、百智爵士和食粪者均可完成任务。随后即可在塞尔维斯处获得该傀儡。使用获得傀儡战斗几次后即可在塞尔维斯处通过星光碎片兑换其他傀儡。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：“深眠之箭”朵罗雷丝的傀儡",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_61.shtml",
    "verified": true
  },
  "goods:263000": {
    "kind": "spirit-ash",
    "itemId": 263000,
    "sourceKind": "shop",
    "summary": "获取该傀儡需要在触发菈妮的支线任务后，来到利耶尼亚湖西北的【塞尔维斯魔法师塔】。塞尔维斯表示要我们将一瓶药给涅斐丽·露喝下，答应他后获得道具【塞尔维斯的药水】。使用塞尔维斯的药水，交给涅斐丽、百智爵士和食粪者均可完成任务。随后即可在塞尔维斯处获得该傀儡。使用获得傀儡战斗几次后即可在塞尔维斯处通过星光碎片兑换其他傀儡。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全骨灰收集图文攻略：壶男的傀儡",
    "sourceUrl": "https://www.gamersky.com/handbook/202207/1502257_60.shtml",
    "verified": true
  },
  "goods:2200000": {
    "kind": "spirit-ash",
    "itemId": 2200000,
    "sourceKind": "enemy",
    "summary": "击败波尼监牢的首领获得",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m41_01_00_00",
      "x": -72.5,
      "z": -21.9,
      "label": "参考赐福：Bonny Gaol"
    }
  },
  "goods:2201000": {
    "kind": "spirit-ash",
    "itemId": 2201000,
    "sourceKind": "enemy",
    "summary": "河尾洞窟首领奖励",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m43_00_00_00",
      "x": -84.9,
      "z": 144.7,
      "label": "参考赐福：Rivermouth Cave"
    }
  },
  "goods:2202000": {
    "kind": "spirit-ash",
    "itemId": 2202000,
    "sourceKind": "map",
    "summary": "从卡罗隐藏墓地赐福点过湖之后往上坡方向走，坐柳条人后方的气流上去，在墓碑处拾取",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2203000": {
    "kind": "spirit-ash",
    "itemId": 2203000,
    "sourceKind": "map",
    "summary": "保藏库（阁楼）的一处升降机顶部拾取",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2204000": {
    "kind": "spirit-ash",
    "itemId": 2204000,
    "sourceKind": "map",
    "summary": "从高架桥的小塔赐福点出来，南方向的电梯下去后从血怪洞出来，然后往西走进遗迹，右手边的房间有蝎子吊在顶上，它下方的拾取物就是骨灰",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2205000": {
    "kind": "spirit-ash",
    "itemId": 2205000,
    "sourceKind": "map",
    "summary": "从螺旋塔出发往东下楼梯然后左拐继续下楼梯，进小房间拾取",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m20_01_00_00",
      "x": -297.2,
      "z": -83.1,
      "label": "参考赐福：Spiral Rise"
    }
  },
  "goods:2206000": {
    "kind": "spirit-ash",
    "itemId": 2206000,
    "sourceKind": "enemy",
    "summary": "击败贝瑞特监牢的首领亚人剑士后获得",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m41_00_00_00",
      "x": -153.8,
      "z": -73.1,
      "label": "参考赐福：Belurat Gaol"
    }
  },
  "goods:2207000": {
    "kind": "spirit-ash",
    "itemId": 2207000,
    "sourceKind": "map",
    "summary": "惩罚要塞正门进入后左侧的洞跳下去，通过通道在悬崖边的墓碑处拾取",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_10_02",
      "x": -76.8,
      "z": 340.2,
      "label": "参考赐福：Fort of Reprimand"
    }
  },
  "goods:2208000": {
    "kind": "spirit-ash",
    "itemId": 2208000,
    "sourceKind": "map",
    "summary": "雾谷地下墓地里黑骑士守着大朵墓地铃兰的地方，在边缘处引针刺陷阱下来，跳上去可以看到前方的一个通道，进去拾取",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2209000": {
    "kind": "spirit-ash",
    "itemId": 2209000,
    "sourceKind": "enemy",
    "summary": "蝎河地下墓地有个黑骑士和两个士兵守着一个棺材，头顶有针刺陷阱，击败后获得",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2210000": {
    "kind": "spirit-ash",
    "itemId": 2210000,
    "sourceKind": "map",
    "summary": "驱暗地下墓地第三层遇到的超大号「豌豆射手」的后面（需要先打开第三个灯光开关），跳下去到房间里开宝箱",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m40_02_00_00",
      "x": -40,
      "z": 146.2,
      "label": "参考赐福：Darklight Catacombs"
    }
  },
  "goods:2211000": {
    "kind": "spirit-ash",
    "itemId": 2211000,
    "sourceKind": "map",
    "summary": "苍蝇村拾取",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2212000": {
    "kind": "spirit-ash",
    "itemId": 2212000,
    "sourceKind": "map",
    "summary": "泰乌尔锻造遗迹调查祭坛获得",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m42_03_00_00",
      "x": -12.7,
      "z": -80.9,
      "label": "参考赐福：Taylew's Ruined Forge"
    }
  },
  "goods:2213000": {
    "kind": "spirit-ash",
    "itemId": 2213000,
    "sourceKind": "map",
    "summary": "神殿镇废墟赐福点北面有个风场，利用风场跳到上面的平台（不是宝箱那个建筑，是边上的悬崖），然后沿路前进开宝箱",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2214000": {
    "kind": "spirit-ash",
    "itemId": 2214000,
    "sourceKind": "map",
    "summary": "螺旋塔沿楼梯往上，从窗口跳到屋顶区，往西方向可以看到另一个楼梯，再往上走两层，往南从屋顶跳到一处阳台，里面有梯子往下，下去后在房间里拾取",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2215000": {
    "kind": "spirit-ash",
    "itemId": 2215000,
    "sourceKind": "quest",
    "summary": "龙女巫支线：需要在夜晚喂给她休里耶的秘药，之后击杀狂龙贝勒后回去对话告诉她真相获得",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2217000": {
    "kind": "spirit-ash",
    "itemId": 2217000,
    "sourceKind": "map",
    "summary": "指岩山丘右边的地区有个洞可以往下跳，进入山洞中间拾取骨灰（小心从地面钻出的大手）",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_12_02",
      "x": 8.5,
      "z": -465.3,
      "label": "参考赐福：Hinterland"
    }
  },
  "goods:2218000": {
    "kind": "spirit-ash",
    "itemId": 2218000,
    "sourceKind": "quest",
    "summary": "在抵达教区教堂的祈祷厅后，与昆兰交谈并交付赐福覆眼膜获得",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2219000": {
    "kind": "spirit-ash",
    "itemId": 2219000,
    "sourceKind": "quest",
    "summary": "在玛努斯教堂与约兰交谈并交付赐福覆眼膜获得",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "goods:2220000": {
    "kind": "spirit-ash",
    "itemId": 2220000,
    "sourceKind": "quest",
    "summary": "巫者村往下跳到拉巴斯魔法师塔顶，调查傀儡，将「黑夜剑士」约兰的骨灰转变成该骨灰（也可以再交互变回去）",
    "details": "",
    "sourceTitle": "游侠网《艾尔登法环》黄金树幽影骨灰获取方法汇总",
    "sourceUrl": "https://3g.ali213.net/gl/html/1438875.html",
    "verified": true
  },
  "ash-of-war:10000": {
    "kind": "ash-of-war",
    "itemId": 10000,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德西侧的【盖尔要塞】中。消灭要塞中的狮子即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-狮子斩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_4.shtml",
    "verified": true
  },
  "ash-of-war:10100": {
    "kind": "ash-of-war",
    "itemId": 10100,
    "sourceKind": "shop",
    "summary": "在习战者的破屋向角色贝纳尔购买（花费1000卢恩）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：贯穿",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E8%B4%AF%E7%A9%BF",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:10200": {
    "kind": "ash-of-war",
    "itemId": 10200,
    "sourceKind": "quest",
    "summary": "“血指猎人”尤拉支线---玛利卡第三教堂---和濒死的尤拉对话，获得长牙---卸下上面的战灰获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：突刺",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%AA%81%E5%88%BA",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "ash-of-war:10300": {
    "kind": "ash-of-war",
    "itemId": 10300,
    "sourceKind": "shop",
    "summary": "该战灰位于宁姆格福【习战者的破屋】中。在贝纳尔处花费1200卢恩购买即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：锋利-回旋斩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_15.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:10500": {
    "kind": "ash-of-war",
    "itemId": 10500,
    "sourceKind": "map",
    "summary": "在学院解指老妪所在的桥下、湖中坠落遗迹篝火北方的桥下，击杀悬挂的粪金龟获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：突击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%AA%81%E5%87%BB",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": -503.9,
      "z": 522.8,
      "label": "参考赐福：Fallen Ruins of the Lake"
    }
  },
  "ash-of-war:10600": {
    "kind": "ash-of-war",
    "itemId": 10600,
    "sourceKind": "shop",
    "summary": "该战灰位于宁姆格福【习战者的破屋】中。在【贝纳尔】处花费1500卢恩购买即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-箭步（上砍）",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:10700": {
    "kind": "ash-of-war",
    "itemId": 10700,
    "sourceKind": "map",
    "summary": "该战灰位于宁姆格福【艾雷教堂】西北的海滩上。在海滩可以找到一个隐身的粪金龟，将其消灭后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-箭步（回旋斩）",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_2.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 115.2,
      "z": -438.5,
      "label": "参考赐福：The First Step"
    }
  },
  "ash-of-war:10800": {
    "kind": "ash-of-war",
    "itemId": 10800,
    "sourceKind": "map",
    "summary": "该战灰位于蒙格温王朝【通往王朝的崖上道路】北部。消灭山洞中的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：血-鲜血征收",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_71.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_05_00_00",
      "x": 1899.1,
      "z": 1115.7,
      "label": "参考赐福：Palace Approach Ledge-Road"
    }
  },
  "ash-of-war:10900": {
    "kind": "ash-of-war",
    "itemId": 10900,
    "sourceKind": "enemy",
    "summary": "亚基尔湖北方桥头黑夜骑兵掉落",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：连击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E8%BF%9E%E5%87%BB",
    "verified": true,
    "pin": {
      "mapId": "m32_01_00_00",
      "x": 110.8,
      "z": 16.9,
      "label": "参考赐福：Limgrave Tunnels"
    }
  },
  "ash-of-war:11000": {
    "kind": "ash-of-war",
    "itemId": 11000,
    "sourceKind": "other",
    "summary": "从风暴山丘的破屋篝火向桥北方向走，击杀粪金龟获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：盲击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%9B%B2%E5%87%BB",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": 36.4,
      "z": 5,
      "label": "参考赐福：Castleward Tunnel"
    }
  },
  "ash-of-war:11100": {
    "kind": "ash-of-war",
    "itemId": 11100,
    "sourceKind": "enemy",
    "summary": "该战灰可以通过摩恩城的支线任务获得，首先来到啜泣半岛赐福【献祭大桥】。随后来到摩恩城最深处击败狮子混种。来到位于利耶尼亚湖西侧的【复仇者的破屋】。在破屋处会遭遇摩恩城主作为红灵入侵，将其消灭后可以获得武器【失乡骑士戟】，在该武器上可以获得此战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-回旋击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_28.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_11_02",
      "x": -110.6,
      "z": -364,
      "label": "参考赐福：Revenger's Shack"
    }
  },
  "ash-of-war:11200": {
    "kind": "ash-of-war",
    "itemId": 11200,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德【魔法镇瑟利亚】中。消灭瑟利亚镇南部灯塔旁边树枝上的粪金龟后即可获得该战灰，该粪金龟会瞬移，建议使用远程攻击将其消灭。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：锋利-二连斩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_19.shtml",
    "verified": true
  },
  "ash-of-war:11300": {
    "kind": "ash-of-war",
    "itemId": 11300,
    "sourceKind": "map",
    "summary": "该战灰位于雪原【降雪棱线路】南部。来到此处后消灭挂在树上的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：焰术-主教冲锋",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_51.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_13_02",
      "x": -437.7,
      "z": 194.8,
      "label": "参考赐福：Giants' Gravepost"
    }
  },
  "ash-of-war:11400": {
    "kind": "ash-of-war",
    "itemId": 11400,
    "sourceKind": "enemy",
    "summary": "击杀亚基尔湖南方螃蟹前的粪金龟",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：居合",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%B1%85%E5%90%88",
    "verified": true
  },
  "ash-of-war:11500": {
    "kind": "ash-of-war",
    "itemId": 11500,
    "sourceKind": "map",
    "summary": "该战灰位于希芙拉河【信仰者森林】北边的草地上。消灭瀑布边草地上的粪金龟后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-准备架式",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_26.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_02_00_00",
      "x": 1437.5,
      "z": 1519.2,
      "label": "参考赐福：Worshippers' Woods"
    }
  },
  "ash-of-war:11600": {
    "kind": "ash-of-war",
    "itemId": 11600,
    "sourceKind": "map",
    "summary": "该战灰位于利耶尼亚湖【彼鲁姆教堂】南部的下图所示位置。在夜晚来到此处会遭遇一名黑夜骑兵，将其消灭后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-狩猎巨人",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_29.shtml",
    "verified": true
  },
  "ash-of-war:11800": {
    "kind": "ash-of-war",
    "itemId": 11800,
    "sourceKind": "enemy",
    "summary": "该战灰位于卡利亚城寨【王室赏月地】。消灭首领【禁卫骑士罗蕾塔】即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：魔力-罗蕾塔的斩击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_43.shtml",
    "verified": true
  },
  "ash-of-war:11900": {
    "kind": "ash-of-war",
    "itemId": 11900,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德【盖利德大道南方】和【艾奥尼亚沼泽（南岸）】两个赐福之间的道路。在夜晚来到此处能够见到一名黑夜骑兵，将其消灭后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：毒-双吻毒蛾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_68.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -345.5,
      "z": -284.3,
      "label": "参考赐福：Cathedral of Dragon Communion"
    }
  },
  "ash-of-war:12000": {
    "kind": "ash-of-war",
    "itemId": 12000,
    "sourceKind": "shop",
    "summary": "在罗杰尔处花费【1000】卢恩购买即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：魔力-转啊转",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_42.shtml",
    "verified": true
  },
  "ash-of-war:12200": {
    "kind": "ash-of-war",
    "itemId": 12200,
    "sourceKind": "map",
    "summary": "该战灰位于史东薇尔城赐福【城墙塔】附近。来到下方后消灭草丛中的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-风暴袭击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_31.shtml",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -262.3,
      "z": 113,
      "label": "参考赐福：Rampart Tower"
    }
  },
  "ash-of-war:12300": {
    "kind": "ash-of-war",
    "itemId": 12300,
    "sourceKind": "map",
    "summary": "该战灰位于史东薇尔城【深处小房间】附近。消灭道路中央的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-唤起风暴",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_32.shtml",
    "verified": true,
    "pin": {
      "mapId": "m10_00_00_00",
      "x": -189.7,
      "z": 315.1,
      "label": "参考赐福：Secluded Cell"
    }
  },
  "ash-of-war:12400": {
    "kind": "ash-of-war",
    "itemId": 12400,
    "sourceKind": "enemy",
    "summary": "利耶尼亚---绝路地下墓地---门外附近的粪金龟---击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：剑舞",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%89%91%E8%88%9E",
    "verified": true,
    "pin": {
      "mapId": "m30_03_00_00",
      "x": 16.8,
      "z": -24,
      "label": "参考赐福：Road's End Catacombs"
    }
  },
  "ash-of-war:20000": {
    "kind": "ash-of-war",
    "itemId": 20000,
    "sourceKind": "map",
    "summary": "该魔法位于宁姆格福【亚基尔湖南方】东边的高地上。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：辉剑圆阵",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_25.shtml",
    "verified": true
  },
  "ash-of-war:20100": {
    "kind": "ash-of-war",
    "itemId": 20100,
    "sourceKind": "map",
    "summary": "该战灰位于宁姆格福【玛莉卡第三教堂】北部。消灭教堂北部上升气流边的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神圣-神圣刀刃",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_56.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_09_02",
      "x": 35.3,
      "z": 200.6,
      "label": "参考赐福：Third Church of Marika"
    }
  },
  "ash-of-war:20200": {
    "kind": "ash-of-war",
    "itemId": 20200,
    "sourceKind": "enemy",
    "summary": "利耶尼亚---“门前镇大桥”赐福点---东南方向林间道路上---夜晚首领黑夜骑兵（持戟）击败获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：冰枪",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%86%B0%E6%9E%AA",
    "verified": true,
    "pin": {
      "mapId": "m60_09_10_02",
      "x": 376.4,
      "z": 87.8,
      "label": "参考赐福：Liurnia Highway North"
    }
  },
  "ash-of-war:20300": {
    "kind": "ash-of-war",
    "itemId": 20300,
    "sourceKind": "shop",
    "summary": "该魔法位于宁姆格福【驿站街遗迹的地下室】。在地下室中的角色【瑟濂】处可以花费卢恩获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：辉石魔砾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155.shtml",
    "verified": true
  },
  "ash-of-war:20400": {
    "kind": "ash-of-war",
    "itemId": 20400,
    "sourceKind": "map",
    "summary": "该战灰位于宁姆格福东南角的【海德要塞】中。消灭要塞顶部的骑士即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：血-鲜血斩击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_70.shtml",
    "verified": true
  },
  "ash-of-war:20500": {
    "kind": "ash-of-war",
    "itemId": 20500,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德赐福【盖利德大道北方（偏离大道后）】旁边。消灭赐福北边岩石上的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神秘-夺命拳",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_77.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -488.2,
      "z": 150.2,
      "label": "参考赐福：Astray from Caelid Highway North"
    }
  },
  "ash-of-war:20700": {
    "kind": "ash-of-war",
    "itemId": 20700,
    "sourceKind": "shop",
    "summary": "该战灰位于格密尔火山【火山官邸】中，需要通过完成支线任务获得。首先与官邸女主人【塔妮丝】交谈获得房间钥匙。使用钥匙打开餐厅的房门，在餐桌上获得【来自火山官邸的信】。随后返回火山官邸餐厅与贝纳尔交谈，花费【8000】卢恩即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：火焰-熔岩火浆",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_50.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "ash-of-war:20800": {
    "kind": "ash-of-war",
    "itemId": 20800,
    "sourceKind": "map",
    "summary": "该战灰位于亚坛高原【城外幻影树】东部的池塘中。跟随池塘中的印记消灭隐身粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神圣-祈祷一击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_57.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_12_02",
      "x": 76.6,
      "z": 339.7,
      "label": "参考赐福：Outer Wall Phantom Tree"
    }
  },
  "ash-of-war:20900": {
    "kind": "ash-of-war",
    "itemId": 20900,
    "sourceKind": "enemy",
    "summary": "傍海古遗迹篝火西侧海边白王掉落，下面有火堆较明显，大前期从气旋下去之前请备好弹反盾",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：重力",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E9%87%8D%E5%8A%9B",
    "verified": true,
    "pin": {
      "mapId": "m18_00_00_00",
      "x": -115.7,
      "z": 12.2,
      "label": "参考赐福：Stranded Graveyard"
    }
  },
  "ash-of-war:21000": {
    "kind": "ash-of-war",
    "itemId": 21000,
    "sourceKind": "shop",
    "summary": "该战灰位于宁姆格福【习战者的破屋】中。在贝纳尔处花费1800卢恩购买即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-风暴刃",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_30.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:21200": {
    "kind": "ash-of-war",
    "itemId": 21200,
    "sourceKind": "enemy",
    "summary": "“亚坛大道的三岔口”赐福点，旁边亚坛大道上的隐形粪金龟，击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：撼地",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E6%92%BC%E5%9C%B0",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 476.6,
      "z": 383.8,
      "label": "参考赐福：Altus Highway Junction"
    }
  },
  "ash-of-war:21300": {
    "kind": "ash-of-war",
    "itemId": 21300,
    "sourceKind": "map",
    "summary": "该战灰位于深根底层赐福【大瀑布顶端】南边。消灭蚂蚁旁边草丛中的粪金龟后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神圣-黄金大地",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_61.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -163.9,
      "z": -624.8,
      "label": "参考赐福：Great Waterfall Crest"
    }
  },
  "ash-of-war:21400": {
    "kind": "ash-of-war",
    "itemId": 21400,
    "sourceKind": "other",
    "summary": "红狮子城后击杀粪金龟获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：炎击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%82%8E%E5%87%BB",
    "verified": true
  },
  "ash-of-war:21600": {
    "kind": "ash-of-war",
    "itemId": 21600,
    "sourceKind": "other",
    "summary": "王城下水道入口井旁边击杀粪金龟获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：落雷",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E8%90%BD%E9%9B%B7",
    "verified": true,
    "pin": {
      "mapId": "m11_00_00_00",
      "x": -180.4,
      "z": -185.5,
      "label": "参考赐福：Avenue Balcony"
    }
  },
  "ash-of-war:21700": {
    "kind": "ash-of-war",
    "itemId": 21700,
    "sourceKind": "map",
    "summary": "该战灰位于亚坛高原【城外战场遗迹】西北方向。消灭营地中的粪金龟后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：雷电-雷击斩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_54.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_13_02",
      "x": 330.3,
      "z": -206.1,
      "label": "参考赐福：Outer Wall Battleground"
    }
  },
  "ash-of-war:21800": {
    "kind": "ash-of-war",
    "itemId": 21800,
    "sourceKind": "map",
    "summary": "该战灰位于卡利亚城寨【王室赏月地】。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：魔力-伟哉卡利亚",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_41.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_12_02",
      "x": 352.1,
      "z": 228.5,
      "label": "参考赐福：Royal Moongazing Grounds"
    }
  },
  "ash-of-war:21900": {
    "kind": "ash-of-war",
    "itemId": 21900,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖东边【结缘教堂】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：卡利亚大剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_34.shtml",
    "verified": true
  },
  "ash-of-war:22000": {
    "kind": "ash-of-war",
    "itemId": 22000,
    "sourceKind": "map",
    "summary": "该战灰位于赐福【深根底层】北部。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-真空斩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_34.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_03_00_00",
      "x": -689.7,
      "z": -409.8,
      "label": "参考赐福：The Nameless Eternal City"
    }
  },
  "ash-of-war:22100": {
    "kind": "ash-of-war",
    "itemId": 22100,
    "sourceKind": "enemy",
    "summary": "该战灰位于天空城【龙教堂祭坛】。消灭首领【神皮双人组】即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：焰术-黑焰漩涡",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_52.shtml",
    "verified": true
  },
  "ash-of-war:22200": {
    "kind": "ash-of-war",
    "itemId": 22200,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德【艾奥尼亚沼泽（深处）】东南，老将欧尼尔战斗场地旁。消灭路中的粪金龟后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神圣-神圣光环",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_58.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -153.2,
      "z": 174.8,
      "label": "参考赐福：Heart of Aeonia"
    }
  },
  "ash-of-war:22400": {
    "kind": "ash-of-war",
    "itemId": 22400,
    "sourceKind": "enemy",
    "summary": "旧亚坛坑道东南方向/前往日荫城的道路上的水潭中的粪金龟击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：血刃",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E8%A1%80%E5%88%83",
    "verified": true,
    "pin": {
      "mapId": "m32_04_00_00",
      "x": -196,
      "z": -95.4,
      "label": "参考赐福：Old Altus Tunnel"
    }
  },
  "ash-of-war:22500": {
    "kind": "ash-of-war",
    "itemId": 22500,
    "sourceKind": "map",
    "summary": "该战灰位于赐福【禁域】的东边。在夜晚来到此处可以见到一名黑夜骑兵，将其消灭后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-幻影共击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_35.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_12_02",
      "x": 379.4,
      "z": 359.8,
      "label": "参考赐福：Forbidden Lands"
    }
  },
  "ash-of-war:22600": {
    "kind": "ash-of-war",
    "itemId": 22600,
    "sourceKind": "map",
    "summary": "该战灰位于魔法学院中，从赐福【杜鹃教堂】出发。消灭小路上的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神秘-幻影枪",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_76.shtml",
    "verified": true
  },
  "ash-of-war:22700": {
    "kind": "ash-of-war",
    "itemId": 22700,
    "sourceKind": "map",
    "summary": "该战灰位于利耶尼亚湖【王室赏月地】西侧三姊妹塔范围的废墟中。消灭废墟中的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：寒冷-寒气冻雾",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_74.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -467.4,
      "z": 201.1,
      "label": "参考赐福：Behind Caria Manor"
    }
  },
  "ash-of-war:22800": {
    "kind": "ash-of-war",
    "itemId": 22800,
    "sourceKind": "enemy",
    "summary": "艾奥尼亚沼泽(岸边)赐福东南方向(即沼泽最南端)，沼泽中的一小片陆地上，粪金龟击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：毒雾",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E6%AF%92%E9%9B%BE",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": -386,
      "z": 95.7,
      "label": "参考赐福：Aeonia Swamp Shore"
    }
  },
  "ash-of-war:30000": {
    "kind": "ash-of-war",
    "itemId": 30000,
    "sourceKind": "map",
    "summary": "该战灰位于利耶尼亚湖【东门桥的桥柱】旁边。在赐福东北方向的第二个桥洞下消灭粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-盾牌冲击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_88.shtml",
    "verified": true
  },
  "ash-of-war:30100": {
    "kind": "ash-of-war",
    "itemId": 30100,
    "sourceKind": "map",
    "summary": "该战灰位于啜泣半岛【摩恩城（城墙前方）】。在夜晚来到此处会遭遇一名黑夜骑兵，将其消灭后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-铁壁盾防",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_90.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "ash-of-war:30200": {
    "kind": "ash-of-war",
    "itemId": 30200,
    "sourceKind": "shop",
    "summary": "在习战者的破屋向角色贝纳尔购买（花费600卢恩）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：格挡",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E6%A0%BC%E6%8C%A1",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:30500": {
    "kind": "ash-of-war",
    "itemId": 30500,
    "sourceKind": "map",
    "summary": "该魔法位于利耶尼亚湖西北【赛尔维斯魔法师塔】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：卡利亚式奉还",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_38.shtml",
    "verified": true
  },
  "ash-of-war:30600": {
    "kind": "ash-of-war",
    "itemId": 30600,
    "sourceKind": "map",
    "summary": "该战灰位于宁姆格福【风暴山丘的破屋】北边，史东薇尔城东侧的小路上。消灭粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-风暴障壁",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_87.shtml",
    "verified": true
  },
  "ash-of-war:30700": {
    "kind": "ash-of-war",
    "itemId": 30700,
    "sourceKind": "map",
    "summary": "该战灰位于赐福【城外幻影树】和【城外战场遗迹】之间的大道上。消灭左侧栏杆上的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神圣-黄金格挡",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_66.shtml",
    "verified": true
  },
  "ash-of-war:30800": {
    "kind": "ash-of-war",
    "itemId": 30800,
    "sourceKind": "map",
    "summary": "该战灰位于亚坛高原【卢克斯废墟】中，建议从赐福【亚坛高原】出发向西北移动来到此处。消灭废墟中的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-突进冲击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_89.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "ash-of-war:30900": {
    "kind": "ash-of-war",
    "itemId": 30900,
    "sourceKind": "shop",
    "summary": "该战灰位于宁姆格福【习战者的破屋】中。在贝纳尔处花费600卢恩购买即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-无战技",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_91.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:31000": {
    "kind": "ash-of-war",
    "itemId": 31000,
    "sourceKind": "quest",
    "summary": "该魔法需要通过【托普斯】的支线任务完成，首先来到利耶尼亚湖【傍湖断崖】旁的伊利斯教堂中。在教室外我们会见到已经死去的托普斯，在他的尸体上可以获得该魔法。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：托普斯的力场",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1481155_20.shtml",
    "verified": true
  },
  "ash-of-war:40000": {
    "kind": "ash-of-war",
    "itemId": 40000,
    "sourceKind": "map",
    "summary": "该战灰位于格密尔火山【移送罪人之路】北部。跟随地面上的白色印记消灭隐身粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-贯穿射击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_81.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "ash-of-war:40100": {
    "kind": "ash-of-war",
    "itemId": 40100,
    "sourceKind": "map",
    "summary": "该战灰位于格密尔火山赐福【沸滚河】旁。在赐福北边一点的位置消灭粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-连续射击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_82.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_13_02",
      "x": -63.6,
      "z": -328.7,
      "label": "参考赐福：Seethewater River"
    }
  },
  "ash-of-war:40200": {
    "kind": "ash-of-war",
    "itemId": 40200,
    "sourceKind": "map",
    "summary": "该战灰位于啜泣半岛【摩恩城（城墙前方）】北部的道路上。消灭道路中的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-拉满弓",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_80.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_08_02",
      "x": -302.7,
      "z": -222.8,
      "label": "参考赐福：Castle Morne Rampart"
    }
  },
  "ash-of-war:40400": {
    "kind": "ash-of-war",
    "itemId": 40400,
    "sourceKind": "map",
    "summary": "该战灰位于【祖灵森林】北部的草地上。消灭巨石边的粪金龟后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-宿灵射击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_84.shtml",
    "verified": true,
    "pin": {
      "mapId": "m12_07_00_00",
      "x": 709.9,
      "z": 1234,
      "label": "参考赐福：Nokron, Eternal City"
    }
  },
  "ash-of-war:40500": {
    "kind": "ash-of-war",
    "itemId": 40500,
    "sourceKind": "shop",
    "summary": "该战灰位于盖利德【隐居商人的破屋】西边。消灭平台边缘的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：普通-对空射击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_83.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_08_02",
      "x": -125.4,
      "z": -274.1,
      "label": "参考赐福：Isolated Merchant's Shack"
    }
  },
  "ash-of-war:40600": {
    "kind": "ash-of-war",
    "itemId": 40600,
    "sourceKind": "enemy",
    "summary": "《红狮子》绘画解密获得；画在瑟利亚镇,瑟利亚镇(楼梯下方)，沿楼梯上，右转东侧的第一，二栋房子之间；解密地点在桂奥尔龙墓的小黄金树，南部一处悬崖下的平台(平台有一个难打的巨像，无掉落，推荐潜行)",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：箭雨",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%AE%AD%E9%9B%A8",
    "verified": true
  },
  "ash-of-war:50100": {
    "kind": "ash-of-war",
    "itemId": 50100,
    "sourceKind": "other",
    "summary": "跟随地面上的白印消灭隐身的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：寒冷-冻霜踏地",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_75.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -445.1,
      "z": -140,
      "label": "参考赐福：The Ravine"
    }
  },
  "ash-of-war:50200": {
    "kind": "ash-of-war",
    "itemId": 50200,
    "sourceKind": "map",
    "summary": "该战灰位于宁姆格福【关卡前废墟】中。在地下室中的宝箱里可以找到该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-风暴足",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_33.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 141.6,
      "z": -17.8,
      "label": "参考赐福：Gatefront"
    }
  },
  "ash-of-war:50300": {
    "kind": "ash-of-war",
    "itemId": 50300,
    "sourceKind": "shop",
    "summary": "在习战者的破屋向角色贝纳尔购买（花费800卢恩）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：踢击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E8%B8%A2%E5%87%BB",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:50400": {
    "kind": "ash-of-war",
    "itemId": 50400,
    "sourceKind": "map",
    "summary": "该战灰位于亚坛高原【城墙旁小径】西南。消灭粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：雷电-雷电羊球",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_55.shtml",
    "verified": true,
    "pin": {
      "mapId": "m30_08_00_00",
      "x": 26,
      "z": -12.5,
      "label": "参考赐福：Sainted Hero's Grave"
    }
  },
  "ash-of-war:50500": {
    "kind": "ash-of-war",
    "itemId": 50500,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德【盖尔要塞北方】的空地上。观察地面上的白色印记消灭隐身粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：火焰-红狮子火焰",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_49.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_11_09_02",
      "x": 256.7,
      "z": 301.9,
      "label": "参考赐福：Fort Gael North"
    }
  },
  "ash-of-war:50600": {
    "kind": "ash-of-war",
    "itemId": 50600,
    "sourceKind": "map",
    "summary": "该战灰位于宁姆格福【雾林边缘】东南方向的小黄金树附近。消灭草地上的粪金龟后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-坠落震击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_8.shtml",
    "verified": true
  },
  "ash-of-war:50700": {
    "kind": "ash-of-war",
    "itemId": 50700,
    "sourceKind": "map",
    "summary": "该战灰位于宁姆格福【雾林边缘】东南方向的小黄金树附近。消灭草地上的粪金龟后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-坠落震击",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_8.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 183.8,
      "z": 210.9,
      "label": "参考赐福：Altus Plateau"
    }
  },
  "ash-of-war:50800": {
    "kind": "ash-of-war",
    "itemId": 50800,
    "sourceKind": "shop",
    "summary": "该战灰需要通过【菈妮】的支线任务获得，由于任务流程过长无法在此描述，玩家可以点击此处查看详细流程。在任务流程中会遭遇【“黑暗弃子”艾丝缇】，将其消灭可以获得黑暗弃子的追忆。随后在大赐福【“解指”恩雅】处使用追忆即可兑换该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：魔力-黑暗波动",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_45.shtml",
    "verified": true
  },
  "ash-of-war:50900": {
    "kind": "ash-of-war",
    "itemId": 50900,
    "sourceKind": "shop",
    "summary": "该战灰位于灰城【艾尔登宝座】处。在此处击败首领【“初始之王”葛孚雷】后获得荷莱·露的追忆。在大赐福【“解指”恩雅】处使用追忆即可兑换该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-荷莱·露的撼地",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_10.shtml",
    "verified": true
  },
  "ash-of-war:60000": {
    "kind": "ash-of-war",
    "itemId": 60000,
    "sourceKind": "other",
    "summary": "亚基尔湖北方桥头的粪金龟（即黑夜骑兵出现的地方），击杀后获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：决心",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%86%B3%E5%BF%83",
    "verified": true
  },
  "ash-of-war:60100": {
    "kind": "ash-of-war",
    "itemId": 60100,
    "sourceKind": "map",
    "summary": "该战灰位于格密尔火山中，从赐福【艾格蕾教堂】出发。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：优质-侍王骑士的决心",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_37.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 54.9,
      "z": -207.9,
      "label": "参考赐福：Temple of Eiglay"
    }
  },
  "ash-of-war:60200": {
    "kind": "ash-of-war",
    "itemId": 60200,
    "sourceKind": "shop",
    "summary": "该战灰位于格密尔火山【火山官邸】中，需要通过完成支线任务获得。首先与官邸女主人【塔妮丝】交谈获得房间钥匙。使用钥匙打开餐厅的房门，在餐桌上获得【来自火山官邸的信】。随后返回火山官邸餐厅与贝纳尔交谈，花费【6500】卢恩即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神秘-暗杀办法",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_79.shtml",
    "verified": true,
    "pin": {
      "mapId": "m16_00_00_00",
      "x": 40.9,
      "z": -60.3,
      "label": "参考赐福：Volcano Manor"
    }
  },
  "ash-of-war:60300": {
    "kind": "ash-of-war",
    "itemId": 60300,
    "sourceKind": "map",
    "summary": "该祷告位于【飘尸臭的破屋】中。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：黄金树立誓",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1482297_16.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:60400": {
    "kind": "ash-of-war",
    "itemId": 60400,
    "sourceKind": "enemy",
    "summary": "亚坛高原，弃置棺材，向西北往调香师废墟的小路上，粪金龟击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：圣律",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%9C%A3%E5%BE%8B",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": -174.1,
      "z": 321.4,
      "label": "参考赐福：Abandoned Coffin"
    }
  },
  "ash-of-war:60500": {
    "kind": "ash-of-war",
    "itemId": 60500,
    "sourceKind": "map",
    "summary": "该战灰位于亚坛高原赐福【亚坛大道的三叉口】附近。在夜晚来到此处可以见到一名黑夜骑兵，将其消灭后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神圣-共享圣律",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_60.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 476.6,
      "z": 383.8,
      "label": "参考赐福：Altus Highway Junction"
    }
  },
  "ash-of-war:60600": {
    "kind": "ash-of-war",
    "itemId": 60600,
    "sourceKind": "enemy",
    "summary": "巨人山顶，结冰湖赐福点向东，隐形粪金龟击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：切腹",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%88%87%E8%85%B9",
    "verified": true
  },
  "ash-of-war:60700": {
    "kind": "ash-of-war",
    "itemId": 60700,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德【不破大桥】西边的高地上。消灭角落中的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-岩石剑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_5.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_09_02",
      "x": 59.7,
      "z": -466.8,
      "label": "参考赐福：Impassable Greatbridge"
    }
  },
  "ash-of-war:65000": {
    "kind": "ash-of-war",
    "itemId": 65000,
    "sourceKind": "map",
    "summary": "该战灰位于利耶尼亚湖北部【谷底秘村】旁。消灭赐福旁边河道中的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-野蛮咆哮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_12.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_09_12_02",
      "x": 4.7,
      "z": 223,
      "label": "参考赐福：Ravine-Veiled Village"
    }
  },
  "ash-of-war:65100": {
    "kind": "ash-of-war",
    "itemId": 65100,
    "sourceKind": "shop",
    "summary": "在习战者的破屋向角色贝纳尔购买（花费800卢恩）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：战吼",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E6%88%98%E5%90%BC",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:65200": {
    "kind": "ash-of-war",
    "itemId": 65200,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德北部的【野兽神殿】中。将死根献给野兽祭司，献祭四个死根时即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：锋利-野兽咆哮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_25.shtml",
    "verified": true
  },
  "ash-of-war:65300": {
    "kind": "ash-of-war",
    "itemId": 65300,
    "sourceKind": "map",
    "summary": "该战灰位于雪原【安歇教堂】南部。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-山妖咆哮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_14.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": 333.1,
      "z": -193.2,
      "label": "参考赐福：Church of Repose"
    }
  },
  "ash-of-war:65400": {
    "kind": "ash-of-war",
    "itemId": 65400,
    "sourceKind": "shop",
    "summary": "该战灰需要通过角色【流氓】和【食粪者】支线任务获得，首先来到利耶尼亚湖【“招募者”菈雅】。在流氓虾哥处花费【1000】卢恩购买项链，之后我们可以在虾哥处购买虾子，虾哥会表示喜欢虾子的没有坏人。在赐福休息一次后第三次来到虾哥处，发现他已经被食粪者诅咒，在虾哥死亡后可以获得武器【铁球拳套】，在该武器上可以获得此战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-夸耀咆哮",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_13.shtml",
    "verified": true
  },
  "ash-of-war:70000": {
    "kind": "ash-of-war",
    "itemId": 70000,
    "sourceKind": "shop",
    "summary": "在习战者的破屋向角色贝纳尔购买（花费600卢恩）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：忍耐",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%BF%8D%E8%80%90",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:70100": {
    "kind": "ash-of-war",
    "itemId": 70100,
    "sourceKind": "enemy",
    "summary": "利耶尼亚远眺岛向西，进入毒潭后，一块靠近南边山崖的陆地上，粪金龟击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：无敌",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E6%97%A0%E6%95%8C",
    "verified": true,
    "pin": {
      "mapId": "m60_08_10_02",
      "x": 410.4,
      "z": 267.8,
      "label": "参考赐福：Folly on the Lake"
    }
  },
  "ash-of-war:70200": {
    "kind": "ash-of-war",
    "itemId": 70200,
    "sourceKind": "map",
    "summary": "在亚坛高原亚雷萨英雄墓地跑酷触发机关让泥头车相撞，完成后获得（也可用蒙格或玛尔基特的囚具直接触发机关）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：圣域",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%9C%A3%E5%9F%9F",
    "verified": true,
    "pin": {
      "mapId": "m30_10_00_00",
      "x": 63.8,
      "z": 96.6,
      "label": "参考赐福：Auriza Hero's Grave"
    }
  },
  "ash-of-war:80000": {
    "kind": "ash-of-war",
    "itemId": 80000,
    "sourceKind": "shop",
    "summary": "在习战者的破屋向角色贝纳尔购买（花费800卢恩）",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：碎步",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%A2%8E%E6%AD%A5",
    "verified": true,
    "pin": {
      "mapId": "m60_10_09_02",
      "x": 136.3,
      "z": 227.3,
      "label": "参考赐福：Warmaster's Shack"
    }
  },
  "ash-of-war:80100": {
    "kind": "ash-of-war",
    "itemId": 80100,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德【雷恩魔法师塔】北部的桥上。在夜晚来到此处可以见到一名黑夜骑兵，将其消灭后即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：锋利-猎犬步法",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_23.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_13_10_02",
      "x": -360.5,
      "z": -121.4,
      "label": "参考赐福：Lenne's Rise"
    }
  },
  "ash-of-war:80200": {
    "kind": "ash-of-war",
    "itemId": 80200,
    "sourceKind": "enemy",
    "summary": "该战灰需要通过角色【尤拉】的支线任务获得，首先来到宁姆格福【龙息废墟】南边的下图所示位置。击败盘踞在此处的【“飞龙”亚基尔】。与尤拉一同消灭【“血指”鸦山的杀手】即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：锋利-潜雾猛禽",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_24.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_08_11_02",
      "x": 291,
      "z": 95,
      "label": "参考赐福：Main Academy Gate"
    }
  },
  "ash-of-war:85000": {
    "kind": "ash-of-war",
    "itemId": 85000,
    "sourceKind": "map",
    "summary": "该战灰位于赐福【化圣雪原（深处）】西北方向的河对岸。来到此处后根据地面上的白色印记消灭隐身粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：神秘-白影诱惑",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_78.shtml",
    "verified": true,
    "pin": {
      "mapId": "m60_12_13_02",
      "x": -232.5,
      "z": 489.8,
      "label": "参考赐福：Inner Consecrated Snowfield"
    }
  },
  "ash-of-war:200000": {
    "kind": "ash-of-war",
    "itemId": 200000,
    "sourceKind": "map",
    "summary": "塔之地劳弗古遗迹-劳弗古遗迹（东方）赐福点-东北方向桥洞下方，东面第二、三根柱子之间紫色光点拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：落叶旋风脚",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E8%90%BD%E5%8F%B6%E6%97%8B%E9%A3%8E%E8%84%9A",
    "verified": true
  },
  "ash-of-war:200100": {
    "kind": "ash-of-war",
    "itemId": 200100,
    "sourceKind": "enemy",
    "summary": "击败惩罚要塞的黑骑士首领获得（从穆斯废墟一直往下走穿过一段洞穴后即可到达惩罚要塞）",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影全战灰收集攻略",
    "sourceUrl": "https://www.9game.cn/news/10260939.html",
    "verified": true,
    "pin": {
      "mapId": "m61_12_10_02",
      "x": -76.8,
      "z": 340.2,
      "label": "参考赐福：Fort of Reprimand"
    }
  },
  "ash-of-war:400000": {
    "kind": "ash-of-war",
    "itemId": 400000,
    "sourceKind": "enemy",
    "summary": "击败首领“老将盖乌斯”的追忆换取",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：重力旋刺",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E9%87%8D%E5%8A%9B%E6%97%8B%E5%88%BA",
    "verified": true
  },
  "ash-of-war:401000": {
    "kind": "ash-of-war",
    "itemId": 401000,
    "sourceKind": "enemy",
    "summary": "主线进度要先来到击败双月骑士进入幽影亚坛，激活幽影亚坛的第一个赐福点【大道旁的十字记号】。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：发劲",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%8F%91%E5%8A%B2",
    "verified": true
  },
  "ash-of-war:402000": {
    "kind": "ash-of-war",
    "itemId": 402000,
    "sourceKind": "enemy",
    "summary": "幽影亚坛-古铁陨石锻造遗迹（赐福点），出遗迹后直接右转，顺着遗迹的右墙一直向东走，右手边有三个小怪，粪金龟在中间，击杀获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：贯穿投掷",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E8%B4%AF%E7%A9%BF%E6%8A%95%E6%8E%B7",
    "verified": true,
    "pin": {
      "mapId": "m42_02_00_00",
      "x": 85.5,
      "z": -89.6,
      "label": "参考赐福：Ruined Forge of Starfall Past"
    }
  },
  "ash-of-war:403000": {
    "kind": "ash-of-war",
    "itemId": 403000,
    "sourceKind": "enemy",
    "summary": "从塔之地弗劳下方-古遗迹下方（赐福点）出发，北方向沿路走，过哨兵站（路上有失色锻造石粪金龟），右边柱子下方（东边柱子）击杀银色粪金龟获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：多重投掷",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%A4%9A%E9%87%8D%E6%8A%95%E6%8E%B7",
    "verified": true,
    "pin": {
      "mapId": "m42_03_00_00",
      "x": -12.7,
      "z": -80.9,
      "label": "参考赐福：Taylew's Ruined Forge"
    }
  },
  "ash-of-war:404000": {
    "kind": "ash-of-war",
    "itemId": 404000,
    "sourceKind": "map",
    "summary": "保藏库一楼左侧升降梯下方区域，走廊左墙第一个入口会进入一个阳台，在阳台拾取",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影全战灰收集攻略",
    "sourceUrl": "https://www.9game.cn/news/10260939.html",
    "verified": true
  },
  "ash-of-war:405000": {
    "kind": "ash-of-war",
    "itemId": 405000,
    "sourceKind": "enemy",
    "summary": "幽影城-幽影城（正门）赐福点出发，上电梯出幽影城，出门南方向直走到调香师营地，在第一层营地面前上坡的岩壁前飞着一直粪金龟，击杀获得",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：串联火花香",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E4%B8%B2%E8%81%94%E7%81%AB%E8%8A%B1%E9%A6%99",
    "verified": true
  },
  "ash-of-war:406000": {
    "kind": "ash-of-war",
    "itemId": 406000,
    "sourceKind": "enemy",
    "summary": "此战灰需要击败粪金龟获得。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：野兽突袭",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E9%87%8E%E5%85%BD%E7%AA%81%E8%A2%AD",
    "verified": true,
    "pin": {
      "mapId": "m61_12_11_02",
      "x": 361.9,
      "z": -291.9,
      "label": "参考赐福：Bridge Leading to the Village"
    }
  },
  "ash-of-war:407000": {
    "kind": "ash-of-war",
    "itemId": 407000,
    "sourceKind": "map",
    "summary": "此战灰位于墓地平原初始地区靠下的位置。从赐福【墓地平原】出发，走到树林中央。此处有一个光着屁股走来走去的敌对角色，与其战斗并获得胜利可以获得武器【野兽爪】，从野兽爪上可以拆下战灰【野兽爪击】。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：野兽爪击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E9%87%8E%E5%85%BD%E7%88%AA%E5%87%BB",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "ash-of-war:409000": {
    "kind": "ash-of-war",
    "itemId": 409000,
    "sourceKind": "map",
    "summary": "此战灰位于墓地平原地图右上的位置，建议从先从【墓地平原】出发到【火吻遗迹】，再继续往右上走到画圈的位置（已经激活赐福的小伙伴可以直接跳过）。拾取目标建筑旁的光点即可获得武器【反手剑】，从反手剑可以拆下战灰【死角一击】。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：死角一击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E6%AD%BB%E8%A7%92%E4%B8%80%E5%87%BB",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 113,
      "z": 216.2,
      "label": "参考赐福：Three-Path Cross"
    }
  },
  "ash-of-war:410000": {
    "kind": "ash-of-war",
    "itemId": 410000,
    "sourceKind": "quest",
    "summary": "帮助角人击败蕾妲获得：需要完成角人的一系列支线，在击败梅瑟莫之前击败双月骑士，然后前往赐福大道旁的十字记号",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影全战灰收集攻略",
    "sourceUrl": "https://www.9game.cn/news/10260939.html",
    "verified": true,
    "pin": {
      "mapId": "m21_01_00_00",
      "x": 193,
      "z": 258.5,
      "label": "参考赐福：Storehouse, First Floor"
    }
  },
  "ash-of-war:411000": {
    "kind": "ash-of-war",
    "itemId": 411000,
    "sourceKind": "map",
    "summary": "墓地平原-大桥北方（赐福点）出发，向西方向水潭走，灵火龙下方水面尸体上拾取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：大上段",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%A4%A7%E4%B8%8A%E6%AE%B5",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 189.6,
      "z": -349.9,
      "label": "参考赐福：Gravesite Plain"
    }
  },
  "ash-of-war:412000": {
    "kind": "ash-of-war",
    "itemId": 412000,
    "sourceKind": "other",
    "summary": "赐福“城主的房间”，出门阳台左转跳下。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：单翼架式",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%8D%95%E7%BF%BC%E6%9E%B6%E5%BC%8F",
    "verified": true
  },
  "ash-of-war:413000": {
    "kind": "ash-of-war",
    "itemId": 413000,
    "sourceKind": "map",
    "summary": "此战灰位于【雾谷地下墓地】的一个隐藏宝箱内。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：瞬雷",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%9E%AC%E9%9B%B7",
    "verified": true
  },
  "ash-of-war:414000": {
    "kind": "ash-of-war",
    "itemId": 414000,
    "sourceKind": "enemy",
    "summary": "此战灰需要击败位于幽影亚坛圣战教堂的火焰骑士昆兰获得。首先来到塔之镇贝瑞特的赐福【民宅小祭坛】，然后从右上的门走，击败门口的角战士往右走到头。在尽头处的喷泉区域能够第一次遇到火焰骑士昆兰的入侵，直接击败他。然后传送到赐福【大道旁的十字记号】，前往圣战教堂。在这个教堂内会再次受到火焰骑士昆兰的入侵，这次击败他可以获得祈祷室的钥匙与战灰【火焰穿刺】。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：火焰穿刺",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%81%AB%E7%84%B0%E7%A9%BF%E5%88%BA",
    "verified": true
  },
  "ash-of-war:415000": {
    "kind": "ash-of-war",
    "itemId": 415000,
    "sourceKind": "map",
    "summary": "该战灰位于盖利德西侧的【盖尔要塞】中。消灭要塞中的狮子即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：厚重-狮子斩",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_4.shtml",
    "verified": true,
    "pin": {
      "mapId": "m61_11_10_02",
      "x": 113,
      "z": 216.2,
      "label": "参考赐福：Three-Path Cross"
    }
  },
  "ash-of-war:416000": {
    "kind": "ash-of-war",
    "itemId": 416000,
    "sourceKind": "other",
    "summary": "跟随地面上的白印消灭隐身的粪金龟即可获得该战灰。",
    "details": "",
    "sourceTitle": "游民星空《艾尔登法环》全战灰收集图文攻略：寒冷-冻霜踏地",
    "sourceUrl": "https://www.gamersky.com/handbook/202205/1480430_75.shtml",
    "verified": true
  },
  "ash-of-war:417000": {
    "kind": "ash-of-war",
    "itemId": 417000,
    "sourceKind": "enemy",
    "summary": "击败看守梅瑟莫暗室的火焰骑士获得：从保藏库一楼的赐福点出发，到达第二层往左走一段距离再往右走，找到楼梯继续上走到第三层",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影全战灰收集攻略",
    "sourceUrl": "https://www.9game.cn/news/10260939.html",
    "verified": true
  },
  "ash-of-war:418000": {
    "kind": "ash-of-war",
    "itemId": 418000,
    "sourceKind": "enemy",
    "summary": "此战灰位于马努斯-美特大教堂左后方的一个山洞中，从穆斯废墟出发我们首先传送到赐福【穆斯废墟】，往右下走一段距离就能找到位于穆斯废墟的地洞。跳到地洞的最底层，沿着右侧的洞窟走到地图另一边。从地面教堂废墟的左边洞窟跳更轻松。走到山崖边有个山洞进入山洞往上面看，击杀悬挂在洞穴上方的粪金龟即可获得这个战灰。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：尊矣卡利亚",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%B0%8A%E7%9F%A3%E5%8D%A1%E5%88%A9%E4%BA%9A",
    "verified": true
  },
  "ash-of-war:419000": {
    "kind": "ash-of-war",
    "itemId": 419000,
    "sourceKind": "map",
    "summary": "在塔之镇贝瑞特内：激活赐福「塔之镇」贝瑞特后往大门右侧走到喷泉，拾取左侧黄色水池里的道具后从右侧楼梯进入走廊获得",
    "details": "",
    "sourceTitle": "九游《艾尔登法环》黄金树幽影全战灰收集攻略",
    "sourceUrl": "https://www.9game.cn/news/10260939.html",
    "verified": true
  },
  "ash-of-war:422000": {
    "kind": "ash-of-war",
    "itemId": 422000,
    "sourceKind": "enemy",
    "summary": "此战灰需要击败赐福【卡罗隐藏墓地】左上角的死亡仪式鸟获取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：唤起灵火",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%94%A4%E8%B5%B7%E7%81%B5%E7%81%AB",
    "verified": true
  },
  "ash-of-war:505000": {
    "kind": "ash-of-war",
    "itemId": 505000,
    "sourceKind": "enemy",
    "summary": "粪金龟在一个橙色的水池中间，击杀即可获得战灰【双刺毒花】。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：双刺毒花",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%8F%8C%E5%88%BA%E6%AF%92%E8%8A%B1",
    "verified": true
  },
  "ash-of-war:548000": {
    "kind": "ash-of-war",
    "itemId": 548000,
    "sourceKind": "enemy",
    "summary": "完成埃贡的直线，击败首领“狂龙贝勒”后，在埃贡对话地拾取埃贡的装备，装备上自带战灰。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：埃贡的猎龙",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E5%9F%83%E8%B4%A1%E7%9A%84%E7%8C%8E%E9%BE%99",
    "verified": true
  },
  "ash-of-war:800000": {
    "kind": "ash-of-war",
    "itemId": 800000,
    "sourceKind": "other",
    "summary": "幽影城物种保藏库，保藏库（七楼）赐福点出发，沿着楼梯向下走到五楼，从外部走到四楼平台，平台右手边跳下到木质连廊上，右边栏杆跳到柱子上，走到对面平台尸体上获取。",
    "details": "",
    "sourceTitle": "哔哩哔哩游戏《艾尔登法环》攻略站：战灰：盾牌攻击",
    "sourceUrl": "https://wiki.biligame.com/eldenring/%E6%88%98%E7%81%B0%EF%BC%9A%E7%9B%BE%E7%89%8C%E6%94%BB%E5%87%BB",
    "verified": true
  }
};
