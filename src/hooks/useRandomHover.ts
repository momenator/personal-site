import { useEffect } from "react";

const shadowColors = [
  "--shadow-red",
  "--shadow-blue", 
  "--shadow-yellow",
  "--shadow-green",
  "--shadow-purple",
  "--shadow-pink",
  "--foreground",
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
    const elements = document.querySelectorAll(".brutalist-hover");
    
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const color = shadowColors[Math.floor(Math.random() * shadowColors.length)];
      
      htmlElement.style.setProperty("--hover-x", `${direction.x}px`);
      htmlElement.style.setProperty("--hover-y", `${direction.y}px`);
      htmlElement.style.setProperty("--shadow-x", `${direction.shadowX}px`);
      htmlElement.style.setProperty("--shadow-y", `${direction.shadowY}px`);
      htmlElement.style.setProperty("--shadow-color", `var(${color})`);
    });
  }, []);
};
