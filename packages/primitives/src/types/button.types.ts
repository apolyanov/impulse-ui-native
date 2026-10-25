import { PressableProps, StyleProp, ViewStyle } from "react-native";

import {
  ActionVariant,
  ButtonTone,
  ComponentSize,
  DimensionProps,
  FlexProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export interface ButtonProps
  extends PressableProps, DimensionProps, SpacingProps, ShadowProps {
  size?: ComponentSize;
  variant?: ActionVariant;
  tone?: ButtonTone;
  disabled?: boolean;
  style?: ViewStyle;
  loading?: boolean;
}

export interface ButtonThemeProps {
  size: ComponentSize;
  variant: ActionVariant;
  tone: ButtonTone;
  disabled?: boolean;
  loading: boolean;
}

export interface PressableCoreProps
  extends PressableProps, Omit<ButtonProps, "style" | "tone">, FlexProps {
  disabled?: boolean;
  pressedStyle?: StyleProp<ViewStyle>;
}
