import { DeepPartial } from "@impulse-ui-native/core";

import {
  BorderSizes,
  FontSizes,
  NeutralColors,
  Radii,
  Space,
} from "./tokens.types";
import {
  FontWeightKey,
  TypographyPresetKey,
  TypographyProps,
} from "./typography.types";

export interface ThemeContextData {
  loaded: boolean;
  theme: AppTheme;
  components?: DeepPartial<ComponentsThemes>;
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
  fontWeights: Record<"normal" | "italic", Record<FontWeightKey, string>>;
  fontSize: FontSizes;
}

export type CustomComponentsTheme =
  | ((theme: AppTheme) => DeepPartial<ComponentsThemes>)
  | DeepPartial<ComponentsThemes>;
