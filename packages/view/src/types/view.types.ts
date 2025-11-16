import {
  BorderProps,
  ColorProps,
  DimensionProps,
  FlexProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";
import { ViewProps as NativeViewProps } from "react-native";

export type ViewProps = NativeViewProps &
  SpacingProps &
  ColorProps &
  ShadowProps &
  BorderProps &
  FlexProps &
  DimensionProps;
