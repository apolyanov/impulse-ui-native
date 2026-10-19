import { useThemeContext } from "../providers";
import { ThemeColors } from "../types";

export function useColors(): ThemeColors {
  const context = useThemeContext();

  return context.colors;
}
