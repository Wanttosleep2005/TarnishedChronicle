import type { CatalogItem, InventoryCategory } from '../../../shared/contracts.js'
import { INVENTORY_CATALOG } from './inventory-catalog.generated.js'

const TYPE_MASK = 0x10000000

export type InventoryHandleType = 'weapon' | 'armor' | 'accessory' | 'item' | 'aow'

const catalogByCategoryAndId = new Map<string, CatalogItem>(
  INVENTORY_CATALOG.map((item) => [`${item.category}:${item.id}`, item])
)

const categories: readonly InventoryCategory[] = [
  'weapons-shields',
  'ammunition',
  'armor',
  'talismans',
  'ashes-of-war',
  'spells',
  'spirit-ashes',
  'tools',
  'crafting-materials',
  'bolstering-materials',
  'key-items',
  'info-items',
  'gestures'
]

function find(category: InventoryCategory, id: number): CatalogItem | undefined {
  return catalogByCategoryAndId.get(`${category}:${id}`)
}

function findAny(id: number): CatalogItem | undefined {
  const matches = categories.map((category) => find(category, id)).filter((item): item is CatalogItem => item !== undefined)
  return matches.length === 1 ? matches[0] : undefined
}

function findFirst(id: number, allowedCategories: readonly InventoryCategory[]): CatalogItem | undefined {
  return allowedCategories.map((category) => find(category, id)).find((item) => item !== undefined)
}

function normalizeWeaponId(id: number): number {
  return id - (id % 100)
}

export function resolveInventoryCatalogItem(rawItemId: number, handleType?: InventoryHandleType): CatalogItem | undefined {
  const normalizedRawItemId = rawItemId >>> 0
  const encodedType = Math.floor(normalizedRawItemId / TYPE_MASK)
  const itemId = normalizedRawItemId % TYPE_MASK

  if (handleType === 'weapon') {
    const normalizedId = normalizeWeaponId(itemId)
    return findFirst(itemId, ['weapons-shields', 'ammunition']) ?? findFirst(normalizedId, ['weapons-shields', 'ammunition'])
  }
  if (handleType === 'armor') return find('armor', itemId)
  if (handleType === 'accessory') return find('talismans', itemId)
  if (handleType === 'aow') return find('ashes-of-war', itemId)
  if (handleType === 'item') {
    return findFirst(itemId, [
      'spells',
      'spirit-ashes',
      'tools',
      'crafting-materials',
      'bolstering-materials',
      'key-items',
      'info-items',
      'gestures'
    ])
  }

  if (encodedType === 1) return find('armor', itemId) ?? findAny(itemId)
  if (encodedType === 8) return find('ashes-of-war', itemId) ?? findAny(itemId)

  if (encodedType === 0) {
    const normalizedId = normalizeWeaponId(itemId)
    return (
      find('weapons-shields', itemId) ??
      find('ammunition', itemId) ??
      find('weapons-shields', normalizedId) ??
      find('ammunition', normalizedId) ??
      findAny(itemId) ??
      findAny(normalizedId)
    )
  }

  return findAny(itemId)
}

export function getInventoryCatalog(): readonly CatalogItem[] {
  return INVENTORY_CATALOG
}
