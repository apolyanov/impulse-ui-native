import { useMemo } from "react";
import { useThemeContext } from "../providers";
import { ThemeColors } from "../theme/light.theme";

export function useColors(): ThemeColors {
  const context = useThemeContext();

  return useMemo(() => context.theme.colors, [context.theme.colors]);
}
