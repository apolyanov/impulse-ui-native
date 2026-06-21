import { useThemeContext } from "../providers";
import { AppTheme } from "../types";

export function useTheme(): AppTheme {
  return useThemeContext();
}
