import type { LayoutChangeEvent } from "react-native";
import type {
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Gesture } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type { SpectrumInteractionOptions } from "../types/spectrum.types";
import { SpectrumUpdateInterval } from "../constants/color.constants";
import { getSpectrumPosition } from "../utils/spectrum.utils";

export function useSpectrumInteraction({
  disabled,
  onChange,
  onChangeWorklet,
  onComplete,
  saturation,
  brightness,
}: SpectrumInteractionOptions) {
  const [interactionRevision, setInteractionRevision] = useState(0);
  const slidingRef = useRef(false);
  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const displaySaturation = useSharedValue(saturation);
  const displayBrightness = useSharedValue(brightness);
  const lastNotification = useSharedValue(0);
  const active = useSharedValue(false);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: displaySaturation.get() * width.get() },
      { translateY: (1 - displayBrightness.get()) * height.get() },
    ],
  }));

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    width.set(event.nativeEvent.layout.width);
    height.set(event.nativeEvent.layout.height);
  });
  const start = useEventCallback((s: number, v: number) => {
    slidingRef.current = true;

    onChange(s, v);
  });
  const update = useEventCallback((s: number, v: number) => {
    if (!disabled) {
      onChange(s, v);
    }
  });
  const finish = useEventCallback((s: number, v: number) => {
    update(s, v);
    slidingRef.current = false;
    setInteractionRevision((revision) => revision + 1);

    onComplete?.();
  });

  const handleGestureStart = useCallback(
    (event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      "worklet";

      const { saturation: s, brightness: v } = getSpectrumPosition(
        event.x,
        event.y,
        width.get(),
        height.get(),
      );
      displaySaturation.set(s);
      displayBrightness.set(v);
      onChangeWorklet?.(s, v);
      active.set(true);
      lastNotification.set(Date.now());

      scheduleOnRN(start, s, v);
    },
    [
      active,
      displayBrightness,
      displaySaturation,
      height,
      lastNotification,
      onChangeWorklet,
      start,
      width,
    ],
  );
  const handleGestureUpdate = useCallback(
    (event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      "worklet";

      const { saturation: s, brightness: v } = getSpectrumPosition(
        event.x,
        event.y,
        width.get(),
        height.get(),
      );

      if (s === displaySaturation.get() && v === displayBrightness.get()) {
        return;
      }

      displaySaturation.set(s);
      displayBrightness.set(v);
      onChangeWorklet?.(s, v);

      // Keep the indicator at the native refresh rate while limiting React work.
      const now = Date.now();

      if (now - lastNotification.get() >= SpectrumUpdateInterval) {
        lastNotification.set(now);

        scheduleOnRN(update, s, v);
      }
    },
    [
      displayBrightness,
      displaySaturation,
      height,
      lastNotification,
      onChangeWorklet,
      update,
      width,
    ],
  );

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(!disabled)
        .manualActivation(true)
        .shouldCancelWhenOutside(false)
        .onTouchesDown((_event, manager) => {
          "worklet";

          if (width.get() > 0 && height.get() > 0) {
            // Claim the native touch before the parent can begin scrolling.
            manager.activate();
          } else {
            manager.fail();
          }
        })
        .onStart(handleGestureStart)
        .onUpdate(handleGestureUpdate)
        .onEnd((event, success) => {
          "worklet";

          if (success) {
            const position = getSpectrumPosition(
              event.x,
              event.y,
              width.get(),
              height.get(),
            );
            displaySaturation.set(position.saturation);
            displayBrightness.set(position.brightness);
            onChangeWorklet?.(position.saturation, position.brightness);
          }
        })
        .onFinalize(() => {
          "worklet";

          if (active.get()) {
            active.set(false);

            // Always flush the final selection, including a throttled last move.
            scheduleOnRN(
              finish,
              displaySaturation.get(),
              displayBrightness.get(),
            );
          }
        }),
    [
      active,
      disabled,
      displayBrightness,
      displaySaturation,
      finish,
      height,
      handleGestureStart,
      handleGestureUpdate,
      onChangeWorklet,
      width,
    ],
  );

  useEffect(() => {
    if (!slidingRef.current) {
      displaySaturation.set(saturation);
      displayBrightness.set(brightness);
    }
  }, [
    brightness,
    displayBrightness,
    displaySaturation,
    interactionRevision,
    saturation,
  ]);

  return { gesture, handleLayout, indicatorStyle };
}
