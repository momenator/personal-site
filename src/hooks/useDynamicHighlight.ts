import { useEffect } from "react";

const highlightColors = [
  "#FFE500", // Yellow
  "#FF6B6B", // Red
  "#4ECDC4", // Teal
  "#95E1D3", // Mint
  "#F38181", // Pink
  "#AA96DA", // Purple
  "#FCBAD3", // Light pink
  "#A8D8EA", // Light blue
];

export const useDynamicHighlight = () => {
  useEffect(() => {
    let lastColor = "";
    
    const changeHighlightColor = () => {
      let newColor = highlightColors[Math.floor(Math.random() * highlightColors.length)];
      
      // Ensure we don't get the same color twice in a row
      while (newColor === lastColor) {
        newColor = highlightColors[Math.floor(Math.random() * highlightColors.length)];
      }
      
      lastColor = newColor;
      
      const style = document.createElement("style");
      style.textContent = `::selection { background-color: ${newColor}; color: #000; }`;
      document.head.appendChild(style);
      
      // Remove the style after animation completes
      setTimeout(() => {
        document.head.removeChild(style);
      }, 300);
    };

    // Change color on every selection
    document.addEventListener("selectionchange", changeHighlightColor);

    return () => {
      document.removeEventListener("selectionchange", changeHighlightColor);
    };
  }, []);
};
