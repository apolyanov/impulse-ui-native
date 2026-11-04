import type { LayoutChangeEvent } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { Gesture } from "react-native-gesture-handler";
import {
  cancelAnimation,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import type {
  OverlayLifecycleProps,
  OverlayTransitionHandler,
} from "@impulse-ui-native/overlay";
import { useEventCallback } from "@impulse-ui-native/core";
import { useOverlayLifecycle } from "@impulse-ui-native/overlay";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutProps } from "../types";

interface UseFlyoutLifecycleProps extends OverlayLifecycleProps {
  placement: NonNullable<FlyoutProps["placement"]>;
  offset: number;
}

export function useFlyoutLifecycle(props: UseFlyoutLifecycleProps) {
  const { placement, offset } = props;
  const direction = placement === "top" ? -1 : 1;
  const [hasMeasured, setHasMeasured] = useState(false);

  const { flyout: tokens } = useComponentsTokens();
  const { enterSpring, overlayVisibleOpacity } = tokens;
  const exitAnimationConfig = useMemo(
    () => ({ duration: tokens.exitDuration }),
    [tokens.exitDuration],
  );

  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const measuredHeight = useSharedValue(0);

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
        withTiming(target, exitAnimationConfig, (finished) => {
          if (finished) {
            scheduleOnRN(complete, transitionId);
          }
        }),
      );
      opacity.set(withTiming(0, exitAnimationConfig));
    },
  );

  const options = useMemo(
    () => ({ ready: hasMeasured, onEnter: enter, onExit: exit }),
    [hasMeasured, enter, exit],
  );
  const finishClose = useEventCallback((id: string) => {
    setHasMeasured(false);
    // Keep the exited geometry until React unmounts the sheet.
    // The next opening prepares its position from a fresh layout.

    props.onCloseFinished?.(id);
  });
  const lifecycleProps = useMemo(
    () => ({ ...props, onCloseFinished: finishClose }),
    [props, finishClose],
  );
  const lifecycle = useOverlayLifecycle(lifecycleProps, options);
  const { close, status, mounted } = lifecycle;

  const onLayout = useEventCallback((event: LayoutChangeEvent) => {
    if (!mounted) {
      return;
    }

    const height = event.nativeEvent.layout.height;
    measuredHeight.set(height);

    if (!hasMeasured) {
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
            distance > measuredHeight.value * 0.5 || velocity > 1500;

          if (shouldClose) {
            scheduleOnRN(close);

            return;
          }

          translateY.set(withSpring(0, enterSpring));
        }),
    [status, measuredHeight, direction, close, translateY, enterSpring],
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
      dragGesture,
      hasMeasured,
      measuredHeight,
      onLayout,
      opacity,
      translateY,
    }),
    [
      lifecycle,
      dragGesture,
      hasMeasured,
      measuredHeight,
      onLayout,
      opacity,
      translateY,
    ],
  );
}
