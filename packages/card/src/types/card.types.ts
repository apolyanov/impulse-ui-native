import type { ReactNode } from "react";
import type { PressableProps, StyleProp, ViewStyle } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type {
  DimensionProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export type CardRootProps = ViewProps;

export interface CardProps extends CardRootProps {
  header?: ReactNode;
  media?: ReactNode;
  footer?: ReactNode;
}

export interface CardPressableProps
  extends
    Omit<PressableProps, "children">,
    DimensionProps,
    SpacingProps,
    ShadowProps {
  children?: ReactNode;
  pressedStyle?: StyleProp<ViewStyle>;
}

export type CardHeaderProps = ViewProps;

export type CardContentProps = ViewProps;

export type CardFooterProps = ViewProps;

export type CardMediaProps = ViewProps;
