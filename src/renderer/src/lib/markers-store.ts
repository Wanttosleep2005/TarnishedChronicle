import type { MasterId } from './map-affine.ts';

export interface CustomMarker {
  id: string;
  master: MasterId;
  px: number;
  py: number;
  name: string;
  /** 颜色索引(MARKER_COLORS)。 */
  color: number;
}

export const MARKER_COLORS = ['#e8c76a', '#6fb3e0', '#d16f6f'];

const key = (savePath: string) => `chronicle:markers:${savePath}`;

export function loadMarkers(savePath: string): CustomMarker[] {
  try {
    return JSON.parse(localStorage.getItem(key(savePath)) ?? '[]') as CustomMarker[];
  } catch {
    return [];
  }
}

export function saveMarkers(savePath: string, markers: CustomMarker[]): void {
  localStorage.setItem(key(savePath), JSON.stringify(markers));
}
