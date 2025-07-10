import { AppTheme } from '../theme';

export interface ExtendedTheme {
  theme: AppTheme;
}

export interface ThemeContextData {
  light: ExtendedTheme;
  dark: ExtendedTheme;
}
