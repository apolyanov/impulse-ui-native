import type { ViewProps } from "react-native";
import type {
  PanGesture,
  PanGestureConfig,
} from "react-native-gesture-handler";
import type { SharedValue } from "react-native-reanimated";

import type {
  OverlayLifecycle,
  OverlayLifecycleProps,
} from "@impulse-ui-native/overlay";
import type { FlyoutPlacement } from "@impulse-ui-native/theme";

export type FlyoutDragGesture = PanGesture;

export interface UseFlyoutLifecycleProps extends OverlayLifecycleProps {
  placement: FlyoutPlacement;
  offset: number;
}

export interface FlyoutLifecycle extends OverlayLifecycle {
  dragGesture: FlyoutDragGesture;
  dragGestureConfig: PanGestureConfig;
  hasMeasured: boolean;
  measuredHeight: SharedValue<number>;
  closingHeight: SharedValue<number>;
  onLayout: NonNullable<ViewProps["onLayout"]>;
  opacity: SharedValue<number>;
  translateY: SharedValue<number>;
}
