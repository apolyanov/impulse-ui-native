import { DeepPartial } from "@impulse-ui-native/core";
import {
  BorderSizes,
  FontFamilyMap,
  FontSizes,
  NeutralColors,
  Radii,
  Space,
  TypographyPresetKey,
  TypographyProps,
} from "../types";
import {
  BorderSizeTokens,
  FontFamilyTokens,
  FontSizeTokens,
  NeutralColorTokens,
  RadiiTokens,
  SpaceTokens,
} from "./tokens.theme";

export const LightTheme: AppTheme = {
  colors: {
    primary: "#f55d6b",
    secondary: "#f55d6b",
    neutral: NeutralColorTokens,
    white: NeutralColorTokens["0"],
    black: NeutralColorTokens["13"],
    error: "#c92a2a",
    warning: "#e67700",
    success: "#7a9908",
    info: "#1864ab",
    text: {
      primary: NeutralColorTokens["11"],
      secondary: NeutralColorTokens["10"],
    },
    background: {
      primary: NeutralColorTokens["2"],
      secondary: NeutralColorTokens["0"],
    },
  },
  spacing: SpaceTokens,
  radii: RadiiTokens,
  borderSize: BorderSizeTokens,
  fontFamily: FontFamilyTokens,
  fontSize: FontSizeTokens,
};

export interface ThemeColors {
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
}

export interface ComponentsThemes {
  typography: Record<TypographyPresetKey, TypographyProps>;
}

export interface AppTheme {
  colors: ThemeColors;
  spacing: Space;
  radii: Radii;
  borderSize: BorderSizes;
  fontFamily: FontFamilyMap;
  fontSize: FontSizes;
  components?: DeepPartial<ComponentsThemes>;
}
