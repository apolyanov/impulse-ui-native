import type { OverlayTimingOptions } from "../types";
import { useOverlayAnimation } from "./use-overlay-animation.hook";

export function useOverlayTiming(options: OverlayTimingOptions) {
  return useOverlayAnimation(options, "timing");
}
