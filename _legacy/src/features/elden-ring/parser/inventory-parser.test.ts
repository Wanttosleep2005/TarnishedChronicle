import { describe, expect, it } from 'vitest'
import { extractSlotInventoryDetails } from './inventory-parser'

const SLOT_START = 0x300
const SLOT_SIZE = 0x280010
const GAITEM_START = SLOT_START + 0x30
const GAITEM_COUNT = 0x1400
const INVENTORY_START = GAITEM_START + 16 + (GAITEM_COUNT - 1) * 8 + 0x1b0 + 13 * 16 + 0x58 + 0x1c + 0x58 + 0x58

function writeGaItem(view: DataView, offset: number, handle: number, itemId: number): number {
  view.setUint32(offset, handle, true)
  view.setUint32(offset + 4, itemId, true)
  const handleClass = (handle & 0xf0000000) >>> 0
  let nextOffset = offset + 8
  if (handle !== 0 && handleClass !== 0xc0000000) nextOffset += 8
  if (handleClass === 0x80000000) nextOffset += 5
  return nextOffset
}

function createCompassHandleFixture(): ArrayBuffer {
  const buffer = new ArrayBuffer(SLOT_START + SLOT_SIZE)
  const view = new DataView(buffer)
  const weaponHandle = 0x80000001
  const ashOfWarHandle = 0xc0000001
  let gaitemOffset = GAITEM_START

  view.setUint32(SLOT_START + 16, 82, true)
  gaitemOffset = writeGaItem(view, gaitemOffset, weaponHandle, 1_000_007)
  gaitemOffset = writeGaItem(view, gaitemOffset, ashOfWarHandle, 0x80000000 + 10_000)
  gaitemOffset += (GAITEM_COUNT - 2) * 8

  const heldStart = gaitemOffset + 0x1b0 + 13 * 16 + 0x58 + 0x1c + 0x58 + 0x58
  view.setUint32(heldStart, 5, true)

  const entries = [
    [weaponHandle, 3],
    [(0xa0000000 ^ 8170) >>> 0, 1],
    [(0xb0000000 ^ 4000) >>> 0, 1],
    [ashOfWarHandle, 1],
    [(0xb0000000 ^ 200_000) >>> 0, 1]
  ] as const

  for (const [index, [handle, quantity]] of entries.entries()) {
    const offset = heldStart + 4 + index * 12
    view.setUint32(offset, handle, true)
    view.setUint32(offset + 4, quantity, true)
  }

  return buffer
}

function createInventoryFixture(): { buffer: ArrayBuffer; heldCountOffset: number } {
  const buffer = new ArrayBuffer(SLOT_START + SLOT_SIZE)
  const view = new DataView(buffer)
  const handle = 0x10000001

  view.setUint32(SLOT_START + 16, 82, true)
  view.setUint32(GAITEM_START, handle, true)
  view.setUint32(GAITEM_START + 4, 1_000_000, true)

  view.setUint32(INVENTORY_START, 1, true)
  view.setUint32(INVENTORY_START + 4, handle, true)
  view.setUint32(INVENTORY_START + 8, 3, true)

  const heldEnd = INVENTORY_START + 4 + 0xa80 * 12 + 4 + 0x180 * 12 + 8
  const storageStart = heldEnd + 0x74 + 0x8c + 4 + 0x9c + 0x0c + 0x12f
  view.setUint32(storageStart, 1, true)
  view.setUint32(storageStart + 4, handle, true)
  view.setUint32(storageStart + 8, 9, true)

  return { buffer, heldCountOffset: INVENTORY_START }
}

describe('inventory parser', () => {
  it('resolves GaItem handles and preserves held and storage quantities', () => {
    const { buffer } = createInventoryFixture()

    expect(extractSlotInventoryDetails(buffer, 0)).toEqual({
      storageAvailable: true,
      items: [
        {
          itemId: 1_000_000,
          catalogId: 1_000_000,
          name: '匕首',
          category: 'weapons-shields',
          icon: 'sword',
          handle: 0x10000001,
          quantity: 3,
          source: 'held'
        },
        {
          itemId: 1_000_000,
          catalogId: 1_000_000,
          name: '匕首',
          category: 'weapons-shields',
          icon: 'sword',
          handle: 0x10000001,
          quantity: 9,
          source: 'storage'
        }
      ]
    })
  })

  it('rejects inventory counts that exceed the fixed format capacity', () => {
    const { buffer, heldCountOffset } = createInventoryFixture()
    new DataView(buffer).setUint32(heldCountOffset, 0xa81, true)

    expect(() => extractSlotInventoryDetails(buffer, 0)).toThrow('库存条目数量超出格式上限')
  })

  it('keeps readable held inventory when the optional storage segment is invalid', () => {
    const { buffer } = createInventoryFixture()
    const heldEnd = INVENTORY_START + 4 + 0xa80 * 12 + 4 + 0x180 * 12 + 8
    const storageStart = heldEnd + 0x74 + 0x8c + 4 + 0x9c + 0x0c + 0x12f
    new DataView(buffer).setUint32(storageStart, 0x781, true)

    expect(extractSlotInventoryDetails(buffer, 0)).toMatchObject({
      storageAvailable: false,
      items: [
        {
          itemId: 1_000_000,
          catalogId: 1_000_000,
          name: '匕首',
          category: 'weapons-shields',
          handle: 0x10000001,
          quantity: 3,
          source: 'held'
        }
      ]
    })
  })

  it('decodes Compass GaItem handle types for talismans, spells, spirit ashes, and Ashes of War', () => {
    const items = extractSlotInventoryDetails(createCompassHandleFixture(), 0).items

    expect(items.map((item) => item.category)).toEqual([
      'weapons-shields',
      'talismans',
      'spells',
      'ashes-of-war',
      'spirit-ashes'
    ])
    expect(items[0]?.upgradeLevel).toBe(7)
  })
})
