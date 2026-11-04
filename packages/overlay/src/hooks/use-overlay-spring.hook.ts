import type { OverlayTimingOptions } from "../types";
import { useOverlayAnimation } from "./use-overlay-animation.hook";

/** Critically damped motion; durations describe perceived motion rather than settling time. */
export function useOverlaySpring(options: OverlayTimingOptions) {
  return useOverlayAnimation(options, "spring");
}
