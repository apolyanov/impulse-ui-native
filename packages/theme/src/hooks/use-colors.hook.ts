import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { ThemeColors } from "../types";

export function useColors(): ThemeColors {
  const context = useThemeContext();

  return useMemo(() => context.colors, [context.colors]);
}
