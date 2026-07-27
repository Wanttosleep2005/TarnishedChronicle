import { eventFlagOffset } from '../data/generated/event-flags.ts';

export function isFlagSet(flags: Uint8Array, flagId: number): boolean {
  const offset = eventFlagOffset(flagId);
  if (!offset) return false;
  const [byteOffset, bitPos] = offset;
  return ((flags[byteOffset] ?? 0) & (1 << bitPos)) !== 0;
}
