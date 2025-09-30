import { useMemo } from "react";
import { useThemeContext } from "../providers";
import { AppTheme } from "../theme";

export function useTheme(): AppTheme {
  const context = useThemeContext();

  return useMemo(() => context.theme, [context.theme]);
}
