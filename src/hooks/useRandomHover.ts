import { useEffect } from "react";

// HSL numeric triplets to work with `hsl(var(--shadow-color))` in CSS
const shadowColors: string[] = [
  "0 70% 55%",   // red
  "220 80% 60%", // blue
  "45 100% 50%", // yellow
  "150 70% 50%", // green
  "280 70% 60%", // purple
  "330 80% 65%", // pink
];

const directions = [
  { x: -2, y: -2, shadowX: 4, shadowY: 4 },
  { x: 2, y: -2, shadowX: -4, shadowY: 4 },
  { x: -2, y: 2, shadowX: 4, shadowY: -4 },
  { x: 2, y: 2, shadowX: -4, shadowY: -4 },
  { x: -3, y: -1, shadowX: 5, shadowY: 3 },
  { x: 1, y: -3, shadowX: -3, shadowY: 5 },
  { x: -1, y: 3, shadowX: 3, shadowY: -5 },
  { x: 3, y: 1, shadowX: -5, shadowY: -3 },
];

export const useRandomHover = () => {
  useEffect(() => {
    const randomize = (el: HTMLElement) => {
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const color = shadowColors[Math.floor(Math.random() * shadowColors.length)];
      el.style.setProperty("--hover-x", `${dir.x}px`);
      el.style.setProperty("--hover-y", `${dir.y}px`);
      el.style.setProperty("--shadow-x", `${dir.shadowX}px`);
      el.style.setProperty("--shadow-y", `${dir.shadowY}px`);
      // set numeric HSL triplet so CSS can use hsl(var(--shadow-color))
      el.style.setProperty("--shadow-color", color);
    };

    const onEnter = (e: Event) => {
      const target = (e.target as HTMLElement) || null;
      const el = target?.closest?.(".brutalist-hover") as HTMLElement | null;
      if (!el) return;
      randomize(el);
    };

    // Randomize on pointer enter (capture to catch non-bubbling event)
    document.addEventListener("pointerenter", onEnter, true);
    // Touch support: randomize on first touch
    document.addEventListener("touchstart", onEnter, { passive: true, capture: true } as any);

    return () => {
      document.removeEventListener("pointerenter", onEnter, true);
      document.removeEventListener("touchstart", onEnter, true as any);
    };
  }, []);
};

