import type { ComponentRef, Ref } from "react";
import {
  PressableProps,
  Pressable as RNPressable,
  StyleProp,
  ViewStyle,
} from "react-native";

import {
  ActionVariant,
  ButtonTone,
  ComponentSize,
  DimensionProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

import type { ViewStyleProps } from "./view.types";

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
  extends PressableProps, Omit<ButtonProps, "style" | "tone">, ViewStyleProps {
  ref?: Ref<ComponentRef<typeof RNPressable>>;
  disabled?: boolean;
  pressedStyle?: StyleProp<ViewStyle>;
}
