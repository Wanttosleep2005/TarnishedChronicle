/** 侧边栏矢量图标(线性描边,继承 currentColor)。 */
import type { ReactNode } from 'react';

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block' }}
    >
      {children}
    </svg>
  );
}

export const NAV_ICONS: Record<string, () => ReactNode> = {
  overview: () => (
    <Svg>
      <path d="M12 3l7 9-7 9-7-9z" />
      <path d="M12 8l3.5 4-3.5 4-3.5-4z" />
    </Svg>
  ),
  map: () => (
    <Svg>
      <path d="M9 4l6 2 6-2v14l-6 2-6-2-6 2V6z" />
      <path d="M9 4v14M15 6v14" />
    </Svg>
  ),
  bosses: () => (
    <Svg>
      <path d="M4 4l7 7M4 4v4M4 4h4" />
      <path d="M20 4l-7 7M20 4v4M20 4h-4" />
      <path d="M7 17l-3 3M17 17l3 3" />
      <path d="M5.5 14.5l4 4M18.5 14.5l-4 4" />
    </Svg>
  ),
  graces: () => (
    <Svg>
      <path d="M12 2v20M2 12h20" />
      <path d="M12 7c1 3 2 4 5 5-3 1-4 2-5 5-1-3-2-4-5-5 3-1 4-2 5-5z" />
    </Svg>
  ),
  equipment: () => (
    <Svg>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M12 7v10" />
    </Svg>
  ),
  quests: () => (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </Svg>
  ),
  achievements: () => (
    <Svg>
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" />
      <path d="M12 14v3M8 21h8M10 21v-2h4v2" />
    </Svg>
  ),
  timeline: () => (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </Svg>
  ),
  story: () => (
    <Svg>
      <path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </Svg>
  ),
  compare: () => (
    <Svg>
      <path d="M12 3v18M8 21h8" />
      <path d="M12 6l-6 2 2.5 6a3.5 3.5 0 0 1-5 0zM12 6l6 2-2.5 6a3.5 3.5 0 0 0 5 0z" />
    </Svg>
  ),
  planner: () => (
    <Svg>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="9" cy="6" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="7" cy="18" r="2.2" fill="currentColor" stroke="none" />
    </Svg>
  ),
  chat: () => (
    <Svg>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9h8M8 12.5h5" />
    </Svg>
  ),
  sts2: () => (
    <Svg>
      <path d="M9 21V9l3-6 3 6v12" />
      <path d="M9 13h6M9 17h6M5 21h14" />
    </Svg>
  ),
  settings: () => (
    <Svg>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
    </Svg>
  ),
};

export function MapPinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s6-5.1 6-11A6 6 0 0 0 6 10c0 5.9 6 11 6 11z" />
      <circle cx="12" cy="10" r="2.1" />
    </svg>
  );
}

export function TargetIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}
