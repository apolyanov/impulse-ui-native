import { PressableProps, StyleProp, ViewStyle } from "react-native";

import {
  ActionVariant,
  ComponentSize,
  DimensionProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export interface ButtonProps
  extends PressableProps, DimensionProps, SpacingProps, ShadowProps {
  size?: ComponentSize;
  variant?: ActionVariant;
  disabled?: boolean;
  style?: ViewStyle;
  loading?: boolean;
}

export interface ButtonThemeProps {
  size: ComponentSize;
  variant: ActionVariant;
  disabled?: boolean;
  loading: boolean;
}

export interface PressableCoreProps
  extends PressableProps, Omit<ButtonProps, "style"> {
  disabled?: boolean;
  pressedStyle?: StyleProp<ViewStyle>;
}
