import type { FlyoutRootProps } from "./flyout.types";

export interface FlyoutKeyboardBodyInsetOptions {
  placement: NonNullable<FlyoutRootProps["placement"]>;
  offset: number;
  screenHeight: number;
  sheetHeight: number;
  frame: { y: number; height: number };
  keyboardHeight: number;
  gap: number;
}
