import { useDynamicHighlight } from '@/hooks/useDynamicHighlight';
import { useRandomHover } from '@/hooks/useRandomHover';

const AppEffects = () => {
  useDynamicHighlight();
  useRandomHover();
  return null;
};

export default AppEffects;
