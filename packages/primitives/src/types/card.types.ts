import type { ReactNode } from "react";
import type { PressableProps, StyleProp, ViewStyle } from "react-native";

import type {
  DimensionProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

import type { ViewProps } from "./view.types";

export interface CardRootProps extends ViewProps {}

export interface CardPressableProps
  extends
    Omit<PressableProps, "children">,
    DimensionProps,
    SpacingProps,
    ShadowProps {
  children?: ReactNode;
  pressedStyle?: StyleProp<ViewStyle>;
}

export interface CardHeaderProps extends ViewProps {}
export interface CardContentProps extends ViewProps {}
export interface CardFooterProps extends ViewProps {}
export interface CardMediaProps extends ViewProps {}
