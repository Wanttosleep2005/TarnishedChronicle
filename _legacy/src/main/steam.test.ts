import { describe, expect, it } from 'vitest'
import { mapSteamAchievements } from './steam'

describe('Steam achievement mapping', () => {
  it('combines player unlock state with schema icons and Chinese names', () => {
    const mapped = mapSteamAchievements(
      [{ apiname: 'ACH_BOSS', achieved: 1, unlocktime: 123 }],
      [{ name: 'ACH_BOSS', displayName: '恶兆妖鬼', description: '击败恶兆妖鬼', hidden: 0, icon: 'https://example.test/a.png', icongray: 'https://example.test/b.png' }]
    )

    expect(mapped).toEqual([
      expect.objectContaining({ id: 'ACH_BOSS', name: '恶兆妖鬼', unlocked: true, iconUrl: 'https://example.test/a.png' })
    ])
  })
})
