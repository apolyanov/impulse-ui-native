import type { SharedValue } from "react-native-reanimated";

import type { OverlayLifecycleOptions } from "./overlay-lifecycle.types";

export type OverlayAnimationKind = "spring" | "timing";

export interface OverlayAnimation {
  options: Required<Pick<OverlayLifecycleOptions, "onEnter" | "onExit">>;
  progress: SharedValue<number>;
}
