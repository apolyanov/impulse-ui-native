import type { CheckboxTokens } from "./checkbox-tokens.types";
import type { RadioTokens } from "./radio-tokens.types";
import { AvatarTokens } from "./avatar-tokens.types";
import { ButtonTokens, IconButtonTokens } from "./buttons-tokens.types";
import { CardTokens } from "./card-tokens.types";
import {
  ControlAddonTokens,
  ControlContainerTokens,
  ControlErrorTokens,
  ControlInputTokens,
  ControlLabelTokens,
} from "./control-tokes.types";
import { DataStateTokens } from "./data-state-tokens.types";
import { DatetimePickerTokens } from "./datetime-picker-tokens.types";
import { DividerTokens } from "./divider-tokens.types";
import { FlyoutTokens } from "./flyout-tokens.types";
import { IconTokens } from "./icon-tokens.types";
import { PressableTokens } from "./pressable-tokens.types";
import { ProgressTokens } from "./progress-tokens.types";
import { SelectTokens } from "./select-tokens.types";
import { SkeletonTokens } from "./skeleton-tokens.types";
import { SpinnerTokens } from "./spinner-tokens.types";
import { StepperTokens } from "./stepper-tokens.types";
import { SwitchTokens } from "./switch-tokens.types";
import { TagTokens } from "./tag-tokens.types";
import { TextareaTokens } from "./textarea-tokens.types";
import { TimePickerTokens } from "./time-picker-token.types";
import {
  BorderSize,
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacings,
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
  avatar: AvatarTokens;
  button: ButtonTokens;
  card: CardTokens;
  checkbox: CheckboxTokens;
  iconButton: IconButtonTokens;
  icon: IconTokens;
  pressable: PressableTokens;
  progress: ProgressTokens;
  radio: RadioTokens;
  tag: TagTokens;
  controlAddon: ControlAddonTokens;
  controlContainer: ControlContainerTokens;
  controlError: ControlErrorTokens;
  controlInput: ControlInputTokens;
  controlLabel: ControlLabelTokens;
  select: SelectTokens;
  datetimePicker: DatetimePickerTokens;
  divider: DividerTokens;
  timePicker: TimePickerTokens;
  flyout: FlyoutTokens;
  skeleton: SkeletonTokens;
  spinner: SpinnerTokens;
  stepper: StepperTokens;
  switch: SwitchTokens;
  textarea: TextareaTokens;
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
  letterSpacing: LetterSpacings;
}

export interface AppTheme extends PrimitiveThemeTokens {
  components: ComponentsTokens;
}
