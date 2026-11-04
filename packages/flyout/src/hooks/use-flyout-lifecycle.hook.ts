import type { LayoutChangeEvent } from "react-native";
import { useEffect, useMemo, useRef, useState } from "react";
import { Gesture } from "react-native-gesture-handler";
import {
  cancelAnimation,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import type {
  OverlayLifecycleStatus,
  OverlayTransitionHandler,
} from "@impulse-ui-native/overlay";
import { useEventCallback } from "@impulse-ui-native/core";
import { useOverlayLifecycle } from "@impulse-ui-native/overlay";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type {
  FlyoutLifecycle,
  UseFlyoutLifecycleProps,
} from "../types/flyout-lifecycle.types";
import {
  FlyoutDismissDistanceRatio,
  FlyoutDismissVelocity,
} from "../constants/flyout-gesture.constants";

export function useFlyoutLifecycle(
  props: UseFlyoutLifecycleProps,
): FlyoutLifecycle {
  const { placement, offset } = props;
  const direction = placement === "top" ? -1 : 1;
  const [hasMeasured, setHasMeasured] = useState(false);
  const lastMeasuredHeight = useRef<number | null>(null);

  const { flyout: tokens } = useComponentsTokens();
  const { enterSpring, overlayVisibleOpacity } = tokens;

  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const measuredHeight = useSharedValue(0);
  const releaseVelocity = useSharedValue(0);
  const closingHeight = useSharedValue(0);

  const enter = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) => {
      translateY.set(
        withSpring(0, enterSpring, (finished) => {
          if (finished) {
            scheduleOnRN(complete, transitionId);
          }
        }),
      );
      opacity.set(withSpring(overlayVisibleOpacity, enterSpring));
    },
  );
  const exit = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) => {
      if (!hasMeasured) {
        complete(transitionId);

        return;
      }

      const target = direction * (measuredHeight.value + offset);
      translateY.set(
        withSpring(
          target,
          {
            duration: tokens.exitDuration,
            dampingRatio: 1,
            velocity: releaseVelocity.value,
          },
          (finished) => {
            if (finished) {
              scheduleOnRN(complete, transitionId);
            }
          },
        ),
      );
      releaseVelocity.set(0);
      opacity.set(withTiming(0, { duration: tokens.exitDuration }));
    },
  );

  const options = useMemo(
    () => ({ ready: hasMeasured, onEnter: enter, onExit: exit }),
    [hasMeasured, enter, exit],
  );
  const handleStatusChange = useEventCallback(
    (id: string, status: OverlayLifecycleStatus) => {
      // Capture before consumer callbacks can dismiss the keyboard or reset content.
      if (status === "closing") closingHeight.set(measuredHeight.value);
      else if (status === "opening") closingHeight.set(0);
      props.onStatusChange?.(id, status);
    },
  );
  const finishClose = useEventCallback((id: string) => {
    setHasMeasured(false);
    lastMeasuredHeight.current = null;
    // Keep the exited geometry until React unmounts the sheet.
    // The next opening prepares its position from a fresh layout.

    props.onCloseFinished?.(id);
  });
  const lifecycle = useOverlayLifecycle(
    {
      ...props,
      onStatusChange: handleStatusChange,
      onCloseFinished: finishClose,
    },
    options,
  );
  const { close, status, mounted } = lifecycle;

  const onLayout = useEventCallback((event: LayoutChangeEvent) => {
    if (!mounted || closingHeight.value > 0) {
      return;
    }

    const height = event.nativeEvent.layout.height;
    const firstMeasurement = lastMeasuredHeight.current === null;
    if (lastMeasuredHeight.current !== height) {
      lastMeasuredHeight.current = height;
      measuredHeight.set(height);
    }

    if (firstMeasurement) {
      // The sheet stays hidden until this starting position is ready.
      translateY.set(direction * (height + offset));
      setHasMeasured(true);
    }
  });

  const dragGesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(status === "open")
        .onUpdate((event) => {
          const distance = Math.max(0, direction * event.translationY);
          translateY.set(direction * distance);
        })
        .onEnd((event) => {
          const distance = direction * event.translationY;
          const velocity = direction * event.velocityY;
          const shouldClose =
            distance > measuredHeight.value * FlyoutDismissDistanceRatio ||
            velocity > FlyoutDismissVelocity;

          if (shouldClose) {
            releaseVelocity.set(event.velocityY);
            scheduleOnRN(close);

            return;
          }

          translateY.set(
            withSpring(0, { ...enterSpring, velocity: event.velocityY }),
          );
        }),
    [
      status,
      measuredHeight,
      direction,
      close,
      translateY,
      enterSpring,
      releaseVelocity,
    ],
  );

  useEffect(
    () => () => {
      cancelAnimation(translateY);
      cancelAnimation(opacity);
    },
    [translateY, opacity],
  );

  return useMemo(
    () => ({
      ...lifecycle,
      closingHeight,
      dragGesture,
      hasMeasured,
      measuredHeight,
      onLayout,
      opacity,
      translateY,
    }),
    [
      lifecycle,
      closingHeight,
      dragGesture,
      hasMeasured,
      measuredHeight,
      onLayout,
      opacity,
      translateY,
    ],
  );
}
