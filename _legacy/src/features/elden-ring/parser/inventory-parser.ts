import type { InventoryItem, InventorySource } from '../../../shared/contracts.js'
import { resolveInventoryCatalogItem, type InventoryHandleType } from '../catalog/inventory-catalog.js'

const SLOT_START = 0x300
const SLOT_SIZE = 0x280010
const SLOT_COUNT = 10
const PLAYER_GAME_DATA_LENGTH = 0x1b0
const SP_EFFECTS_LENGTH = 13 * 16
const EQUIP_SLOTS_LENGTH = 0x58
const ACTIVE_WEAPON_SLOTS_LENGTH = 0x1c
const CHR_ASM_LENGTH = 0x58
const HELD_COMMON_CAPACITY = 0xa80
const HELD_KEY_CAPACITY = 0x180
const STORAGE_COMMON_CAPACITY = 0x780
const STORAGE_KEY_CAPACITY = 0x80
const SPELLS_LENGTH = 0x74
const EQUIP_ITEM_DATA_LENGTH = 0x8c
const EQUIPPED_ARMAMENTS_AND_ITEMS_LENGTH = 0x9c
const PHYSICK_LENGTH = 0x0c
const FACE_DATA_LENGTH = 0x12f
const CURRENT_GAITEM_COUNT = 0x1400
const LEGACY_GAITEM_COUNT = 0x13fe
const HANDLE_TYPE_MASK = 0xf0000000

interface DecodedInventoryHandle {
  itemId: number
  type?: InventoryHandleType
}

interface Cursor {
  readonly view: DataView
  offset: number
  readonly end: number
}

export interface ExtractedInventory {
  items: InventoryItem[]
  storageAvailable: boolean
}

function ensure(cursor: Cursor, length: number): void {
  if (!Number.isInteger(length) || length < 0 || cursor.offset + length > cursor.end) {
    throw new RangeError('库存数据超出存档槽位边界。')
  }
}

function u32(cursor: Cursor): number {
  ensure(cursor, 4)
  const value = cursor.view.getUint32(cursor.offset, true)
  cursor.offset += 4
  return value
}

function skip(cursor: Cursor, length: number): void {
  ensure(cursor, length)
  cursor.offset += length
}

function readGaItems(cursor: Cursor, count: number): Map<number, number> {
  const itemByHandle = new Map<number, number>()

  for (let index = 0; index < count; index += 1) {
    const handle = u32(cursor)
    const itemId = u32(cursor)
    const handleClass = (handle & 0xf0000000) >>> 0

    if (handle !== 0) itemByHandle.set(handle, itemId)
    if (handle !== 0 && handleClass !== 0xc0000000) skip(cursor, 8)
    if (handleClass === 0x80000000) skip(cursor, 5)
  }

  return itemByHandle
}

function decodeInventoryHandle(handle: number, itemByHandle: Map<number, number>): DecodedInventoryHandle | undefined {
  const handleClass = (handle & HANDLE_TYPE_MASK) >>> 0
  const mappedItemId = itemByHandle.get(handle)

  switch (handleClass) {
    case 0x80000000:
      return mappedItemId === undefined ? undefined : { itemId: mappedItemId, type: 'weapon' }
    case 0x90000000:
      return mappedItemId === undefined ? undefined : { itemId: (mappedItemId ^ 0x10000000) >>> 0, type: 'armor' }
    case 0xa0000000:
      return { itemId: (handle ^ 0xa0000000) >>> 0, type: 'accessory' }
    case 0xb0000000:
      return { itemId: (handle ^ 0xb0000000) >>> 0, type: 'item' }
    case 0xc0000000:
      return mappedItemId === undefined ? undefined : { itemId: (mappedItemId ^ 0x80000000) >>> 0, type: 'aow' }
    default:
      return mappedItemId === undefined ? undefined : { itemId: mappedItemId }
  }
}

function readInventorySection(
  cursor: Cursor,
  itemByHandle: Map<number, number>,
  source: InventorySource,
  capacity: number
): InventoryItem[] {
  const count = u32(cursor)
  if (count > capacity) throw new Error('库存条目数量超出格式上限。')

  const items: InventoryItem[] = []
  for (let index = 0; index < capacity; index += 1) {
    const handle = u32(cursor)
    const quantity = u32(cursor)
    skip(cursor, 4)

    if (index >= count || handle === 0 || quantity === 0) continue
    const decodedHandle = decodeInventoryHandle(handle, itemByHandle)
    if (!decodedHandle) continue
    const { itemId } = decodedHandle
    const catalogItem = resolveInventoryCatalogItem(itemId, decodedHandle.type)
    const reinforcement = itemId % 100
    const upgradeLevel =
      decodedHandle.type === 'weapon' &&
      catalogItem?.category === 'weapons-shields' &&
      reinforcement > 0 &&
      reinforcement <= 25
        ? reinforcement
        : undefined
    items.push({
      itemId,
      handle,
      quantity,
      source,
      ...(catalogItem
        ? {
            catalogId: catalogItem.id,
            name: catalogItem.name,
            category: catalogItem.category,
            icon: catalogItem.icon
          }
        : {}),
      ...(upgradeLevel === undefined ? {} : { upgradeLevel })
    })
  }

  return items
}

function readInventory(
  cursor: Cursor,
  itemByHandle: Map<number, number>,
  source: InventorySource,
  commonCapacity: number,
  keyCapacity: number
): InventoryItem[] {
  const items = readInventorySection(cursor, itemByHandle, source, commonCapacity)
  items.push(...readInventorySection(cursor, itemByHandle, source, keyCapacity))
  skip(cursor, 8)
  return items
}

function skipToStorageInventory(cursor: Cursor): void {
  skip(cursor, SPELLS_LENGTH)
  skip(cursor, EQUIP_ITEM_DATA_LENGTH)
  const projectileCount = u32(cursor)
  ensure(cursor, projectileCount * 8)
  skip(cursor, projectileCount * 8)
  skip(cursor, EQUIPPED_ARMAMENTS_AND_ITEMS_LENGTH)
  skip(cursor, PHYSICK_LENGTH)
  skip(cursor, FACE_DATA_LENGTH)
}

function extractWithGaitemCount(buffer: ArrayBuffer, slotIndex: number, gaitemCount: number): ExtractedInventory {
  const slotStart = SLOT_START + slotIndex * SLOT_SIZE
  const slotEnd = slotStart + SLOT_SIZE
  const cursor: Cursor = { view: new DataView(buffer), offset: slotStart, end: slotEnd }

  skip(cursor, 16)
  u32(cursor)
  skip(cursor, 4)
  skip(cursor, 24)

  const itemByHandle = readGaItems(cursor, gaitemCount)
  skip(cursor, PLAYER_GAME_DATA_LENGTH)
  skip(cursor, SP_EFFECTS_LENGTH)
  skip(cursor, EQUIP_SLOTS_LENGTH)
  skip(cursor, ACTIVE_WEAPON_SLOTS_LENGTH)
  skip(cursor, EQUIP_SLOTS_LENGTH)
  skip(cursor, CHR_ASM_LENGTH)

  const held = readInventory(cursor, itemByHandle, 'held', HELD_COMMON_CAPACITY, HELD_KEY_CAPACITY)

  try {
    skipToStorageInventory(cursor)
    return {
      items: [...held, ...readInventory(cursor, itemByHandle, 'storage', STORAGE_COMMON_CAPACITY, STORAGE_KEY_CAPACITY)],
      storageAvailable: true
    }
  } catch {
    return { items: held, storageAvailable: false }
  }
}

export function extractSlotInventoryDetails(buffer: ArrayBuffer, slotIndex: number): ExtractedInventory {
  if (!Number.isInteger(slotIndex) || slotIndex < 0 || slotIndex >= SLOT_COUNT) {
    throw new RangeError('角色槽位索引无效。')
  }

  const slotStart = SLOT_START + slotIndex * SLOT_SIZE
  const slotEnd = slotStart + SLOT_SIZE
  if (buffer.byteLength < slotEnd) throw new RangeError('存档不包含完整的角色槽位。')

  const slotVersion = new DataView(buffer).getUint32(slotStart + 16, true)
  if (slotVersion > 81) return extractWithGaitemCount(buffer, slotIndex, CURRENT_GAITEM_COUNT)

  try {
    return extractWithGaitemCount(buffer, slotIndex, LEGACY_GAITEM_COUNT)
  } catch (legacyFormatError) {
    try {
      return extractWithGaitemCount(buffer, slotIndex, CURRENT_GAITEM_COUNT)
    } catch {
      throw legacyFormatError
    }
  }
}

export function extractSlotInventory(buffer: ArrayBuffer, slotIndex: number): InventoryItem[] {
  return extractSlotInventoryDetails(buffer, slotIndex).items
}
