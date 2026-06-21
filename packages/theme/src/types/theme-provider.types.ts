import { ButtonTokens, IconButtonTokens } from "./buttons-tokens.types";
import {
  ControlAddonTokens,
  ControlContainerTokens,
  ControlErrorTokens,
  ControlInputTokens,
  ControlLabelTokens,
} from "./control-tokes.types";
import { DataStateTokens } from "./data-state-tokens.types";
import { DatetimePickerTokens } from "./datetime-picker-tokens.types";
import { FlyoutTokens } from "./flyout-tokens.types";
import { SelectTokens } from "./select-tokens.types";
import { SkeletonTokens } from "./skeleton-tokens.types";
import { TagTokens } from "./tag-tokens.types";
import { TimePickerTokens } from "./time-picker-token.types";
import {
  BorderSize,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  NeutralColor,
  Radii,
  Space,
} from "./tokens.types";

export interface ThemeContextData {
  theme: AppTheme;
}

export type ColorScheme = "light" | "dark";

export type ColorPair = {
  value: string;
  contrast: string;
};

export type ThemeColors = {
  primary: ColorPair;
  accent: ColorPair;
  secondary: ColorPair;

  neutral: NeutralColor;

  surface: {
    primary: ColorPair;
    secondary: ColorPair;
    elevated: ColorPair;
    inverse: ColorPair;
  };

  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };

  border: {
    subtle: ColorPair;
    default: ColorPair;
    strong: ColorPair;
    focus: ColorPair;
  };

  feedback: {
    error: ColorPair;
    warning: ColorPair;
    success: ColorPair;
    info: ColorPair;
  };

  overlay: string;

  white: string;
  black: string;
} & ExtendedThemeColors;

export interface ExtendedThemeColors {}

export interface ComponentsThemes {
  (theme: PrimitiveThemeTokens): ComponentsTokens;
}

export interface ComponentsTokens {
  button: ButtonTokens;
  iconButton: IconButtonTokens;
  tag: TagTokens;
  controlAddon: ControlAddonTokens;
  controlContainer: ControlContainerTokens;
  controlError: ControlErrorTokens;
  controlInput: ControlInputTokens;
  controlLabel: ControlLabelTokens;
  select: SelectTokens;
  datetimePicker: DatetimePickerTokens;
  timePicker: TimePickerTokens;
  flyout: FlyoutTokens;
  skeleton: SkeletonTokens;
  dataState: DataStateTokens;
}

export interface PrimitiveThemeTokens {
  colors: ThemeColors;
  space: Space;
  radii: Radii;
  borderSize: BorderSize;
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  fontSize: FontSize;
  lineHeight: LineHeight;
}

export interface AppTheme extends PrimitiveThemeTokens {
  components: ComponentsTokens;
}
