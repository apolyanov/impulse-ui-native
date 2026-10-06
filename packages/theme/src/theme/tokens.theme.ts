import type {
  BorderSize,
  ChartColorPalette,
  ComponentsTokens,
  FontFamily,
  FontSize,
  FontWeight,
  FontWeightItalic,
  FontWeightNormal,
  FontWeightValue,
  LetterSpacings,
  LineHeight,
  NeutralColor,
  PrimitiveThemeTokens,
  Radii,
  Space,
  ThemeColors,
} from "../types";
import { createAccordionTokens } from "./create-accordion-tokens";
import { createAvatarTokens } from "./create-avatar-tokens";
import { createBadgeTokens } from "./create-badge-tokens";
import { createButtonTokens } from "./create-button-tokens";
import { createCardTokens } from "./create-card-tokens";
import { createCarouselTokens } from "./create-carousel-tokens";
import { createCheckboxTokens } from "./create-checkbox-tokens";
import {
  createControlAddonTokens,
  createControlContainerTokens,
  createControlErrorTokens,
  createControlInputTokens,
  createControlLabelTokens,
} from "./create-control-tokens";
import { createDataStateTokens } from "./create-data-state-tokens";
import { createDatetimePickerTokens } from "./create-datetime-picker";
import { createDividerTokens } from "./create-divider-tokens";
import { createFlyoutTokens } from "./create-flyout-tokens";
import { createIconButtonTokens } from "./create-icon-button-tokens";
import { createIconTokens } from "./create-icon-tokens";
import { createListTokens } from "./create-list-tokens";
import { createPaginationTokens } from "./create-pagination-tokens";
import { createPressableTokens } from "./create-pressable-tokens";
import { createProgressTokens } from "./create-progress-tokens";
import { createRadioTokens } from "./create-radio-tokens";
import { createSegmentedControlTokens } from "./create-segmented-control-tokens";
import { createSelectTokens } from "./create-select-tokens";
import { createSkeletonTokens } from "./create-skeleton-tokens";
import { createSliderTokens } from "./create-slider-tokens";
import { createSpinnerTokens } from "./create-spinner-tokens";
import { createStepperTokens } from "./create-stepper-tokens";
import { createSwitchTokens } from "./create-switch-tokens";
import { createTagTokens } from "./create-tag-tokens";
import { createTextareaTokens } from "./create-textarea-tokens";
import { createTimePickerTokens } from "./create-time-picker-tokens";
import { createToastTokens } from "./create-toast-tokens";

export const ChartColorTokens: ChartColorPalette = [
  "#F55D6B",
  "#2563eb",
  "#16a34a",
  "#9333ea",
  "#ea580c",
  "#0891b2",
  "#db2777",
  "#65a30d",
  "#4f46e5",
  "#0d9488",
  "#ca8a04",
  "#c026d3",
  "#0284c7",
  "#7c3aed",
  "#9f5f3f",
];

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

export const LetterSpacingTokens: LetterSpacings = {
  tightest: -1,
  tighter: -0.5,
  tight: -0.25,
  normal: 0,
  wide: 0.25,
  wider: 0.5,
  widest: 0.75,
  ultraWide: 1,
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
    value: "#F55D6B",
    contrast: NeutralColorTokens["0"],
  },

  accent: {
    value: "#FA9EA7",
    contrast: NeutralColorTokens["11"],
  },

  secondary: {
    value: "#FEE7E9",
    contrast: "#c92a3b",
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
      value: "#c92a3b",
      contrast: NeutralColorTokens["0"],
    },
  },

  feedback: {
    error: {
      value: "#c92a2a",
      contrast: "#fff5f5",
    },
    warning: {
      value: "#a65300",
      contrast: "#fff4e6",
    },
    success: {
      value: "#526b00",
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

export const DarkColors: ThemeColors = {
  primary: {
    value: "#FA9EA7",
    contrast: NeutralColorTokens["11"],
  },

  accent: {
    value: "#f55d6b",
    contrast: NeutralColorTokens["11"],
  },

  secondary: {
    value: "#3b2027",
    contrast: "#FA9EA7",
  },

  neutral: NeutralColorTokens,

  surface: {
    primary: {
      value: NeutralColorTokens["11"],
      contrast: NeutralColorTokens["0"],
    },
    secondary: {
      value: NeutralColorTokens["10"],
      contrast: NeutralColorTokens["0"],
    },
    elevated: {
      value: NeutralColorTokens["9"],
      contrast: NeutralColorTokens["0"],
    },
    inverse: {
      value: NeutralColorTokens["0"],
      contrast: NeutralColorTokens["11"],
    },
  },

  text: {
    primary: NeutralColorTokens["0"],
    secondary: NeutralColorTokens["2"],
    tertiary: NeutralColorTokens["6"],
    inverse: NeutralColorTokens["11"],
    disabled: NeutralColorTokens["7"],
  },

  border: {
    subtle: {
      value: NeutralColorTokens["7"],
      contrast: NeutralColorTokens["6"],
    },
    default: {
      value: NeutralColorTokens["6"],
      contrast: NeutralColorTokens["2"],
    },
    strong: {
      value: NeutralColorTokens["5"],
      contrast: NeutralColorTokens["0"],
    },
    focus: {
      value: "#FA9EA7",
      contrast: NeutralColorTokens["11"],
    },
  },

  feedback: {
    error: {
      value: "#ff8787",
      contrast: "#3b1515",
    },
    warning: {
      value: "#ffc078",
      contrast: "#3b250f",
    },
    success: {
      value: "#c0eb75",
      contrast: "#26320f",
    },
    info: {
      value: "#74c0fc",
      contrast: "#102a43",
    },
  },

  overlay: "rgba(0, 0, 0, 0.65)",

  white: NeutralColorTokens["0"],
  black: NeutralColorTokens["13"],
};

export function createComponentsTokens(
  tokens: PrimitiveThemeTokens,
): ComponentsTokens {
  return {
    toast: createToastTokens(tokens),
    carousel: createCarouselTokens(tokens),
    accordion: createAccordionTokens(tokens),
    avatar: createAvatarTokens(tokens),
    badge: createBadgeTokens(tokens),
    button: createButtonTokens(tokens),
    card: createCardTokens(tokens),
    list: createListTokens(tokens),
    checkbox: createCheckboxTokens(tokens),
    iconButton: createIconButtonTokens(tokens),
    icon: createIconTokens(),
    pagination: createPaginationTokens(tokens),
    pressable: createPressableTokens(),
    progress: createProgressTokens(tokens),
    radio: createRadioTokens(tokens),
    tag: createTagTokens(tokens),
    controlAddon: createControlAddonTokens(tokens),
    controlContainer: createControlContainerTokens(tokens),
    controlError: createControlErrorTokens(tokens),
    controlInput: createControlInputTokens(tokens),
    controlLabel: createControlLabelTokens(tokens),
    select: createSelectTokens(tokens),
    segmentedControl: createSegmentedControlTokens(tokens),
    datetimePicker: createDatetimePickerTokens(tokens),
    divider: createDividerTokens(tokens),
    timePicker: createTimePickerTokens(tokens),
    flyout: createFlyoutTokens(tokens),
    skeleton: createSkeletonTokens(tokens),
    slider: createSliderTokens(tokens),
    spinner: createSpinnerTokens(tokens),
    stepper: createStepperTokens(tokens),
    switch: createSwitchTokens(tokens),
    textarea: createTextareaTokens(tokens),
    dataState: createDataStateTokens(tokens),
  };
}
