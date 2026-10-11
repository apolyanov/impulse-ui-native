import type { ScrollViewRevealOptions } from "../types/scroll-view-measurement.types";
import { getRevealOffset } from "./get-reveal-offset";

/** Returns null when the target is already visible at the native initial offset. */
export function getScrollViewRevealOffset({
  layout,
  viewportSize,
  contentSize,
  horizontal,
  isRTL,
  platform,
}: ScrollViewRevealOptions): number | null {
  const size = horizontal ? layout.width : layout.height;
  const rtl = horizontal && isRTL;
  const scrollsFromEnd = rtl && platform === "android";
  let start = horizontal ? layout.x : layout.y;

  // iOS scrollTo uses logical RTL offsets; Android uses physical offsets.
  if (rtl && platform === "ios") {
    start = contentSize - layout.x - layout.width;
  }

  const initialOffset = scrollsFromEnd
    ? Math.max(0, contentSize - viewportSize)
    : 0;
  const offset = getRevealOffset(
    start,
    size,
    viewportSize,
    contentSize,
    initialOffset,
    scrollsFromEnd,
  );

  return offset === initialOffset ? null : offset;
}
