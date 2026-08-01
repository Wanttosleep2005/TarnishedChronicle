import { parse, type EventFlag, type Save } from '@zebbedaja/er-save-parser'
import type { CharacterProgress, ProgressEntry, SaveSnapshot } from '../../../shared/contracts.js'
import { BOSS_TRANSLATIONS, PLACE_TRANSLATIONS, readableProgressTranslation } from '../catalog/progress-translations.js'
import { validateSaveHeader } from './binary-reader.js'
import { extractSlotInventoryDetails } from './inventory-parser.js'

export const SAVE_PARSER_VERSION = 'er-save-parser@0.1.9 + save-scope-inventory@0.1.0 + local-catalog@2026.07'

function localize(value: string | undefined, translations: Readonly<Record<string, string>>): string | undefined {
  if (!value) return undefined
  return readableProgressTranslation(translations[value])
}

export function toProgressEntries(events: EventFlag[] | undefined, category: 'boss' | 'grace'): ProgressEntry[] {
  const translations = category === 'boss' ? BOSS_TRANSLATIONS : PLACE_TRANSLATIONS

  return (events ?? [])
    .filter((event) => event.category === category)
    .map((event) => {
      const name = localize(event.name, translations)
      if (!name) return undefined
      const location = localize(event.location, PLACE_TRANSLATIONS)
      return {
        id: event.id,
        name,
        completed: event.state === true,
        ...(location ? { location } : {})
      }
    })
    .filter((entry): entry is ProgressEntry => entry !== undefined)
    .sort((left, right) => left.name.localeCompare(right.name, 'zh-CN'))
}

function toCharacterProgress(save: Save, buffer: ArrayBuffer, slotIndex: number): CharacterProgress | undefined {
  const slot = save.slots?.[slotIndex]
  const summary = save.profileSummaries?.[slotIndex]
  const character = slot?.character
  const name = character?.characterName?.trim() || summary?.name?.trim()

  if (!slot || !name) return undefined

  let inventory: CharacterProgress['inventory']
  try {
    const extracted = extractSlotInventoryDetails(buffer, slotIndex)
    inventory = {
      availability: 'available',
      items: extracted.items,
      storageAvailable: extracted.storageAvailable,
      ...(extracted.storageAvailable ? {} : { message: '当前存档版本已读取随身库存；箱子区布局尚未确认，因此未展示。' })
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : '未知错误。'
    inventory = {
      availability: 'not-supported',
      items: [],
      storageAvailable: false,
      message: `库存读取失败：${detail}`
    }
  }

  return {
    id: `slot-${slotIndex}`,
    slotIndex,
    name,
    level: character?.level ?? summary?.level,
    secondsPlayed: summary?.secondsPlayed,
    mapName: localize(slot.mapName ?? summary?.mapName, PLACE_TRANSLATIONS),
    bosses: toProgressEntries(slot.eventFlags, 'boss'),
    graces: toProgressEntries(slot.eventFlags, 'grace'),
    inventory
  }
}

export function parseEldenRingSave(buffer: ArrayBuffer): SaveSnapshot {
  let parsed: Save

  try {
    validateSaveHeader(buffer)
    parsed = parse(buffer, { logLevel: 'none' })
  } catch (error) {
    const message = error instanceof Error ? error.message : '无法解析此存档。'
    throw new Error(message)
  }

  const characters = Array.from({ length: 10 }, (_, index) => toCharacterProgress(parsed, buffer, index)).filter(
    (character): character is CharacterProgress => character !== undefined
  )

  if (characters.length === 0) throw new Error('未在存档中找到可读取的角色槽位。')

  return { formatVersion: parsed.version, parserVersion: SAVE_PARSER_VERSION, characters }
}
