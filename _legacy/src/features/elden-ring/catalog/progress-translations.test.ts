import { describe, expect, it } from 'vitest'
import { BOSS_TRANSLATIONS, PLACE_TRANSLATIONS, readableProgressTranslation } from './progress-translations'

describe('progress translations', () => {
  it('replaces generated question-mark placeholders with Chinese labels', () => {
    expect(BOSS_TRANSLATIONS['Godskin Duo']).toBe('神皮双人组')
    expect(PLACE_TRANSLATIONS['Gateside Chamber']).toBe('关卡前方')
  })

  it('never treats question-mark placeholders as display names', () => {
    expect(readableProgressTranslation('????')).toBeUndefined()
    expect(readableProgressTranslation('?? ??')).toBeUndefined()
    expect(readableProgressTranslation('未收录中文地点')).toBe('未收录中文地点')
  })
})
