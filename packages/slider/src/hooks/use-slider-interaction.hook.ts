import type { LayoutChangeEvent } from "react-native";
import { useMemo } from "react";
import { Gesture } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type {
  UseSliderInteractionOptions,
  UseSliderInteractionResult,
} from "../types/slider-internal.types";

export function useSliderInteraction({
  disabled,
  onEnd,
  onLayout,
  onMove,
  onPosition,
  onStart,
  width,
}: UseSliderInteractionOptions): UseSliderInteractionResult {
  const active = useSharedValue(false);

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    width.set(event.nativeEvent.layout.width);

    onLayout?.(event);
  });

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(!disabled)
        .manualActivation(true)
        .shouldCancelWhenOutside(false)
        .onTouchesDown((_event, manager) => {
          "worklet";

          if (width.get() > 0) {
            manager.activate();
          } else {
            manager.fail();
          }
        })
        .onStart((event) => {
          "worklet";

          active.set(true);
          onPosition(event.x, width.get(), true);

          scheduleOnRN(onStart, event.x, width.get());
        })
        .onUpdate((event) => {
          "worklet";

          if (onPosition(event.x, width.get(), false)) {
            scheduleOnRN(onMove, event.x, width.get());
          }
        })
        .onEnd((event, success) => {
          "worklet";

          if (success && onPosition(event.x, width.get(), false)) {
            scheduleOnRN(onMove, event.x, width.get());
          }
        })
        .onFinalize(() => {
          "worklet";

          if (active.get()) {
            active.set(false);

            scheduleOnRN(onEnd);
          }
        }),
    [active, disabled, onEnd, onMove, onPosition, onStart, width],
  );

  return { gesture, handleLayout };
}
