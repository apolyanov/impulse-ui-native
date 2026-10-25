import { ViewProps as NativeViewProps } from "react-native";

import {
  BorderProps,
  ColorProps,
  DimensionProps,
  FlexProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export type ViewStyleProps = SpacingProps &
  ColorProps &
  ShadowProps &
  BorderProps &
  FlexProps &
  DimensionProps;

export type ViewProps = NativeViewProps & ViewStyleProps;
