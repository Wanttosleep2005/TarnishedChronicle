export type EvidenceLevel = 'confirmed' | 'inferred' | 'unknown';

export const EVIDENCE_LEVEL_LABELS: Readonly<Record<EvidenceLevel, string>> = {
  confirmed: '已确认',
  inferred: '推断',
  unknown: '未知',
};

const EVIDENCE_LEVEL_ORDER: Readonly<Record<EvidenceLevel, number>> = {
  confirmed: 0,
  inferred: 1,
  unknown: 2,
};

/** 按证据从强到弱排序。 */
export function compareEvidenceLevels(left: EvidenceLevel, right: EvidenceLevel): number {
  return EVIDENCE_LEVEL_ORDER[left] - EVIDENCE_LEVEL_ORDER[right];
}

/** 合并多条证据，结果取其中最弱等级；空集合视为未知。 */
export function mergeEvidenceLevels(levels: readonly EvidenceLevel[]): EvidenceLevel {
  if (levels.length === 0) return 'unknown';

  return levels.reduce((weakest, level) =>
    compareEvidenceLevels(weakest, level) >= 0 ? weakest : level);
}
