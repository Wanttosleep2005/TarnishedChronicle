// @generated from Eldenpedia/Fandom acquisition sections and local map/grace data (2026-07-31).
// Key format follows the collection placement key: placementType:itemId.

export type CollectionAcquisitionKind = 'shop' | 'enemy' | 'quest' | 'map' | 'other' | 'unknown';

export interface CollectionAcquisitionPin {
  readonly mapId: string;
  readonly x: number;
  readonly z: number;
  readonly label: string;
}

export interface CollectionAcquisitionRecord {
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

export const COLLECTION_ACQUISITION: Readonly<Record<string, CollectionAcquisitionRecord>> = {
  "armor:10000": {
    "kind": "armor",
    "itemId": 10000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Head",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Head",
    "verified": false
  },
  "armor:10100": {
    "kind": "armor",
    "itemId": 10100,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Body",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Body",
    "verified": false
  },
  "armor:10200": {
    "kind": "armor",
    "itemId": 10200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Arms",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Arms",
    "verified": false
  },
  "armor:10300": {
    "kind": "armor",
    "itemId": 10300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Legs",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Legs",
    "verified": false
  },
  "armor:40000": {
    "kind": "armor",
    "itemId": 40000,
    "sourceKind": "shop",
    "summary": "商店购买：由 流浪民族的商人 ，地点： 摩恩城（城墙前方） ，位于 啜泣半岛.",
    "details": "Sold by Nomadic Merchant at Castle Morne Rampart in the Weeping Peninsula.",
    "sourceTitle": "Iron Helmet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Iron_Helmet",
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
    "summary": "商店购买：流浪民族的商人 ，地点： 摩恩城（城墙前方） ，位于 啜泣半岛 region.",
    "details": "Nomadic Merchant at Castle Morne Rampart in the Weeping Peninsula region.",
    "sourceTitle": "Scale Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scale_Armor",
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
    "summary": "商店购买：The Iron Gauntlets 可向 the 流浪民族的商人 (摩恩城（城墙前方）) ，位于 啜泣半岛 ，用于 卢恩 1,500 卢恩.",
    "details": "The Iron Gauntlets can be purchased from the Nomadic Merchant (Castle Morne Rampart) in the Weeping Peninsula for 卢恩 1,500 runes.",
    "sourceTitle": "Iron Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Iron_Gauntlets",
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
    "summary": "商店购买：流浪民族的商人 ，地点： 摩恩城（城墙前方） ，位于 啜泣半岛 region",
    "details": "Nomadic Merchant at Castle Morne Rampart in the Weeping Peninsula region",
    "sourceTitle": "Leather Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Trousers",
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
    "summary": "敌人 / 首领掉落：Kaiden Helm has a 3.00% 有概率从 Kaiden Sellsword enemies.",
    "details": "Kaiden Helm has a 3.00% chance to drop from Kaiden Sellsword enemies.",
    "sourceTitle": "Kaiden Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Kaiden_Helm",
    "verified": true
  },
  "armor:50100": {
    "kind": "armor",
    "itemId": 50100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Kaiden 防具 has a 3.00% 有概率从 Kaiden Sellsword enemies.",
    "details": "Kaiden Armor has a 3.00% chance to drop from Kaiden Sellsword enemies.",
    "sourceTitle": "Kaiden Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Kaiden_Armor",
    "verified": true
  },
  "armor:50200": {
    "kind": "armor",
    "itemId": 50200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Kaiden Gauntlets have a 3.00% 有概率从 Kaiden Sellsword enemies.",
    "details": "The Kaiden Gauntlets have a 3.00% chance to drop from Kaiden Sellsword enemies.",
    "sourceTitle": "Kaiden Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Kaiden_Gauntlets",
    "verified": true
  },
  "armor:50300": {
    "kind": "armor",
    "itemId": 50300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Kaiden Trousers have a 3.00% 有概率从 Kaiden Sellsword enemies.",
    "details": "Kaiden Trousers have a 3.00% chance to drop from Kaiden Sellsword enemies.",
    "sourceTitle": "Kaiden Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Kaiden_Trousers",
    "verified": true
  },
  "armor:60000": {
    "kind": "armor",
    "itemId": 60000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：逐渐崩毁的法姆·亚兹拉, 附近 the 龙教堂（屋顶） 赐福 down on a ledge to the left inside a 宝箱 alongside the rest of the Drake 剑士 set.",
    "details": "Crumbling Farum Azula, near the Dragon Temple Rooftop grace down on a ledge to the left inside a treasure chest alongside the rest of the Drake Knight set.",
    "sourceTitle": "Drake Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Drake_Knight_Helm",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：逐渐崩毁的法姆·亚兹拉, 附近 the 龙教堂（屋顶） 赐福 down on a ledge to the left inside a 宝箱 alongside the rest of the Drake 剑士 set.",
    "details": "Crumbling Farum Azula, near the Dragon Temple Rooftop grace down on a ledge to the left inside a treasure chest alongside the rest of the Drake Knight set.",
    "sourceTitle": "Drake Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Drake_Knight_Armor",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：逐渐崩毁的法姆·亚兹拉；The Drake 剑士 Gauntlets are 位于 a 宝箱 附近 the 赐福 龙教堂（屋顶） 赐福, alongside the rest of the Drake 剑士 Set.",
    "details": "Location: Crumbling Farum Azula；The Drake Knight Gauntlets are found in a chest near the 赐福 Dragon Temple Rooftop site of grace, alongside the rest of the Drake Knight Set.",
    "sourceTitle": "Drake Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Drake_Knight_Gauntlets",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：逐渐崩毁的法姆·亚兹拉, 附近 the 龙教堂（屋顶） 赐福 down on a ledge to the left inside a 宝箱 alongside the rest of the Drake 剑士 set.",
    "details": "Crumbling Farum Azula, near the Dragon Temple Rooftop grace down on a ledge to the left inside a treasure chest alongside the rest of the Drake Knight set.",
    "sourceTitle": "Drake Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Drake_Knight_Greaves",
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
    "summary": "地图拾取 / 宝箱：位于 unaltered in 逐渐崩毁的法姆·亚兹拉, 附近 the 龙教堂（屋顶） 赐福 down on a ledge to the left inside a 宝箱 alongside the rest of the Drake 剑士 set. Can be altered ，地点： a 赐福 or by 裁缝师柏克.",
    "details": "Found unaltered in Crumbling Farum Azula, near the Dragon Temple Rooftop grace down on a ledge to the left inside a treasure chest alongside the rest of the Drake Knight set. Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Drake Knight Helm (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Drake_Knight_Helm_(Altered)",
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
    "summary": "地图拾取 / 宝箱：位于 unaltered in 逐渐崩毁的法姆·亚兹拉, 附近 the 龙教堂（屋顶） 赐福 down on a ledge to the left inside a 宝箱 alongside the rest of the Drake 剑士 set. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Found unaltered in Crumbling Farum Azula, near the Dragon Temple Rooftop grace down on a ledge to the left inside a treasure chest alongside the rest of the Drake Knight set. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Drake Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Drake_Knight_Armor_(Altered)",
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
    "summary": "敌人 / 首领掉落：击败 “古老骑士”伊修托邦 ，用于 the 火山官邸.",
    "details": "Defeat Old Knight Istvan for the Volcano Manor.",
    "sourceTitle": "Scaled Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scaled_Helm",
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
    "summary": "敌人 / 首领掉落：击败 “古老骑士”伊修托邦 ，用于 the 火山官邸.",
    "details": "Defeat Old Knight Istvan for the Volcano Manor.",
    "sourceTitle": "Scaled Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scaled_Armor",
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
    "summary": "敌人 / 首领掉落：The Scaled Gauntlets are 通过...获得 defeating “古老骑士”伊修托邦 as part of the 火山官邸 任务线.",
    "details": "The Scaled Gauntlets are obtained by defeating Old Knight Istvan as part of the Volcano Manor questline.",
    "sourceTitle": "Scaled Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scaled_Gauntlets",
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
    "summary": "敌人 / 首领掉落：击败 “古老骑士”伊修托邦 ，用于 the 火山官邸.",
    "details": "Defeat Old Knight Istvan for the Volcano Manor.",
    "sourceTitle": "Scaled Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scaled_Greaves",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击败 “古老骑士”伊修托邦 ，用于 the 火山官邸 to receive it unaltered. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Defeat Old Knight Istvan for the Volcano Manor to receive it unaltered. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Scaled Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scaled_Armor_(Altered)",
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
    "summary": "敌人 / 首领掉落：有概率从 Perfumer enemies.",
    "details": "Chance to drop from Perfumer enemies.",
    "sourceTitle": "Perfumer Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer_Hood",
    "verified": true
  },
  "armor:90100": {
    "kind": "armor",
    "itemId": 90100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Perfumer enemies.",
    "details": "Chance to drop from Perfumer enemies.",
    "sourceTitle": "Perfumer Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer_Robe",
    "verified": true
  },
  "armor:90200": {
    "kind": "armor",
    "itemId": 90200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Perfumer Gloves have a 3.00% 有概率从 Perfumer enemies.",
    "details": "The Perfumer Gloves have a 3.00% chance to drop from Perfumer enemies.",
    "sourceTitle": "Perfumer Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer_Gloves",
    "verified": true
  },
  "armor:90300": {
    "kind": "armor",
    "itemId": 90300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Perfumer enemies.",
    "details": "Chance to drop from Perfumer enemies.",
    "sourceTitle": "Perfumer Sarong",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer_Sarong",
    "verified": true
  },
  "armor:91100": {
    "kind": "armor",
    "itemId": 91100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from Perfumer enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Perfumer enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Perfumer Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer_Robe_(Altered)",
    "verified": true
  },
  "armor:100000": {
    "kind": "armor",
    "itemId": 100000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse alongside with the rest of the set inside the 贤者镇的废墟 located north of Aeonia Swamp in 盖利德.",
    "details": "Found on a corpse alongside with the rest of the set inside the Street of Sages Ruins located north of Aeonia Swamp in Caelid.",
    "sourceTitle": "Traveler's Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveler's_Hat",
    "verified": true
  },
  "armor:100100": {
    "kind": "armor",
    "itemId": 100100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse alongside with the rest of the set inside the 贤者镇的废墟 located north of Aeonia Swamp in 盖利德.",
    "details": "Found on a corpse alongside with the rest of the set inside the Street of Sages Ruins located north of Aeonia Swamp in Caelid.",
    "sourceTitle": "Perfumer's Traveling Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer's_Traveling_Garb",
    "verified": true
  },
  "armor:100200": {
    "kind": "armor",
    "itemId": 100200,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：贤者镇的废墟；The Traveler's Gloves are 位于 on a corpse alongside the rest of the Perfumer's Traveling Set ，位于 贤者镇的废墟, north of the 艾奥尼亚沼泽 in 盖利德.",
    "details": "Location: Street of Sages Ruins；The Traveler's Gloves are found on a corpse alongside the rest of the Perfumer's Traveling Set in the Street of Sages Ruins, north of the Swamp of Aeonia in Caelid.",
    "sourceTitle": "Traveler's Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveler's_Gloves",
    "verified": true
  },
  "armor:100300": {
    "kind": "armor",
    "itemId": 100300,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse alongside with the rest of the set inside the 贤者镇的废墟 located north of Aeonia Swamp in 盖利德.",
    "details": "Found on a corpse alongside with the rest of the set inside the Street of Sages Ruins located north of Aeonia Swamp in Caelid.",
    "sourceTitle": "Traveler's Slops",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveler's_Slops",
    "verified": true
  },
  "armor:101100": {
    "kind": "armor",
    "itemId": 101100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 unaltered on a corpse alongside with the rest of the set inside the 贤者镇的废墟 located north of Aeonia Swamp in 盖利德. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Found unaltered on a corpse alongside with the rest of the set inside the Street of Sages Ruins located north of Aeonia Swamp in Caelid. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Perfumer's Traveling Garb (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer's_Traveling_Garb_(Altered)",
    "verified": true
  },
  "armor:120000": {
    "kind": "armor",
    "itemId": 120000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：王城罗德尔；Alberich's Pointed Hat is 位于 the entry hall of the Fortified Manor in 王城罗德尔.",
    "details": "Loot: Leyndell, Royal Capital；Alberich's Pointed Hat is found in the entry hall of the Fortified Manor in Leyndell, Royal Capital.",
    "sourceTitle": "Alberich's Pointed Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Alberich's_Pointed_Hat",
    "verified": true
  },
  "armor:120100": {
    "kind": "armor",
    "itemId": 120100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：Fortified Manor；与...一同位于 the rest of the armor set ，位于 Fortified Manor's entry hall, 王城罗德尔.",
    "details": "Location: Fortified Manor；Found alongside the rest of the armor set in the Fortified Manor's entry hall, Leyndell, Royal Capital.",
    "sourceTitle": "Alberich's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Alberich's_Robe",
    "verified": true
  },
  "armor:120200": {
    "kind": "armor",
    "itemId": 120200,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：Fortified Manor；Alberich's Bracers are 与...一同位于 the rest of the Alberich's Set ，位于 entry hall of the Fortified Manor in 王城罗德尔.",
    "details": "Location: Fortified Manor；Alberich's Bracers are found alongside the rest of the Alberich's Set in the entry hall of the Fortified Manor in Leyndell, Royal Capital.",
    "sourceTitle": "Alberich's Bracers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Alberich's_Bracers",
    "verified": true
  },
  "armor:120300": {
    "kind": "armor",
    "itemId": 120300,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：Fortified Manor；Alberich's Trousers are 与...一同位于 the rest of Alberich's Set ，位于 main hall of the Fortified Manor, located in 王城罗德尔.",
    "details": "Location: Fortified Manor；Alberich's Trousers are found alongside the rest of Alberich's Set in the main hall of the Fortified Manor, located in Leyndell, Royal Capital.",
    "sourceTitle": "Alberich's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Alberich's_Trousers",
    "verified": true
  },
  "armor:121000": {
    "kind": "armor",
    "itemId": 121000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：王城罗德尔；Alter Alberich's Pointed Hat using 防具 Adjustment. Alberich's Pointed Hat is 与...一同位于 the rest of the Alberich's Set ，位于 entry hall of the Fortified Manor in 王城罗德尔.",
    "details": "Location: Leyndell, Royal Capital；Alter Alberich's Pointed Hat using Armor Adjustment. Alberich's Pointed Hat is found alongside the rest of the Alberich's Set in the entry hall of the Fortified Manor in Leyndell, Royal Capital.",
    "sourceTitle": "Alberich's Pointed Hat (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Alberich's_Pointed_Hat_(Altered)",
    "verified": true
  },
  "armor:121100": {
    "kind": "armor",
    "itemId": 121100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：The non-altered version can be 与...一同位于 the rest of the armor set ，位于 Fortified Manor's entry hall, 王城罗德尔.",
    "details": "The non-altered version can be found alongside the rest of the armor set in the Fortified Manor's entry hall, Leyndell, Royal Capital.",
    "sourceTitle": "Alberich's Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Alberich's_Robe_(Altered)",
    "verified": true
  },
  "armor:130000": {
    "kind": "armor",
    "itemId": 130000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：圆桌厅堂；The Spellblade's Pointed Hat is 击杀后掉落： 魔法师罗杰尔 ，地点： the end of his 任务线.",
    "details": "Location: Roundtable Hold；The Spellblade's Pointed Hat is dropped by Sorcerer Rogier at the end of his questline.",
    "sourceTitle": "Spellblade's Pointed Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spellblade's_Pointed_Hat",
    "verified": true
  },
  "armor:130100": {
    "kind": "armor",
    "itemId": 130100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：完成 Rogier's 任务线.",
    "details": "Complete Rogier's questline.",
    "sourceTitle": "Spellblade's Traveling Attire",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spellblade's_Traveling_Attire",
    "verified": true
  },
  "armor:130200": {
    "kind": "armor",
    "itemId": 130200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Spellblade's Gloves are 击杀后掉落： 魔法师罗杰尔.",
    "details": "The Spellblade's Gloves are dropped by Sorcerer Rogier.",
    "sourceTitle": "Spellblade's Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spellblade's_Gloves",
    "verified": true
  },
  "armor:130300": {
    "kind": "armor",
    "itemId": 130300,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：创建完成 魔法师罗杰尔's 任务线.",
    "details": "Finish Sorcerer Rogier's questline.",
    "sourceTitle": "Spellblade's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spellblade's_Trousers",
    "verified": true
  },
  "armor:131100": {
    "kind": "armor",
    "itemId": 131100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：完成 Rogier's 任务线.",
    "details": "Complete Rogier's questline.",
    "sourceTitle": "Spellblade's Traveling Attire (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spellblade's_Traveling_Attire_(Altered)",
    "verified": true
  },
  "armor:140000": {
    "kind": "armor",
    "itemId": 140000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 by defeating “大角”忒拉格斯 期间 帕奇' assassination request ，位于 arena of “熔岩土龙”马卡尔 ，地点： the 古遗迹断崖.",
    "details": "Obtained by defeating Great Horned Tragoth during Patches' assassination request in the arena of Magma Wyrm Makar at the Ruin-Strewn Precipice.",
    "sourceTitle": "Bull-Goat Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bull-Goat_Helm",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击败 “大角”忒拉格斯 ，用于 the 火山官邸.",
    "details": "Defeat Great Horned Tragoth for the Volcano Manor.",
    "sourceTitle": "Bull-Goat Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bull-Goat_Armor",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Bull-Goat Gauntlets are 通过...获得 defeating “大角”忒拉格斯 ，地点： the 古遗迹断崖 后 receiving the Letter to 帕奇.",
    "details": "The Bull-Goat Gauntlets are obtained by defeating Great Horned Tragoth at the Ruin-Strewn Precipice after receiving the Letter to Patches.",
    "sourceTitle": "Bull-Goat Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bull-Goat_Gauntlets",
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
    "sourceKind": "other",
    "summary": "其他来源：Murder “大角”忒拉格斯.",
    "details": "Murder Great Horned Tragoth.",
    "sourceTitle": "Bull-Goat Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bull-Goat_Greaves",
    "verified": true
  },
  "armor:150000": {
    "kind": "armor",
    "itemId": 150000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： Yura only once he his possessed by 夏玻利利 期间 his 任务线.",
    "details": "Dropped by Yura only once he his possessed by Shabriri during his questline.",
    "sourceTitle": "Iron Kasa",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Iron_Kasa",
    "verified": true
  },
  "armor:150100": {
    "kind": "armor",
    "itemId": 150100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： 夏玻利利 on death, or left in his place if the Tarnished meets the Three Fingers and inherits the Frenzied Flame. Will not be 击杀后掉落： Yura if he is killed before 夏玻利利 possesses him.",
    "details": "Dropped by Shabriri on death, or left in his place if the Tarnished meets the Three Fingers and inherits the Frenzied Flame. Will not be dropped by Yura if he is killed before Shabriri possesses him.",
    "sourceTitle": "Ronin's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ronin's_Armor",
    "verified": true
  },
  "armor:150200": {
    "kind": "armor",
    "itemId": 150200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：巨人山顶；The Ronin's Gauntlets are 击杀后掉落： 夏玻利利 附近 the 赐福 萨米尔废墟 赐福 if the player kills him or meets the Three Fingers.",
    "details": "Location: Mountaintops of the Giants；The Ronin's Gauntlets are dropped by Shabriri near the 赐福 Zamor Ruins Site of Grace if the player kills him or meets the Three Fingers.",
    "sourceTitle": "Ronin's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ronin's_Gauntlets",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： Yura only once he his possessed by 夏玻利利 期间 his 任务线.",
    "details": "Dropped by Yura only once he his possessed by Shabriri during his questline.",
    "sourceTitle": "Ronin's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ronin's_Greaves",
    "verified": true
  },
  "armor:151100": {
    "kind": "armor",
    "itemId": 151100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： Yura (unaltered) only once he his possessed by 夏玻利利 期间 his 任务线. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Dropped by Yura (unaltered) only once he his possessed by Shabriri during his questline. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Ronin's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ronin's_Armor_(Altered)",
    "verified": true
  },
  "armor:160000": {
    "kind": "armor",
    "itemId": 160000,
    "sourceKind": "shop",
    "summary": "商店购买：位于 on a corpse in a ditch 附近 the 赐福 大道旁露台 赐福 in 王城罗德尔.由 the 流浪民族的商人 on 格密尔火山 ，用于 卢恩 500 卢恩.",
    "details": "Found on a corpse in a ditch near the 赐福 Avenue Balcony site of grace in Leyndell, Royal Capital.Sold by the Nomadic Merchant on Mt. Gelmir for 卢恩 500 runes.",
    "sourceTitle": "Guilty Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Guilty_Hood",
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
    "summary": "地图拾取 / 宝箱：位于 a 宝箱 inside 蒙流洞窟 located in 宁姆格福.",
    "details": "Found in a chest inside Murkwater Cave located in Limgrave.",
    "sourceTitle": "Cloth Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cloth_Garb",
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
    "summary": "地图拾取 / 宝箱：位于 a 宝箱 inside 蒙流洞窟 located in 宁姆格福.",
    "details": "Found in a chest inside Murkwater Cave located in Limgrave.",
    "sourceTitle": "Cloth Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cloth_Trousers",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：三姊妹塔；The Black Wolf Mask is 位于 on a corpse atop the broken wall behind 赛尔维斯魔法师塔 ，位于 三姊妹塔 area of northwestern 湖之利耶尼亚.",
    "details": "Location: Three Sisters；The Black Wolf Mask is found on a corpse atop the broken wall behind Seluvis's Rise in the Three Sisters area of northwestern Liurnia of the Lakes.",
    "sourceTitle": "Black Wolf Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Wolf_Mask",
    "verified": true
  },
  "armor:170100": {
    "kind": "armor",
    "itemId": 170100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 killing Blaidd 期间 Ranni's 任务线.",
    "details": "Received after killing Blaidd during Ranni's questline.",
    "sourceTitle": "Blaidd's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blaidd's_Armor",
    "verified": true
  },
  "armor:170200": {
    "kind": "armor",
    "itemId": 170200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：三姊妹塔；Blaidd's Gauntlets are obtained 后 defeating “半狼”布莱泽 ，地点： 菈妮魔法师塔.",
    "details": "Location: Three Sisters；Blaidd's Gauntlets are obtained after defeating Blaidd the Half-Wolf at Ranni's Rise.",
    "sourceTitle": "Blaidd's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blaidd's_Gauntlets",
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
    "summary": "敌人 / 首领掉落：击杀后获得 killing Blaidd.",
    "details": "Received after killing Blaidd.",
    "sourceTitle": "Blaidd's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blaidd's_Greaves",
    "verified": true
  },
  "armor:171100": {
    "kind": "armor",
    "itemId": 171100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received unaltered 后 killing Blaidd. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Received unaltered after killing Blaidd. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Blaidd's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blaidd's_Armor_(Altered)",
    "verified": true
  },
  "armor:180000": {
    "kind": "armor",
    "itemId": 180000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：“仪典镇”奥缇那；The Black Knife Hood, together with the rest of the Black Knife Set, is looted from a corpse beneath a stairway in “仪典镇”奥缇那, located in northern 化圣雪原.",
    "details": "Location: Ordina, Liturgical Town；The Black Knife Hood, together with the rest of the Black Knife Set, is looted from a corpse beneath a stairway in Ordina, Liturgical Town, located in northern Consecrated Snowfield.",
    "sourceTitle": "Black Knife Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knife_Hood",
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
    "summary": "地图拾取 / 宝箱：The entire set can be 位于 on a corpse under the stairway in “仪典镇”奥缇那 located in 化圣雪原.",
    "details": "The entire set can be found on a corpse under the stairway in Ordina, Liturgical Town located in Consecrated Snowfield.",
    "sourceTitle": "Black Knife Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knife_Armor",
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
    "summary": "地图拾取 / 宝箱：The entire set can be 位于 on a corpse under the stairway in “仪典镇”奥缇那 located in 化圣雪原.",
    "details": "The entire set can be found on a corpse under the stairway in Ordina, Liturgical Town located in Consecrated Snowfield.",
    "sourceTitle": "Black Knife Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knife_Gauntlets",
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
    "summary": "地图拾取 / 宝箱：The entire set can be 位于 on a corpse under the stairway in “仪典镇”奥缇那, located in 化圣雪原.",
    "details": "The entire set can be found on a corpse under the stairway in Ordina, Liturgical Town, located in Consecrated Snowfield.",
    "sourceTitle": "Black Knife Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knife_Greaves",
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
    "summary": "地图拾取 / 宝箱：The entire set can be 位于 on a corpse under the stairway in “仪典镇”奥缇那 located in 化圣雪原. The 宝箱 piece can then be altered ，地点： a 赐福 or with the help of Boc.",
    "details": "The entire set can be found on a corpse under the stairway in Ordina, Liturgical Town located in Consecrated Snowfield. The chest piece can then be altered at a site of grace or with the help of Boc.",
    "sourceTitle": "Black Knife Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knife_Armor_(Altered)",
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
    "summary": "敌人 / 首领掉落：The Exile Hood has a 1.5% 有概率从 Exile Soldiers.",
    "details": "The Exile Hood has a 1.5% chance to drop from Exile Soldiers.",
    "sourceTitle": "Exile Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Exile_Hood",
    "verified": true
  },
  "armor:190100": {
    "kind": "armor",
    "itemId": 190100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Exile Soldier enemies.",
    "details": "Chance to drop from Exile Soldier enemies.",
    "sourceTitle": "Exile Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Exile_Armor",
    "verified": true
  },
  "armor:190200": {
    "kind": "armor",
    "itemId": 190200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Exile Gauntlets have a 1.50% 有概率从 Exile Soldier enemies.",
    "details": "The Exile Gauntlets have a 1.50% chance to drop from Exile Soldier enemies.",
    "sourceTitle": "Exile Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Exile_Gauntlets",
    "verified": true
  },
  "armor:190300": {
    "kind": "armor",
    "itemId": 190300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Exile Soldier enemies.",
    "details": "Chance to drop from Exile Soldier enemies.",
    "sourceTitle": "Exile Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Exile_Greaves",
    "verified": true
  },
  "armor:200000": {
    "kind": "armor",
    "itemId": 200000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Banished 剑士 Helm has a 3.00% 有概率从 Banished Communion 剑士s that wear it, such as the one 附近 the 龙飨大教堂 in 盖利德.Cannot be 通过...获得 altering Banished 剑士 Helm (Altered).",
    "details": "The Banished Knight Helm has a 3.00% chance to drop from Banished Communion Knights that wear it, such as the one near the Cathedral of Dragon Communion in Caelid.Cannot be obtained by altering Banished Knight Helm (Altered).",
    "sourceTitle": "Banished Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Helm",
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
    "summary": "敌人 / 首领掉落：3.0% 有概率从 Banished 剑士 enemies that wear it, such as the one accompanied by two wolves in 索尔城.",
    "details": "3.0% chance to drop from Banished Knight enemies that wear it, such as the one accompanied by two wolves in Castle Sol.",
    "sourceTitle": "Banished Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Armor",
    "verified": true
  },
  "armor:200200": {
    "kind": "armor",
    "itemId": 200200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Banished 剑士 Gauntlets have a 3.00% 有概率从 Banished 剑士 enemies.",
    "details": "The Banished Knight Gauntlets have a 3.00% chance to drop from Banished Knight enemies.",
    "sourceTitle": "Banished Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Gauntlets",
    "verified": true
  },
  "armor:200300": {
    "kind": "armor",
    "itemId": 200300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：3.00% 有概率从 Banished 剑士 enemies.",
    "details": "3.00% chance to drop from Banished Knight enemies.",
    "sourceTitle": "Banished Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Greaves",
    "verified": true
  },
  "armor:201000": {
    "kind": "armor",
    "itemId": 201000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Banished 剑士 Helm (Altered) has a 3.00% 有概率从 Banished 剑士s that wear it.Cannot be 通过...获得 altering a Banished 剑士 Helm.",
    "details": "The Banished Knight Helm (Altered) has a 3.00% chance to drop from Banished Knights that wear it.Cannot be obtained by altering a Banished Knight Helm.",
    "sourceTitle": "Banished Knight Helm (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Helm_(Altered)",
    "verified": true
  },
  "armor:201100": {
    "kind": "armor",
    "itemId": 201100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：3.00% 有概率从 Banished 剑士 enemies that wear it.Cannot be 通过...获得 altering Banished 剑士 防具.",
    "details": "3.00% chance to drop from Banished Knight enemies that wear it.Cannot be obtained by altering Banished Knight Armor.",
    "sourceTitle": "Banished Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:210000": {
    "kind": "armor",
    "itemId": 210000,
    "sourceKind": "shop",
    "summary": "商店购买：向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 4,000 卢恩 后 defeating “铁棘”艾隆梅尔 ，地点： 日荫城.",
    "details": "Purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 4,000 runes after defeating Elemer of the Briar at The Shaded Castle.",
    "sourceTitle": "Briar Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Briar_Helm",
    "verified": true
  },
  "armor:210100": {
    "kind": "armor",
    "itemId": 210100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 ，用于 6,000 卢恩 后 defeating “铁棘”艾隆梅尔.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold for 6,000 runes after defeating Elemer of the Briar.",
    "sourceTitle": "Briar Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Briar_Armor",
    "verified": true
  },
  "armor:210200": {
    "kind": "armor",
    "itemId": 210200,
    "sourceKind": "shop",
    "summary": "商店购买：The Briar Gauntlets 可向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 4,000 卢恩 后 defeating “铁棘”艾隆梅尔 ，地点： the Shaded Castle.",
    "details": "The Briar Gauntlets can be purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 4,000 runes after defeating Elemer of the Briar at the Shaded Castle.",
    "sourceTitle": "Briar Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Briar_Gauntlets",
    "verified": true
  },
  "armor:210300": {
    "kind": "armor",
    "itemId": 210300,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 ，用于 4,000 卢恩 后 defeating “铁棘”艾隆梅尔.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold for 4,000 runes after defeating Elemer of the Briar.",
    "sourceTitle": "Briar Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Briar_Greaves",
    "verified": true
  },
  "armor:211100": {
    "kind": "armor",
    "itemId": 211100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought unaltered from “解指”恩雅 ，地点： 圆桌厅堂 ，用于 6,000 卢恩 once “铁棘”艾隆梅尔 has been defeated. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can be bought unaltered from Finger Reader Enia at Roundtable Hold for 6,000 runes once Elemer of the Briar has been defeated. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Briar Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Briar_Armor_(Altered)",
    "verified": true
  },
  "armor:220000": {
    "kind": "armor",
    "itemId": 220000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Page enemies.",
    "details": "Chance to drop from Page enemies.",
    "sourceTitle": "Page Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Page_Hood",
    "verified": true
  },
  "armor:220100": {
    "kind": "armor",
    "itemId": 220100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Page enemies.",
    "details": "Chance to drop from Page enemies.",
    "sourceTitle": "Page Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Page_Garb",
    "verified": true
  },
  "armor:220300": {
    "kind": "armor",
    "itemId": 220300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Page enemies.",
    "details": "Chance to drop from Page enemies.",
    "sourceTitle": "Page Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Page_Trousers",
    "verified": true
  },
  "armor:221100": {
    "kind": "armor",
    "itemId": 221100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from Page enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Page enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Page Garb (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Page_Garb_(Altered)",
    "verified": true
  },
  "armor:230000": {
    "kind": "armor",
    "itemId": 230000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received upon defeating the 黑夜骑兵 duo boss in 化圣雪原.",
    "details": "Received upon defeating the Night's Cavalry duo boss in Consecrated Snowfield.",
    "sourceTitle": "Night's Cavalry Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night's_Cavalry_Helm",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 黑夜骑兵 duo boss in 化圣雪原.",
    "details": "Received upon defeating the Night's Cavalry duo boss in Consecrated Snowfield.",
    "sourceTitle": "Night's Cavalry Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night's_Cavalry_Armor",
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
    "summary": "敌人 / 首领掉落：The 黑夜骑兵 Gauntlets are 通过...获得 defeating the 黑夜骑兵 duo ，位于 化圣雪原.",
    "details": "The Night's Cavalry Gauntlets are obtained by defeating the Night's Cavalry duo in the Consecrated Snowfield.",
    "sourceTitle": "Night's Cavalry Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night's_Cavalry_Gauntlets",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 黑夜骑兵 duo boss in 化圣雪原.",
    "details": "Received upon defeating the Night's Cavalry duo boss in Consecrated Snowfield.",
    "sourceTitle": "Night's Cavalry Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night's_Cavalry_Greaves",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received unaltered upon defeating the 黑夜骑兵 duo boss in 化圣雪原. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Received unaltered upon defeating the Night's Cavalry duo boss in Consecrated Snowfield. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Night's Cavalry Helm (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night's_Cavalry_Helm_(Altered)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received unaltered upon defeating the 黑夜骑兵 duo boss in 化圣雪原. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Received unaltered upon defeating the Night's Cavalry duo boss in Consecrated Snowfield. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Night's Cavalry Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night's_Cavalry_Armor_(Altered)",
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
    "summary": "敌人 / 首领掉落：The Blue Silver Mail Hood has a 2.00% 有概率从 Albinauric Archers.",
    "details": "The Blue Silver Mail Hood has a 2.00% chance to drop from Albinauric Archers.",
    "sourceTitle": "Blue Silver Mail Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Silver_Mail_Hood",
    "verified": true
  },
  "armor:240100": {
    "kind": "armor",
    "itemId": 240100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Albinauric Wolfback Archer enemies.",
    "details": "Chance to drop from Albinauric Wolfback Archer enemies.",
    "sourceTitle": "Blue Silver Mail Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Silver_Mail_Armor",
    "verified": true
  },
  "armor:240200": {
    "kind": "armor",
    "itemId": 240200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Blue Silver Bracelets have a 2.00% 有概率从 Albinauric Archer enemies.",
    "details": "The Blue Silver Bracelets have a 2.00% chance to drop from Albinauric Archer enemies.",
    "sourceTitle": "Blue Silver Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Silver_Bracelets",
    "verified": true
  },
  "armor:240300": {
    "kind": "armor",
    "itemId": 240300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：?.??% 有概率从 Albinauric Wolfback Archer enemies.",
    "details": "?.??% chance to drop from Albinauric Wolfback Archer enemies.",
    "sourceTitle": "Blue Silver Mail Skirt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Silver_Mail_Skirt",
    "verified": true
  },
  "armor:241100": {
    "kind": "armor",
    "itemId": 241100,
    "sourceKind": "other",
    "summary": "其他来源：防具 Adjustment of Blue Silver Mail 防具",
    "details": "Armor Adjustment of Blue Silver Mail Armor",
    "sourceTitle": "Blue Silver Mail Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Silver_Mail_Armor_(Altered)",
    "verified": true
  },
  "armor:250000": {
    "kind": "armor",
    "itemId": 250000,
    "sourceKind": "shop",
    "summary": "商店购买：位于 behind breakable decor 后 the 弃置恶兆的大教堂 赐福 located in 王城罗德尔. Requires using a 流浪民族的商人 enemy to destroy it using his frenzied flame attack.",
    "details": "Found behind breakable decor after the Cathedral of the Forsaken site of grace located in Leyndell, Royal Capital. Requires using a Nomadic Merchant enemy to destroy it using his frenzied flame attack.",
    "sourceTitle": "Nomadic Merchant's Chapeau",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nomadic_Merchant's_Chapeau",
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
    "summary": "商店购买：位于 behind breakable decor 后 the 弃置恶兆的大教堂 赐福 located in 王城罗德尔. Requires using a 流浪民族的商人 enemy to destroy it using his frenzied flame attack.",
    "details": "Found behind breakable decor after the Cathedral of the Forsaken site of grace located in Leyndell, Royal Capital. Requires using a Nomadic Merchant enemy to destroy it using his frenzied flame attack.",
    "sourceTitle": "Nomadic Merchant's Finery",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nomadic_Merchant's_Finery",
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
    "sourceKind": "shop",
    "summary": "商店购买：位于 behind breakable decor 后 the 弃置恶兆的大教堂 赐福 located in 王城罗德尔. Requires using a 流浪民族的商人 enemy to destroy it using his frenzied flame attack.",
    "details": "Found behind breakable decor after the Cathedral of the Forsaken site of grace located in Leyndell, Royal Capital. Requires using a Nomadic Merchant enemy to destroy it using his frenzied flame attack.",
    "sourceTitle": "Nomadic Merchant's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nomadic_Merchant's_Trousers",
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
    "summary": "地图拾取 / 宝箱：地点：癫火封印；The unaltered variant is hidden behind a tent ，位于 upper section of the 癫火封印. The item can only be accessed 后 a Nomad inadvertently destroys it with Frenzied Flame 祷告.",
    "details": "Location: Frenzied Flame Proscription；The unaltered variant is hidden behind a tent in the upper section of the Frenzied Flame Proscription. The item can only be accessed after a Nomad inadvertently destroys it with Frenzied Flame Incantations.",
    "sourceTitle": "Nomadic Merchant's Finery (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nomadic_Merchant's_Finery_(Altered)",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 龙装大树守卫 enemy right 后 the 大桥侧边 赐福 in 逐渐崩毁的法姆·亚兹拉.",
    "details": "Received upon defeating the Draconic Tree Sentinel enemy right after the Beside the Great Bridge site of grace in Crumbling Farum Azula.",
    "sourceTitle": "Malformed Dragon Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malformed_Dragon_Helm",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 龙装大树守卫 enemy right 后 the 大桥侧边 赐福 in 逐渐崩毁的法姆·亚兹拉.",
    "details": "Received upon defeating the Draconic Tree Sentinel enemy right after the Beside the Great Bridge site of grace in Crumbling Farum Azula.",
    "sourceTitle": "Malformed Dragon Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malformed_Dragon_Armor",
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
    "summary": "敌人 / 首领掉落：The Malformed Dragon Gauntlets are 通过...获得 defeating the 龙装大树守卫 附近 the 赐福 大桥侧边 赐福 in 逐渐崩毁的法姆·亚兹拉.",
    "details": "The Malformed Dragon Gauntlets are obtained by defeating the Draconic Tree Sentinel near the 赐福 Beside the Great Bridge site of grace in Crumbling Farum Azula.",
    "sourceTitle": "Malformed Dragon Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malformed_Dragon_Gauntlets",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 龙装大树守卫 enemy right 后 the 大桥侧边 赐福 in 逐渐崩毁的法姆·亚兹拉.",
    "details": "Received upon defeating the Draconic Tree Sentinel enemy right after the Beside the Great Bridge site of grace in Crumbling Farum Azula.",
    "sourceTitle": "Malformed Dragon Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malformed_Dragon_Greaves",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：地点：亚雷萨英雄墓地；Received upon destroying the Merciless Chariots inside the 亚雷萨英雄墓地 in 亚坛高原.",
    "details": "Location: Auriza Hero's Grave；Received upon destroying the Merciless Chariots inside the Auriza Hero's Grave in Altus Plateau.",
    "sourceTitle": "Tree Sentinel Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tree_Sentinel_Helm",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Received upon destroying the Merciless Chariots patrolling the 亚雷萨英雄墓地, located ，位于 王城外围.",
    "details": "Received upon destroying the Merciless Chariots patrolling the Auriza Hero's Grave, located in the Capital Outskirts.",
    "sourceTitle": "Tree Sentinel Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tree_Sentinel_Armor",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：亚雷萨英雄墓地；The 大树守卫 Gauntlets are obtained upon destroying the Merciless Chariots inside 亚雷萨英雄墓地 ，位于 亚坛高原.",
    "details": "Location: Auriza Hero's Grave；The Tree Sentinel Gauntlets are obtained upon destroying the Merciless Chariots inside Auriza Hero's Grave in the Altus Plateau.",
    "sourceTitle": "Tree Sentinel Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tree_Sentinel_Gauntlets",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Received upon destroying the chariots inside 亚雷萨英雄墓地 in 亚坛高原.",
    "details": "Received upon destroying the chariots inside Auriza Hero's Grave in Altus Plateau.",
    "sourceTitle": "Tree Sentinel Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tree_Sentinel_Greaves",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Received unaltered upon destroying the Merciless Chariots inside 亚雷萨英雄墓地 in 亚坛高原. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Received unaltered upon destroying the Merciless Chariots inside Auriza Hero's Grave in Altus Plateau. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Tree Sentinel Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tree_Sentinel_Armor_(Altered)",
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
    "summary": "商店购买：向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 4,000 卢恩 后 defeating “圣树骑士”罗蕾塔.",
    "details": "Purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 4,000 runes after defeating Loretta, Knight of the Haligtree.",
    "sourceTitle": "Royal Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Knight_Helm",
    "verified": true
  },
  "armor:280100": {
    "kind": "armor",
    "itemId": 280100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 once having defeated “圣树骑士”罗蕾塔.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold once having defeated Loretta, Knight of the Haligtree.",
    "sourceTitle": "Royal Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Knight_Armor",
    "verified": true
  },
  "armor:280200": {
    "kind": "armor",
    "itemId": 280200,
    "sourceKind": "shop",
    "summary": "商店购买：Royal 剑士 Gauntlets 可向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 4,000 卢恩 后 defeating “圣树骑士”罗蕾塔.",
    "details": "Royal Knight Gauntlets can be purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 4,000 runes after defeating Loretta, Knight of the Haligtree.",
    "sourceTitle": "Royal Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Knight_Gauntlets",
    "verified": true
  },
  "armor:280300": {
    "kind": "armor",
    "itemId": 280300,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 once having defeated “圣树骑士”罗蕾塔.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold once having defeated Loretta, Knight of the Haligtree.",
    "sourceTitle": "Royal Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Knight_Greaves",
    "verified": true
  },
  "armor:281100": {
    "kind": "armor",
    "itemId": 281100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought unaltered from “解指”恩雅 ，地点： 圆桌厅堂 once having defeated “圣树骑士”罗蕾塔. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can be bought unaltered from Finger Reader Enia at Roundtable Hold once having defeated Loretta, Knight of the Haligtree. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Royal Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:290000": {
    "kind": "armor",
    "itemId": 290000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 诺克斯修士 enemies.",
    "details": "Chance to drop from Nox Monk enemies.",
    "sourceTitle": "Nox Monk Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Monk_Hood",
    "verified": true
  },
  "armor:290100": {
    "kind": "armor",
    "itemId": 290100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 诺克斯修士 enemies.",
    "details": "Chance to drop from Nox Monk enemies.",
    "sourceTitle": "Nox Monk Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Monk_Armor",
    "verified": true
  },
  "armor:290200": {
    "kind": "armor",
    "itemId": 290200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Nox Bracelets have a 3.00% 有概率从 诺克斯修士, 诺克斯剑士, and Nox 晚上maiden enemies in “永恒之城”诺克隆恩 and “永恒之城”诺克史黛拉.",
    "details": "The Nox Bracelets have a 3.00% chance to drop from Nox Monk, Nox Swordstress, and Nox Nightmaiden enemies in Nokron, Eternal City and Nokstella, Eternal City.",
    "sourceTitle": "Nox Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Bracelets",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Nox Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Greaves",
    "verified": false
  },
  "armor:291000": {
    "kind": "armor",
    "itemId": 291000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from 诺克斯修士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Nox Monk enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Nox Monk Hood (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Monk_Hood_(Altered)",
    "verified": true
  },
  "armor:291100": {
    "kind": "armor",
    "itemId": 291100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from 诺克斯修士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Nox Monk enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Nox Monk Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Monk_Armor_(Altered)",
    "verified": true
  },
  "armor:292000": {
    "kind": "armor",
    "itemId": 292000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 诺克斯剑士 enemies.",
    "details": "Chance to drop from Nox Swordstress enemies.",
    "sourceTitle": "Nox Swordstress Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Swordstress_Crown",
    "verified": true
  },
  "armor:292100": {
    "kind": "armor",
    "itemId": 292100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 诺克斯剑士 enemies.",
    "details": "Chance to drop from Nox Swordstress enemies.",
    "sourceTitle": "Nox Swordstress Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Swordstress_Armor",
    "verified": true
  },
  "armor:293000": {
    "kind": "armor",
    "itemId": 293000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 晚上 Maiden enemies.",
    "details": "Chance to drop from Night Maiden enemies.",
    "sourceTitle": "Night Maiden Twin Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night_Maiden_Twin_Crown",
    "verified": true
  },
  "armor:293100": {
    "kind": "armor",
    "itemId": 293100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Nox 晚上maiden enemies.",
    "details": "Chance to drop from Nox Nightmaiden enemies.",
    "sourceTitle": "Night Maiden Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night_Maiden_Armor",
    "verified": true
  },
  "armor:294000": {
    "kind": "armor",
    "itemId": 294000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from 诺克斯剑士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Nox Swordstress enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Nox Swordstress Crown (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Swordstress_Crown_(Altered)",
    "verified": true
  },
  "armor:294100": {
    "kind": "armor",
    "itemId": 294100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from 诺克斯剑士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Nox Swordstress enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Nox Swordstress Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Swordstress_Armor_(Altered)",
    "verified": true
  },
  "armor:300000": {
    "kind": "armor",
    "itemId": 300000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Great Horned 头盔band has a 1.5% 有概率从 Ancestral Follower 剑士s.",
    "details": "The Great Horned Headband has a 1.5% chance to drop from Ancestral Follower Warriors.",
    "sourceTitle": "Great Horned Headband",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Great_Horned_Headband",
    "verified": true
  },
  "armor:300100": {
    "kind": "armor",
    "itemId": 300100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Fur Raiment has a 1.5% 有概率从 Ancestral Follower 剑士s.",
    "details": "Fur Raiment has a 1.5% chance to drop from Ancestral Follower Warriors.",
    "sourceTitle": "Fur Raiment",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fur_Raiment",
    "verified": true
  },
  "armor:300300": {
    "kind": "armor",
    "itemId": 300300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Fur Leggings have a 1.5% 有概率从 Ancestral Follower 剑士s.",
    "details": "Fur Leggings have a 1.5% chance to drop from Ancestral Follower Warriors.",
    "sourceTitle": "Fur Leggings",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fur_Leggings",
    "verified": true
  },
  "armor:301000": {
    "kind": "armor",
    "itemId": 301000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Shining Horned 头盔band has a 1.5% 有概率从 Ancestral Follower Shamans.",
    "details": "The Shining Horned Headband has a 1.5% chance to drop from Ancestral Follower Shamans.",
    "sourceTitle": "Shining Horned Headband",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shining_Horned_Headband",
    "verified": true
  },
  "armor:301100": {
    "kind": "armor",
    "itemId": 301100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Shaman Furs have a 1.5% 有概率从 Ancestral Follower Shamans.",
    "details": "Shaman Furs have a 1.5% chance to drop from Ancestral Follower Shamans.",
    "sourceTitle": "Shaman Furs",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shaman_Furs",
    "verified": true
  },
  "armor:301300": {
    "kind": "armor",
    "itemId": 301300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Shaman Leggings have a 1.5% 有概率从 Ancestral Follower Shamans.",
    "details": "Shaman Leggings have a 1.5% chance to drop from Ancestral Follower Shamans.",
    "sourceTitle": "Shaman Leggings",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shaman_Leggings",
    "verified": true
  },
  "armor:310000": {
    "kind": "armor",
    "itemId": 310000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Can only be obtained as a 稀有掉落 from 斗士 enemies in 王城罗德尔 and 亚坛高原. Note that you can not farm the duelist enemies in Leyndell 后 defeating Maliketh, as they won't spawn ，地点： the colosseum anymore.",
    "details": "Can only be obtained as a rare drop from Duelist enemies in Leyndell, Royal Capital and Altus Plateau. Note that you can not farm the duelist enemies in Leyndell after defeating Maliketh, as they won't spawn at the colosseum anymore.",
    "sourceTitle": "Duelist Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Duelist_Helm",
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
    "summary": "敌人 / 首领掉落：Can only be obtained as a 稀有掉落 from 斗士-type enemies in 王城罗德尔 and 亚坛高原. Note that you can not farm the duelist enemies in Leyndell 后 defeating Maliketh, they won't spawn ，地点： the colosseum anymore.",
    "details": "Can only be obtained as a rare drop from Duelist-type enemies in Leyndell, Royal Capital and Altus Plateau. Note that you can not farm the duelist enemies in Leyndell after defeating Maliketh, they won't spawn at the colosseum anymore.",
    "sourceTitle": "Gravekeeper Cloak",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravekeeper_Cloak",
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
    "summary": "敌人 / 首领掉落：Can only be obtained as a 稀有掉落 from 斗士-type enemies in 王城罗德尔 and 亚坛高原. Note that you can not farm the duelist enemies in Leyndell 后 defeating Maliketh, they won't spawn ，地点： the colosseum anymore.",
    "details": "Can only be obtained as a rare drop from Duelist-type enemies in Leyndell, Royal Capital and Altus Plateau. Note that you can not farm the duelist enemies in Leyndell after defeating Maliketh, they won't spawn at the colosseum anymore.",
    "sourceTitle": "Duelist Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Duelist_Greaves",
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
    "summary": "敌人 / 首领掉落：Can only be obtained unaltered as a 稀有掉落 from 斗士-type enemies in 王城罗德尔 and 亚坛高原. Note that you can not farm the duelist enemies in Leyndell 后 defeating Maliketh, they won't spawn ，地点： the colosseum anymore. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can only be obtained unaltered as a rare drop from Duelist-type enemies in Leyndell, Royal Capital and Altus Plateau. Note that you can not farm the duelist enemies in Leyndell after defeating Maliketh, they won't spawn at the colosseum anymore. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Gravekeeper Cloak (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravekeeper_Cloak_(Altered)",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 鲜血贵族 (invader), 附近 the white trees northwest of 化圣雪原. He guards a 传送门 that leads to the 蒙格温王朝.",
    "details": "Received upon defeating the Sanguine Noble (invader), near the white trees northwest of Consecrated Snowfield. He guards a Sending Gate that leads to the Mohgwyn Palace.",
    "sourceTitle": "Sanguine Noble Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sanguine_Noble_Hood",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 鲜血贵族 invader, 附近 the white trees ，位于 northwestern 化圣雪原.",
    "details": "Received upon defeating the Sanguine Noble invader, near the white trees in the northwestern Consecrated Snowfield.",
    "sourceTitle": "Sanguine Noble Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sanguine_Noble_Robe",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 鲜血贵族 invader, 附近 the white trees northwest of 化圣雪原.",
    "details": "Received upon defeating the Sanguine Noble invader, near the white trees northwest of Consecrated Snowfield.",
    "sourceTitle": "Sanguine Noble Waistcloth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sanguine_Noble_Waistcloth",
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
    "summary": "敌人 / 首领掉落：有概率从 Erdtree Guardian enemies.",
    "details": "Chance to drop from Erdtree Guardian enemies.",
    "sourceTitle": "Guardian Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Guardian_Mask",
    "verified": true
  },
  "armor:330100": {
    "kind": "armor",
    "itemId": 330100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Erdtree Guardian enemies that wear it, such as the ones in 王城罗德尔. Cannot be unaltered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop from Erdtree Guardian enemies that wear it, such as the ones in Leyndell, Royal Capital. Cannot be unaltered at a site of grace or by Boc.",
    "sourceTitle": "Guardian Garb (Full Bloom)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Guardian_Garb_(Full_Bloom)",
    "verified": true
  },
  "armor:330200": {
    "kind": "armor",
    "itemId": 330200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Guardian Bracers have a 1.50% 有概率从 Erdtree Guardian enemies.",
    "details": "The Guardian Bracers have a 1.50% chance to drop from Erdtree Guardian enemies.",
    "sourceTitle": "Guardian Bracers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Guardian_Bracers",
    "verified": true
  },
  "armor:330300": {
    "kind": "armor",
    "itemId": 330300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Erdtree Guardian enemies.",
    "details": "Chance to drop from Erdtree Guardian enemies.",
    "sourceTitle": "Guardian Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Guardian_Greaves",
    "verified": true
  },
  "armor:331100": {
    "kind": "armor",
    "itemId": 331100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Erdtree Guardian enemies that wear it. Cannot be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop from Erdtree Guardian enemies that wear it. Cannot be altered at a site of grace or by Boc.",
    "sourceTitle": "Guardian Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Guardian_Garb",
    "verified": true
  },
  "armor:340000": {
    "kind": "armor",
    "itemId": 340000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Cleanrot Helm has a 3.0% 有概率从 玛莲妮亚的尊腐骑士 enemies.",
    "details": "The Cleanrot Helm has a 3.0% chance to drop from Cleanrot Knight enemies.",
    "sourceTitle": "Cleanrot Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cleanrot_Helm",
    "verified": true
  },
  "armor:340100": {
    "kind": "armor",
    "itemId": 340100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 玛莲妮亚的尊腐骑士 enemies.",
    "details": "Chance to drop from Cleanrot Knight enemies.",
    "sourceTitle": "Cleanrot Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cleanrot_Armor",
    "verified": true
  },
  "armor:340200": {
    "kind": "armor",
    "itemId": 340200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Cleanrot Gauntlets have a 3.00% 有概率从 玛莲妮亚的尊腐骑士 enemies.",
    "details": "The Cleanrot Gauntlets have a 3.00% chance to drop from Cleanrot Knight enemies.",
    "sourceTitle": "Cleanrot Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cleanrot_Gauntlets",
    "verified": true
  },
  "armor:340300": {
    "kind": "armor",
    "itemId": 340300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 玛莲妮亚的尊腐骑士 enemies.",
    "details": "Chance to drop from Cleanrot Knight enemies.",
    "sourceTitle": "Cleanrot Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cleanrot_Greaves",
    "verified": true
  },
  "armor:341000": {
    "kind": "armor",
    "itemId": 341000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 by altering the Cleanrot Helm ，地点： a 赐福 or through 裁缝师柏克. The Cleanrot Helm has a 3.00% 有概率从 玛莲妮亚的尊腐骑士s.",
    "details": "Obtained by altering the Cleanrot Helm at a Site of Grace or through Boc the Seamster. The Cleanrot Helm has a 3.00% chance to drop from Cleanrot Knights.",
    "sourceTitle": "Cleanrot Helm (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cleanrot_Helm_(Altered)",
    "verified": true
  },
  "armor:341100": {
    "kind": "armor",
    "itemId": 341100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from 玛莲妮亚的尊腐骑士 enemies. It can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Cleanrot Knight enemies. It can be altered at a site of grace or by Boc.",
    "sourceTitle": "Cleanrot Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cleanrot_Armor_(Altered)",
    "verified": true
  },
  "armor:350000": {
    "kind": "armor",
    "itemId": 350000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 火 Monk enemies.",
    "details": "Chance to drop from Fire Monk enemies.",
    "sourceTitle": "Fire Monk Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Monk_Hood",
    "verified": true
  },
  "armor:350100": {
    "kind": "armor",
    "itemId": 350100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 火 Monk enemies.",
    "details": "Chance to drop from Fire Monk enemies.",
    "sourceTitle": "Fire Monk Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Monk_Armor",
    "verified": true
  },
  "armor:350200": {
    "kind": "armor",
    "itemId": 350200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The 火 Monk Gauntlets have a 3.00% 有概率从 火 Monk enemies.",
    "details": "The Fire Monk Gauntlets have a 3.00% chance to drop from Fire Monk enemies.",
    "sourceTitle": "Fire Monk Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Monk_Gauntlets",
    "verified": true
  },
  "armor:350300": {
    "kind": "armor",
    "itemId": 350300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 火 Monk enemies.",
    "details": "Chance to drop from Fire Monk enemies.",
    "sourceTitle": "Fire Monk Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Monk_Greaves",
    "verified": true
  },
  "armor:351000": {
    "kind": "armor",
    "itemId": 351000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Blackflame Monk Hood has a 3.00% 有概率从 Blackflame Monk enemies.",
    "details": "The Blackflame Monk Hood has a 3.00% chance to drop from Blackflame Monk enemies.",
    "sourceTitle": "Blackflame Monk Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blackflame_Monk_Hood",
    "verified": true
  },
  "armor:351100": {
    "kind": "armor",
    "itemId": 351100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Blackflame Monk 防具 has a 3.00% 有概率从 Blackflame Monk enemies.",
    "details": "The Blackflame Monk Armor has a 3.00% chance to drop from Blackflame Monk enemies.",
    "sourceTitle": "Blackflame Monk Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blackflame_Monk_Armor",
    "verified": true
  },
  "armor:351200": {
    "kind": "armor",
    "itemId": 351200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Blackflame Monk Gauntlets have a 3.00% 有概率从 Blackflame Monk enemies.",
    "details": "The Blackflame Monk Gauntlets have a 3.00% chance to drop from Blackflame Monk enemies.",
    "sourceTitle": "Blackflame Monk Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blackflame_Monk_Gauntlets",
    "verified": true
  },
  "armor:351300": {
    "kind": "armor",
    "itemId": 351300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Blackflame Monk Greaves have a 3.00% 有概率从 Blackflame Monk enemies.",
    "details": "The Blackflame Monk Greaves have a 3.00% chance to drop from Blackflame Monk enemies.",
    "sourceTitle": "Blackflame Monk Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blackflame_Monk_Greaves",
    "verified": true
  },
  "armor:360000": {
    "kind": "armor",
    "itemId": 360000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 火 Prelates.",
    "details": "Chance to drop from Fire Prelates.",
    "sourceTitle": "Fire Prelate Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Prelate_Helm",
    "verified": true
  },
  "armor:360100": {
    "kind": "armor",
    "itemId": 360100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： 火 Prelates.",
    "details": "Dropped by Fire Prelates.",
    "sourceTitle": "Fire Prelate Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Prelate_Armor",
    "verified": true
  },
  "armor:360200": {
    "kind": "armor",
    "itemId": 360200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The 火 Prelate Gauntlets have a 2.00% 有概率从 火 Prelate enemies.",
    "details": "The Fire Prelate Gauntlets have a 2.00% chance to drop from Fire Prelate enemies.",
    "sourceTitle": "Fire Prelate Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Prelate_Gauntlets",
    "verified": true
  },
  "armor:360300": {
    "kind": "armor",
    "itemId": 360300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Random 拾取：；火 Prelates have a 5.00% chance to drop 火 Prelate Greaves.",
    "details": "Random Loot:；Fire Prelates have a 5.00% chance to drop Fire Prelate Greaves.",
    "sourceTitle": "Fire Prelate Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Prelate_Greaves",
    "verified": true
  },
  "armor:361100": {
    "kind": "armor",
    "itemId": 361100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： the 火 Prelate in 莱多要塞. Can be altered ，地点： a 赐福 or by 裁缝师柏克.",
    "details": "Dropped by the Fire Prelate in Fort Laiedd. Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Fire Prelate Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Prelate_Armor_(Altered)",
    "verified": true
  },
  "armor:370000": {
    "kind": "armor",
    "itemId": 370000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 the Noble Sorcerers that wear it. Two can be 位于 the vicinity of the 赐福 亚基尔湖南方 赐福. One to the east up the hill and one along the road to the north. Allowing the Kaiden Sellsword to pass while heading to both groups will allow the Tarnished to kill them uncontested.",
    "details": "Chance to drop from the Noble Sorcerers that wear it. Two can be found in the vicinity of the 赐福 Agheel Lake South Site of Grace. One to the east up the hill and one along the road to the north. Allowing the Kaiden Sellsword to pass while heading to both groups will allow the Tarnished to kill them uncontested.",
    "sourceTitle": "Aristocrat Headband",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aristocrat_Headband",
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
    "summary": "敌人 / 首领掉落：有概率从 Wandering Nobles that wear it, such as the Sorcerer type. Two Sorcerer Wandering Nobles can be 位于 to the east and north of the 亚基尔湖南方 赐福.",
    "details": "Chance to drop from Wandering Nobles that wear it, such as the Sorcerer type. Two Sorcerer Wandering Nobles can be found to the east and north of the Agheel Lake South Site of Grace.",
    "sourceTitle": "Aristocrat Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aristocrat_Garb",
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
    "summary": "敌人 / 首领掉落：有概率从 Wandering Noble enemies that wear it. The Sorcerer variant and the variant that carries the torch or the Noble's Slender Sword all wear them.",
    "details": "Chance to drop from Wandering Noble enemies that wear it. The Sorcerer variant and the variant that carries the torch or the Noble's Slender Sword all wear them.",
    "sourceTitle": "Aristocrat Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aristocrat_Boots",
    "verified": true
  },
  "armor:371100": {
    "kind": "armor",
    "itemId": 371100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 the Wandering Noble enemies that wear it.",
    "details": "Chance to drop from the Wandering Noble enemies that wear it.",
    "sourceTitle": "Aristocrat Garb (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aristocrat_Garb_(Altered)",
    "verified": true
  },
  "armor:380000": {
    "kind": "armor",
    "itemId": 380000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The 权贵长相 Hat has a 1.50% 有概率从 Wandering Nobles that wear it. Two can be 位于 following a torch bearer immediately north of the 赐福 雾林边缘 赐福 in east 宁姆格福.",
    "details": "The Aristocrat Hat has a 1.50% chance to drop from Wandering Nobles that wear it. Two can be found following a torch bearer immediately north of the 赐福 Mistwood Outskirts Site of Grace in east Limgrave.",
    "sourceTitle": "Aristocrat Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aristocrat_Hat",
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
    "summary": "敌人 / 首领掉落：有概率从 Wandering Noble enemies that wear it. There are two immediately north of the 雾林 Ouksirts 赐福一览, following a torch bearer.",
    "details": "Chance to drop from Wandering Noble enemies that wear it. There are two immediately north of the Mistwood Ouksirts Sites of Grace, following a torch bearer.",
    "sourceTitle": "Aristocrat Coat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aristocrat_Coat",
    "verified": true
  },
  "armor:390000": {
    "kind": "armor",
    "itemId": 390000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Old 权贵长相 Cowl has a 1.50% 有概率从 the Wandering Noble wearing it. Two can be 位于 the vicinity of the 赐福 亚基尔湖南方 赐福 in 宁姆格福. One walks up the hill to the east, while the other travels north along the road carrying a large banner and bearing a horn. Allowing the Kaiden Sellsword to pass will allow the The Tarnished to kill the nobles uncontested.",
    "details": "The Old Aristocrat Cowl has a 1.50% chance to drop from the Wandering Noble wearing it. Two can be found in the vicinity of the 赐福 Agheel Lake South Site of Grace in Limgrave. One walks up the hill to the east, while the other travels north along the road carrying a large banner and bearing a horn. Allowing the Kaiden Sellsword to pass will allow the The Tarnished to kill the nobles uncontested.",
    "sourceTitle": "Old Aristocrat Cowl",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Old_Aristocrat_Cowl",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the Wandering Noble wearing the cowl, walking with a large banner and bearing a horn. There are two ，位于 vicinity of the 亚基尔湖南方 赐福. One will be up the hill to the east, and the other will be north along the road. Allowing the Kaiden Sellsword to pass will allow the Tarnished to kill the noble uncontested.",
    "details": "Dropped by the Wandering Noble wearing the cowl, walking with a large banner and bearing a horn. There are two in the vicinity of the Agheel Lake South Site of Grace. One will be up the hill to the east, and the other will be north along the road. Allowing the Kaiden Sellsword to pass will allow the Tarnished to kill the noble uncontested.",
    "sourceTitle": "Old Aristocrat Gown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Old_Aristocrat_Gown",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： Wandering Nobles wearing a cowl, walking with a large banner and bearing a horn. There are two ，位于 vicinity of the 亚基尔湖南方 赐福. One will be up the hill to the east, and the other will be north along the road. Allowing the Kaiden Sellsword to pass will allow the Tarnished to kill the noble uncontested.",
    "details": "Dropped by Wandering Nobles wearing a cowl, walking with a large banner and bearing a horn. There are two in the vicinity of the Agheel Lake South Site of Grace. One will be up the hill to the east, and the other will be north along the road. Allowing the Kaiden Sellsword to pass will allow the Tarnished to kill the noble uncontested.",
    "sourceTitle": "Old Aristocrat Shoes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Old_Aristocrat_Shoes",
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
    "summary": "敌人 / 首领掉落：The Vulgar Militia Helm is a random drop (1.50%) from Vulgar Militia enemies encountered throughout the Lands Between.",
    "details": "The Vulgar Militia Helm is a random drop (1.50%) from Vulgar Militia enemies encountered throughout the Lands Between.",
    "sourceTitle": "Vulgar Militia Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vulgar_Militia_Helm",
    "verified": true
  },
  "armor:420100": {
    "kind": "armor",
    "itemId": 420100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Vulgar Militia 防具 is a random drop (1.50%) from Vulgar Militia enemies encountered throughout the Lands Between.",
    "details": "The Vulgar Militia Armor is a random drop (1.50%) from Vulgar Militia enemies encountered throughout the Lands Between.",
    "sourceTitle": "Vulgar Militia Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vulgar_Militia_Armor",
    "verified": true
  },
  "armor:420200": {
    "kind": "armor",
    "itemId": 420200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Vulgar Militia Gauntlets have a 1.50% 有概率从 Vulgar Militia enemies encountered throughout the Lands Between.",
    "details": "The Vulgar Militia Gauntlets have a 1.50% chance to drop from Vulgar Militia enemies encountered throughout the Lands Between.",
    "sourceTitle": "Vulgar Militia Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vulgar_Militia_Gauntlets",
    "verified": true
  },
  "armor:420300": {
    "kind": "armor",
    "itemId": 420300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Vulgar Militia Greaves are a random drop (1.50%) from Vulgar Militia enemies encountered throughout the Lands Between.",
    "details": "The Vulgar Militia Greaves are a random drop (1.50%) from Vulgar Militia enemies encountered throughout the Lands Between.",
    "sourceTitle": "Vulgar Militia Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vulgar_Militia_Greaves",
    "verified": true
  },
  "armor:430000": {
    "kind": "armor",
    "itemId": 430000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：留水洞窟；The Sage Hood is 位于 on a body inside 留水洞窟, located in 湖之利耶尼亚.",
    "details": "Loot: Stillwater Cave；The Sage Hood is found on a body inside Stillwater Cave, located in Liurnia of the Lakes.",
    "sourceTitle": "Sage Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sage_Hood",
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
    "summary": "地图拾取 / 宝箱：Can be 位于 on a body inside 留水洞窟 located in 湖之利耶尼亚.",
    "details": "Can be found on a body inside Stillwater Cave located in Liurnia of the Lakes.",
    "sourceTitle": "Sage Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sage_Robe",
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
    "summary": "地图拾取 / 宝箱：Can be 位于 on a body inside 留水洞窟 located in 湖之利耶尼亚.",
    "details": "Can be found on a body inside Stillwater Cave located in Liurnia of the Lakes.",
    "sourceTitle": "Sage Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sage_Trousers",
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
    "summary": "敌人 / 首领掉落：有概率从 发狂南瓜头士兵 enemies.",
    "details": "Chance to drop from Mad Pumpkin Head enemies.",
    "sourceTitle": "Pumpkin Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pumpkin_Helm",
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
    "summary": "商店购买：地点：圆桌厅堂；The Elden Lord Crown is 向 “解指”恩雅 ，用于 卢恩 12,000 卢恩 后 defeating 战士荷莱·露.",
    "details": "Location: Roundtable Hold；The Elden Lord Crown is purchased from Finger Reader Enia for 卢恩 12,000 runes after defeating Hoarah Loux, Warrior.",
    "sourceTitle": "Elden Lord Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Elden_Lord_Crown",
    "verified": true
  },
  "armor:460100": {
    "kind": "armor",
    "itemId": 460100,
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；The Elden Lord 防具 is 向 “解指”恩雅 ，用于 卢恩 20,000 卢恩 后 defeating 战士荷莱·露.",
    "details": "Location: Roundtable Hold；The Elden Lord Armor is purchased from Finger Reader Enia for 卢恩 20,000 runes after defeating Hoarah Loux, Warrior.",
    "sourceTitle": "Elden Lord Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Elden_Lord_Armor",
    "verified": true
  },
  "armor:460200": {
    "kind": "armor",
    "itemId": 460200,
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；The Elden Lord Bracers are 向 “解指”恩雅 ，用于 卢恩 12,000 卢恩 后 defeating 战士荷莱·露.",
    "details": "Location: Roundtable Hold；The Elden Lord Bracers are purchased from Finger Reader Enia for 卢恩 12,000 runes after defeating Hoarah Loux, Warrior.",
    "sourceTitle": "Elden Lord Bracers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Elden_Lord_Bracers",
    "verified": true
  },
  "armor:460300": {
    "kind": "armor",
    "itemId": 460300,
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；The Elden Lord Greaves is 向 “解指”恩雅 ，用于 卢恩 12,000 卢恩 后 defeating 战士荷莱·露.",
    "details": "Location: Roundtable Hold；The Elden Lord Greaves is purchased from Finger Reader Enia for 卢恩 12,000 runes after defeating Hoarah Loux, Warrior.",
    "sourceTitle": "Elden Lord Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Elden_Lord_Greaves",
    "verified": true
  },
  "armor:461100": {
    "kind": "armor",
    "itemId": 461100,
    "sourceKind": "other",
    "summary": "其他来源：The Elden Lord 防具 (Altered) is acquired by performing 防具 Adjustment on the Elden Lord 防具.",
    "details": "The Elden Lord Armor (Altered) is acquired by performing Armor Adjustment on the Elden Lord Armor.",
    "sourceTitle": "Elden Lord Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Elden_Lord_Armor_(Altered)",
    "verified": true
  },
  "armor:470000": {
    "kind": "armor",
    "itemId": 470000,
    "sourceKind": "shop",
    "summary": "商店购买：向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 8,000 卢恩 后 defeating “碎星”拉塔恩.",
    "details": "Purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 8,000 runes after defeating Starscourge Radahn.",
    "sourceTitle": "Radahn's Redmane Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn's_Redmane_Helm",
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
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating “碎星”拉塔恩.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold after defeating Starscourge Radahn.",
    "sourceTitle": "Radahn's Lion Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn's_Lion_Armor",
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
    "summary": "商店购买：Radahn's Gauntlets 可向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 8,000 卢恩 后 defeating “碎星”拉塔恩.",
    "details": "Radahn's Gauntlets can be purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 8,000 runes after defeating Starscourge Radahn.",
    "sourceTitle": "Radahn's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn's_Gauntlets",
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
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating “碎星”拉塔恩.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold after defeating Starscourge Radahn.",
    "sourceTitle": "Radahn's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn's_Greaves",
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
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought unaltered from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating “碎星”拉塔恩. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can be bought unaltered from Finger Reader Enia at Roundtable Hold after defeating Starscourge Radahn. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Radahn's Lion Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn's_Lion_Armor_(Altered)",
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
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating “鲜血君王”蒙格.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold after defeating Mohg, Lord of Blood.",
    "sourceTitle": "Lord of Blood's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lord_of_Blood's_Robe",
    "verified": true
  },
  "armor:481100": {
    "kind": "armor",
    "itemId": 481100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought unaltered from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating “鲜血君王”蒙格. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can be bought unaltered from Finger Reader Enia at Roundtable Hold after defeating Mohg, Lord of Blood. Can be altered at a Site of Grace or by Boc.",
    "sourceTitle": "Lord of Blood's Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lord_of_Blood's_Robe_(Altered)",
    "verified": true
  },
  "armor:510000": {
    "kind": "armor",
    "itemId": 510000,
    "sourceKind": "shop",
    "summary": "商店购买：向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 7,000 卢恩 后 defeating “满月女王”蕾娜菈.",
    "details": "Purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 7,000 runes after defeating Rennala, Queen of the Full Moon.",
    "sourceTitle": "Queen's Crescent Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Queen's_Crescent_Crown",
    "verified": true
  },
  "armor:510100": {
    "kind": "armor",
    "itemId": 510100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating “满月女王”蕾娜菈.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold after defeating Rennala, Queen of the Full Moon.",
    "sourceTitle": "Queen's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Queen's_Robe",
    "verified": true
  },
  "armor:510200": {
    "kind": "armor",
    "itemId": 510200,
    "sourceKind": "shop",
    "summary": "商店购买：The Queen's Bracelets 可向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 7,000 卢恩 后 defeating “满月女王”蕾娜菈.",
    "details": "The Queen's Bracelets can be purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 7,000 runes after defeating Rennala, Queen of the Full Moon.",
    "sourceTitle": "Queen's Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Queen's_Bracelets",
    "verified": true
  },
  "armor:510300": {
    "kind": "armor",
    "itemId": 510300,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating “满月女王”蕾娜菈.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold after defeating Rennala, Queen of the Full Moon.",
    "sourceTitle": "Queen's Leggings",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Queen's_Leggings",
    "verified": true
  },
  "armor:520000": {
    "kind": "armor",
    "itemId": 520000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received alongside with the rest of the set upon defeating the 神皮使徒 boss ，地点： the bottom of the 盖利德神授塔.",
    "details": "Received alongside with the rest of the set upon defeating the Godskin Apostle boss at the bottom of the Divine Tower of Caelid.",
    "sourceTitle": "Godskin Apostle Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Apostle_Hood",
    "verified": true
  },
  "armor:520100": {
    "kind": "armor",
    "itemId": 520100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received alongside with the rest of the set upon defeating the 神皮使徒 boss ，地点： the bottom of the 盖利德神授塔.",
    "details": "Received alongside with the rest of the set upon defeating the Godskin Apostle boss at the bottom of the Divine Tower of Caelid.",
    "sourceTitle": "Godskin Apostle Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Apostle_Robe",
    "verified": true
  },
  "armor:520200": {
    "kind": "armor",
    "itemId": 520200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received alongside with the rest of the set upon defeating the 神皮使徒 boss ，地点： the bottom of the 盖利德神授塔.",
    "details": "Received alongside with the rest of the set upon defeating the Godskin Apostle boss at the bottom of the Divine Tower of Caelid.",
    "sourceTitle": "Godskin Apostle Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Apostle_Bracelets",
    "verified": true
  },
  "armor:520300": {
    "kind": "armor",
    "itemId": 520300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received alongside with the rest of the set upon defeating the 神皮使徒 boss ，地点： the bottom of the 盖利德神授塔.",
    "details": "Received alongside with the rest of the set upon defeating the Godskin Apostle boss at the bottom of the Divine Tower of Caelid.",
    "sourceTitle": "Godskin Apostle Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Apostle_Trousers",
    "verified": true
  },
  "armor:530000": {
    "kind": "armor",
    "itemId": 530000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Part of the 神皮贵族 Set, acquired 后 defeating the 神皮贵族 ，地点： the 利耶尼亚神授塔（桥上）.",
    "details": "Part of the Godskin Noble Set, acquired after defeating the Godskin Noble at the Liurnia Tower Bridge.",
    "sourceTitle": "Godskin Noble Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Noble_Hood",
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
    "summary": "敌人 / 首领掉落：地点：利耶尼亚神授塔；The 神皮贵族 Robe is 通过...获得 defeating the 神皮贵族 on the 赐福 利耶尼亚神授塔（桥上）, located between the 卡利亚书斋 and the 利耶尼亚神授塔.",
    "details": "Location: Divine Tower of Liurnia；The Godskin Noble Robe is obtained by defeating the Godskin Noble on the 赐福 Liurnia Tower Bridge, located between the Carian Study Hall and the Divine Tower of Liurnia.",
    "sourceTitle": "Godskin Noble Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Noble_Robe",
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
    "summary": "敌人 / 首领掉落：Part of the 神皮贵族 Set, acquired 后 defeating the 神皮贵族 ，地点： the 利耶尼亚神授塔（桥上）.",
    "details": "Part of the Godskin Noble Set, acquired after defeating the Godskin Noble at the Liurnia Tower Bridge.",
    "sourceTitle": "Godskin Noble Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Noble_Bracelets",
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
    "summary": "敌人 / 首领掉落：Part of the 神皮贵族 Set, acquired 后 defeating the 神皮贵族 ，地点： the 利耶尼亚神授塔（桥上）.",
    "details": "Part of the Godskin Noble Set, acquired after defeating the Godskin Noble at the Liurnia Tower Bridge.",
    "sourceTitle": "Godskin Noble Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Noble_Trousers",
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
    "summary": "敌人 / 首领掉落：有概率从 Depraved Perfumer enemies.",
    "details": "Chance to drop from Depraved Perfumer enemies.",
    "sourceTitle": "Depraved Perfumer Headscarf",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Depraved_Perfumer_Headscarf",
    "verified": true
  },
  "armor:540100": {
    "kind": "armor",
    "itemId": 540100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Depraved Perfumer enemies.",
    "details": "Chance to drop from Depraved Perfumer enemies.",
    "sourceTitle": "Depraved Perfumer Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Depraved_Perfumer_Robe",
    "verified": true
  },
  "armor:540200": {
    "kind": "armor",
    "itemId": 540200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Depraved Perfumer Gloves have a 3.00% 有概率从 Depraved Perfumer enemies.",
    "details": "The Depraved Perfumer Gloves have a 3.00% chance to drop from Depraved Perfumer enemies.",
    "sourceTitle": "Depraved Perfumer Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Depraved_Perfumer_Gloves",
    "verified": true
  },
  "armor:540300": {
    "kind": "armor",
    "itemId": 540300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Depraved Perfumer enemies.",
    "details": "Chance to drop from Depraved Perfumer enemies.",
    "sourceTitle": "Depraved Perfumer Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Depraved_Perfumer_Trousers",
    "verified": true
  },
  "armor:541100": {
    "kind": "armor",
    "itemId": 541100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from Depraved Perfumer enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Depraved Perfumer enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Depraved Perfumer Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Depraved_Perfumer_Robe_(Altered)",
    "verified": true
  },
  "armor:570000": {
    "kind": "armor",
    "itemId": 570000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：亚雷萨英雄墓地；The Crucible Axe Helm is received upon defeating the “熔炉骑士”奥陶琵斯 and 熔炉骑士 duo boss within 亚雷萨英雄墓地 ，位于 王城外围.",
    "details": "Location: Auriza Hero's Grave；The Crucible Axe Helm is received upon defeating the Crucible Knight Ordovis and Crucible Knight duo boss within Auriza Hero's Grave in the Capital Outskirts.",
    "sourceTitle": "Crucible Axe Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Axe_Helm",
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
    "summary": "敌人 / 首领掉落：击杀后获得 defeating the “熔炉骑士”奥陶琵斯 & 熔炉骑士 duo boss inside 亚雷萨英雄墓地, located on the 亚坛高原.",
    "details": "Received after defeating the Crucible Knight Ordovis & Crucible Knight duo boss inside Auriza Hero's Grave, located on the Altus Plateau.",
    "sourceTitle": "Crucible Axe Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Axe_Armor",
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
    "summary": "敌人 / 首领掉落：地点：亚雷萨英雄墓地；The Crucible Gauntlets are 通过...获得 defeating “熔炉骑士”奥陶琵斯 and the 熔炉骑士 in 亚雷萨英雄墓地 ，位于 亚坛高原.",
    "details": "Location: Auriza Hero's Grave；The Crucible Gauntlets are obtained by defeating Crucible Knight Ordovis and the Crucible Knight in Auriza Hero's Grave in the Altus Plateau.The Crucible Gauntlets are also found in a chest behind Crucible Knight Siluria in the Deeproot Depths.",
    "sourceTitle": "Crucible Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Gauntlets",
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
    "summary": "敌人 / 首领掉落：击杀后获得 defeating the “熔炉骑士”奥陶琵斯 & 熔炉骑士 duo boss inside 亚雷萨英雄墓地, located on the 亚坛高原.位于 inside a 宝箱 behind the “熔炉骑士”志留亚 boss in 深根底层.",
    "details": "Received after defeating the Crucible Knight Ordovis & Crucible Knight duo boss inside Auriza Hero's Grave, located on the Altus Plateau.Found inside a chest behind the Crucible Knight Siluria boss in Deeproot Depths.",
    "sourceTitle": "Crucible Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Greaves",
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
    "summary": "敌人 / 首领掉落：The Crucible Tree Helm is 位于 inside a 宝箱 behind the “熔炉骑士”志留亚 boss ，位于 深根底层.",
    "details": "The Crucible Tree Helm is found inside a chest behind the Crucible Knight Siluria boss in the Deeproot Depths.",
    "sourceTitle": "Crucible Tree Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Tree_Helm",
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
    "summary": "敌人 / 首领掉落：位于 inside a 宝箱 behind the “熔炉骑士”志留亚 boss in 深根底层.",
    "details": "Found inside a chest behind the Crucible Knight Siluria boss in Deeproot Depths.",
    "sourceTitle": "Crucible Tree Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Tree_Armor",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received as Crucible Axe 防具 后 defeating the “熔炉骑士”奥陶琵斯 & 熔炉骑士 duo boss inside 亚雷萨英雄墓地, located on the 亚坛高原. Crucible Axe 防具 be altered ，地点： a 赐福 or by Boc.",
    "details": "Received as Crucible Axe Armor after defeating the Crucible Knight Ordovis & Crucible Knight duo boss inside Auriza Hero's Grave, located on the Altus Plateau. Crucible Axe Armor be altered at a site of grace or by Boc.",
    "sourceTitle": "Crucible Axe Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Axe_Armor_(Altered)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received as Crucible Tree 防具 后 looting a 宝箱 behind the “熔炉骑士”志留亚 boss ，位于 深根底层. Crucible Tree 防具 be altered ，地点： a 赐福 or by Boc.",
    "details": "Received as Crucible Tree Armor after looting a chest behind the Crucible Knight Siluria boss in the Deeproot Depths. Crucible Tree Armor be altered at a site of grace or by Boc.",
    "sourceTitle": "Crucible Tree Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Tree_Armor_(Altered)",
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
    "summary": "任务 / 事件奖励：地点：瑟利亚隐藏洞窟；Lusat's Glintstone Crown is obtained upon completing 魔法师瑟濂's 任务线, then returning to the spot where “起源魔法师”卢瑟特 was 位于 the 瑟利亚隐藏洞窟 to loot the Lusat's Set.",
    "details": "Location: Sellia Hideaway；Lusat's Glintstone Crown is obtained upon completing Sorceress Sellen's questline, then returning to the spot where Primeval Sorcerer Lusat was found in the Sellia Hideaway to loot the Lusat's Set.",
    "sourceTitle": "Lusat's Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lusat's_Glintstone_Crown",
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
    "summary": "任务 / 事件奖励：完成 Sellen's 任务线, then return to the spot where you 位于 Lusat ，位于 瑟利亚隐藏洞窟 cave to loot the Lusat armor set.",
    "details": "Complete Sellen's questline, then return to the spot where you found Lusat in the Sellia Hideaway cave to loot the Lusat armor set.",
    "sourceTitle": "Lusat's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lusat's_Robe",
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
    "summary": "任务 / 事件奖励：地点：瑟利亚隐藏洞窟；Lusat's Manchettes are 通过...获得 completing 魔法师瑟濂's 任务线, then returning to the location where Lusat was 位于 瑟利亚隐藏洞窟.",
    "details": "Location: Sellia Hideaway；Lusat's Manchettes are obtained by completing Sorceress Sellen's questline, then returning to the location where Lusat was found in Sellia Hideaway.",
    "sourceTitle": "Lusat's Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lusat's_Manchettes",
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
    "summary": "任务 / 事件奖励：完成 Sellen's 任务线, then return to the spot where you 位于 Lusat ，位于 瑟利亚隐藏洞窟 cave to loot the Lusat armor set.",
    "details": "Complete Sellen's questline, then return to the spot where you found Lusat in the Sellia Hideaway cave to loot the Lusat armor set.",
    "sourceTitle": "Old Sorcerer's Legwraps",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Old_Sorcerer's_Legwraps",
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
    "summary": "任务 / 事件奖励：地点：“起源魔法师”亚兹勒；Azur's Glintstone Crown is obtained upon completing 魔法师瑟濂's 任务线, then returning to the spot where Azur was 位于 on 格密尔火山 to loot Azur's Set.",
    "details": "Location: Primeval Sorcerer Azur；Azur's Glintstone Crown is obtained upon completing Sorceress Sellen's questline, then returning to the spot where Azur was found on Mt. Gelmir to loot Azur's Set.",
    "sourceTitle": "Azur's Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Azur's_Glintstone_Crown",
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
    "summary": "任务 / 事件奖励：完成 Sellen's 任务线, then return to the spot where you 位于 Azur on 格密尔火山 to loot the Azur armor set.",
    "details": "Complete Sellen's questline, then return to the spot where you found Azur on Mt. Gelmir to loot the Azur armor set.",
    "sourceTitle": "Azur's Glintstone Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Azur's_Glintstone_Robe",
    "verified": true
  },
  "armor:581200": {
    "kind": "armor",
    "itemId": 581200,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Azur's Manchettes are 通过...获得 completing 魔法师瑟濂's 任务线, then returning to the location of “起源魔法师”亚兹勒 on 格密尔火山 to loot the Azur's Set.",
    "details": "Azur's Manchettes are obtained by completing Sorceress Sellen's questline, then returning to the location of Primeval Sorcerer Azur on Mt. Gelmir to loot the Azur's Set.",
    "sourceTitle": "Azur's Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Azur's_Manchettes",
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
    "summary": "敌人 / 首领掉落：地点：灰城罗德尔；All-Knowing Helm is 击杀后掉落： “百智爵士”基甸·奥夫尼尔 upon his 击败 ，地点： the 黄金树大教堂.",
    "details": "Location: Leyndell, Ashen Capital；All-Knowing Helm is dropped by Sir Gideon Ofnir, the All-Knowing upon his defeat at the Erdtree Sanctuary.",
    "sourceTitle": "All-Knowing Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/All-Knowing_Helm",
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
    "summary": "敌人 / 首领掉落：击败 “百智爵士”基甸·奥夫尼尔.",
    "details": "Defeat Sir Gideon Ofnir, the All-Knowing.",
    "sourceTitle": "All-Knowing Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/All-Knowing_Armor",
    "verified": true
  },
  "armor:590200": {
    "kind": "armor",
    "itemId": 590200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：灰城罗德尔；The All-Knowing Gauntlets are 通过...获得 defeating “百智爵士”基甸·奥夫尼尔 ，地点： the 黄金树大教堂 in 灰城罗德尔.",
    "details": "Location: Leyndell, Ashen Capital；The All-Knowing Gauntlets are obtained by defeating Sir Gideon Ofnir, the All-Knowing at the Erdtree Sanctuary in Leyndell, Ashen Capital.",
    "sourceTitle": "All-Knowing Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/All-Knowing_Gauntlets",
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
    "summary": "敌人 / 首领掉落：击败 “百智爵士”基甸·奥夫尼尔.",
    "details": "Defeat Sir Gideon Ofnir, the All-Knowing.",
    "sourceTitle": "All-Knowing Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/All-Knowing_Greaves",
    "verified": true
  },
  "armor:591100": {
    "kind": "armor",
    "itemId": 591100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击败 “百智爵士”基甸·奥夫尼尔.",
    "details": "Defeat Sir Gideon Ofnir, the All-Knowing.",
    "sourceTitle": "All-Knowing Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/All-Knowing_Armor_(Altered)",
    "verified": true
  },
  "armor:600000": {
    "kind": "armor",
    "itemId": 600000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Dropped upon killing “狩猎死亡”Ｄ or by finishing their 任务线.",
    "details": "Dropped upon killing D, Hunter of the Dead or by finishing their questline.",
    "sourceTitle": "Twinned Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinned_Helm",
    "verified": true
  },
  "armor:600100": {
    "kind": "armor",
    "itemId": 600100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Dropped upon killing “狩猎死亡”Ｄ or by finishing his 任务线.",
    "details": "Dropped upon killing D, Hunter of the Dead or by finishing his questline.",
    "sourceTitle": "Twinned Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinned_Armor",
    "verified": true
  },
  "armor:600200": {
    "kind": "armor",
    "itemId": 600200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Twinned Gauntlets are 击杀后掉落： “狩猎死亡”Ｄ.Alternatively, they can be 通过...获得 completing the 任务线 of “狩猎死亡”Ｄ and “觐见死亡”Ｄ.",
    "details": "The Twinned Gauntlets are dropped by D, Hunter of the Dead.Alternatively, they can be obtained by completing the questline of D, Hunter of the Dead and D, Beholder of Death.",
    "sourceTitle": "Twinned Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinned_Gauntlets",
    "verified": true
  },
  "armor:600300": {
    "kind": "armor",
    "itemId": 600300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Dropped upon killing “狩猎死亡”Ｄ or by finishing their 任务线.",
    "details": "Dropped upon killing D, Hunter of the Dead or by finishing their questline.",
    "sourceTitle": "Twinned Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinned_Greaves",
    "verified": true
  },
  "armor:601100": {
    "kind": "armor",
    "itemId": 601100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Dropped unaltered upon killing “狩猎死亡”Ｄ or by finishing their 任务线. Can be altered ，地点： a 赐福 or by 裁缝师柏克.",
    "details": "Dropped unaltered upon killing D, Hunter of the Dead or by finishing their questline. Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Twinned Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinned_Armor_(Altered)",
    "verified": true
  },
  "armor:610000": {
    "kind": "armor",
    "itemId": 610000,
    "sourceKind": "other",
    "summary": "其他来源：The Ragged Hat is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "details": "The Ragged Hat is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "sourceTitle": "Ragged Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ragged_Hat",
    "verified": true
  },
  "armor:610100": {
    "kind": "armor",
    "itemId": 610100,
    "sourceKind": "other",
    "summary": "其他来源：The Ragged 防具 is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "details": "The Ragged Armor is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "sourceTitle": "Ragged Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ragged_Armor",
    "verified": true
  },
  "armor:610200": {
    "kind": "armor",
    "itemId": 610200,
    "sourceKind": "other",
    "summary": "其他来源：The Ragged Gloves are cut content and cannot be acquired.",
    "details": "The Ragged Gloves are cut content and cannot be acquired.",
    "sourceTitle": "Ragged Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ragged_Gloves",
    "verified": true
  },
  "armor:610300": {
    "kind": "armor",
    "itemId": 610300,
    "sourceKind": "other",
    "summary": "其他来源：The Ragged Loincloth is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "details": "The Ragged Loincloth is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "sourceTitle": "Ragged Loincloth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ragged_Loincloth",
    "verified": true
  },
  "armor:611000": {
    "kind": "armor",
    "itemId": 611000,
    "sourceKind": "other",
    "summary": "其他来源：The Ragged Hat (Altered) is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "details": "The Ragged Hat (Altered) is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "sourceTitle": "Ragged Hat (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ragged_Hat_(Altered)",
    "verified": true
  },
  "armor:611100": {
    "kind": "armor",
    "itemId": 611100,
    "sourceKind": "other",
    "summary": "其他来源：The Ragged 防具 (Altered) is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "details": "The Ragged Armor (Altered) is unused content and cannot be obtained through normal gameplay. Possessing this item while playing online may result in a permanent ban.",
    "sourceTitle": "Ragged Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ragged_Armor_(Altered)",
    "verified": true
  },
  "armor:620000": {
    "kind": "armor",
    "itemId": 620000,
    "sourceKind": "shop",
    "summary": "商店购买：Starting equipment ，用于 the 预言家 class.向 the 遁世商人 ，地点： the 遁世商人的破屋 ，用于 卢恩 1,000 卢恩.",
    "details": "Starting equipment for the Prophet class.Purchased from the Hermit Merchant at the Hermit Merchant's Shack for 卢恩 1,000 runes.",
    "sourceTitle": "Prophet Blindfold",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prophet_Blindfold",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： 圣职人员柯林 if killed.If Corhyn's 任务线 was not completed, it will appear ，地点： the last spot he was seen 后 defeating “黑剑”玛利喀斯.",
    "details": "Dropped by Brother Corhyn if killed.If Corhyn's questline was not completed, it will appear at the last spot he was seen after defeating Maliketh, the Black Blade.If Corhyn was offered the Tonic of Forgetfulness it will be in his location in the Mountaintops of the Giants.If Corhyn was not offered the Tonic of Forgetfulness, it will appear in Leyndell, Ashen Capital after speaking to him and reloading the area.",
    "sourceTitle": "Corhyn's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Corhyn's_Robe",
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
    "summary": "商店购买：Starting gear ，用于 the 预言家 class.向 遁世商人 (王城外围).",
    "details": "Starting gear for the Prophet class.Purchased from Hermit Merchant (Capital Outskirts).",
    "sourceTitle": "Prophet Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prophet_Trousers",
    "verified": true
  },
  "armor:621100": {
    "kind": "armor",
    "itemId": 621100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 预言家 class (unaltered).Purchased unaltered from 遁世商人 (王城外围).",
    "details": "Starting gear for the Prophet class (unaltered).Purchased unaltered from Hermit Merchant (Capital Outskirts).Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Prophet Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prophet_Robe_(Altered)",
    "verified": true
  },
  "armor:622100": {
    "kind": "armor",
    "itemId": 622100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 预言家 class.向 遁世商人 (王城外围).",
    "details": "Starting gear for the Prophet class.Purchased from Hermit Merchant (Capital Outskirts).",
    "sourceTitle": "Prophet Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prophet_Robe",
    "verified": true
  },
  "armor:630000": {
    "kind": "armor",
    "itemId": 630000,
    "sourceKind": "shop",
    "summary": "商店购买：Starting equipment ，用于 the 观星者 origin.向 流浪民族的商人 (利耶尼亚湖（湖边）) ，用于 卢恩 1,000 卢恩.",
    "details": "Starting equipment for the Astrologer origin.Purchased from Nomadic Merchant (Liurnia Lake Shore) for 卢恩 1,000 runes.",
    "sourceTitle": "Astrologer Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Astrologer_Hood",
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
    "summary": "商店购买：Starting gear ，用于 the 观星者 class.向 流浪民族的商人 (利耶尼亚湖（湖边）).",
    "details": "Starting gear for the Astrologer class.Purchased from Nomadic Merchant (Liurnia Lake Shore).",
    "sourceTitle": "Astrologer Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Astrologer_Robe",
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
    "summary": "商店购买：The 观星者 Gloves are the starting armwear of the 观星者 出身.The 观星者 Gloves 可向 the 流浪民族的商人 (利耶尼亚湖（湖边）) ，用于 卢恩 1,000 卢恩.",
    "details": "The Astrologer Gloves are the starting armwear of the Astrologer Origin.The Astrologer Gloves can be purchased from the Nomadic Merchant (Liurnia Lake Shore) for 卢恩 1,000 runes.",
    "sourceTitle": "Astrologer Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Astrologer_Gloves",
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
    "summary": "商店购买：Starting gear ，用于 the 观星者 class.向 流浪民族的商人 (利耶尼亚湖（湖边）).",
    "details": "Starting gear for the Astrologer class.Purchased from Nomadic Merchant (Liurnia Lake Shore).",
    "sourceTitle": "Astrologer Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Astrologer_Trousers",
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
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 观星者 class (unaltered).Purchased unaltered from 流浪民族的商人 (利耶尼亚湖（湖边）).",
    "details": "Starting gear for the Astrologer class (unaltered).Purchased unaltered from Nomadic Merchant (Liurnia Lake Shore).Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Astrologer Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Astrologer_Robe_(Altered)",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse right next to the 王城底层教堂 赐福 located in 王城罗德尔.",
    "details": "Found on a corpse right next to the Lower Capital Church site of grace located in Leyndell, Royal Capital.",
    "sourceTitle": "Lionel's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lionel's_Helm",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse right next to the 王城底层教堂 赐福 located in 王城罗德尔.",
    "details": "Found on a corpse right next to the Lower Capital Church site of grace located in Leyndell, Royal Capital.",
    "sourceTitle": "Lionel's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lionel's_Armor",
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
    "summary": "地图拾取 / 宝箱：地点：王城罗德尔；Lionel's Gauntlets are 位于 on a corpse on a bed inside the 赐福 王城底层教堂 in 王城罗德尔.",
    "details": "Location: Leyndell, Royal Capital；Lionel's Gauntlets are found on a corpse on a bed inside the 赐福 Lower Capital Church in Leyndell, Royal Capital.",
    "sourceTitle": "Lionel's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lionel's_Gauntlets",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse right next to the 王城底层教堂 赐福 located in 王城罗德尔.",
    "details": "Found on a corpse right next to the Lower Capital Church site of grace located in Leyndell, Royal Capital.",
    "sourceTitle": "Lionel's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lionel's_Greaves",
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
    "summary": "地图拾取 / 宝箱：Gained by altering Lionel's 防具, which is 位于 on a corpse right next to the 王城底层教堂 赐福 located in 王城罗德尔.",
    "details": "Gained by altering Lionel's Armor, which is found on a corpse right next to the Lower Capital Church site of grace located in Leyndell, Royal Capital.",
    "sourceTitle": "Lionel's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lionel's_Armor_(Altered)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： “血言骑士”尤诺·霍斯劳.",
    "details": "Dropped by Juno Hoslow, Knight of Blood.",
    "sourceTitle": "Hoslow's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Hoslow's_Helm",
    "verified": true
  },
  "armor:650100": {
    "kind": "armor",
    "itemId": 650100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：...奖励 completing an NPC invasion of the 火山官邸 任务线 that sends you to the 巨人山顶.",
    "details": "Reward for completing an NPC invasion of the Volcano Manor questline that sends you to the Mountaintops of the Giants.",
    "sourceTitle": "Hoslow's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Hoslow's_Armor",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Hoslow's Gauntlets are 通过...获得 defeating “血言骑士”尤诺·霍斯劳 附近 the 离群独行者的破屋 后 receiving the Red Letter.",
    "details": "Hoslow's Gauntlets are obtained by defeating Juno Hoslow, Knight of Blood near the Shack of the Lofty after receiving the Red Letter.",
    "sourceTitle": "Hoslow's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Hoslow's_Gauntlets",
    "verified": true
  },
  "armor:650300": {
    "kind": "armor",
    "itemId": 650300,
    "sourceKind": "other",
    "summary": "其他来源：Murder “血言骑士”尤诺·霍斯劳.",
    "details": "Murder Juno Hoslow, Knight of Blood.",
    "sourceTitle": "Hoslow's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Hoslow's_Greaves",
    "verified": true
  },
  "armor:651000": {
    "kind": "armor",
    "itemId": 651000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from 骑士狄亚罗斯 后 completing his 任务线, or by killing him.thumb|details by Zlofsky",
    "details": "Obtained from Knight Diallos after completing his questline, or by killing him.thumb|details by Zlofsky",
    "sourceTitle": "Diallos's Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Diallos's_Mask",
    "verified": true
  },
  "armor:652100": {
    "kind": "armor",
    "itemId": 652100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：...奖励 completing an NPC invasion of the 火山官邸 任务线 that sends you to the 巨人山顶. Altered by Boc.",
    "details": "Reward for completing an NPC invasion of the Volcano Manor questline that sends you to the Mountaintops of the Giants. Altered by Boc.",
    "sourceTitle": "Hoslow's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Hoslow's_Armor_(Altered)",
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
    "summary": "商店购买：Starting gear ，用于 the 流浪骑士 class.向 遁世商人 (巨人山顶).",
    "details": "Starting gear for the Vagabond class.Purchased from Hermit Merchant (Mountaintops of the Giants).",
    "sourceTitle": "Vagabond Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vagabond_Knight_Helm",
    "verified": true
  },
  "armor:660100": {
    "kind": "armor",
    "itemId": 660100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 流浪骑士 class.向 遁世商人 (巨人山顶).",
    "details": "Starting gear for the Vagabond class.Purchased from Hermit Merchant (Mountaintops of the Giants).",
    "sourceTitle": "Vagabond Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vagabond_Knight_Armor",
    "verified": true
  },
  "armor:660200": {
    "kind": "armor",
    "itemId": 660200,
    "sourceKind": "shop",
    "summary": "商店购买：The 流浪骑士 剑士 Gauntlets are the starting armwear of the 流浪骑士 出身.The 流浪骑士 剑士 Gauntlets 可向 the 遁世商人 (巨人山顶) ，用于 卢恩 1,500 卢恩.",
    "details": "The Vagabond Knight Gauntlets are the starting armwear of the Vagabond Origin.The Vagabond Knight Gauntlets can be purchased from the Hermit Merchant (Mountaintops of the Giants) for 卢恩 1,500 runes.",
    "sourceTitle": "Vagabond Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vagabond_Knight_Gauntlets",
    "verified": true
  },
  "armor:660300": {
    "kind": "armor",
    "itemId": 660300,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 流浪骑士 class.向 遁世商人 (巨人山顶).",
    "details": "Starting gear for the Vagabond class.Purchased from Hermit Merchant (Mountaintops of the Giants).",
    "sourceTitle": "Vagabond Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vagabond_Knight_Greaves",
    "verified": true
  },
  "armor:661100": {
    "kind": "armor",
    "itemId": 661100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 流浪骑士 class (unaltered).向 遁世商人 (巨人山顶)",
    "details": "Starting gear for the Vagabond class (unaltered).Purchased from Hermit Merchant (Mountaintops of the Giants)；Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Vagabond Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vagabond_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:670000": {
    "kind": "armor",
    "itemId": 670000,
    "sourceKind": "shop",
    "summary": "商店购买：Starting equipment ，用于 the 剑士 class.The Blue Cloth Cowl is 向 隐居商人 camped outside the 魔法学院雷亚卢卡利亚 ，用于 卢恩 1,000 卢恩.",
    "details": "Starting equipment for the Warrior class.The Blue Cloth Cowl is purchased from Isolated Merchant camped outside the Academy of Raya Lucaria for 卢恩 1,000 runes.",
    "sourceTitle": "Blue Cloth Cowl",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Cloth_Cowl",
    "verified": true
  },
  "armor:670100": {
    "kind": "armor",
    "itemId": 670100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 剑士 class.向 隐居商人 (魔法学院雷亚卢卡利亚).",
    "details": "Starting gear for the Warrior class.Purchased from Isolated Merchant (Academy of Raya Lucaria).",
    "sourceTitle": "Blue Cloth Vest",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Cloth_Vest",
    "verified": true
  },
  "armor:670200": {
    "kind": "armor",
    "itemId": 670200,
    "sourceKind": "shop",
    "summary": "商店购买：The 剑士 Gauntlets are the starting armwear of the 剑士 出身.The 剑士 Gauntlets 可向 the 隐居商人 (魔法学院雷亚卢卡利亚) ，用于 卢恩 1,000 卢恩.",
    "details": "The Warrior Gauntlets are the starting armwear of the Warrior Origin.The Warrior Gauntlets can be purchased from the Isolated Merchant (Academy of Raya Lucaria) for 卢恩 1,000 runes.",
    "sourceTitle": "Warrior Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Warrior_Gauntlets",
    "verified": true
  },
  "armor:670300": {
    "kind": "armor",
    "itemId": 670300,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 剑士 class.向 隐居商人 (魔法学院雷亚卢卡利亚).",
    "details": "Starting gear for the Warrior class.Purchased from Isolated Merchant (Academy of Raya Lucaria).",
    "sourceTitle": "Warrior Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Warrior_Greaves",
    "verified": true
  },
  "armor:680000": {
    "kind": "armor",
    "itemId": 680000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：蒙格温王朝；White Mask is 击杀后掉落： one of the three 无名白面具 invaders in 蒙格温王朝, northwest of the 赐福 通往王朝的崖上道路 赐福, ，位于 blood-filled lake. The invader that drops it is 位于 adjacent to the Giant Crow 附近 the lake exit from the tunnel.",
    "details": "Location: Mohgwyn Palace；White Mask is dropped by one of the three Nameless White Mask invaders in Mohgwyn Palace, northwest of the 赐福 Palace Approach Ledge-Road Site of Grace, in the blood-filled lake. The invader that drops it is found adjacent to the Giant Crow near the lake exit from the tunnel.",
    "sourceTitle": "White Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/White_Mask",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： a 无名白面具 invader ，地点： the blood river in 蒙格温王朝.",
    "details": "Dropped by a Nameless White Mask invader at the blood river in Mohgwyn Palace.",
    "sourceTitle": "War Surgeon Gown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/War_Surgeon_Gown",
    "verified": true
  },
  "armor:680200": {
    "kind": "armor",
    "itemId": 680200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The War Surgeon Gloves are 击杀后掉落： one of the 无名白面具 invaders 附近 the blood marsh in 蒙格温王朝.",
    "details": "The War Surgeon Gloves are dropped by one of the Nameless White Mask invaders near the blood marsh in Mohgwyn Palace.",
    "sourceTitle": "War Surgeon Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/War_Surgeon_Gloves",
    "verified": true
  },
  "armor:680300": {
    "kind": "armor",
    "itemId": 680300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： Unnamed White Mask invader ，地点： the blood river of 蒙格温王朝.",
    "details": "Dropped by Unnamed White Mask invader at the blood river of Mohgwyn Palace.",
    "sourceTitle": "War Surgeon Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/War_Surgeon_Trousers",
    "verified": true
  },
  "armor:681100": {
    "kind": "armor",
    "itemId": 681100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： a 无名白面具 invader ，地点： the blood river in 蒙格温王朝. Then, alter with Boc.",
    "details": "Dropped by a Nameless White Mask invader at the blood river in Mohgwyn Palace. Then, alter with Boc.",
    "sourceTitle": "War Surgeon Gown (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/War_Surgeon_Gown_(Altered)",
    "verified": true
  },
  "armor:690000": {
    "kind": "armor",
    "itemId": 690000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：圆桌厅堂；击败 “王骸”恩夏' invasion ，地点： the 圆桌厅堂 后 collecting the Haligtree Secret Medallion (右). The entire Royal Remains set is later 位于 where he usually stands.",
    "details": "Location: Roundtable Hold；Defeat Ensha of the Royal Remains' invasion at the Roundtable Hold after collecting the Haligtree Secret Medallion (Right). The entire Royal Remains set is later found where he usually stands.",
    "sourceTitle": "Royal Remains Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Remains_Helm",
    "verified": true
  },
  "armor:690100": {
    "kind": "armor",
    "itemId": 690100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：圆桌厅堂；击败 “王骸”恩夏' invasion ，地点： the 圆桌厅堂 后 collecting the Haligtree Secret Medallion (右). The entire Royal Remains set is later 位于 where he usually stands.",
    "details": "Location: Roundtable Hold；Defeat Ensha of the Royal Remains' invasion at the Roundtable Hold after collecting the Haligtree Secret Medallion (Right). The entire Royal Remains set is later found where he usually stands.",
    "sourceTitle": "Royal Remains Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Remains_Armor",
    "verified": true
  },
  "armor:690200": {
    "kind": "armor",
    "itemId": 690200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：圆桌厅堂；击败 “王骸”恩夏' invasion ，地点： the 圆桌厅堂 后 collecting the Haligtree Secret Medallion (右). The entire Royal Remains set is later 位于 where he usually stands.",
    "details": "Location: Roundtable Hold；Defeat Ensha of the Royal Remains' invasion at the Roundtable Hold after collecting the Haligtree Secret Medallion (Right). The entire Royal Remains set is later found where he usually stands.",
    "sourceTitle": "Royal Remains Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Remains_Gauntlets",
    "verified": true
  },
  "armor:690300": {
    "kind": "armor",
    "itemId": 690300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：圆桌厅堂；击败 “王骸”恩夏' invasion ，地点： the 圆桌厅堂 后 collecting the Haligtree Secret Medallion (右). The entire Royal Remains set is later 位于 where he usually stands.",
    "details": "Location: Roundtable Hold；Defeat Ensha of the Royal Remains' invasion at the Roundtable Hold after collecting the Haligtree Secret Medallion (Right). The entire Royal Remains set is later found where he usually stands.",
    "sourceTitle": "Royal Remains Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Royal_Remains_Greaves",
    "verified": true
  },
  "armor:720000": {
    "kind": "armor",
    "itemId": 720000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Beast 勇者 Helm is 击杀后掉落： “叛律者”贝纳尔 upon defeating his invasion north of the 赐福 大桥侧边 赐福 in 逐渐崩毁的法姆·亚兹拉.Alternatively, obtained ，地点： the 习战者的破屋 if the player defeats “亵渎君王”拉卡德 without joining 火山官邸.",
    "details": "The Beast Champion Helm is dropped by Recusant Bernahl upon defeating his invasion north of the 赐福 Beside the Great Bridge Site of Grace in Crumbling Farum Azula.Alternatively, obtained at the Warmaster's Shack if the player defeats Rykard, Lord of Blasphemy without joining Volcano Manor.",
    "sourceTitle": "Beast Champion Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Beast_Champion_Helm",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Altered version is received upon:；Killing the invader “叛律者”贝纳尔 north of the Great Bridge in 逐渐崩毁的法姆·亚兹拉.",
    "details": "Altered version is received upon:；Killing the invader Recusant Bernahl north of the Great Bridge in Crumbling Farum Azula.At the Warmaster's Shack if the player never joined Volcano Manor and killed Praetor Rykard.Needs to be altered at a Site of Grace or by Boc.",
    "sourceTitle": "Beast Champion Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Beast_Champion_Armor",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Beast 勇者 Gauntlets are 通过...获得 defeating “叛律者”贝纳尔 north of the Great Bridge in 逐渐崩毁的法姆·亚兹拉.Alternatively, the Beast 勇者 Gauntlets can be obtained ，地点： the 习战者的破屋 if the player defeats “亵渎君王”拉卡德 without joining the 叛律者s ，地点： 火山官邸.",
    "details": "The Beast Champion Gauntlets are obtained by defeating Recusant Bernahl north of the Great Bridge in Crumbling Farum Azula.Alternatively, the Beast Champion Gauntlets can be obtained at the Warmaster's Shack if the player defeats Rykard, Lord of Blasphemy without joining the Recusants at Volcano Manor.",
    "sourceTitle": "Beast Champion Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Beast_Champion_Gauntlets",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received upon:；Killing the invader “叛律者”贝纳尔 north of the Great Bridge in 逐渐崩毁的法姆·亚兹拉.",
    "details": "Received upon:；Killing the invader Recusant Bernahl north of the Great Bridge in Crumbling Farum Azula.At the Warmaster's Shack if the player never joined Volcano Manor and killed Praetor Rykard.",
    "sourceTitle": "Beast Champion Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Beast_Champion_Greaves",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received upon:；Killing the invader “叛律者”贝纳尔 north of the Great Bridge in 逐渐崩毁的法姆·亚兹拉.",
    "details": "Received upon:；Killing the invader Recusant Bernahl north of the Great Bridge in Crumbling Farum Azula.At the Warmaster's Shack if the player never joined Volcano Manor and killed Praetor Rykard.Can be altered at a Sites of Grace or given to Boc to Beast Champion Armor.",
    "sourceTitle": "Beast Champion Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Beast_Champion_Armor_(Altered)",
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
    "summary": "商店购买：The 勇者 头盔band is starting equipment ，用于 the 勇者 origin.向 the 流浪民族的商人 in southern 盖利德 ，用于 卢恩 1,000 卢恩.",
    "details": "The Champion Headband is starting equipment for the Hero origin.Purchased from the Nomadic Merchant in southern Caelid for 卢恩 1,000 runes.",
    "sourceTitle": "Champion Headband",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Champion_Headband",
    "verified": true
  },
  "armor:730100": {
    "kind": "armor",
    "itemId": 730100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 勇者 class.向 流浪民族的商人 (Southern 盖利德).",
    "details": "Starting gear for the Hero class.Purchased from Nomadic Merchant (Southern Caelid).",
    "sourceTitle": "Champion Pauldron",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Champion_Pauldron",
    "verified": true
  },
  "armor:730200": {
    "kind": "armor",
    "itemId": 730200,
    "sourceKind": "shop",
    "summary": "商店购买：The 勇者 Bracers are the starting armwear of the 勇者 出身.The 勇者 Bracers 可向 the 流浪民族的商人 (Southern 盖利德) ，用于 卢恩 1,000 卢恩.",
    "details": "The Champion Bracers are the starting armwear of the Hero Origin.The Champion Bracers can be purchased from the Nomadic Merchant (Southern Caelid) for 卢恩 1,000 runes.",
    "sourceTitle": "Champion Bracers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Champion_Bracers",
    "verified": true
  },
  "armor:730300": {
    "kind": "armor",
    "itemId": 730300,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 勇者 class.向 流浪民族的商人 (Southern 盖利德).",
    "details": "Starting gear for the Hero class.Purchased from Nomadic Merchant (Southern Caelid).",
    "sourceTitle": "Champion Gaiters",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Champion_Gaiters",
    "verified": true
  },
  "armor:740000": {
    "kind": "armor",
    "itemId": 740000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：The Crimson Hood becomes available 后 罗德莉卡 becomes a Spirit Tuner or upon the player's arrival ，地点： 逐渐崩毁的法姆·亚兹拉.It can be 位于...附近 the 赐福 城墙塔 赐福 in 史东薇尔城. It lies discarded on a mound of corpses ，位于 courtyard adjacent to the room with the “接肢”贵族后裔, beneath a hanged troll.",
    "details": "The Crimson Hood becomes available after Roderika becomes a Spirit Tuner or upon the player's arrival at Crumbling Farum Azula.It can be found near the 赐福 Rampart Tower Site of Grace in Stormveil Castle. It lies discarded on a mound of corpses in the courtyard adjacent to the room with the Grafted Scion, beneath a hanged troll.",
    "sourceTitle": "Crimson Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Hood",
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
    "summary": "地图拾取 / 宝箱：位于 on one of the corpses 附近 the 东边风车牧场 in 亚坛高原.",
    "details": "Found on one of the corpses near the East Windmill Pasture in Altus Plateau.",
    "sourceTitle": "Noble's Traveling Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Noble's_Traveling_Garb",
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
    "summary": "地图拾取 / 宝箱：地点：东边风车牧场；The Noble's Gloves are 位于 on a corpse 附近 the 东边风车牧场 on the 亚坛高原.",
    "details": "Location: East Windmill Pasture；The Noble's Gloves are found on a corpse near the East Windmill Pasture on the Altus Plateau.",
    "sourceTitle": "Noble's Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Noble's_Gloves",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：The Noble's Trousers are 位于 on one of the corpses 附近 the 东边风车牧场 on the 亚坛高原.",
    "details": "The Noble's Trousers are found on one of the corpses near the East Windmill Pasture on the Altus Plateau.",
    "sourceTitle": "Noble's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Noble's_Trousers",
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
    "summary": "地图拾取 / 宝箱：地点：东边风车牧场；The Navy Hood is 位于 on a corpse 附近 the 东边风车牧场 ，位于 亚坛高原.",
    "details": "Location: East Windmill Pasture；The Navy Hood is found on a corpse near the East Windmill Pasture in the Altus Plateau.",
    "sourceTitle": "Navy Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Navy_Hood",
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
    "summary": "商店购买：向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 12,000 卢恩 后 defeating “黑剑”玛利喀斯.",
    "details": "Purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 12,000 runes after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Maliketh's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Maliketh's_Helm",
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
    "summary": "商店购买：Bought from “解指”恩雅 后 defeating “黑剑”玛利喀斯.",
    "details": "Bought from Finger Reader Enia after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Maliketh's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Maliketh's_Armor",
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
    "summary": "商店购买：Maliketh's Gauntlets 可向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 10,000 卢恩 后 defeating “黑剑”玛利喀斯.",
    "details": "Maliketh's Gauntlets can be purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 10,000 runes after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Maliketh's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Maliketh's_Gauntlets",
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
    "summary": "商店购买：Bought from “解指”恩雅 后 defeating “黑剑”玛利喀斯.",
    "details": "Bought from Finger Reader Enia after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Maliketh's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Maliketh's_Greaves",
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
    "summary": "商店购买：Bought from “解指”恩雅 后 defeating “黑剑”玛利喀斯.",
    "details": "Bought from Finger Reader Enia after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Maliketh's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Maliketh's_Armor_(Altered)",
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
    "summary": "商店购买：向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 12,000 卢恩 后 defeating “米凯拉的锋刃”玛莲妮亚.",
    "details": "Purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 12,000 runes after defeating Malenia, Blade of Miquella.",
    "sourceTitle": "Malenia's Winged Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malenia's_Winged_Helm",
    "verified": true
  },
  "armor:770100": {
    "kind": "armor",
    "itemId": 770100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 once having defeated “米凯拉的锋刃”玛莲妮亚.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold once having defeated Malenia, Blade of Miquella.",
    "sourceTitle": "Malenia's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malenia's_Armor",
    "verified": true
  },
  "armor:770200": {
    "kind": "armor",
    "itemId": 770200,
    "sourceKind": "shop",
    "summary": "商店购买：Malenia's Gauntlet 可向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 12,000 卢恩 后 defeating “米凯拉的锋刃”玛莲妮亚.",
    "details": "Malenia's Gauntlet can be purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 12,000 runes after defeating Malenia, Blade of Miquella.",
    "sourceTitle": "Malenia's Gauntlet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malenia's_Gauntlet",
    "verified": true
  },
  "armor:770300": {
    "kind": "armor",
    "itemId": 770300,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 once having defeated “米凯拉的锋刃”玛莲妮亚.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold once having defeated Malenia, Blade of Miquella.",
    "sourceTitle": "Malenia's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malenia's_Greaves",
    "verified": true
  },
  "armor:771100": {
    "kind": "armor",
    "itemId": 771100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought unaltered from “解指”恩雅 ，地点： 圆桌厅堂 once having defeated “米凯拉的锋刃”玛莲妮亚. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can be bought unaltered from Finger Reader Enia at Roundtable Hold once having defeated Malenia, Blade of Miquella. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Malenia's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Malenia's_Armor_(Altered)",
    "verified": true
  },
  "armor:780000": {
    "kind": "armor",
    "itemId": 780000,
    "sourceKind": "shop",
    "summary": "商店购买：向 “解指”恩雅 ，用于 卢恩 4,000 卢恩 后 defeating 老将尼奥.",
    "details": "Purchased from Finger Reader Enia for 卢恩 4,000 runes after defeating Commander Niall.",
    "sourceTitle": "Veteran's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Veteran's_Helm",
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
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating 老将尼奥.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold after defeating Commander Niall.",
    "sourceTitle": "Veteran's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Veteran's_Armor",
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
    "summary": "商店购买：The Veteran's Gauntlets 可向 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 4,000 卢恩 后 defeating 老将尼奥.",
    "details": "The Veteran's Gauntlets can be purchased from Finger Reader Enia at the Roundtable Hold for 卢恩 4,000 runes after defeating Commander Niall.",
    "sourceTitle": "Veteran's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Veteran's_Gauntlets",
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
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating 老将尼奥.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold after defeating Commander Niall.",
    "sourceTitle": "Veteran's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Veteran's_Greaves",
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
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought unaltered from “解指”恩雅 ，地点： 圆桌厅堂 后 defeating 老将尼奥. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can be bought unaltered from Finger Reader Enia at Roundtable Hold after defeating Commander Niall. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Veteran's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Veteran's_Armor_(Altered)",
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
    "summary": "敌人 / 首领掉落：地点：格密尔英雄墓地；The 猎犬骑士 Helm is 击杀后掉落： a 猎犬骑士 in 格密尔英雄墓地. It is 位于 on a hidden path reached by dropping down from the route traveled by the Merciless Chariots. The 猎犬骑士 stands before a corpse holding the Gelmir 剑士 Set.",
    "details": "Location: Gelmir Hero's Grave；The Bloodhound Knight Helm is dropped by a Bloodhound Knight in Gelmir Hero's Grave. It is found on a hidden path reached by dropping down from the route traveled by the Merciless Chariots. The Bloodhound Knight stands before a corpse holding the Gelmir Knight Set.",
    "sourceTitle": "Bloodhound Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodhound_Knight_Helm",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： a 猎犬骑士 in 格密尔英雄墓地, hidden in a path that you need to drop down to from where the Merciless Chariot drives across. The 猎犬骑士 stands in front of a body carrying the Gelmir 剑士 Set.",
    "details": "Dropped by a Bloodhound Knight in Gelmir Hero's Grave, hidden in a path that you need to drop down to from where the Merciless Chariot drives across. The Bloodhound Knight stands in front of a body carrying the Gelmir Knight Set.",
    "sourceTitle": "Bloodhound Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodhound_Knight_Armor",
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
    "summary": "敌人 / 首领掉落：地点：格密尔英雄墓地；The 猎犬骑士 Gauntlets are 击杀后掉落： a 猎犬骑士 hidden along a side path in 格密尔英雄墓地, 附近 the corpse holding the Gelmir 剑士 Set.",
    "details": "Location: Gelmir Hero's Grave；The Bloodhound Knight Gauntlets are dropped by a Bloodhound Knight hidden along a side path in Gelmir Hero's Grave, near the corpse holding the Gelmir Knight Set.",
    "sourceTitle": "Bloodhound Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodhound_Knight_Gauntlets",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： a 猎犬骑士 in 格密尔英雄墓地, hidden in a path that you need to drop down to from where the charriot drives across. The 猎犬骑士 stands in front of a body carrying the Gelmir 剑士 set.",
    "details": "Dropped by a Bloodhound Knight in Gelmir Hero's Grave, hidden in a path that you need to drop down to from where the charriot drives across. The Bloodhound Knight stands in front of a body carrying the Gelmir Knight set.",
    "sourceTitle": "Bloodhound Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodhound_Knight_Greaves",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： a 猎犬骑士 in 格密尔英雄墓地, hidden in a path that you need to drop down to from where the charriot drives across. The 猎犬骑士 stands in front of a body carrying the Gelmir 剑士 set.",
    "details": "Dropped by a Bloodhound Knight in Gelmir Hero's Grave, hidden in a path that you need to drop down to from where the charriot drives across. The Bloodhound Knight stands in front of a body carrying the Gelmir Knight set.",
    "sourceTitle": "Bloodhound Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodhound_Knight_Armor_(Altered)",
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
    "summary": "敌人 / 首领掉落：The Festive Hood has a 1.50% 有概率从 Dominula Dancers that wear it. Many are 位于 ，地点： 风车村多明努拉 in northern 亚坛高原.",
    "details": "The Festive Hood has a 1.50% chance to drop from Dominula Dancers that wear it. Many are found at Dominula, Windmill Village in northern Altus Plateau.",
    "sourceTitle": "Festive Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Festive_Hood",
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
    "summary": "敌人 / 首领掉落：有概率从 the dancing enemies that wear it in 风车村, located in 亚坛高原. Cannot be altered by yourself or by Boc.",
    "details": "Chance to drop from the dancing enemies that wear it in Windmill Village, located in Altus Plateau. Cannot be altered by yourself or by Boc.",
    "sourceTitle": "Festive Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Festive_Garb",
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
    "summary": "敌人 / 首领掉落：获得途径 by altering the Festive Hood ，地点： a 赐福 or through 裁缝师柏克.The Festive Hood has a 1.50% 有概率从 Dominula Dancers that wear it in 风车村多明努拉, located in 亚坛高原.",
    "details": "Obtained by altering the Festive Hood at a Site of Grace or through Boc the Seamster.The Festive Hood has a 1.50% chance to drop from Dominula Dancers that wear it in Dominula, Windmill Village, located in Altus Plateau.",
    "sourceTitle": "Festive Hood (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Festive_Hood_(Altered)",
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
    "summary": "敌人 / 首领掉落：有概率从 the dancing enemies that wear it in 风车村, located in 亚坛高原. Cannot be unaltered by yourself or by Boc.",
    "details": "Chance to drop from the dancing enemies that wear it in Windmill Village, located in Altus Plateau. Cannot be unaltered by yourself or by Boc.",
    "sourceTitle": "Festive Garb (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Festive_Garb_(Altered)",
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
    "summary": "敌人 / 首领掉落：The Blue Festive Hood has a 1.50% 有概率从 Dominula Dancers that wear it in 风车村多明努拉, located in 亚坛高原. The enemies always wield the Celebrant's Sickle.",
    "details": "The Blue Festive Hood has a 1.50% chance to drop from Dominula Dancers that wear it in Dominula, Windmill Village, located in Altus Plateau. The enemies always wield the Celebrant's Sickle.",
    "sourceTitle": "Blue Festive Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Festive_Hood",
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
    "summary": "敌人 / 首领掉落：有概率从 the dancing enemies that wear it in 风车村, located in 亚坛高原.",
    "details": "Chance to drop from the dancing enemies that wear it in Windmill Village, located in Altus Plateau.",
    "sourceTitle": "Blue Festive Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Festive_Garb",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：艾格蕾教堂；The Commoner's 头盔band is 位于 on top of the head of a serpent statue in 火山官邸, right 后 the 赐福 艾格蕾教堂 赐福.",
    "details": "Location: Temple of Eiglay；The Commoner's Headband is found on top of the head of a serpent statue in Volcano Manor, right after the 赐福 Temple of Eiglay grace.",
    "sourceTitle": "Commoner's Headband",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Commoner's_Headband",
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
    "summary": "敌人 / 首领掉落：Chance to drop ，用于 Commoner enemies.",
    "details": "Chance to drop for Commoner enemies.",
    "sourceTitle": "Commoner's Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Commoner's_Garb",
    "verified": true
  },
  "armor:810300": {
    "kind": "armor",
    "itemId": 810300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop ，用于 Commoner enemies.",
    "details": "Chance to drop for Commoner enemies.",
    "sourceTitle": "Commoner's Shoes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Commoner's_Shoes",
    "verified": true
  },
  "armor:811000": {
    "kind": "armor",
    "itemId": 811000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Commoner enemies.",
    "details": "Chance to drop from Commoner enemies.",
    "sourceTitle": "Commoner's Headband (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Commoner's_Headband_(Altered)",
    "verified": true
  },
  "armor:811100": {
    "kind": "armor",
    "itemId": 811100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered ，用于 Commoner enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered for Commoner enemies. Can be altered at a Site of Grace or by Boc.",
    "sourceTitle": "Commoner's Garb (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Commoner's_Garb_(Altered)",
    "verified": true
  },
  "armor:812000": {
    "kind": "armor",
    "itemId": 812000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse right next to the 门旁小屋 赐福 inside 史东薇尔城.",
    "details": "Found on a corpse right next to the Gateside Chamber grace inside Stormveil Castle.",
    "sourceTitle": "Commoner's Simple Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Commoner's_Simple_Garb",
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
    "summary": "地图拾取 / 宝箱：Unaltered version can be 位于 on a corpse right next to the 门旁小屋 赐福 inside 史东薇尔城. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Unaltered version can be found on a corpse right next to the Gateside Chamber grace inside Stormveil Castle. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Commoner's Simple Garb (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Commoner's_Simple_Garb_(Altered)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 on a corpse behind a Giant Oracle Envoy enemy 附近 the 圣树树冠 赐福 in 米凯拉的圣树.",
    "details": "Found on a corpse behind a Giant Oracle Envoy enemy near the Haligtree Canopy site of grace in Miquella's Haligtree.",
    "sourceTitle": "Envoy Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Envoy_Crown",
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
    "summary": "敌人 / 首领掉落：地点：魔法学院雷亚卢卡利亚；The Twinsage Glintstone Crown is 击杀后掉落： a Crystal Crab next to a wooden structure accessible via the rooftops of the 魔法学院雷亚卢卡利亚.",
    "details": "Location: Academy of Raya Lucaria；The Twinsage Glintstone Crown is dropped by a Crystal Crab next to a wooden structure accessible via the rooftops of the Academy of Raya Lucaria.",
    "sourceTitle": "Twinsage Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinsage_Glintstone_Crown",
    "verified": true
  },
  "armor:830100": {
    "kind": "armor",
    "itemId": 830100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Glintstone Sorcerer enemies.",
    "details": "Chance to drop from Glintstone Sorcerer enemies.",
    "sourceTitle": "Raya Lucarian Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raya_Lucarian_Robe",
    "verified": true
  },
  "armor:830200": {
    "kind": "armor",
    "itemId": 830200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Sorcerer Manchettes have a 1.50% 有概率从 Glintstone Sorcerer enemies.",
    "details": "The Sorcerer Manchettes have a 1.50% chance to drop from Glintstone Sorcerer enemies.",
    "sourceTitle": "Sorcerer Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sorcerer_Manchettes",
    "verified": true
  },
  "armor:830300": {
    "kind": "armor",
    "itemId": 830300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Raya Lucarian Sorcerer enemies.",
    "details": "Chance to drop from Raya Lucarian Sorcerer enemies.",
    "sourceTitle": "Sorcerer Leggings",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sorcerer_Leggings",
    "verified": true
  },
  "armor:831000": {
    "kind": "armor",
    "itemId": 831000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：魔法学院雷亚卢卡利亚；The Olivinus Glintstone Crown is 位于 on a corpse behind an illusory wall 附近 the 赐福 校舍内的教室 赐福.",
    "details": "Location: Academy of Raya Lucaria；The Olivinus Glintstone Crown is found on a corpse behind an illusory wall near the 赐福 Schoolhouse Classroom Site of Grace.",
    "sourceTitle": "Olivinus Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Olivinus_Glintstone_Crown",
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
    "summary": "敌人 / 首领掉落：地点：魔法学院雷亚卢卡利亚；The Lazuli Glintstone Crown is 击杀后掉落： a Crystal Crab inside a tower accessible from the rooftops of the 魔法学院雷亚卢卡利亚, 后 jumping down onto wooden platforms.",
    "details": "Location: Academy of Raya Lucaria；The Lazuli Glintstone Crown is dropped by a Crystal Crab inside a tower accessible from the rooftops of the Academy of Raya Lucaria, after jumping down onto wooden platforms.",
    "sourceTitle": "Lazuli Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lazuli_Glintstone_Crown",
    "verified": true
  },
  "armor:833000": {
    "kind": "armor",
    "itemId": 833000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：魔法学院雷亚卢卡利亚；The Karolos Glintstone Crown is 击杀后掉落： a Crystal Crab located to the left of the open area immediately 后 the 赐福 讨论室 赐福.",
    "details": "Location: Academy of Raya Lucaria；The Karolos Glintstone Crown is dropped by a Crystal Crab located to the left of the open area immediately after the 赐福 Debate Parlor Site of Grace.",
    "sourceTitle": "Karolos Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Karolos_Glintstone_Crown",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：雷亚卢卡利亚大书库；The Witch's Glintstone Crown is obtained upon completing 魔法师瑟濂's 任务线 ，地点： the 魔法学院雷亚卢卡利亚.",
    "details": "Location: Raya Lucaria Grand Library；The Witch's Glintstone Crown is obtained upon completing Sorceress Sellen's questline at the Academy of Raya Lucaria.If the player sided with Sorceress Sellen, then the Witch's Glintstone Crown will be on the floor beside her following her transformation.If the player sided with Witch-Hunter Jerren, then Sorceress Sellen drops the crown upon defeat.",
    "sourceTitle": "Witch's Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Witch's_Glintstone_Crown",
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
    "summary": "敌人 / 首领掉落：有概率从 Marionette Soldier enemies.",
    "details": "Chance to drop from Marionette Soldier enemies.",
    "sourceTitle": "Marionette Soldier Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marionette_Soldier_Helm",
    "verified": true
  },
  "armor:840100": {
    "kind": "armor",
    "itemId": 840100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Marionette Soldier enemies.",
    "details": "Chance to drop from Marionette Soldier enemies.",
    "sourceTitle": "Marionette Soldier Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marionette_Soldier_Armor",
    "verified": true
  },
  "armor:850000": {
    "kind": "armor",
    "itemId": 850000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Avionette Soldier enemies.",
    "details": "Chance to drop from Avionette Soldier enemies.",
    "sourceTitle": "Marionette Soldier Birdhelm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marionette_Soldier_Birdhelm",
    "verified": true
  },
  "armor:860000": {
    "kind": "armor",
    "itemId": 860000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 as part of Bernahl's 火山官邸 quest. You will have to 击败 two NPCs in a scripted invasion together with Bernahl ，位于 Fortified Manor, 王城罗德尔.",
    "details": "Obtained as part of Bernahl's Volcano Manor quest. You will have to defeat two NPCs in a scripted invasion together with Bernahl in the Fortified Manor, Leyndell, Royal Capital.",
    "sourceTitle": "Raging Wolf Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raging_Wolf_Helm",
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
    "summary": "敌人 / 首领掉落：击败 “白狼战鬼”巴格莱姆.",
    "details": "Defeat Vargram the Raging Wolf.",
    "sourceTitle": "Raging Wolf Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raging_Wolf_Armor",
    "verified": true
  },
  "armor:860200": {
    "kind": "armor",
    "itemId": 860200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Raging Wolf Gauntlets are 通过...获得 defeating “白狼战鬼”巴格莱姆.",
    "details": "The Raging Wolf Gauntlets are obtained by defeating Vargram the Raging Wolf.",
    "sourceTitle": "Raging Wolf Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raging_Wolf_Gauntlets",
    "verified": true
  },
  "armor:860300": {
    "kind": "armor",
    "itemId": 860300,
    "sourceKind": "other",
    "summary": "其他来源：Murder “白狼战鬼”巴格莱姆.",
    "details": "Murder Vargram the Raging Wolf.",
    "sourceTitle": "Raging Wolf Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raging_Wolf_Greaves",
    "verified": true
  },
  "armor:861100": {
    "kind": "armor",
    "itemId": 861100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击败 “白狼战鬼”巴格莱姆 and modify with Boc.",
    "details": "Defeat Vargram the Raging Wolf and modify with Boc.",
    "sourceTitle": "Raging Wolf Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raging_Wolf_Armor_(Altered)",
    "verified": true
  },
  "armor:870000": {
    "kind": "armor",
    "itemId": 870000,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 武士 origin.向 隐居商人 (Dragonbarrow).",
    "details": "Starting gear for Samurai origin.Purchased from Isolated Merchant (Dragonbarrow).",
    "sourceTitle": "Land of Reeds Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Land_of_Reeds_Helm",
    "verified": true
  },
  "armor:870100": {
    "kind": "armor",
    "itemId": 870100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 武士 class.向 隐居商人 (Dragonbarrow).",
    "details": "Starting gear for the Samurai class.Purchased from Isolated Merchant (Dragonbarrow).",
    "sourceTitle": "Land of Reeds Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Land_of_Reeds_Armor",
    "verified": true
  },
  "armor:870200": {
    "kind": "armor",
    "itemId": 870200,
    "sourceKind": "shop",
    "summary": "商店购买：The Land of Reeds Gauntlets are the starting armwear of the 武士 出身.The Land of Reeds Gauntlets 可向 the 隐居商人 (Dragonbarrow) ，用于 卢恩 1,000 卢恩.",
    "details": "The Land of Reeds Gauntlets are the starting armwear of the Samurai Origin.The Land of Reeds Gauntlets can be purchased from the Isolated Merchant (Dragonbarrow) for 卢恩 1,000 runes.",
    "sourceTitle": "Land of Reeds Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Land_of_Reeds_Gauntlets",
    "verified": true
  },
  "armor:870300": {
    "kind": "armor",
    "itemId": 870300,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 武士 class.向 隐居商人 (Dragonbarrow).",
    "details": "Starting gear for the Samurai class.Purchased from Isolated Merchant (Dragonbarrow).",
    "sourceTitle": "Land of Reeds Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Land_of_Reeds_Greaves",
    "verified": true
  },
  "armor:871100": {
    "kind": "armor",
    "itemId": 871100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 武士 class (unaltered).Purchased unaltered from 隐居商人 (Dragonbarrow).",
    "details": "Starting gear for the Samurai class (unaltered).Purchased unaltered from Isolated Merchant (Dragonbarrow).Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Land of Reeds Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Land_of_Reeds_Armor_(Altered)",
    "verified": true
  },
  "armor:872000": {
    "kind": "armor",
    "itemId": 872000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received upon defeating the NPC invader “血指”老翁 附近 the 安歇教堂 located in 巨人山顶.",
    "details": "Received upon defeating the NPC invader Bloody Finger Okina near the Church of Repose located in Mountaintops of the Giants.",
    "sourceTitle": "Okina Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Okina_Mask",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside 唤灵洞窟 in 巨人山顶.",
    "details": "Found on a corpse inside Spiritcaller Cave in Mountaintops of the Giants.",
    "sourceTitle": "White Reed Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/White_Reed_Armor",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：唤灵洞窟；The White Reed Gauntlets are 位于 on a corpse ，位于 唤灵洞窟 ，位于 巨人山顶.",
    "details": "Location: Spiritcaller Cave；The White Reed Gauntlets are found on a corpse in the Spiritcaller Cave in the Mountaintops of the Giants.",
    "sourceTitle": "White Reed Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/White_Reed_Gauntlets",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside 唤灵洞窟 in 巨人山顶.",
    "details": "Found on a corpse inside Spiritcaller Cave in Mountaintops of the Giants.",
    "sourceTitle": "White Reed Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/White_Reed_Greaves",
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
    "summary": "商店购买：The 密使 Hood is starting equipment ，用于 the 密使 class.向 the 流浪民族的商人 on 格密尔火山 ，用于 卢恩 1,000 卢恩.",
    "details": "The Confessor Hood is starting equipment for the Confessor class.Purchased from the Nomadic Merchant on Mt. Gelmir for 卢恩 1,000 runes.",
    "sourceTitle": "Confessor Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Confessor_Hood",
    "verified": true
  },
  "armor:880100": {
    "kind": "armor",
    "itemId": 880100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 密使 class.向 流浪民族的商人 (格密尔火山).",
    "details": "Starting gear for the Confessor class.Purchased from Nomadic Merchant (Mt. Gelmir).",
    "sourceTitle": "Confessor Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Confessor_Armor",
    "verified": true
  },
  "armor:880200": {
    "kind": "armor",
    "itemId": 880200,
    "sourceKind": "shop",
    "summary": "商店购买：The 密使 Gloves are the starting armwear of the 密使 出身.The 密使 Gloves 可向 the 流浪民族的商人 (格密尔火山) ，用于 卢恩 1,000 卢恩.",
    "details": "The Confessor Gloves are the starting armwear of the Confessor Origin.The Confessor Gloves can be purchased from the Nomadic Merchant (Mt. Gelmir) for 卢恩 1,000 runes.",
    "sourceTitle": "Confessor Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Confessor_Gloves",
    "verified": true
  },
  "armor:880300": {
    "kind": "armor",
    "itemId": 880300,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 密使 class.向 流浪民族的商人 (格密尔火山).",
    "details": "Starting gear for the Confessor class.Purchased from Nomadic Merchant (Mt. Gelmir).",
    "sourceTitle": "Confessor Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Confessor_Boots",
    "verified": true
  },
  "armor:881000": {
    "kind": "armor",
    "itemId": 881000,
    "sourceKind": "shop",
    "summary": "商店购买：获得途径 by altering the 密使 Hood ，地点： a 赐福 or through 裁缝师柏克.",
    "details": "Obtained by altering the Confessor Hood at a Site of Grace or through Boc the Seamster.",
    "sourceTitle": "Confessor Hood (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Confessor_Hood_(Altered)",
    "verified": true
  },
  "armor:881100": {
    "kind": "armor",
    "itemId": 881100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 密使 class (unaltered).Purchased unaltered from 流浪民族的商人 (格密尔火山).",
    "details": "Starting gear for the Confessor class (unaltered).Purchased unaltered from Nomadic Merchant (Mt. Gelmir).Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Confessor Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Confessor_Armor_(Altered)",
    "verified": true
  },
  "armor:890000": {
    "kind": "armor",
    "itemId": 890000,
    "sourceKind": "shop",
    "summary": "商店购买：Starting equipment ，用于 the 囚犯 class.向 the 遁世商人 in 乌鲁王朝遗迹 ，用于 卢恩 1,000 卢恩.",
    "details": "Starting equipment for the Prisoner class.Purchased from the Hermit Merchant in Uhl Palace Ruins for 卢恩 1,000 runes.",
    "sourceTitle": "Prisoner Iron Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prisoner_Iron_Mask",
    "verified": true
  },
  "armor:890100": {
    "kind": "armor",
    "itemId": 890100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 囚犯 class.向 遁世商人 (安瑟尔河).",
    "details": "Starting gear for the Prisoner class.Purchased from Hermit Merchant (Ainsel River).",
    "sourceTitle": "Prisoner Clothing",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prisoner_Clothing",
    "verified": true
  },
  "armor:890300": {
    "kind": "armor",
    "itemId": 890300,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 囚犯 class.向 遁世商人 (安瑟尔河).",
    "details": "Starting gear for the Prisoner class.Purchased from Hermit Merchant (Ainsel River).",
    "sourceTitle": "Prisoner Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prisoner_Trousers",
    "verified": true
  },
  "armor:891000": {
    "kind": "armor",
    "itemId": 891000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： 流氓 Big Boggart upon his death.",
    "details": "Dropped by Blackguard Big Boggart upon his death.",
    "sourceTitle": "Blackguard's Iron Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blackguard's_Iron_Mask",
    "verified": true
  },
  "armor:900000": {
    "kind": "armor",
    "itemId": 900000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 离群独行者的破屋 located on the west end of the river in Moutaintops of the Giants.",
    "details": "Found on a corpse inside the Shack of the Lofty located on the west end of the river in Moutaintops of the Giants.",
    "sourceTitle": "Traveling Maiden Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveling_Maiden_Hood",
    "verified": true
  },
  "armor:900100": {
    "kind": "armor",
    "itemId": 900100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 离群独行者的破屋 located on the west end of the river in 巨人山顶.",
    "details": "Found on a corpse inside the Shack of the Lofty located on the west end of the river in Mountaintops of the Giants.",
    "sourceTitle": "Traveling Maiden Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveling_Maiden_Robe",
    "verified": true
  },
  "armor:900200": {
    "kind": "armor",
    "itemId": 900200,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：离群独行者的破屋；The Traveling Maiden Gloves are 位于 on a corpse inside the 离群独行者的破屋 ，位于 巨人山顶.",
    "details": "Location: Shack of the Lofty；The Traveling Maiden Gloves are found on a corpse inside the Shack of the Lofty in the Mountaintops of the Giants.",
    "sourceTitle": "Traveling Maiden Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveling_Maiden_Gloves",
    "verified": true
  },
  "armor:900300": {
    "kind": "armor",
    "itemId": 900300,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 离群独行者的破屋 located on the west end of the river in Moutaintops of the Giants.",
    "details": "Found on a corpse inside the Shack of the Lofty located on the west end of the river in Moutaintops of the Giants.",
    "sourceTitle": "Traveling Maiden Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveling_Maiden_Boots",
    "verified": true
  },
  "armor:901100": {
    "kind": "armor",
    "itemId": 901100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 unaltered on a corpse inside the 离群独行者的破屋 located on the west end of the river in 巨人山顶. Can be altered ，地点： a 赐福 or by 裁缝师柏克.",
    "details": "Found unaltered on a corpse inside the Shack of the Lofty located on the west end of the river in Mountaintops of the Giants. Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Traveling Maiden Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveling_Maiden_Robe_(Altered)",
    "verified": true
  },
  "armor:902000": {
    "kind": "armor",
    "itemId": 902000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 镇静教堂 located in 湖之利耶尼亚.",
    "details": "Found on a corpse inside the Church of Inhibition located in Liurnia of the Lakes.",
    "sourceTitle": "Finger Maiden Fillet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Finger_Maiden_Fillet",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 镇静教堂 located in 湖之利耶尼亚.",
    "details": "Found on a corpse inside the Church of Inhibition located in Liurnia of the Lakes.",
    "sourceTitle": "Finger Maiden Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Finger_Maiden_Robe",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 镇静教堂 located in 湖之利耶尼亚.",
    "details": "Found on a corpse inside the Church of Inhibition located in Liurnia of the Lakes.",
    "sourceTitle": "Finger Maiden Shoes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Finger_Maiden_Shoes",
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
    "summary": "地图拾取 / 宝箱：位于 unaltered on a corpse inside the 镇静教堂 located in 湖之利耶尼亚. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Found unaltered on a corpse inside the Church of Inhibition located in Liurnia of the Lakes. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Finger Maiden Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Finger_Maiden_Robe_(Altered)",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：地点：赛尔维斯魔法师塔；位于 后 finishing Ranni's 任务线 inside 赛尔维斯魔法师塔 ，地点： 三姊妹塔, located in northwestern 湖之利耶尼亚.",
    "details": "Location: Seluvis's Rise；Found after finishing Ranni's questline inside Seluvis's Rise at Three Sisters, located in northwestern Liurnia of the Lakes.",
    "sourceTitle": "Preceptor's Big Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Preceptor's_Big_Hat",
    "verified": true
  },
  "armor:910100": {
    "kind": "armor",
    "itemId": 910100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：位于 后 finishing Ranni's 任务线 inside 赛尔维斯魔法师塔 located in 湖之利耶尼亚.",
    "details": "Found after finishing Ranni's questline inside Seluvis's Rise located in Liurnia of the Lakes.",
    "sourceTitle": "Preceptor's Long Gown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Preceptor's_Long_Gown",
    "verified": true
  },
  "armor:910200": {
    "kind": "armor",
    "itemId": 910200,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：The Preceptor's Gloves are 位于 赛尔维斯魔法师塔 后 completing 魔女菈妮's 任务线.",
    "details": "The Preceptor's Gloves are found in Seluvis's Rise after completing Ranni the Witch's questline.",
    "sourceTitle": "Preceptor's Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Preceptor's_Gloves",
    "verified": true
  },
  "armor:910300": {
    "kind": "armor",
    "itemId": 910300,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：位于 后 finishing Ranni's 任务线 inside 赛尔维斯魔法师塔 located in 湖之利耶尼亚.",
    "details": "Found after finishing Ranni's questline inside Seluvis's Rise located in Liurnia of the Lakes.",
    "sourceTitle": "Preceptor's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Preceptor's_Trousers",
    "verified": true
  },
  "armor:911000": {
    "kind": "armor",
    "itemId": 911000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 卡利亚书斋 once having placed the Carian Inverted Statue.",
    "details": "Found on a corpse inside the Carian Study Hall once having placed the Carian Inverted Statue.",
    "sourceTitle": "Mask of Confidence",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mask_of_Confidence",
    "verified": true
  },
  "armor:911100": {
    "kind": "armor",
    "itemId": 911100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：位于 后 finishing Seluvis' 任务线 (unaltered) inside 赛尔维斯魔法师塔 located in 湖之利耶尼亚. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Found after finishing Seluvis' questline (unaltered) inside Seluvis's Rise located in Liurnia of the Lakes. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Preceptor's Long Gown (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Preceptor's_Long_Gown_(Altered)",
    "verified": true
  },
  "armor:930000": {
    "kind": "armor",
    "itemId": 930000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：贤者的洞窟；The Skeletal Mask is looted from a 宝箱 within 贤者的洞窟 in 亚坛高原.",
    "details": "Location: Sage's Cave；The Skeletal Mask is looted from a chest within Sage's Cave in Altus Plateau.",
    "sourceTitle": "Skeletal Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Skeletal_Mask",
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
    "summary": "地图拾取 / 宝箱：地点：贤者的洞窟；The Raptor's Black Feathers is 位于 inside a 宝箱 behind an illusory wall ，位于 贤者的洞窟, located in 亚坛高原.",
    "details": "Location: Sage's Cave；The Raptor's Black Feathers is found inside a chest behind an illusory wall in the Sage's Cave, located in Altus Plateau.",
    "sourceTitle": "Raptor's Black Feathers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raptor's_Black_Feathers",
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
    "summary": "商店购买：The 盗贼 Manchettes are the starting armwear of the 盗贼 出身.The 盗贼 Manchettes 可向 门卫葛托克 ，用于 卢恩 1,000 卢恩.",
    "details": "The Bandit Manchettes are the starting armwear of the Bandit Origin.The Bandit Manchettes can be purchased from Gatekeeper Gostoc for 卢恩 1,000 runes.",
    "sourceTitle": "Bandit Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bandit_Manchettes",
    "verified": true
  },
  "armor:930300": {
    "kind": "armor",
    "itemId": 930300,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 盗贼 class.向 门卫葛托克.",
    "details": "Starting gear for the Bandit class.Purchased from Gatekeeper Gostoc.",
    "sourceTitle": "Bandit Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bandit_Boots",
    "verified": true
  },
  "armor:931100": {
    "kind": "armor",
    "itemId": 931100,
    "sourceKind": "shop",
    "summary": "商店购买：Starting gear ，用于 the 盗贼 class.向 门卫葛托克.",
    "details": "Starting gear for the Bandit class.Purchased from Gatekeeper Gostoc.",
    "sourceTitle": "Bandit Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bandit_Garb",
    "verified": true
  },
  "armor:940000": {
    "kind": "armor",
    "itemId": 940000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating “魔女猎人”杰廉 期间 Sellen's 任务线.",
    "details": "Received after defeating Witch-Hunter Jerren during Sellen's questline.",
    "sourceTitle": "Eccentric's Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Eccentric's_Hood",
    "verified": true
  },
  "armor:940100": {
    "kind": "armor",
    "itemId": 940100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating “魔女猎人”杰廉 期间 Sellen's 任务线.",
    "details": "Received after defeating Witch-Hunter Jerren during Sellen's questline.",
    "sourceTitle": "Eccentric's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Eccentric's_Armor",
    "verified": true
  },
  "armor:940200": {
    "kind": "armor",
    "itemId": 940200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Eccentric's Manchettes are 通过...获得 defeating “魔女猎人”杰廉 期间 魔法师瑟濂's 任务线.",
    "details": "The Eccentric's Manchettes are obtained by defeating Witch-Hunter Jerren during Sorceress Sellen's questline.",
    "sourceTitle": "Eccentric's Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Eccentric's_Manchettes",
    "verified": true
  },
  "armor:940300": {
    "kind": "armor",
    "itemId": 940300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating “魔女猎人”杰廉 期间 Sellen's 任务线.",
    "details": "Received after defeating Witch-Hunter Jerren during Sellen's questline.",
    "sourceTitle": "Eccentric's Breeches",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Eccentric's_Breeches",
    "verified": true
  },
  "armor:941000": {
    "kind": "armor",
    "itemId": 941000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received (unaltered) 后 defeating “魔女猎人”杰廉 期间 Sellen's 任务线. Can be altered ，地点： a 赐福 or by 裁缝师柏克.",
    "details": "Received (unaltered) after defeating Witch-Hunter Jerren during Sellen's questline. Can be altered at a site of grace or by Boc the Seamster.",
    "sourceTitle": "Eccentric's Hood (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Eccentric's_Hood_(Altered)",
    "verified": true
  },
  "armor:950000": {
    "kind": "armor",
    "itemId": 950000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating “圆桌骑士”维克 inside the 准王者的封印监牢 located on 巨人山顶.",
    "details": "Received after defeating Roundtable Knight Vyke inside the Lord Contender's Evergaol located on Mountaintops of the Giants.",
    "sourceTitle": "Fingerprint Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fingerprint_Helm",
    "verified": true
  },
  "armor:950100": {
    "kind": "armor",
    "itemId": 950100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating “圆桌骑士”维克 inside the 准王者的封印监牢 located on 巨人山顶.",
    "details": "Received after defeating Roundtable Knight Vyke inside the Lord Contender's Evergaol located on Mountaintops of the Giants.",
    "sourceTitle": "Fingerprint Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fingerprint_Armor",
    "verified": true
  },
  "armor:950200": {
    "kind": "armor",
    "itemId": 950200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：准王者的封印监牢；The Fingerprint Gauntlets are obtained 后 defeating “圆桌骑士”维克 ，位于 准王者的封印监牢 ，位于 巨人山顶.",
    "details": "Location: Lord Contender's Evergaol；The Fingerprint Gauntlets are obtained after defeating Roundtable Knight Vyke in the Lord Contender's Evergaol in the Mountaintops of the Giants.",
    "sourceTitle": "Fingerprint Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fingerprint_Gauntlets",
    "verified": true
  },
  "armor:950300": {
    "kind": "armor",
    "itemId": 950300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating “圆桌骑士”维克 inside the 准王者的封印监牢 located on 巨人山顶.",
    "details": "Received after defeating Roundtable Knight Vyke inside the Lord Contender's Evergaol located on Mountaintops of the Giants.",
    "sourceTitle": "Fingerprint Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fingerprint_Greaves",
    "verified": true
  },
  "armor:951100": {
    "kind": "armor",
    "itemId": 951100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating “圆桌骑士”维克 inside the 准王者的封印监牢 located on 巨人山顶.",
    "details": "Received after defeating Roundtable Knight Vyke inside the Lord Contender's Evergaol located on Mountaintops of the Giants.",
    "sourceTitle": "Fingerprint Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fingerprint_Armor_(Altered)",
    "verified": true
  },
  "armor:960000": {
    "kind": "armor",
    "itemId": 960000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：火山官邸；The Consort's Mask is 击杀后掉落： “火山官邸之主”塔妮丝 upon her death ，地点： the 赐福 “亵渎君王”拉卡德 赐福 in 火山官邸.",
    "details": "Location: Volcano Manor；The Consort's Mask is dropped by Tanith, Volcano Manor Proprietress upon her death at the 赐福 Rykard, Lord of Blasphemy Site of Grace in Volcano Manor.",
    "sourceTitle": "Consort's Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Consort's_Mask",
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
    "summary": "敌人 / 首领掉落：Dropped upon ending Tanith's 任务线.",
    "details": "Dropped upon ending Tanith's questline.",
    "sourceTitle": "Consort's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Consort's_Robe",
    "verified": true
  },
  "armor:960300": {
    "kind": "armor",
    "itemId": 960300,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from the 遁世商人 in 亚坛高原；Dropped upon ending Tanith's 任务线",
    "details": "Can be bought from the Hermit Merchant in Altus Plateau；Dropped upon ending Tanith's questline",
    "sourceTitle": "Consort's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Consort's_Trousers",
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
    "summary": "地图拾取 / 宝箱：地点：亚坛高原；The Ruler's Mask is looted from a corpse atop a broken caravan 附近 the 赐福 弃置棺材 赐福 in 亚坛高原.",
    "details": "Location: Altus Plateau；The Ruler's Mask is looted from a corpse atop a broken caravan near the 赐福 Abandoned Coffin site of grace in Altus Plateau.",
    "sourceTitle": "Ruler's Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ruler's_Mask",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse on a broken Great Coffin, located 附近 the 弃置棺材 赐福 in 亚坛高原.",
    "details": "Found on a corpse on a broken Great Coffin, located near the Abandoned Coffin site of grace in Altus Plateau.",
    "sourceTitle": "Ruler's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ruler's_Robe",
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
    "summary": "商店购买：Bought from the 遁世商人 in 亚坛高原.位于 on a corpse on a balcony in 王城罗德尔.",
    "details": "Bought from the Hermit Merchant in Altus Plateau.Found on a corpse on a balcony in Leyndell, Royal Capital.",
    "sourceTitle": "Upper-Class Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Upper-Class_Robe",
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
    "summary": "敌人 / 首领掉落：地点：日荫城；The Marais Mask is 击杀后掉落： “日荫城主”玛雷玛雷 upon 击败. He is 位于 outside the Shaded Castle.",
    "details": "Location: The Shaded Castle；The Marais Mask is dropped by Maleigh Marais, Shaded Castle Castellan upon defeat. He is found outside the Shaded Castle.",
    "sourceTitle": "Marais Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marais_Mask",
    "verified": true
  },
  "armor:963100": {
    "kind": "armor",
    "itemId": 963100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： “日荫城主”玛雷玛雷.",
    "details": "Dropped by Maleigh Marais, Shaded Castle Castellan.",
    "sourceTitle": "Marais Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marais_Robe",
    "verified": true
  },
  "armor:963200": {
    "kind": "armor",
    "itemId": 963200,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：弃置恶兆的地底；The 血soaked Manchettes are 位于 on a corpse 附近 the 赐福 地底大道旁 赐福 ，位于 sewers beneath 王城罗德尔.",
    "details": "Location: Subterranean Shunning-Grounds；The Bloodsoaked Manchettes are found on a corpse near the 赐福 Underground Roadside Site of Grace in the sewers beneath Leyndell, Royal Capital.",
    "sourceTitle": "Bloodsoaked Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodsoaked_Manchettes",
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
    "summary": "地图拾取 / 宝箱：地点：弃置恶兆的地底；The 血soaked Mask is 位于 on a corpse 附近 the 赐福 地底大道旁 赐福, located ，位于 sewers beneath 王城罗德尔.",
    "details": "Location: Subterranean Shunning-Grounds；The Bloodsoaked Mask is found on a corpse near the 赐福 Underground Roadside site of grace, located in the sewers beneath Leyndell, Royal Capital.",
    "sourceTitle": "Bloodsoaked Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodsoaked_Mask",
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
    "summary": "地图拾取 / 宝箱：Hidden within a room that you can only reach from the elevator ride that leads down to the 禁域 赐福.",
    "details": "Hidden within a room that you can only reach from the elevator ride that leads down to the Forbidden Lands grace.",
    "sourceTitle": "Official's Attire",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Official's_Attire",
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
    "summary": "任务 / 事件奖励：地点：弃置恶兆的地底；The Omen Helm is looted from the 食粪者 ，地点： the end of his 任务线.",
    "details": "Location: Subterranean Shunning-Grounds；The Omen Helm is looted from the Dung Eater at the end of his questline.",
    "sourceTitle": "Omen Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omen_Helm",
    "verified": true
  },
  "armor:970100": {
    "kind": "armor",
    "itemId": 970100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：地点：弃置恶兆的地底；The Omen 防具 is looted from 食粪者 following his death ，地点： the end of his 任务线.",
    "details": "Location: Subterranean Shunning-Grounds；The Omen Armor is looted from Dung Eater following his death at the end of his questline.",
    "sourceTitle": "Omen Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omen_Armor",
    "verified": true
  },
  "armor:970200": {
    "kind": "armor",
    "itemId": 970200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Omen Gauntlets are 击杀后掉落： the 食粪者 ，位于 弃置恶兆的地底.",
    "details": "The Omen Gauntlets are dropped by the Dung Eater in the Subterranean Shunning-Grounds.",
    "sourceTitle": "Omen Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omen_Gauntlets",
    "verified": true
  },
  "armor:970300": {
    "kind": "armor",
    "itemId": 970300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Received ，地点： the of 食粪者's 任务线 once you kill him.",
    "details": "Received at the of Dung Eater's questline once you kill him.",
    "sourceTitle": "Omen Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omen_Greaves",
    "verified": true
  },
  "armor:980000": {
    "kind": "armor",
    "itemId": 980000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：魔法学院雷亚卢卡利亚；The Carian 剑士 Helm is 位于 front of a prominent grave 附近 the rotating lift inside the 魔法学院雷亚卢卡利亚.",
    "details": "Location: Academy of Raya Lucaria；The Carian Knight Helm is found in front of a prominent grave near the rotating lift inside the Academy of Raya Lucaria.",
    "sourceTitle": "Carian Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Knight_Helm",
    "verified": true
  },
  "armor:980100": {
    "kind": "armor",
    "itemId": 980100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：Can be 位于 front of a tombstone 附近 the rotating lift inside Raya Lucaria.",
    "details": "Can be found in front of a tombstone near the rotating lift inside Raya Lucaria.",
    "sourceTitle": "Carian Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Knight_Armor",
    "verified": true
  },
  "armor:980200": {
    "kind": "armor",
    "itemId": 980200,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：魔法学院雷亚卢卡利亚；The Carian 剑士 Gauntlets are 位于 front of a tombstone 附近 the rotating lift inside the 魔法学院雷亚卢卡利亚.",
    "details": "Location: Academy of Raya Lucaria；The Carian Knight Gauntlets are found in front of a tombstone near the rotating lift inside the Academy of Raya Lucaria.",
    "sourceTitle": "Carian Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Knight_Gauntlets",
    "verified": true
  },
  "armor:980300": {
    "kind": "armor",
    "itemId": 980300,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：Can be 位于 front of a tombstone 附近 the rotating lift inside Raya Lucaria.thumb|details by zlofsky",
    "details": "Can be found in front of a tombstone near the rotating lift inside Raya Lucaria.thumb|details by zlofsky",
    "sourceTitle": "Carian Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Knight_Greaves",
    "verified": true
  },
  "armor:981100": {
    "kind": "armor",
    "itemId": 981100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：Can be 位于 unaltered in front of a tombstone 附近 the rotating lift inside Raya Lucaria. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Can be found unaltered in front of a tombstone near the rotating lift inside Raya Lucaria. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Carian Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:990000": {
    "kind": "armor",
    "itemId": 990000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：遁世者村；The Hierodas Glintstone Crown is 位于 on a corpse behind a house ，位于 遁世者村 on 格密尔火山.",
    "details": "Location: Hermit Village；The Hierodas Glintstone Crown is found on a corpse behind a house in the Hermit Village on Mt. Gelmir.",
    "sourceTitle": "Hierodas Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Hierodas_Glintstone_Crown",
    "verified": true
  },
  "armor:990100": {
    "kind": "armor",
    "itemId": 990100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 altered on a corpse inside the beastmen-invaded village 附近 the Craftman's Shack 赐福 located in 格密尔火山. Can be unaltered ，地点： a 赐福 or by Boc.",
    "details": "Found altered on a corpse inside the beastmen-invaded village near the Craftman's Shack site of grace located in Mt. Gelmir. Can be unaltered at a site of grace or by Boc.",
    "sourceTitle": "Errant Sorcerer Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Errant_Sorcerer_Robe",
    "verified": true
  },
  "armor:990200": {
    "kind": "armor",
    "itemId": 990200,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：遁世者村；The Errant Sorcerer Manchettes are 位于 on a corpse ，位于 遁世者村 附近 the 赐福 匠人的破屋 in 格密尔火山.",
    "details": "Location: Hermit Village；The Errant Sorcerer Manchettes are found on a corpse in the Hermit Village near the 赐福 Craftsman's Shack in Mt. Gelmir.",
    "sourceTitle": "Errant Sorcerer Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Errant_Sorcerer_Manchettes",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the beastmen-invaded village 附近 the Craftman's Shack 赐福 located in 格密尔火山.",
    "details": "Found on a corpse inside the beastmen-invaded village near the Craftman's Shack site of grace located in Mt. Gelmir.",
    "sourceTitle": "Errant Sorcerer Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Errant_Sorcerer_Boots",
    "verified": true
  },
  "armor:991100": {
    "kind": "armor",
    "itemId": 991100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse inside the 遁世者村 附近 the Craftman's Shack 赐福 located in 格密尔火山.",
    "details": "Found on a corpse inside the Hermit Village near the Craftman's Shack site of grace located in Mt. Gelmir.",
    "sourceTitle": "Errant Sorcerer Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Errant_Sorcerer_Robe_(Altered)",
    "verified": true
  },
  "armor:1000000": {
    "kind": "armor",
    "itemId": 1000000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：亚坛高原；The Haima Glintstone Crown is 击杀后掉落： a Battlemage the first time it is defeated, north of the 赐福 移送罪人之路（路旁） 赐福, on a hill behind the bridge where Goldmask is first encountered.",
    "details": "Location: Altus Plateau；The Haima Glintstone Crown is dropped by a Battlemage the first time it is defeated, north of the 赐福 Road of Iniquity Side Path Site of Grace, on a hill behind the bridge where Goldmask is first encountered.",
    "sourceTitle": "Haima Glintstone Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haima_Glintstone_Crown",
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
    "summary": "敌人 / 首领掉落：A Battlemage enemy drops the entire set the first time you 击败 him, directly north of the 移送罪人之路（路旁） 赐福, 亚坛高原, up on a hill behind the bridge where you first meet Goldmask.",
    "details": "A Battlemage enemy drops the entire set the first time you defeat him, directly north of the Road of Iniquity Side Path grace, Altus Plateau, up on a hill behind the bridge where you first meet Goldmask.",
    "sourceTitle": "Battlemage Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Battlemage_Robe",
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
    "summary": "敌人 / 首领掉落：地点：亚坛高原；The Battlemage Manchettes are 击杀后掉落： the Battlemage north of the 赐福 移送罪人之路（路旁） 赐福 ，位于 亚坛高原, on the hill behind the bridge where Goldmask is first encountered.",
    "details": "Location: Altus Plateau；The Battlemage Manchettes are dropped by the Battlemage north of the 赐福 Road of Iniquity Side Path Site of Grace in the Altus Plateau, on the hill behind the bridge where Goldmask is first encountered.",
    "sourceTitle": "Battlemage Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Battlemage_Manchettes",
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
    "summary": "敌人 / 首领掉落：A Battlemage enemy drops the entire set the first time you 击败 him, directly north of the 移送罪人之路（路旁） 赐福, 亚坛高原, up on a hill behind the bridge where you first meet Goldmask.",
    "details": "A Battlemage enemy drops the entire set the first time you defeat him, directly north of the Road of Iniquity Side Path grace, Altus Plateau, up on a hill behind the bridge where you first meet Goldmask.",
    "sourceTitle": "Battlemage Legwraps",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Battlemage_Legwraps",
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
    "summary": "任务 / 事件奖励：地点：蕾娜魔法师塔；The Snow Witch Hat is looted from a 宝箱 on the upper floor of 蕾娜魔法师塔 ，地点： 三姊妹塔 in 湖之利耶尼亚. The tower becomes accessible 期间 魔女菈妮's 任务线.",
    "details": "Location: Renna's Rise；The Snow Witch Hat is looted from a chest on the upper floor of Renna's Rise at Three Sisters in Liurnia of the Lakes. The tower becomes accessible during Ranni the Witch's questline.",
    "sourceTitle": "Snow Witch Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Snow_Witch_Hat",
    "verified": true
  },
  "armor:1010100": {
    "kind": "armor",
    "itemId": 1010100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：位于 inside a 宝箱 inside 蕾娜魔法师塔 in 湖之利耶尼亚. Can only be accessed 后 progressing through Ranni's 任务线.",
    "details": "Found inside a chest inside Renna's Rise in Liurnia of the Lakes. Can only be accessed after progressing through Ranni's Questline.",
    "sourceTitle": "Snow Witch Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Snow_Witch_Robe",
    "verified": true
  },
  "armor:1010300": {
    "kind": "armor",
    "itemId": 1010300,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：位于 inside a 宝箱 inside 蕾娜魔法师塔 in 湖之利耶尼亚. Can only be accessed 后 progressing through Ranni's 任务线.thumb|Details by Zlofsky2nd",
    "details": "Found inside a chest inside Renna's Rise in Liurnia of the Lakes. Can only be accessed after progressing through Ranni's Questline.thumb|Details by Zlofsky2nd",
    "sourceTitle": "Snow Witch Skirt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Snow_Witch_Skirt",
    "verified": true
  },
  "armor:1011100": {
    "kind": "armor",
    "itemId": 1011100,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：位于 unaltered inside a 宝箱 inside 蕾娜魔法师塔 in 湖之利耶尼亚. Can only be accessed 后 progressing through Ranni's 任务线. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Found unaltered inside a chest inside Renna's Rise in Liurnia of the Lakes. Can only be accessed after progressing through Ranni's Questline. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Snow Witch Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Snow_Witch_Robe_(Altered)",
    "verified": true
  },
  "armor:1020100": {
    "kind": "armor",
    "itemId": 1020100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：“圣树分枝”艾布雷菲尔；The Traveler's Clothes are looted from the rotflower ，位于 sideroom beside the 赐福 圣树底层 赐福.",
    "details": "Location: Elphael, Brace of the Haligtree；The Traveler's Clothes are looted from the rotflower in the sideroom beside the 赐福 Haligtree Roots site of grace.",
    "sourceTitle": "Traveler's Clothes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveler's_Clothes",
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
    "summary": "地图拾取 / 宝箱：地点：圣树底层；The Traveler's Manchettes are 位于 next to the 圣树底层 赐福.",
    "details": "Location: Haligtree Roots；The Traveler's Manchettes are found next to the Haligtree Roots site of grace.",
    "sourceTitle": "Traveler's Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveler's_Manchettes",
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
    "summary": "地图拾取 / 宝箱：位于 right next to the 圣树底层 赐福.",
    "details": "Found right next to the Haligtree Roots site of grace.",
    "sourceTitle": "Traveler's Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Traveler's_Boots",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：湖之利耶尼亚；The Juvenile Scholar Robe is acquired upon interacting with the Painter Spirit 位于 the graveyard outside 卡利亚城寨, southeast of the 赐福 卡利亚城寨（后方） 赐福 in 湖之利耶尼亚.",
    "details": "Location: Liurnia of the Lakes；The Juvenile Scholar Robe is acquired upon interacting with the Painter Spirit found in the graveyard outside Caria Manor, southeast of the 赐福 Behind Caria Manor Site of Grace in Liurnia of the Lakes.The Painter Spirit only appears if the player holds the \"Resurrection\" Painting found inside the Artist's Shack (Liurnia).The area is patrolled by Second-Generation Albinaurics.",
    "sourceTitle": "Juvenile Scholar Cap",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Juvenile_Scholar_Cap",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：湖之利耶尼亚；The Juvenile Scholar Robe is acquired upon interacting with the Painter Spirit 位于 the graveyard outside 卡利亚城寨, southeast of the 赐福 卡利亚城寨（后方） 赐福 in 湖之利耶尼亚.",
    "details": "Location: Liurnia of the Lakes；The Juvenile Scholar Robe is acquired upon interacting with the Painter Spirit found in the graveyard outside Caria Manor, southeast of the 赐福 Behind Caria Manor Site of Grace in Liurnia of the Lakes.The Painter Spirit only appears if the player holds the \"Resurrection\" Painting found inside the Artist's Shack (Liurnia).The area is patrolled by Second-Generation Albinaurics.",
    "sourceTitle": "Juvenile Scholar Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Juvenile_Scholar_Robe",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：Can be 位于 on a corpse ，地点： the edge of the north part of the broken bridge in 亚坛高原.",
    "details": "Can be found on a corpse at the edge of the north part of the broken bridge in Altus Plateau.",
    "sourceTitle": "Radiant Gold Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radiant_Gold_Mask",
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
    "summary": "任务 / 事件奖励：完成 Goldmask's 任务线, then reload the area to loot the armor set from where you 位于 him.",
    "details": "Complete Goldmask's questline, then reload the area to loot the armor set from where you found him.",
    "sourceTitle": "Goldmask's Rags",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Goldmask's_Rags",
    "verified": true
  },
  "armor:1040200": {
    "kind": "armor",
    "itemId": 1040200,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：The Gold Bracelets are 通过...获得 completing Goldmask's 任务线.",
    "details": "The Gold Bracelets are obtained by completing Goldmask's questline.",
    "sourceTitle": "Gold Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gold_Bracelets",
    "verified": true
  },
  "armor:1040300": {
    "kind": "armor",
    "itemId": 1040300,
    "sourceKind": "other",
    "summary": "其他来源：thumb|Details from Zlofsky",
    "details": "thumb|Details from Zlofsky",
    "sourceTitle": "Gold Waistwrap",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gold_Waistwrap",
    "verified": true
  },
  "armor:1050100": {
    "kind": "armor",
    "itemId": 1050100,
    "sourceKind": "shop",
    "summary": "商店购买：Can be bought from “解指”恩雅 ，地点： 圆桌厅堂 once having defeated “恶兆王”蒙葛特.",
    "details": "Can be bought from Finger Reader Enia at Roundtable Hold once having defeated Morgott, the Omen King.",
    "sourceTitle": "Fell Omen Cloak",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fell_Omen_Cloak",
    "verified": true
  },
  "armor:1060000": {
    "kind": "armor",
    "itemId": 1060000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：火山官邸 (Prison Town)；The Albinauric Mask is 位于 on a corpse on a bed ，位于 Prison Town of the 火山官邸 on 格密尔火山, 附近 the 赐福 迎宾厅 赐福.",
    "details": "Location: Volcano Manor (Prison Town)；The Albinauric Mask is found on a corpse on a bed in the Prison Town of the Volcano Manor on Mt. Gelmir, near the 赐福 Guest Hall site of grace.From the Guest Hall, head left twice, climb the stairs, exit outside, turn left, and climb the ladder to reach the roof. Drop onto the east balcony and enter the torch-lit doorway to find the item. Beware the Omenkiller.",
    "sourceTitle": "Albinauric Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Albinauric_Mask",
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
    "summary": "敌人 / 首领掉落：?.??% 有概率从 年轻 Albinaurics enemies that wear it",
    "details": "?.??% chance to drop from Young Albinaurics enemies that wear it",
    "sourceTitle": "Dirty Chainmail",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dirty_Chainmail",
    "verified": true
  },
  "armor:1070000": {
    "kind": "armor",
    "itemId": 1070000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：巨人战争的英雄墓地；The Zamor Mask is received upon defeating the 萨米尔的古英雄 boss inside the 巨人战争的英雄墓地, located in 巨人山顶.",
    "details": "Location: Giant-Conquering Hero's Grave；The Zamor Mask is received upon defeating the Ancient Hero of Zamor boss inside the Giant-Conquering Hero's Grave, located in Mountaintops of the Giants.",
    "sourceTitle": "Zamor Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Zamor_Mask",
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
    "summary": "敌人 / 首领掉落：地点：巨人战争的英雄墓地；Received upon defeating the 萨米尔的古英雄 boss inside the 巨人战争的英雄墓地, located on the 巨人山顶.",
    "details": "Location: Giant-Conquering Hero's Grave；Received upon defeating the Ancient Hero of Zamor boss inside the Giant-Conquering Hero's Grave, located on the Mountaintops of the Giants.",
    "sourceTitle": "Zamor Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Zamor_Armor",
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
    "summary": "敌人 / 首领掉落：地点：巨人战争的英雄墓地；The Zamor Bracelets is received upon defeating the 萨米尔的古英雄 boss inside the 巨人战争的英雄墓地, located on the 巨人山顶.",
    "details": "Location: Giant-Conquering Hero's Grave；The Zamor Bracelets is received upon defeating the Ancient Hero of Zamor boss inside the Giant-Conquering Hero's Grave, located on the Mountaintops of the Giants.",
    "sourceTitle": "Zamor Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Zamor_Bracelets",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 萨米尔的古英雄 boss inside the 巨人战争的英雄墓地 located in Moutaintops of the Giants.",
    "details": "Received upon defeating the Ancient Hero of Zamor boss inside the Giant-Conquering Hero's Grave located in Moutaintops of the Giants.",
    "sourceTitle": "Zamor Legwraps",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Zamor_Legwraps",
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
    "summary": "敌人 / 首领掉落：Cat-headed Imps have a chance to drop this item. They can be 位于 various catacombs ，位于 Lands Between, including the 风暴根脚的地下墓地 to the northwest of the 艾雷教堂.",
    "details": "Cat-headed Imps have a chance to drop this item. They can be found in various catacombs in the Lands Between, including the Stormfoot Catacombs to the northwest of the Church of Elleh.",
    "sourceTitle": "Imp Head (Cat)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Imp_Head_(Cat)",
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
    "summary": "敌人 / 首领掉落：有概率从 Imp enemies with the same face, such as the ones inside the 断崖下的地下墓地 located in 湖之利耶尼亚.",
    "details": "Chance to drop from Imp enemies with the same face, such as the ones inside the Cliffbottom Catacombs located in Liurnia of the Lakes.",
    "sourceTitle": "Imp Head (Fanged)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Imp_Head_(Fanged)",
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
    "summary": "敌人 / 首领掉落：有概率从 Imp enemies with the same face, such as the ones ，位于 弃置恶兆的地底.",
    "details": "Chance to drop from Imp enemies with the same face, such as the ones in the Subterranean Shunning-Grounds.",
    "sourceTitle": "Imp Head (Long-Tongued)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Imp_Head_(Long-Tongued)",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse on the streets of 王城罗德尔. Can be accessed by going south from the giant door leading to the area where the 洛德大升降机 is located.",
    "details": "Found on a corpse on the streets of Leyndell, Royal Capital. Can be accessed by going south from the giant door leading to the area where the Grand Lift of Rold is located.",
    "sourceTitle": "Imp Head (Corpse)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Imp_Head_(Corpse)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 on a corpse inside the 小黄金树地下墓地 located in 盖利德. 击杀后掉落： Imp enemies with the same face.",
    "details": "Found on a corpse inside the Minor Erdtree Catacombs located in Caelid. Dropped by Imp enemies with the same face.",
    "sourceTitle": "Imp Head (Wolf)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Imp_Head_(Wolf)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 on a corpse in front of an 归树看门犬 enemy inside the 化圣雪原地下墓地.",
    "details": "Found on a corpse in front of an Erdtree Burial Watchdog enemy inside the Consecrated Snowfield Catacombs.",
    "sourceTitle": "Imp Head (Elder)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Imp_Head_(Elder)",
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
    "summary": "敌人 / 首领掉落：Received upon defeating the 仿身泪滴 boss in “永恒之城”诺克隆恩.",
    "details": "Received upon defeating the Mimic Tear boss in Nokron, Eternal City.",
    "sourceTitle": "Silver Tear Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Silver_Tear_Mask",
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
    "summary": "商店购买：地点：艾雷教堂；The Chain Coif is 向 “流浪商人”咖列 ，地点： the 艾雷教堂 ，用于 卢恩 1,000 卢恩.",
    "details": "Location: Church of Elleh；The Chain Coif is purchased from Merchant Kalé at the Church of Elleh for 卢恩 1,000 runes.Alternatively, it can be purchased for the same price from the Twin Maiden Husks at the Roundtable Hold after giving them Kalé's Bell Bearing.",
    "sourceTitle": "Chain Coif",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Chain_Coif",
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
    "summary": "商店购买：由 Kalé；<gallery>",
    "details": "Sold by Kalé；<gallery>；ER Icon Armor Chain Armor Type A.png|Type A body appearance；ER Icon Armor Chain Armor Type B.png|Type B body appearance；</gallery>",
    "sourceTitle": "Chain Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Chain_Armor",
    "verified": true
  },
  "armor:1100200": {
    "kind": "armor",
    "itemId": 1100200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gauntlets",
    "verified": false
  },
  "armor:1100300": {
    "kind": "armor",
    "itemId": 1100300,
    "sourceKind": "shop",
    "summary": "商店购买：由 Kalé",
    "details": "Sold by Kalé",
    "sourceTitle": "Chain Leggings",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Chain_Leggings",
    "verified": true
  },
  "armor:1101000": {
    "kind": "armor",
    "itemId": 1101000,
    "sourceKind": "shop",
    "summary": "商店购买：地点：盖利德；The Greathelm is 向 the 流浪民族的商人 附近 the 赐福 艾奥尼亚沼泽（南岸） 赐福 in southern 盖利德 ，用于 卢恩 1,800 卢恩.",
    "details": "Location: Caelid；The Greathelm is purchased from the Nomadic Merchant near the 赐福 Southern Aeonia Swamp Bank Site of Grace in southern Caelid for 卢恩 1,800 runes.Alternatively, it can be purchased from the Twin Maiden Husks at the Roundtable Hold for the same price after giving them the [[Nomadic Merchant's Bell Bearing 10|<nowiki>Nomadic Merchant's Bell Bearing [10]</nowiki>]].",
    "sourceTitle": "Greathelm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greathelm",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 on the ground 后 defeating “亵渎君王”拉卡德.",
    "details": "Found on the ground after defeating Rykard, Lord of Blasphemy.",
    "sourceTitle": "Eye Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Eye_Surcoat",
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
    "summary": "商店购买：Bought from 流浪民族的商人 (亚坛高原).",
    "details": "Bought from Nomadic Merchant (Altus Plateau).",
    "sourceTitle": "Tree Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tree_Surcoat",
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
    "summary": "敌人 / 首领掉落：有概率从 Land Octopus enemies.",
    "details": "Chance to drop from Land Octopus enemies.",
    "sourceTitle": "Octopus Head",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Octopus_Head",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Jar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Jar",
    "verified": false,
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse alongside with the rest of the set inside 沸滚河洞窟 located in 格密尔火山.",
    "details": "Found on a corpse alongside with the rest of the set inside Seethewater Cave located in Mt. Gelmir.",
    "sourceTitle": "Mushroom Head",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mushroom_Head",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse alongside with the rest of the set inside 沸滚河洞窟 located in 格密尔火山.",
    "details": "Found on a corpse alongside with the rest of the set inside Seethewater Cave located in Mt. Gelmir.",
    "sourceTitle": "Mushroom Body",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mushroom_Body",
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
    "summary": "地图拾取 / 宝箱：地点：沸滚河洞窟；The Mushroom 臂甲 are 位于 on a corpse alongside the rest of the Mushroom Set in 沸滚河洞窟 on 格密尔火山.",
    "details": "Location: Seethewater Cave；The Mushroom Arms are found on a corpse alongside the rest of the Mushroom Set in Seethewater Cave on Mt. Gelmir.",
    "sourceTitle": "Mushroom Arms",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mushroom_Arms",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse alongside with the rest of the set inside 沸滚河洞窟 located in 格密尔火山.",
    "details": "Found on a corpse alongside with the rest of the set inside Seethewater Cave located in Mt. Gelmir.",
    "sourceTitle": "Mushroom Legs",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mushroom_Legs",
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
    "summary": "地图拾取 / 宝箱：地点：断崖下的地下墓地；The Nox Mirrorhelm is located ，位于 断崖下的地下墓地 in southeastern 湖之利耶尼亚. It is 位于 on a body behind a Imp Statue that is unlocked with one 石剑钥匙.",
    "details": "Location: Cliffbottom Catacombs；The Nox Mirrorhelm is located in the Cliffbottom Catacombs in southeastern Liurnia of the Lakes. It is found on a body behind a Imp Statue that is unlocked with one Stonesword Key.",
    "sourceTitle": "Nox Mirrorhelm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nox_Mirrorhelm",
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
    "summary": "任务 / 事件奖励：Can be looted from 军师伊吉 后 completing Blaidd's 任务线.",
    "details": "Can be looted from War Counselor Iji after completing Blaidd's questline.",
    "sourceTitle": "Iji's Mirrorhelm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Iji's_Mirrorhelm",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：贤者的洞窟；The Black Hood is looted from a 宝箱 behind an illusory wall within 贤者的洞窟 in 亚坛高原.",
    "details": "Location: Sage's Cave；The Black Hood is looted from a chest behind an illusory wall within Sage's Cave in Altus Plateau.",
    "sourceTitle": "Black Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Hood",
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
    "summary": "敌人 / 首领掉落：Drops from 帕奇.",
    "details": "Drops from Patches.",
    "sourceTitle": "Leather Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Armor",
    "verified": true
  },
  "armor:1400200": {
    "kind": "armor",
    "itemId": 1400200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Leather Gloves are 通过...获得 defeating 帕奇.",
    "details": "The Leather Gloves are obtained by defeating Patches.",
    "sourceTitle": "Leather Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Gloves",
    "verified": true
  },
  "armor:1400300": {
    "kind": "armor",
    "itemId": 1400300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Drops from 帕奇.",
    "details": "Drops from Patches.",
    "sourceTitle": "Leather Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Boots",
    "verified": true
  },
  "armor:1401000": {
    "kind": "armor",
    "itemId": 1401000,
    "sourceKind": "shop",
    "summary": "商店购买：Starting equipment ，用于 the 盗贼 class.向 流浪民族的商人 (Northern 宁姆格福) ，用于 卢恩 1,500 卢恩.",
    "details": "Starting equipment for the Bandit class.Purchased from Nomadic Merchant (Northern Limgrave) for 卢恩 1,500 runes.",
    "sourceTitle": "Bandit Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bandit_Mask",
    "verified": true
  },
  "armor:1500000": {
    "kind": "armor",
    "itemId": 1500000,
    "sourceKind": "shop",
    "summary": "商店购买：可向 the 孪生老妪 ，地点： the 圆桌厅堂.",
    "details": "Can be purchased from the Twin Maiden Husks at the Roundtable Hold.",
    "sourceTitle": "Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Knight_Helm",
    "verified": true
  },
  "armor:1500100": {
    "kind": "armor",
    "itemId": 1500100,
    "sourceKind": "shop",
    "summary": "商店购买：可向 the 孪生老妪 ，地点： the 圆桌厅堂.",
    "details": "Can be purchased from the Twin Maiden Husks at the Roundtable Hold.",
    "sourceTitle": "Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Knight_Armor",
    "verified": true
  },
  "armor:1500200": {
    "kind": "armor",
    "itemId": 1500200,
    "sourceKind": "shop",
    "summary": "商店购买：The 剑士 Gauntlets 可向 the 孪生老妪 ，地点： the 圆桌厅堂 ，用于 卢恩 3,000 卢恩.",
    "details": "The Knight Gauntlets can be purchased from the Twin Maiden Husks at the Roundtable Hold for 卢恩 3,000 runes.",
    "sourceTitle": "Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Knight_Gauntlets",
    "verified": true
  },
  "armor:1500300": {
    "kind": "armor",
    "itemId": 1500300,
    "sourceKind": "shop",
    "summary": "商店购买：可向 the 孪生老妪 ，地点： the 圆桌厅堂.",
    "details": "Can be purchased from the Twin Maiden Husks at the Roundtable Hold.",
    "sourceTitle": "Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Knight_Greaves",
    "verified": true
  },
  "armor:1600000": {
    "kind": "armor",
    "itemId": 1600000,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：地点：巨人山顶；The Greathood is the ...奖励 completing the \"Sorcerer\" Painting. The puzzle solution is on a bridge located northwest of the Stargazer's Ruins on the 巨人山顶. The item appears on the ground 后 reaching the Painter Spirit.",
    "details": "Location: Mountaintops of the Giants；The Greathood is the reward for completing the \"Sorcerer\" Painting. The puzzle solution is on a bridge located northwest of the Stargazer's Ruins on the Mountaintops of the Giants. The item appears on the ground after reaching the Painter Spirit.",
    "sourceTitle": "Greathood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greathood",
    "verified": true
  },
  "armor:1700000": {
    "kind": "armor",
    "itemId": 1700000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Godrick Soldier enemies.",
    "details": "Chance to drop from Godrick Soldier enemies.",
    "sourceTitle": "Godrick Soldier Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Soldier_Helm",
    "verified": true
  },
  "armor:1700100": {
    "kind": "armor",
    "itemId": 1700100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Godrick Soldier enemies.",
    "details": "Chance to drop from Godrick Soldier enemies.",
    "sourceTitle": "Tree-and-Beast Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tree-and-Beast_Surcoat",
    "verified": true
  },
  "armor:1700200": {
    "kind": "armor",
    "itemId": 1700200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Godrick Soldier Gauntlets have a 1.50% 有概率从 Godrick Soldier enemies.",
    "details": "The Godrick Soldier Gauntlets have a 1.50% chance to drop from Godrick Soldier enemies.",
    "sourceTitle": "Godrick Soldier Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Soldier_Gauntlets",
    "verified": true
  },
  "armor:1700300": {
    "kind": "armor",
    "itemId": 1700300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop by Godrick Soldier enemies.",
    "details": "Chance to drop by Godrick Soldier enemies.",
    "sourceTitle": "Godrick Soldier Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Soldier_Greaves",
    "verified": true
  },
  "armor:1710000": {
    "kind": "armor",
    "itemId": 1710000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Raya Lucarian Soldier enemies.",
    "details": "Chance to drop from Raya Lucarian Soldier enemies.",
    "sourceTitle": "Raya Lucarian Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raya_Lucarian_Helm",
    "verified": true
  },
  "armor:1710100": {
    "kind": "armor",
    "itemId": 1710100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Raya Lucaria Soldier enemies.",
    "details": "Chance to drop from Raya Lucaria Soldier enemies.",
    "sourceTitle": "Cuckoo Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cuckoo_Surcoat",
    "verified": true
  },
  "armor:1710200": {
    "kind": "armor",
    "itemId": 1710200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Raya Lucarian Gauntlets have a 1.50% 有概率从 Raya Lucaria Soldier enemies.",
    "details": "The Raya Lucarian Gauntlets have a 1.50% chance to drop from Raya Lucaria Soldier enemies.",
    "sourceTitle": "Raya Lucarian Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raya_Lucarian_Gauntlets",
    "verified": true
  },
  "armor:1710300": {
    "kind": "armor",
    "itemId": 1710300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Raya Lucarian Soldier enemies.",
    "details": "Chance to drop from Raya Lucarian Soldier enemies.",
    "sourceTitle": "Raya Lucarian Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raya_Lucarian_Greaves",
    "verified": true
  },
  "armor:1720000": {
    "kind": "armor",
    "itemId": 1720000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell Soldier enemies.",
    "details": "Chance to drop from Leyndell Soldier enemies.",
    "sourceTitle": "Leyndell Soldier Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Soldier_Helm",
    "verified": true
  },
  "armor:1720100": {
    "kind": "armor",
    "itemId": 1720100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell Soldier enemies.",
    "details": "Chance to drop from Leyndell Soldier enemies.",
    "sourceTitle": "Erdtree Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Erdtree_Surcoat",
    "verified": true
  },
  "armor:1720200": {
    "kind": "armor",
    "itemId": 1720200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Leyndell Soldier Gauntlets have a 1.50% 有概率从 Leyndell Soldier enemies.",
    "details": "The Leyndell Soldier Gauntlets have a 1.50% chance to drop from Leyndell Soldier enemies.",
    "sourceTitle": "Leyndell Soldier Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Soldier_Gauntlets",
    "verified": true
  },
  "armor:1720300": {
    "kind": "armor",
    "itemId": 1720300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell Soldier enemies.",
    "details": "Chance to drop from Leyndell Soldier enemies.",
    "sourceTitle": "Leyndell Soldier Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Soldier_Greaves",
    "verified": true
  },
  "armor:1730000": {
    "kind": "armor",
    "itemId": 1730000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Radahn Soldier enemies.",
    "details": "Chance to drop from Radahn Soldier enemies.",
    "sourceTitle": "Radahn Soldier Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn_Soldier_Helm",
    "verified": true
  },
  "armor:1730100": {
    "kind": "armor",
    "itemId": 1730100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Radahn Soldier enemies.",
    "details": "Chance to drop from Radahn Soldier enemies.",
    "sourceTitle": "Redmane Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Redmane_Surcoat",
    "verified": true
  },
  "armor:1730200": {
    "kind": "armor",
    "itemId": 1730200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Radahn Soldier Gauntlets have a 有概率从 Radahn Soldier enemies.",
    "details": "The Radahn Soldier Gauntlets have a chance to drop from Radahn Soldier enemies.",
    "sourceTitle": "Radahn Soldier Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn_Soldier_Gauntlets",
    "verified": true
  },
  "armor:1730300": {
    "kind": "armor",
    "itemId": 1730300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Radahn Soldier enemies.",
    "details": "Chance to drop from Radahn Soldier enemies.",
    "sourceTitle": "Radahn Soldier Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn_Soldier_Greaves",
    "verified": true
  },
  "armor:1740100": {
    "kind": "armor",
    "itemId": 1740100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：1.5% 有概率从 Mausoleum Soldier enemies.",
    "details": "1.5% chance to drop from Mausoleum Soldier enemies.",
    "sourceTitle": "Mausoleum Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Surcoat",
    "verified": true
  },
  "armor:1740200": {
    "kind": "armor",
    "itemId": 1740200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Mausoleum Gauntlets have a 1.50% 有概率从 Mausoleum Soldier enemies.",
    "details": "The Mausoleum Gauntlets have a 1.50% chance to drop from Mausoleum Soldier enemies.",
    "sourceTitle": "Mausoleum Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Gauntlets",
    "verified": true
  },
  "armor:1740300": {
    "kind": "armor",
    "itemId": 1740300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：1.5% 有概率从 Mausoleum Soldier enemies.",
    "details": "1.5% chance to drop from Mausoleum Soldier enemies.",
    "sourceTitle": "Mausoleum Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Greaves",
    "verified": true
  },
  "armor:1750000": {
    "kind": "armor",
    "itemId": 1750000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Haligtree Soldier enemies.Easily farmable northeast of 祈祷室 赐福.",
    "details": "Chance to drop from Haligtree Soldier enemies.Easily farmable northeast of Prayer Room grace.",
    "sourceTitle": "Haligtree Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Helm",
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
    "summary": "敌人 / 首领掉落：有概率从 Haligtree Soldiers.Easily farmable northeast of 祈祷室 赐福.",
    "details": "Chance to drop from Haligtree Soldiers.Easily farmable northeast of Prayer Room grace.",
    "sourceTitle": "Haligtree Crest Surcoat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Crest_Surcoat",
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
    "summary": "敌人 / 首领掉落：The Haligtree Gauntlets have a 4.00% 有概率从 Haligtree Soldier enemies.They can be easily farmed northeast of the 祈祷室 赐福.",
    "details": "The Haligtree Gauntlets have a 4.00% chance to drop from Haligtree Soldier enemies.They can be easily farmed northeast of the Prayer Room 赐福.",
    "sourceTitle": "Haligtree Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Gauntlets",
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
    "summary": "敌人 / 首领掉落：有概率从 Haligtree Soldier enemies.Easily farmable northeast of 祈祷室 赐福.",
    "details": "Chance to drop from Haligtree Soldier enemies.Easily farmable northeast of Prayer Room grace.",
    "sourceTitle": "Haligtree Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Greaves",
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
    "sourceKind": "other",
    "summary": "其他来源：格密尔英雄墓地, right where the 猎犬骑士 with the 猎犬骑士 set is.",
    "details": "Gelmir Hero's Grave, right where the Bloodhound Knight with the Bloodhound Knight set is.",
    "sourceTitle": "Gelmir Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gelmir_Knight_Helm",
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
    "sourceKind": "other",
    "summary": "其他来源：格密尔英雄墓地, right where the 猎犬骑士 with the 猎犬骑士 set is.",
    "details": "Gelmir Hero's Grave, right where the Bloodhound Knight with the Bloodhound Knight set is.",
    "sourceTitle": "Gelmir Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gelmir_Knight_Armor",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：格密尔英雄墓地；The Gelmir 剑士 Gauntlets are 位于 格密尔英雄墓地, 附近 the 猎犬骑士 that drops the 猎犬骑士 Set.",
    "details": "Location: Gelmir Hero's Grave；The Gelmir Knight Gauntlets are found in Gelmir Hero's Grave, near the Bloodhound Knight that drops the Bloodhound Knight Set.",
    "sourceTitle": "Gelmir Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gelmir_Knight_Gauntlets",
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
    "sourceKind": "other",
    "summary": "其他来源：格密尔英雄墓地, right where the 猎犬骑士 with the 猎犬骑士 set is.",
    "details": "Gelmir Hero's Grave, right where the Bloodhound Knight with the Bloodhound Knight set is.",
    "sourceTitle": "Gelmir Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gelmir_Knight_Greaves",
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
    "sourceKind": "other",
    "summary": "其他来源：格密尔英雄墓地, right where the 猎犬骑士 with the 猎犬骑士 set is. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Gelmir Hero's Grave, right where the Bloodhound Knight with the Bloodhound Knight set is. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Gelmir Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gelmir_Knight_Armor_(Altered)",
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
    "summary": "敌人 / 首领掉落：有概率从 Godrick 剑士 enemies.",
    "details": "Chance to drop from Godrick Knight enemies.",
    "sourceTitle": "Godrick Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Knight_Helm",
    "verified": true
  },
  "armor:1770100": {
    "kind": "armor",
    "itemId": 1770100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Godrick 剑士 enemies.",
    "details": "Chance to drop from Godrick Knight enemies.",
    "sourceTitle": "Godrick Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Knight_Armor",
    "verified": true
  },
  "armor:1770200": {
    "kind": "armor",
    "itemId": 1770200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Godrick 剑士 Gauntlets have a 3.00% 有概率从 Godrick 剑士 enemies.",
    "details": "The Godrick Knight Gauntlets have a 3.00% chance to drop from Godrick Knight enemies.",
    "sourceTitle": "Godrick Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Knight_Gauntlets",
    "verified": true
  },
  "armor:1770300": {
    "kind": "armor",
    "itemId": 1770300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Godrick 剑士 enemies.",
    "details": "Chance to drop from Godrick Knight enemies.",
    "sourceTitle": "Godrick Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Knight_Greaves",
    "verified": true
  },
  "armor:1771100": {
    "kind": "armor",
    "itemId": 1771100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Godrick 剑士 enemies. Can be altered by Boc.",
    "details": "Chance to drop from Godrick Knight enemies. Can be altered by Boc.",
    "sourceTitle": "Godrick Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:1780000": {
    "kind": "armor",
    "itemId": 1780000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Cuckoo 剑士 enemies.",
    "details": "Chance to drop from Cuckoo Knight enemies.",
    "sourceTitle": "Cuckoo Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cuckoo_Knight_Helm",
    "verified": true
  },
  "armor:1780100": {
    "kind": "armor",
    "itemId": 1780100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Cuckoo 剑士 enemies.",
    "details": "Chance to drop from Cuckoo Knight enemies.",
    "sourceTitle": "Cuckoo Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cuckoo_Knight_Armor",
    "verified": true
  },
  "armor:1780200": {
    "kind": "armor",
    "itemId": 1780200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Cuckoo 剑士 Gauntlets have a 3.00% 有概率从 Cuckoo 剑士 enemies.",
    "details": "The Cuckoo Knight Gauntlets have a 3.00% chance to drop from Cuckoo Knight enemies.",
    "sourceTitle": "Cuckoo Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cuckoo_Knight_Gauntlets",
    "verified": true
  },
  "armor:1780300": {
    "kind": "armor",
    "itemId": 1780300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Cuckoo 剑士 enemies.",
    "details": "Chance to drop from Cuckoo Knight enemies.",
    "sourceTitle": "Cuckoo Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cuckoo_Knight_Greaves",
    "verified": true
  },
  "armor:1781100": {
    "kind": "armor",
    "itemId": 1781100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from Cuckoo 剑士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Cuckoo Knight enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Cuckoo Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cuckoo_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:1790000": {
    "kind": "armor",
    "itemId": 1790000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell 剑士 enemies.",
    "details": "Chance to drop from Leyndell Knight enemies.",
    "sourceTitle": "Leyndell Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Knight_Helm",
    "verified": true
  },
  "armor:1790100": {
    "kind": "armor",
    "itemId": 1790100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell 剑士 enemies.",
    "details": "Chance to drop from Leyndell Knight enemies.",
    "sourceTitle": "Leyndell Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Knight_Armor",
    "verified": true
  },
  "armor:1790200": {
    "kind": "armor",
    "itemId": 1790200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Leyndell 剑士 Gauntlets have a 3.00% 有概率从 Leyndell 剑士 enemies.",
    "details": "The Leyndell Knight Gauntlets have a 3.00% chance to drop from Leyndell Knight enemies.",
    "sourceTitle": "Leyndell Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Knight_Gauntlets",
    "verified": true
  },
  "armor:1790300": {
    "kind": "armor",
    "itemId": 1790300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell 剑士 enemies.",
    "details": "Chance to drop from Leyndell Knight enemies.",
    "sourceTitle": "Leyndell Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Knight_Greaves",
    "verified": true
  },
  "armor:1791100": {
    "kind": "armor",
    "itemId": 1791100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell 剑士 enemies.",
    "details": "Chance to drop from Leyndell Knight enemies.",
    "sourceTitle": "Leyndell Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:1800000": {
    "kind": "armor",
    "itemId": 1800000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Redmane 剑士 enemies.",
    "details": "Chance to drop from Redmane Knight enemies.",
    "sourceTitle": "Redmane Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Redmane_Knight_Helm",
    "verified": true
  },
  "armor:1800100": {
    "kind": "armor",
    "itemId": 1800100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Redmane 剑士 enemies.",
    "details": "Chance to drop from Redmane Knight enemies.",
    "sourceTitle": "Redmane Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Redmane_Knight_Armor",
    "verified": true
  },
  "armor:1800200": {
    "kind": "armor",
    "itemId": 1800200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Redmane 剑士 Gauntlets have a 有概率从 Redmane 剑士 enemies.",
    "details": "The Redmane Knight Gauntlets have a chance to drop from Redmane Knight enemies.",
    "sourceTitle": "Redmane Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Redmane_Knight_Gauntlets",
    "verified": true
  },
  "armor:1800300": {
    "kind": "armor",
    "itemId": 1800300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Redmane 剑士 enemies.",
    "details": "Chance to drop from Redmane Knight enemies.",
    "sourceTitle": "Redmane Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Redmane_Knight_Greaves",
    "verified": true
  },
  "armor:1801100": {
    "kind": "armor",
    "itemId": 1801100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from Redmane 剑士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Redmane Knight enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Redmane Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Redmane_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:1810100": {
    "kind": "armor",
    "itemId": 1810100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：3% 有概率从 Mausoleum 剑士 enemies.",
    "details": "3% chance to drop from Mausoleum Knight enemies.",
    "sourceTitle": "Mausoleum Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Knight_Armor",
    "verified": true
  },
  "armor:1810200": {
    "kind": "armor",
    "itemId": 1810200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Mausoleum 剑士 Gauntlets have a 3.00% 有概率从 Mausoleum 剑士 enemies.",
    "details": "The Mausoleum Knight Gauntlets have a 3.00% chance to drop from Mausoleum Knight enemies.",
    "sourceTitle": "Mausoleum Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Knight_Gauntlets",
    "verified": true
  },
  "armor:1810300": {
    "kind": "armor",
    "itemId": 1810300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：3% 有概率从 Mausoleum 剑士 enemies.",
    "details": "3% chance to drop from Mausoleum Knight enemies.",
    "sourceTitle": "Mausoleum Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Knight_Greaves",
    "verified": true
  },
  "armor:1811100": {
    "kind": "armor",
    "itemId": 1811100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from Mausoleum 剑士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Mausoleum Knight enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Mausoleum Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:1820000": {
    "kind": "armor",
    "itemId": 1820000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse up a ladder 附近 the 艾布雷菲尔城墙内部 赐福 located in “圣树分枝”艾布雷菲尔.",
    "details": "Found on a corpse up a ladder near the Elphael Inner Wall site of grace located in Elphael, Brace of the Haligtree.",
    "sourceTitle": "Haligtree Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Knight_Helm",
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
    "summary": "敌人 / 首领掉落：有概率从 Haligtree 剑士 enemies.",
    "details": "Chance to drop from Haligtree Knight enemies.",
    "sourceTitle": "Haligtree Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Knight_Armor",
    "verified": true
  },
  "armor:1820200": {
    "kind": "armor",
    "itemId": 1820200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Haligtree 剑士 Gauntlets have a 3.00% 有概率从 Haligtree 剑士 enemies.",
    "details": "The Haligtree Knight Gauntlets have a 3.00% chance to drop from Haligtree Knight enemies.",
    "sourceTitle": "Haligtree Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Knight_Gauntlets",
    "verified": true
  },
  "armor:1820300": {
    "kind": "armor",
    "itemId": 1820300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Haligtree 剑士 enemies.",
    "details": "Chance to drop from Haligtree Knight enemies.",
    "sourceTitle": "Haligtree Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Knight_Greaves",
    "verified": true
  },
  "armor:1821100": {
    "kind": "armor",
    "itemId": 1821100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from Haligtree 剑士 enemies. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from Haligtree Knight enemies. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Haligtree Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Knight_Armor_(Altered)",
    "verified": true
  },
  "armor:1830000": {
    "kind": "armor",
    "itemId": 1830000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Godrick Foot Soldier enemies that wear it.",
    "details": "Chance to drop from Godrick Foot Soldier enemies that wear it.",
    "sourceTitle": "Foot Soldier Cap",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Foot_Soldier_Cap",
    "verified": true
  },
  "armor:1830100": {
    "kind": "armor",
    "itemId": 1830100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Godrick Foot Soldier enemies that wear it.",
    "details": "Chance to drop from Godrick Foot Soldier enemies that wear it.",
    "sourceTitle": "Chain-Draped Tabard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Chain-Draped_Tabard",
    "verified": true
  },
  "armor:1830200": {
    "kind": "armor",
    "itemId": 1830200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Foot Soldier Gauntlets have a 3.00% 有概率从 Godrick Foot Soldier enemies.",
    "details": "The Foot Soldier Gauntlets have a 3.00% chance to drop from Godrick Foot Soldier enemies.",
    "sourceTitle": "Foot Soldier Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Foot_Soldier_Gauntlets",
    "verified": true
  },
  "armor:1830300": {
    "kind": "armor",
    "itemId": 1830300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Foot Soldier enemies that wear it.",
    "details": "Chance to drop from Foot Soldier enemies that wear it.",
    "sourceTitle": "Foot Soldier Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Foot_Soldier_Greaves",
    "verified": true
  },
  "armor:1840000": {
    "kind": "armor",
    "itemId": 1840000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Raya Lucaria Foot Soldier enemies.",
    "details": "Chance to drop from Raya Lucaria Foot Soldier enemies.",
    "sourceTitle": "Foot Soldier Helmet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Foot_Soldier_Helmet",
    "verified": true
  },
  "armor:1840100": {
    "kind": "armor",
    "itemId": 1840100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Raya Lucaria Foot Soldier enemies.",
    "details": "Chance to drop from Raya Lucaria Foot Soldier enemies.",
    "sourceTitle": "Foot Soldier Tabard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Foot_Soldier_Tabard",
    "verified": true
  },
  "armor:1850000": {
    "kind": "armor",
    "itemId": 1850000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell Foot Soldier enemies.",
    "details": "Chance to drop from Leyndell Foot Soldier enemies.",
    "sourceTitle": "Gilded Foot Soldier Cap",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gilded_Foot_Soldier_Cap",
    "verified": true
  },
  "armor:1850100": {
    "kind": "armor",
    "itemId": 1850100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Leyndell Foot Soldier enemies.",
    "details": "Chance to drop from Leyndell Foot Soldier enemies.",
    "sourceTitle": "Leather-Draped Tabard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather-Draped_Tabard",
    "verified": true
  },
  "armor:1860000": {
    "kind": "armor",
    "itemId": 1860000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Radahn Foot Soldier enemies.",
    "details": "Chance to drop from Radahn Foot Soldier enemies.",
    "sourceTitle": "Foot Soldier Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Foot_Soldier_Helm",
    "verified": true
  },
  "armor:1860100": {
    "kind": "armor",
    "itemId": 1860100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Radahn Foot Soldier enemies.",
    "details": "Chance to drop from Radahn Foot Soldier enemies.",
    "sourceTitle": "Scarlet Tabard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scarlet_Tabard",
    "verified": true
  },
  "armor:1870100": {
    "kind": "armor",
    "itemId": 1870100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Mausoleum Foot Soldier enemies.",
    "details": "Chance to drop from Mausoleum Foot Soldier enemies.",
    "sourceTitle": "Bloodsoaked Tabard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodsoaked_Tabard",
    "verified": true
  },
  "armor:1880000": {
    "kind": "armor",
    "itemId": 1880000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Haligtree Foot Soldier enemies.",
    "details": "Chance to drop from Haligtree Foot Soldier enemies.",
    "sourceTitle": "Sacred Crown Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sacred_Crown_Helm",
    "verified": true
  },
  "armor:1880100": {
    "kind": "armor",
    "itemId": 1880100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 Haligtree Foot Soldier enemies.",
    "details": "Chance to drop from Haligtree Foot Soldier enemies.",
    "sourceTitle": "Ivory-Draped Tabard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ivory-Draped_Tabard",
    "verified": true
  },
  "armor:1890000": {
    "kind": "armor",
    "itemId": 1890000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： an 恶兆猎人 enemy right outside the 王城底层教堂 赐福 in 王城罗德尔.",
    "details": "Dropped by an Omenkiller enemy right outside the Lower Capital Church grace in Leyndell, Royal Capital.",
    "sourceTitle": "Omensmirk Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omensmirk_Mask",
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
    "summary": "敌人 / 首领掉落：Received upon defeating an 恶兆猎人 inside the 调香师的废墟 located in 亚坛高原.",
    "details": "Received upon defeating an Omenkiller inside the Perfumer's Ruins located in Altus Plateau.",
    "sourceTitle": "Omenkiller Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omenkiller_Robe",
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
    "summary": "敌人 / 首领掉落：地点：调香师的废墟；The 恶兆猎人 长 Gloves are 通过...获得 defeating the 恶兆猎人 ，位于 调香师的废墟 on the 亚坛高原.",
    "details": "Location: Perfumer's Ruins；The Omenkiller Long Gloves are obtained by defeating the Omenkiller in the Perfumer's Ruins on the Altus Plateau.",
    "sourceTitle": "Omenkiller Long Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omenkiller_Long_Gloves",
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
    "summary": "敌人 / 首领掉落：Received upon defeating an 恶兆猎人 inside the 调香师的废墟 located in 亚坛高原.",
    "details": "Received upon defeating an Omenkiller inside the Perfumer's Ruins located in Altus Plateau.",
    "sourceTitle": "Omenkiller Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omenkiller_Boots",
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
    "summary": "地图拾取 / 宝箱：地点：史东薇尔城；The Ash-of-War Scarab is 位于 on a corpse ，地点： the edge of the broken bridge behind a 传送门.",
    "details": "Location: Stormveil Castle；The Ash-of-War Scarab is found on a corpse at the edge of the broken bridge behind a Sending Gate.",
    "sourceTitle": "Ash-of-War Scarab",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash-of-War_Scarab",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：龙息废墟；Obtain the \"Homing Instinct\" Painting from the 画家的破屋 in 宁姆格福.",
    "details": "Location: Dragon-Burnt Ruins；Obtain the \"Homing Instinct\" Painting from the Artist's Shack in Limgrave.Interact with the Painter Spirit southwest of the Dragon-Burnt Ruins, beside a gravestone.",
    "sourceTitle": "Incantation Scarab",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Incantation_Scarab",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：魔法学院雷亚卢卡利亚；The Glintstone Scarab is 位于 inside a 宝箱 ，位于 tower where the Giant 银色泪滴 spawns and drops onto the ramp, located beyond the 赐福 讨论室 赐福. The area is accessible through the courtyard containing “卡利亚骑士”穆格拉姆. Pass through the south gate onto a small balcony with a Glintstone Sorcerer and Wandering Nobles and follow the eastern wall. 跳跃 over the balcony railing onto a small ledge, follow the path to an alcove, and climb the ladder. The 宝箱 is ，地点： the top, though it is guarded by 3 Glintstone Sorcerers and a 发狂南瓜头士兵.",
    "details": "Location: Academy of Raya Lucaria；The Glintstone Scarab is found inside a chest in the tower where the Giant Silver Tear spawns and drops onto the ramp, located beyond the 赐福 Debate Parlor Site of Grace. The area is accessible through the courtyard containing Moongrum, Carian Knight. Pass through the south gate onto a small balcony with a Glintstone Sorcerer and Wandering Nobles and follow the eastern wall. Jump over the balcony railing onto a small ledge, follow the path to an alcove, and climb the ladder. The chest is at the top, though it is guarded by 3 Glintstone Sorcerers and a Mad Pumpkin Head.",
    "sourceTitle": "Glintstone Scarab",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Scarab",
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
    "summary": "地图拾取 / 宝箱：地点：火山官邸；The Crimson Tear Scarab is 位于 on a corpse on a ledge beyond the 艾格蕾教堂. To reach it, jump off the bridge where a Man-Serpent is first encountered.",
    "details": "Location: Volcano Manor；The Crimson Tear Scarab is found on a corpse on a ledge beyond the Temple of Eiglay. To reach it, jump off the bridge where a Man-Serpent is first encountered.",
    "sourceTitle": "Crimson Tear Scarab",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Tear_Scarab",
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
    "summary": "地图拾取 / 宝箱：地点：魔法镇瑟利亚；The Cerulean Tear Scarab is 位于 on a corpse on the rooftops ，位于 northeastern section of 魔法镇瑟利亚.",
    "details": "Location: Sellia, Town of Sorcery；The Cerulean Tear Scarab is found on a corpse on the rooftops in the northeastern section of Sellia, Town of Sorcery.",
    "sourceTitle": "Cerulean Tear Scarab",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cerulean_Tear_Scarab",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 on a corpse right next to the 王城底层教堂 赐福, located in 王城罗德尔.",
    "details": "Found on a corpse right next to the Lower Capital Church site of grace, located in Leyndell, Royal Capital.",
    "sourceTitle": "Deathbed Dress",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Deathbed_Dress",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： Fia if you 完成 her 任务线 and give the Twinned armor to “觐见死亡”Ｄ.",
    "details": "Dropped by Fia if you complete her questline and give the Twinned armor to D, Beholder of Death.",
    "sourceTitle": "Fia's Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fia's_Hood",
    "verified": true
  },
  "armor:1940100": {
    "kind": "armor",
    "itemId": 1940100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： Fia if you 完成 her 任务线 and give the Twinned armor to D (NPC)'s twin brother.",
    "details": "Dropped by Fia if you complete her questline and give the Twinned armor to D (NPC)'s twin brother.",
    "sourceTitle": "Fia's Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fia's_Robe",
    "verified": true
  },
  "armor:1941100": {
    "kind": "armor",
    "itemId": 1941100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Dropped (unaltered) by Fia if you 完成 her 任务线 and give the Twinned armor to D (NPC)'s twin brother. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Dropped (unaltered) by Fia if you complete her questline and give the Twinned armor to D (NPC)'s twin brother. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Fia's Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fia's_Robe_(Altered)",
    "verified": true
  },
  "armor:1980000": {
    "kind": "armor",
    "itemId": 1980000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 高wayman enemies such as the ones inside 蒙流洞窟 located in 宁姆格福.",
    "details": "Chance to drop from Highwayman enemies such as the ones inside Murkwater Cave located in Limgrave.",
    "sourceTitle": "Highwayman Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Highwayman_Hood",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：有概率从 高wayman enemies, such as the ones inside 蒙流洞窟 located in 宁姆格福.",
    "details": "Chance to drop from Highwayman enemies, such as the ones inside Murkwater Cave located in Limgrave.",
    "sourceTitle": "Highwayman Cloth Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Highwayman_Cloth_Armor",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The 高wayman Gauntlets have a 3.00% 有概率从 高wayman enemies, such as those 位于 蒙流洞窟 in 宁姆格福.",
    "details": "The Highwayman Gauntlets have a 3.00% chance to drop from Highwayman enemies, such as those found in Murkwater Cave in Limgrave.",
    "sourceTitle": "Highwayman Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Highwayman_Gauntlets",
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
    "summary": "敌人 / 首领掉落：有概率从 高 Page enemies that wear it, such as the one 附近 the 王城西边城墙 赐福 in 王城罗德尔.",
    "details": "Chance to drop from High Page enemies that wear it, such as the one near the West Capital Rampart site of grace in Leyndell, Royal Capital.",
    "sourceTitle": "High Page Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/High_Page_Hood",
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
    "summary": "敌人 / 首领掉落：有概率从 高 Page enemies that wear it, such as the one 附近 the 王城西边城墙 赐福 in 王城罗德尔.",
    "details": "Chance to drop from High Page enemies that wear it, such as the one near the West Capital Rampart site of grace in Leyndell, Royal Capital.",
    "sourceTitle": "High Page Clothes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/High_Page_Clothes",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Chance to drop unaltered from 高 Page enemies that wear it, such as the one 附近 the 王城西边城墙 赐福 in 王城罗德尔. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Chance to drop unaltered from High Page enemies that wear it, such as the one near the West Capital Rampart site of grace in Leyndell, Royal Capital. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "High Page Clothes (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/High_Page_Clothes_(Altered)",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the Rotten 斗士 enemy located north west of the 化圣雪原 赐福.",
    "details": "Dropped by the Rotten Duelist enemy located north west of the Consecrated Snowfield site of grace.",
    "sourceTitle": "Rotten Duelist Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Duelist_Helm",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 腐败守墓斗士 boss ，位于 化圣雪原地下墓地.",
    "details": "Dropped by the Putrid Grave Warden Duelist boss in the Consecrated Snowfield Catacombs.",
    "sourceTitle": "Rotten Gravekeeper Cloak",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Gravekeeper_Cloak",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the Rotten 斗士 enemy located north west of “仪典镇”奥缇那 in 化圣雪原.",
    "details": "Dropped by the Rotten Duelist enemy located north west of Ordina, Liturgical Town in Consecrated Snowfield.",
    "sourceTitle": "Rotten Duelist Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Duelist_Greaves",
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
    "summary": "敌人 / 首领掉落：Dropped unaltered by the 腐败守墓斗士 boss ，位于 化圣雪原地下墓地. Can be altered ，地点： a 赐福 or by Boc.",
    "details": "Dropped unaltered by the Putrid Grave Warden Duelist boss in the Consecrated Snowfield Catacombs. Can be altered at a site of grace or by Boc.",
    "sourceTitle": "Rotten Gravekeeper Cloak (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Gravekeeper_Cloak_(Altered)",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse up a pillar inside ruins located south-east of 腐败湖.",
    "details": "Found on a corpse up a pillar inside ruins located south-east of Lake of Rot.",
    "sourceTitle": "Mushroom Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mushroom_Crown",
    "verified": true
  },
  "armor:2020000": {
    "kind": "armor",
    "itemId": 2020000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Drop: Black Dumpling Albinaurics；The Black Dumpling has a 0.50% drop rate from fast-crawling Elder Albinaurics that wear it, 位于 only ，位于 Prison Town and 地底拷问所 of 火山官邸, in 王城罗德尔, or ，地点： 索尔城.",
    "details": "Drop: Black Dumpling Albinaurics；The Black Dumpling has a 0.50% drop rate from fast-crawling Elder Albinaurics that wear it, found only in the Prison Town and Subterranean Inquisition Chamber of Volcano Manor, in Leyndell, Royal Capital, or at Castle Sol.Farmable near the 赐福 Guest Hall and 赐福 Subterranean Inquisition Chamber sites of grace",
    "sourceTitle": "Black Dumpling",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Dumpling",
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
    "summary": "敌人 / 首领掉落：有概率从 Lazuli Sorcerer enemies that wear it.",
    "details": "Chance to drop from Lazuli Sorcerer enemies that wear it.",
    "sourceTitle": "Lazuli Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lazuli_Robe",
    "verified": true
  },
  "armor:3000000": {
    "kind": "armor",
    "itemId": 3000000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：艾尼尔·伊利姆；Dane's Hat is 通过...获得 defeating “落叶”丹恩 and Miquella's Followers ，地点： 艾尼尔·伊利姆.",
    "details": "Location: Enir-Ilim；Dane's Hat is obtained by defeating Dryleaf Dane and Miquella's Followers at Enir-Ilim.",
    "sourceTitle": "Dane's Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dane's_Hat",
    "verified": true
  },
  "armor:3000100": {
    "kind": "armor",
    "itemId": 3000100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 under a waterfall ，位于 lower portions under 波尼村. This area can only be accessed by using the ladder in 幽影城 to get down to a special teleport coffin (this Elden Ring Map location). This will take you to 安堤废墟and you must follow the cliffs downstream and then carefully drop down to bottom level to reach the mausoleum.",
    "details": "Found under a waterfall in the lower portions under Bonny Village. This area can only be accessed by using the ladder in Shadow Keep to get down to a special teleport coffin (this Elden Ring Map location). This will take you to Ruins of Unteand you must follow the cliffs downstream and then carefully drop down to bottom level to reach the mausoleum.",
    "sourceTitle": "Dryleaf Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dryleaf_Robe",
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
    "summary": "敌人 / 首领掉落：地点：",
    "details": "Location:",
    "sourceTitle": "Dryleaf Arm Wraps",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dryleaf_Arm_Wraps",
    "verified": true
  },
  "armor:3000300": {
    "kind": "armor",
    "itemId": 3000300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：",
    "details": "Location:",
    "sourceTitle": "Dryleaf Cuissardes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dryleaf_Cuissardes",
    "verified": true
  },
  "armor:3001100": {
    "kind": "armor",
    "itemId": 3001100,
    "sourceKind": "other",
    "summary": "其他来源：Crafted: Modify Dryleaf Robe",
    "details": "Crafted: Modify Dryleaf Robe",
    "sourceTitle": "Dryleaf Robe (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dryleaf_Robe_(Altered)",
    "verified": true
  },
  "armor:3010000": {
    "kind": "armor",
    "itemId": 3010000,
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；向 “解指”恩雅 后 defeating 老将盖乌斯 in northwestern 望影露台, located outside the back gate to the 幽影城.",
    "details": "Location: Roundtable Hold；Purchased from Finger Reader Enia after defeating Commander Gaius in northwestern Scaduview, located outside the back gate to the Shadow Keep.",
    "sourceTitle": "Gaius's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gaius's_Helm",
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
    "summary": "商店购买：地点：圆桌厅堂；向 “解指”恩雅 后 defeating 老将盖乌斯 in northwestern 望影露台, located outside the back gate to the 幽影城.",
    "details": "Location: Roundtable Hold；Purchased from Finger Reader Enia after defeating Commander Gaius in northwestern Scaduview, located outside the back gate to the Shadow Keep.",
    "sourceTitle": "Gaius's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gaius's_Armor",
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
    "summary": "商店购买：地点：圆桌厅堂；向 “解指”恩雅 后 defeating 老将盖乌斯 in northwestern 望影露台, located outside the back gate to the 幽影城.",
    "details": "Location: Roundtable Hold；Purchased from Finger Reader Enia after defeating Commander Gaius in northwestern Scaduview, located outside the back gate to the Shadow Keep.",
    "sourceTitle": "Gaius's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gaius's_Gauntlets",
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
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；向 “解指”恩雅 后 defeating 老将盖乌斯 in northwestern 望影露台, located outside the back gate to the 幽影城.",
    "details": "Location: Roundtable Hold；Purchased from Finger Reader Enia after defeating Commander Gaius in northwestern Scaduview, located outside the back gate to the Shadow Keep.",
    "sourceTitle": "Gaius's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gaius's_Greaves",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Oathseeker Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Oathseeker_Knight_Helm",
    "verified": false
  },
  "armor:5000100": {
    "kind": "armor",
    "itemId": 5000100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Leda's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leda's_Armor",
    "verified": true
  },
  "armor:5000200": {
    "kind": "armor",
    "itemId": 5000200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Oathseeker Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Oathseeker_Knight_Gauntlets",
    "verified": false
  },
  "armor:5000300": {
    "kind": "armor",
    "itemId": 5000300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Oathseeker Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Oathseeker_Knight_Greaves",
    "verified": false
  },
  "armor:5002100": {
    "kind": "armor",
    "itemId": 5002100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：恩惠教堂",
    "details": "Location: Church of Benediction",
    "sourceTitle": "Oathseeker Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Oathseeker_Knight_Armor",
    "verified": true
  },
  "armor:5010000": {
    "kind": "armor",
    "itemId": 5010000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Verdigris Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Verdigris_Helm",
    "verified": false
  },
  "armor:5010100": {
    "kind": "armor",
    "itemId": 5010100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：；击杀后掉落： 穆尔 upon his death ，地点： any location.",
    "details": "Location:；Dropped by Moore upon his death at any location.",
    "sourceTitle": "Verdigris Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Verdigris_Armor",
    "verified": true
  },
  "armor:5010200": {
    "kind": "armor",
    "itemId": 5010200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Verdigris Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Verdigris_Gauntlets",
    "verified": false
  },
  "armor:5010300": {
    "kind": "armor",
    "itemId": 5010300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Verdigris Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Verdigris_Greaves",
    "verified": false
  },
  "armor:5020000": {
    "kind": "armor",
    "itemId": 5020000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Pelt of Ralva",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pelt_of_Ralva",
    "verified": true
  },
  "armor:5020100": {
    "kind": "armor",
    "itemId": 5020100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：?",
    "details": "Location: ?",
    "sourceTitle": "Iron Rivet Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Iron_Rivet_Armor",
    "verified": true
  },
  "armor:5020200": {
    "kind": "armor",
    "itemId": 5020200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Iron Rivet Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Iron_Rivet_Gauntlets",
    "verified": false
  },
  "armor:5020300": {
    "kind": "armor",
    "itemId": 5020300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Iron Rivet Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Iron_Rivet_Greaves",
    "verified": false
  },
  "armor:5021000": {
    "kind": "armor",
    "itemId": 5021000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：北方无名灵庙, 劳弗下方；The Fang Helm is 通过...获得 defeating 红熊 ，位于 北方无名灵庙 ，地点： the 劳弗下方.",
    "details": "Location: Northern Nameless Mausoleum, Rauh Base；The Fang Helm is obtained by defeating Red Bear in the Northern Nameless Mausoleum at the Rauh Base.",
    "sourceTitle": "Fang Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fang_Helm",
    "verified": true
  },
  "armor:5030000": {
    "kind": "armor",
    "itemId": 5030000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：Varies；The 休里耶's Mask is 通过...获得 looting 休里耶's body.",
    "details": "Location: Varies；The Thiollier's Mask is obtained by looting Thiollier's body.",
    "sourceTitle": "Thiollier's Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Thiollier's_Mask",
    "verified": true
  },
  "armor:5030100": {
    "kind": "armor",
    "itemId": 5030100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Thiollier's Garb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Thiollier's_Garb",
    "verified": true
  },
  "armor:5030200": {
    "kind": "armor",
    "itemId": 5030200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：",
    "details": "Location:",
    "sourceTitle": "Thiollier's Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Thiollier's_Gloves",
    "verified": true
  },
  "armor:5030300": {
    "kind": "armor",
    "itemId": 5030300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Thiollier's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Thiollier's_Trousers",
    "verified": false
  },
  "armor:5031100": {
    "kind": "armor",
    "itemId": 5031100,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Thiollier's Garb (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Thiollier's_Garb_(Altered)",
    "verified": false
  },
  "armor:5060000": {
    "kind": "armor",
    "itemId": 5060000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Drop: 玛努斯·美特大教堂, 幽影亚坛, 幽影之地；The 高 Priest Hat is 击杀后掉落： “指头之母”尤弥尔 upon his 击败.",
    "details": "Drop: Cathedral of Manus Metyr, Scadu Altus, Realm of Shadow；The High Priest Hat is dropped by Count Ymir, Mother of Fingers upon his defeat.",
    "sourceTitle": "High Priest Hat",
    "sourceUrl": "https://eldenring.fandom.com/wiki/High_Priest_Hat",
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
    "summary": "敌人 / 首领掉落：Drop: 玛努斯·美特大教堂, 幽影亚坛, 幽影之地；The 高 Priest Robe is 击杀后掉落： “指头之母”尤弥尔 upon his 击败.",
    "details": "Drop: Cathedral of Manus Metyr, Scadu Altus, Realm of Shadow；The High Priest Robe is dropped by Count Ymir, Mother of Fingers upon his defeat.",
    "sourceTitle": "High Priest Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/High_Priest_Robe",
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
    "summary": "敌人 / 首领掉落：地点：玛努斯·美特大教堂；The 高 Priest Gloves are 击杀后掉落： “指头之母”尤弥尔 upon his 击败 ，位于 玛努斯·美特大教堂 in 幽影亚坛.",
    "details": "Location: Cathedral of Manus Metyr；The High Priest Gloves are dropped by Count Ymir, Mother of Fingers upon his defeat in the Cathedral of Manus Metyr in Scadu Altus.",
    "sourceTitle": "High Priest Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/High_Priest_Gloves",
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
    "summary": "敌人 / 首领掉落：Drop: 玛努斯·美特大教堂, 幽影亚坛, 幽影之地；The 高 Priest Undergarments is 击杀后掉落： “指头之母”尤弥尔 upon his 击败.",
    "details": "Drop: Cathedral of Manus Metyr, Scadu Altus, Realm of Shadow；The High Priest Undergarments is dropped by Count Ymir, Mother of Fingers upon his defeat.",
    "sourceTitle": "High Priest Undergarments",
    "sourceUrl": "https://eldenring.fandom.com/wiki/High_Priest_Undergarments",
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
    "summary": "其他来源：Tailor: 高 Priest Robe；The Finger Robe is acquired by adjusting the 高 Priest Robe.",
    "details": "Tailor: High Priest Robe；The Finger Robe is acquired by adjusting the High Priest Robe.",
    "sourceTitle": "Finger Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Finger_Robe",
    "verified": true
  },
  "armor:5070000": {
    "kind": "armor",
    "itemId": 5070000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Caterpillar Mask is 通过...获得 defeating or looting the 角人 NPC ，地点： any location, such as 劳弗古遗迹, 幽影城, and 艾尼尔·伊利姆.",
    "details": "Location: Varies；The Caterpillar Mask is obtained by defeating or looting the Hornsent NPC at any location, such as Ancient Ruins of Rauh, Shadow Keep, and Enir-Ilim.",
    "sourceTitle": "Caterpillar Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Caterpillar_Mask",
    "verified": true
  },
  "armor:5070100": {
    "kind": "armor",
    "itemId": 5070100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Braided Cord Robe is 通过...获得 defeating or looting the 角人 NPC ，地点： any location, such as 劳弗古遗迹, 幽影城, and 艾尼尔·伊利姆.",
    "details": "Location: Varies；The Braided Cord Robe is obtained by defeating or looting the Hornsent NPC at any location, such as Ancient Ruins of Rauh, Shadow Keep, and Enir-Ilim.",
    "sourceTitle": "Braided Cord Robe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Braided_Cord_Robe",
    "verified": true
  },
  "armor:5070200": {
    "kind": "armor",
    "itemId": 5070200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Braided Arm Wraps are obtained upon defeating or looting the 角人 NPC ，地点： any location, such as 劳弗古遗迹, 幽影城, and 艾尼尔·伊利姆.",
    "details": "Location: Varies；The Braided Arm Wraps are obtained upon defeating or looting the Hornsent NPC at any location, such as Ancient Ruins of Rauh, Shadow Keep, and Enir-Ilim.",
    "sourceTitle": "Braided Arm Wraps",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Braided_Arm_Wraps",
    "verified": true
  },
  "armor:5070300": {
    "kind": "armor",
    "itemId": 5070300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Soiled Loincloth is 通过...获得 defeating or looting the 角人 NPC ，地点： any location, such as 劳弗古遗迹, 幽影城, and 艾尼尔·伊利姆.",
    "details": "Location: Varies；The Soiled Loincloth is obtained by defeating or looting the Hornsent NPC at any location, such as Ancient Ruins of Rauh, Shadow Keep, and Enir-Ilim.",
    "sourceTitle": "Soiled Loincloth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Soiled_Loincloth",
    "verified": true
  },
  "armor:5080000": {
    "kind": "armor",
    "itemId": 5080000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：南方无名灵庙；The Dancer's Hood is obtained upon defeating the 拉纳舞娘 ，位于 南方无名灵庙 on the island off the 青蓝海岸.",
    "details": "Location: Southern Nameless Mausoleum；The Dancer's Hood is obtained upon defeating the Dancer of Ranah in the Southern Nameless Mausoleum on the island off the Cerulean Coast.",
    "sourceTitle": "Dancer's Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dancer's_Hood",
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
    "summary": "敌人 / 首领掉落：地点：南方无名灵庙；The Dancer's Dress is obtained upon defeating the 拉纳舞娘 ，位于 南方无名灵庙 on the island off the 青蓝海岸.",
    "details": "Location: Southern Nameless Mausoleum；The Dancer's Dress is obtained upon defeating the Dancer of Ranah in the Southern Nameless Mausoleum on the island off the Cerulean Coast.",
    "sourceTitle": "Dancer's Dress",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dancer's_Dress",
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
    "summary": "敌人 / 首领掉落：地点：南方无名灵庙；The Dancer's Bracer is obtained upon defeating the 拉纳舞娘 ，位于 南方无名灵庙 on the island off the 青蓝海岸.",
    "details": "Location: Southern Nameless Mausoleum；The Dancer's Bracer is obtained upon defeating the Dancer of Ranah in the Southern Nameless Mausoleum on the island off the Cerulean Coast.",
    "sourceTitle": "Dancer's Bracer",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dancer's_Bracer",
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
    "summary": "敌人 / 首领掉落：地点：南方无名灵庙；The Dancer's Trousers is obtained upon defeating the 拉纳舞娘 ，位于 南方无名灵庙 on the island off the 青蓝海岸.",
    "details": "Location: Southern Nameless Mausoleum；The Dancer's Trousers is obtained upon defeating the Dancer of Ranah in the Southern Nameless Mausoleum on the island off the Cerulean Coast.",
    "sourceTitle": "Dancer's Trousers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dancer's_Trousers",
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
    "sourceKind": "other",
    "summary": "其他来源：Crafted: modify Dancer's Dress",
    "details": "Crafted: modify Dancer's Dress",
    "sourceTitle": "Dancer's Dress (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dancer's_Dress_(Altered)",
    "verified": true
  },
  "armor:5090000": {
    "kind": "armor",
    "itemId": 5090000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：波尼监牢；The Helm of 晚上 is 位于 on the corpse of a Swordhand of 晚上 ，位于 波尼监牢.",
    "details": "Location: Bonny Gaol；The Helm of Night is found on the corpse of a Swordhand of Night in the Bonny Gaol.Use the jar lift near the bridge twice to reach the top level of the gaol. First, ride the jar to the bridge level and activate the switch. Then, ride the jar again to the top level, where the set is on a corpse lying on a table.",
    "sourceTitle": "Helm of Night",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Helm_of_Night",
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
    "summary": "地图拾取 / 宝箱：地点：波尼监牢；The 防具 of 晚上 is 位于 on the corpse of a Swordhand of 晚上 ，位于 波尼监牢.",
    "details": "Location: Bonny Gaol；The Armor of Night is found on the corpse of a Swordhand of Night in the Bonny Gaol.Use the jar lift near the bridge twice to reach the top level of the gaol. First, ride the jar to the bridge level and activate the switch. Then, ride the jar again to the top level, where the set is on a corpse lying on a table.",
    "sourceTitle": "Armor of Night",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Armor_of_Night",
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
    "summary": "地图拾取 / 宝箱：地点：波尼监牢；The Gauntlets of 晚上 is 位于 on the corpse of a Swordhand of 晚上 ，位于 波尼监牢.",
    "details": "Location: Bonny Gaol；The Gauntlets of Night is found on the corpse of a Swordhand of Night in the Bonny Gaol.Use the jar lift near the bridge twice to reach the top level of the gaol. First, ride the jar to the bridge level and activate the switch. Then, ride the jar again to the top level, where the set is on a corpse lying on a table.",
    "sourceTitle": "Gauntlets of Night",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gauntlets_of_Night",
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
    "summary": "地图拾取 / 宝箱：地点：波尼监牢；The Greaves of 晚上 is 位于 on the corpse of a Swordhand of 晚上 ，位于 波尼监牢.",
    "details": "Location: Bonny Gaol；The Greaves of Night is found on the corpse of a Swordhand of Night in the Bonny Gaol.Use the jar lift near the bridge twice to reach the top level of the gaol. First, ride the jar to the bridge level and activate the switch. Then, ride the jar again to the top level, where the set is on a corpse lying on a table.",
    "sourceTitle": "Greaves of Night",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greaves_of_Night",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Igon's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Igon's_Helm",
    "verified": false
  },
  "armor:5100100": {
    "kind": "armor",
    "itemId": 5100100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：尖刺山的山脚；Looted from 埃贡's body.",
    "details": "Location: Foot of the Jagged Peak；Looted from Igon's body.",
    "sourceTitle": "Igon's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Igon's_Armor",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Igon's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Igon's_Gauntlets",
    "verified": false
  },
  "armor:5100300": {
    "kind": "armor",
    "itemId": 5100300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Igon's Loincloth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Igon's_Loincloth",
    "verified": false
  },
  "armor:5101000": {
    "kind": "armor",
    "itemId": 5101000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Igon's Helm (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Igon's_Helm_(Altered)",
    "verified": false
  },
  "armor:5101100": {
    "kind": "armor",
    "itemId": 5101100,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Igon's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Igon's_Armor_(Altered)",
    "verified": false
  },
  "armor:5110000": {
    "kind": "armor",
    "itemId": 5110000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Wise Man's Mask is looted from 老兵安帕赫 后 completing his quest 艾尼尔·伊利姆. It may also be 通过...获得 helping “金针骑士”蕾妲 击败 老兵安帕赫 ，地点： the 物种保藏库.",
    "details": "Location: Varies；The Wise Man's Mask is looted from Sir Ansbach after completing his quest Enir-Ilim. It may also be obtained by helping Needle Knight Leda defeat Sir Ansbach at the Specimen Storehouse.",
    "sourceTitle": "Wise Man's Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Wise_Man's_Mask",
    "verified": true
  },
  "armor:5110100": {
    "kind": "armor",
    "itemId": 5110100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Ansbach's Attire is looted from 老兵安帕赫 后 completing his quest 艾尼尔·伊利姆. It may also be 通过...获得 helping “金针骑士”蕾妲 击败 老兵安帕赫 ，地点： the 物种保藏库.",
    "details": "Location: Varies；The Ansbach's Attire is looted from Sir Ansbach after completing his quest Enir-Ilim. It may also be obtained by helping Needle Knight Leda defeat Sir Ansbach at the Specimen Storehouse.",
    "sourceTitle": "Ansbach's Attire",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ansbach's_Attire",
    "verified": true
  },
  "armor:5110200": {
    "kind": "armor",
    "itemId": 5110200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Ansbach's Manchettes is looted from 老兵安帕赫 后 completing his quest 艾尼尔·伊利姆. It may also be 通过...获得 helping “金针骑士”蕾妲 击败 老兵安帕赫 ，地点： the 物种保藏库.",
    "details": "Location: Varies；The Ansbach's Manchettes is looted from Sir Ansbach after completing his quest Enir-Ilim. It may also be obtained by helping Needle Knight Leda defeat Sir Ansbach at the Specimen Storehouse.",
    "sourceTitle": "Ansbach's Manchettes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ansbach's_Manchettes",
    "verified": true
  },
  "armor:5110300": {
    "kind": "armor",
    "itemId": 5110300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：Varies；The Ansbach's Boots is looted from 老兵安帕赫 后 completing his quest 艾尼尔·伊利姆. It may also be 通过...获得 helping “金针骑士”蕾妲 击败 老兵安帕赫 ，地点： the 物种保藏库.",
    "details": "Location: Varies；The Ansbach's Boots is looted from Sir Ansbach after completing his quest Enir-Ilim. It may also be obtained by helping Needle Knight Leda defeat Sir Ansbach at the Specimen Storehouse.",
    "sourceTitle": "Ansbach's Boots",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ansbach's_Boots",
    "verified": true
  },
  "armor:5111100": {
    "kind": "armor",
    "itemId": 5111100,
    "sourceKind": "other",
    "summary": "其他来源：Crafted: Modify Ansbach's Attire",
    "details": "Crafted: Modify Ansbach's Attire",
    "sourceTitle": "Ansbach's Attire (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ansbach's_Attire_(Altered)",
    "verified": true
  },
  "armor:5120000": {
    "kind": "armor",
    "itemId": 5120000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Freyja's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Freyja's_Helm",
    "verified": false
  },
  "armor:5120100": {
    "kind": "armor",
    "itemId": 5120100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Freyja's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Freyja's_Armor",
    "verified": true
  },
  "armor:5120200": {
    "kind": "armor",
    "itemId": 5120200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Freyja's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Freyja's_Gauntlets",
    "verified": false
  },
  "armor:5120300": {
    "kind": "armor",
    "itemId": 5120300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Freyja's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Freyja's_Greaves",
    "verified": false
  },
  "armor:5121100": {
    "kind": "armor",
    "itemId": 5121100,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Freyja's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Freyja's_Armor_(Altered)",
    "verified": false
  },
  "armor:5130000": {
    "kind": "armor",
    "itemId": 5130000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后获得 defeating Blackgaol 剑士 ，位于 西方无名灵庙.",
    "details": "Received after defeating Blackgaol Knight in the Western Nameless Mausoleum.",
    "sourceTitle": "Helm of Solitude",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Helm_of_Solitude",
    "verified": true
  },
  "armor:5130100": {
    "kind": "armor",
    "itemId": 5130100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：西方无名灵庙；The 防具 of Solitude is obtained upon defeating the 孤牢骑士 within ，位于 西方无名灵庙, located west of the 火吻废墟 on the 墓地平原.",
    "details": "Location: Western Nameless Mausoleum；The Armor of Solitude is obtained upon defeating the Knight of the Solitary Gaol within in the Western Nameless Mausoleum, located west of the Scorched Ruins on the Gravesite Plain.",
    "sourceTitle": "Armor of Solitude",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Armor_of_Solitude",
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
    "summary": "敌人 / 首领掉落：地点：西方无名灵庙；The Gauntlets of Solitude is obtained upon defeating the 孤牢骑士 within ，位于 西方无名灵庙, located west of the 火吻废墟 on the 墓地平原.",
    "details": "Location: Western Nameless Mausoleum；The Gauntlets of Solitude is obtained upon defeating the Knight of the Solitary Gaol within in the Western Nameless Mausoleum, located west of the Scorched Ruins on the Gravesite Plain.",
    "sourceTitle": "Gauntlets of Solitude",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gauntlets_of_Solitude",
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
    "summary": "敌人 / 首领掉落：地点：西方无名灵庙；The Greaves of Solitude is obtained upon defeating the 孤牢骑士 within ，位于 西方无名灵庙, located west of the 火吻废墟 on the 墓地平原.",
    "details": "Location: Western Nameless Mausoleum；The Greaves of Solitude is obtained upon defeating the Knight of the Solitary Gaol within in the Western Nameless Mausoleum, located west of the Scorched Ruins on the Gravesite Plain.",
    "sourceTitle": "Greaves of Solitude",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greaves_of_Solitude",
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
    "sourceKind": "other",
    "summary": "其他来源：Crafted: modify the 防具 of Solitude.",
    "details": "Crafted: modify the Armor of Solitude.",
    "sourceTitle": "Armor of Solitude (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Armor_of_Solitude_(Altered)",
    "verified": true
  },
  "armor:5140000": {
    "kind": "armor",
    "itemId": 5140000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer Soldier Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer_Soldier_Helm",
    "verified": false
  },
  "armor:5140100": {
    "kind": "armor",
    "itemId": 5140100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：?",
    "details": "Location: ?",
    "sourceTitle": "Messmer Soldier Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer_Soldier_Armor",
    "verified": true
  },
  "armor:5140200": {
    "kind": "armor",
    "itemId": 5140200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer Soldier Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer_Soldier_Gauntlets",
    "verified": false
  },
  "armor:5140300": {
    "kind": "armor",
    "itemId": 5140300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer Soldier Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer_Soldier_Greaves",
    "verified": false
  },
  "armor:5141100": {
    "kind": "armor",
    "itemId": 5141100,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer Soldier Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer_Soldier_Armor_(Altered)",
    "verified": false
  },
  "armor:5150000": {
    "kind": "armor",
    "itemId": 5150000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Black 剑士s have a 3.00% chance to drop the Black 剑士 Helm.",
    "details": "Black Knights have a 3.00% chance to drop the Black Knight Helm.",
    "sourceTitle": "Black Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knight_Helm",
    "verified": true
  },
  "armor:5150100": {
    "kind": "armor",
    "itemId": 5150100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Black 剑士s have a 3.00% chance to drop the Black 剑士 防具.",
    "details": "Black Knights have a 3.00% chance to drop the Black Knight Armor.",
    "sourceTitle": "Black Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knight_Armor",
    "verified": true
  },
  "armor:5150200": {
    "kind": "armor",
    "itemId": 5150200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Black 剑士s have a 3.00% chance to drop the Black 剑士 Gauntlets.",
    "details": "Black Knights have a 3.00% chance to drop the Black Knight Gauntlets.",
    "sourceTitle": "Black Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knight_Gauntlets",
    "verified": true
  },
  "armor:5150300": {
    "kind": "armor",
    "itemId": 5150300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Black 剑士s have a 3.00% chance to drop the Black 剑士 Greaves.",
    "details": "Black Knights have a 3.00% chance to drop the Black Knight Greaves.",
    "sourceTitle": "Black Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knight_Greaves",
    "verified": true
  },
  "armor:5160000": {
    "kind": "armor",
    "itemId": 5160000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：东方无名灵庙；The 罗刹 Helm is 通过...获得 defeating 罗刹 ，地点： the 东方无名灵庙 ，位于 幽影亚坛, 附近 the 安堤废墟.",
    "details": "Location: Eastern Nameless Mausoleum；The Rakshasa Helm is obtained by defeating Rakshasa at the Eastern Nameless Mausoleum in the Scadu Altus, near the Ruins of Unte.",
    "sourceTitle": "Rakshasa Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rakshasa_Helm",
    "verified": true
  },
  "armor:5160100": {
    "kind": "armor",
    "itemId": 5160100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：东方无名灵庙；The 罗刹 防具 is 通过...获得 defeating 罗刹 ，地点： the 东方无名灵庙 ，位于 幽影亚坛, 附近 the 安堤废墟.",
    "details": "Location: Eastern Nameless Mausoleum；The Rakshasa Armor is obtained by defeating Rakshasa at the Eastern Nameless Mausoleum in the Scadu Altus, near the Ruins of Unte.",
    "sourceTitle": "Rakshasa Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rakshasa_Armor",
    "verified": true
  },
  "armor:5160200": {
    "kind": "armor",
    "itemId": 5160200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：东方无名灵庙；The 罗刹 Gauntlets is 通过...获得 defeating 罗刹 ，地点： the 东方无名灵庙 ，位于 幽影亚坛, 附近 the 安堤废墟.",
    "details": "Location: Eastern Nameless Mausoleum；The Rakshasa Gauntlets is obtained by defeating Rakshasa at the Eastern Nameless Mausoleum in the Scadu Altus, near the Ruins of Unte.",
    "sourceTitle": "Rakshasa Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rakshasa_Gauntlets",
    "verified": true
  },
  "armor:5160300": {
    "kind": "armor",
    "itemId": 5160300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：东方无名灵庙；The 罗刹 Greaves is 通过...获得 defeating 罗刹 ，地点： the 东方无名灵庙 ，位于 幽影亚坛, 附近 the 安堤废墟.",
    "details": "Location: Eastern Nameless Mausoleum；The Rakshasa Greaves is obtained by defeating Rakshasa at the Eastern Nameless Mausoleum in the Scadu Altus, near the Ruins of Unte.",
    "sourceTitle": "Rakshasa Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rakshasa_Greaves",
    "verified": true
  },
  "armor:5180000": {
    "kind": "armor",
    "itemId": 5180000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The 火 剑士 Helm has a 3.00% 有概率从 火 剑士s ，位于 幽影城, 幽影城（教区）, and 物种保藏库.",
    "details": "The Fire Knight Helm has a 3.00% chance to drop from Fire Knights in the Shadow Keep, Shadow Keep, Church District, and Specimen Storehouse.",
    "sourceTitle": "Fire Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Knight_Helm",
    "verified": true
  },
  "armor:5180100": {
    "kind": "armor",
    "itemId": 5180100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Fire Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Knight_Armor",
    "verified": true
  },
  "armor:5180200": {
    "kind": "armor",
    "itemId": 5180200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The 火 剑士 Gauntlets has a 3.00% 有概率从 火 剑士s ，位于 幽影城, 幽影城（教区）, and 物种保藏库.",
    "details": "The Fire Knight Gauntlets has a 3.00% chance to drop from Fire Knights in the Shadow Keep, Shadow Keep, Church District, and Specimen Storehouse.",
    "sourceTitle": "Fire Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Knight_Gauntlets",
    "verified": true
  },
  "armor:5180300": {
    "kind": "armor",
    "itemId": 5180300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The 火 剑士 Greaves has a 3.00% 有概率从 火 剑士s ，位于 幽影城, 幽影城（教区）, and 物种保藏库.",
    "details": "The Fire Knight Greaves has a 3.00% chance to drop from Fire Knights in the Shadow Keep, Shadow Keep, Church District, and Specimen Storehouse.",
    "sourceTitle": "Fire Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Knight_Greaves",
    "verified": true
  },
  "armor:5181100": {
    "kind": "armor",
    "itemId": 5181100,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Fire Knight Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Knight_Armor_(Altered)",
    "verified": false
  },
  "armor:5182000": {
    "kind": "armor",
    "itemId": 5182000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：幽影城（教区）；The Death Mask Helm is obtained upon defeating Elder Wego, an unmarked 火 剑士 boss ，地点： the cathedral ，位于 幽影城（教区）, accessible 后 draining the water.",
    "details": "Location: Shadow Keep, Church District；The Death Mask Helm is obtained upon defeating Elder Wego, an unmarked Fire Knight boss at the cathedral in the Shadow Keep, Church District, accessible after draining the water.",
    "sourceTitle": "Death Mask Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Death_Mask_Helm",
    "verified": true
  },
  "armor:5183000": {
    "kind": "armor",
    "itemId": 5183000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：幽影城；The Winged Serpent Helm is 通过...获得 defeating 火 剑士 Kood ，地点： the 幽影城, who also drops Ash of War: Flame 矛. He guards the path to “穿刺者”梅瑟莫 and is reached from the 物种保藏库 by climbing specimens 后 using the lever to move them. 头盔 outside, turn right, and head up the stairs. Then turn left and cross the bridge.",
    "details": "Location: Shadow Keep；The Winged Serpent Helm is obtained by defeating Fire Knight Kood at the Shadow Keep, who also drops Ash of War: Flame Spear. He guards the path to Messmer the Impaler and is reached from the Specimen Storehouse by climbing specimens after using the lever to move them. Head outside, turn right, and head up the stairs. Then turn left and cross the bridge.",
    "sourceTitle": "Winged Serpent Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Winged_Serpent_Helm",
    "verified": true
  },
  "armor:5184000": {
    "kind": "armor",
    "itemId": 5184000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：幽影城；The Salza's Hood is 通过...获得 defeating 火 剑士 Salza, who casts his signature Rain of 火 incantation on the 西边城墙 bridge connecting the 幽影城 to the 劳弗古遗迹.",
    "details": "Location: Shadow Keep；The Salza's Hood is obtained by defeating Fire Knight Salza, who casts his signature Rain of Fire incantation on the West Rampart bridge connecting the Shadow Keep to the Ancient Ruins of Rauh.",
    "sourceTitle": "Salza's Hood",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Salza's_Hood",
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
    "summary": "地图拾取 / 宝箱：地点：幽影亚坛；The Leather 头盔band is 通过...获得 looting a corpse ，位于 bear woods in 幽影亚坛.",
    "details": "Location: Scadu Altus；The Leather Headband is obtained by looting a corpse in the bear woods in Scadu Altus.",
    "sourceTitle": "Leather Headband",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Headband",
    "verified": true
  },
  "armor:5190100": {
    "kind": "armor",
    "itemId": 5190100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Gloried Attire",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gloried_Attire",
    "verified": true
  },
  "armor:5190200": {
    "kind": "armor",
    "itemId": 5190200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Leather Arm Wraps",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Arm_Wraps",
    "verified": false
  },
  "armor:5190300": {
    "kind": "armor",
    "itemId": 5190300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Leather Leg Wraps",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Leg_Wraps",
    "verified": false
  },
  "armor:5191000": {
    "kind": "armor",
    "itemId": 5191000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：劳弗下方；The Leather Crown is 通过...获得 looting a corpse ，位于 woods ，地点： 劳弗下方.",
    "details": "Location: Rauh Base；The Leather Crown is obtained by looting a corpse in the woods at Rauh Base.",
    "sourceTitle": "Leather Crown",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leather_Crown",
    "verified": true
  },
  "armor:5191100": {
    "kind": "armor",
    "itemId": 5191100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Highland Attire",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Highland_Attire",
    "verified": true
  },
  "armor:5200000": {
    "kind": "armor",
    "itemId": 5200000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：驱暗地下墓地；The 死骑士 Helm is 位于 on the 死骑士 corpse ，位于 驱暗地下墓地, located ，位于 southern 幽影亚坛. The body is on a ledge. Beware the Catacombs Conjurer.",
    "details": "Location: Darklight Catacombs；The Death Knight Helm is found on the Death Knight corpse in the Darklight Catacombs, located in the southern Scadu Altus. The body is on a ledge. Beware the Catacombs Conjurer.",
    "sourceTitle": "Death Knight Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Death_Knight_Helm",
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
    "summary": "地图拾取 / 宝箱：地点：驱暗地下墓地；The 死骑士 防具 is 位于 on the 死骑士 corpse ，位于 驱暗地下墓地, located ，位于 southern 幽影亚坛. The body is on a ledge. Beware the Catacombs Conjurer.",
    "details": "Location: Darklight Catacombs；The Death Knight Armor is found on the Death Knight corpse in the Darklight Catacombs, located in the southern Scadu Altus. The body is on a ledge. Beware the Catacombs Conjurer.",
    "sourceTitle": "Death Knight Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Death_Knight_Armor",
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
    "summary": "地图拾取 / 宝箱：地点：驱暗地下墓地；The 死骑士 Gauntlets is 位于 on the 死骑士 corpse ，位于 驱暗地下墓地, located ，位于 southern 幽影亚坛. The body is on a ledge. Beware the Catacombs Conjurer.",
    "details": "Location: Darklight Catacombs；The Death Knight Gauntlets is found on the Death Knight corpse in the Darklight Catacombs, located in the southern Scadu Altus. The body is on a ledge. Beware the Catacombs Conjurer.",
    "sourceTitle": "Death Knight Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Death_Knight_Gauntlets",
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
    "summary": "地图拾取 / 宝箱：地点：驱暗地下墓地；The 死骑士 Greaves is 位于 on the 死骑士 corpse ，位于 驱暗地下墓地, located ，位于 southern 幽影亚坛. The body is on a ledge. Beware the Catacombs Conjurer.",
    "details": "Location: Darklight Catacombs；The Death Knight Greaves is found on the Death Knight corpse in the Darklight Catacombs, located in the southern Scadu Altus. The body is on a ledge. Beware the Catacombs Conjurer.",
    "sourceTitle": "Death Knight Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Death_Knight_Greaves",
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
    "summary": "敌人 / 首领掉落：The Curseblade Mask has a 3.00% 有概率从 Curseblades.",
    "details": "The Curseblade Mask has a 3.00% chance to drop from Curseblades.",
    "sourceTitle": "Curseblade Mask",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Curseblade_Mask",
    "verified": true
  },
  "armor:5210100": {
    "kind": "armor",
    "itemId": 5210100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Ascetic's Loincloth have a 3.00% 有概率从 Curseblades.",
    "details": "The Ascetic's Loincloth have a 3.00% chance to drop from Curseblades.",
    "sourceTitle": "Ascetic's Loincloth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ascetic's_Loincloth",
    "verified": true
  },
  "armor:5210200": {
    "kind": "armor",
    "itemId": 5210200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Ascetic's Wrist Guards have a 3.00% 有概率从 Curseblades.",
    "details": "The Ascetic's Wrist Guards have a 3.00% chance to drop from Curseblades.",
    "sourceTitle": "Ascetic's Wrist Guards",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ascetic's_Wrist_Guards",
    "verified": true
  },
  "armor:5210300": {
    "kind": "armor",
    "itemId": 5210300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Ascetic's Ankle Guards have a 3.00% 有概率从 Curseblades.",
    "details": "The Ascetic's Ankle Guards have a 3.00% chance to drop from Curseblades.",
    "sourceTitle": "Ascetic's Ankle Guards",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ascetic's_Ankle_Guards",
    "verified": true
  },
  "armor:5220000": {
    "kind": "armor",
    "itemId": 5220000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer's_Helm",
    "verified": false
  },
  "armor:5220100": {
    "kind": "armor",
    "itemId": 5220100,
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；Messmer's 防具 is 由 “解指”恩雅 ，用于 卢恩 15,000, available 后 defeating “穿刺者”梅瑟莫.",
    "details": "Location: Roundtable Hold；Messmer's Armor is sold by Finger Reader Enia for 卢恩 15,000, available after defeating Messmer the Impaler.",
    "sourceTitle": "Messmer's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer's_Armor",
    "verified": true
  },
  "armor:5220200": {
    "kind": "armor",
    "itemId": 5220200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer's_Gauntlets",
    "verified": false
  },
  "armor:5220300": {
    "kind": "armor",
    "itemId": 5220300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer's_Greaves",
    "verified": false
  },
  "armor:5221000": {
    "kind": "armor",
    "itemId": 5221000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Messmer's Helm (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer's_Helm_(Altered)",
    "verified": false
  },
  "armor:5230000": {
    "kind": "armor",
    "itemId": 5230000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Gravebird Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravebird_Helm",
    "verified": false
  },
  "armor:5230100": {
    "kind": "armor",
    "itemId": 5230100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：?",
    "details": "Location: ?",
    "sourceTitle": "Gravebird's Blackquill Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravebird's_Blackquill_Armor",
    "verified": true
  },
  "armor:5230200": {
    "kind": "armor",
    "itemId": 5230200,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Gravebird Bracelets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravebird_Bracelets",
    "verified": false
  },
  "armor:5230300": {
    "kind": "armor",
    "itemId": 5230300,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Gravebird Anklets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravebird_Anklets",
    "verified": false
  },
  "armor:5231100": {
    "kind": "armor",
    "itemId": 5231100,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Gravebird Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravebird_Armor",
    "verified": false
  },
  "armor:5240000": {
    "kind": "armor",
    "itemId": 5240000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：幽影之地；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Helm.",
    "details": "Location: Realm of Shadow；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Helm.",
    "sourceTitle": "Common Soldier Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Common_Soldier_Helm",
    "verified": true
  },
  "armor:5240100": {
    "kind": "armor",
    "itemId": 5240100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：幽影之地；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Cloth 防具.",
    "details": "Location: Realm of Shadow；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Cloth Armor.",
    "sourceTitle": "Common Soldier Cloth Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Common_Soldier_Cloth_Armor",
    "verified": true
  },
  "armor:5240200": {
    "kind": "armor",
    "itemId": 5240200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：幽影之地；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Gauntlets.",
    "details": "Location: Realm of Shadow；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Gauntlets.",
    "sourceTitle": "Common Soldier Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Common_Soldier_Gauntlets",
    "verified": true
  },
  "armor:5240300": {
    "kind": "armor",
    "itemId": 5240300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：幽影之地；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Greaves.",
    "details": "Location: Realm of Shadow；Messmer Foot Soldiers have a 3.00% chance to drop the Common Soldier Greaves.",
    "sourceTitle": "Common Soldier Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Common_Soldier_Greaves",
    "verified": true
  },
  "armor:5250000": {
    "kind": "armor",
    "itemId": 5250000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Horned Warrior Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Horned_Warrior_Helm",
    "verified": false
  },
  "armor:5250100": {
    "kind": "armor",
    "itemId": 5250100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Horned Warrior Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Horned_Warrior_Armor",
    "verified": true
  },
  "armor:5250200": {
    "kind": "armor",
    "itemId": 5250200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Horned Warrior Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Horned_Warrior_Gauntlets",
    "verified": false
  },
  "armor:5250300": {
    "kind": "armor",
    "itemId": 5250300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Horned Warrior Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Horned_Warrior_Greaves",
    "verified": false
  },
  "armor:5252000": {
    "kind": "armor",
    "itemId": 5252000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：艾尼尔·伊利姆；The Divine Beast Helm has a 5.00% 有概率从 Divine Beast 剑士s.",
    "details": "Location: Enir-Ilim；The Divine Beast Helm has a 5.00% chance to drop from Divine Beast Warriors.",
    "sourceTitle": "Divine Beast Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Beast_Helm",
    "verified": true
  },
  "armor:5252100": {
    "kind": "armor",
    "itemId": 5252100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Divine Beast Warrior Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Beast_Warrior_Armor",
    "verified": true
  },
  "armor:5253000": {
    "kind": "armor",
    "itemId": 5253000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Divine Bird Helm has a 5.00% 有概率从 Divine Bird 剑士s.",
    "details": "The Divine Bird Helm has a 5.00% chance to drop from Divine Bird Warriors.",
    "sourceTitle": "Divine Bird Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Bird_Helm",
    "verified": true
  },
  "armor:5253100": {
    "kind": "armor",
    "itemId": 5253100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Divine Bird 剑士 防具 has a 5.00% 有概率从 Divine Bird 剑士s.",
    "details": "Divine Bird Warrior Armor has a 5.00% chance to drop from Divine Bird Warriors.",
    "sourceTitle": "Divine Bird Warrior Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Bird_Warrior_Armor",
    "verified": true
  },
  "armor:5253200": {
    "kind": "armor",
    "itemId": 5253200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Divine Bird 剑士 Gauntlets has a 5.00% 有概率从 Divine Bird 剑士s.",
    "details": "The Divine Bird Warrior Gauntlets has a 5.00% chance to drop from Divine Bird Warriors.",
    "sourceTitle": "Divine Bird Warrior Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Bird_Warrior_Gauntlets",
    "verified": true
  },
  "armor:5253300": {
    "kind": "armor",
    "itemId": 5253300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Divine Bird 剑士 Greaves has a 5% 有概率从 Divine Bird 剑士s.",
    "details": "The Divine Bird Warrior Greaves has a 5% chance to drop from Divine Bird Warriors.",
    "sourceTitle": "Divine Bird Warrior Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Bird_Warrior_Greaves",
    "verified": true
  },
  "armor:5260000": {
    "kind": "armor",
    "itemId": 5260000,
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；The Rellana's Helm is 由 “解指”恩雅 ，地点： the 圆桌厅堂 ，用于 卢恩 ? 卢恩 后 the player defeats “双月骑士”蕾菈娜 ，地点： 恩希斯城.",
    "details": "Location: Roundtable Hold；The Rellana's Helm is sold by Finger Reader Enia at the Roundtable Hold for 卢恩 ? runes after the player defeats Rellana, Twin Moon Knight at Castle Ensis.",
    "sourceTitle": "Rellana's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rellana's_Helm",
    "verified": true
  },
  "armor:5260100": {
    "kind": "armor",
    "itemId": 5260100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：?",
    "details": "Location: ?",
    "sourceTitle": "Rellana's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rellana's_Armor",
    "verified": true
  },
  "armor:5260200": {
    "kind": "armor",
    "itemId": 5260200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Rellana's Gloves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rellana's_Gloves",
    "verified": false
  },
  "armor:5260300": {
    "kind": "armor",
    "itemId": 5260300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Rellana's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rellana's_Greaves",
    "verified": false
  },
  "armor:5270000": {
    "kind": "armor",
    "itemId": 5270000,
    "sourceKind": "shop",
    "summary": "商店购买：地点：圆桌厅堂；The 年轻 Lion's Helm 可向 “解指”恩雅 后 defeating “米凯拉的王”拉塔恩.",
    "details": "Location: Roundtable Hold；The Young Lion's Helm can be purchased from Finger Reader Enia after defeating Radahn, Consort of Miquella.",
    "sourceTitle": "Young Lion's Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Young_Lion's_Helm",
    "verified": true
  },
  "armor:5270100": {
    "kind": "armor",
    "itemId": 5270100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Young Lion's Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Young_Lion's_Armor",
    "verified": true
  },
  "armor:5270200": {
    "kind": "armor",
    "itemId": 5270200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Young Lion's Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Young_Lion's_Gauntlets",
    "verified": false
  },
  "armor:5270300": {
    "kind": "armor",
    "itemId": 5270300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Young Lion's Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Young_Lion's_Greaves",
    "verified": false
  },
  "armor:5271100": {
    "kind": "armor",
    "itemId": 5271100,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Young Lion's Armor (Altered)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Young_Lion's_Armor_(Altered)",
    "verified": false
  },
  "armor:5272000": {
    "kind": "armor",
    "itemId": 5272000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：神之门；The Circlet of 浅 is obtained upon defeating “米凯拉的王”拉塔恩 ，地点： the 神之门, located atop the tower of 艾尼尔·伊利姆.",
    "details": "Location: Gate of Divinity；The Circlet of Light is obtained upon defeating Radahn, Consort of Miquella at the Gate of Divinity, located atop the tower of Enir-Ilim.",
    "sourceTitle": "Circlet of Light",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Circlet_of_Light",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Shadow Militiaman Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shadow_Militiaman_Helm",
    "verified": false
  },
  "armor:5280100": {
    "kind": "armor",
    "itemId": 5280100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：",
    "details": "Location:",
    "sourceTitle": "Shadow Militiaman Armor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shadow_Militiaman_Armor",
    "verified": true
  },
  "armor:5280200": {
    "kind": "armor",
    "itemId": 5280200,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Shadow Militiaman Gauntlets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shadow_Militiaman_Gauntlets",
    "verified": false
  },
  "armor:5280300": {
    "kind": "armor",
    "itemId": 5280300,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Shadow Militiaman Greaves",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shadow_Militiaman_Greaves",
    "verified": false
  },
  "armor:5290000": {
    "kind": "armor",
    "itemId": 5290000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：“塔之镇”贝瑞特；击败 the 神兽舞狮 ，地点： the 神兽舞台 in “塔之镇”贝瑞特.",
    "details": "Location: Belurat, Tower Settlement；Defeat the Divine Beast Dancing Lion at the Theatre of the Divine Beast in Belurat, Tower Settlement.",
    "sourceTitle": "Divine Beast Head",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Beast_Head",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：深紫花园；The 圣女托莉娜's Blossom is 位于 on 圣女托莉娜's body within the 深紫花园 ，地点： the bottom of the 石棺大洞, accessible 后 defeating “米凯拉的王”拉塔恩.",
    "details": "Location: Garden of Deep Purple；The St. Trina's Blossom is found on St. Trina's body within the Garden of Deep Purple at the bottom of the Stone Coffin Fissure, accessible after defeating Radahn, Consort of Miquella.Completing Thiollier's questline not required to obtain this item.",
    "sourceTitle": "St. Trina's Blossom",
    "sourceUrl": "https://eldenring.fandom.com/wiki/St._Trina's_Blossom",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Crucible Hammer-Helm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Hammer-Helm",
    "verified": false
  },
  "armor:5320000": {
    "kind": "armor",
    "itemId": 5320000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：贝瑞特监牢；The Greatjar is 位于 before a large pot on an altar ，位于 贝瑞特监牢.",
    "details": "Location: Belurat Gaol；The Greatjar is found before a large pot on an altar in the Belurat Gaol.",
    "sourceTitle": "Greatjar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greatjar",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：",
    "details": "Location:",
    "sourceTitle": "Imp Head (Lion)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Imp_Head_(Lion)",
    "verified": true
  },
  "talisman:1000": {
    "kind": "talisman",
    "itemId": 1000,
    "sourceKind": "shop",
    "summary": "商店购买：May be chosen as a 遗物 when creating a new character.Purchased ，用于 1,500 卢恩 from the 流浪民族的商人 ，地点： the 摩恩城（城墙前方） 赐福, north of 摩恩城 ，位于 啜泣半岛 region.",
    "details": "May be chosen as a Keepsake when creating a new character.Purchased for 1,500 Runes from the Nomadic Merchant at the Castle Morne Rampart Site of Grace, north of Castle Morne in the Weeping Peninsula region.",
    "sourceTitle": "Crimson Amber Medallion",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Amber_Medallion",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 火山官邸, ，位于 格密尔火山 region. From 牢镇教堂, head out the eastern door, and right. Proceed along the main path through the town, past an Iron Virgin until reaching a brick courtyard, in front of a building whose door is locked by a semi-transparent fog wall. Unlock this door by giving one 石剑钥匙 to the adjacent imp statue, and head up the spiral staircase inside this building. The corpse can be 位于 on this upper landing.",
    "details": "Obtained from a corpse in Volcano Manor, in the Mt. Gelmir region. From Prison Town Church, head out the eastern door, and right. Proceed along the main path through the town, past an Iron Virgin until reaching a brick courtyard, in front of a building whose door is locked by a semi-transparent fog wall. Unlock this door by giving one Stonesword Key to the adjacent imp statue, and head up the spiral staircase inside this building. The corpse can be found on this upper landing.",
    "sourceTitle": "Crimson Amber Medallion +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Amber_Medallion_%2B1",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in 弃置恶兆的地底, ，位于 王城罗德尔 region. This corpse can only be reached 后 defeating “黑剑”玛利喀斯, as the sewer hole that leads to the corpse is only uncovered in 灰城罗德尔. Once the area is available, head south from “灰烬王城”罗德尔 to find the sewer hole, in a small valley where ash has not covered up the capital grounds, and drop down to find the corpse, hanging over a beam.",
    "details": "Obtained from a corpse in Subterranean Shunning-Grounds, in the Leyndell, Royal Capital region. This corpse can only be reached after defeating Maliketh, the Black Blade, as the sewer hole that leads to the corpse is only uncovered in Leyndell, Ashen Capital. Once the area is available, head south from Leyndell, Capital of Ash to find the sewer hole, in a small valley where ash has not covered up the capital grounds, and drop down to find the corpse, hanging over a beam.",
    "sourceTitle": "Crimson Amber Medallion +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Amber_Medallion_%2B2",
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
    "summary": "敌人 / 首领掉落：获得途径 by defeating the 猎犬骑士 in 湖旁结晶洞窟 in southern 湖之利耶尼亚",
    "details": "Obtained by defeating the Bloodhound Knight in Lakeside Crystal Cave in southern Liurnia of the Lakes",
    "sourceTitle": "Cerulean Amber Medallion",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cerulean_Amber_Medallion",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：获得途径 from a corpse hanging from a wooden platform attached to the southern wall of 索尔城, in 巨人山顶. From 日蚀教堂, head left to the front of the church, left through a door, right, up a ladder, southwest to a tower, which can be circled around, via a wooden platform, and down a ladder, to the wall in question. The corpse is guarded by a phantom knight, wielding dual swords.",
    "details": "Obtained from a corpse hanging from a wooden platform attached to the southern wall of Castle Sol, in Mountaintops of the Giants. From Church of the Eclipse, head left to the front of the church, left through a door, right, up a ladder, southwest to a tower, which can be circled around, via a wooden platform, and down a ladder, to the wall in question. The corpse is guarded by a phantom knight, wielding dual swords.",
    "sourceTitle": "Cerulean Amber Medallion +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cerulean_Amber_Medallion_%2B1",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱, ，位于 cellar of 月之贵族废墟, in southern 湖之利耶尼亚. This area of Liurnia can only be accessed from underground, 后 progressing through 大回廊. The cellar is hidden beneath an illusory floor, and locked behind an imp statue that requires one 石剑钥匙 to open.",
    "details": "Obtained from a chest, in the cellar of Lunar Estate Ruins, in southern Liurnia of the Lakes. This area of Liurnia can only be accessed from underground, after progressing through Grand Cloister. The cellar is hidden beneath an illusory floor, and locked behind an imp statue that requires one Stonesword Key to open.",
    "sourceTitle": "Cerulean Amber Medallion +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cerulean_Amber_Medallion_%2B2",
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
    "summary": "敌人 / 首领掉落：获得途径 by defeating 米兰达之花 ，位于 灵庙原野洞窟, in western 啜泣半岛, in southwestern 宁姆格福.",
    "details": "Obtained by defeating Miranda Blossom in the Tombsward Cave, in western Weeping Peninsula, in southwestern Limgrave.",
    "sourceTitle": "Viridian Amber Medallion",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Viridian_Amber_Medallion",
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
    "summary": "敌人 / 首领掉落：获得途径 by defeating Margit the Fell Omen in northwestern 王城罗德尔, south of the 城外战场遗迹 赐福. He will break disguise as a Commoner when you approach him. The decoy will still be there even if “恶兆王”蒙葛特 has been slain.",
    "details": "Obtained by defeating Margit the Fell Omen in northwestern Leyndell, Royal Capital, south of the Outer Wall Battleground grace. He will break disguise as a Commoner when you approach him. The decoy will still be there even if Morgott, the Omen King has been slain.",
    "sourceTitle": "Viridian Amber Medallion +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Viridian_Amber_Medallion_%2B1",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a 宝箱 in 米凯拉的圣树. From 圣树镇（广场） head southeast, drop down to the rooftops guarded by Summoning Snails, and continue southeast to perform a running jump across to another rooftop, which is slightly lower in height. Turn immediately around and perform a running jump to reach the inside of the previous building. The 宝箱 can be 位于 a room in this building.",
    "details": "Obtained from a chest in Miquella's Haligtree. From Haligtree Town Plaza head southeast, drop down to the rooftops guarded by Summoning Snails, and continue southeast to perform a running jump across to another rooftop, which is slightly lower in height. Turn immediately around and perform a running jump to reach the inside of the previous building. The chest can be found in a room in this building.",
    "sourceTitle": "Viridian Amber Medallion +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Viridian_Amber_Medallion_%2B2",
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
    "summary": "敌人 / 首领掉落：Quest Item: 圆桌厅堂；Received from Nepheli Loux in 圆桌厅堂, 后 talking to her ，地点： 史东薇尔城 and defeating “接肢”葛瑞克.",
    "details": "Quest Item: Roundtable Hold；Received from Nepheli Loux in Roundtable Hold, after talking to her at Stormveil Castle and defeating Godrick the Grafted.",
    "sourceTitle": "Arsenal Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Arsenal_Charm",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 亚坛坑道, looted from a corpse upon a wooden balcony overlooking a pit, where a monster fires rocks ，地点： you from above, with gravity magic. From the entrance to this area, drop to an overgrown root, and climb it to jump to an upper balcony, where the corpse lies.",
    "details": "Found in Altus Tunnel, looted from a corpse upon a wooden balcony overlooking a pit, where a monster fires rocks at you from above, with gravity magic. From the entrance to this area, drop to an overgrown root, and climb it to jump to an upper balcony, where the corpse lies.",
    "sourceTitle": "Arsenal Charm +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Arsenal_Charm_%2B1",
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
    "summary": "敌人 / 首领掉落：Rewarded by the Great Jar, 后 defeating 3 Great Jar's 剑士s, in 桂奥尔龙墓.This area can only be approached from 希芙拉河的出口井.",
    "details": "Rewarded by the Great Jar, after defeating 3 Great Jar's Warriors, in Greyoll's Dragonbarrow.This area can only be approached from Deep Siofra Well.Speaking with the Great Jar will cause 3 duelist summon signs to appear on the ground. Defeat all 3 duelists in turn to be rewarded with the talisman.Similar to Fia's Champions, if playing online the duelists appear to be randomly selected from among actual online player-characters that have completed the Great Jar's challenge, which are then scaled and given infinite FP.If playing in offline mode, three pre-made characters are used instead.",
    "sourceTitle": "Great-Jar's Arsenal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Great-Jar's_Arsenal",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from an altar in 边境英雄墓地, in western 宁姆格福. This dungeon is accessed from 漂流墓地 后 inserting 2 石剑钥匙s into the nearby imp statue, to unlock the semi-transparent fog wall. Proceed down the ladder and across the poison pond, to reach a ramp, patrolled by an invincible chariot. Proceed down the ramp by hiding in alcoves on the side, to avoid the chariot. When the ramp turns into a bridge, with gaps on either side, drop from either side of the highest point of the bridge, to reach a lower platform. Proceed to a stairway, but beware of the fire trap ，地点： its bottom. 火 a projectile ，地点： the pillar ，地点： the end of the hallway to disable it. Proceed down the hallway to a large room, with a bridge across the middle, to reach the altar on the other side. Beware of two “接肢”贵族后裔s that will fall from the ceiling as you traverse the bridge.",
    "details": "Obtained from an altar in Fringefolk Hero's Grave, in western Limgrave. This dungeon is accessed from Stranded Graveyard after inserting 2 Stonesword Keys into the nearby imp statue, to unlock the semi-transparent fog wall. Proceed down the ladder and across the poison pond, to reach a ramp, patrolled by an invincible chariot. Proceed down the ramp by hiding in alcoves on the side, to avoid the chariot. When the ramp turns into a bridge, with gaps on either side, drop from either side of the highest point of the bridge, to reach a lower platform. Proceed to a stairway, but beware of the fire trap at its bottom. Fire a projectile at the pillar at the end of the hallway to disable it. Proceed down the hallway to a large room, with a bridge across the middle, to reach the altar on the other side. Beware of two Grafted Scions that will fall from the ceiling as you traverse the bridge.",
    "sourceTitle": "Erdtree's Favor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Erdtree's_Favor",
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
    "summary": "敌人 / 首领掉落：获得途径 from a 宝箱 in 弃置恶兆的大教堂, ，位于 王城罗德尔 region. This 宝箱 is available 后 defeating “恶兆之子”蒙格 in this same room. The room can be reached from 弃置恶兆的底层 in Subterranean Shunning Grounds.",
    "details": "Obtained from a chest in Cathedral of the Forsaken, in the Leyndell, Royal Capital region. This chest is available after defeating Mohg, the Omen in this same room. The room can be reached from Forsaken Depths in Subterranean Shunning Grounds.",
    "sourceTitle": "Erdtree's Favor +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Erdtree's_Favor_%2B1",
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
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in 灰城罗德尔, which can only be accessed late-game, 后 defeating “黑剑”玛利喀斯. This area is only accessible when approaching from the 禁域. 头盔 west into the capital from the 洛德大升降机, down the staircases, and to the south end of the ash-covered area, where the corpse can be 位于, hanging from the top of a tree root that juts out of the ground. Beware of the three 腐烂树灵s that guard the area. Hug the walls of the area as you head south to avoid them.",
    "details": "Obtained from a corpse in Leyndell, Ashen Capital, which can only be accessed late-game, after defeating Maliketh, the Black Blade. This area is only accessible when approaching from the Forbidden Lands. Head west into the capital from the Grand Lift of Rold, down the staircases, and to the south end of the ash-covered area, where the corpse can be found, hanging from the top of a tree root that juts out of the ground. Beware of the three Ulcerated Tree Spirits that guard the area. Hug the walls of the area as you head south to avoid them.",
    "sourceTitle": "Erdtree's Favor +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Erdtree's_Favor_%2B2",
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
    "summary": "敌人 / 首领掉落：啜泣半岛 (玛莉卡第四教堂)；Drop: 萨米尔的古英雄 ，位于 啜泣的封印监牢.",
    "details": "Weeping Peninsula (Fourth Church of Marika)；Drop: Ancient Hero of Zamor in the Weeping Evergaol.",
    "sourceTitle": "Radagon's Scarseal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radagon's_Scarseal",
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
    "summary": "地图拾取 / 宝箱：盖利德 (法洛斯要塞)；Area: on the corpse 附近 a Rat and a Giant Rat ，位于 barn.",
    "details": "Caelid (Fort Faroth)；Area: on the corpse near a Rat and a Giant Rat in the barn.",
    "sourceTitle": "Radagon's Soreseal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radagon's_Soreseal",
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
    "summary": "地图拾取 / 宝箱：地点：盖尔要塞；获得途径 from a 宝箱 in 盖尔要塞, located in western 盖利德. The 宝箱 is 位于 beneath a canopy on the upper platform of the fort.",
    "details": "Location: Fort Gael；Obtained from a chest in Fort Gael, located in western Caelid. The chest is found beneath a canopy on the upper platform of the fort.",
    "sourceTitle": "Starscourge Heirloom",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Starscourge_Heirloom",
    "verified": true
  },
  "talisman:1070": {
    "kind": "talisman",
    "itemId": 1070,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：腐败病教堂；获得途径 from 米莉森 ，地点： the 腐败病教堂 in eastern 盖利德, 后 giving her the repaired Unalloyed Gold Needle and waiting ，用于 her to recover.",
    "details": "Location: Church of the Plague；Obtained from Millicent at the Church of the Plague in eastern Caelid, after giving her the repaired Unalloyed Gold Needle and waiting for her to recover.",
    "sourceTitle": "Prosthesis-Wearer Heirloom",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prosthesis-Wearer_Heirloom",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：利耶尼亚神授塔；The Stargazer Heirloom is looted from the charred body Lunar Princess Ranni, lying ，地点： the top of the 利耶尼亚神授塔 in eastern 湖之利耶尼亚.",
    "details": "Location: Divine Tower of Liurnia；The Stargazer Heirloom is looted from the charred body Lunar Princess Ranni, lying at the top of the Divine Tower of Liurnia in eastern Liurnia of the Lakes.",
    "sourceTitle": "Stargazer Heirloom",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Stargazer_Heirloom",
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
    "summary": "地图拾取 / 宝箱：地点：受净化的废墟；双指 Heirloom is 从...获得 a 宝箱 ，位于 cellar of the 受净化的废墟, located just northeast of 史东薇尔城 in southern 湖之利耶尼亚. The stairs to the cellar are covered by wooden planks, which must be rolled over to be broken.",
    "details": "Location: Purified Ruins；The Two Fingers Heirloom is obtained from a chest in the cellar of the Purified Ruins, located just northeast of Stormveil Castle in southern Liurnia of the Lakes. The stairs to the cellar are covered by wooden planks, which must be rolled over to be broken.",
    "sourceTitle": "Two Fingers Heirloom",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Two_Fingers_Heirloom",
    "verified": true
  },
  "talisman:1100": {
    "kind": "talisman",
    "itemId": 1100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a 宝箱 ，位于 通往圣树的密道, 禁域. From the large circular platform ，位于 large central room, drop straight down from the broken railing to land on an invisible platform, and walk directly South to a small room. Dispel the illusory wall behind a Grave Glovewort (9) to reveal the 宝箱.",
    "details": "Obtained from a chest in the Hidden Path to the Haligtree, Forbidden Lands. From the large circular platform in the large central room, drop straight down from the broken railing to land on an invisible platform, and walk directly South to a small room. Dispel the illusory wall behind a Grave Glovewort (9) to reveal the chest.",
    "sourceTitle": "Silver Scarab",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Silver_Scarab",
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
    "summary": "敌人 / 首领掉落：获得途径 by defeating the dual 玛莲妮亚的尊腐骑士 ，位于 废弃洞窟 in central 盖利德. This cave can be reached by heading east of the 熏烧火墙, and using a large dead tree root to traverse a canyon.",
    "details": "Obtained by defeating the dual Cleanrot Knight in the Abandoned Cave in central Caelid. This cave can be reached by heading east of the Smoldering Wall, and using a large dead tree root to traverse a canyon.",
    "sourceTitle": "Gold Scarab",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gold_Scarab",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：地点：“永恒之城”诺克史黛拉；The Moon of Nokstella is the end of dungeon ...奖励 “永恒之城”诺克史黛拉. It is looted from a 宝箱 ，位于 base of a Chair-Crypt housed within a cathedral located ，位于 upper northwestern section of the city.",
    "details": "Location: Nokstella, Eternal City；The Moon of Nokstella is the end of dungeon reward for Nokstella, Eternal City. It is looted from a treasure chest in the base of a Chair-Crypt housed within a cathedral located in the upper northwestern section of the city.It is protected by a Nox Swordstress and two Mimic Tears.",
    "sourceTitle": "Moon of Nokstella",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Moon_of_Nokstella",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 ，位于 cellar of 水唤村, in northern 宁姆格福. The cellar is locked behind a semi-transparent fog wall that can be unlocked by inserting one 石剑钥匙 into the adjacent imp statue.",
    "details": "Obtained from a chest in the cellar of Summonwater Village, in northern Limgrave. The cellar is locked behind a semi-transparent fog wall that can be unlocked by inserting one Stonesword Key into the adjacent imp statue.",
    "sourceTitle": "Green Turtle Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Green_Turtle_Talisman",
    "verified": true
  },
  "talisman:1160": {
    "kind": "talisman",
    "itemId": 1160,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in eastern 湖之利耶尼亚. From 群集灵庙, head north up an incline, then left, and proceed southwest to a large tall rock formation. Walk counterclockwise around this formation to find a hole ，位于 formation, forming an archway over a small ledge. Drop down from this ledge and head left to find the corpse, dangling over the edge of a cliff.",
    "details": "Obtained from a corpse in eastern Liurnia of the Lakes. From Mausoleum Compound, head north up an incline, then left, and proceed southwest to a large tall rock formation. Walk counterclockwise around this formation to find a hole in the formation, forming an archway over a small ledge. Drop down from this ledge and head left to find the corpse, dangling over the edge of a cliff.",
    "sourceTitle": "Stalwart Horn Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Stalwart_Horn_Charm",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in southwestern 化圣雪原, in western 巨人山顶. The corpse can be 位于 laying over a log, between the two large dead trees, guarded by two Ancestral Followers.",
    "details": "Obtained from a corpse in southwestern Consecrated Snowfield, in western Mountaintops of the Giants. The corpse can be found laying over a log, between the two large dead trees, guarded by two Ancestral Followers.",
    "sourceTitle": "Stalwart Horn Charm +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Stalwart_Horn_Charm_%2B1",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse in an ant's nest in southwest 安瑟尔河, 附近 安瑟尔河（下游）.",
    "details": "Found on a corpse in an ant's nest in southwest Ainsel River, near Ainsel River Downstream.",
    "sourceTitle": "Immunizing Horn Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Immunizing_Horn_Charm",
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
    "summary": "敌人 / 首领掉落：获得途径 by killing an Ancestral Follower around the 腐败湖, southeast of 腐败湖畔",
    "details": "Obtained by killing an Ancestral Follower around the Lake of Rot, southeast of Lake of Rot Shoreside",
    "sourceTitle": "Immunizing Horn Charm +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Immunizing_Horn_Charm_%2B1",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse, lying on the stairs in northern 希芙拉河, 附近 the Beneath the Well 赐福一览 (this is the entrance area to the region if using the 希芙拉河的出口井 in 盖利德).",
    "details": "Obtained from a corpse, lying on the stairs in northern Siofra River, near the Beneath the Well Sites of Grace (this is the entrance area to the region if using the Deep Siofra Well in Caelid).",
    "sourceTitle": "Clarifying Horn Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Clarifying_Horn_Charm",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse, in 希芙拉河, accessed from “永恒之城”诺克隆恩. From 仿身泪滴, head northeast along the aqueduct, to the spot where it collapses to the left, onto the field below. 头盔 down here, and northeast again, to drop down to the lower level of the aqueduct. Continue to the end of the aqueduct, and drop down several levels of broken floor, to the bottom of the building below, where the corpse can be 位于.",
    "details": "Obtained from a corpse, in Siofra River, accessed from Nokron, Eternal City. From Mimic Tear, head northeast along the aqueduct, to the spot where it collapses to the left, onto the field below. Head down here, and northeast again, to drop down to the lower level of the aqueduct. Continue to the end of the aqueduct, and drop down several levels of broken floor, to the bottom of the building below, where the corpse can be found.",
    "sourceTitle": "Clarifying Horn Charm +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Clarifying_Horn_Charm_%2B1",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse next to the giant root-like face underneath 史东薇尔城.",
    "details": "Obtained from a corpse next to the giant root-like face underneath Stormveil Castle.",
    "sourceTitle": "Prince of Death's Pustule",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prince_of_Death's_Pustule",
    "verified": true
  },
  "talisman:1191": {
    "kind": "talisman",
    "itemId": 1191,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：深根底层；The Prince of Death's Cyst is obtained upon defeating the 卢恩熊 miniboss ，地点： the 深根底层. It is in a cave hidden behind a waterfall, 位于 northeast of the 赐福 深根底层 赐福.",
    "details": "Location: Deeproot Depths；The Prince of Death's Cyst is obtained upon defeating the Runebear miniboss at the Deeproot Depths. It is in a cave hidden behind a waterfall, found northeast of the 赐福 Deeproot Depths site of grace.",
    "sourceTitle": "Prince of Death's Cyst",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Prince_of_Death's_Cyst",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 希芙拉河, which lies ，地点： the end of a broken bridge, leading to “永恒之城”诺克隆恩. This area can only be reached from a waygate ，地点： one of 四钟楼, next to a message that reads \"晚上 Sky Unceasing\".",
    "details": "Obtained from a corpse in Siofra River, which lies at the end of a broken bridge, leading to Nokron, Eternal City. This area can only be reached from a waygate at one of The Four Belfries, next to a message that reads \"Night Sky Unceasing\".",
    "sourceTitle": "Mottled Necklace",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mottled_Necklace",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in “永恒之城”诺克隆恩, atop the pillars above 角骸灵地. Climb around the terrain on the left side of the ruins to reach the top of the pillars.",
    "details": "Obtained from a corpse in Nokron, Eternal City, atop the pillars above Hallowhorn Grounds. Climb around the terrain on the left side of the ruins to reach the top of the pillars.",
    "sourceTitle": "Mottled Necklace +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mottled_Necklace_%2B1",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse, in 龙墓洞窟, in northern 桂奥尔龙墓, below the 小黄金树. 头盔 left 后 entering the 卢恩熊's room to find it.",
    "details": "Obtained from a corpse, in Dragonbarrow Cave, in northern Greyoll's Dragonbarrow, below the Minor Erdtree. Head left after entering the Runebear's room to find it.",
    "sourceTitle": "Bull-Goat's Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bull-Goat's_Talisman",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in northwestern 希芙拉河, ，地点： the base of a waterfall behind the 龙人士兵 boss fight arena.",
    "details": "Obtained from a corpse in northwestern Siofra River, at the base of a waterfall behind the Dragonkin Soldier boss fight arena.",
    "sourceTitle": "Marika's Scarseal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marika's_Scarseal",
    "verified": true
  },
  "talisman:1221": {
    "kind": "talisman",
    "itemId": 1221,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a chalice in southeastern “圣树分枝”艾布雷菲尔. The chalice resides inside a room locked by a semi-transparent fog wall, which can be unlocked by inserting one 石剑钥匙 into the adjacent imp statue.From 艾布雷菲尔城墙内部, head east to the courtyard once guarded by an 黄金树的化身, and climb down the ladder ，地点： the southeast end of this area. Proceed southeast/clockwise through this lowermost level of Elphael to reach the fog wall.",
    "details": "Obtained from a chalice in southeastern Elphael, Brace of the Haligtree. The chalice resides inside a room locked by a semi-transparent fog wall, which can be unlocked by inserting one Stonesword Key into the adjacent imp statue.From Elphael Inner Wall, head east to the courtyard once guarded by an Erdtree Avatar, and climb down the ladder at the southeast end of this area. Proceed southeast/clockwise through this lowermost level of Elphael to reach the fog wall.Alternatively, and likely much easier, from Prayer Room proceed northeast to a buttress that can is within jump reach, use it to reach a connected pillar, drop to a ledge below that surrounds the pillar, and jump eastward from the pillar to the top of a rampart, patrolled by an Erdtree Avatar. Proceed to the southern end of this rampart, and jump over the inner railing to reach the fog wall.",
    "sourceTitle": "Marika's Soreseal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marika's_Soreseal",
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
    "summary": "敌人 / 首领掉落：获得途径 by killing Iron 拳头 Alexander, before completing his 任务线.",
    "details": "Obtained by killing Iron Fist Alexander, before completing his questline.",
    "sourceTitle": "Warrior Jar Shard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Warrior_Jar_Shard",
    "verified": true
  },
  "talisman:1231": {
    "kind": "talisman",
    "itemId": 1231,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from Iron 拳头 Alexander 后 completing his 任务线, by defeating him in northwestern 逐渐崩毁的法姆·亚兹拉, and speaking to him.",
    "details": "Obtained from Iron Fist Alexander after completing his questline, by defeating him in northwestern Crumbling Farum Azula, and speaking to him.",
    "sourceTitle": "Shard of Alexander",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shard_of_Alexander",
    "verified": true
  },
  "talisman:1250": {
    "kind": "talisman",
    "itemId": 1250,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from 米莉森, 后 killing her, ，地点： almost any time 后 she equips the Valkyrie's Prosthesis 由...赠予 the player.The first location where she can be killed, and drop the talisman, is the 风车村高台 赐福 ，地点： 风车村多明努拉.",
    "details": "Obtained from Millicent, after killing her, at almost any time after she equips the Valkyrie's Prosthesis given by the player.The first location where she can be killed, and drop the talisman, is the Windmill Heights site of grace at Dominula, Windmill Village.The only way to kill her and not have the talisman drop after giving her the prosthesis (as of update 1.03) is after choosing to assist her in Elphael, Brace of the Haligtree, as part of her questline.",
    "sourceTitle": "Millicent's Prosthesis",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Millicent's_Prosthesis",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：获得途径 from 魔法教授赛尔维斯 in northwestern 湖之利耶尼亚, 后 giving him the Amber Starlight as part of his 任务线.<span style=\"color:red;\">WARNING:</span> this must be done before giving 魔女菈妮 the Fingerslayer Blade as that ends Seluvis's 任务线 prematurely.",
    "details": "Obtained from Preceptor Seluvis in northwestern Liurnia of the Lakes, after giving him the Amber Starlight as part of his questline.<span style=\"color:red;\">WARNING:</span> this must be done before giving Ranni the Witch the Fingerslayer Blade as that ends Seluvis's questline prematurely.",
    "sourceTitle": "Magic Scorpion Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Magic_Scorpion_Charm",
    "verified": true
  },
  "talisman:2010": {
    "kind": "talisman",
    "itemId": 2010,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 威达姆地下墓地 in eastern 格密尔火山. Midway through the dungeon is a semi-transparent fog wall, which can be unlocked by inserting one 石剑钥匙 into the adjacent imp statue. The corpse is inside, behind a coffin.",
    "details": "Obtained from a corpse in Wyndham Catacombs in eastern Mt. Gelmir. Midway through the dungeon is a semi-transparent fog wall, which can be unlocked by inserting one Stonesword Key into the adjacent imp statue. The corpse is inside, behind a coffin.",
    "sourceTitle": "Lightning Scorpion Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lightning_Scorpion_Charm",
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
    "sourceKind": "other",
    "summary": "其他来源：获得途径 from a wooden catwalk, hanging on the outside of a rampart, atop 莱多要塞 ，位于 western 格密尔火山 region.",
    "details": "Obtained from a wooden catwalk, hanging on the outside of a rampart, atop Fort Laiedd in the western Mt. Gelmir region.",
    "sourceTitle": "Fire Scorpion Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Scorpion_Charm",
    "verified": true
  },
  "talisman:2030": {
    "kind": "talisman",
    "itemId": 2030,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 by defeating “吞噬褪色者”安娜塔西亚, who invades the player 附近 the 熏火教堂 in northwestern 盖利德.",
    "details": "Obtained by defeating Anastasia, Tarnished-Eater, who invades the player near the Smoldering Church in northwestern Caelid.",
    "sourceTitle": "Sacred Scorpion Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sacred_Scorpion_Charm",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：湖之利耶尼亚；击败 the 死之鸟 that spawns ，地点： night 附近 a fallen ruin northeast of the 赐福 远眺岛 赐福, located in central 湖之利耶尼亚.",
    "details": "Location: Liurnia of the Lakes；Defeat the Deathbird that spawns at night near a fallen ruin northeast of the 赐福 Scenic Isle site of grace, located in central Liurnia of the Lakes.",
    "sourceTitle": "Red-Feathered Branchsword",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Red-Feathered_Branchsword",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a 宝箱 ，位于 cellar of 卢克斯废墟 in southeastern 格密尔火山, guarded by the “亚人女王”姬丽卡 boss.",
    "details": "Obtained from a chest in the cellar of Lux Ruins in southeastern Mt. Gelmir, guarded by the Demi-Human Queen Gilika boss.",
    "sourceTitle": "Ritual Sword Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ritual_Sword_Talisman",
    "verified": true
  },
  "talisman:2060": {
    "kind": "talisman",
    "itemId": 2060,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a 宝箱 in 湖旁结晶洞窟, in southern 湖之利耶尼亚.The 宝箱 can be 位于 a demi-human campsite 位于 by following the path ，位于 cave without dropping down, past two braziers through a smaller cave ，位于 back.",
    "details": "Obtained from a chest in Lakeside Crystal Cave, in southern Liurnia of the Lakes.The chest can be found in a demi-human campsite found by following the path in the cave without dropping down, past two braziers through a smaller cave in the back.",
    "sourceTitle": "Spear Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spear_Talisman",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 by defeating “叛律者”亨利克斯 in northern 风暴山丘 附近 the coliseum, north of 风暴山丘的破屋.Beware that progressing through the game can prevent this invasion from happening, more specifically by defeating all the major 宁姆格福 bosses (“飞龙”亚基尔, 发狂南瓜头士兵, “恶兆妖鬼”玛尔基特, 提比亚的唤声船, and 大树守卫).",
    "details": "Obtained by defeating Recusant Henricus in northern Stormhill near the coliseum, north of Stormhill Shack.Beware that progressing through the game can prevent this invasion from happening, more specifically by defeating all the major Limgrave bosses (Flying Dragon Agheel, Mad Pumpkin Head, Margit, the Fell Omen, Tibia Mariner, and Tree Sentinel).Joining Henricus's faction, Volcano Manor, will also prevent him from invading anymore.",
    "sourceTitle": "Hammer Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Hammer_Talisman",
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
    "summary": "敌人 / 首领掉落：获得途径 from 留水洞窟 in southern 湖之利耶尼亚, by defeating the 玛莲妮亚的尊腐骑士 boss.",
    "details": "Obtained from Stillwater Cave in southern Liurnia of the Lakes, by defeating the Cleanrot Knight boss.",
    "sourceTitle": "Winged Sword Insignia",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Winged_Sword_Insignia",
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
    "summary": "敌人 / 首领掉落：获得途径 from 米莉森 后 choosing to assist her in defeating her sisters, as part of her 任务线.",
    "details": "Obtained from Millicent after choosing to assist her in defeating her sisters, as part of her questline.",
    "sourceTitle": "Rotten Winged Sword Insignia",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Winged_Sword_Insignia",
    "verified": true
  },
  "talisman:2090": {
    "kind": "talisman",
    "itemId": 2090,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in 火山官邸, ，位于 格密尔火山 region. From the throne room, just before the waygate leading to 谒见之路, head west up the stairs, and unlock the semi-transparent fog wall there, by inserting 2 石剑钥匙s into the adjacent imp statue. Upon reaching the edge of a wooden catwalk, turn immediately right and drop onto a catwalk below. Follow the path out of this room and around it, until you re-enter the room from the opposite side. The corpse is dangling from a wooden catwalk, nearby.",
    "details": "Obtained from a corpse in Volcano Manor, in the Mt. Gelmir region. From the throne room, just before the waygate leading to Audience Pathway, head west up the stairs, and unlock the semi-transparent fog wall there, by inserting 2 Stonesword Keys into the adjacent imp statue. Upon reaching the edge of a wooden catwalk, turn immediately right and drop onto a catwalk below. Follow the path out of this room and around it, until you re-enter the room from the opposite side. The corpse is dangling from a wooden catwalk, nearby.",
    "sourceTitle": "Dagger Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dagger_Talisman",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 a 宝箱 along the bridge over 风暴关卡's entrance. To access it, go to the southwest tower, kill the guards here, and then you can enter the area.",
    "details": "Found in a chest along the bridge over Stormgate's entrance. To access it, go to the southwest tower, kill the guards here, and then you can enter the area.",
    "sourceTitle": "Arrow's Reach Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Arrow's_Reach_Talisman",
    "verified": true
  },
  "talisman:2110": {
    "kind": "talisman",
    "itemId": 2110,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：The Blue Dancer Charm is 通过...获得 defeating the 魔像守卫 in 大道下的洞窟 in northern 宁姆格福.",
    "details": "The Blue Dancer Charm is obtained by defeating the Guardian Golem in Highroad Cave in northern Limgrave.",
    "sourceTitle": "Blue Dancer Charm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue_Dancer_Charm",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 in 摩恩城, in southern 宁姆格福. From 城堡后方, head down the cliff and northwest to the western corner of the castle. Climb a ladder and circle the top of this tower to find the 宝箱.",
    "details": "Obtained from a chest in Castle Morne, in southern Limgrave. From Behind the Castle, head down the cliff and northwest to the western corner of the castle. Climb a ladder and circle the top of this tower to find the chest.",
    "sourceTitle": "Twinblade Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinblade_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 ，位于 cellar of 雾林废墟, eastern 宁姆格福. A 卢恩熊 lies very close to the entrance.",
    "details": "Obtained from a chest in the cellar of Mistwood Ruins, eastern Limgrave. A Runebear lies very close to the entrance.",
    "sourceTitle": "Axe Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Axe_Talisman",
    "verified": true
  },
  "talisman:2140": {
    "kind": "talisman",
    "itemId": 2140,
    "sourceKind": "other",
    "summary": "其他来源：获得途径 from the northeastern-most tip of 风暴山丘 directly west of the 宁姆格福神授塔.",
    "details": "Obtained from the northeastern-most tip of Stormhill directly west of the Divine Tower of Limgrave.",
    "sourceTitle": "Lance Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lance_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱, atop the wooden siege tower, next to 不破大桥, in 盖利德, 附近 红狮子城.",
    "details": "Obtained from a chest, atop the wooden siege tower, next to Impassable Greatbridge, in Caelid, near Redmane Castle.",
    "sourceTitle": "Arrow's Sting Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Arrow's_Sting_Talisman",
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
    "summary": "敌人 / 首领掉落：Lord of 血's Exultation is 通过...获得 defeating the “鲜血祭司”艾斯加, in 罗德尔地下墓地 beneath 王城罗德尔.",
    "details": "Lord of Blood's Exultation is obtained by defeating the Esgar, Priest of Blood, in Leyndell Catacombs beneath Leyndell, Royal Capital.",
    "sourceTitle": "Lord of Blood's Exultation",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lord_of_Blood's_Exultation",
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
    "summary": "敌人 / 首领掉落：腐败眷属's Exultation is 通过...获得 defeating the 腐败眷属 in 沸滚河洞窟 in central 格密尔火山.",
    "details": "Kindred of Rot's Exultation is obtained by defeating the Kindred of Rot in Seethewater Cave in central Mt. Gelmir.",
    "sourceTitle": "Kindred of Rot's Exultation",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Kindred_of_Rot's_Exultation",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in 史东薇尔城, on top of a watchtower. From 城墙塔 赐福, head through the southern door, hang a right, and climb the spiral staircase. Enter the outer hallway, and circle around to the exit that leads to a rooftop. Use the pile of sandbags to climb onto the wall, use it to reach the ledge of the attached tower, and jump over to a nearby tower, whose crown has been destroyed. Drop down into this tower, and then down onto a roof, next to a Warhawk. 头盔 across a small connecting rooftop to the next building over, where a broken pillar lies leaning against a wall. Climb up this pillar, sneak around a ledge, and climb a ladder to reach the corpse.",
    "details": "Obtained from a corpse in Stormveil Castle, on top of a watchtower. From Rampart Tower Site of Grace, head through the southern door, hang a right, and climb the spiral staircase. Enter the outer hallway, and circle around to the exit that leads to a rooftop. Use the pile of sandbags to climb onto the wall, use it to reach the ledge of the attached tower, and jump over to a nearby tower, whose crown has been destroyed. Drop down into this tower, and then down onto a roof, next to a Warhawk. Head across a small connecting rooftop to the next building over, where a broken pillar lies leaning against a wall. Climb up this pillar, sneak around a ledge, and climb a ladder to reach the corpse.",
    "sourceTitle": "Claw Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Claw_Talisman",
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
    "summary": "敌人 / 首领掉落：获得途径 by defeating the 挖石山妖 in 宁姆格福坑道 in central 宁姆格福.",
    "details": "Obtained by defeating the Stonedigger Troll in Limgrave Tunnels in central Limgrave.",
    "sourceTitle": "Roar Medallion",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Roar_Medallion",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 in 史东薇尔城, ，位于 room where the player character gets locked-in with the Banished 剑士. This area is only accessible by using the secret side-entrance, suggested by 门卫葛托克.",
    "details": "Obtained from a chest in Stormveil Castle, in the room where the player character gets locked-in with the Banished Knight. This area is only accessible by using the secret side-entrance, suggested by Gatekeeper Gostoc.",
    "sourceTitle": "Curved Sword Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Curved_Sword_Talisman",
    "verified": true
  },
  "talisman:2210": {
    "kind": "talisman",
    "itemId": 2210,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：获得途径 from Jar Bairn, in 壶村, 后 completing his 任务线, by giving him Alexander's Innards.",
    "details": "Obtained from Jar Bairn, in Jarburg, after completing his questline, by giving him Alexander's Innards.",
    "sourceTitle": "Companion Jar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Companion_Jar",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 ，位于 cellar of 调香师的废墟, in southwestern 格密尔火山.",
    "details": "Obtained from a chest in the cellar of Perfumer's Ruins, in southwestern Mt. Gelmir.",
    "sourceTitle": "Perfumer's Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer's_Talisman",
    "verified": true
  },
  "talisman:3000": {
    "kind": "talisman",
    "itemId": 3000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a large pile of crystals in Raya Lucaria Academy, in central 湖之利耶尼亚. From the room west of the 讨论室, just before the fight with the 拉达冈的红狼, look ，用于 an empty bookshelf on the north side of the room, which is an illusory wall. Dispell it, head into the next room, and climb a ladder. Proceed to the east side of this room, where a painting leans up against a railing, and jump over the railing to fall into another hollow wall. Drop through the hole ，地点： the end of this passageway to reach the room with the crystals.",
    "details": "Obtained from a large pile of crystals in Raya Lucaria Academy, in central Liurnia of the Lakes. From the room west of the Debate Parlor, just before the fight with the Red Wolf of Radagon, look for an empty bookshelf on the north side of the room, which is an illusory wall. Dispell it, head into the next room, and climb a ladder. Proceed to the east side of this room, where a painting leans up against a railing, and jump over the railing to fall into another hollow wall. Drop through the hole at the end of this passageway to reach the room with the crystals.",
    "sourceTitle": "Graven-School Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Graven-School_Talisman",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 atop the 白金魔法师塔, in eastern 化圣雪原.",
    "details": "Obtained from a chest atop the Albinauric Rise, in eastern Consecrated Snowfield.",
    "sourceTitle": "Graven-Mass Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Graven-Mass_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 瑟利亚结晶坑道, in central 盖利德. The corpse can be 位于 off to the right side of the main path, guarded by two Pests.",
    "details": "Obtained from a corpse in Sellia Crystal Tunnel, in central Caelid. The corpse can be found off to the right side of the main path, guarded by two Pests.",
    "sourceTitle": "Faithful's Canvas Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Faithful's_Canvas_Talisman",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from the corpse of Gowry 后 completing 米莉森's 任务线, either by assisting her and then killing him, or killing her, and then visiting him to find him already dead.",
    "details": "Obtained from the corpse of Gowry after completing Millicent's questline, either by assisting her and then killing him, or killing her, and then visiting him to find him already dead.",
    "sourceTitle": "Flock's Canvas Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flock's_Canvas_Talisman",
    "verified": true
  },
  "talisman:3060": {
    "kind": "talisman",
    "itemId": 3060,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：地点：逐渐崩毁的法姆·亚兹拉；The Old Lord's Talisman is 从...获得 a 宝箱 in 逐渐崩毁的法姆·亚兹拉, guarded by an invasion by “叛律者”贝纳尔 and three Azula Beastmen.",
    "details": "Location: Crumbling Farum Azula；The Old Lord's Talisman is obtained from a chest in Crumbling Farum Azula, guarded by an invasion by Recusant Bernahl and three Azula Beastmen.From 赐福 Beside the Great Bridge, climb up to the bridge, and head north, down some stairs and eventually a ladder, to reach a long walkway, where the invasion occurs. The chest is in the tower at the end of this walkway.",
    "sourceTitle": "Old Lord's Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Old_Lord's_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 in Raya Lucaria Academy in central 湖之利耶尼亚. From 讨论室, head out into the courtyard, and right around the building. 跳跃 over a fence, climb a ladder, and jump through a broken window to reach an upper landing, where the 宝箱 resides.",
    "details": "Obtained from a chest in Raya Lucaria Academy in central Liurnia of the Lakes. From Debate Parlor, head out into the courtyard, and right around the building. Jump over a fence, climb a ladder, and jump through a broken window to reach an upper landing, where the chest resides.",
    "sourceTitle": "Radagon Icon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radagon_Icon",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a 宝箱 ，位于 cellar of Stargazer's Ruins in central 巨人山顶. The cellar is locked by a seal, which can be dispelled by summoning the Spirit Jellyfish 骨灰 附近 the NPC jellyfish that speaks, 附近 the center of the ruins. Note that the NPC jellyfish does respawn, if killed.",
    "details": "Obtained from a chest in the cellar of Stargazer's Ruins in central Mountaintops of the Giants. The cellar is locked by a seal, which can be dispelled by summoning the Spirit Jellyfish Ashes near the NPC jellyfish that speaks, near the center of the ruins. Note that the NPC jellyfish does respawn, if killed.",
    "sourceTitle": "Primal Glintstone Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Primal_Glintstone_Blade",
    "verified": true
  },
  "talisman:3090": {
    "kind": "talisman",
    "itemId": 3090,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from the 黄金一族的封印监牢 in southern 亚坛高原, by defeating “接肢”葛孚亚.",
    "details": "Obtained from the Golden Lineage Evergaol in southern Altus Plateau, by defeating Godefroy the Grafted.",
    "sourceTitle": "Godfrey Icon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godfrey_Icon",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse that lies on the ground, 附近 野兽神殿, in northern 桂奥尔龙墓. Equipping the 长tail Cat Talisman here, or using Soft Cotton is very helpful, as there are several parkour drops coming up that will deal unavoidable damage, and there are Bat enemies ，位于 area. From the front door of the sanctum, head southwest around the side of the sanctum, until reaching a cliff that overlooks a large tree root, close enough to drop to. Drop from here to the branch, to another branch, to a domed rooftop, and then to the first of 3 ring structures, jutting out from the cliffside. 跳跃 up to the ledge surrounding the nearby pillar, walk across the buttress to the next pillar, drop to the lower ledge, jump to another lower ledge on the first pillar, and drop down to the second ring. 跳跃 to the next-lower ledge on the outer pillar, walk across the buttress, and jump to a ledge that sticks out from the wall below. ，地点： this point, it is recommended to mount Torrent, as the final jump is extremely difficult to make on foot, while almost trivial to make with Torrent's double-jump ability. The third ring below is just barely beyond the instant-death threshold ，用于 falling, so instead, aim ，用于 the ledge on that outer pillar, just a few feet above the ring. 后 finally reaching the third ring, head northeast along it to find the corpse.",
    "details": "Obtained from a corpse that lies on the ground, near Bestial Sanctum, in northern Greyoll's Dragonbarrow. Equipping the Longtail Cat Talisman here, or using Soft Cotton is very helpful, as there are several parkour drops coming up that will deal unavoidable damage, and there are Bat enemies in the area. From the front door of the sanctum, head southwest around the side of the sanctum, until reaching a cliff that overlooks a large tree root, close enough to drop to. Drop from here to the branch, to another branch, to a domed rooftop, and then to the first of 3 ring structures, jutting out from the cliffside. Jump up to the ledge surrounding the nearby pillar, walk across the buttress to the next pillar, drop to the lower ledge, jump to another lower ledge on the first pillar, and drop down to the second ring. Jump to the next-lower ledge on the outer pillar, walk across the buttress, and jump to a ledge that sticks out from the wall below. At this point, it is recommended to mount Torrent, as the final jump is extremely difficult to make on foot, while almost trivial to make with Torrent's double-jump ability. The third ring below is just barely beyond the instant-death threshold for falling, so instead, aim for the ledge on that outer pillar, just a few feet above the ring. After finally reaching the third ring, head northeast along it to find the corpse.",
    "sourceTitle": "Dragoncrest Shield Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragoncrest_Shield_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from the 尊贵者的英雄墓地 in central 亚坛高原. ，位于 room with the giant falling blade traps, jump on top of the first one to ride it upwards, and jump to the ledge on the left. Follow this path to reach a room that has a pair of semi-transparent fog walls, locked by an imp statue that requires one 石剑钥匙 to open. The corpse can be 位于 past this wall.",
    "details": "Obtained from the Sainted Hero's Grave in central Altus Plateau. In the room with the giant falling blade traps, jump on top of the first one to ride it upwards, and jump to the ledge on the left. Follow this path to reach a room that has a pair of semi-transparent fog walls, locked by an imp statue that requires one Stonesword Key to open. The corpse can be found past this wall.",
    "sourceTitle": "Dragoncrest Shield Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragoncrest_Shield_Talisman_%2B1",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse, in northern 逐渐崩毁的法姆·亚兹拉. From 龙教堂祭坛, head north, down a drop off of a broken floor, down a staircase, through a window, down and across a floating chunk of floor, and right through a doorway to reach a long chain of floating debris. Halfway across this debris, 后 a somewhat large drop, turn around to see a hidden floating chunk of rubble, holding the corpse.Starting from 龙教堂（升降机前）, if unlocked, turn around to go down the elevator, and arrive 附近 the beginning of the long chain of debris.",
    "details": "Obtained from a corpse, in northern Crumbling Farum Azula. From Dragon Temple Altar, head north, down a drop off of a broken floor, down a staircase, through a window, down and across a floating chunk of floor, and right through a doorway to reach a long chain of floating debris. Halfway across this debris, after a somewhat large drop, turn around to see a hidden floating chunk of rubble, holding the corpse.Starting from Dragon Temple Lift, if unlocked, turn around to go down the elevator, and arrive near the beginning of the long chain of debris.",
    "sourceTitle": "Dragoncrest Shield Talisman +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragoncrest_Shield_Talisman_%2B2",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：“圣树分枝”艾布雷菲尔；获得途径 from a 宝箱 in “圣树分枝”艾布雷菲尔. From 排水通道, head east and travel along tree roots, branches, and buttresses to reach the roof of the nearby church, which is full of Pests. Drop through a hole ，位于 roof, and head southwest along the rafters to reach an upper platform, with the 宝箱.",
    "details": "Location: Elphael, Brace of the Haligtree；Obtained from a chest in Elphael, Brace of the Haligtree. From Drainage Channel, head east and travel along tree roots, branches, and buttresses to reach the roof of the nearby church, which is full of Pests. Drop through a hole in the roof, and head southwest along the rafters to reach an upper platform, with the chest.",
    "sourceTitle": "Dragoncrest Greatshield Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragoncrest_Greatshield_Talisman",
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
    "summary": "敌人 / 首领掉落：获得途径 by defeating the 卢恩熊 ，位于 垂穴洞窟 in northern 啜泣半岛, southern 宁姆格福.",
    "details": "Obtained by defeating the Runebear in the Earthbore Cave in northern Weeping Peninsula, southern Limgrave.",
    "sourceTitle": "Spelldrake Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spelldrake_Talisman",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 in 魔法镇瑟利亚 in northern 盖利德. The 宝箱 can be 位于 a small alcove ，位于 northwest section of town, which is locked behind a magical seal. This seal can be dispelled by lighting the flame ，位于 southwest candle tower, within the town.",
    "details": "Obtained from a chest in Sellia, Town of Sorcery in northern Caelid. The chest can be found in a small alcove in the northwest section of town, which is locked behind a magical seal. This seal can be dispelled by lighting the flame in the southwest candle tower, within the town.",
    "sourceTitle": "Spelldrake Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spelldrake_Talisman_%2B1",
    "verified": true
  },
  "talisman:4012": {
    "kind": "talisman",
    "itemId": 4012,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse ，位于 通往圣树的密道. From the large circular platform ，位于 large central room, drop straight down from the broken railing to land on an invisible platform. Walk directly north, and then turn directly west, when aligned with an enemy that can be seen ，位于 distance, standing on the invisible platform. ，地点： the end of the invisible platform, jump down to the ledge below, on the left, and through one of the open windows. Proceed south to the room with the boss door, and turn right to reach an elevator. The corpse lies in an alcove ，地点： the top of this elevator.",
    "details": "Obtained from a corpse in the Hidden Path to the Haligtree. From the large circular platform in the large central room, drop straight down from the broken railing to land on an invisible platform. Walk directly north, and then turn directly west, when aligned with an enemy that can be seen in the distance, standing on the invisible platform. At the end of the invisible platform, jump down to the ledge below, on the left, and through one of the open windows. Proceed south to the room with the boss door, and turn right to reach an elevator. The corpse lies in an alcove at the top of this elevator.",
    "sourceTitle": "Spelldrake Talisman +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spelldrake_Talisman_%2B2",
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
    "summary": "敌人 / 首领掉落：获得途径 from the 近林洞窟 in northwestern 宁姆格福, by defeating the 法姆·亚兹拉的兽人 boss.",
    "details": "Obtained from the Groveside Cave in northwestern Limgrave, by defeating the Beastman of Farum Azula boss.",
    "sourceTitle": "Flamedrake Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flamedrake_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse, that sits in front of a pillar, in eastern 王城罗德尔. The corpse lies on the ground along the path eastward, out of the capital, towards the 洛德大升降机.",
    "details": "Obtained from a corpse, that sits in front of a pillar, in eastern Leyndell, Royal Capital. The corpse lies on the ground along the path eastward, out of the capital, towards the Grand Lift of Rold.",
    "sourceTitle": "Flamedrake Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flamedrake_Talisman_%2B1",
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
    "summary": "敌人 / 首领掉落：获得途径 from the 龙墓洞窟 in eastern 桂奥尔龙墓, by defeating the 法姆·亚兹拉的兽人 bosses.",
    "details": "Obtained from the Dragonbarrow Cave in eastern Greyoll's Dragonbarrow, by defeating the Beastman of Farum Azula bosses.",
    "sourceTitle": "Flamedrake Talisman +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flamedrake_Talisman_%2B2",
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
    "summary": "地图拾取 / 宝箱：拾取：史东薇尔城；获得途径 from a corpse just before the bridge leading eastward, to the 宁姆格福神授塔.",
    "details": "Loot: Stormveil Castle；Obtained from a corpse just before the bridge leading eastward, to the Divine Tower of Limgrave.",
    "sourceTitle": "Boltdrake Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Boltdrake_Talisman",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：亚坛高原；Acquired from a corpse within a wooden shed guarded by dogs in 旧亚坛坑道.",
    "details": "Loot: Altus Plateau；Acquired from a corpse within a wooden shed guarded by dogs in Old Altus Tunnel.",
    "sourceTitle": "Boltdrake Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Boltdrake_Talisman_%2B1",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：逐渐崩毁的法姆·亚兹拉；获得途径 from a corpse 附近 the 龙教堂（屋顶） 赐福. From the Rooftop 赐福 proceed southeast to the arena of an Ancient Dragon. Proceed east to the edge of the arena, where you can drop to a series of platforms, leading to an isolated building. Proceed through the building, up a ladder, up an elevator, past a 熔炉骑士, and up one more ladder, to find the corpse, hanging out of a window.",
    "details": "Loot: Crumbling Farum Azula；Obtained from a corpse near the Dragon Temple Rooftop Site of Grace. From the Rooftop Grace proceed southeast to the arena of an Ancient Dragon. Proceed east to the edge of the arena, where you can drop to a series of platforms, leading to an isolated building. Proceed through the building, up a ladder, up an elevator, past a Crucible Knight, and up one more ladder, to find the corpse, hanging out of a window.",
    "sourceTitle": "Boltdrake Talisman +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Boltdrake_Talisman_%2B2",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in 漂流墓地, in western 宁姆格福. This corpse can be seen from the beginning of the game, hanging from a cliff behind where the player wakes up 后 dying ，地点： the 候王礼拜堂, but cannot be accessed from inside the cave. Instead, start from 傍海古遗迹 and head southeast along the cliff to a spot where several cliffs and broken pillars lie below. These, along with a Spiritspring can be used to drop down to the beach below. A hole ，位于 cliff wall here leads to the corpse.",
    "details": "Obtained from a corpse in Stranded Graveyard, in western Limgrave. This corpse can be seen from the beginning of the game, hanging from a cliff behind where the player wakes up after dying at the Chapel of Anticipation, but cannot be accessed from inside the cave. Instead, start from Seaside Ruins and head southeast along the cliff to a spot where several cliffs and broken pillars lie below. These, along with a Spiritspring can be used to drop down to the beach below. A hole in the cliff wall here leads to the corpse.",
    "sourceTitle": "Haligdrake Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligdrake_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 罗德尔地下墓地, in central 王城罗德尔. From the 赐福, head up the stairs to the southeast, hang a right, and ride the elevator up to reach a room with three phantom enemies. Dispel the illusory walls next to the stairs, and another illusory wall underneath the stairs to find a 唤灵蜗牛 guarding the corpse.",
    "details": "Obtained from a corpse in Leyndell Catacombs, in central Leyndell, Royal Capital. From the site of grace, head up the stairs to the southeast, hang a right, and ride the elevator up to reach a room with three phantom enemies. Dispel the illusory walls next to the stairs, and another illusory wall underneath the stairs to find a Spiritcaller Snail guarding the corpse.",
    "sourceTitle": "Haligdrake Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligdrake_Talisman_%2B1",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in southwestern 蒙格温王朝. The corpse lies in a graveyard next to the blood lake, below 蒙格温王朝庙.",
    "details": "Obtained from a corpse in southwestern Mohgwyn Palace. The corpse lies in a graveyard next to the blood lake, below Mohgwyn Dynasty Mausoleum.",
    "sourceTitle": "Haligdrake Talisman +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligdrake_Talisman_%2B2",
    "verified": true
  },
  "talisman:4050": {
    "kind": "talisman",
    "itemId": 4050,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse on the north end of the western isolated platform in 逐渐崩毁的法姆·亚兹拉. This area is only accessible via the waygate ，地点： the first of The Four Belfrys in western 湖之利耶尼亚, next to a message that reads \"Crumbling Lands\". 后 traveling through the waygate, drop down several platforms to reach a pair of Bestmen and drop from the northern edge of this platform to find the corpse.",
    "details": "Obtained from a corpse on the north end of the western isolated platform in Crumbling Farum Azula. This area is only accessible via the waygate at the first of The Four Belfrys in western Liurnia of the Lakes, next to a message that reads \"Crumbling Lands\". After traveling through the waygate, drop down several platforms to reach a pair of Bestmen and drop from the northern edge of this platform to find the corpse.",
    "sourceTitle": "Pearldrake Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pearldrake_Talisman",
    "verified": true
  },
  "talisman:4051": {
    "kind": "talisman",
    "itemId": 4051,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 ，位于 cellar of 威达姆废墟 in central 格密尔火山. The cellar is locked behind a semi-transparent fog wall, which can be unlocked by inserting one 石剑钥匙 into the adjacent imp statue.",
    "details": "Obtained from a chest in the cellar of Wyndham Ruins in central Mt. Gelmir. The cellar is locked behind a semi-transparent fog wall, which can be unlocked by inserting one Stonesword Key into the adjacent imp statue.",
    "sourceTitle": "Pearldrake Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pearldrake_Talisman_%2B1",
    "verified": true
  },
  "talisman:4052": {
    "kind": "talisman",
    "itemId": 4052,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in central 米凯拉的圣树. From 圣树镇, head northwest to a ladder, climb it, and jump backwards across a gap, to a platform leading to the corpse, which lies ，地点： the base of a statue, guarded by a 混种战士.",
    "details": "Obtained from a corpse in central Miquella's Haligtree. From Haligtree Town, head northwest to a ladder, climb it, and jump backwards across a gap, to a platform leading to the corpse, which lies at the base of a statue, guarded by a Misbegotten Warrior.",
    "sourceTitle": "Pearldrake Talisman +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pearldrake_Talisman_%2B2",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 罗德尔地下墓地, ，位于 王城罗德尔 region. The corpse is guarded by an Omen, which can be reached by lowering a fire-breathing pillar, and riding it back upward to reach the upper-level of the room.",
    "details": "Obtained from a corpse in Leyndell Catacombs, in the Leyndell, Royal Capital region. The corpse is guarded by an Omen, which can be reached by lowering a fire-breathing pillar, and riding it back upward to reach the upper-level of the room.",
    "sourceTitle": "Crucible Scale Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Scale_Talisman",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from a corpse in 亚雷萨英雄墓地 ，位于 王城罗德尔 region. Make your way to the area where two chariots ride side-by-side, up and down a slope. ，地点： the bottom of this slope is a corpse, hanging off of a ledge above a pit. Drop into the pit from where this corpse lies to land on a beam, and continue dropping down into this pit, until landing on the top of a thin stone archway. Walk to the end of this archway and climb a ladder to reach another ramp, guarded by a single chariot. While it is possible to reach the bottom of this ramp without dying, it is extremely difficult, as it involves either taking a hit from the chariot without dying, or using a movement ability, like 血hound Step, along with excellent timing. The far easier thing to do is to proceed up the ramp until reaching a moving, fire-breathing pillar, which can be raised by hitting it. 后 raising the pillar, die or teleport to return to the ramp with two chariots. The raised pillar will now be shining a chariot-spawning circle of light onto the middle of this ramp, which will cause a chariot to spawn that collides with the others, destroying them all. The door ，地点： the bottom of the ramp leading to the corpse can now be safely reached.",
    "details": "Obtained from a corpse in Auriza Hero's Grave in the Leyndell, Royal Capital region. Make your way to the area where two chariots ride side-by-side, up and down a slope. At the bottom of this slope is a corpse, hanging off of a ledge above a pit. Drop into the pit from where this corpse lies to land on a beam, and continue dropping down into this pit, until landing on the top of a thin stone archway. Walk to the end of this archway and climb a ladder to reach another ramp, guarded by a single chariot. While it is possible to reach the bottom of this ramp without dying, it is extremely difficult, as it involves either taking a hit from the chariot without dying, or using a movement ability, like Bloodhound Step, along with excellent timing. The far easier thing to do is to proceed up the ramp until reaching a moving, fire-breathing pillar, which can be raised by hitting it. After raising the pillar, die or teleport to return to the ramp with two chariots. The raised pillar will now be shining a chariot-spawning circle of light onto the middle of this ramp, which will cause a chariot to spawn that collides with the others, destroying them all. The door at the bottom of the ramp leading to the corpse can now be safely reached.",
    "sourceTitle": "Crucible Feather Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Feather_Talisman",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：风暴山丘；The Blue-Feathered Branchsword is 通过...获得 defeating the 死之鸟 that appears east of 习战者的破屋 in 风暴山丘. The Bird only appears ，地点： night, descending from the sky when the player approaches a ruin covered in Ruin Fragments and Sanctuary Stones that fell from 逐渐崩毁的法姆·亚兹拉.",
    "details": "Location: Stormhill；The Blue-Feathered Branchsword is obtained by defeating the Deathbird that appears east of Warmaster's Shack in Stormhill. The Bird only appears at night, descending from the sky when the player approaches a ruin covered in Ruin Fragments and Sanctuary Stones that fell from Crumbling Farum Azula.",
    "sourceTitle": "Blue-Feathered Branchsword",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blue-Feathered_Branchsword",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 王城罗德尔, lying in front of the coliseum ，位于 south end of the city.",
    "details": "Obtained from a corpse in Leyndell, Royal Capital, lying in front of the coliseum in the south end of the city.",
    "sourceTitle": "Ritual Shield Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ritual_Shield_Talisman",
    "verified": true
  },
  "talisman:4100": {
    "kind": "talisman",
    "itemId": 4100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱, within a black carriage, east of 近黄金树的山丘 赐福, in western 亚坛高原.The location is more precisely east southeast of 卢克斯废墟 and almost straight north from the 迪可达斯大升降机.",
    "details": "Obtained from a chest, within a black carriage, east of Erdtree-Gazing Hill Site of Grace, in western Altus Plateau.The location is more precisely east southeast of Lux Ruins and almost straight north from the Grand Lift of Dectus.",
    "sourceTitle": "Greatshield Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greatshield_Talisman",
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
    "summary": "敌人 / 首领掉落：获得途径 by killing the 恶兆猎人 boss in 白金村, in southern 湖之利耶尼亚.",
    "details": "Obtained by killing the Omenkiller boss in Village of the Albinaurics, in southern Liurnia of the Lakes.",
    "sourceTitle": "Crucible Knot Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crucible_Knot_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse, in 尊贵者的英雄墓地, in central 亚坛高原. This corpse lies behind a semi-transparent fog wall, 附近 the beginning of the dungeon, which can be unlocked by inserting one 石剑钥匙 into the adjacent imp statue.",
    "details": "Obtained from a corpse, in Sainted Hero's Grave, in central Altus Plateau. This corpse lies behind a semi-transparent fog wall, near the beginning of the dungeon, which can be unlocked by inserting one Stonesword Key into the adjacent imp statue.",
    "sourceTitle": "Crimson Seed Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Seed_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in 卡利亚书斋, in easter 湖之利耶尼亚, without the Carian Inverted Statue placed on the altar. The corpse can be 位于 on the upper-most level of rafters ，位于 tower, which you can climb to with ladders.",
    "details": "Obtained from a corpse in Carian Study Hall, in easter Liurnia of the Lakes, without the Carian Inverted Statue placed on the altar. The corpse can be found on the upper-most level of rafters in the tower, which you can climb to with ladders.",
    "sourceTitle": "Cerulean Seed Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cerulean_Seed_Talisman",
    "verified": true
  },
  "talisman:5020": {
    "kind": "talisman",
    "itemId": 5020,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：王城罗德尔；The Blessed Dew Talisman is 从...获得 a 宝箱 west of the 神授桥 in 王城罗德尔. This area can be reached via an elevator ，位于 courtyard outside the Fortified Manor, or by using the sending gate ，地点： the 归还塔, ，位于 啜泣半岛.",
    "details": "Location: Leyndell, Royal Capital；The Blessed Dew Talisman is obtained from a chest west of the Divine Bridge in Leyndell, Royal Capital. This area can be reached via an elevator in the courtyard outside the Fortified Manor, or by using the sending gate at the Tower of Return, in the Weeping Peninsula.",
    "sourceTitle": "Blessed Dew Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blessed_Dew_Talisman",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 from Tanith in 火山官邸 in central 格密尔火山 后 completing the third assassination quest, by killing Juno Hoslow in northern 巨人山顶, 附近 the 离群独行者的破屋.",
    "details": "Obtained from Tanith in Volcano Manor in central Mt. Gelmir after completing the third assassination quest, by killing Juno Hoslow in northern Mountaintops of the Giants, near the Shack of the Lofty.",
    "sourceTitle": "Taker's Cameo",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Taker's_Cameo",
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
    "summary": "敌人 / 首领掉落：获得途径 from the Spiritcaller's Cave in northeastern 巨人山顶, by defeating all of the bosses ，地点： the end of the dungeon.",
    "details": "Obtained from the Spiritcaller's Cave in northeastern Mountaintops of the Giants, by defeating all of the bosses at the end of the dungeon.",
    "sourceTitle": "Godskin Swaddling Cloth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godskin_Swaddling_Cloth",
    "verified": true
  },
  "talisman:5050": {
    "kind": "talisman",
    "itemId": 5050,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 by defeating the 黑刀刺客 in 死亡降临的地下墓地, in northern 宁姆格福",
    "details": "Obtained by defeating the Black Knife Assassin in Deathtouched Catacombs, in northern Limgrave",
    "sourceTitle": "Assassin's Crimson Dagger",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Assassin's_Crimson_Dagger",
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
    "summary": "敌人 / 首领掉落：获得途径 from defeating the 黑刀刺客 in 黑刀地下墓地 in northeast 湖之利耶尼亚",
    "details": "Obtained from defeating the Black Knife Assassin in Black Knife Catacombs in northeast Liurnia of the Lakes",
    "sourceTitle": "Assassin's Cerulean Dagger",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Assassin's_Cerulean_Dagger",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 by killing “黄昏将尽”莱利, in 亚坛高原, 后 invading their world to 完成 the second 火山官邸 assassination.",
    "details": "Obtained by killing Rileigh the Idle, in Altus Plateau, after invading their world to complete the second Volcano Manor assassination.",
    "sourceTitle": "Crepus's Vial",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crepus's_Vial",
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
    "summary": "敌人 / 首领掉落：获得途径 by defeating the 黑刀刺客 in 贤者的洞窟 in western 亚坛高原",
    "details": "Obtained by defeating the Black Knife Assassin in Sage's Cave in western Altus Plateau",
    "sourceTitle": "Concealing Veil",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Concealing_Veil",
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
    "summary": "商店购买：向 军师伊吉, in western 湖之利耶尼亚. Becomes available 后 killing “猎犬骑士”达瑞威尔 ，位于 啜泣的封印监牢, ，用于 Blaidd.",
    "details": "Purchased from War Counselor Iji, in western Liurnia of the Lakes. Becomes available after killing Bloodhound Knight Darriwil in the Weeping Evergaol, for Blaidd.",
    "sourceTitle": "Carian Filigreed Crest",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Filigreed_Crest",
    "verified": true
  },
  "talisman:6040": {
    "kind": "talisman",
    "itemId": 6040,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a corpse in Raya Lucaria Academy, in central 湖之利耶尼亚. From School House Classroom, head back outside and ride the lift down to the bottom (jump off the lift to the platform, 附近 the bottom, because falling off the lift, even ，地点： its lowest point, is a lethal fall). The corpse can be 位于 within the Iron Virgin's fight arena, ，地点： the bottom of this area.",
    "details": "Obtained from a corpse in Raya Lucaria Academy, in central Liurnia of the Lakes. From School House Classroom, head back outside and ride the lift down to the bottom (jump off the lift to the platform, near the bottom, because falling off the lift, even at its lowest point, is a lethal fall). The corpse can be found within the Iron Virgin's fight arena, at the bottom of this area.",
    "sourceTitle": "Longtail Cat Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Longtail_Cat_Talisman",
    "verified": true
  },
  "talisman:6050": {
    "kind": "talisman",
    "itemId": 6050,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：获得途径 from a corpse in 癫火村, in northeastern 湖之利耶尼亚. The corpse is 位于 on the steps of a building.Can be chosen as a starting gift when creating a new character.",
    "details": "Obtained from a corpse in Frenzied Flame Village, in northeastern Liurnia of the Lakes. The corpse is found on the steps of a building.Can be chosen as a starting gift when creating a new character.",
    "sourceTitle": "Shabriri's Woe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shabriri's_Woe",
    "verified": true
  },
  "talisman:6060": {
    "kind": "talisman",
    "itemId": 6060,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Quest Item: 火山官邸；获得途径 from Rya towards the end of her 任务线, 后 she realizes the truth of her origin and requests the player to kill her.",
    "details": "Quest Item: Volcano Manor；Obtained from Rya towards the end of her questline, after she realizes the truth of her origin and requests the player to kill her.She will drop it if she is killed.It can also be found lying on the floor after Rya leaves the room:；Either after giving her the Tonic of Forgetfulness (received from Tanith after completing the Volcano Manor Assassination questline).Or by not listening to her request, defeating Rykard, Lord of Blasphemy, and returning to the room, where it can be found alongside a letter written by Rya to the Tarnished.",
    "sourceTitle": "Daedicar's Woe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Daedicar's_Woe",
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
    "summary": "商店购买：Purchased ，用于 5,000 卢恩 from 帕奇, in 蒙流洞窟 in northern 宁姆格福, then later in 火山官邸 in central 格密尔火山.Purchased ，用于 3,000 卢恩 each (up to 3) from the 隐居商人 in southwestern 啜泣半岛, in southwestern 宁姆格福.",
    "details": "Purchased for 5,000 runes from Patches, in Murkwater Cave in northern Limgrave, then later in Volcano Manor in central Mt. Gelmir.Purchased for 3,000 runes each (up to 3) from the Isolated Merchant in southwestern Weeping Peninsula, in southwestern Limgrave.Obtained from a corpse in eastern Limgrave, found lying in front of a large gravestone, on a cliff west of Mistwood Ruins.Obtained from Edgar upon first speaking to him in Castle Morne, in southeastern Limgrave.Obtained from a corpse in southwestern Liurnia of the Lakes found lying on a stone ledge that juts out from a cliff, below the Malefactor's Evergaol.Obtained from a chest in central Altus Plateau, found within an enemy camp northwest of Altus Highway Junction.Obtained from Fia in the Roundtable Hold after speaking to her about Rogier.Obtained by killing Lesser Wormface enemies in central Altus Plateau, around the Minor Erdtree and in southern Crumbling Farum Azula, as a rare (2.5%) drop.",
    "sourceTitle": "Sacrificial Twig",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sacrificial_Twig",
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
    "summary": "商店购买：向 the 孪生老妪 ，地点： the 圆桌厅堂.",
    "details": "Purchased from the Twin Maiden Husks at the Roundtable Hold.",
    "sourceTitle": "Furled Finger's Trick-Mirror",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Furled_Finger's_Trick-Mirror",
    "verified": true
  },
  "talisman:6090": {
    "kind": "talisman",
    "itemId": 6090,
    "sourceKind": "shop",
    "summary": "商店购买：向 the 孪生老妪 ，地点： the 圆桌厅堂.",
    "details": "Purchased from the Twin Maiden Husks at the Roundtable Hold.",
    "sourceTitle": "Host's Trick-Mirror",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Host's_Trick-Mirror",
    "verified": true
  },
  "talisman:6110": {
    "kind": "talisman",
    "itemId": 6110,
    "sourceKind": "shop",
    "summary": "商店购买：Trade the Remembrance of the Regal Ancestor, gained by defeating 祖灵之王, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Regal Ancestor, gained by defeating Regal Ancestor Spirit, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Ancestral Spirit's Horn",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ancestral_Spirit's_Horn",
    "verified": true
  },
  "talisman:7000": {
    "kind": "talisman",
    "itemId": 7000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：雾谷地下墓地；获得途径 as a reward upon defeating the 死骑士.",
    "details": "Fog Rift Catacombs；Obtained as a reward upon defeating the Death Knight.",
    "sourceTitle": "Crimson Amber Medallion +3",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Amber_Medallion_%2B3",
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
    "summary": "敌人 / 首领掉落：获得途径 as a reward 后 defeating the 死骑士 in 蝎河地下墓地.",
    "details": "Obtained as a reward after defeating the Death Knight in Scorpion River Catacombs.",
    "sourceTitle": "Cerulean Amber Medallion +3",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cerulean_Amber_Medallion_%2B3",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：It can be 位于 驱暗地下墓地, right 后 the first canon imp. 跳跃 over on the ledge to the right and then drop down to that small archway under it.",
    "details": "It can be found in Darklight Catacombs, right after the first canon imp. Jump over on the ledge to the right and then drop down to that small archway under it.",
    "sourceTitle": "Viridian Amber Medallion +3",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Viridian_Amber_Medallion_%2B3",
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
    "summary": "地图拾取 / 宝箱：It can be 位于 inside a cave beneath a waterfall guarded by enemies just east of 河尾洞窟.",
    "details": "It can be found inside a cave beneath a waterfall guarded by enemies just east of Rivermouth Cave.",
    "sourceTitle": "Two-Headed Turtle Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Two-Headed_Turtle_Talisman",
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
    "summary": "地图拾取 / 宝箱：Stalwart Horn Charm +2 is 位于 ，地点： the 波尼监牢. 跳跃 down into a hole and then climb a ladder to the east 后 passing rats. The talisman is located in a room with jar innards.",
    "details": "Stalwart Horn Charm +2 is found at the Bonny Gaol. Jump down into a hole and then climb a ladder to the east after passing rats. The talisman is located in a room with jar innards.",
    "sourceTitle": "Stalwart Horn Charm +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Stalwart_Horn_Charm_%2B2",
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
    "summary": "敌人 / 首领掉落：Immunizing Horn Charm +2 is received upon defeating the 腐烂树灵 ，位于 sewer swamp of “塔之镇”贝瑞特. The Well Depths Key is required to access this area.",
    "details": "Immunizing Horn Charm +2 is received upon defeating the Ulcerated Tree Spirit in the sewer swamp of Belurat, Tower Settlement. The Well Depths Key is required to access this area.",
    "sourceTitle": "Immunizing Horn Charm +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Immunizing_Horn_Charm_%2B2",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Clarifying Horn Charm +2 is 位于 the 喟叹监牢. Drop down into a rat-infested area and take the straight path forward. The talisman is located ，位于 next area on a corpse along the right side.",
    "details": "Clarifying Horn Charm +2 is found in the Lamenter's Gaol. Drop down into a rat-infested area and take the straight path forward. The talisman is located in the next area on a corpse along the right side.",
    "sourceTitle": "Clarifying Horn Charm +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Clarifying_Horn_Charm_%2B2",
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
    "sourceKind": "other",
    "summary": "其他来源：Mottled Necklace +2 is ，地点： the 劳弗古遗迹. 后 unlocking the spiritspring, use it to reach a previously inaccessible area. The talisman is looted ，地点： the top of a staircase.",
    "details": "Mottled Necklace +2 is at the Ancient Ruins of Rauh. After unlocking the spiritspring, use it to reach a previously inaccessible area. The talisman is looted at the top of a staircase.",
    "sourceTitle": "Mottled Necklace +2",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mottled_Necklace_%2B2",
    "verified": true
  },
  "talisman:7090": {
    "kind": "talisman",
    "itemId": 7090,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：恩希斯城；It can be looted from a corpse 附近 the 城的前方 赐福 附近 恩希斯城. From the 城的前方 赐福, If you go directly north you can drop off of the cliffside and then follow the path east which will lead you to the storeroom where the talisman is located.",
    "details": "Location: Castle Ensis；It can be looted from a corpse near the Castle Front site of Grace near Castle Ensis. From the Castle Front site of Grace, If you go directly north you can drop off of the cliffside and then follow the path east which will lead you to the storeroom where the talisman is located.",
    "sourceTitle": "Spelldrake Talisman +3",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spelldrake_Talisman_%2B3",
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
    "summary": "地图拾取 / 宝箱：It can be 位于 ，地点： the 惩罚要塞 inside a 宝箱. Entering through the front gate, go down the staircase ，位于 back right corner. Continue through the doorway on the left side of the hallway and follow this path until you see two soldiers standing in front of a body. Climb over the cages to their left and it will lead you to the 宝箱 that contains the talisman.",
    "details": "It can be found at the Fort of Reprimand inside a chest. Entering through the front gate, go down the staircase in the back right corner. Continue through the doorway on the left side of the hallway and follow this path until you see two soldiers standing in front of a body. Climb over the cages to their left and it will lead you to the chest that contains the talisman.",
    "sourceTitle": "Flamedrake Talisman +3",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flamedrake_Talisman_%2B3",
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
    "summary": "地图拾取 / 宝箱：It can be 位于 ，地点： 幽影城. From the Storehouse: First Floor 赐福, take the stairs up to the second floor and find a dead-end with several shade protectors. 跳跃 over the railing to reach a room with the talisman, then use the lever to move the bookcase and re-emerge 附近 the 赐福.Alternatively, From 保藏库（内区） 赐福, immediately turn around and head east through the doorway, shortly 后 passing through the doorway, look to down to your left and there should be a large rectangular table that you can safely jump down to. The talisman should be right behind you on the floor next to that table.",
    "details": "It can be found at Shadow Keep. From the Storehouse: First Floor site of grace, take the stairs up to the second floor and find a dead-end with several shade protectors. Jump over the railing to reach a room with the talisman, then use the lever to move the bookcase and re-emerge near the site of grace.Alternatively, From Storehouse, Back Section site of grace, immediately turn around and head east through the doorway, shortly after passing through the doorway, look to down to your left and there should be a large rectangular table that you can safely jump down to. The talisman should be right behind you on the floor next to that table.",
    "sourceTitle": "Boltdrake Talisman +3",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Boltdrake_Talisman_%2B3",
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
    "summary": "地图拾取 / 宝箱：It can be 位于 the 巫者村, in front of the Grandmother inside the trunk of a decayed tree on a hill.",
    "details": "It can be found in the Shaman Village, in front of the Grandmother inside the trunk of a decayed tree on a hill.",
    "sourceTitle": "Golden Braid",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Golden_Braid",
    "verified": true
  },
  "talisman:7130": {
    "kind": "talisman",
    "itemId": 7130,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：It can be 位于 within 幽影城, 物种保藏库. You must progress until the seventh floor to pull the lever that moves the statues. Once you do this, return to the third floor and find the head of the statue to pull this item from its beard. One way to do this is to visit the 保藏库（四楼） 赐福, turn around and go East to the railing, then do a big jump from the railing to the feet of the statue below. 后 landing, run across the statue's back until you can drop down and loot the talisman.",
    "details": "It can be found within Shadow Keep, Specimen Storehouse. You must progress until the seventh floor to pull the lever that moves the statues. Once you do this, return to the third floor and find the head of the statue to pull this item from its beard. One way to do this is to visit the Storehouse, Fourth Floor site of grace, turn around and go East to the railing, then do a big jump from the railing to the feet of the statue below. After landing, run across the statue's back until you can drop down and loot the talisman.",
    "sourceTitle": "Pearldrake Talisman +3",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pearldrake_Talisman_%2B3",
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
    "summary": "任务 / 事件奖励：The Crimson Seed Talisman +1 is 击杀后获得 using the Hole-Laden Necklace to ring the bell ，地点： the center of a large ring of stone fingers ，地点： the 利亚指头遗迹.The ring of fingers is shown on the Ruins Map acquired from Count Ymir alongside the Hole-Laden Necklace.",
    "details": "The Crimson Seed Talisman +1 is received after using the Hole-Laden Necklace to ring the bell at the center of a large ring of stone fingers at the Finger Ruins of Rhia.The ring of fingers is shown on the Ruins Map acquired from Count Ymir alongside the Hole-Laden Necklace.",
    "sourceTitle": "Crimson Seed Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crimson_Seed_Talisman_%2B1",
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
    "summary": "任务 / 事件奖励：The Cerulean Seed Talisman +1 is 击杀后获得 using the Hole-Laden Necklace to ring the bell ，地点： the center of a large ring of stone fingers ，地点： the 狄欧指头遗迹.The ring of fingers is shown on the Ruins Map (2nd) acquired from Count Ymir.",
    "details": "The Cerulean Seed Talisman +1 is received after using the Hole-Laden Necklace to ring the bell at the center of a large ring of stone fingers at the Finger Ruins of Dheo.The ring of fingers is shown on the Ruins Map (2nd) acquired from Count Ymir.",
    "sourceTitle": "Cerulean Seed Talisman +1",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cerulean_Seed_Talisman_%2B1",
    "verified": true
  },
  "talisman:8000": {
    "kind": "talisman",
    "itemId": 8000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：恩惠教堂；The Blessed Blue Dew Talisman can be obtained ，地点： the 恩惠教堂.",
    "details": "Location: Church of Benediction；The Blessed Blue Dew Talisman can be obtained at the Church of Benediction.",
    "sourceTitle": "Blessed Blue Dew Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blessed_Blue_Dew_Talisman",
    "verified": true
  },
  "talisman:8010": {
    "kind": "talisman",
    "itemId": 8010,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Fine Crucible Feather Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fine_Crucible_Feather_Talisman",
    "verified": false
  },
  "talisman:8020": {
    "kind": "talisman",
    "itemId": 8020,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：地点：眺望镇；It can be 位于 inside a 宝箱 inside a small building ，地点： the top of 眺望镇, located ，位于 southwestern 墓地平原.",
    "details": "Location: Prospect Town；It can be found inside a chest inside a small building at the top of Prospect Town, located in the southwestern Gravesite Plain.",
    "sourceTitle": "Outer God Heirloom",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Outer_God_Heirloom",
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
    "summary": "地图拾取 / 宝箱：The Shattered Stone Talisman can be 位于 穆斯废墟:；From the 穆斯废墟 赐福一览, head south-east through the large stony archway. Proceed towards a house ruin.",
    "details": "The Shattered Stone Talisman can be found in Moorth Ruins:；From the Moorth Ruins Sites of Grace, head south-east through the large stony archway. Proceed towards a house ruin.Enter the house's doorway, exit onto the small roof, turn left, and go around the corner to find the talisman lying on a corpse.",
    "sourceTitle": "Shattered Stone Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shattered_Stone_Talisman",
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
    "summary": "地图拾取 / 宝箱：获得途径 ，地点： 神殿镇废墟; 位于 inside the highest structure. 后 the fight with the Horned 剑士, just continue up the stairs into the next room to find a 宝箱 with this item inside.",
    "details": "Obtained at Temple Town Ruins; Found inside the highest structure. After the fight with the Horned Warrior, just continue up the stairs into the next room to find a chest with this item inside.",
    "sourceTitle": "Two-Handed Sword Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Two-Handed_Sword_Talisman",
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
    "summary": "敌人 / 首领掉落：It is acquired upon defeating “火焰骑士”昆兰 ，用于 the first time, which can be in Belurat Tower Settlement or ，地点： the 圣战教堂.",
    "details": "It is acquired upon defeating Fire Knight Queelign for the first time, which can be in Belurat Tower Settlement or at the Church of the Crusade.",
    "sourceTitle": "Crusade Insignia",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crusade_Insignia",
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
    "summary": "敌人 / 首领掉落：年迈 One's Exultation is 击杀后掉落： the Aging Untouchable 位于 nearest to the 废弃教堂 ，位于 谷底森林. The Aging Untouchable is only vulnerable 后 it has been parried.",
    "details": "Aged One's Exultation is dropped by the Aging Untouchable found nearest to the Abandoned Church in the Abyssal Woods. The Aging Untouchable is only vulnerable after it has been parried.",
    "sourceTitle": "Aged One's Exultation",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aged_One's_Exultation",
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
    "summary": "地图拾取 / 宝箱：Can be 位于 on the top of a tower ，地点： 雾谷要塞. From within the door of the tower where “黑骑士”迦鲁 was, go through a gap between the tower and the rock wall to the east of the doorway. Hop down onto the wooden pathway and follow it until you see a ladder on your right. Take it up, 后 which you'll see another ladder on your left. Take it to the uppermost level of the tower. Here you can find the 宝箱 containing the Talisman.",
    "details": "Can be found on the top of a tower at Fog Rift Fort. From within the door of the tower where Black Knight Garrew was, go through a gap between the tower and the rock wall to the east of the doorway. Hop down onto the wooden pathway and follow it until you see a ladder on your right. Take it up, after which you'll see another ladder on your left. Take it to the uppermost level of the tower. Here you can find the treasure chest containing the Talisman.",
    "sourceTitle": "Arrow's Soaring Sting Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Arrow's_Soaring_Sting_Talisman",
    "verified": true
  },
  "talisman:8090": {
    "kind": "talisman",
    "itemId": 8090,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：获得途径 from a 宝箱 in a small camp of Messmer Soldiers located Southwestern of 泰乌尔锻造遗迹 赐福.",
    "details": "Obtained from a chest in a small camp of Messmer Soldiers located Southwestern of Taylew's Ruined Forge Site of Grace.",
    "sourceTitle": "Pearl Shield Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pearl_Shield_Talisman",
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
    "summary": "地图拾取 / 宝箱：The Dried Bouquet can be 位于 two locations within “塔之镇”贝瑞特:；位于 a small room hidden behind debris ，位于 area where you encounter several Man-Fly enemies.",
    "details": "The Dried Bouquet can be found in two locations within Belurat, Tower Settlement:；Found in a small room hidden behind debris in the area where you encounter several Man-Fly enemies.From the location where you acquire the Bone Bow, exit the doorway, make a hard left, and spot a pile of rubble. Jump on the rubble to access a secret room tucked behind it. Inside the large storeroom, you can find the following items:；Thin Beast Bones (x5)；Scadutree Fragment (x1)；Dried Bouquet (x1)",
    "sourceTitle": "Dried Bouquet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dried_Bouquet",
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
    "summary": "地图拾取 / 宝箱：The Smithing Talisman can be 位于 Ruined Forge Starfall Past:；获得途径 from a corpse in a room filled with Magma Tears on the upper-most level of the 古铁陨石锻造遗迹.",
    "details": "The Smithing Talisman can be found in Ruined Forge Starfall Past:；Obtained from a corpse in a room filled with Magma Tears on the upper-most level of the Ruined Forge of Starfall Past.",
    "sourceTitle": "Smithing Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Smithing_Talisman",
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
    "summary": "地图拾取 / 宝箱：Ailment Talisman is 位于 the 墓地平原 ，地点： the 置病村. It is located on a corpse ，地点： the edge of an unfinished wooden bridge.",
    "details": "Ailment Talisman is found in the Gravesite Plain at the Abandoned Ailing Village. It is located on a corpse at the edge of an unfinished wooden bridge.",
    "sourceTitle": "Ailment Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ailment_Talisman",
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
    "summary": "任务 / 事件奖励：You have to go through the 任务线 of “金针骑士”蕾妲 and invade 老兵安帕赫. You then return to the 赐福 where you will bid farewell to Leda. Before her dialogue ends, she will give you the Talisman.If you assist 角人 ，位于 previous invasion, this will lock you from getting it ，位于 playthrough.",
    "details": "You have to go through the questline of Needle Knight Leda and invade Sir Ansbach. You then return to the Site of Grace where you will bid farewell to Leda. Before her dialogue ends, she will give you the Talisman.If you assist Hornsent in the previous invasion, this will lock you from getting it in the playthrough.",
    "sourceTitle": "Retaliatory Crossed-Tree",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Retaliatory_Crossed-Tree",
    "verified": true
  },
  "talisman:8140": {
    "kind": "talisman",
    "itemId": 8140,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：You get it from aiding “金针骑士”蕾妲 in invading and defeating 角人 后 she chooses him as a target, you have to go back to the 大道旁的十字记号 赐福 and talk to her 后 doing so and she will give the talisman to you. Assisting Leda here (and gaining the Lacerating Crossed-Tree Talisman) will prevent you from getting the Swift 斩击 Ash of War, as that is the ...奖励 aiding 角人 in this part of his quest.If “穿刺者”梅瑟莫 is defeated ，位于 幽影城 you will be unable to acquire this item as the 角人 invasion / assist signs will disappear.",
    "details": "You get it from aiding Needle Knight Leda in invading and defeating Hornsent after she chooses him as a target, you have to go back to the Highroad Cross site of grace and talk to her after doing so and she will give the talisman to you. Assisting Leda here (and gaining the Lacerating Crossed-Tree Talisman) will prevent you from getting the Swift Slash Ash of War, as that is the reward for aiding Hornsent in this part of his quest.If Messmer the Impaler is defeated in the Shadow Keep you will be unable to acquire this item as the Hornsent invasion / assist signs will disappear.",
    "sourceTitle": "Lacerating Crossed-Tree",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lacerating_Crossed-Tree",
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
    "sourceKind": "other",
    "summary": "其他来源：获得途径 inside 白金的破屋 in 望影露台.",
    "details": "Obtained inside Albinauric's Shack in Scaduview.",
    "sourceTitle": "Sharpshot Talisman",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Sharpshot_Talisman",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "St. Trina's Smile",
    "sourceUrl": "https://eldenring.fandom.com/wiki/St._Trina's_Smile",
    "verified": false
  },
  "talisman:8170": {
    "kind": "talisman",
    "itemId": 8170,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 inside the 老者的破屋 in 墓地平原.",
    "details": "Found inside the Elder's Hovel in Gravesite Plain.",
    "sourceTitle": "Talisman of the Dread",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Talisman_of_the_Dread",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：The Enraged Divine Beast can be obtained as a reward:；Select it as one of the possible rewards when trading the Remembrance of the Dancing Lion with “解指”恩雅 ，地点： the 圆桌厅堂.",
    "details": "The Enraged Divine Beast can be obtained as a reward:；Select it as one of the possible rewards when trading the Remembrance of the Dancing Lion with Finger Reader Enia at the Roundtable Hold.",
    "sourceTitle": "Enraged Divine Beast",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Enraged_Divine_Beast",
    "verified": true
  },
  "talisman:8190": {
    "kind": "talisman",
    "itemId": 8190,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Beloved Stardust can be obtained as a reward:；由...赠予 Count Ymir ，地点： the 玛努斯·美特大教堂 后 using the Hole-Laden Necklace to ring the first hanging bell ，地点： a Finger Ruins.",
    "details": "Beloved Stardust can be obtained as a reward:；Given by Count Ymir at the Cathedral of Manus Metyr after using the Hole-Laden Necklace to ring the first hanging bell at a Finger Ruins.",
    "sourceTitle": "Beloved Stardust",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Beloved_Stardust",
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
    "summary": "地图拾取 / 宝箱：地点：幽影城；The Talisman of Lord's Bestowal is obtained ，位于 幽影城, beside the large golden tree.",
    "details": "Location: Shadow Keep；The Talisman of Lord's Bestowal is obtained in the Shadow Keep, beside the large golden tree.",
    "sourceTitle": "Talisman of Lord's Bestowal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Talisman_of_Lord's_Bestowal",
    "verified": true
  },
  "talisman:8210": {
    "kind": "talisman",
    "itemId": 8210,
    "sourceKind": "other",
    "summary": "其他来源：Verdigris Discus is located ，位于 劳弗古遗迹, positioned before a giant statue of a goddess.This area may be accessed via the sending gate closest to the 大道旁的十字记号 赐福 on the 幽影亚坛. The gate must be unlocked with an Imbued Sword Key. 后 passing through, walk uphill and between the twin waterfalls. The statue lies beyond the Divine Bird 剑士.",
    "details": "Verdigris Discus is located in the Ancient Ruins of Rauh, positioned before a giant statue of a goddess.This area may be accessed via the sending gate closest to the Highroad Cross site of grace on the Scadu Altus. The gate must be unlocked with an Imbued Sword Key. After passing through, walk uphill and between the twin waterfalls. The statue lies beyond the Divine Bird Warrior.Alternatively, this area is accessible by descending down from the Divine Beast Dancing Lion arena.",
    "sourceTitle": "Verdigris Discus",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Verdigris_Discus",
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
    "summary": "地图拾取 / 宝箱：获得途径 from an altar in 恩希斯城 beside “卡利亚骑士”穆利缇尔.",
    "details": "Obtained from an altar in Castle Ensis beside Moonrithyll, Carian Knight.",
    "sourceTitle": "Rellana's Cameo",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rellana's_Cameo",
    "verified": true
  },
  "talisman:8230": {
    "kind": "talisman",
    "itemId": 8230,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：Acquired from a 宝箱 ，地点： the top of 火吻废墟.",
    "details": "Acquired from a chest at the top of Scorched Ruins.",
    "sourceTitle": "Blade of Mercy",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blade_of_Mercy",
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
    "summary": "地图拾取 / 宝箱：位于 a 宝箱 ，位于 western Ancient Ruins.If you have the 古遗迹（大楼梯） 赐福 unlocked, start there and take the nearby lift down; then, enter the square passage towards the south by using Torrent's double jump, using the adjacent pile of rocks to gain enough height to do so. Through the passage is a room containing the 宝箱.",
    "details": "Found in a treasure chest in the western Ancient Ruins.If you have the Ancient Ruins, Grand Stairway Site of Grace unlocked, start there and take the nearby lift down; then, enter the square passage towards the south by using Torrent's double jump, using the adjacent pile of rocks to gain enough height to do so. Through the passage is a room containing the treasure chest.If you only have the Rauh Ancient Ruins, West grace unlocked, start there and enter the tunnel to the southwest. Follow the tunnel's left wall until you reach a lift; take it up and then round the corner to the left. Below the cliff is a walkable lattice structure; jump down onto it and follow the path. At the intersection, enter the room to your left, which contains the aforementioned square passage and the elevator to the Grand Stairway grace.",
    "sourceTitle": "Talisman of All Crucibles",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Talisman_of_All_Crucibles",
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
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；One of the starting spells of the 观星者 出身.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；One of the starting spells of the Astrologer Origin.x1 Sold for 1,000 Runes by Sorceress Sellen in any of her locations other than Witchbane Ruins.x1 Sold for 1,000 Runes by Sorcerer Thops at Church of Irith.Should Sellen or Thops die before purchasing this Sorcery from them, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.",
    "sourceTitle": "Glintstone Pebble",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Pebble",
    "verified": true
  },
  "goods:4001": {
    "kind": "sorcery",
    "itemId": 4001,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 2,000 卢恩 by 魔法师瑟濂, “结缘牧师”米利耶 or 魔法教授赛尔维斯 后 giving either of them the Academy Scroll.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 2,000 Runes by Sorceress Sellen, Miriel, Pastor of Vows or Preceptor Seluvis after giving either of them the Academy Scroll.Should the scroll be given to one of them and then have that instructor die before purchasing this Sorcery, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should all three of Sellen, Miriel, and Seluvis die before giving any of them the scroll then this sorcery becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Great Glintstone Shard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Great_Glintstone_Shard",
    "verified": true
  },
  "goods:4010": {
    "kind": "sorcery",
    "itemId": 4010,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 600 卢恩 by 魔法师瑟濂, “结缘牧师”米利耶 or 魔法教授赛尔维斯 后 giving either of them the Academy Scroll.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 600 Runes by Sorceress Sellen, Miriel, Pastor of Vows or Preceptor Seluvis after giving either of them the Academy Scroll.Should the scroll be given to one of them and then have that instructor die before purchasing this Sorcery, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should all three of Sellen, Miriel, and Seluvis die before giving any of them the scroll then this sorcery becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Swift Glintstone Shard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Swift_Glintstone_Shard",
    "verified": true
  },
  "goods:4020": {
    "kind": "sorcery",
    "itemId": 4020,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 12,000 卢恩 by 魔法师瑟濂, “结缘牧师”米利耶 or 魔法教授赛尔维斯 后 giving either of them the Conspectus Scroll.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 12,000 Runes by Sorceress Sellen, Miriel, Pastor of Vows or Preceptor Seluvis after giving either of them the Conspectus Scroll.Should the scroll be given to one of them and then have that instructor die before purchasing this Sorcery, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should all three of Sellen, Miriel, and Seluvis die before giving any of them the scroll then this sorcery becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Glintstone Cometshard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Cometshard",
    "verified": true
  },
  "goods:4021": {
    "kind": "sorcery",
    "itemId": 4021,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：魔法学院雷亚卢卡利亚；位于 on a corpse behind an Illusory Wall 附近 the entrance to the 讨论室.",
    "details": "Loot: Academy of Raya Lucaria；Found on a corpse behind an Illusory Wall near the entrance to the Debate Parlor.",
    "sourceTitle": "Comet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Comet",
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
    "sourceKind": "shop",
    "summary": "商店购买：Quest Item/ Purchase: 魔法学院雷亚卢卡利亚；Sold ，用于 8,000 卢恩 by 魔法师瑟濂 后 choosing to side with her and help her vanquish “魔女猎人”杰廉 ，地点： the 雷亚卢卡利亚大书库.",
    "details": "Quest Item/ Purchase: Academy of Raya Lucaria；Sold for 8,000 Runes by Sorceress Sellen after choosing to side with her and help her vanquish Witch-Hunter Jerren at the Raya Lucaria Grand Library.Should Sellen die before this point in her questline, then this Sorcery will be left unavailable for the rest of the playthrough.",
    "sourceTitle": "Shard Spiral",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shard_Spiral",
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
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 盖利德 / 圆桌厅堂；x1 Sold ，用于 3,000 卢恩 by 魔法师瑟濂 in any of her locations other than 封印魔女的废墟.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Caelid / Roundtable Hold；x1 Sold for 3,000 Runes by Sorceress Sellen in any of her locations other than Witchbane Ruins.x1 Sold for 3,000 Runes by Sage Gowry after he has repaired the snapped Unalloyed Gold Needle.Should Sellen or Gowry die before purchasing this Sorcery from them, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.",
    "sourceTitle": "Glintstone Stars",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Stars",
    "verified": true
  },
  "goods:4050": {
    "kind": "sorcery",
    "itemId": 4050,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 10,000 卢恩 by 魔法师瑟濂, “结缘牧师”米利耶 or 魔法教授赛尔维斯 后 giving either of them the Conspectus Scroll.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 10,000 Runes by Sorceress Sellen, Miriel, Pastor of Vows or Preceptor Seluvis after giving either of them the Conspectus Scroll.Should the scroll be given to one of them and then have that instructor die before purchasing this Sorcery, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should all three of Sellen, Miriel, and Seluvis die before giving any of them the scroll then this sorcery becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Star Shower",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Star_Shower",
    "verified": true
  },
  "goods:4060": {
    "kind": "sorcery",
    "itemId": 4060,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂.Sold ，用于 1,500 卢恩 by 魔法师瑟濂 in any of her locations other than 封印魔女的废墟.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold.Sold for 1,500 Runes by Sorceress Sellen in any of her locations other than Witchbane Ruins.Should Sellen die before purchasing this Sorcery from her, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Sellen's Bell Bearing.",
    "sourceTitle": "Crystal Barrage",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crystal_Barrage",
    "verified": true
  },
  "goods:4070": {
    "kind": "sorcery",
    "itemId": 4070,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；One of the starting spells of the 观星者 出身.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；One of the starting spells of the Astrologer Origin.x1 Sold for 1,500 Runes by Sorceress Sellen in any of her locations other than Witchbane Ruins.x1 Sold for 1,500 Runes by Sorcerer Thops at Church of Irith.Should Sellen or Thops die before purchasing this Sorcery from them, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.",
    "sourceTitle": "Glintstone Arc",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Arc",
    "verified": true
  },
  "goods:4080": {
    "kind": "sorcery",
    "itemId": 4080,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：改宗边境塔, north-east 湖之利耶尼亚, not to be mistaken with the 改宗塔 ，位于 south-west.You will need to use the Erudition gesture 由...赠予 Thops in front of the statue of Marika. This will reveal a hidden ladder to the top of the tower with a 宝箱 that contains the spell.",
    "details": "Converted Fringe Tower, north-east Liurnia of the Lakes, not to be mistaken with the Converted Tower in the south-west.You will need to use the Erudition gesture given by Thops in front of the statue of Marika. This will reveal a hidden ladder to the top of the tower with a treasure chest that contains the spell.Unlike with the Converted Tower, here you will not only have to do the gesture, but also wear a glintstone crown headpiece while doing so.<span class=\"mw-customtoggle-myTable wds-button wds-is-secondary\"> Show Patch Notes </span>；{| class=\"article-table mw-collapsible mw-collapsed\" id=\"mw-customcollapsible-myTable\"! Patch || Changes；|-；| 1.07 || FP cost reduced from 45 to 38.|}",
    "sourceTitle": "Cannon of Haima",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cannon_of_Haima",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 啜泣半岛；Acquired from defeating the Demi-Human Queen of the 亚人森林的废墟.",
    "details": "Guaranteed Drop: Weeping Peninsula；Acquired from defeating the Demi-Human Queen of the Demi-Human Forest Ruins.",
    "sourceTitle": "Crystal Burst",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crystal_Burst",
    "verified": true
  },
  "goods:4100": {
    "kind": "sorcery",
    "itemId": 4100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：Liurnia；Acquired from a corpse ，位于 section just before the final elevator of 雷亚卢卡利亚结晶坑道.",
    "details": "Loot: Liurnia；Acquired from a corpse in the section just before the final elevator of Raya Lucaria Crystal Tunnel.",
    "sourceTitle": "Shatter Earth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shatter_Earth",
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
    "summary": "地图拾取 / 宝箱：拾取：盖利德；Acquired from a corpse in a shed ，地点： the upper levels of 瑟利亚结晶坑道.",
    "details": "Loot: Caelid；Acquired from a corpse in a shed at the upper levels of Sellia Crystal Tunnel.",
    "sourceTitle": "Rock Blaster",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rock_Blaster",
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
    "sourceKind": "other",
    "summary": "其他来源：Same way as Cannon of Haima, by breaking the seal ，地点： the 改宗边境塔 via Erudition gesture while wearing a glintstone crown.",
    "details": "Same way as Cannon of Haima, by breaking the seal at the Converted Fringe Tower via Erudition gesture while wearing a glintstone crown.",
    "sourceTitle": "Gavel of Haima",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gavel_of_Haima",
    "verified": true
  },
  "goods:4130": {
    "kind": "sorcery",
    "itemId": 4130,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Terra Magica",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Terra_Magica",
    "verified": false
  },
  "goods:4140": {
    "kind": "sorcery",
    "itemId": 4140,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚 / 圆桌厅堂；Sold ，用于 2,500 卢恩 by 魔法师托普斯 ，地点： the 伊利斯教堂.",
    "details": "Purchase: Liurnia of the Lakes / Roundtable Hold；Sold for 2,500 Runes by Sorcerer Thops at the Church of Irith.Should Thops die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Thops's Bell Bearing.",
    "sourceTitle": "Starlight",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Starlight",
    "verified": true
  },
  "goods:4200": {
    "kind": "sorcery",
    "itemId": 4200,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Quest Item: 遁世者村；Comet Azur is 通过...获得 interacting with “起源魔法师”亚兹勒, 位于 on the cliffs southeast of the 遁世者村 in 格密尔火山.",
    "details": "Quest Item: Hermit Village；Comet Azur is obtained by interacting with Primeval Sorcerer Azur, found on the cliffs southeast of the Hermit Village in Mt. Gelmir.",
    "sourceTitle": "Comet Azur",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Comet_Azur",
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
    "summary": "地图拾取 / 宝箱：拾取：异端魔法师塔, 巨人山顶；You'll need to walk over an invisible bridge across the valley directly east of the 古遗迹山谷的山崖上 赐福.",
    "details": "Loot: Heretical Rise, Mountaintops of the Giants；You'll need to walk over an invisible bridge across the valley directly east of the Snow Valley Ruins Overlook Site of Grace.",
    "sourceTitle": "Founding Rain of Stars",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Founding_Rain_of_Stars",
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
    "summary": "任务 / 事件奖励：Quest Item: 盖利德；Acquired from “起源魔法师”卢瑟特 in 瑟利亚隐藏洞窟. Requires the Sellian Sealbreaker from Sellen in order to access him.",
    "details": "Quest Item: Caelid；Acquired from Primeval Sorcerer Lusat in Sellia Hideaway. Requires the Sellian Sealbreaker from Sellen in order to access him.",
    "sourceTitle": "Stars of Ruin",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Stars_of_Ruin",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 2,500 卢恩 by 魔法师瑟濂, “结缘牧师”米利耶 or 魔法教授赛尔维斯 后 giving either of them the Royal House Scroll.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 2,500 Runes by Sorceress Sellen, Miriel, Pastor of Vows or Preceptor Seluvis after giving either of them the Royal House Scroll.Should the scroll be given to one of them and then have that instructor die before purchasing this Sorcery, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should all three of Sellen, Miriel, and Seluvis die before giving any of them the scroll then this sorcery becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Glintblade Phalanx",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintblade_Phalanx",
    "verified": true
  },
  "goods:4301": {
    "kind": "sorcery",
    "itemId": 4301,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚 / 圆桌厅堂；Sold ，用于 12,000 卢恩 by 魔法教授赛尔维斯.",
    "details": "Purchase: Liurnia of the Lakes / Roundtable Hold；Sold for 12,000 Runes by Preceptor Seluvis.Should Seluvis die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Seluvis's Bell Bearing.",
    "sourceTitle": "Carian Phalanx",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Phalanx",
    "verified": true
  },
  "goods:4302": {
    "kind": "sorcery",
    "itemId": 4302,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from defeating “卡利亚骑士”波尔斯 ，位于 杜鹃的封印监牢.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from defeating Bols, Carian Knight in the Cuckoo's Evergaol.",
    "sourceTitle": "Greatblade Phalanx",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greatblade_Phalanx",
    "verified": true
  },
  "goods:4360": {
    "kind": "sorcery",
    "itemId": 4360,
    "sourceKind": "shop",
    "summary": "商店购买：Trade the Remembrance of the Full Moon Queen, gained by defeating “满月女王”蕾娜菈, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Full Moon Queen, gained by defeating Rennala, Queen of the Full Moon, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Rennala's Full Moon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rennala's_Full_Moon",
    "verified": true
  },
  "goods:4361": {
    "kind": "sorcery",
    "itemId": 4361,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：希耶罗那魔法师塔, ，位于 south-west of the 月之民废墟. You'll have to solve the puzzle with the three spirit turtles. One is right next to the Rise, the other ，地点： the cliff south-east of the 月之贵族废墟 on a ledge and the third is flying above the evergaol portal ，位于 north-west. You'll have to start ，地点： 希耶罗那魔法师塔 and travel to each location by foot/horse, otherwise the turtles don't spawn.",
    "details": "Chelona's Rise, in the south-west of the Moonfolk Ruins. You'll have to solve the puzzle with the three spirit turtles. One is right next to the Rise, the other at the cliff south-east of the Lunar Estate Ruins on a ledge and the third is flying above the evergaol portal in the north-west. You'll have to start at Chelona's Rise and travel to each location by foot/horse, otherwise the turtles don't spawn.",
    "sourceTitle": "Ranni's Dark Moon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ranni's_Dark_Moon",
    "verified": true
  },
  "goods:4370": {
    "kind": "sorcery",
    "itemId": 4370,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from defeating 魔法教授米丽安 ，位于 normal version of 卡利亚书斋.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from defeating Preceptor Miriam in the normal version of Carian Study Hall.",
    "sourceTitle": "Magic Downpour",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Magic_Downpour",
    "verified": true
  },
  "goods:4380": {
    "kind": "sorcery",
    "itemId": 4380,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from defeating the apparition of 禁卫骑士罗蕾塔 guarding the 王室赏月地 of 卡利亚城寨.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from defeating the apparition of Royal Knight Loretta guarding the Royal Moongazing Grounds of Caria Manor.",
    "sourceTitle": "Loretta's Greatbow",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Loretta's_Greatbow",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 米凯拉的圣树；Acquired from defeating “圣树骑士”罗蕾塔 standing guard ，地点： the 圣树大舞台.",
    "details": "Guaranteed Drop: Miquella's Haligtree；Acquired from defeating Loretta, Knight of the Haligtree standing guard at the Haligtree Promenade.",
    "sourceTitle": "Loretta's Mastery",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Loretta's_Mastery",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚 / 圆桌厅堂；Sold ，用于 3,000 卢恩 by “结缘牧师”米利耶.",
    "details": "Purchase: Liurnia of the Lakes / Roundtable Hold；Sold for 3,000 Runes by Miriel, Pastor of Vows.Should Miriel die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Miriel's Bell Bearing.",
    "sourceTitle": "Magic Glintblade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Magic_Glintblade",
    "verified": true
  },
  "goods:4400": {
    "kind": "sorcery",
    "itemId": 4400,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚 / 圆桌厅堂；Sold ，用于 7,500 卢恩 by 魔法教授赛尔维斯.",
    "details": "Purchase: Liurnia of the Lakes / Roundtable Hold；Sold for 7,500 Runes by Preceptor Seluvis.Should Seluvis die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Seluvis's Bell Bearing.",
    "sourceTitle": "Glintstone Icecrag",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Icecrag",
    "verified": true
  },
  "goods:4410": {
    "kind": "sorcery",
    "itemId": 4410,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：巨人山顶；Acquired from a corpse lying next to a wall ，位于 southernmost quarters of the 萨米尔废墟.",
    "details": "Loot: Mountaintops of the Giants；Acquired from a corpse lying next to a wall in the southernmost quarters of the Zamor Ruins.",
    "sourceTitle": "Zamor Ice Storm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Zamor_Ice_Storm",
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
    "summary": "商店购买：Purchase: 湖之利耶尼亚 / 圆桌厅堂；Sold ，用于 6,000 卢恩 by 魔法教授赛尔维斯.",
    "details": "Purchase: Liurnia of the Lakes / Roundtable Hold；Sold for 6,000 Runes by Preceptor Seluvis.Should Seluvis die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Seluvis's Bell Bearing.",
    "sourceTitle": "Freezing Mist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Freezing_Mist",
    "verified": true
  },
  "goods:4430": {
    "kind": "sorcery",
    "itemId": 4430,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚 / 圆桌厅堂；Sold ，用于 10,000 卢恩 by “结缘牧师”米利耶.",
    "details": "Purchase: Liurnia of the Lakes / Roundtable Hold；Sold for 10,000 Runes by Miriel, Pastor of Vows.Should Miriel die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Miriel's Bell Bearing.",
    "sourceTitle": "Carian Greatsword",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Greatsword",
    "verified": true
  },
  "goods:4431": {
    "kind": "sorcery",
    "itemId": 4431,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 月光祭坛；Acquired from defeating “辉石龙”亚杜拉 ，地点： the front entrance of the 玛努斯·瑟利斯大教堂.",
    "details": "Guaranteed Drop: Moonlight Altar；Acquired from defeating Glintstone Dragon Adula at the front entrance of the Cathedral of Manus Celes.",
    "sourceTitle": "Adula's Moonblade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Adula's_Moonblade",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 1,500 卢恩 by 魔法师瑟濂, “结缘牧师”米利耶 or 魔法教授赛尔维斯 后 giving either of them the Royal House Scroll.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 1,500 Runes by Sorceress Sellen, Miriel, Pastor of Vows or Preceptor Seluvis after giving either of them the Royal House Scroll.Should the scroll be given to one of them and then have that instructor die before purchasing this Sorcery, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should all three of Sellen, Miriel, and Seluvis die before giving any of them the scroll then this sorcery becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Carian Slicer",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Slicer",
    "verified": true
  },
  "goods:4450": {
    "kind": "sorcery",
    "itemId": 4450,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from felling a Scarab in 卡利亚城寨, located on the cliffs littered with Living Jars south of the 王室赏月地 赐福.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from felling a Scarab in Caria Manor, located on the cliffs littered with Living Jars south of the Royal Moongazing Grounds Site of Grace.",
    "sourceTitle": "Carian Piercer",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Piercer",
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
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 3,000 卢恩 by 魔法师瑟濂 in any of her locations other than 封印魔女的废墟.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 3,000 Runes by Sorceress Sellen in any of her locations other than Witchbane Ruins.Should Sellen die before purchasing this Sorcery from her, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Sellen's Bell Bearing.",
    "sourceTitle": "Scholar's Armament",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scholar's_Armament",
    "verified": true
  },
  "goods:4470": {
    "kind": "sorcery",
    "itemId": 4470,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 宁姆格福 / 湖之利耶尼亚 / 魔法学院雷亚卢卡利亚 / 圆桌厅堂；Sold ，用于 2,500 卢恩 by 魔法师瑟濂 in any of her locations other than 封印魔女的废墟.",
    "details": "Purchase: Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Roundtable Hold；Sold for 2,500 Runes by Sorceress Sellen in any of her locations other than Witchbane Ruins.Should Sellen die before purchasing this Sorcery from her, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Sellen's Bell Bearing.",
    "sourceTitle": "Scholar's Shield",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scholar's_Shield",
    "verified": true
  },
  "goods:4480": {
    "kind": "sorcery",
    "itemId": 4480,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from defeating 魔法教授米丽安 ，位于 inverted version of 卡利亚书斋.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from defeating Preceptor Miriam in the inverted version of Carian Study Hall.",
    "sourceTitle": "Lucidity",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lucidity",
    "verified": true
  },
  "goods:4490": {
    "kind": "sorcery",
    "itemId": 4490,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from felling a Scarab on the road northwest of the 卡利亚城寨（后方） 赐福.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from felling a Scarab on the road northwest of the Behind Caria Manor Site of Grace.",
    "sourceTitle": "Frozen Armament",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Frozen_Armament",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：魔法学院雷亚卢卡利亚；Acquired from a corpse located on the second floor of the 杜鹃教堂. The second floor can be accessed through careful platforming on the rooftops west of the plaza north of the 讨论室 赐福.",
    "details": "Loot: Academy of Raya Lucaria；Acquired from a corpse located on the second floor of the Church of the Cuckoo. The second floor can be accessed through careful platforming on the rooftops west of the plaza north of the Debate Parlor Site of Grace.",
    "sourceTitle": "Shattering Crystal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shattering_Crystal",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 学院结晶洞窟；Acquired from defeating the 结晶人 duo guarding the end of the 学院结晶洞窟.",
    "details": "Guaranteed Drop: Academy Crystal Cave；Acquired from defeating the Crystalian duo guarding the end of the Academy Crystal Cave.",
    "sourceTitle": "Crystal Release",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crystal_Release",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；Acquired from defeating the Putrid 结晶人s the end of the 瑟利亚隐藏洞窟.",
    "details": "Guaranteed Drop: Caelid；Acquired from defeating the Putrid Crystalians the end of the Sellia Hideaway.",
    "sourceTitle": "Crystal Torrent",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crystal_Torrent",
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
    "summary": "地图拾取 / 宝箱：拾取：啜泣半岛；Acquired from a corpse next to the imprisoned Sellen ，位于 cellar of 封印魔女的废墟.",
    "details": "Loot: Weeping Peninsula；Acquired from a corpse next to the imprisoned Sellen in the cellar of Witchbane Ruins.",
    "sourceTitle": "Ambush Shard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ambush_Shard",
    "verified": true
  },
  "goods:4610": {
    "kind": "sorcery",
    "itemId": 4610,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 盖利德 / 圆桌厅堂；Sold ，用于 4,000 卢恩 by 贤者格威 后 he has repaired the snapped Unalloyed Gold Needle.",
    "details": "Purchase: Caelid / Roundtable Hold；Sold for 4,000 Runes by Sage Gowry after he has repaired the snapped Unalloyed Gold Needle.Should Gowry die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Gowry's Bell Bearing.",
    "sourceTitle": "Night Shard",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night_Shard",
    "verified": true
  },
  "goods:4620": {
    "kind": "sorcery",
    "itemId": 4620,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：盖利德；Acquired from a 宝箱 blocked by a magic barrier ，位于 middle of 魔法镇瑟利亚.",
    "details": "Loot: Caelid；Acquired from a treasure chest blocked by a magic barrier in the middle of Sellia, Town of Sorcery.To dispel the barrier, light the brazier in the town's southwestern tower.",
    "sourceTitle": "Night Comet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night_Comet",
    "verified": true
  },
  "goods:4630": {
    "kind": "sorcery",
    "itemId": 4630,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Quest Item / 拾取：魔法学院雷亚卢卡利亚；Acquired from the body of Thops located outside the 校舍内的教室 后 giving him the Spare Academy Glintstone Key.",
    "details": "Quest Item / Loot: Academy of Raya Lucaria；Acquired from the body of Thops located outside the Schoolhouse Classroom after giving him the Spare Academy Glintstone Key.",
    "sourceTitle": "Thops's Barrier",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Thops's_Barrier",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚 / 圆桌厅堂；Sold ，用于 9,000 卢恩 by 魔法教授赛尔维斯.",
    "details": "Purchase: Liurnia of the Lakes / Roundtable Hold；Sold for 9,000 Runes by Preceptor Seluvis.Should Seluvis die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Seluvis's Bell Bearing.",
    "sourceTitle": "Carian Retaliation",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Carian_Retaliation",
    "verified": true
  },
  "goods:4650": {
    "kind": "sorcery",
    "itemId": 4650,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：盖利德；Acquired from a corpse inside the 沼泽监视塔.",
    "details": "Loot: Caelid；Acquired from a corpse inside the Swamp Lookout Tower.",
    "sourceTitle": "Eternal Darkness",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Eternal_Darkness",
    "verified": true
  },
  "goods:4660": {
    "kind": "sorcery",
    "itemId": 4660,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：亚坛高原；Acquired from the 宝箱 ，地点： the top of 海市蜃楼魔法师塔.",
    "details": "Loot: Altus Plateau；Acquired from the treasure chest at the top of Mirage Rise.",
    "sourceTitle": "Unseen Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Unseen_Blade",
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
    "summary": "地图拾取 / 宝箱：拾取：亚坛高原；Acquired from the 宝箱 ，地点： the top of 海市蜃楼魔法师塔.",
    "details": "Loot: Altus Plateau；Acquired from the treasure chest at the top of Mirage Rise.",
    "sourceTitle": "Unseen Form",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Unseen_Form",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from defeating the 石肤黑王 ，地点： the 王室墓地的封印监牢.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from defeating the Onyx Lord at the Royal Grave Evergaol.",
    "sourceTitle": "Meteorite",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Meteorite",
    "verified": true
  },
  "goods:4701": {
    "kind": "sorcery",
    "itemId": 4701,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 化圣雪原；Acquired from defeating the “黑暗繁星”艾丝缇 bossfight that lurks ，地点： the end of 耶罗·亚尼斯坑道.",
    "details": "Guaranteed Drop: Consecrated Snowfield；Acquired from defeating the Astel, Stars of Darkness bossfight that lurks at the end of Yelough Anix Tunnel.",
    "sourceTitle": "Meteorite of Astel",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Meteorite_of_Astel",
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
    "summary": "地图拾取 / 宝箱：拾取：艾奥尼亚沼泽；Acquired from a 宝箱 位于 the cellar of 贤者镇的废墟.",
    "details": "Loot: Swamp of Aeonia；Acquired from a treasure chest found in the cellar of Street of Sages Ruins.",
    "sourceTitle": "Rock Sling",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rock_Sling",
    "verified": true
  },
  "goods:4720": {
    "kind": "sorcery",
    "itemId": 4720,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 魔法学院雷亚卢卡利亚；Acquired from defeating the Alabaster Lord that appears ，地点： the end of the graveyard, by the elevator that leads up to the 校舍内的教室 赐福.",
    "details": "Guaranteed Drop: Academy of Raya Lucaria；Acquired from defeating the Alabaster Lord that appears at the end of the graveyard, by the elevator that leads up to the Schoolhouse Classroom Site of Grace.",
    "sourceTitle": "Gravity Well",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravity_Well",
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
    "summary": "地图拾取 / 宝箱：拾取：英灵地下墓地；Acquired from a 宝箱 ，位于 middle of the scarlet swamp water ，位于 lower levels of the large hall where all the phantoms are fighting each other.",
    "details": "Loot: War-Dead Catacombs；Acquired from a treasure chest in the middle of the scarlet swamp water in the lower levels of the large hall where all the phantoms are fighting each other.",
    "sourceTitle": "Collapsing Stars",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Collapsing_Stars",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Quest Item: 火山官邸；Acquired from Tanith 后 successfully felling the first assassination target, “古老骑士”伊修托邦.",
    "details": "Quest Item: Volcano Manor；Acquired from Tanith after successfully felling the first assassination target, Old Knight Istvan.",
    "sourceTitle": "Magma Shot",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Magma_Shot",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Quest Item: 火山官邸；Acquired from 骑士贝纳尔 ，位于 Drawing Room of 火山官邸 后 successfully defeating “白狼战鬼”巴格莱姆 and “离群魔法师”维赫勒 with him.",
    "details": "Quest Item: Volcano Manor；Acquired from Knight Bernahl in the Drawing Room of Volcano Manor after successfully defeating Vargram the Raging Wolf and Errant Sorcerer Wilhelm with him.This sorcery will be left unobtainable for the rest of the playthrough should Bernahl die before the player joins Volcano Manor.",
    "sourceTitle": "Gelmir's Fury",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gelmir's_Fury",
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
    "summary": "地图拾取 / 宝箱：拾取：格密尔火山；Acquired from a corpse located ，位于 遁世者的破屋 位于 of the southern side of 格密尔火山.",
    "details": "Loot: Mt. Gelmir；Acquired from a corpse located in the Hermit's Shack found of the southern side of Mt. Gelmir.",
    "sourceTitle": "Roiling Magma",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Roiling_Magma",
    "verified": true
  },
  "goods:4830": {
    "kind": "sorcery",
    "itemId": 4830,
    "sourceKind": "shop",
    "summary": "商店购买：Trade the Remembrance of the Blasphemous, 击杀后掉落： “亵渎君王”拉卡德, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Blasphemous, dropped by Rykard, Lord of Blasphemy, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Rykard's Rancor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rykard's_Rancor",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Briars of Sin",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Briars_of_Sin",
    "verified": false
  },
  "goods:4910": {
    "kind": "sorcery",
    "itemId": 4910,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：巨人山顶；Located by a dead tree on the western cliffs of the southern end of the giant stone bridge surrounded by Guilty enemies.",
    "details": "Loot: Mountaintops of the Giants；Located by a dead tree on the western cliffs of the southern end of the giant stone bridge surrounded by Guilty enemies.",
    "sourceTitle": "Briars of Punishment",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Briars_of_Punishment",
    "verified": true
  },
  "goods:5000": {
    "kind": "sorcery",
    "itemId": 5000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 史东薇尔城；Acquired from felling the Scarab on the road down to the Visage of Godwyn, southwest of the 升降机旁房间 赐福.",
    "details": "Guaranteed Drop: Stormveil Castle；Acquired from felling the Scarab on the road down to the Visage of Godwyn, southwest of the Liftside Chamber Site of Grace.",
    "sourceTitle": "Rancorcall",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rancorcall",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Acquired from defeating the 死亡仪式鸟 that roams the sunken ruins south of the 门前镇的北方 赐福.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Acquired from defeating the Death Rite Bird that roams the sunken ruins south of the Gate Town North Site of Grace.",
    "sourceTitle": "Ancient Death Rancor",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ancient_Death_Rancor",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 化圣雪原；Acquired from defeating the 死亡仪式鸟 that roams the northern edge of the frozen river ，地点： night.",
    "details": "Guaranteed Drop: Consecrated Snowfield；Acquired from defeating the Death Rite Bird that roams the northern edge of the frozen river at night.",
    "sourceTitle": "Explosive Ghostflame",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Explosive_Ghostflame",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 深根底层；Acquired from defeating 菲雅的英雄s.",
    "details": "Guaranteed Drop: Deeproot Depths；Acquired from defeating Fia's Champions.",
    "sourceTitle": "Fia's Mist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fia's_Mist",
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
    "summary": "敌人 / 首领掉落：亚坛高原,(威达姆废墟)；Drop: From the 提比亚的唤声船 miniboss rowing through the waters.",
    "details": "Altus Plateau,(Wyndham Ruins)；Drop: From the Tibia Mariner miniboss rowing through the waters.",
    "sourceTitle": "Tibia's Summons",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Tibia's_Summons",
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
    "summary": "商店购买：Trade the Remembrance of the Lichdragon, gained by defeating “死龙”弗尔桑克斯, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Lichdragon, gained by defeating Lichdragon Fortissax, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Death Lightning",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Death_Lightning",
    "verified": true
  },
  "goods:5100": {
    "kind": "sorcery",
    "itemId": 5100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：希芙拉河 region: ，位于 ruins 附近 the 雾林 entrance (希芙拉河的入口井) to the underground region. It's on top of the large, broken statue. To get to it, head to the next level up ，位于 ruins, then carefully traverse the ruins' beams to get to the area above the statue, drop down on the Teardrop Scarab and kill it to get the drop.",
    "details": "Siofra River region: in the ruins near the Mistwood entrance (Siofra River Well) to the underground region. It's on top of the large, broken statue. To get to it, head to the next level up in the ruins, then carefully traverse the ruins' beams to get to the area above the statue, drop down on the Teardrop Scarab and kill it to get the drop.",
    "sourceTitle": "Oracle Bubbles",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Oracle_Bubbles",
    "verified": true
  },
  "goods:5110": {
    "kind": "sorcery",
    "itemId": 5110,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 希芙拉河；Acquired from felling a Scarab surrounded by Claymen inside of a large building on the southwestern quarter of the level with the 龙人士兵.",
    "details": "Guaranteed Drop: Siofra River；Acquired from felling a Scarab surrounded by Claymen inside of a large building on the southwestern quarter of the level with the Dragonkin Soldier.The level can be accessed from Siofra river through a Portal found on some ruins south of the Worshippers' Woods Site of Grace.It can also be accessed from above, from Nokron, through the use of some careful platforming on the northeastern end of the long bridge after the Mimic Tear bossfight.",
    "sourceTitle": "Great Oracular Bubble",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Great_Oracular_Bubble",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 600 卢恩 by 圣职人员柯林.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 600 Runes by Brother Corhyn.Should Corhyn die before purchasing this incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.Starting equipment for the Prophet Origin.",
    "sourceTitle": "Catch Flame",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Catch_Flame",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 6,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the 火 Monks' Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 6,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Fire Monks' Prayerbook.Should the prayerbook be given to one of them and then that instructor die before purchasing this incantation, the player can still purchase it from the Twin Maiden Husks for the same price after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "O, Flame!",
    "sourceUrl": "https://eldenring.fandom.com/wiki/O%2C_Flame!",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 800 卢恩 by 圣职人员柯林.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 800 Runes by Brother Corhyn.Should Corhyn die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.",
    "sourceTitle": "Flame Sling",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flame_Sling",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 10,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Giant's Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 10,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Giant's Prayerbook.Should the prayerbook be given to one of them and that instructor die before purchasing this Incantation, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Flame, Fall Upon Them",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flame%2C_Fall_Upon_Them",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：盖利德；击杀后掉落： a Teardrop Scarab in northern 盖利德, between the 奇列姆废墟 and the 腐败旁露台 sites of 赐福. The scarab is located right behind the black carriage containing the 大剑.",
    "details": "Loot: Caelid；Dropped by a Teardrop Scarab in northern Caelid, between the Caelem Ruins and the Rotview Balcony sites of grace. The scarab is located right behind the black carriage containing the Greatsword.",
    "sourceTitle": "Whirl, O Flame!",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Whirl%2C_O_Flame!",
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
    "summary": "地图拾取 / 宝箱：拾取：湖之利耶尼亚；Flame, Cleanse Me can be looted from a corpse ，地点： the 火 Monk campsite located south of the 结缘教堂 in eastern Liurnia.",
    "details": "Loot: Liurnia of the Lakes；Flame, Cleanse Me can be looted from a corpse at the Fire Monk campsite located south of the Church of Vows in eastern Liurnia.",
    "sourceTitle": "Flame, Cleanse Me",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flame%2C_Cleanse_Me",
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
    "summary": "地图拾取 / 宝箱：This incantation can be located on a body behind/on the eastern side of 盖尔要塞 in 盖利德. It is guarded by two Flame Chariots.",
    "details": "This incantation can be located on a body behind/on the eastern side of Fort Gael in Caelid. It is guarded by two Flame Chariots.",
    "sourceTitle": "Flame, Grant Me Strength",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flame%2C_Grant_Me_Strength",
    "verified": true
  },
  "goods:6060": {
    "kind": "incantation",
    "itemId": 6060,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：巨人山顶；Flame, Protect Me can be 位于 the 巨人战争的英雄墓地 ，位于 巨人山顶. It is located behind an imp statue fog wall right next to the dungeon's 赐福. One 石剑钥匙 is required to access it.",
    "details": "Loot: Mountaintops of the Giants；Flame, Protect Me can be found in the Giant-Conquering Hero's Grave in the Mountaintops of the Giants. It is located behind an imp statue fog wall right next to the dungeon's grace. One Stonesword Key is required to access it.",
    "sourceTitle": "Flame, Protect Me",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flame%2C_Protect_Me",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 13,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Giant's Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 13,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Giant's Prayerbook.Should the prayerbook be given to one of them and that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Giantsflame Take Thee",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Giantsflame_Take_Thee",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Received upon defeating “盗火”亚当, the boss trapped ，位于 小偷的封印监牢.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Received upon defeating Adan, Thief of Fire, the boss trapped in the Malefactor's Evergaol.",
    "sourceTitle": "Flame of the Fell God",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flame_of_the_Fell_God",
    "verified": true
  },
  "goods:6120": {
    "kind": "incantation",
    "itemId": 6120,
    "sourceKind": "shop",
    "summary": "商店购买：Trade the Remembrance of the 火焰巨人, gained by defeating the 火焰巨人, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Fire Giant, gained by defeating the Fire Giant, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Burn, O Flame!",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Burn%2C_O_Flame!",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 7,500 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Godskin Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 7,500 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Godskin Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Black Flame",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Flame",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 5,500 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the 火 Monks' Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 5,500 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Fire Monks' Prayerbook.Should the prayerbook be given to one of them and then that instructor die before purchasing this Incantation, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Surge, O Flame!",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Surge%2C_O_Flame!",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Scouring Black Flame is received upon defeating the 神皮使徒 ，地点： 风车村多明努拉, on the 亚坛高原.",
    "details": "Guaranteed Drop: Altus Plateau；Scouring Black Flame is received upon defeating the Godskin Apostle at Dominula, Windmill Village, on the Altus Plateau.",
    "sourceTitle": "Scouring Black Flame",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scouring_Black_Flame",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 巨人山顶；Black Flame Ritual is received upon defeating the 唤灵蜗牛 boss in 唤灵洞窟 on the 巨人山顶. This Snail summons the spirits of a 神皮使徒 and a 神皮贵族.",
    "details": "Guaranteed Drop: Mountaintops of the Giants；Black Flame Ritual is received upon defeating the Spiritcaller Snail boss in Spiritcaller Cave on the Mountaintops of the Giants. This Snail summons the spirits of a Godskin Apostle and a Godskin Noble.",
    "sourceTitle": "Black Flame Ritual",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Flame_Ritual",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 6,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Godskin Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 6,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Godskin Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, the player can still purchase it from the Twin Maiden Husks for the same price after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Black Flame Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Flame_Blade",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂；Acquired from “百智爵士”基甸·奥夫尼尔 后 selecting the \"about the secret medallion\" dialogue option. This option will only appear 后 the player has obtained both the Haligtree Secret Medallion (右) and Haligtree Secret Medallion (左).",
    "details": "Purchase: Roundtable Hold；Acquired from Sir Gideon Ofnir, the All-Knowing after selecting the \"about the secret medallion\" dialogue option. This option will only appear after the player has obtained both the Haligtree Secret Medallion (Right) and Haligtree Secret Medallion (Left).Can be purchased from the Twin Maiden Husks for 2,500 Runes should the player not talk to Gideon about both medallions before unleashing the Rune of Death.",
    "sourceTitle": "Black Flame's Protection",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Flame's_Protection",
    "verified": true
  },
  "goods:6270": {
    "kind": "incantation",
    "itemId": 6270,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 火山官邸；Noble Presence is acquired by defeating the 神皮贵族 位于 ，地点： the 艾格蕾教堂 on 格密尔火山.",
    "details": "Guaranteed Drop: Volcano Manor；Noble Presence is acquired by defeating the Godskin Noble found at the Temple of Eiglay on Mt. Gelmir.",
    "sourceTitle": "Noble Presence",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Noble_Presence",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 弃置恶兆的地底；Acquired from defeating “恶兆之子”蒙格 ，地点： the 弃置恶兆的大教堂.",
    "details": "Guaranteed Drop: Subterranean Shunning-Grounds；Acquired from defeating Mohg, the Omen at the Cathedral of the Forsaken.",
    "sourceTitle": "Bloodflame Talons",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodflame_Talons",
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
    "summary": "商店购买：Trade the Remembrance of the 血 Lord, 击杀后掉落： “鲜血君王”蒙格, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Blood Lord, dropped by Mohg, Lord of Blood, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Bloodboon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodboon",
    "verified": true
  },
  "goods:6320": {
    "kind": "incantation",
    "itemId": 6320,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a Scarab northwest of 蔷薇教堂.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Scarab northwest of Rose Church.",
    "sourceTitle": "Bloodflame Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodflame_Blade",
    "verified": true
  },
  "goods:6330": {
    "kind": "incantation",
    "itemId": 6330,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 王城罗德尔；Drops from an invisible Scarab rolling back and forth on the path patrolled by a Crucible Tree 剑士, north of the 黄金树大教堂 赐福, past the elevator downwards.",
    "details": "Guaranteed Drop: Leyndell, Royal Capital；Drops from an invisible Scarab rolling back and forth on the path patrolled by a Crucible Tree Knight, north of the Erdtree Sanctuary Site of Grace, past the elevator downwards.<font color=\"red\">WARNING:</font> If Maliketh, the Black Blade is defeated before this incantation is acquired it becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Barrier of Gold",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Barrier_of_Gold",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；防具 of the Erdtree is obtained upon defeating a Teardrop Scarab located on a square platform upon a hill southeast of the 移送罪人之路（路旁） 赐福.",
    "details": "Guaranteed Drop: Altus Plateau；Protection of the Erdtree is obtained upon defeating a Teardrop Scarab located on a square platform upon a hill southeast of the Road of Iniquity Side Path Site of Grace.",
    "sourceTitle": "Protection of the Erdtree",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Protection_of_the_Erdtree",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 1,500 卢恩 by 圣职人员柯林.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 1,500 Runes by Brother Corhyn.Should Corhyn die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.",
    "sourceTitle": "Rejection",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rejection",
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
    "summary": "地图拾取 / 宝箱：拾取：亚坛高原；位于 a 宝箱 ，位于 cellar of 森林之民的废墟. The cellar is located in a cluster of ruins ，位于 southeasternmost quarter of the forest.",
    "details": "Loot: Altus Plateau；Found in a treasure chest in the cellar of Woodfolk Ruins. The cellar is located in a cluster of ruins in the southeasternmost quarter of the forest.",
    "sourceTitle": "Wrath of Gold",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Wrath_of_Gold",
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
    "summary": "商店购买：Equipped:；Urgent Heal is a starting spell ，用于 the 密使 origin.",
    "details": "Equipped:；Urgent Heal is a starting spell for the Confessor origin.Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Urgent Heal is sold for 1,000 Runes by Brother Corhyn.Should Corhyn die before purchasing this incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.",
    "sourceTitle": "Urgent Heal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Urgent_Heal",
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
    "summary": "商店购买：Equipped:；Heal is a starting spell ，用于 the 预言家 origin.",
    "details": "Equipped:；Heal is a starting spell for the Prophet origin.Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 1,500 Runes by Brother Corhyn.Should Corhyn die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price after giving them Corhyn's Bell Bearing.",
    "sourceTitle": "Heal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Heal",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 9,000 卢恩 by 圣职人员柯林 后 he moves to 亚坛高原.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 9,000 Runes by Brother Corhyn after he moves to Altus Plateau.Should Corhyn die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price after giving them Corhyn's Bell Bearing.<font color=\"red\">WARNING:</font> If the player lights the Forge of the Giants before this incantation appears in Corhyn's inventory, it will become unavailable for that character until a new Journey is started.",
    "sourceTitle": "Great Heal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Great_Heal",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 8,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶, 后 giving either of them the Two Fingers' Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 8,000 Runes by Brother Corhyn or Miriel, Pastor of Vows, after giving either of them the Two Fingers' Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this incantation, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's bell bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Lord's Heal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lord's_Heal",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：灰城罗德尔；Erdtree Heal is located 附近 the 女王闺阁 赐福 in Leyndell 后 defeating “黑剑”玛利喀斯.",
    "details": "Loot: Leyndell, Ashen Capital；Erdtree Heal is located near the Queen's Bedchamber Site of Grace in Leyndell after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Erdtree Heal",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Erdtree_Heal",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚；Blessing's Boon is 由 “结缘牧师”米利耶 ，用于 4,000 卢恩.",
    "details": "Purchase: Liurnia of the Lakes；Blessing's Boon is sold by Miriel, Pastor of Vows for 4,000 Runes.Should Miriel die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Miriel's Bell Bearing.",
    "sourceTitle": "Blessing's Boon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blessing's_Boon",
    "verified": true
  },
  "goods:6431": {
    "kind": "incantation",
    "itemId": 6431,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：王城罗德尔；Blessing of the Erdtree is located 附近 the 女王闺阁 赐福 in Leyndell, on the 亚坛高原.",
    "details": "Loot: Leyndell, Royal Capital；Blessing of the Erdtree is located near the Queen's Bedchamber Site of Grace in Leyndell, on the Altus Plateau.<font color=\"red\">WARNING:</font> This item is no longer obtainable after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Blessing of the Erdtree",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blessing_of_the_Erdtree",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Cure 毒 is sold ，用于 800 卢恩 by 圣职人员柯林.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Cure Poison is sold for 800 Runes by Brother Corhyn.Should Corhyn die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.",
    "sourceTitle": "Cure Poison",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cure_Poison",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Lord's Aid is sold ，用于 2,500 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Two Fingers' Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Lord's Aid is sold for 2,500 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Two Fingers' Prayerbook.Should the prayerbook be given to one of them and then that instructor die before purchasing this Incantation, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Lord's Aid",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lord's_Aid",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 3,000 卢恩 by 圣职人员柯林.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 3,000 Runes by Brother Corhyn.Should Corhyn die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.",
    "sourceTitle": "Flame Fortification",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Flame_Fortification",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 3,500 卢恩 by 圣职人员柯林.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 3,500 Runes by Brother Corhyn.Should Corhyn die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.",
    "sourceTitle": "Magic Fortification",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Magic_Fortification",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 7,500 卢恩 by 圣职人员柯林 后 he moves to 亚坛高原.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 7,500 Runes by Brother Corhyn after he moves to Altus Plateau.Should Corhyn die before purchasing this Incantation from him, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.<font color=\"red\">WARNING:</font> If the player lights the Forge of the Giants before this incantation appears in Corhyn's inventory, it will become unavailable for that character until a new Journey is started.",
    "sourceTitle": "Lightning Fortification",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lightning_Fortification",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 啜泣半岛；Divine Fortification is obtained upon defeating the Teardrop Scarab 位于 atop a fallen ruin 附近 the 灵庙原野的废墟.",
    "details": "Guaranteed Drop: Weeping Peninsula；Divine Fortification is obtained upon defeating the Teardrop Scarab found atop a fallen ruin near the Tombsward Ruins.",
    "sourceTitle": "Divine Fortification",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Fortification",
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
    "sourceKind": "shop",
    "summary": "商店购买：Quest Item / Purchase: 圆桌厅堂；Received from Gideon 后 discussing the haligtree roots, once “米凯拉的锋刃”玛莲妮亚 has been defeated.",
    "details": "Quest Item / Purchase: Roundtable Hold；Received from Gideon after discussing the haligtree roots, once Malenia, Blade of Miquella has been defeated.Can be purchased from the Twin Maiden Husks for 3,500 Runes if the player does not talk to Gideon about the roots before unleashing the Rune of Death.",
    "sourceTitle": "Lord's Divine Fortification",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lord's_Divine_Fortification",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 盖利德 / 圆桌厅堂；Sold ，用于 5,000 卢恩 by 贤者格威 后 he has repaired the snapped Unalloyed Gold Needle.",
    "details": "Purchase: Caelid / Roundtable Hold；Sold for 5,000 Runes by Sage Gowry after he has repaired the snapped Unalloyed Gold Needle.Should Gowry die before purchasing this Sorcery from him, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Gowry's Bell Bearing.",
    "sourceTitle": "Night Maiden's Mist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Night_Maiden's_Mist",
    "verified": true
  },
  "goods:6510": {
    "kind": "incantation",
    "itemId": 6510,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Starting spell ，用于 the 密使 origin.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Starting spell for the Confessor origin.Sold for 2,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Assassin's Prayerbook.Should the prayerbook be given to one of them and then that instructor die before purchasing this Incantation, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Assassin's Approach",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Assassin's_Approach",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：弃置恶兆的地底；Shadow Bait is 位于 on a corpse guarded by an Omen, past the large gate to the right of the 地底大道旁 赐福.",
    "details": "Loot: Subterranean Shunning-Grounds；Shadow Bait is found on a corpse guarded by an Omen, past the large gate to the right of the Underground Roadside Site of Grace.If the gate is locked, take the ladder ahead and to the left of the Grace, then continue to the doorway on the far right of the room filled with pipes.",
    "sourceTitle": "Shadow Bait",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Shadow_Bait",
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
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 3,500 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Assassin's Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 3,500 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Assassin's Prayerbook.Should the prayerbook be given to one of them and that instructor die before purchasing this Incantation, the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook, this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Darkness",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Darkness",
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
    "summary": "地图拾取 / 宝箱：拾取：格密尔火山；Located inside the 飘尸臭的破屋 east of the broken stone bridge on the 移送罪人之路. “吞噬褪色者”安娜塔西亚 will also invade ，地点： this same spot.",
    "details": "Loot: Mt. Gelmir；Located inside the Corpse-Stench Shack east of the broken stone bridge on the Road of Iniquity. Anastasia, Tarnished-Eater will also invade at this same spot.",
    "sourceTitle": "Golden Vow",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Golden_Vow",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 11,000 卢恩 by 圣职人员柯林 后 he moves to Goldmask's location in Altus.",
    "details": "Purchase: Roundtable Hold / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 11,000 Runes by Brother Corhyn after he moves to Goldmask's location in Altus.Should Corhyn die before purchasing this incantation after moving to Goldmask's location, then the player can still purchase it from the Twin Maiden Husks for the same price after giving them Corhyn's Bell Bearing.<font color=\"red\">WARNING:</font> If Corhyn dies before this incantation appears in his inventory then it will become unavailable for that character until a new Journey is started.",
    "sourceTitle": "Discus of Light",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Discus_of_Light",
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
    "summary": "地图拾取 / 宝箱：拾取：“圣树分枝”艾布雷菲尔；位于 a 宝箱 in a room locked by an Imp Statue located ，地点： the lower level 附近 the 祈祷室 赐福.",
    "details": "Loot: Elphael, Brace of the Haligtree；Found in a treasure chest in a room locked by an Imp Statue located at the lower level near the Prayer Room Site of Grace.",
    "sourceTitle": "Triple Rings of Light",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Triple_Rings_of_Light",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 7,500 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Golden Order Principia.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 7,500 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Golden Order Principia.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Radagon's Rings of Light",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radagon's_Rings_of_Light",
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
    "summary": "地图拾取 / 宝箱：拾取：深根底层；Elden Stars can be looted from a body ，地点： the end of a cave filled with giant ants ，位于 深根底层, located immediately west of the 大瀑布顶端 赐福, 后 climbing up one of the large roots.",
    "details": "Loot: Deeproot Depths；Elden Stars can be looted from a body at the end of a cave filled with giant ants in the Deeproot Depths, located immediately west of the Great Waterfall Crest grace, after climbing up one of the large roots.",
    "sourceTitle": "Elden Stars",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Elden_Stars",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 10,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Golden Order Principia.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 10,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Golden Order Principia.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving them the prayerbook then this incantation becomes unavailable for that character for the rest of that Journey.",
    "sourceTitle": "Law of Regression",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Law_of_Regression",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 王城罗德尔 / 巨人山顶；由 圣职人员柯林 ，用于 10,000 卢恩 后 telling Goldmask that Radagon is Marika.",
    "details": "Purchase: Roundtable Hold / Leyndell, Royal Capital / Mountaintops of the Giants；Sold by Brother Corhyn for 10,000 Runes after telling Goldmask that Radagon is Marika.Should Corhyn die but before purchasing this Incantation after solving Goldmask's puzzle, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them Corhyn's Bell Bearing.<font color=\"red\">WARNING:</font> If Corhyn dies before this incantation appears in his inventory then it will become unavailable for that character until a new Journey is started.",
    "sourceTitle": "Immutable Shield",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Immutable_Shield",
    "verified": true
  },
  "goods:6750": {
    "kind": "incantation",
    "itemId": 6750,
    "sourceKind": "shop",
    "summary": "商店购买：由 “狩猎死亡”Ｄ ，用于 2500 卢恩.",
    "details": "Sold by D, Hunter of the Dead for 2500 runes.",
    "sourceTitle": "Litany of Proper Death",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Litany_of_Proper_Death",
    "verified": true
  },
  "goods:6760": {
    "kind": "incantation",
    "itemId": 6760,
    "sourceKind": "shop",
    "summary": "商店购买：由...赠予 “百智爵士”基甸·奥夫尼尔 后 defeating “鲜血君王”蒙格 and choosing to talk \"About the Lord of 血's Cocoon\".Can also be bought from the 孪生老妪 ，用于 5,000 卢恩 后 defeating “黑剑”玛利喀斯.",
    "details": "Given by Sir Gideon Ofnir, the All-Knowing after defeating Mohg, Lord of Blood and choosing to talk \"About the Lord of Blood's Cocoon\".Can also be bought from the Twin Maiden Husks for 5,000 Runes after defeating Maliketh, the Black Blade.",
    "sourceTitle": "Law of Causality",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Law_of_Causality",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂；由 “狩猎死亡”Ｄ ，用于 3,000 卢恩 后 initiating his quest ，地点： the 圆桌厅堂.",
    "details": "Purchase: Roundtable Hold；Sold by D, Hunter of the Dead for 3,000 Runes after initiating his quest at the Roundtable Hold.",
    "sourceTitle": "Order's Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Order's_Blade",
    "verified": true
  },
  "goods:6780": {
    "kind": "incantation",
    "itemId": 6780,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: “永恒之城”诺克隆恩；Drops from a Scarab 位于 the circular room ，位于 southeastern quarter of 希芙拉导水桥, past the Crucible Tree 剑士.",
    "details": "Guaranteed Drop: Nokron, Eternal City；Drops from a Scarab found in the circular room in the southeastern quarter of Siofra Aqueduct, past the Crucible Tree Knight.",
    "sourceTitle": "Order Healing",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Order_Healing",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Quest Item: 桂奥尔龙墓；Bestial Sling is rewarded from Gurranq 后 giving him the second Deathroot.",
    "details": "Quest Item: Greyoll's Dragonbarrow；Bestial Sling is rewarded from Gurranq after giving him the second Deathroot.",
    "sourceTitle": "Bestial Sling",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bestial_Sling",
    "verified": true
  },
  "goods:6810": {
    "kind": "incantation",
    "itemId": 6810,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Quest Item: 野兽神殿, 桂奥尔龙墓；Stone of Gurranq is rewarded from Gurranq 后 giving him the sixth Deathroot. (However, only 后 Gurranq has been calmed down 后 he turns hostile on the player's return to him 后 consuming the fourth Deathroot.)",
    "details": "Quest Item: Bestial Sanctum, Greyoll's Dragonbarrow；Stone of Gurranq is rewarded from Gurranq after giving him the sixth Deathroot. (However, only after Gurranq has been calmed down after he turns hostile on the player's return to him after consuming the fourth Deathroot.)",
    "sourceTitle": "Stone of Gurranq",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Stone_of_Gurranq",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Beast Claw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Beast_Claw",
    "verified": false
  },
  "goods:6830": {
    "kind": "incantation",
    "itemId": 6830,
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Quest Item: 野兽神殿, 桂奥尔龙墓；Gurranq's 兽爪 is rewarded from Gurranq 后 giving him the eight Deathroot. (However, only 后 Gurranq has been calmed down 后 he turns hostile on the player's return to him 后 consuming the fourth Deathroot.)",
    "details": "Quest Item: Bestial Sanctum, Greyoll's Dragonbarrow；Gurranq's Beast Claw is rewarded from Gurranq after giving him the eight Deathroot. (However, only after Gurranq has been calmed down after he turns hostile on the player's return to him after consuming the fourth Deathroot.)",
    "sourceTitle": "Gurranq's Beast Claw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gurranq's_Beast_Claw",
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
    "summary": "任务 / 事件奖励：Quest Item: 野兽神殿, 桂奥尔龙墓；Bestial 抗死度 is rewarded from Gurranq 后 giving him the third Deathroot.",
    "details": "Quest Item: Bestial Sanctum, Greyoll's Dragonbarrow；Bestial Vitality is rewarded from Gurranq after giving him the third Deathroot.",
    "sourceTitle": "Bestial Vitality",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bestial_Vitality",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 桂奥尔龙墓；Bestial Constitution drops from a Scarab 附近 the western cliffs on the southern side of 法姆大桥.",
    "details": "Guaranteed Drop: Greyoll's Dragonbarrow；Bestial Constitution drops from a Scarab near the western cliffs on the southern side of Farum Greatbridge.",
    "sourceTitle": "Bestial Constitution",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bestial_Constitution",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 6,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Dragon Cult Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 6,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Dragon Cult Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Lightning Spear",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lightning_Spear",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 10,500 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Ancient Dragon Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 10,500 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Ancient Dragon Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Ancient Dragons' Lightning Strike",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ancient_Dragons'_Lightning_Strike",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 啜泣半岛；雷 打击 is received upon defeating the Scarab ，地点： the bottom of the ravine splitting the 啜泣半岛 region in half. The stone platforms on either side of this can be used to descend safely. Note that it's surrounded by large bats and that lightning strikes constantly hit around this area.",
    "details": "Guaranteed Drop: Weeping Peninsula；Lightning Strike is received upon defeating the Scarab at the bottom of the ravine splitting the Weeping Peninsula region in half. The stone platforms on either side of this can be used to descend safely. Note that it's surrounded by large bats and that lightning strikes constantly hit around this area.",
    "sourceTitle": "Lightning Strike",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lightning_Strike",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 安瑟尔河；Frozen 雷 矛 is acquired 后 defeating the 诺克史黛拉的龙人士兵.",
    "details": "Guaranteed Drop: Ainsel River；Frozen Lightning Spear is acquired after defeating the Dragonkin Soldier of Nokstella.",
    "sourceTitle": "Frozen Lightning Spear",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Frozen_Lightning_Spear",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 7,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Dragon Cult Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 7,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Dragon Cult Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Honed Bolt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Honed_Bolt",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 8,500 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Ancient Dragon Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 8,500 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Ancient Dragon Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Ancient Dragons' Lightning Spear",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ancient_Dragons'_Lightning_Spear",
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
    "summary": "商店购买：Trade the Remembrance of the Lichdragon, gained by defeating “死龙”弗尔桑克斯, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Lichdragon, gained by defeating Lichdragon Fortissax, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Fortissax's Lightning Spear",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fortissax's_Lightning_Spear",
    "verified": true
  },
  "goods:6950": {
    "kind": "incantation",
    "itemId": 6950,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Lansseax's Glaive is 通过...获得 defeating “古龙”兰斯桑克斯 on the 亚坛高原, south of the 城墙旁小径 赐福 outside of the wall to the 王城外围.",
    "details": "Lansseax's Glaive is obtained by defeating Ancient Dragon Lansseax on the Altus Plateau, south of the Rampartside Path site of grace outside of the wall to the Capital Outskirts.",
    "sourceTitle": "Lansseax's Glaive",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lansseax's_Glaive",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 圆桌厅堂 / 湖之利耶尼亚 / 亚坛高原 / 王城罗德尔 / 巨人山顶；Sold ，用于 4,000 卢恩 by 圣职人员柯林 or “结缘牧师”米利耶 后 giving either of them the Dragon Cult Prayerbook.",
    "details": "Purchase: Roundtable Hold / Liurnia of the Lakes / Altus Plateau / Leyndell, Royal Capital / Mountaintops of the Giants；Sold for 4,000 Runes by Brother Corhyn or Miriel, Pastor of Vows after giving either of them the Dragon Cult Prayerbook.Should the prayerbook be given to one of them and then have that instructor die before purchasing this Incantation, then the player can still purchase it from the Twin Maiden Husks for the same price, after giving them the respective tutor's Bell Bearing.<font color=\"red\">WARNING:</font> Should both Corhyn and Miriel die before giving either of them the prayerbook then this incantation becomes unavailable for that character until a new Journey is started.",
    "sourceTitle": "Electrify Armament",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Electrify_Armament",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 巨人山顶；Vyke's Dragonbolt is acquired from the 击败 of “圆桌骑士”维克 ，位于 准王者的封印监牢.",
    "details": "Guaranteed Drop: Mountaintops of the Giants；Vyke's Dragonbolt is acquired from the defeat of Roundtable Knight Vyke in the Lord Contender's Evergaol.",
    "sourceTitle": "Vyke's Dragonbolt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vyke's_Dragonbolt",
    "verified": true
  },
  "goods:6971": {
    "kind": "incantation",
    "itemId": 6971,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：亚坛高原；Dragonbolt Blessing is 位于 a 宝箱 within 唤雷教堂.",
    "details": "Loot: Altus Plateau；Dragonbolt Blessing is found in a treasure chest within Stormcaller Church.",
    "sourceTitle": "Dragonbolt Blessing",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragonbolt_Blessing",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 宁姆格福 / 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨教堂 in 宁姆格福, the 龙飨大教堂 in 盖利德, or the 龙飨大祭坛 on the 尖刺山 ，用于 1 Dragon Heart.",
    "details": "Dragon Communion: Limgrave / Caelid / Jagged Peak；Acquired from the altar at the Church of Dragon Communion in Limgrave, the Cathedral of Dragon Communion in Caelid, or the Grand Altar of Dragon Communion on the Jagged Peak for 1 Dragon Heart.",
    "sourceTitle": "Dragonfire",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragonfire",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：龙飨: 盖利德；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 ，用于 2 Dragon Hearts 后 defeating “飞龙”亚基尔.",
    "details": "Dragon Communion: Caelid；Acquired from the altar at the Cathedral of Dragon Communion in Caelid for 2 Dragon Hearts after defeating Flying Dragon Agheel.",
    "sourceTitle": "Agheel's Flame",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Agheel's_Flame",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：龙飨: 宁姆格福 / 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨教堂 in 宁姆格福, 龙飨大教堂 in 盖利德, and the 龙飨大祭坛 on the 尖刺山 ，用于 1 Dragon Heart 后 defeating the 熔岩土龙 south of 莱多要塞 ，地点： 格密尔火山.",
    "details": "Dragon Communion: Limgrave / Caelid / Jagged Peak；Acquired from the altar at the Church of Dragon Communion in Limgrave, Cathedral of Dragon Communion in Caelid, and the Grand Altar of Dragon Communion on the Jagged Peak for 1 Dragon Heart after defeating the Magma Wyrm south of Fort Laiedd at Mt. Gelmir.",
    "sourceTitle": "Magma Breath",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Magma_Breath",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：龙飨: 宁姆格福 / 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨教堂 in 宁姆格福, the 龙飨大教堂 in 盖利德, and the 龙飨大祭坛 on the 尖刺山 ，用于 2 Dragon Hearts 后 defeating “大土龙”席欧朵利克 in 化圣雪原.",
    "details": "Dragon Communion: Limgrave / Caelid / Jagged Peak；Acquired from the altar at the Church of Dragon Communion in Limgrave, the Cathedral of Dragon Communion in Caelid, and the Grand Altar of Dragon Communion on the Jagged Peak for 2 Dragon Hearts after defeating Great Wyrm Theodorix in Consecrated Snowfield.",
    "sourceTitle": "Theodorix's Magma",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Theodorix's_Magma",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 ，用于 1 Dragon Heart.",
    "details": "Dragon Communion: Caelid / Jagged Peak；Acquired from the altar at the Cathedral of Dragon Communion in Caelid for 1 Dragon Heart.",
    "sourceTitle": "Dragonice",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragonice",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：龙飨: 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 and the 龙飨大祭坛 on the 尖刺山 ，用于 2 Dragon Hearts 后 defeating “冻结冰雾”玻列琉斯 on the 巨人山顶.",
    "details": "Dragon Communion: Caelid / Jagged Peak；Acquired from the altar at the Cathedral of Dragon Communion in Caelid and the Grand Altar of Dragon Communion on the Jagged Peak for 2 Dragon Hearts after defeating Borealis the Freezing Fog on the Mountaintops of the Giants.",
    "sourceTitle": "Borealis's Mist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Borealis's_Mist",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 and the 龙飨大祭坛 on the 尖刺山 ，用于 1 Dragon Heart.",
    "details": "Dragon Communion: Caelid / Jagged Peak；Acquired from the altar at the Cathedral of Dragon Communion in Caelid and the Grand Altar of Dragon Communion on the Jagged Peak for 1 Dragon Heart.",
    "sourceTitle": "Rotten Breath",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Breath",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：龙飨: 盖利德；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 ，用于 2 Dragon Hearts 后 defeating “步入腐败”艾格基斯 in 盖利德.",
    "details": "Dragon Communion: Caelid；Acquired from the altar at the Cathedral of Dragon Communion in Caelid for 2 Dragon Hearts after defeating Decaying Ekzykes in Caelid.",
    "sourceTitle": "Ekzykes's Decay",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ekzykes's_Decay",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 盖利德；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 ，用于 1 Dragon Heart.",
    "details": "Dragon Communion: Caelid；Acquired from the altar at the Cathedral of Dragon Communion in Caelid for 1 Dragon Heart.",
    "sourceTitle": "Glintstone Breath",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Breath",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：龙飨: 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 ，用于 2 Dragon Hearts 后 defeating “辉石龙”史玛拉格 north of 教堂区 in Liurnia.",
    "details": "Dragon Communion: Caelid / Jagged Peak；Acquired from the altar at the Cathedral of Dragon Communion in Caelid for 2 Dragon Hearts after defeating Glintstone Dragon Smarag north of Temple Quarter in Liurnia.",
    "sourceTitle": "Smarag's Glintstone Breath",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Smarag's_Glintstone_Breath",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Placidusax's Ruin",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Placidusax's_Ruin",
    "verified": false
  },
  "goods:7060": {
    "kind": "incantation",
    "itemId": 7060,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 宁姆格福 / 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨教堂 in 宁姆格福, the 龙飨大教堂 in 盖利德, or the 龙飨大祭坛 ，位于 幽影之地 ，用于 1 Dragon Heart.",
    "details": "Dragon Communion: Limgrave / Caelid / Jagged Peak；Acquired from the altar at the Church of Dragon Communion in Limgrave, the Cathedral of Dragon Communion in Caelid, or the Grand Altar of Dragon Communion in the Realm of Shadow for 1 Dragon Heart.",
    "sourceTitle": "Dragonclaw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragonclaw",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 宁姆格福 / 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨教堂 in 宁姆格福, the 龙飨大教堂 in 盖利德, or the 龙飨大祭坛 ，位于 幽影之地 ，用于 1 Dragon Heart.",
    "details": "Dragon Communion: Limgrave / Caelid / Jagged Peak；Acquired from the altar at the Church of Dragon Communion in Limgrave, the Cathedral of Dragon Communion in Caelid, or the Grand Altar of Dragon Communion in the Realm of Shadow for 1 Dragon Heart.",
    "sourceTitle": "Dragonmaw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragonmaw",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 盖利德；Acquired from the altar ，地点： the 龙飨大教堂 in 盖利德 ，用于 3 Dragon Hearts 后 felling Elder Dragon Greyoll.",
    "details": "Dragon Communion: Caelid；Acquired from the altar at the Cathedral of Dragon Communion in Caelid for 3 Dragon Hearts after felling Elder Dragon Greyoll.",
    "sourceTitle": "Greyoll's Roar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greyoll's_Roar",
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
    "summary": "商店购买：Quest Item / Purchase: 盖利德；Sold ，用于 7,500 卢恩 by 贤者格威 后 giving 米莉森 the Valkyrie's Prosthesis.",
    "details": "Quest Item / Purchase: Caelid；Sold for 7,500 Runes by Sage Gowry after giving Millicent the Valkyrie's Prosthesis.",
    "sourceTitle": "Pest Threads",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pest_Threads",
    "verified": true
  },
  "goods:7210": {
    "kind": "incantation",
    "itemId": 7210,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：蒙格温王朝；Located on a corpse ，地点： the end of one of the caves 位于 the northeastern quarter of the lake of blood.",
    "details": "Loot: Mohgwyn Palace；Located on a corpse at the end of one of the caves found in the northeastern quarter of the lake of blood.",
    "sourceTitle": "Swarm of Flies",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Swarm_of_Flies",
    "verified": true
  },
  "goods:7220": {
    "kind": "incantation",
    "itemId": 7220,
    "sourceKind": "shop",
    "summary": "商店购买：拾取：毒 Mist is obtained upon defeating a Teardrop Scarab ，位于 eastern 啜泣半岛 forest area south of the 流浪民族的商人 (east of the pillar where the 啜泣半岛 map is 位于).",
    "details": "Loot: Poison Mist is obtained upon defeating a Teardrop Scarab in the eastern Weeping Peninsula forest area south of the Nomadic Merchant (east of the pillar where the Weeping Peninsula map is found).",
    "sourceTitle": "Poison Mist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Poison_Mist",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Drop: 毒 Armament is received upon defeating an invisible Scarab roaming around south of 瑟利亚结晶坑道, along the 艾奥尼亚沼泽 area in 盖利德.",
    "details": "Drop: Poison Armament is received upon defeating an invisible Scarab roaming around south of Sellia Crystal Tunnel, along the Swamp of Aeonia area in Caelid.",
    "sourceTitle": "Poison Armament",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Poison_Armament",
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
    "summary": "商店购买：Trade the Remembrance of the Rot Goddess, gained by defeating “米凯拉的锋刃”玛莲妮亚, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Rot Goddess, gained by defeating Malenia, Blade of Miquella, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums with a bell to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Scarlet Aeonia",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Scarlet_Aeonia",
    "verified": true
  },
  "goods:7300": {
    "kind": "incantation",
    "itemId": 7300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：弃置恶兆的地底；Inescapable Frenzy is 位于 on top of a coffin 附近 the bottom of the 癫火封印 which can be reached 后 defeating “恶兆之子”蒙格.",
    "details": "Loot: Subterranean Shunning-Grounds；Inescapable Frenzy is found on top of a coffin near the bottom of the Frenzied Flame Proscription which can be reached after defeating Mohg, the Omen.",
    "sourceTitle": "Inescapable Frenzy",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Inescapable_Frenzy",
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
    "summary": "地图拾取 / 宝箱：拾取：啜泣半岛；The Flame of Frenzy is 位于 on a corpse ，位于 卡尔洗礼教堂 附近 the 癫火村, located ，位于 middle of the 啜泣半岛.",
    "details": "Loot: Weeping Peninsula；The Flame of Frenzy is found on a corpse in the Callu Baptismal Church near the Frenzied Flame Village, located in the middle of the Weeping Peninsula.",
    "sourceTitle": "The Flame of Frenzy",
    "sourceUrl": "https://eldenring.fandom.com/wiki/The_Flame_of_Frenzy",
    "verified": true
  },
  "goods:7311": {
    "kind": "incantation",
    "itemId": 7311,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：化圣雪原；Unendurable Frenzy is 位于 a 宝箱 ，位于 cellar of 耶罗·亚尼斯废墟. The cellar is located in a small, westernmost building ，位于 southern clusters of the ruins, the ones closest to the 耶罗·亚尼斯坑道.",
    "details": "Loot: Consecrated Snowfield；Unendurable Frenzy is found in a treasure chest in the cellar of Yelough Anix Ruins. The cellar is located in a small, westernmost building in the southern clusters of the ruins, the ones closest to the Yelough Anix Tunnel.",
    "sourceTitle": "Unendurable Frenzy",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Unendurable_Frenzy",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Frenzied Burst drops from a Scarab guarded by Frenzied Rats ，位于 middle of a small forest, directly south of the 镇静教堂 in Liurnia.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Frenzied Burst drops from a Scarab guarded by Frenzied Rats in the middle of a small forest, directly south of the Church of Inhibition in Liurnia.",
    "sourceTitle": "Frenzied Burst",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Frenzied_Burst",
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
    "summary": "地图拾取 / 宝箱：拾取：湖之利耶尼亚；Howl of 夏玻利利 is located in a 宝箱 on the second floor of the 癫火灯塔 located southeast of the 迪可达斯大升降机.",
    "details": "Loot: Liurnia of the Lakes；Howl of Shabriri is located in a treasure chest on the second floor of the Frenzy-Flaming Tower located southeast of the Grand Lift of Dectus.",
    "sourceTitle": "Howl of Shabriri",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Howl_of_Shabriri",
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
    "summary": "敌人 / 首领掉落：Aspects of the Crucible: Tail is acquired by defeating the 熔炉骑士 trapped ，位于 风暴山丘的封印监牢, located in 风暴山丘.",
    "details": "Aspects of the Crucible: Tail is acquired by defeating the Crucible Knight trapped in the Stormhill Evergaol, located in Stormhill.",
    "sourceTitle": "Aspects of the Crucible: Tail",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aspects_of_the_Crucible%3A_Tail",
    "verified": true
  },
  "goods:7510": {
    "kind": "incantation",
    "itemId": 7510,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Aspects of the Crucible: Horns is acquired by defeating the 熔炉骑士 in 史东薇尔城, down the outer western rampart. From the 城墙塔 赐福, head north to the walkway with the Warhawks, and drop down to the left ，地点： the guard tower. Continue dropping down until you reach a breakable cliff and fall through it to arrive on a cliffside with the 熔炉骑士.",
    "details": "Aspects of the Crucible: Horns is acquired by defeating the Crucible Knight in Stormveil Castle, down the outer western rampart. From the Rampart Tower Site of Grace, head north to the walkway with the Warhawks, and drop down to the left at the guard tower. Continue dropping down until you reach a breakable cliff and fall through it to arrive on a cliffside with the Crucible Knight.",
    "sourceTitle": "Aspects of the Crucible: Horns",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aspects_of_the_Crucible%3A_Horns",
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
    "summary": "敌人 / 首领掉落：Aspects of the Crucible: Breath is acquired upon defeating 塔妮丝的骑士, which can be fought 后 killing Tanith in Rykard's arena ，位于 火山官邸, ，地点： the end of her 任务线.",
    "details": "Aspects of the Crucible: Breath is acquired upon defeating Tanith's Knight, which can be fought after killing Tanith in Rykard's arena in the Volcano Manor, at the end of her questline.",
    "sourceTitle": "Aspects of the Crucible: Breath",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aspects_of_the_Crucible%3A_Breath",
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
    "summary": "商店购买：Trade the Remembrance of the Black Blade, 击杀后掉落： “黑剑”玛利喀斯, with “解指”恩雅.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Black Blade, dropped by Maliketh, the Black Blade, with Finger Reader Enia.Alternatively, use one of the Wandering Mausoleums to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Black Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Blade",
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
    "summary": "地图拾取 / 宝箱：Painting Item: 亚坛高原；左 behind by the spirit of an artist located 附近 the southern cliffs ，地点： the top of 风车村多明努拉, south of the 风车村高台 赐福 后 acquiring \"Flightless Bird\" Painting.",
    "details": "Painting Item: Altus Plateau；Left behind by the spirit of an artist located near the southern cliffs at the top of Dominula, Windmill Village, south of the Windmill Heights Site of Grace after acquiring \"Flightless Bird\" Painting.",
    "sourceTitle": "Fire's Deadly Sin",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire's_Deadly_Sin",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 逐渐崩毁的法姆·亚兹拉；Drops from a Scarab south of the 龙教堂（升降机前） 赐福, 附近 an Ancient Dragon.",
    "details": "Guaranteed Drop: Crumbling Farum Azula；Drops from a Scarab south of the Dragon Temple Lift Site of Grace, near an Ancient Dragon.",
    "sourceTitle": "Golden Lightning Fortification",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Golden_Lightning_Fortification",
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
    "sourceKind": "shop",
    "summary": "商店购买：Available ，用于 purchase from Count Ymir upon first meeting him ，位于 玛努斯·美特大教堂.",
    "details": "Available for purchase from Count Ymir upon first meeting him in the Cathedral of Manus Metyr.",
    "sourceTitle": "Miriam's Vanishing",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Miriam's_Vanishing",
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
    "summary": "地图拾取 / 宝箱：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Glintblade Trio",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintblade_Trio",
    "verified": true
  },
  "goods:2004320": {
    "kind": "sorcery",
    "itemId": 2004320,
    "sourceKind": "shop",
    "summary": "商店购买：Trade the Remembrance of the Twin Moon 剑士, gained by defeating “双月骑士”蕾菈娜, with “解指”恩雅.Alternatively, use one of the 复制追忆 Coffins to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Twin Moon Knight, gained by defeating Rellana, Twin Moon Knight, with Finger Reader Enia.Alternatively, use one of the Remembrance Duplication Coffins to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Rellana's Twin Moons",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rellana's_Twin_Moons",
    "verified": true
  },
  "goods:2004500": {
    "kind": "sorcery",
    "itemId": 2004500,
    "sourceKind": "shop",
    "summary": "商店购买：Purchased: 玛努斯·美特大教堂；Glintstone Nail may be 向 Count Ymir ，用于 12,000 卢恩 后 ringing the bell ，位于 利亚指头遗迹.",
    "details": "Purchased: Cathedral of Manus Metyr；Glintstone Nail may be purchased from Count Ymir for 12,000 Runes after ringing the bell in the Finger Ruins of Rhia.",
    "sourceTitle": "Glintstone Nail",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Nail",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchased: 玛努斯·美特大教堂；Glintstone Nails may be 向 Count Ymir ，用于 12,000 卢恩 后 ringing the bell ，位于 利亚指头遗迹.",
    "details": "Purchased: Cathedral of Manus Metyr；Glintstone Nails may be purchased from Count Ymir for 12,000 Runes after ringing the bell in the Finger Ruins of Rhia.",
    "sourceTitle": "Glintstone Nails",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Nails",
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
    "sourceKind": "shop",
    "summary": "商店购买：击败 老将盖乌斯 and trade his Remembrance with “解指”恩雅.",
    "details": "Defeat Commander Gaius and trade his Remembrance with Finger Reader Enia.",
    "sourceTitle": "Blades of Stone",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blades_of_Stone",
    "verified": true
  },
  "goods:2004710": {
    "kind": "sorcery",
    "itemId": 2004710,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： the 坠星兽物 位于 the crater north of the 狄欧指头遗迹.",
    "details": "Dropped by the Fallingstar Beast found in the crater north of the Finger Ruins of Dheo.",
    "sourceTitle": "Gravitational Missile",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravitational_Missile",
    "verified": true
  },
  "goods:2004900": {
    "kind": "sorcery",
    "itemId": 2004900,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 幽影城；后 draining the water from the 幽影城 Church District, 击败 the 腐烂树灵 beside a large dead tree.",
    "details": "Guaranteed Drop: Shadow Keep；After draining the water from the Shadow Keep Church District, defeat the Ulcerated Tree Spirit beside a large dead tree.",
    "sourceTitle": "Mantle of Thorns",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mantle_of_Thorns",
    "verified": true
  },
  "goods:2004910": {
    "kind": "sorcery",
    "itemId": 2004910,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Impenetrable Thorns",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Impenetrable_Thorns",
    "verified": false
  },
  "goods:2005000": {
    "kind": "sorcery",
    "itemId": 2005000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 卡罗隐藏墓地 on top of the arch leading from the 赐福 to the 死亡仪式鸟. Go east from the 赐福 to find the path up. The sorcery lies on an altar surrounded by Gravebirds.",
    "details": "Found in Charo's Hidden Grave on top of the arch leading from the Site of Grace to the Death Rite Bird. Go east from the Site of Grace to find the path up. The sorcery lies on an altar surrounded by Gravebirds.",
    "sourceTitle": "Rings of Spectral Light",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rings_of_Spectral_Light",
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
    "sourceKind": "shop",
    "summary": "商店购买：Trade the Remembrance of Putrescence with “解指”恩雅.",
    "details": "Trade the Remembrance of Putrescence with Finger Reader Enia.",
    "sourceTitle": "Vortex of Putrescence",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vortex_of_Putrescence",
    "verified": true
  },
  "goods:2006210": {
    "kind": "sorcery",
    "itemId": 2006210,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 the 石棺大洞 by jumping to a lower ledge 附近 the 大洞中段 赐福.",
    "details": "Found in the Stone Coffin Fissure by jumping to a lower ledge near the Fissure Waypoint Site of Grace.",
    "sourceTitle": "Mass of Putrescence",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mass_of_Putrescence",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：艾尼尔·伊利姆；完成 老兵安帕赫's 任务线 while siding with him against “金针骑士”蕾妲 and 击败 “约定之王”拉塔恩 and then this 祷告 (as well as Ansbach's Set and the Obsidian Lamina) can be 位于 on his body, just to the right 后 entering the boss arena again.",
    "details": "Loot: Enir-Ilim；Complete Sir Ansbach's questline while siding with him against Needle Knight Leda and defeat Promised Consort Radahn and then this Incantation (as well as Ansbach's Set and the Obsidian Lamina) can be found on his body, just to the right after entering the boss arena again.",
    "sourceTitle": "Furious Blade of Ansbach",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Furious_Blade_of_Ansbach",
    "verified": true
  },
  "goods:2006400": {
    "kind": "incantation",
    "itemId": 2006400,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：幽影亚坛；North of 穆斯废墟 there are two small bodies of water. ，地点： the northern edge of the southern body of water is a small cave tunnel with a 米兰达之花 and three Perfumers, with the incantation lying under a glowing tree ，地点： the end.",
    "details": "Loot: Scadu Altus；North of Moorth Ruins there are two small bodies of water. At the northern edge of the southern body of water is a small cave tunnel with a Miranda Blossom and three Perfumers, with the incantation lying under a glowing tree at the end.",
    "sourceTitle": "Heal from Afar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Heal_from_Afar",
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
    "summary": "敌人 / 首领掉落：Aspects of the Crucible: Thorns is acquired by defeating the 黄金河马 boss 位于 just inside the main gate of 幽影城 on 幽影亚坛.",
    "details": "Aspects of the Crucible: Thorns is acquired by defeating the Golden Hippopotamus boss found just inside the main gate of Shadow Keep on Scadu Altus.",
    "sourceTitle": "Aspects of the Crucible: Thorns",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aspects_of_the_Crucible%3A_Thorns",
    "verified": true
  },
  "goods:2006660": {
    "kind": "incantation",
    "itemId": 2006660,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Aspects of the Crucible: Bloom is 位于 the upper sections of the 劳弗古遗迹. From the 劳弗古遗迹（东方） 赐福, head across the bridge just to the west, then drop down to a slightly lower bridge section ，地点： the end.",
    "details": "Aspects of the Crucible: Bloom is found in the upper sections of the Ancient Ruins of Rauh. From the Rauh Ancient Ruins, East site of grace, head across the bridge just to the west, then drop down to a slightly lower bridge section at the end.",
    "sourceTitle": "Aspects of the Crucible: Bloom",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Aspects_of_the_Crucible%3A_Bloom",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Minor Erdtree",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Minor_Erdtree",
    "verified": false
  },
  "goods:2006680": {
    "kind": "incantation",
    "itemId": 2006680,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Land of Shadow",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Land_of_Shadow",
    "verified": false
  },
  "goods:2006690": {
    "kind": "incantation",
    "itemId": 2006690,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：幽影城；位于 ，地点： the 物种保藏库 ，位于 Storehouse Loft on one of the giant cogs.",
    "details": "Loot: Shadow Keep；Found at the Specimen Storehouse in the Storehouse Loft on one of the giant cogs.",
    "sourceTitle": "Wrath from Afar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Wrath_from_Afar",
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
    "sourceKind": "shop",
    "summary": "商店购买：Trade: Remembrance of a God and a Lord；Trade with “解指”恩雅.",
    "details": "Trade: Remembrance of a God and a Lord；Trade with Finger Reader Enia.Alternatively, use one of the belled Wandering Mausoleums to duplicate the remembrance (can only obtain one per playthrough using either method).",
    "sourceTitle": "Light of Miquella",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Light_of_Miquella",
    "verified": true
  },
  "goods:2006710": {
    "kind": "incantation",
    "itemId": 2006710,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 石棺大洞；击败 the Phantom 混种战士 位于 past the 大洞中段 赐福 along the main path through the area.",
    "details": "Guaranteed Drop: Stone Coffin Fissure；Defeat the Phantom Misbegotten Warrior found past the Fissure Waypoint Site of Grace along the main path through the area.",
    "sourceTitle": "Multilayered Ring of Light",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Multilayered_Ring_of_Light",
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
    "summary": "敌人 / 首领掉落：Guaranteed drop: 大红熊鲁格利亚；Roar of Rugalea is received upon defeating Rugalea ，位于 woods ，位于 northern part of the 劳弗下方, northwest of the 峡谷北方 赐福.",
    "details": "Guaranteed drop: Rugalea the Great Red Bear；Roar of Rugalea is received upon defeating Rugalea in the woods in the northern part of the Rauh Base, northwest of the Ravine North Site of Grace.",
    "sourceTitle": "Roar of Rugalea",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Roar_of_Rugalea",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：蝎河地下墓地；后 arriving ，位于 room with a spiked falling roof, keep to the right to find a ladder in one of the small safe spots around the corner (，位于 second half of the room) and climb up it. Cross the bridge to the right and then, 后 waiting ，用于 the Death Blight build-up to subside, use a thin ledge to the left to cross to the side with the Death Blight inflicting statue to find a short tunnel with the 祷告 ，地点： the end, guarded by two Imps wielding 大剑s.",
    "details": "Loot: Scorpion River Catacombs；After arriving in the room with a spiked falling roof, keep to the right to find a ladder in one of the small safe spots around the corner (in the second half of the room) and climb up it. Cross the bridge to the right and then, after waiting for the Death Blight build-up to subside, use a thin ledge to the left to cross to the side with the Death Blight inflicting statue to find a short tunnel with the Incantation at the end, guarded by two Imps wielding Greatswords.",
    "sourceTitle": "Knight's Lightning Spear",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Knight's_Lightning_Spear",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Quest Item: 尖刺山；由...赠予 the 龙飨女巫 ，地点： the 龙飨大祭坛 后 giving her 休里耶's Concoction ，地点： night and waiting ，用于 her to wake up (and then repeatedly talking to her), and then finally defeating “狂龙”贝勒.",
    "details": "Quest Item: Jagged Peak；Given by the Dragon Communion Priestess at the Grand Altar of Dragon Communion after giving her Thiollier's Concoction at night and waiting for her to wake up (and then repeatedly talking to her), and then finally defeating Bayle the Dread.This item is mutually exclusive with the Priestess Heart and Flowerstone Gavel.Continue talking to her and both confess to be the one that put her to sleep and accept her into your service to receive the Ancient Dragon Florissax Spirit Ash.Since this requires Thiollier's Concoction, make sure to get that item by giving him the Black Syrup from Moore at Belurat, Tower Settlement (obtained by speaking to both of them several times) and then giving the Syrup to Thiollier BEFORE defeating the Putrescent Knight or approaching Shadow Keep too closely.",
    "sourceTitle": "Dragonbolt of Florissax",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dragonbolt_of_Florissax",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：雾谷地下墓地；位于 by dropping down a hole ，位于 second cubicle on the left ，地点： the third dropping spike-roof and then taking a left twice to find it ，位于 same rooms as a Catacombs Sorcerer, some Fulgurbloom, and a few Skeletal Slimes.",
    "details": "Loot: Fog Rift Catacombs；Found by dropping down a hole in the second cubicle on the left at the third dropping spike-roof and then taking a left twice to find it in the same rooms as a Catacombs Sorcerer, some Fulgurbloom, and a few Skeletal Slimes.",
    "sourceTitle": "Electrocharge",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Electrocharge",
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
    "sourceKind": "shop",
    "summary": "商店购买：龙飨: 尖刺山的山脚；Trade the Heart of Bayle ，地点： the 龙飨大祭坛.",
    "details": "Dragon Communion: Foot of the Jagged Peak；Trade the Heart of Bayle at the Grand Altar of Dragon Communion.Mutually exclusive with Bayle's Flame Lightning, as the Heart of Bayle and its reward cannot be duplicated.",
    "sourceTitle": "Bayle's Tyranny",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bayle's_Tyranny",
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
    "sourceKind": "shop",
    "summary": "商店购买：龙飨: 尖刺山的山脚；Trade the Heart of Bayle ，地点： the 龙飨大祭坛.",
    "details": "Dragon Communion: Foot of the Jagged Peak；Trade the Heart of Bayle at the Grand Altar of Dragon Communion.Mutually exclusive with Bayle's Tyranny, as the Heart of Bayle and its reward cannot be duplicated.",
    "sourceTitle": "Bayle's Flame Lightning",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bayle's_Flame_Lightning",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：龙飨: 宁姆格福 / 盖利德 / 尖刺山；Acquired from the altar ，地点： the 龙飨大祭坛 on the 尖刺山 ，用于 3 Dragon Hearts.",
    "details": "Dragon Communion: Limgrave / Caelid / Jagged Peak；Acquired from the altar at the Grand Altar of Dragon Communion on the Jagged Peak for 3 Dragon Hearts.",
    "sourceTitle": "Ghostflame Breath",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ghostflame_Breath",
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
    "sourceKind": "shop",
    "summary": "商店购买：Trade the Remembrance of the Saint of the Bud, gained by defeating “花蕾圣女”萝蜜娜, with “解指”恩雅.Alternatively, use one of the 复制追忆 Coffins to duplicate one (can only obtain one per playthrough using either method).",
    "details": "Trade the Remembrance of the Saint of the Bud, gained by defeating Romina, Saint of the Bud, with Finger Reader Enia.Alternatively, use one of the Remembrance Duplication Coffins to duplicate one (can only obtain one per playthrough using either method).",
    "sourceTitle": "Rotten Butterflies",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Butterflies",
    "verified": true
  },
  "goods:2007210": {
    "kind": "incantation",
    "itemId": 2007210,
    "sourceKind": "other",
    "summary": "其他来源：拾取：劳弗古遗迹",
    "details": "Loot: Ancient Ruins of Rauh",
    "sourceTitle": "Pest-Thread Spears",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Pest-Thread_Spears",
    "verified": true
  },
  "goods:2007300": {
    "kind": "incantation",
    "itemId": 2007300,
    "sourceKind": "shop",
    "summary": "商店购买：Trade: Remembrance of the Lord of Frenzied Flame；交换品 the Remembrance with “解指”恩雅 ，地点： 圆桌厅堂.",
    "details": "Trade: Remembrance of the Lord of Frenzied Flame；Exchange the Remembrance with Finger Reader Enia at Roundtable Hold.The remembrance is acquired by defeating Midra, Lord of Frenzied Flame.After the Remembrance is acquired, a Wandering Mausoleum or Remembrance Duplication Coffins can be used to duplicate it. The spell can only be acquired once per new game cycle, regardless of how many remembrances are held.",
    "sourceTitle": "Midra's Flame of Frenzy",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Midra's_Flame_of_Frenzy",
    "verified": true
  },
  "goods:2007410": {
    "kind": "sorcery",
    "itemId": 2007410,
    "sourceKind": "shop",
    "summary": "商店购买：Purchased: 玛努斯·美特大教堂；Fleeting Microcosm may be 向 Count Ymir ，用于 20,000 卢恩 后 ringing the bell ，地点： the 狄欧指头遗迹. He sits on the throne ，位于 玛努斯·美特大教堂 on the 幽影亚坛, located ，位于 幽影之地.",
    "details": "Purchased: Cathedral of Manus Metyr；Fleeting Microcosm may be purchased from Count Ymir for 20,000 Runes after ringing the bell at the Finger Ruins of Dheo. He sits on the throne in the Cathedral of Manus Metyr on the Scadu Altus, located in the Realm of Shadow.",
    "sourceTitle": "Fleeting Microcosm",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fleeting_Microcosm",
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
    "summary": "任务 / 事件奖励：拾取：幽影亚坛；位于 the small graveyard attached to the 玛努斯·美特大教堂 后 completing Count Ymir's 任务线.",
    "details": "Loot: Scadu Altus；Found in the small graveyard attached to the Cathedral of Manus Metyr after completing Count Ymir's questline.",
    "sourceTitle": "Cherishing Fingers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cherishing_Fingers",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：“塔之镇”贝瑞特；Gained by speaking to the 角人老妪 twice while wearing the Divine Beast 头盔.",
    "details": "Loot: Belurat, Tower Settlement；Gained by speaking to the Hornsent Grandam twice while wearing the Divine Beast Head.She can be found by exiting the room with the Small Private Altar Site of Grace and taking a left to walk across a thin bridge to find a locked door that requires the Storeroom Key on your left. She is on the right side of that room.Must be done before defeating Messmer the Impaler.",
    "sourceTitle": "Watchful Spirit",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Watchful_Spirit",
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
    "summary": "地图拾取 / 宝箱：拾取：幽影亚坛；位于 an already opened 宝箱 within the pit in 穆斯废墟 in a shrine guarded by three Inquisitors.",
    "details": "Loot: Scadu Altus；Found in an already opened chest within the pit in Moorth Ruins in a shrine guarded by three Inquisitors.",
    "sourceTitle": "Golden Arcs",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Golden_Arcs",
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
    "summary": "地图拾取 / 宝箱：拾取：幽影亚坛；位于 the 安堤废墟, within the courtyard blocked by a deactivated Furnace Golem. Reactivate the Furnace Golem with a Hefty Furnace Pot thrown from the top of one of the outer ruins in order to enter the courtyard. The incantation can be 位于 a 宝箱 within the courtyard shrine.",
    "details": "Loot: Scadu Altus；Found in the Ruins of Unte, within the courtyard blocked by a deactivated Furnace Golem. Reactivate the Furnace Golem with a Hefty Furnace Pot thrown from the top of one of the outer ruins in order to enter the courtyard. The incantation can be found in a chest within the courtyard shrine.",
    "sourceTitle": "Giant Golden Arc",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Giant_Golden_Arc",
    "verified": true
  },
  "goods:2007720": {
    "kind": "incantation",
    "itemId": 2007720,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：艾尼尔·伊利姆.From the 第一塔 赐福, pass the fountain surrounded by Inquisitors and go up the stairs. Thereafter, find a way to walk on the branches to cross over to the platform with the single praying Inquisitor.",
    "details": "Loot: Enir-Ilim.From the First Rise Site of Grace, pass the fountain surrounded by Inquisitors and go up the stairs. Thereafter, find a way to walk on the branches to cross over to the platform with the single praying Inquisitor.",
    "sourceTitle": "Spira",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spira",
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
    "summary": "敌人 / 首领掉落：拾取：劳弗古遗迹；Drops from the 神兽舞狮 位于 by heading east-northeast across the bridge beginning ，地点： the 古遗迹（大楼梯） 赐福.",
    "details": "Loot: Ancient Ruins of Rauh；Drops from the Divine Beast Dancing Lion found by heading east-northeast across the bridge beginning at the Ancient Ruins, Grand Stairway Site of Grace.The temple's location is just northeast of the Temple Town Ruins Site of Grace but isn't reachable from that spot.The Grand Stairway grace can be found by heading into the temple southwest of the Rauh Ancient Ruins, West Site of Grace and taking a left after the stairs down to find an elevator. Then, turn 180 degrees to the left to find some thin walkways to walk on and drop to a second set underneath them. Continue on the path until you see a small room marked with two torch-pillars to find the elevator to the Stairway grace.",
    "sourceTitle": "Divine Beast Tornado",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Beast_Tornado",
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
    "summary": "地图拾取 / 宝箱：Divine Bird Feathers is looted from a body ，地点： the 劳弗古遗迹. It is 位于 a body of water just east of the 花蕾教堂（正门口） 赐福. To reach it, head north from the 赐福 and keep to the right ，位于 temple to arrive ，地点： the pool, where it's on a body just past a stone gazebo.",
    "details": "Divine Bird Feathers is looted from a body at the Ancient Ruins of Rauh. It is found in a body of water just east of the Church of the Bud, Main Entrance site of grace. To reach it, head north from the grace and keep to the right in the temple to arrive at the pool, where it's on a body just past a stone gazebo.",
    "sourceTitle": "Divine Bird Feathers",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Bird_Feathers",
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
    "summary": "地图拾取 / 宝箱：拾取：幽影城；From the 保藏库（内区） 赐福, head west to find a ladder on a banister and head up it. 头盔 right ，地点： the top of the ladder and take the stairs to another floor and continue forwards until you reach a small balcony with a body holding this 祷告.",
    "details": "Loot: Shadow Keep；From the Storehouse, Back Section Site of Grace, head west to find a ladder on a banister and head up it. Head right at the top of the ladder and take the stairs to another floor and continue forwards until you reach a small balcony with a body holding this Incantation.",
    "sourceTitle": "Fire Serpent",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Serpent",
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
    "summary": "敌人 / 首领掉落：Drop: 幽影城；击杀后掉落： a 火 剑士 in 幽影城 that uses this spell, together with Salza's Hood. He's 位于 ，地点： the end of the bridge just west of the 西边城墙 赐福 ，位于 westernmost part of the Keep, and will try to target the player ，用于 large sections of the bridge unless line-of-sight is broken or Torrent is used to outrun the fire rain.",
    "details": "Drop: Shadow Keep；Dropped by a Fire Knight in Shadow Keep that uses this spell, together with Salza's Hood. He's found at the end of the bridge just west of the West Rampart Site of Grace in the westernmost part of the Keep, and will try to target the player for large sections of the bridge unless line-of-sight is broken or Torrent is used to outrun the fire rain.",
    "sourceTitle": "Rain of Fire",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rain_of_Fire",
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
    "sourceKind": "shop",
    "summary": "商店购买：Trade: Remembrance of the Impaler；交换品 the Remembrance with “解指”恩雅 ，地点： 圆桌厅堂.",
    "details": "Trade: Remembrance of the Impaler；Exchange the Remembrance with Finger Reader Enia at Roundtable Hold.The remembrance is acquired by defeating Midra, Lord of Frenzied Flame.After the Remembrance is acquired, a Wandering Mausoleum or Remembrance Duplication Coffins can be used to duplicate it. The spell can only be acquired once per new game cycle, regardless of how many remembrances are held.",
    "sourceTitle": "Messmer's Orb",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer's_Orb",
    "verified": true
  },
  "goods:200000": {
    "kind": "spirit-ash",
    "itemId": 200000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： “黑刀之首”亚勒托 ，位于 刀之首的封印监牢.",
    "details": "Dropped by Alecto, Black Knife Ringleader in the Ringleader's Evergaol.",
    "sourceTitle": "Black Knife Tiche",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knife_Tiche",
    "verified": true
  },
  "goods:201000": {
    "kind": "spirit-ash",
    "itemId": 201000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Banished Knight Oleg",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Oleg",
    "verified": false
  },
  "goods:202000": {
    "kind": "spirit-ash",
    "itemId": 202000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： 守墓斗士 in 蒙流地下墓地.",
    "details": "Dropped by Grave Warden Duelist in Murkwater Catacombs.",
    "sourceTitle": "Banished Knight Engvall",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Banished_Knight_Engvall",
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
    "summary": "商店购买：向 隐居商人 (魔法学院雷亚卢卡利亚).Can also be chosen as a starting gift 期间 Character Creation, which also removes them as a buyable option from the abovementiond merchant.",
    "details": "Purchased from Isolated Merchant (Academy of Raya Lucaria).Can also be chosen as a starting gift during Character Creation, which also removes them as a buyable option from the abovementiond merchant.",
    "sourceTitle": "Fanged Imp Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fanged_Imp_Ashes",
    "verified": true
  },
  "goods:204000": {
    "kind": "spirit-ash",
    "itemId": 204000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Latenna the Albinauric",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Latenna_the_Albinauric",
    "verified": false
  },
  "goods:205000": {
    "kind": "spirit-ash",
    "itemId": 205000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 on a corpse ，位于 弃置恶兆的地底, hanging off a ledge on the second broken curved staircase.From the 地底大道旁 赐福, head to the far left end of the corridor, through the locked shortcut gate and go to the spiraling stair on the right. Carefully drop down to the left to get to a second set of spiraling stairs. Go through a corridor ，地点： the bottom and take the ladder down to a large 米兰达之花 and several Basilisks. Finally, head left to find the ash 后 a short tunnel.",
    "details": "Found on a corpse in the Subterranean Shunning-Grounds, hanging off a ledge on the second broken curved staircase.From the Underground Roadside Site of Grace, head to the far left end of the corridor, through the locked shortcut gate and go to the spiraling stair on the right. Carefully drop down to the left to get to a second set of spiraling stairs. Go through a corridor at the bottom and take the ladder down to a large Miranda Blossom and several Basilisks. Finally, head left to find the ash after a short tunnel.",
    "sourceTitle": "Nomad Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nomad_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 a 宝箱 in “永恒之城”诺克史黛拉, in a room unlocked using a 石剑钥匙.From the “永恒之城”诺克史黛拉 赐福, simply head up the stairs until there is long bridge to your right, and the correct building will be on your left.",
    "details": "Found in a chest in Nokstella, Eternal City, in a room unlocked using a Stonesword Key.From the Nokstella, Eternal City Site of Grace, simply head up the stairs until there is long bridge to your right, and the correct building will be on your left.",
    "sourceTitle": "Nightmaiden & Swordstress Puppets",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nightmaiden_%26_Swordstress_Puppets",
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
    "summary": "地图拾取 / 宝箱：In a 宝箱 behind a 石剑钥匙 imp statue in “永恒之城”诺克隆恩.",
    "details": "In a treasure chest behind a Stonesword Key imp statue in Nokron, Eternal City.",
    "sourceTitle": "Mimic Tear Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mimic_Tear_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 瑟利亚隐藏洞窟, in a 宝箱 guarded by Glintstone Sorcerers.",
    "details": "Found in Sellia Hideaway, in a chest guarded by Glintstone Sorcerers.",
    "sourceTitle": "Crystalian Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Crystalian_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 祖灵.",
    "details": "Dropped by the Ancestor Spirit.",
    "sourceTitle": "Ancestral Follower Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ancestral_Follower_Ashes",
    "verified": true
  },
  "goods:210000": {
    "kind": "spirit-ash",
    "itemId": 210000,
    "sourceKind": "other",
    "summary": "其他来源：丑恶地下墓地, on the bottom level of a hall with lots of dead Misbegotten on the ground around it.",
    "details": "Unsightly Catacombs, on the bottom level of a hall with lots of dead Misbegotten on the ground around it.",
    "sourceTitle": "Winged Misbegotten Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Winged_Misbegotten_Ashes",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 on a corpse in a cemetery east of 卡利亚城寨. Only accessible 后 defeating 禁卫骑士罗蕾塔 as the spot is on the high cliffs behind the Manor.",
    "details": "Found on a corpse in a cemetery east of Caria Manor. Only accessible after defeating Royal Knight Loretta as the spot is on the high cliffs behind the Manor.",
    "sourceTitle": "Albinauric Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Albinauric_Ashes",
    "verified": true
  },
  "goods:212000": {
    "kind": "spirit-ash",
    "itemId": 212000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： the 提比亚的唤声船 in 水唤村.",
    "details": "Dropped by the Tibia Mariner in Summonwater Village.",
    "sourceTitle": "Skeletal Militiaman Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Skeletal_Militiaman_Ashes",
    "verified": true
  },
  "goods:213000": {
    "kind": "spirit-ash",
    "itemId": 213000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： the 提比亚的唤声船 in 湖之利耶尼亚.",
    "details": "Dropped by the Tibia Mariner in Liurnia of the Lakes.",
    "sourceTitle": "Skeletal Bandit Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Skeletal_Bandit_Ashes",
    "verified": true
  },
  "goods:214000": {
    "kind": "spirit-ash",
    "itemId": 214000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于...附近 the start of 米凯拉的圣树, guarded by several Oracle Envoys.",
    "details": "Found near the start of Miquella's Haligtree, guarded by several Oracle Envoys.",
    "sourceTitle": "Oracle Envoy Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Oracle_Envoy_Ashes",
    "verified": true
  },
  "goods:215000": {
    "kind": "spirit-ash",
    "itemId": 215000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： the 发狂斗士 ，地点： the end of 牢狱洞窟.",
    "details": "Dropped by the Frenzied Duelist at the end of Gaol Cave.",
    "sourceTitle": "Putrid Corpse Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Putrid_Corpse_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 火山官邸, in a room only accessible by going through the secret passage behind the illusory wall 附近 the start of the dungeon.",
    "details": "Found in Volcano Manor, in a room only accessible by going through the secret passage behind the illusory wall near the start of the dungeon.",
    "sourceTitle": "Depraved Perfumer Carmaan",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Depraved_Perfumer_Carmaan",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Perfumer Tricia",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Perfumer_Tricia",
    "verified": false
  },
  "goods:218000": {
    "kind": "spirit-ash",
    "itemId": 218000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： the 唤灵蜗牛 in 绝路地下墓地.",
    "details": "Dropped by the Spiritcaller Snail in Road's End Catacombs.",
    "sourceTitle": "Glintstone Sorcerer Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Glintstone_Sorcerer_Ashes",
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
    "summary": "敌人 / 首领掉落：地点：黑刀地下墓地；The Twinsage Sorcerer 骨灰 is 击杀后掉落： the 墓地影子 in 黑刀地下墓地.",
    "details": "Location: Black Knife Catacombs；The Twinsage Sorcerer Ashes is dropped by the Cemetery Shade in Black Knife Catacombs.",
    "sourceTitle": "Twinsage Sorcerer Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Twinsage_Sorcerer_Ashes",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：断崖下的地下墓地, the same floor with the lever that opens the boss room.",
    "details": "Cliffbottom Catacombs, the same floor with the lever that opens the boss room.",
    "sourceTitle": "Page Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Page_Ashes",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Battlemage Hugues",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Battlemage_Hugues",
    "verified": false
  },
  "goods:222000": {
    "kind": "spirit-ash",
    "itemId": 222000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 the northern 乌鲁王朝遗迹 on a corpse ，地点： the top of the waterfall.",
    "details": "Found in the northern Uhl Palace Ruins on a corpse at the top of the waterfall.",
    "sourceTitle": "Clayman Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Clayman_Ashes",
    "verified": true
  },
  "goods:223000": {
    "kind": "spirit-ash",
    "itemId": 223000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：In a 宝箱 ，地点： “圣树分枝”艾布雷菲尔, guarded by a 玛莲妮亚的尊腐骑士. Located north of the 祈祷室 赐福 on a rooftop that you need to jump down to from a rafter.",
    "details": "In a treasure chest at Elphael, Brace of the Haligtree, guarded by a Cleanrot Knight. Located north of the Prayer Room grace on a rooftop that you need to jump down to from a rafter.",
    "sourceTitle": "Cleanrot Knight Finlay",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Cleanrot_Knight_Finlay",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 墓地影子 in 盖利德地下墓地.",
    "details": "Dropped by the Cemetery Shade in Caelid Catacombs.",
    "sourceTitle": "Kindred of Rot Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Kindred_of_Rot_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 the graveyard 附近 the start of the 魔法学院雷亚卢卡利亚, on a corpse hanging off a ledge accessed via a short tunnel.",
    "details": "Found in the graveyard near the start of the Academy of Raya Lucaria, on a corpse hanging off a ledge accessed via a short tunnel.",
    "sourceTitle": "Marionette Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Marionette_Soldier_Ashes",
    "verified": true
  },
  "goods:226000": {
    "kind": "spirit-ash",
    "itemId": 226000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 ，地点： the bottom of the waterwheel 附近 the 校舍内的教室 赐福 ，位于 魔法学院雷亚卢卡利亚.",
    "details": "Found at the bottom of the waterwheel near the Schoolhouse Classroom Site of Grace in the Academy of Raya Lucaria.",
    "sourceTitle": "Avionette Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Avionette_Soldier_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 a 宝箱 in 巨人山顶地下墓地, ，位于 area below the first lift and past two Frostbite pillars.",
    "details": "Found in a chest in Giants' Mountaintop Catacombs, in the area below the first lift and past two Frostbite pillars.",
    "sourceTitle": "Fire Monk Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Monk_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 离群仿身泪滴 in 通往圣树的密道.",
    "details": "Dropped by the Stray Mimic Tear in Hidden Path to the Haligtree.",
    "sourceTitle": "Blackflame Monk Amon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Blackflame_Monk_Amon",
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
    "summary": "地图拾取 / 宝箱：位于 the hall containing several Wandering Nobles and Man-Serpents in 火山官邸, before the sending gate leading to “亵渎君王”拉卡德.",
    "details": "Found in the hall containing several Wandering Nobles and Man-Serpents in Volcano Manor, before the sending gate leading to Rykard, Lord of Blasphemy.",
    "sourceTitle": "Man-Serpent Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Man-Serpent_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 a room guarded by a Banished 剑士, with another Banished 剑士 patrolling nearby, ，位于 龙教堂 before the 神皮双人组.",
    "details": "Found in a room guarded by a Banished Knight, with another Banished Knight patrolling nearby, in the Dragon Temple before the Godskin Duo.",
    "sourceTitle": "Azula Beastman Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Azula_Beastman_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 归树看门犬 ，位于 断崖下的地下墓地, 湖之利耶尼亚.",
    "details": "Dropped by the Erdtree Burial Watchdog in the Cliffbottom Catacombs, Liurnia of the Lakes.",
    "sourceTitle": "Kaiden Sellsword Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Kaiden_Sellsword_Ashes",
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
    "sourceKind": "shop",
    "summary": "商店购买：由...赠予 魔女蕾娜 ，位于 艾雷教堂, 后 the player receives the Spectral Steed Whistle from 梅琳娜.If the player misses this encounter, both the Lone Wolf 骨灰 and the Spirit Calling Bell will be added to the 孪生老妪 shop inventory.",
    "details": "Given by Renna the Witch in the Church of Elleh, after the player receives the Spectral Steed Whistle from Melina.If the player misses this encounter, both the Lone Wolf Ashes and the Spirit Calling Bell will be added to the Twin Maiden Husks shop inventory.",
    "sourceTitle": "Lone Wolf Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lone_Wolf_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse ，位于 stable just northeast of the 西边风车牧场.",
    "details": "Found on a corpse in the stable just northeast of the West Windmill Pasture.",
    "sourceTitle": "Giant Rat Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Giant_Rat_Ashes",
    "verified": true
  },
  "goods:234000": {
    "kind": "spirit-ash",
    "itemId": 234000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： the 归树看门犬 in 穿刺地下墓地.",
    "details": "Dropped by the Erdtree Burial Watchdog in Impaler's Catacombs.",
    "sourceTitle": "Demi-Human Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Demi-Human_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 a building in 魔法镇瑟利亚, north of the 瑟利亚镇（楼梯下方） 赐福.",
    "details": "Found in a building in Sellia, Town of Sorcery, north of the Sellia Under-Stair Site of Grace.",
    "sourceTitle": "Rotten Stray Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Rotten_Stray_Ashes",
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
    "summary": "任务 / 事件奖励：由...赠予 调灵师罗德莉卡 ，地点： 风暴山丘的破屋 后 talking to her.If it hasn't been 通过...获得 the time 罗德莉卡 moves to 圆桌厅堂 it is possible to still obtain it by talking with her, though this option might not be offered if the game progresses to a certain unknown point 后 王城罗德尔.",
    "details": "Given by Roderika, Spirit Tuner at Stormhill Shack after talking to her.If it hasn't been obtained by the time Roderika moves to Roundtable Hold it is possible to still obtain it by talking with her, though this option might not be offered if the game progresses to a certain unknown point after Leyndell, Royal Capital.",
    "sourceTitle": "Spirit Jellyfish Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spirit_Jellyfish_Ashes",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：获得途径 in 啜泣半岛, just north of the 巡礼教堂. This is the ...奖励 finding the location depicted on the \"Prophecy\" Painting, and as such, the painting item must have already been 从...获得 the sideroom to the big courtyard 附近 the 升降机旁房间 赐福 in 史东薇尔城.",
    "details": "Obtained in Weeping Peninsula, just north of the Church of Pilgrimage. This is the reward for finding the location depicted on the \"Prophecy\" Painting, and as such, the painting item must have already been obtained from the sideroom to the big courtyard near the Liftside Chamber Site of Grace in Stormveil Castle.",
    "sourceTitle": "Warhawk Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Warhawk_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 the 候王礼拜堂. 后 returning to the area via the portal ，地点： 四钟楼, go through the previously locked door 附近 the main entrance, and follow the staircase into the upper level of the chapel to find the ashes.",
    "details": "Found in the Chapel of Anticipation. After returning to the area via the portal at The Four Belfries, go through the previously locked door near the main entrance, and follow the staircase into the upper level of the chapel to find the ashes.",
    "sourceTitle": "Stormhawk Deenh",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Stormhawk_Deenh",
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
    "summary": "敌人 / 首领掉落：击败 the 英雄的红狼 boss in 格密尔英雄墓地.",
    "details": "Defeat the Red Wolf of the Champion boss in Gelmir Hero's Grave.",
    "sourceTitle": "Bloodhound Knight Floh",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodhound_Knight_Floh",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse in 风暴根脚的地下墓地, in a dead-end room guarded by Imps.",
    "details": "Found on a corpse in Stormfoot Catacombs, in a dead-end room guarded by Imps.",
    "sourceTitle": "Wandering Noble Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Wandering_Noble_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： 归树看门犬 ，地点： the end of 风暴根脚的地下墓地.",
    "details": "Dropped by Erdtree Burial Watchdog at the end of Stormfoot Catacombs.",
    "sourceTitle": "Noble Sorcerer Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Noble_Sorcerer_Ashes",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：位于 the 亚雷萨英雄墓地. ，地点： the bottom of the hallway with the two chariots, drop down to the wooden beams below and head north to a room containing a statue. Go through the corridor behind the statue and to the right.",
    "details": "Found in the Auriza Hero's Grave. At the bottom of the hallway with the two chariots, drop down to the wooden beams below and head north to a room containing a statue. Go through the corridor behind the statue and to the right.",
    "sourceTitle": "Vulgar Militia Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Vulgar_Militia_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 归树看门犬 duo ，位于 小黄金树地下墓地.",
    "details": "Dropped by the Erdtree Burial Watchdog duo in the Minor Erdtree Catacombs.",
    "sourceTitle": "Mad Pumpkin Head Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mad_Pumpkin_Head_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 湖之利耶尼亚, ，地点： the foot of the cliffs east of 学院门前镇.",
    "details": "Found in Liurnia of the Lakes, at the foot of the cliffs east of Academy Gate Town.",
    "sourceTitle": "Land Squirt Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Land_Squirt_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 behind an illusory wall in 盖利德地下墓地.",
    "details": "Found behind an illusory wall in Caelid Catacombs.",
    "sourceTitle": "Miranda Sprout Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Miranda_Sprout_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 守墓斗士 ，地点： the end of 亚雷萨副墓地.",
    "details": "Dropped by the Grave Warden Duelist at the end of Auriza Side Tomb.",
    "sourceTitle": "Soldjars of Fortune Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Soldjars_of_Fortune_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 恶兆孪生子s who are encountered on the bridge leading to the 东亚坛神授塔.",
    "details": "Dropped by the Fell Twins who are encountered on the bridge leading to the Divine Tower of East Altus.",
    "sourceTitle": "Omenkiller Rollo",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Omenkiller_Rollo",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse in “永恒之城”诺克隆恩, south-east of the “永恒之城”诺克隆恩 赐福.",
    "details": "Found on a corpse in Nokron, Eternal City, south-east of the Nokron, Eternal City Site of Grace.",
    "sourceTitle": "Greatshield Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Greatshield_Soldier_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 “永恒之城”诺克史黛拉, behind a building.",
    "details": "Found in Nokstella, Eternal City, behind a building.",
    "sourceTitle": "Archer Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Archer_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 a cemetery on the west side of 风暴山丘.",
    "details": "Found in a cemetery on the west side of Stormhill.",
    "sourceTitle": "Godrick Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Godrick_Soldier_Ashes",
    "verified": true
  },
  "goods:251000": {
    "kind": "spirit-ash",
    "itemId": 251000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 a 宝箱 in 绝路地下墓地, behind an illusory wall 附近 the end of the dungeon.",
    "details": "Found in a chest in Road's End Catacombs, behind an illusory wall near the end of the dungeon.",
    "sourceTitle": "Raya Lucaria Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Raya_Lucaria_Soldier_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse in 尊贵者的英雄墓地, 后 falling through a collapsing floor.",
    "details": "Found on a corpse in Sainted Hero's Grave, after falling through a collapsing floor.",
    "sourceTitle": "Leyndell Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Leyndell_Soldier_Ashes",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 the 英灵地下墓地. From the main hall, take the back right set of stairs and go through the tunnel forward until there is a window to the right, just before the dead-end, that can be jumped out of to get to a platform. Take the stairs to the left up to a couple of Imps and it's 位于 a small room full of Scarlet Rot.",
    "details": "Found in the War-Dead Catacombs. From the main hall, take the back right set of stairs and go through the tunnel forward until there is a window to the right, just before the dead-end, that can be jumped out of to get to a platform. Take the stairs to the left up to a couple of Imps and it's found in a small room full of Scarlet Rot.",
    "sourceTitle": "Radahn Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Radahn_Soldier_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 on a corpse on a cliff ，位于 northernmost point of the north-west part of 深根底层. Straight north of 无名永恒之城 赐福.",
    "details": "Found on a corpse on a cliff in the northernmost point of the north-west part of Deeproot Depths. Straight north of The Nameless Eternal City Site of Grace.",
    "sourceTitle": "Mausoleum Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Mausoleum_Soldier_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 “圣树分枝”艾布雷菲尔, under a large chalice on a balcony on the north side of the dungeon.From the 祈祷室 赐福, take the third beam on the right to a small chapel then take the opposite beam to the outer wall. There is a room below the left end of the wall with several 玛莲妮亚的尊腐骑士s and past the left exit is the chalice.",
    "details": "Found in Elphael, Brace of the Haligtree, under a large chalice on a balcony on the north side of the dungeon.From the Prayer Room Site of Grace, take the third beam on the right to a small chapel then take the opposite beam to the outer wall. There is a room below the left end of the wall with several Cleanrot Knights and past the left exit is the chalice.",
    "sourceTitle": "Haligtree Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Haligtree_Soldier_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 萨米尔的古英雄 in 尊贵者的英雄墓地.",
    "details": "Dropped by the Ancient Hero of Zamor in Sainted Hero's Grave.",
    "sourceTitle": "Ancient Dragon Knight Kristoff",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ancient_Dragon_Knight_Kristoff",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： the 腐败树灵 in 英灵地下墓地.",
    "details": "Dropped by the Putrid Tree Spirit in War-Dead Catacombs.",
    "sourceTitle": "Redmane Knight Ogha",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Redmane_Knight_Ogha",
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
    "summary": "敌人 / 首领掉落：地点：灵庙原野地下墓地；击败 the 墓地影子 ，位于 灵庙原野地下墓地 in central 啜泣半岛 to obtain the Lhutel the 头盔less.",
    "details": "Location: Tombsward Catacombs；Defeat the Cemetery Shade in the Tombsward Catacombs in central Weeping Peninsula to obtain the Lhutel the Headless.",
    "sourceTitle": "Lhutel the Headless",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Lhutel_the_Headless",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Can be obtained through 魔法教授赛尔维斯's 任务线, if Seluvis's Potion is given to Nepheli Loux.",
    "details": "Can be obtained through Preceptor Seluvis's questline, if Seluvis's Potion is given to Nepheli Loux.",
    "sourceTitle": "Nepheli Loux Puppet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Nepheli_Loux_Puppet",
    "verified": true
  },
  "goods:260000": {
    "kind": "spirit-ash",
    "itemId": 260000,
    "sourceKind": "shop",
    "summary": "商店购买：Free the 食粪者 from beneath 王城罗德尔, then 击败 him ，地点： the pond where you 位于 流氓 Big Boggart and then return to the 食粪者 in his cell with Seluvis's Potion.Costs 5 Starlight Shards and is only available 后 doing the steps above and buying 魔法教授赛尔维斯's first two puppets, then reloading the area by teleporting or exiting to the main menu and re-entering. Exhaust Seluvis's dialogue to reset the area, and the dialogue option \"I want a new puppet\" should be available\", which will unlock him.",
    "details": "Free the Dung Eater from beneath Leyndell, Royal Capital, then defeat him at the pond where you found Blackguard Big Boggart and then return to the Dung Eater in his cell with Seluvis's Potion.Costs 5 Starlight Shards and is only available after doing the steps above and buying Preceptor Seluvis's first two puppets, then reloading the area by teleporting or exiting to the main menu and re-entering. Exhaust Seluvis's dialogue to reset the area, and the dialogue option \"I want a new puppet\" should be available\", which will unlock him.",
    "sourceTitle": "Dung Eater Puppet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dung_Eater_Puppet",
    "verified": true
  },
  "goods:261000": {
    "kind": "spirit-ash",
    "itemId": 261000,
    "sourceKind": "shop",
    "summary": "商店购买：Can be acquired from Seluvis once you confront him about his secret puppet workshop ，地点： the 三姊妹塔.Either her or the 壶男 傀儡 can be gained from Seluvis ，用于 free. If she isn't selected she costs 2 Starlight Shards to buy.",
    "details": "Can be acquired from Seluvis once you confront him about his secret puppet workshop at the Three Sisters.Either her or the Jarwight Puppet can be gained from Seluvis for free. If she isn't selected she costs 2 Starlight Shards to buy.",
    "sourceTitle": "Finger Maiden Therolina Puppet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Finger_Maiden_Therolina_Puppet",
    "verified": true
  },
  "goods:262000": {
    "kind": "spirit-ash",
    "itemId": 262000,
    "sourceKind": "shop",
    "summary": "商店购买：Can be 从...获得 魔法教授赛尔维斯 后 discovering his secret room and agreeing to take Seluvis's Potion to 战士涅斐丽·露. If a different puppet is selected, this one can be bought ，用于 5 Starlight Shards from Seluvis. It can later be 位于 on Pidia's body if the potion was given to someone else.",
    "details": "Can be obtained from Preceptor Seluvis after discovering his secret room and agreeing to take Seluvis's Potion to Nepheli Loux, Warrior. If a different puppet is selected, this one can be bought for 5 Starlight Shards from Seluvis. It can later be found on Pidia's body if the potion was given to someone else.",
    "sourceTitle": "Dolores the Sleeping Arrow Puppet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Dolores_the_Sleeping_Arrow_Puppet",
    "verified": true
  },
  "goods:263000": {
    "kind": "spirit-ash",
    "itemId": 263000,
    "sourceKind": "shop",
    "summary": "商店购买：Can be acquired from Seluvis once you confront him about his secret puppet workshop ，地点： the 三姊妹塔.Either him or the 指头女巫瑟萝莉娜 傀儡 can be gained from Seluvis ，用于 free. If he isn't selected he costs 3 Starlight Shards to buy.",
    "details": "Can be acquired from Seluvis once you confront him about his secret puppet workshop at the Three Sisters.Either him or the Finger Maiden Therolina Puppet can be gained from Seluvis for free. If he isn't selected he costs 3 Starlight Shards to buy.",
    "sourceTitle": "Jarwight Puppet",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Jarwight_Puppet",
    "verified": true
  },
  "goods:2200000": {
    "kind": "spirit-ash",
    "itemId": 2200000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：击杀后掉落： 咒剑士拉比利士 ，地点： the end of 波尼监牢.",
    "details": "Dropped by Curseblade Labirith at the end of Bonny Gaol.",
    "sourceTitle": "Curseblade Meera",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Curseblade_Meera",
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
    "summary": "敌人 / 首领掉落：击败 the 血怪之首 ，地点： 河尾洞窟.",
    "details": "Defeat the Chief Bloodfiend at Rivermouth Cave.",
    "sourceTitle": "Bloodfiend Hexer's Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bloodfiend_Hexer's_Ashes",
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
    "sourceKind": "other",
    "summary": "其他来源：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Gravebird Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Gravebird_Ashes",
    "verified": true
  },
  "goods:2203000": {
    "kind": "spirit-ash",
    "itemId": 2203000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Fire Knight Hilde",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Knight_Hilde",
    "verified": false
  },
  "goods:2204000": {
    "kind": "spirit-ash",
    "itemId": 2204000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 the 劳弗古遗迹.",
    "details": "Found in the Ancient Ruins of Rauh.",
    "sourceTitle": "Spider Scorpion Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Spider_Scorpion_Ashes",
    "verified": true
  },
  "goods:2205000": {
    "kind": "spirit-ash",
    "itemId": 2205000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 a corpse ，地点： 艾尼尔·伊利姆, close to the 螺旋塔 赐福.",
    "details": "Found in a corpse at Enir-Ilim, close to the Spiral Rise site of grace.",
    "sourceTitle": "Inquisitor Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Inquisitor_Ashes",
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
    "summary": "敌人 / 首领掉落：击杀后掉落： “亚人剑圣”翁吉 ，地点： 贝瑞特监牢.",
    "details": "Dropped by Demi-Human Swordmaster Onze at Belurat Gaol.",
    "sourceTitle": "Demi-Human Swordsman Yosh",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Demi-Human_Swordsman_Yosh",
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
    "sourceKind": "other",
    "summary": "其他来源：惩罚要塞.",
    "details": "Fort of Reprimand.",
    "sourceTitle": "Messmer Soldier Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Messmer_Soldier_Ashes",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Black Knight Commander Andreas",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knight_Commander_Andreas",
    "verified": false
  },
  "goods:2209000": {
    "kind": "spirit-ash",
    "itemId": 2209000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Black Knight Captain Huw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Black_Knight_Captain_Huw",
    "verified": false
  },
  "goods:2210000": {
    "kind": "spirit-ash",
    "itemId": 2210000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：位于 the 驱暗地下墓地.",
    "details": "Found in the Darklight Catacombs.",
    "sourceTitle": "Bigmouth Imp Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Bigmouth_Imp_Ashes",
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
    "summary": "地图拾取 / 宝箱：位于 as loot ，位于 苍蝇村.",
    "details": "Found as loot in the Village of Flies.",
    "sourceTitle": "Man-Fly Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Man-Fly_Ashes",
    "verified": true
  },
  "goods:2212000": {
    "kind": "spirit-ash",
    "itemId": 2212000,
    "sourceKind": "other",
    "summary": "其他来源：泰乌尔锻造遗迹",
    "details": "Taylew's Ruined Forge",
    "sourceTitle": "Taylew the Golem Smith",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Taylew_the_Golem_Smith",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Divine Bird Warrior Ornis",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Divine_Bird_Warrior_Ornis",
    "verified": false
  },
  "goods:2214000": {
    "kind": "spirit-ash",
    "itemId": 2214000,
    "sourceKind": "other",
    "summary": "其他来源：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Horned Warrior Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Horned_Warrior_Ashes",
    "verified": true
  },
  "goods:2215000": {
    "kind": "spirit-ash",
    "itemId": 2215000,
    "sourceKind": "other",
    "summary": "其他来源：Give 龙飨女巫 休里耶's Concoction.",
    "details": "Give Dragon Communion Priestess Thiollier's Concoction.",
    "sourceTitle": "Ancient Dragon Florissax",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ancient_Dragon_Florissax",
    "verified": true
  },
  "goods:2217000": {
    "kind": "spirit-ash",
    "itemId": 2217000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：，位于 隐匿之地, between the 狄欧指头遗迹 and the nearest 赐福, ，位于 part where there is still grass, you can find a fissure ，位于 ground with a gigantic hand that works as a mini-boss. Behind this creature is a cave that leads to the ashes.",
    "details": "In the Hinterland, between the Finger Ruins of Dheo and the nearest Grace, in the part where there is still grass, you can find a fissure in the ground with a gigantic hand that works as a mini-boss. Behind this creature is a cave that leads to the ashes.",
    "sourceTitle": "Fingercreeper Ashes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fingercreeper_Ashes",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Fire Knight Queelign",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Fire_Knight_Queelign",
    "verified": false
  },
  "goods:2219000": {
    "kind": "spirit-ash",
    "itemId": 2219000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：获得途径 后 completing Count Ymir's 任务线 and boss fight and giving Jolán the Iris of 赐福.",
    "details": "Obtained after completing Count Ymir's questline and boss fight and giving Jolán the Iris of Grace.",
    "sourceTitle": "Swordhand of Night Jolán",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Swordhand_of_Night_Jol%C3%A1n",
    "verified": true
  },
  "goods:2220000": {
    "kind": "spirit-ash",
    "itemId": 2220000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：拉巴斯魔法师塔；Interact with the puppet of “黑夜剑士”安娜 while holding the “黑夜剑士”约兰 骨灰. The puppet is located ，地点： the top of 拉巴斯魔法师塔, accessible only by dropping down from the 巫者村.",
    "details": "Location: Rabbath's Rise；Interact with the puppet of Swordhand of Night Anna while holding the Swordhand of Night Jolán Spirit Ashes. The puppet is located at the top of Rabbath's Rise, accessible only by dropping down from the Shaman Village.",
    "sourceTitle": "Jolán and Anna",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Jol%C3%A1n_and_Anna",
    "verified": true
  },
  "ash-of-war:10000": {
    "kind": "ash-of-war",
    "itemId": 10000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；Drops from the Elder Lion 位于 盖尔要塞.",
    "details": "Guaranteed Drop: Caelid；Drops from the Elder Lion found in Fort Gael.Note that since it can't move from the dirt floor of the Fort, it's possible to kill it safely by using ranged attacks.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Lion's Claw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Lion's_Claw",
    "verified": true
  },
  "ash-of-war:10100": {
    "kind": "ash-of-war",
    "itemId": 10100,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；1x Sold ，用于 1,000 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；1x Sold for 1,000 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Impaling Thrust",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Impaling_Thrust",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop/Quest Item: 宁姆格福 / 湖之利耶尼亚 / 亚坛高原；位于 pre-equipped on the Nagakiba, which can be looted off the body of 血指 猎人 Yura, either ，地点： the end of his 任务线 or by killing him before that.",
    "details": "Guaranteed Drop/Quest Item: Limgrave / Liurnia of the Lakes / Altus Plateau；Found pre-equipped on the Nagakiba, which can be looted off the body of Bloody Finger Hunter Yura, either at the end of his questline or by killing him before that.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Piercing Fang",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Piercing_Fang",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；1x Sold ，用于 1,200 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；1x Sold for 1,200 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Spinning Slash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Spinning_Slash",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a Teardrop Scarab in 湖之利耶尼亚. North of the 湖中坠落遗迹 赐福, hanging from the ceiling in an archway above a bunch of poison-spewing Land Squirt. A bow is advised to hit the scarab and make it fall.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Teardrop Scarab in Liurnia of the Lakes. North of the Fallen Ruins of the Lake Site of Grace, hanging from the ceiling in an archway above a bunch of poison-spewing Land Squirt. A bow is advised to hit the scarab and make it fall.<gallery>；File:Ash of War- Charge Forth - Scarab Location - Photo 1.jpg；File:Ash of War- Charge Forth - Scarab Location - Photo.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Charge Forth",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Charge_Forth",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；x1 Can be purchased ，用于 1,500 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；x1 Can be purchased for 1,500 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Stamp (Upward Cut)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Stamp_(Upward_Cut)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from an invisible Scarab rolling around on 宁姆格福's western shores, northwest of the First Step 赐福.",
    "details": "Guaranteed Drop: Limgrave；Drops from an invisible Scarab rolling around on Limgrave's western shores, northwest of the First Step Site of Grace.Since the charge heavy attack when on Torrent as a long, lingering hitbox it is very useful. Alternatively, Glintblade Phalanx and its skill counterpart will fire off when the scarab is close and in front of the character,；Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Stamp (Sweep)",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Stamp_(Sweep)",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 蒙格温王朝庙；Drops from a Scarab 位于 a small cave ，位于 eastern stone walls by the lake of blood north of the 通往王朝的崖上道路 赐福.",
    "details": "Guaranteed Drop: Mohgwyn Dynasty Mausoleum；Drops from a Scarab found in a small cave in the eastern stone walls by the lake of blood north of the Palace Approach Ledge-Road Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Blood Tax",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Blood_Tax",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from a the 黑夜骑兵 patrolling the bridge north of 亚基尔湖 期间 the night. Southeast of 关卡前废墟 and east of 宁姆格福坑道.",
    "details": "Guaranteed Drop: Limgrave；Drops from a the Night's Cavalry patrolling the bridge north of Agheel Lake during the night. Southeast of Gatefront Ruins and east of Limgrave Tunnels.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Repeating Thrust",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Repeating_Thrust",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 风暴山丘；Drops from a Scarab 位于 on the road approaching the 通城隧道 赐福 northwest of 风暴山丘的破屋 and on the approach towards 史东薇尔城.",
    "details": "Guaranteed Drop: Stormhill；Drops from a Scarab found on the road approaching the Castleward Tunnel Site of Grace northwest of Stormhill Shack and on the approach towards Stormveil Castle.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Wild Strikes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Wild_Strikes",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 啜泣半岛 / 湖之利耶尼亚；Drops from 城主艾德格 ，地点： 摩恩城 or when he eventually invades the player by the 复仇者的破屋 in Liurnia.",
    "details": "Guaranteed Drop: Weeping Peninsula / Liurnia of the Lakes；Drops from Castellan Edgar at Castle Morne or when he eventually invades the player by the Revenger's Shack in Liurnia.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Spinning Strikes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Spinning_Strikes",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；Drops from a Scarab 位于 on top of a large root 附近 the rooftops ，位于 southwestern quarter of 魔法镇瑟利亚.",
    "details": "Guaranteed Drop: Caelid；Drops from a Scarab found on top of a large root near the rooftops in the southwestern quarter of Sellia, Town of Sorcery.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Double Slash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Double_Slash",
    "verified": true
  },
  "ash-of-war:11300": {
    "kind": "ash-of-war",
    "itemId": 11300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 巨人山顶；Drops from a Scarab hanging on a large, thorned stake 位于...附近 a cliff south of the 监视者要塞. Can alternatively be approached from the 巨人墓碑 赐福 位于 south of the nearby chain-bridge.",
    "details": "Guaranteed Drop: Mountaintops of the Giants；Drops from a Scarab hanging on a large, thorned stake found near a cliff south of the Guardians' Garrison. Can alternatively be approached from the Giants' Gravepost Site of Grace found south of the nearby chain-bridge.<gallery>；File:Ash of War- Prelate's Charge - Scarab Location - Photo.jpg；File:Ash of War- Prelate's Charge - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Prelate's Charge",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Prelate's_Charge",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from a Scarab 位于 the water ，位于 southeastern corner of 亚基尔湖.",
    "details": "Guaranteed Drop: Limgrave；Drops from a Scarab found in the water in the southeastern corner of Agheel Lake.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Unsheathe",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Unsheathe",
    "verified": true
  },
  "ash-of-war:11500": {
    "kind": "ash-of-war",
    "itemId": 11500,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 希芙拉河；Drops from a Scarab north-northwest of the 信仰者森林 赐福 附近 the edge of a cliff.",
    "details": "Guaranteed Drop: Siofra River；Drops from a Scarab north-northwest of the Worshippers' Woods Site of Grace near the edge of a cliff.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Square Off",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Square_Off",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a 黑夜骑兵 patrolling the 彼鲁姆大道 ，地点： night.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Night's Cavalry patrolling the Bellum Highway at night.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Giant Hunt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Giant_Hunt",
    "verified": true
  },
  "ash-of-war:11800": {
    "kind": "ash-of-war",
    "itemId": 11800,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from 禁卫骑士罗蕾塔 in 卡利亚城寨.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from Royal Knight Loretta in Caria Manor.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Loretta's Slash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Loretta's_Slash",
    "verified": true
  },
  "ash-of-war:11900": {
    "kind": "ash-of-war",
    "itemId": 11900,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；Drops from the 黑夜骑兵 patrolling the southern highway in 盖利德 ，地点： night, northeast of the 龙飨大教堂.",
    "details": "Guaranteed Drop: Caelid；Drops from the Night's Cavalry patrolling the southern highway in Caelid at night, northeast of the Cathedral of Dragon Communion.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Poison Moth Flight",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Poison_Moth_Flight",
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
    "summary": "商店购买：Purchase: 史东薇尔城 / 圆桌厅堂；由 魔法师罗杰尔 ，用于 1,000 卢恩.",
    "details": "Purchase: Stormveil Castle / Roundtable Hold；Sold by Sorcerer Rogier for 1,000 Runes.Should Rogier die before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Rogier's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Spinning Weapon",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Spinning_Weapon",
    "verified": true
  },
  "ash-of-war:12200": {
    "kind": "ash-of-war",
    "itemId": 12200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 史东薇尔城；Drops from a Scarab 位于 on Stormveil's western cliffside. It can be reached by jumping down the outer rampart to the west just north of the 城墙塔 赐福, the same route where you'll find the Marred Wooden Shield.",
    "details": "Guaranteed Drop: Stormveil Castle；Drops from a Scarab found on Stormveil's western cliffside. It can be reached by jumping down the outer rampart to the west just north of the Rampart Tower Site of Grace, the same route where you'll find the Marred Wooden Shield.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Storm Assault",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Storm_Assault",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 史东薇尔城；Drops from a Scarab 位于 east of the 深处小房间 赐福.",
    "details": "Guaranteed Drop: Stormveil Castle；Drops from a Scarab found east of the Secluded Cell Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Stormcaller",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Stormcaller",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a Scarab 附近 the 小黄金树 in west-Liurnia, on the path down to the 绝路地下墓地.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Scarab near the Minor Erdtree in west-Liurnia, on the path down to the Road's End Catacombs.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Sword Dance",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Sword_Dance",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Quest Item: 圆桌厅堂；位于 pre-equipped on Rogier's Rapier +7, which can be 由...赠予 Rogier himself if the player informs him on the 击败 of Godrick or looted off his body ，地点： the end of his 任务线.",
    "details": "Quest Item: Roundtable Hold；Found pre-equipped on Rogier's Rapier +7, which can be given by Rogier himself if the player informs him on the defeat of Godrick or looted off his body at the end of his questline.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Glintblade Phalanx",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Glintblade_Phalanx",
    "verified": true
  },
  "ash-of-war:20100": {
    "kind": "ash-of-war",
    "itemId": 20100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from a Scarab 位于 on a hill, past the pond northwest of the 玛莉卡第三教堂. The Scarab is fairly close to the bottom of the hill.",
    "details": "Guaranteed Drop: Limgrave；Drops from a Scarab found on a hill, past the pond northwest of the Third Church of Marika. The Scarab is fairly close to the bottom of the hill.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Sacred Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Sacred_Blade",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drops: 湖之利耶尼亚；Drops from a 黑夜骑兵 just north of the 利耶尼亚大道（北方） 赐福, past the army of 傀儡s.",
    "details": "Guaranteed Drops: Liurnia of the Lakes；Drops from a Night's Cavalry just north of the Liurnia Highway North Site of Grace, past the army of Puppets.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Ice Spear",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Ice_Spear",
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
    "summary": "商店购买：Purchase: 史东薇尔城 / 圆桌厅堂；由 魔法师罗杰尔 ，用于 1,500 卢恩.",
    "details": "Purchase: Stormveil Castle / Roundtable Hold；Sold by Sorcerer Rogier for 1,500 Runes.Should Rogier die before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Rogier's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Glintstone Pebble",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Glintstone_Pebble",
    "verified": true
  },
  "ash-of-war:20400": {
    "kind": "ash-of-war",
    "itemId": 20400,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from the 血crazed Godrick 剑士 位于 ，地点： 海德要塞 in east 宁姆格福.",
    "details": "Guaranteed Drop: Limgrave；Drops from the Bloodcrazed Godrick Knight found at Fort Haight in east Limgrave.Once This Item Has Been Obtained, It Can Be Duplicated By Trading In Lost Ashes of War To Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Bloody Slash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Bloody_Slash",
    "verified": true
  },
  "ash-of-war:20500": {
    "kind": "ash-of-war",
    "itemId": 20500,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；击杀后掉落： a Scarab northwest of the 盖利德大道北方（偏离大道后） 赐福.",
    "details": "Guaranteed Drop: Caelid；Dropped by a Scarab northwest of the Astray from Caelid Highway North Site of Grace.<gallery>；File:Ash of War- Lifesteal Fist - Scarab Location - Photo.jpg；File:Ash of War- Lifesteal Fist - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Lifesteal Fist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Lifesteal_Fist",
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
    "summary": "商店购买：Purchase: 火山官邸；1x Sold ，用于 8,000 卢恩 by “叛律者”贝纳尔 ，位于 Drawing Room of 火山官邸.",
    "details": "Purchase: Volcano Manor；1x Sold for 8,000 Runes by Recusant Bernahl in the Drawing Room of Volcano Manor.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Eruption",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Eruption",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 王城外围；Drops from an invisible Scarab 位于 the moat, east of the 城外幻影树 赐福.",
    "details": "Guaranteed Drop: Capital Outskirts；Drops from an invisible Scarab found in the moat, east of the Outer Wall Phantom Tree Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Prayerful Strike",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Prayerful_Strike",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from an Alabaster Lord on the beach southeast of the 漂流墓地.",
    "details": "Guaranteed Drop: Limgrave；Drops from an Alabaster Lord on the beach southeast of the Stranded Graveyard.To reach it, go southeast from Seaside Ruins Site of Grace (just south of Dragon-Burnt Ruins) and look for a Spiritspring to the right of it. The Alabaster Lord will be patrolling from under an archway on the sands.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Gravitas",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Gravitas",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；由 Bernahl ，用于 1,800 卢恩 ，地点： either the 习战者的破屋 of the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；Sold by Bernahl for 1,800 Runes at either the Warmaster's Shack of the Drawing Room of Volcano Manor.Should Bernahl die before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Storm Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Storm_Blade",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from an invisible Scarab 位于 south the 亚坛大道的三叉口 赐福. The scarab moves slowly in a straight line and generates dirt particles around it, which are easier to detect ，地点： night.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from an invisible Scarab found south the Altus Highway Junction Site of Grace. The scarab moves slowly in a straight line and generates dirt particles around it, which are easier to detect at night.<gallery>；File:Ash of War- Earthshaker - Scarab Location - Photo.jpg；File:Ash of War- Earthshaker - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Earthshaker",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Earthshaker",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 深根底层；Drops from a Scarab guarded by a group of Giant Ants south of the 黄金树的化身 附近 the 大瀑布顶端 赐福.",
    "details": "Guaranteed Drop: Deeproot Depths；Drops from a Scarab guarded by a group of Giant Ants south of the Erdtree Avatar near the Great Waterfall Crest Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Golden Land",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Golden_Land",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；Drops from a Scarab 位于 the graveyard outside of 红狮子城's southern wall.",
    "details": "Guaranteed Drop: Caelid；Drops from a Scarab found in the graveyard outside of Redmane Castle's southern wall.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Flaming Strike",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Flaming_Strike",
    "verified": true
  },
  "ash-of-war:21600": {
    "kind": "ash-of-war",
    "itemId": 21600,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 王城罗德尔.Drops from a Scarab located ，位于 middle of a courtyard surrounded by ruined buildings, between the bridge down the stairs of the 大道旁露台 赐福 and the corpse of the great ancient dragon, Gransax.",
    "details": "Guaranteed Drop: Leyndell, Royal Capital.Drops from a Scarab located in the middle of a courtyard surrounded by ruined buildings, between the bridge down the stairs of the Avenue Balcony Site of Grace and the corpse of the great ancient dragon, Gransax.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Thunderbolt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Thunderbolt",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from a Scarab 位于 the middle of an enemy campsite, past the gate north of the 城外战场遗迹 赐福, yet southeast of the 大道监视塔.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from a Scarab found in the middle of an enemy campsite, past the gate north of the Outer Wall Battleground Site of Grace, yet southeast of the Highway Lookout Tower.<gallery>；File:Ash of War- Lightning Slash - Scarab Location - Photo.jpg；File:Ash of War- Lightning Slash - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Lightning Slash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Lightning_Slash",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：拾取：湖之利耶尼亚；位于 on a body ，位于 卡利亚城寨. Requires dropping down multiple levels on the cliff to the south-east from the 王室赏月地 赐福, where you'll come across a bunch of jar enemies and a 龟裂壶.",
    "details": "Loot: Liurnia of the Lakes；Found on a body in the Caria Manor. Requires dropping down multiple levels on the cliff to the south-east from the Royal Moongazing Grounds Site of Grace, where you'll come across a bunch of jar enemies and a Cracked Pot.The precise spot is on top of the standalone gate on the path towards the Manor Lower Level Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Carian Grandeur",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Carian_Grandeur",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 史东薇尔城 / 圆桌厅堂；由 魔法师罗杰尔 ，用于 2,500 卢恩.",
    "details": "Purchase: Stormveil Castle / Roundtable Hold；Sold by Sorcerer Rogier for 2,500 Runes.Should Rogier die before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Rogier's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Carian Greatsword",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Carian_Greatsword",
    "verified": true
  },
  "ash-of-war:22000": {
    "kind": "ash-of-war",
    "itemId": 22000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：深根底层；位于 inside a partially sunken building 附近 a mountainous wall, located northeast of the 深根底层 赐福 (or directly east of 无名永恒之城 赐福.",
    "details": "Loot: Deeproot Depths；Found inside a partially sunken building near a mountainous wall, located northeast of the Deeproot Depths Site of Grace (or directly east of The Nameless Eternal City site of grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Vacuum Slice",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Vacuum_Slice",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 逐渐崩毁的法姆·亚兹拉；Drops from the 神皮双人组 bossfight.",
    "details": "Guaranteed Drop: Crumbling Farum Azula；Drops from the Godskin Duo bossfight.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Black Flame Tornado",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Black_Flame_Tornado",
    "verified": true
  },
  "ash-of-war:22200": {
    "kind": "ash-of-war",
    "itemId": 22200,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 艾奥尼亚沼泽；Drops from a Scarab 位于 on land, east of the 艾奥尼亚中心地 where 老将欧尼尔 is fought.",
    "details": "Guaranteed Drop: Swamp of Aeonia；Drops from a Scarab found on land, east of the Heart of Aeonia where Commander O'Neil is fought.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Sacred Ring of Light",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Sacred_Ring_of_Light",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from a Scarab 位于 a pond south of the entrance ，用于 旧亚坛坑道.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from a Scarab found in a pond south of the entrance for Old Altus Tunnel.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Blood Blade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Blood_Blade",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 禁域；Drops from a 黑夜骑兵 patrolling the 禁域 ，地点： night.",
    "details": "Guaranteed Drop: Forbidden Lands；Drops from a Night's Cavalry patrolling the Forbidden Lands at night.<gallery>；File:Ash of War- Phantom Slash - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Phantom Slash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Phantom_Slash",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 魔法学院雷亚卢卡利亚；Drops from a Scarab 位于 on a descending, curved slope past the roped bridge ，位于 graveyard 后 the Church of Cuckoo 赐福.",
    "details": "Guaranteed Drop: Academy of Raya Lucaria；Drops from a Scarab found on a descending, curved slope past the roped bridge in the graveyard after the Church of Cuckoo Site of Grace.<gallery>；File:Ash of War- Spectral Lance - Scarab Location - Photo.jpg；File:Ash of War- Spectral Lance - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Spectral Lance",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Spectral_Lance",
    "verified": true
  },
  "ash-of-war:22700": {
    "kind": "ash-of-war",
    "itemId": 22700,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a Scarab 位于 the Ruins southeast of 蕾娜魔法师塔 behind 卡利亚城寨.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Scarab found in the Ruins southeast of Renna's Rise behind Caria Manor.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Chilling Mist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Chilling_Mist",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 艾奥尼亚沼泽；击杀后掉落： a teleporting Scarab in 盖利德, 位于 on a small island southeast of the 艾奥尼亚沼泽（岸边） 赐福.",
    "details": "Guaranteed Drop: Swamp of Aeonia；Dropped by a teleporting Scarab in Caelid, found on a small island southeast of the Aeonia Swamp Shore Site of Grace.Once this item has been obtained, it can be duplicated by trading Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Poisonous Mist",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Poisonous_Mist",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a Scarab 位于 on patch of land underneath the tall, stone bridge north of Raya Lucaria. Northeast of the East Gate Brdige Trestle 赐福一览.<gallery>",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Scarab found on patch of land underneath the tall, stone bridge north of Raya Lucaria. Northeast of the East Gate Brdige Trestle Sites of Grace.<gallery>；File:Scarab location.jpg；</gallery>；Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Shield Bash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Shield_Bash",
    "verified": true
  },
  "ash-of-war:30100": {
    "kind": "ash-of-war",
    "itemId": 30100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：啜泣半岛；Ash of War: Barricade Shield is guaranteed to drop from the 黑夜骑兵 encountered ，地点： night along the road 附近 the 赐福 摩恩城（城墙前方） 赐福 ，位于 啜泣半岛.",
    "details": "Location: Weeping Peninsula；Ash of War: Barricade Shield is guaranteed to drop from the Night's Cavalry encountered at night along the road near the 赐福 Castle Morne Rampart Site of Grace in the Weeping Peninsula.",
    "sourceTitle": "Ash of War: Barricade Shield",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Barricade_Shield",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；x1 Can be purchased ，用于 600 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；x1 Can be purchased for 600 from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.<!--",
    "sourceTitle": "Ash of War: Parry",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Parry",
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
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 湖之利耶尼亚；x1 Can be purchased ，用于 3,000 卢恩 from Pidia in 卡利亚城寨.",
    "details": "Purchase: Liurnia of the Lakes；x1 Can be purchased for 3,000 Runes from Pidia in Caria Manor.Royal Knight Loretta must be defeated to reach Pidia's location within the Manor.Should Pidia be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Pidia's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Carian Retaliation",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Carian_Retaliation",
    "verified": true
  },
  "ash-of-war:30600": {
    "kind": "ash-of-war",
    "itemId": 30600,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 风暴山丘；Drops from a Scarab on the cliffs outside of Stormveil's eastern walls. It can be 位于 a dip ，位于 cliffside 后 jumping off the collapsed bridge (where Nomadic 剑士's Cookbook [7] is 位于).",
    "details": "Guaranteed Drop: Stormhill；Drops from a Scarab on the cliffs outside of Stormveil's eastern walls. It can be found in a dip in the cliffside after jumping off the collapsed bridge (where Nomadic Warrior's Cookbook [7] is found).Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Storm Wall",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Storm_Wall",
    "verified": true
  },
  "ash-of-war:30700": {
    "kind": "ash-of-war",
    "itemId": 30700,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 王城外围；Drops from a teleporting Scarab 位于 on one of the northern balconies of the grand staircase up to western gate of Leyndell.",
    "details": "Guaranteed Drop: Capital Outskirts；Drops from a teleporting Scarab found on one of the northern balconies of the grand staircase up to western gate of Leyndell.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Golden Parry",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Golden_Parry",
    "verified": true
  },
  "ash-of-war:30800": {
    "kind": "ash-of-war",
    "itemId": 30800,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from a Scarab 位于 within 卢克斯废墟.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from a Scarab found within Lux Ruins.On the northern side of the ruined church on top of the hill.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Shield Crash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Shield_Crash",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；x1 Can be purchased ，用于 600 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；x1 Can be purchased for 600 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: No Skill",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_No_Skill",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Can be acquired from a Teardrop Scarab ，地点： 伊利斯教堂. This scarab only appears 后 giving 魔法师托普斯 the spare Academy Glintstone Key 位于 within the 魔法学院雷亚卢卡利亚.Once this item has been obtained, it can be duplicated by trading in Lost 战灰 to 铁匠修古.",
    "details": "Can be acquired from a Teardrop Scarab at Church of Irith. This scarab only appears after giving Sorcerer Thops the spare Academy Glintstone Key found within the Academy of Raya Lucaria.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Thops's Barrier",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Thops's_Barrier",
    "verified": true
  },
  "ash-of-war:40000": {
    "kind": "ash-of-war",
    "itemId": 40000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 格密尔火山；Drops from a invisible Scarab rolling around northwest of 火山官邸's main entrance.",
    "details": "Guaranteed Drop: Mt. Gelmir；Drops from a invisible Scarab rolling around northwest of Volcano Manor's main entrance.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Through and Through",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Through_and_Through",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 格密尔火山；Drops from a Scarab north of the 沸滚河 赐福 in 格密尔火山.",
    "details": "Guaranteed Drop: Mt. Gelmir；Drops from a Scarab north of the Seethewater River Site of Grace in Mt. Gelmir.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Barrage",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Barrage",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 啜泣半岛；Drops from a Scarab 位于 the crossroads northwest of the 摩恩城（城墙前方） 赐福.",
    "details": "Guaranteed Drop: Weeping Peninsula；Drops from a Scarab found in the crossroads northwest of the Castle Morne Rampart Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Mighty Shot",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Mighty_Shot",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: “永恒之城”诺克隆恩；击杀后掉落： a Scarab next to a rock 附近 the northern shore cliff of the 祖灵森林, south-east of a nearby Hallowhorn Brazier.",
    "details": "Guaranteed Drop: Nokron, Eternal City；Dropped by a Scarab next to a rock near the northern shore cliff of the Ancestral Woods, south-east of a nearby Hallowhorn Brazier.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Enchanted Shot",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Enchanted_Shot",
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
    "summary": "商店购买：Guaranteed Drop: 桂奥尔龙墓；Drops from a Scarab on the cliffs northwest of the 隐居商人的破屋 in Dragonbarrow.",
    "details": "Guaranteed Drop: Greyoll's Dragonbarrow；Drops from a Scarab on the cliffs northwest of the Isolated Merchant's Shack in Dragonbarrow.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Sky Shot",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Sky_Shot",
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
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：Painting Treasure: 盖利德；Acquire the \"Redmane\" Painting in 魔法镇瑟利亚 and then go to the painting's depicted location on the edge of the Ancient Ruins bellow the cliffs south of Dragonbarrow's 小黄金树.",
    "details": "Painting Treasure: Caelid；Acquire the \"Redmane\" Painting in Sellia, Town of Sorcery and then go to the painting's depicted location on the edge of the Ancient Ruins bellow the cliffs south of Dragonbarrow's Minor Erdtree.",
    "sourceTitle": "Ash of War: Rain of Arrows",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Rain_of_Arrows",
    "verified": true
  },
  "ash-of-war:50100": {
    "kind": "ash-of-war",
    "itemId": 50100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；击杀后掉落： an invisible Scarab east of 卡利亚城寨 ，位于 pond above the ravine.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Dropped by an invisible Scarab east of Caria Manor in the pond above the ravine.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Hoarfrost Stomp",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Hoarfrost_Stomp",
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
    "summary": "地图拾取 / 宝箱：拾取：宁姆格福；位于 the 宝箱 located ，位于 cellar of 关卡前废墟 alongside the Whetstone Knife.",
    "details": "Loot: Limgrave；Found in the treasure chest located in the cellar of Gatefront Ruins alongside the Whetstone Knife.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Storm Stomp",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Storm_Stomp",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；1x Sold ，用于 800 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；1x Sold for 800 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Kick",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Kick",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from a Scarab 位于...附近 the Sword Monument southeast of the entrance to 尊贵者的英雄墓地.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from a Scarab found near the Sword Monument southeast of the entrance to Sainted Hero's Grave.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Lightning Ram",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Lightning_Ram",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；Drops from an invisible Scarab rolling around northeast of the 盖尔要塞北方 赐福.",
    "details": "Guaranteed Drop: Caelid；Drops from an invisible Scarab rolling around northeast of the Fort Gael North Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Flame of the Redmanes",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Flame_of_the_Redmanes",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from a Scarab 位于 southwest of the 小黄金树 of 雾林.",
    "details": "Guaranteed Drop: Limgrave；Drops from a Scarab found southwest of the Minor Erdtree of Mistwood.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Ground Slam",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Ground_Slam",
    "verified": true
  },
  "ash-of-war:50700": {
    "kind": "ash-of-war",
    "itemId": 50700,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from a Scarab in 森林之民的废墟. It can be 位于 the remains of a small building northeast of the 小黄金树. It is one of the buildings that are closer to the tree compared to the rest.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from a Scarab in Woodfolk Ruins. It can be found in the remains of a small building northeast of the Minor Erdtree. It is one of the buildings that are closer to the tree compared to the rest.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Golden Slam",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Golden_Slam",
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
    "summary": "商店购买：Remembrance Item:；Trade the Remembrance of the Naturalborn with “解指”恩雅, which can be 通过...获得 defeating Astel, Naturalborn of the the Void.",
    "details": "Remembrance Item:；Trade the Remembrance of the Naturalborn with Finger Reader Enia, which can be obtained by defeating Astel, Naturalborn of the the Void.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Waves of Darkness",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Waves_of_Darkness",
    "verified": true
  },
  "ash-of-war:50900": {
    "kind": "ash-of-war",
    "itemId": 50900,
    "sourceKind": "shop",
    "summary": "商店购买：Remembrance Item:；Trade the Remembrance of Hoarah Loux with “解指”恩雅, which can be 通过...获得 defeating 战士荷莱·露.",
    "details": "Remembrance Item:；Trade the Remembrance of Hoarah Loux with Finger Reader Enia, which can be obtained by defeating Hoarah Loux, Warrior.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Hoarah Loux's Earthshaker",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Hoarah_Loux's_Earthshaker",
    "verified": true
  },
  "ash-of-war:60000": {
    "kind": "ash-of-war",
    "itemId": 60000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 宁姆格福；Drops from a Scarab 位于 on the stone bridge north of 亚基尔湖.",
    "details": "Guaranteed Drop: Limgrave；Drops from a Scarab found on the stone bridge north of Agheel Lake.(A Night's Cavalry will patrol this bridge during night time)；Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Determination",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Determination",
    "verified": true
  },
  "ash-of-war:60100": {
    "kind": "ash-of-war",
    "itemId": 60100,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：火山官邸；Located on a corpse in an isolated room of 火山官邸, 附近 the shortcut door back to the entrance of the manor (石剑钥匙 is required).",
    "details": "Loot: Volcano Manor；Located on a corpse in an isolated room of Volcano Manor, near the shortcut door back to the entrance of the manor (Stonesword Key is required).To reach it, the player must start from the Temple of Eiglay Site of Grace and take the elevator up to the upper level of the manor (where the Man-Serpent with Magma Blades patrol). Head northwest, past the Man-Serpent with the Magma Whip Candlestick, into the building and then rightwards into the throne room. Take either of the first sets of stairs up, followed by the second set of stairs that go away from the throne itself. Up on the second floor there will be a door that leads to another, locked by an Imp Statue. Unlock the statue and head through until a large room filled with hanging cages that can be used to descend downwards. Once the player has reached the bottom, they can head to the door opening on the northeastern wall of the room which will eventually lead to this item.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Royal Knight's Resolve",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Royal_Knight's_Resolve",
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
    "summary": "商店购买：Purchase: 火山官邸；1x Sold ，用于 6,500 卢恩 by “叛律者”贝纳尔 ，位于 Drawing Room of 火山官邸.",
    "details": "Purchase: Volcano Manor；1x Sold for 6,500 Runes by Recusant Bernahl in the Drawing Room of Volcano Manor.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Assassin's Gambit",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Assassin's_Gambit",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 风暴山丘；击杀后掉落： a specific horse-riding Godrick 剑士 位于 on a hill north-east of the 习战者的破屋.",
    "details": "Guaranteed Drop: Stormhill；Dropped by a specific horse-riding Godrick Knight found on a hill north-east of the Warmaster's Shack.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Golden Vow",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Golden_Vow",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from a Scarab 位于 on the western shore of the lake north of the 弃置棺材 赐福.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from a Scarab found on the western shore of the lake north of the Abandoned Coffin Site of Grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Sacred Order",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Sacred_Order",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 亚坛高原；Drops from a flail-wielding 黑夜骑兵 patrolling the road south-west of the 亚坛大道的三叉口 赐福 ，地点： night.",
    "details": "Guaranteed Drop: Altus Plateau；Drops from a flail-wielding Night's Cavalry patrolling the road south-west of the Altus Highway Junction Site of Grace at night.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Shared Order",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Shared_Order",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 巨人山顶；Drops from an invisible Scarab 位于 on the northern side of the Frozen Lake ，地点： the 巨人山顶.",
    "details": "Guaranteed Drop: Mountaintops of the Giants；Drops from an invisible Scarab found on the northern side of the Frozen Lake at the Mountaintops of the Giants.<gallery>；File:Ash of War- Seppuku - Scarab Location - Photo.jpg；File:Ash of War- Seppuku - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Seppuku",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Seppuku",
    "verified": true
  },
  "ash-of-war:60700": {
    "kind": "ash-of-war",
    "itemId": 60700,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 盖利德；Drops from a Scarab 位于 on a hill 附近 the Sword Monument west of the 不破大桥 赐福 which itself is just west of the bridge leading to 红狮子城.",
    "details": "Guaranteed Drop: Caelid；Drops from a Scarab found on a hill near the Sword Monument west of the Impassable Greatbridge Site of Grace which itself is just west of the bridge leading to Redmane Castle.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Cragblade",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Cragblade",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a Scarab 位于 the 谷底秘村 in northern Liurnia, situated north of the eponymous 赐福.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Scarab found in the Ravine-Veiled Village in northern Liurnia, situated north of the eponymous Site of Grace.<gallery>；File:Ash of War- Barbaric Roar - Scarab Location - Photo.jpg；File:Ash of War- Barbaric Roar - Scarab Location - Map.jpg；</gallery>Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Barbaric Roar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Barbaric_Roar",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；1x Sold ，用于 800 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；1x Sold for 800 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.",
    "sourceTitle": "Ash of War: War Cry",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_War_Cry",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：Quest Item: 桂奥尔龙墓...奖励 giving 4 Deathroot to the 野兽祭司, Gurranq.",
    "details": "Quest Item: Greyoll's Dragonbarrow；Reward for giving 4 Deathroot to the Beast Clergyman, Gurranq.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Beast's Roar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Beast's_Roar",
    "verified": true
  },
  "ash-of-war:65300": {
    "kind": "ash-of-war",
    "itemId": 65300,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：地点：火焰之巅；位于 on top of a colossal skull south of the 安歇教堂, ，地点： 火焰之巅 on the 巨人山顶. The top of the colossal giant skull can be reached via a nearby Spiritspring.",
    "details": "Location: Flame Peak；Found on top of a colossal skull south of the Church of Repose, at Flame Peak on the Mountaintops of the Giants. The top of the colossal giant skull can be reached via a nearby Spiritspring.<gallery>；Ash of War- Troll's Roar - Location - Spiritspring Photo.jpg；Ash of War- Troll's Roar - Location - Spiritspring Map.jpg；Ash of War- Troll's Roar - Location - Drop Photo.jpg；Ash of War- Troll's Roar - Location - Drop Map.jpg；</gallery>；Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Troll's Roar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Troll's_Roar",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop/Quest Item: 湖之利耶尼亚 / 王城外围；位于 pre-equipped on the Iron Ball 拳头 weapon, which can be looted off the body of 流氓 Big Boggart. Who can be 位于 dead either ，地点： the hands of the player in either of his locations or 食粪者 后 he is released from his cell while Boggart is present ，地点： 王城外围.",
    "details": "Guaranteed Drop/Quest Item: Liurnia of the Lakes / Capital Outskirts；Found pre-equipped on the Iron Ball Fist weapon, which can be looted off the body of Blackguard Big Boggart. Who can be found dead either at the hands of the player in either of his locations or Dung Eater after he is released from his cell while Boggart is present at Capital Outskirts.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Braggart's Roar",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Braggart's_Roar",
    "verified": true
  },
  "ash-of-war:70000": {
    "kind": "ash-of-war",
    "itemId": 70000,
    "sourceKind": "shop",
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；1x Sold ，用于 600 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；1x Sold for 600 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Endure",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Endure",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 湖之利耶尼亚；Drops from a Scarab 位于 the middle of the swamp underneath the southwestern plateau, southeast of the 湖畔凉亭 赐福 or directly west of the 远眺岛 赐福.",
    "details": "Guaranteed Drop: Liurnia of the Lakes；Drops from a Scarab found in the middle of the swamp underneath the southwestern plateau, southeast of the Folly on the Lake Site of Grace or directly west of the Scenic Isle site of grace.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Vow of the Indomitable",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Vow_of_the_Indomitable",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：<tabber>；|-|Retail=",
    "details": "<tabber>；|-|Retail=；Guaranteed Drop: Auriza Hero's Grave；Drops from the three teleporting Chariots found within the Hero's Grave of Capital Outskirts in Altus Plateau.The player has to navigate the side section that begins in the pit towards the end of the dungeon and trigger a Flame Pillar found at the end of said side section. This will move a statue of Rosus perched on top of said pillar that projects a teleporter sigil into the middle of the hallway where the two chariots patrolling side by side can be found. Causing the third chariot to teleport in the middle of their path, initiating a mass collision that destroys all of them in the process. The player will automatically receive this item (along with the complete Tree Sentinel Set) in their inventory once the final chariot collides.The player can also more easily trigger this flame pillar without needing to explore the side section. The moment they enter the hall with the two chariots, the player can use Margit's or Mohg's Shackle (as despite doing no direct damage, both of these items sport enormous hitboxes that ignore walls) allowing them to trigger the flame pillar without needing direct line of sight with said pillar.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.|-|CNT=；Guaranteed Drop: Limgrave；Drops from the Tree Sentinel found near The First Step Site of Grace.</tabber>",
    "sourceTitle": "Ash of War: Holy Ground",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Holy_Ground",
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
    "summary": "商店购买：Purchase: 风暴山丘 / 火山官邸；1x Sold ，用于 800 卢恩 from Bernahl ，地点： either the 习战者的破屋 in 风暴山丘 or the Drawing Room of 火山官邸.",
    "details": "Purchase: Stormhill / Volcano Manor；1x Sold for 800 Runes from Bernahl at either the Warmaster's Shack in Stormhill or the Drawing Room of Volcano Manor.Should Bernahl be killed before purchasing it from him, this item can still be bought from the Twin Maiden Husks for the same price after giving them Bernahl's Bell Bearing.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Quickstep",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Quickstep",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 桂奥尔龙墓；Drops from a the 黑夜骑兵 patrolling the easternmost bridge of Dragobarrow, north of 雷恩魔法师塔 期间 the night.",
    "details": "Guaranteed Drop: Greyoll's Dragonbarrow；Drops from a the Night's Cavalry patrolling the easternmost bridge of Dragobarrow, north of Lenne's Rise during the night.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Bloodhound's Step",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Bloodhound's_Step",
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
    "summary": "敌人 / 首领掉落：Quest Item: 湖之利耶尼亚；自动matically acquired 后 successfully assisting Yura in defeating “血指”鸦山的杀手 附近 the 学院正门口 赐福. Can be accessed by touching a red Summoning Sign 附近 the edge of the broken bridge north of the 赐福. The sign will only appear 后 the player has talked to Yura 后 defeating “血指”涅利乌斯.",
    "details": "Quest Item: Liurnia of the Lakes；Automatically acquired after successfully assisting Yura in defeating Bloody Finger Ravenmount Assassin near the Main Academy Gate Site of Grace. Can be accessed by touching a red Summoning Sign near the edge of the broken bridge north of the grace. The sign will only appear after the player has talked to Yura after defeating Bloody Finger Nerijus.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Raptor of the Mists",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Raptor_of_the_Mists",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 化圣雪原；击杀后掉落： an invisible Scarab ，地点： the 化圣雪原. North-west of the 化圣雪原（深处） 赐福, just north of the river. There will be a pack of wolves chasing it.",
    "details": "Guaranteed Drop: Consecrated Snowfield；Dropped by an invisible Scarab at the Consecrated Snowfield. North-west of the Inner Consecrated Snowfield Site of Grace, just north of the river. There will be a pack of wolves chasing it.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: White Shadow's Lure",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_White_Shadow's_Lure",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Ash of War: Dryleaf Whirlwind",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Dryleaf_Whirlwind",
    "verified": false
  },
  "ash-of-war:200100": {
    "kind": "ash-of-war",
    "itemId": 200100,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Ash of War: Aspects of the Crucible: Wings is acquired upon defeating the “黑骑士”艾瑞德 boss ，地点： the 惩罚要塞, located on the 幽影亚坛.",
    "details": "Ash of War: Aspects of the Crucible: Wings is acquired upon defeating the Black Knight Edredd boss at the Fort of Reprimand, located on the Scadu Altus.",
    "sourceTitle": "Ash of War: Aspects of the Crucible: Wings",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Aspects_of_the_Crucible%3A_Wings",
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
    "sourceKind": "quest",
    "summary": "任务 / 事件奖励：拾取：；Comes equipped to the Sword Lance, one of the possible rewards when trading Remembrance of the Wild Boar Rider with Enia ，地点： the 圆桌厅堂.",
    "details": "Loot:；Comes equipped to the Sword Lance, one of the possible rewards when trading Remembrance of the Wild Boar Rider with Enia at the Roundtable Hold.",
    "sourceTitle": "Ash of War: Spinning Gravity Thrust",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Spinning_Gravity_Thrust",
    "verified": true
  },
  "ash-of-war:401000": {
    "kind": "ash-of-war",
    "itemId": 401000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Palm Blast",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Palm_Blast",
    "verified": false
  },
  "ash-of-war:402000": {
    "kind": "ash-of-war",
    "itemId": 402000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 幽影亚坛；击杀后掉落： an explosive Teardrop Scarab 位于 by one of the pillars just east of the 古铁陨石锻造遗迹.",
    "details": "Guaranteed Drop: Scadu Altus；Dropped by an explosive Teardrop Scarab found by one of the pillars just east of the Ruined Forge of Starfall Past.It's guarded by a small group of Misbegotten.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Piercing Throw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Piercing_Throw",
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
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 劳弗古遗迹；击杀后掉落： a hanging Teardrop Scarab 位于 on a small pillar next to the foot of the large bridge south of 泰乌尔锻造遗迹.",
    "details": "Guaranteed Drop: Ancient Ruins of Rauh；Dropped by a hanging Teardrop Scarab found on a small pillar next to the foot of the large bridge south of Taylew's Ruined Forge.The pillar is one of the ones in the lower area of Rauh, on the eastern side of the road heading south from the Forge, and is just south of the bridge itself.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Scattershot Throw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Scattershot_Throw",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Ash of War: Wall of Sparks",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Wall_of_Sparks",
    "verified": false
  },
  "ash-of-war:405000": {
    "kind": "ash-of-war",
    "itemId": 405000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Rolling Sparks",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Rolling_Sparks",
    "verified": false
  },
  "ash-of-war:406000": {
    "kind": "ash-of-war",
    "itemId": 406000,
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 幽影亚坛；击杀后掉落： a teleporting Teardrop Scarab 位于 on a small hill east of the road leading north-northeast from the 东方无名灵庙 and 通村吊桥 赐福. The Scarab is slightly visible from the road.",
    "details": "Guaranteed Drop: Scadu Altus；Dropped by a teleporting Teardrop Scarab found on a small hill east of the road leading north-northeast from the Eastern Nameless Mausoleum and Bridge Leading to the Village Site of Grace. The Scarab is slightly visible from the road.The location is also southeast of the Cathedral of Manus Metyr and northeast of Bonny Village.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Raging Beast",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Raging_Beast",
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
    "sourceKind": "enemy",
    "summary": "敌人 / 首领掉落：Guaranteed Drop: 墓地平原；Equipped to the 兽爪, 击杀后掉落： Logur, 兽爪 in southern 墓地平原. 位于 southeast of the 墓地平原 赐福 or far south of 火吻废墟.",
    "details": "Guaranteed Drop: Gravesite Plain；Equipped to the Beast Claw, dropped by Logur, Beast Claw in southern Gravesite Plain. Found southeast of the Gravesite Plain Site of Grace or far south of Scorched Ruins.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Savage Claws",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Savage_Claws",
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
    "summary": "地图拾取 / 宝箱：拾取：墓地平原；位于 pre-equipped on the 反手剑, which is 位于 a small stone building north-northeast of 火吻废墟 or east-southeast of 三叉口的十字记号 赐福.",
    "details": "Loot: Gravesite Plain；Found pre-equipped on the Backhand Blade, which is found in a small stone building north-northeast of Scorched Ruins or east-southeast of Three-Path Cross Site of Grace.",
    "sourceTitle": "Ash of War: Blind Spot",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Blind_Spot",
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
    "summary": "任务 / 事件奖励：Missable 拾取：幽影城；由...赠予 角人 ，用于 using a golden summon sign to aid him against “金针骑士”蕾妲 when she invades him in 幽影城, on the battlements just before the 保藏库（一楼） 赐福.",
    "details": "Missable Loot: Shadow Keep；Given by Hornsent for using a golden summon sign to aid him against Needle Knight Leda when she invades him in Shadow Keep, on the battlements just before the Storehouse, First Floor Site of Grace.Given alongside Leda's Rune and is mutually exclusive with Ansbach's Longbow , Lacerating Crossed-Tree , and Retaliatory Crossed-Tree , and ends Leda's questline until Enir-Ilim.<font color=\"red\">WARNING:</font> If Messmer the Impaler is encountered before the summon sign is used, it will disappear.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Swift Slash",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Swift_Slash",
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
    "summary": "地图拾取 / 宝箱：拾取：墓地平原；位于 equipped to the 大刀, which in turn is 位于 the middle of the lake in between 贝瑞特监牢 and 置病村. Guarded by a sleeping 灵火龙.",
    "details": "Loot: Gravesite Plain；Found equipped to the Great Katana, which in turn is found in the middle of the lake in between Belurat Gaol and Abandoned Ailing Village. Guarded by a sleeping Ghostflame Dragon.Once this item has been obtained, it can be duplicated by trading in Lost Ashes of War to Smithing Master Hewg.",
    "sourceTitle": "Ash of War: Overhead Stance",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Overhead_Stance",
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
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Ash of War: Wing Stance",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Wing_Stance",
    "verified": false
  },
  "ash-of-war:413000": {
    "kind": "ash-of-war",
    "itemId": 413000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Ash of War: Blinkbolt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Blinkbolt",
    "verified": false
  },
  "ash-of-war:414000": {
    "kind": "ash-of-war",
    "itemId": 414000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Flame Skewer",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Flame_Skewer",
    "verified": false
  },
  "ash-of-war:415000": {
    "kind": "ash-of-war",
    "itemId": 415000,
    "sourceKind": "map",
    "summary": "地图拾取 / 宝箱：拾取：墓地平原；Ash of War: Savage Lion's 钩爪 is 位于 a small camp northwest of the 赐福 三叉口的十字记号 赐福 and directly west of 旅人的破屋. 头盔 north along the cliff just west of the 赐福 to find it more easily.",
    "details": "Loot: Gravesite Plain；Ash of War: Savage Lion's Claw is found in a small camp northwest of the 赐福 Three-Path Cross Site of Grace and directly west of Run-Down Traveler's Rest. Head north along the cliff just west of the Site of Grace to find it more easily.",
    "sourceTitle": "Ash of War: Savage Lion's Claw",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Savage_Lion's_Claw",
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
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Divine Beast Frost Stomp",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Divine_Beast_Frost_Stomp",
    "verified": false
  },
  "ash-of-war:417000": {
    "kind": "ash-of-war",
    "itemId": 417000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Flame Spear",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Flame_Spear",
    "verified": false
  },
  "ash-of-war:418000": {
    "kind": "ash-of-war",
    "itemId": 418000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Carian Sovereignty",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Carian_Sovereignty",
    "verified": false
  },
  "ash-of-war:419000": {
    "kind": "ash-of-war",
    "itemId": 419000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Ash of War: Shriek of Sorrow",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Shriek_of_Sorrow",
    "verified": false
  },
  "ash-of-war:422000": {
    "kind": "ash-of-war",
    "itemId": 422000,
    "sourceKind": "unknown",
    "summary": "待核对：地图数据已收录，可使用定位图钉查看附近来源。",
    "details": "",
    "sourceTitle": "Ash of War: Ghostflame Call",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Ghostflame_Call",
    "verified": false
  },
  "ash-of-war:505000": {
    "kind": "ash-of-war",
    "itemId": 505000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: The Poison Flower Blooms Twice",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_The_Poison_Flower_Blooms_Twice",
    "verified": false
  },
  "ash-of-war:548000": {
    "kind": "ash-of-war",
    "itemId": 548000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Igon's Drake Hunt",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Igon's_Drake_Hunt",
    "verified": false
  },
  "ash-of-war:800000": {
    "kind": "ash-of-war",
    "itemId": 800000,
    "sourceKind": "unknown",
    "summary": "待核对：攻略资料暂未收录明确获取段落。",
    "details": "",
    "sourceTitle": "Ash of War: Shield Strike",
    "sourceUrl": "https://eldenring.fandom.com/wiki/Ash_of_War%3A_Shield_Strike",
    "verified": false
  }
};
