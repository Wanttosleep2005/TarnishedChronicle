import { describe, expect, it } from 'vitest'
import type { EventFlag } from '@zebbedaja/er-save-parser'
import { parseEldenRingSave, toProgressEntries } from './save-adapter'

describe('save adapter', () => {
  it('rejects a buffer before calling the full parser when the save magic is invalid', () => {
    expect(() => parseEldenRingSave(new Uint8Array([0, 0, 0, 0]).buffer)).toThrow('存档头无效')
  })

  it('does not expose unresolved question-mark event names as progress entries', () => {
    const events = [
      { id: 1, category: 'boss', name: '?? ??', location: 'Gateside Chamber', state: true },
      { id: 2, category: 'boss', name: 'Godskin Duo', location: 'Gateside Chamber', state: false }
    ] as EventFlag[]

    expect(toProgressEntries(events, 'boss')).toEqual([
      { id: 2, name: '神皮双人组', location: '关卡前方', completed: false }
    ])
  })
})
