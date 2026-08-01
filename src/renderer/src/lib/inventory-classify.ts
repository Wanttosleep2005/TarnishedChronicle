/** 行囊按游戏内划分归类(数据来源:GOODS.category / WEAPONS.category)。 */
import { goodById, weaponById, type InventoryEntry } from './derive.ts';

export type GameTab =
  | 'weapon'
  | 'ammo'
  | 'armor'
  | 'talisman'
  | 'aow'
  | 'sorcery'
  | 'incant'
  | 'ash'
  | 'tool'
  | 'material'
  | 'key';

export const GAME_TABS: { key: GameTab; label: string }[] = [
  { key: 'weapon', label: '武器' },
  { key: 'ammo', label: '箭·弩箭' },
  { key: 'armor', label: '防具' },
  { key: 'talisman', label: '护符' },
  { key: 'aow', label: '战灰' },
  { key: 'sorcery', label: '魔法' },
  { key: 'incant', label: '祷告' },
  { key: 'ash', label: '骨灰' },
  { key: 'tool', label: '道具' },
  { key: 'material', label: '素材' },
  { key: 'key', label: '贵重物品' },
];

export function classifyEntry(row: InventoryEntry): GameTab {
  switch (row.kind) {
    case 'armor':
      return 'armor';
    case 'talisman':
      return 'talisman';
    case 'aow':
      return 'aow';
    case 'weapon': {
      const category = weaponById.get(row.paramId)?.category ?? weaponById.get(row.paramId - (row.paramId % 10000))?.category ?? '';
      return /arrow|bolt/i.test(category) ? 'ammo' : 'weapon';
    }
    default: {
      const category = goodById.get(row.paramId)?.category ?? '';
      switch (category) {
        case 'Sorcery':
          return 'sorcery';
        case 'Incantation':
          return 'incant';
        case 'Spirit Ash':
          return 'ash';
        case 'Key Item':
        case 'Info Item':
        case 'Great Rune':
        case 'Remembrance':
        case 'Wondrous Physick':
        case 'Crystal Tear':
        case 'Gesture':
          return 'key';
        case 'Crafting Material':
        case 'Upgrade Material':
        case 'Crafting Tool':
          return 'material';
        default:
          return 'tool';
      }
    }
  }
}
