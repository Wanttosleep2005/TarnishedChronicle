export interface LauncherVisibility {
  readonly sts2: boolean;
  readonly ds3: boolean;
}

export function launcherVisibility(
  sts2Roots: readonly unknown[],
  ds3Roots: readonly unknown[],
): LauncherVisibility {
  return {
    sts2: sts2Roots.length > 0,
    ds3: ds3Roots.length > 0,
  };
}
