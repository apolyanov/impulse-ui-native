import { DeepPartial } from "@impulse-ui-native/core";
import {
  BorderSizes,
  FontSizes,
  NeutralColors,
  Radii,
  Space,
} from "./tokens.types";
import { TypographyPresetKey, TypographyProps } from "./typography.types";

export interface ThemeContextData {
  loaded: boolean;
  theme: AppTheme;
}

export type ColorScheme = "light" | "dark";

export type ThemeColors = {
  primary: string;
  secondary: string;
  neutral: NeutralColors;

  white: string;
  black: string;

  error: string;
  warning: string;
  success: string;
  info: string;

  text: {
    primary: string;
    secondary: string;
  };

  background: {
    primary: string;
    secondary: string;
  };
} & ExtendedThemeColors;

export interface ExtendedThemeColors {}

export interface ComponentsThemes {
  typography: Record<TypographyPresetKey, TypographyProps>;
}

export interface AppTheme {
  colors: ThemeColors;
  spacing: Space;
  radii: Radii;
  borderSize: BorderSizes;
  fontSize: FontSizes;
  components?: DeepPartial<ComponentsThemes>;
}
