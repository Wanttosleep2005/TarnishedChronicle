import type { MasterId } from './map-affine.ts';

export const NATIVE_SIZE = 10496;
export const MAX_ZOOM = 6;

export interface MapExtent {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TileBounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

// 真实游戏地图瓦片(compass 提取,libvips 金字塔):z0~z6,z6 为原生 10496px,256px/瓦片。
const tileBounds = new Map<MasterId, TileBounds>();
const TILE_URLS: ReadonlyMap<string, string> = (() => {
  const modules = import.meta.glob<string>('../assets/map-tiles/**/*.webp', {
    query: '?url',
    import: 'default',
    eager: true,
  });
  const map = new Map<string, string>();
  for (const [path, url] of Object.entries(modules)) {
    // ../assets/map-tiles/M00/base/3/5/7.webp → M00/3/5/7
    const match = /map-tiles\/(M\d\d)\/base\/(\d+)\/(\d+)\/(\d+)\.webp$/.exec(path);
    if (!match) continue;
    const master = match[1] as MasterId;
    const zoom = Number(match[2]);
    const y = Number(match[3]);
    const x = Number(match[4]);
    map.set(`${master}/${zoom}/${y}/${x}`, url);
    if (zoom === MAX_ZOOM) {
      const bounds = tileBounds.get(master) ?? {
        left: Number.POSITIVE_INFINITY,
        top: Number.POSITIVE_INFINITY,
        right: 0,
        bottom: 0,
      };
      bounds.left = Math.min(bounds.left, x * 256);
      bounds.top = Math.min(bounds.top, y * 256);
      bounds.right = Math.max(bounds.right, (x + 1) * 256);
      bounds.bottom = Math.max(bounds.bottom, (y + 1) * 256);
      tileBounds.set(master, bounds);
    }
  }
  return map;
})();

export function getMapExtent(master: MasterId): MapExtent {
  const bounds = tileBounds.get(master);
  if (!bounds) return { x: 0, y: 0, width: NATIVE_SIZE, height: NATIVE_SIZE };
  return {
    x: bounds.left,
    y: bounds.top,
    width: bounds.right - bounds.left,
    height: bounds.bottom - bounds.top,
  };
}

const cache = new Map<string, HTMLImageElement | 'loading' | 'missing'>();

/** 取瓦片(master, z, y, x)。加载中返回 null，不存在返回 undefined，加载完成后触发 onReady 以便重绘。 */
export function getTile(
  master: MasterId,
  z: number,
  y: number,
  x: number,
  onReady: () => void,
): HTMLImageElement | null | undefined {
  const key = `${master}/${z}/${y}/${x}`;
  const cached = cache.get(key);
  if (cached === 'missing') return undefined;
  if (cached === 'loading') return null;
  if (cached) return cached;

  const url = TILE_URLS.get(key);
  if (!url) {
    cache.set(key, 'missing');
    return undefined;
  }
  cache.set(key, 'loading');
  const img = new Image();
  img.onload = () => {
    cache.set(key, img);
    onReady();
  };
  img.onerror = () => cache.set(key, 'missing');
  img.src = url;
  return null;
}

/** 由屏幕缩放挑瓦片层级:level 像素 ≈ 屏幕像素。 */
export function pickZoom(scale: number): number {
  const ideal = Math.round(MAX_ZOOM + Math.log2(Math.max(scale, 1e-6)));
  return Math.min(MAX_ZOOM, Math.max(0, ideal));
}
