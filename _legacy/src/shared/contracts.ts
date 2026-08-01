export const INVENTORY_CATEGORIES = [
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
] as const

export type InventoryCategory = (typeof INVENTORY_CATEGORIES)[number]
export type InventoryAvailability = 'available' | 'not-supported'

export type InventorySource = 'held' | 'storage'

export interface CatalogItem {
  id: number
  name: string
  category: InventoryCategory
  expansion: 'base' | 'shadow-of-the-erdtree'
  icon: ItemIcon
}

export type ItemIcon = 'sword' | 'shield' | 'bow' | 'helm' | 'ring' | 'spark' | 'scroll' | 'spirit' | 'flask' | 'ore' | 'key' | 'note' | 'gesture'

export interface ProgressEntry {
  id: number
  name: string
  location?: string
  completed: boolean
}

export interface InventoryProgress {
  availability: InventoryAvailability
  items: InventoryItem[]
  storageAvailable: boolean
  message?: string
}

export interface InventoryItem {
  itemId: number
  handle: number
  quantity: number
  source: InventorySource
  catalogId?: number
  name?: string
  category?: InventoryCategory
  icon?: ItemIcon
  upgradeLevel?: number
}

export interface CharacterProgress {
  id: string
  slotIndex: number
  name: string
  level?: number
  secondsPlayed?: number
  mapName?: string
  bosses: ProgressEntry[]
  graces: ProgressEntry[]
  inventory: InventoryProgress
}

export interface SaveSnapshot {
  formatVersion?: number
  parserVersion: string
  characters: CharacterProgress[]
}

export interface ImportSuccess {
  ok: true
  save: SaveSnapshot
}

export interface ImportFailure {
  ok: false
  code: 'cancelled' | 'invalid-save' | 'unsupported-save' | 'read-failed'
  message: string
}

export type ImportResult = ImportSuccess | ImportFailure

export interface SteamAchievement {
  id: string
  name: string
  description?: string
  unlocked: boolean
  unlockedAt?: number
  iconUrl?: string
  grayIconUrl?: string
  hidden: boolean
}

export interface SteamAchievementsSuccess {
  ok: true
  achievements: SteamAchievement[]
}

export interface SteamAchievementsFailure {
  ok: false
  code: 'not-configured' | 'private-profile' | 'request-failed'
  message: string
}

export type SteamAchievementsResult = SteamAchievementsSuccess | SteamAchievementsFailure

export interface SaveScopeApi {
  importEldenRingSave: () => Promise<ImportResult>
  getSteamAchievements: () => Promise<SteamAchievementsResult>
}
