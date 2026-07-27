import type { MasterId } from './map-affine.ts';

// 真实游戏地图瓦片(compass 提取,libvips 金字塔):z0~z6,z6 为原生 10496px,256px/瓦片。
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
    if (match) map.set(`${match[1]}/${match[2]}/${match[3]}/${match[4]}`, url);
  }
  return map;
})();

export const NATIVE_SIZE = 10496;
export const MAX_ZOOM = 6;

const cache = new Map<string, HTMLImageElement | 'loading' | 'missing'>();

/** 取瓦片(master, z, y, x)。未加载完成返回 null,加载完成后触发 onReady 以便重绘。 */
export function getTile(
  master: MasterId,
  z: number,
  y: number,
  x: number,
  onReady: () => void,
): HTMLImageElement | null {
  const key = `${master}/${z}/${y}/${x}`;
  const cached = cache.get(key);
  if (cached === 'missing' || cached === 'loading') return null;
  if (cached) return cached;

  const url = TILE_URLS.get(key);
  if (!url) {
    cache.set(key, 'missing');
    return null;
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
