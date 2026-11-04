import type { SharedValue } from "react-native-reanimated";

import type { FlyoutPlacement } from "@impulse-ui-native/theme";

import type { FlyoutDragGesture } from "./flyout-lifecycle.types";

export type FlyoutContextValue = {
  measuredHeight: SharedValue<number>;
  closingHeight: SharedValue<number>;
  offset: number;
  screenHeight: number;
  maxHeight: number;
  placement: FlyoutPlacement;
};

export type FlyoutDragContextValue = {
  dragGesture: FlyoutDragGesture;
  placement: FlyoutPlacement;
};
