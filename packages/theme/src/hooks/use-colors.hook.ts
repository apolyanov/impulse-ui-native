import { useMemo } from "react";
import { useThemeContext } from "../providers";
import { ThemeColors } from "../types";

export function useColors(): ThemeColors {
  const context = useThemeContext();

  return useMemo(() => context.theme.colors, [context.theme.colors]);
}
