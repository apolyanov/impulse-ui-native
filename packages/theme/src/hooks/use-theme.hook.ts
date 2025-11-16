import { useMemo } from "react";
import { useThemeContext } from "../providers";
import { AppTheme } from "../types";

export function useTheme(): AppTheme {
  const context = useThemeContext();

  return useMemo(() => context.theme, [context.theme]);
}
