import type { LayoutRectangle, ViewStyle } from "react-native";

import type { FlyoutPlacement } from "@impulse-ui-native/theme";

import type { FlyoutKeyboardAwareViewProps } from "./index";

export interface FlyoutKeyboardBodyOptions {
  enabled: boolean;
  keyboardOffset: FlyoutKeyboardAwareViewProps["keyboardOffset"];
  resolvedStyle: ViewStyle;
  onLayout: FlyoutKeyboardAwareViewProps["onLayout"];
}

export type FlyoutKeyboardBodyFrame = Pick<LayoutRectangle, "y" | "height">;

export interface FlyoutKeyboardBodyInsetOptions {
  placement: FlyoutPlacement;
  offset: number;
  screenHeight: number;
  sheetHeight: number;
  frame: FlyoutKeyboardBodyFrame;
  keyboardHeight: number;
  gap: number;
}

export interface FlyoutKeyboardBodyPaddingOptions extends FlyoutKeyboardBodyInsetOptions {
  maxHeight: number;
  paddingTop: number;
  paddingBottom: number;
}
