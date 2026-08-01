import { BOSS_FANAPI_IMAGE_FILE_BY_FLAG } from './generated/boss-fanapi-images.generated.ts';
import { BOSS_IMAGE_FILE_BY_FLAG } from './generated/boss-images.generated.ts';

const fandomModules = import.meta.glob<string>('../assets/bosses/fandom/*.webp', {
  query: '?url',
  import: 'default',
  eager: true,
});

const fanApiModules = import.meta.glob<string>('../assets/bosses/fanapi/*.png', {
  query: '?url',
  import: 'default',
  eager: true,
});

export type BossPortrait = Readonly<{
  url: string;
  source: 'fanapi' | 'fandom';
}>;

function urlsByFile(modules: Record<string, string>): ReadonlyMap<string, string> {
  return new Map(Object.entries(modules).map(([path, url]) => [path.slice(path.lastIndexOf('/') + 1), url]));
}

const FANDOM_URL_BY_FILE = urlsByFile(fandomModules);
const FANAPI_URL_BY_FILE = urlsByFile(fanApiModules);

export function bossPortrait(flag: number): BossPortrait | undefined {
  const fanApiUrl = FANAPI_URL_BY_FILE.get(BOSS_FANAPI_IMAGE_FILE_BY_FLAG[flag] ?? '');
  if (fanApiUrl) return { url: fanApiUrl, source: 'fanapi' };

  const fandomUrl = FANDOM_URL_BY_FILE.get(BOSS_IMAGE_FILE_BY_FLAG[flag] ?? '');
  return fandomUrl ? { url: fandomUrl, source: 'fandom' } : undefined;
}
