// 物品图标缩略图(80px webp,来自 compass 提取管线)。
// import.meta.glob 是 Vite 编译期宏,只能在渲染进程使用。
const thumbModules = import.meta.glob<string>('../assets/icons-thumb/*.webp', {
  query: '?url',
  import: 'default',
  eager: true,
});

function toIconMap(modules: Record<string, string>): ReadonlyMap<number, string> {
  const entries: [number, string][] = [];
  for (const [path, url] of Object.entries(modules)) {
    const file = path.slice(path.lastIndexOf('/') + 1);
    const id = Number.parseInt(file, 10);
    if (!Number.isNaN(id)) entries.push([id, url]);
  }
  return new Map(entries);
}

const ICON_THUMBS = toIconMap(thumbModules);

export function iconThumbUrl(iconId: number | null | undefined): string | undefined {
  if (iconId === null || iconId === undefined) return undefined;
  return ICON_THUMBS.get(iconId);
}
