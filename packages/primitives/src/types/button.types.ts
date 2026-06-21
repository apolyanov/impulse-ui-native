import { PressableProps, StyleProp, ViewStyle } from "react-native";

import {
  ComponentSize,
  ComponentVariant,
  DimensionProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export interface ButtonProps
  extends PressableProps, DimensionProps, SpacingProps, ShadowProps {
  size?: ComponentSize;
  variant?: ComponentVariant;
  disabled?: boolean;
  style?: ViewStyle;
  loading?: boolean;
}

export interface ButtonThemeProps {
  size: ComponentSize;
  variant: ComponentVariant;
  disabled?: boolean;
}

export interface PressableCoreProps
  extends PressableProps, Omit<ButtonProps, "style"> {
  disabled?: boolean;
  pressedStyle?: StyleProp<ViewStyle>;
}
