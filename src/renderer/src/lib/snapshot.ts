import type { HistorySnapshot } from '../../../shared/contracts';
import { BOSSES } from '../data/generated/bosses.ts';
import { GRACES } from '../data/generated/graces.ts';
import type { LeanSave } from '../vendor/save-parser/index.ts';
import { isFlagSet } from './flags.ts';

export function buildSnapshot(save: LeanSave, mtimeMs: number): HistorySnapshot {
  return {
    t: mtimeMs,
    slots: save.slots.map((slot) => {
      const flags = slot.event_flags.flags;
      return {
        name: slot.player_game_data.character_name || '无名褪色者',
        level: slot.player_game_data.level,
        deaths: slot.deaths,
        runesMemory: slot.player_game_data.soulsmemory,
        seconds: slot.seconds_played,
        gracesLit: GRACES.reduce((n, g) => n + (isFlagSet(flags, g.flagId) ? 1 : 0), 0),
        bossFlags: BOSSES.filter((b) => isFlagSet(flags, b.defeatFlagId)).map((b) => b.defeatFlagId),
        graceFlags: GRACES.filter((g) => isFlagSet(flags, g.flagId)).map((g) => g.flagId),
        ...(slot.blood_stain.runes > 0
          ? {
              blood: {
                m: [...slot.blood_stain.map_id] as [number, number, number, number],
                x: Math.round(slot.blood_stain.coords[0] * 10) / 10,
                z: Math.round(slot.blood_stain.coords[2] * 10) / 10,
                r: slot.blood_stain.runes,
              },
            }
          : {}),
      };
    }),
  };
}
