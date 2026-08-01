import { describe, expect, it } from 'vitest'
import { resolveInventoryCatalogItem } from './inventory-catalog'

describe('inventory catalog resolution', () => {
  it('normalizes an upgraded weapon to its catalog record', () => {
    expect(resolveInventoryCatalogItem(7_050_010)).toMatchObject({
      id: 7_050_000,
      name: '熔岩刀',
      category: 'weapons-shields'
    })
  })

  it('normalizes every regular weapon upgrade level, not only max reinforcement', () => {
    expect(resolveInventoryCatalogItem(21_130_009, 'weapon')).toMatchObject({
      id: 21_130_000,
      category: 'weapons-shields'
    })
  })

  it('uses the encoded type marker to disambiguate armor and Ashes of War', () => {
    expect(resolveInventoryCatalogItem(0x10000000 + 660_100)).toMatchObject({
      id: 660_100,
      name: '流浪骑士铠甲',
      category: 'armor'
    })
    expect(resolveInventoryCatalogItem(0x80000000 + 10_000)).toMatchObject({
      id: 10_000,
      name: '战灰：狮子斩',
      category: 'ashes-of-war'
    })
  })
})
