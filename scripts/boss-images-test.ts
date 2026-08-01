import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BOSS_FANAPI_IMAGE_FILE_BY_FLAG } from '../src/renderer/src/data/generated/boss-fanapi-images.generated.ts';
import { BOSS_IMAGE_FILE_BY_FLAG } from '../src/renderer/src/data/generated/boss-images.generated.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fandomDir = join(root, 'src', 'renderer', 'src', 'assets', 'bosses', 'fandom');
const fanApiDir = join(root, 'src', 'renderer', 'src', 'assets', 'bosses', 'fanapi');

function assertMappedFiles(label: string, directory: string, mapping: Readonly<Record<number, string>>): void {
  const missing = [...new Set(Object.values(mapping))].filter((file) => !existsSync(join(directory, file)));
  if (missing.length > 0) throw new Error(`${label} missing ${missing.length} assets: ${missing.join(', ')}`);
}

assertMappedFiles('Fandom', fandomDir, BOSS_IMAGE_FILE_BY_FLAG);
assertMappedFiles('Fan API', fanApiDir, BOSS_FANAPI_IMAGE_FILE_BY_FLAG);

const bossesPage = readFileSync(join(root, 'src', 'renderer', 'src', 'pages', 'BossesPage.tsx'), 'utf8');
if (bossesPage.indexOf('if (reward?.iconUrl)') > bossesPage.indexOf('if (portrait)')) {
  throw new Error('Remembrance reward icons must remain higher priority than Boss portraits.');
}

console.log(`Boss images: ${Object.keys(BOSS_IMAGE_FILE_BY_FLAG).length} Fandom flag mappings, ${Object.keys(BOSS_FANAPI_IMAGE_FILE_BY_FLAG).length} Fan API overrides.`);
