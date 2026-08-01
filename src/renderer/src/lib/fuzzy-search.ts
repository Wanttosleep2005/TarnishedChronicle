/** Normalized subsequence matching for every user-facing search input. */
export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFKC')
    .toLocaleLowerCase('zh-CN')
    .replace(/[\s\p{P}\p{S}_]+/gu, '');
}

export function fuzzySearchScore(query: string, value: string): number | null {
  const needle = normalizeSearchText(query);
  const haystack = normalizeSearchText(value);
  if (!needle) return 0;
  if (!haystack) return null;

  const exactIndex = haystack.indexOf(needle);
  if (exactIndex !== -1) return 10_000 - exactIndex * 8 - (haystack.length - needle.length);

  let cursor = 0;
  let firstIndex = -1;
  let gaps = 0;
  for (const character of needle) {
    const index = haystack.indexOf(character, cursor);
    if (index === -1) return null;
    if (firstIndex === -1) firstIndex = index;
    gaps += index - cursor;
    cursor = index + 1;
  }
  return 1_000 - firstIndex * 5 - gaps * 3 - (haystack.length - needle.length);
}

export function fuzzyMatch(query: string, ...values: readonly string[]): boolean {
  return values.some((value) => fuzzySearchScore(query, value) !== null);
}

export function fuzzyBestScore(query: string, ...values: readonly string[]): number {
  return Math.max(-Infinity, ...values.map((value) => fuzzySearchScore(query, value) ?? -Infinity));
}
