import {
  BorderSize,
  ComponentsTokens,
  FontFamily,
  FontSize,
  FontWeight,
  FontWeightItalic,
  FontWeightNormal,
  FontWeightValue,
  LineHeight,
  NeutralColor,
  PrimitiveThemeTokens,
  Radii,
  Space,
  ThemeColors,
} from "../types";
import { createButtonTokens } from "./create-button-tokens";
import {
  createControlAddonTokens,
  createControlContainerTokens,
  createControlErrorTokens,
  createControlInputTokens,
  createControlLabelTokens,
} from "./create-control-tokens";
import { createDataStateTokens } from "./create-data-state-tokens";
import { createDatetimePickerTokens } from "./create-datetime-picker";
import { createFlyoutTokens } from "./create-flyout-tokens";
import { createIconButtonTokens } from "./create-icon-button-tokens";
import { createSelectTokens } from "./create-select-tokens";
import { createSkeletonTokens } from "./create-skeleton-tokens";
import { createTagTokens } from "./create-tag-tokens";
import { createTimePickerTokens } from "./create-time-picker-tokens";

export const SpaceTokens: Space = {
  none: 0,
  xxs: 4,
  xs: 8,
  mxs: 12,
  sm: 16,
  msm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  xxl: 96,
};

export const BorderSizeTokens: BorderSize = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 5,
  xxl: 10,
};

export const RadiiTokens: Radii = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
  xxl: 64,
  xxxl: 128,
  round: 100000,
};

export const FontSizeTokens: FontSize = {
  xxs: 8,
  xs: 12,
  xsm: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 28,
  xxxl: 32,
  huge: 36,
  massive: 40,
  giant: 48,
  colossal: 56,
};

export const LineHeightTokens: LineHeight = {
  xxs: 12,
  xs: 16,
  xsm: 20,
  sm: 24,
  md: 26,
  lg: 28,
  xl: 32,
  xxl: 36,
  xxxl: 40,
  huge: 44,
  massive: 48,
  giant: 56,
  colossal: 64,
};

export const FontWeightTokens: FontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const FontFamilyWeightsNormalTokens: Record<
  FontWeightValue,
  FontWeightNormal
> = {
  100: "Montserrat_100Thin",
  200: "Montserrat_200ExtraLight",
  300: "Montserrat_300Light",
  400: "Montserrat_400Regular",
  500: "Montserrat_500Medium",
  600: "Montserrat_600SemiBold",
  700: "Montserrat_700Bold",
  800: "Montserrat_800ExtraBold",
  900: "Montserrat_900Black",
};

export const FontFamilyWeightsItalicTokens: Record<
  FontWeightValue,
  FontWeightItalic
> = {
  100: "Montserrat_100Thin_Italic",
  200: "Montserrat_200ExtraLight_Italic",
  300: "Montserrat_300Light_Italic",
  400: "Montserrat_400Regular_Italic",
  500: "Montserrat_500Medium_Italic",
  600: "Montserrat_600SemiBold_Italic",
  700: "Montserrat_700Bold_Italic",
  800: "Montserrat_800ExtraBold_Italic",
  900: "Montserrat_900Black_Italic",
};

export const FontFamilyTokens: FontFamily = {
  normal: FontFamilyWeightsNormalTokens,
  italic: FontFamilyWeightsItalicTokens,
};

export const NeutralColorTokens: NeutralColor = {
  "0": "#ffffff",
  "1": "#f8f9fa",
  "2": "#f1f3f5",
  "3": "#e9ecef",
  "4": "#dee2e6",
  "5": "#ced4da",
  "6": "#adb5bd",
  "7": "#868e96",
  "8": "#495057",
  "9": "#343a40",
  "10": "#212529",
  "11": "#16191d",
  "12": "#0d0f12",
  "13": "#000000",
};

export const LightColors: ThemeColors = {
  primary: {
    value: "#f55d6b",
    contrast: NeutralColorTokens["0"],
  },

  accent: {
    value: "#FA9EA7",
    contrast: NeutralColorTokens["0"],
  },

  secondary: {
    value: "#FEE7E9",
    contrast: "#f55d6b",
  },

  neutral: NeutralColorTokens,

  surface: {
    primary: {
      value: NeutralColorTokens["2"],
      contrast: NeutralColorTokens["11"],
    },
    secondary: {
      value: NeutralColorTokens["0"],
      contrast: NeutralColorTokens["11"],
    },
    elevated: {
      value: NeutralColorTokens["0"],
      contrast: NeutralColorTokens["11"],
    },
    inverse: {
      value: NeutralColorTokens["13"],
      contrast: NeutralColorTokens["0"],
    },
  },

  text: {
    primary: NeutralColorTokens["11"],
    secondary: NeutralColorTokens["10"],
    tertiary: NeutralColorTokens["9"],
    inverse: NeutralColorTokens["0"],
    disabled: NeutralColorTokens["7"],
  },

  border: {
    subtle: {
      value: NeutralColorTokens["3"],
      contrast: NeutralColorTokens["9"],
    },
    default: {
      value: NeutralColorTokens["4"],
      contrast: NeutralColorTokens["10"],
    },
    strong: {
      value: NeutralColorTokens["6"],
      contrast: NeutralColorTokens["11"],
    },
    focus: {
      value: "#f55d6b",
      contrast: NeutralColorTokens["0"],
    },
  },

  feedback: {
    error: {
      value: "#c92a2a",
      contrast: "#fff5f5",
    },
    warning: {
      value: "#e67700",
      contrast: "#fff4e6",
    },
    success: {
      value: "#7a9908",
      contrast: "#f4fce3",
    },
    info: {
      value: "#1864ab",
      contrast: "#e7f5ff",
    },
  },

  overlay: "rgba(0, 0, 0, 0.45)",

  white: NeutralColorTokens["0"],
  black: NeutralColorTokens["13"],
};

export function createComponentsTokens(
  tokens: PrimitiveThemeTokens,
): ComponentsTokens {
  return {
    button: createButtonTokens(tokens),
    iconButton: createIconButtonTokens(tokens),
    tag: createTagTokens(tokens),
    controlAddon: createControlAddonTokens(tokens),
    controlContainer: createControlContainerTokens(tokens),
    controlError: createControlErrorTokens(tokens),
    controlInput: createControlInputTokens(tokens),
    controlLabel: createControlLabelTokens(tokens),
    select: createSelectTokens(tokens),
    datetimePicker: createDatetimePickerTokens(tokens),
    timePicker: createTimePickerTokens(tokens),
    flyout: createFlyoutTokens(tokens),
    skeleton: createSkeletonTokens(tokens),
    dataState: createDataStateTokens(tokens),
  };
}
