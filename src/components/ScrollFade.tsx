import { ReactNode } from "react";

interface ScrollFadeProps {
  children: ReactNode;
}

const ScrollFade = ({ children }: ScrollFadeProps) => {
  return <div className="scroll-fade-container">{children}</div>;
};

export default ScrollFade;
