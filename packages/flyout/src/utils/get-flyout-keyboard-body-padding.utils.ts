import type { FlyoutKeyboardBodyPaddingOptions } from "../types/flyout-keyboard.types";
import { getFlyoutKeyboardBodyInset } from "./get-flyout-keyboard-body-inset.utils";

export function getFlyoutKeyboardBodyPadding(
  options: FlyoutKeyboardBodyPaddingOptions,
): number {
  "worklet";
  const { sheetHeight, frame, maxHeight, paddingTop, paddingBottom } = options;
  const inset = getFlyoutKeyboardBodyInset(options);
  const spaceBelowBody = Math.max(0, sheetHeight - frame.y - frame.height);
  const maximumBodyHeight = Math.max(0, maxHeight - frame.y - spaceBelowBody);
  const availablePadding = Math.max(
    0,
    maximumBodyHeight - paddingTop - paddingBottom,
  );
  return Math.min(inset, availablePadding);
}
