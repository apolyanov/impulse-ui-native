import { AppTheme } from "../theme";

export interface ThemeContextData {
  loaded: boolean;
  theme: AppTheme;
}

export type ColorScheme = "light" | "dark";
