import { useThemeContext } from "../providers";
import { BorderSize } from "../types";

export function useBorder(): BorderSize {
  const context = useThemeContext();

  return context.borderSize;
}
