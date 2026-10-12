import type { LayoutChangeEvent } from "react-native";
import { useMemo } from "react";
import { Gesture } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type { SpectrumInteractionOptions } from "../types/spectrum.types";

export function useSpectrumInteraction({
  disabled,
  onChange,
}: SpectrumInteractionOptions) {
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    width.set(event.nativeEvent.layout.width);
    height.set(event.nativeEvent.layout.height);
  });
  const update = useEventCallback(
    (x: number, y: number, panelWidth: number, panelHeight: number) => {
      if (disabled || panelWidth <= 0 || panelHeight <= 0) {
        return;
      }

      onChange(x / panelWidth, 1 - y / panelHeight);
    },
  );
  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(!disabled)
        .manualActivation(true)
        .shouldCancelWhenOutside(false)
        .onTouchesDown((_event, manager) => {
          "worklet";

          // Claim the native touch before the parent can begin scrolling.
          manager.activate();
        })
        .onStart((event) => {
          "worklet";

          scheduleOnRN(update, event.x, event.y, width.get(), height.get());
        })
        .onUpdate((event) => {
          "worklet";

          scheduleOnRN(update, event.x, event.y, width.get(), height.get());
        }),
    [disabled, update, width, height],
  );

  return { gesture, handleLayout };
}
