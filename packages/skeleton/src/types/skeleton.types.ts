import { ViewStyle } from "react-native";

import { TypographyComponent } from "@impulse-ui-native/primitives";
import {
  BorderProps,
  ComponentSize,
  DimensionProps,
  FlexProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export type SkeletonContainerProps = SpacingProps &
  BorderProps &
  FlexProps &
  DimensionProps;

export interface SkeletonBoneProps
  extends SpacingProps, BorderProps, FlexProps, DimensionProps {
  style?: ViewStyle;
}

export interface SkeletonTextProps extends BorderProps {
  text: string;
  Component: TypographyComponent;
}

export interface SkeletonTagProps extends DimensionProps {
  size: ComponentSize;
}
