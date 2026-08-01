import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Ds3Character, Ds3Root } from '../../../shared/contracts';

interface Ds3ContextValue {
  roots: Ds3Root[] | null;
  rootPath: string | null;
  setRootPath: (path: string) => void;
  characters: Ds3Character[];
  mtimeMs: number | null;
  error: string | null;
  reload: () => void;
  /** 名册"去规划"联动:目标槽位。 */
  plannerSlot: number | null;
  setPlannerSlot: (slot: number | null) => void;
}

const Ds3Context = createContext<Ds3ContextValue | null>(null);

export function Ds3Provider({ children }: { children: ReactNode }) {
  const [roots, setRoots] = useState<Ds3Root[] | null>(null);
  const [rootPath, setRootPath] = useState<string | null>(null);
  const [characters, setCharacters] = useState<Ds3Character[]>([]);
  const [mtimeMs, setMtimeMs] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [plannerSlot, setPlannerSlot] = useState<number | null>(null);

  useEffect(() => {
    void window.api.ds3Detect().then((detected) => {
      setRoots(detected);
      if (detected.length > 0) setRootPath(detected[0].path);
    });
  }, []);

  useEffect(() => {
    if (!rootPath) return;
    let cancelled = false;
    setError(null);
    void window.api.ds3Load(rootPath).then((result) => {
      if (cancelled) return;
      if (result.ok) {
        setCharacters(result.characters);
        setMtimeMs(result.mtimeMs);
      } else {
        setCharacters([]);
        setError(result.message);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [rootPath, reloadKey]);

  const value = useMemo<Ds3ContextValue>(
    () => ({
      roots,
      rootPath,
      setRootPath,
      characters,
      mtimeMs,
      error,
      reload: () => setReloadKey((k) => k + 1),
      plannerSlot,
      setPlannerSlot,
    }),
    [roots, rootPath, characters, mtimeMs, error, plannerSlot],
  );
  return <Ds3Context.Provider value={value}>{children}</Ds3Context.Provider>;
}

export function useDs3(): Ds3ContextValue {
  const ctx = useContext(Ds3Context);
  if (!ctx) throw new Error('useDs3 必须在 Ds3Provider 内使用');
  return ctx;
}
