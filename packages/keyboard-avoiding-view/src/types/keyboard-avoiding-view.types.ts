import {
  BorderProps,
  ColorProps,
  DimensionProps,
  FlexProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";
import { RefObject } from "react";
import { ViewProps as NativeViewProps, View } from "react-native";

export interface KeyboardAvoidingViewProps
  extends NativeViewProps,
    SpacingProps,
    ColorProps,
    ShadowProps,
    BorderProps,
    FlexProps,
    DimensionProps {
  targetRef?: View | null;
  mode?: "translate" | "margin" | "padding";
  spacing?: number;
}
