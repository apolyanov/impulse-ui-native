import type { FlyoutKeyboardBodyInsetOptions } from "../types/flyout-keyboard.types";

export function getFlyoutKeyboardBodyInset({
  placement,
  offset,
  screenHeight,
  sheetHeight,
  frame,
  keyboardHeight,
  gap,
}: FlyoutKeyboardBodyInsetOptions): number {
  "worklet";

  if (keyboardHeight <= 0 || sheetHeight <= 0 || frame.height <= 0) {
    return 0;
  }

  const sheetTop =
    placement === "top" ? offset : screenHeight - offset - sheetHeight;
  const bodyBottom = sheetTop + frame.y + frame.height;
  const keyboardTop = screenHeight - keyboardHeight;
  const overlap = bodyBottom - keyboardTop + gap;

  return Math.max(0, overlap);
}
