import type { ScrollViewRevealOptions } from "../types/scroll-view-measurement.types";
import { getRevealOffset } from "./get-reveal-offset";

/** Returns null when the target is already visible at the native initial offset. */
export function getScrollViewRevealOffset({
  layout,
  viewportSize,
  contentSize,
  horizontal,
}: ScrollViewRevealOptions): number | null {
  const size = horizontal ? layout.width : layout.height;
  const start = horizontal ? layout.x : layout.y;
  const offset = getRevealOffset(start, size, viewportSize, contentSize, 0);

  return offset === 0 ? null : offset;
}
