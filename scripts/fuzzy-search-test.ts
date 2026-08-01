import { strict as assert } from 'node:assert';
import { fuzzyMatch, fuzzySearchScore, normalizeSearchText } from '../src/renderer/src/lib/fuzzy-search.ts';

assert.equal(normalizeSearchText('  冷  匕首 +25 '), '冷匕首25');
assert.equal(fuzzyMatch('冷匕', 'Cold Dagger', '冷匕首'), true);
assert.equal(fuzzyMatch('ldg', 'Cold Dagger'), true);
assert.equal(fuzzyMatch('月祭坛', '月光祭坛'), true);
assert.equal(fuzzyMatch('匕法', '匕首'), false);
assert.ok((fuzzySearchScore('匕首', '匕首') ?? 0) > (fuzzySearchScore('匕首', '冷匕首') ?? 0));

console.log('模糊检索测试通过');
