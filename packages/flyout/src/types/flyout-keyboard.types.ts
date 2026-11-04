import type { LayoutRectangle } from "react-native";

import type { FlyoutPlacement } from "@impulse-ui-native/theme";

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
