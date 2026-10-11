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
import { getFlyoutTokens, useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutProps } from "../types";

interface UseFlyoutLifecycleProps extends OverlayLifecycleProps {
  placement: NonNullable<FlyoutProps["placement"]>;
  screenHeight: number;
  safeAreaInset: number;
  overlayVisibleOpacity: number;
}

export function useFlyoutLifecycle(props: UseFlyoutLifecycleProps) {
  const { placement, screenHeight, safeAreaInset, overlayVisibleOpacity } =
    props;
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  const tokens = useComponentsTokens();
  const flyoutTokens = getFlyoutTokens(tokens.flyout, { placement });
  const enterSpring = tokens.flyout.enterSpring;
  const exitAnimationConfig = useMemo(
    () => ({ duration: tokens.flyout.exitDuration }),
    [tokens.flyout.exitDuration],
  );
  const handleHeight = flyoutTokens.handleContainer.height;

  const translateY = useSharedValue(
    placement === "top" ? -screenHeight : screenHeight,
  );
  const opacity = useSharedValue(0);
  const hasMeasured = measuredHeight !== null;

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
      if (measuredHeight === null) {
        complete(transitionId);

        return;
      }

      const target = placement === "top" ? -measuredHeight : measuredHeight;
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
    setMeasuredHeight(null);
    translateY.set(placement === "top" ? -screenHeight : screenHeight);
    opacity.set(0);

    props.onCloseFinished?.(id);
  });
  const lifecycleProps = useMemo(
    () => ({ ...props, onCloseFinished: finishClose }),
    [props, finishClose],
  );
  const lifecycle = useOverlayLifecycle(lifecycleProps, options);
  const { close, status, mounted, interactive } = lifecycle;

  const onLayout = useEventCallback((event: LayoutChangeEvent) => {
    if (!mounted || measuredHeight !== null) {
      return;
    }

    const height =
      event.nativeEvent.layout.height + safeAreaInset + handleHeight;
    translateY.set(placement === "top" ? -height : height);

    setMeasuredHeight(height);
  });

  const dragGesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(status === "open" && hasMeasured)
        .onUpdate((event) => {
          translateY.set(
            placement === "bottom"
              ? Math.max(0, event.translationY)
              : Math.min(0, event.translationY),
          );
        })
        .onEnd((event) => {
          if (measuredHeight === null) {
            return;
          }

          const shouldClose =
            placement === "bottom"
              ? event.translationY > measuredHeight * 0.5 ||
                event.velocityY > 1500
              : event.translationY < -measuredHeight * 0.5 ||
                event.velocityY < -1500;

          if (shouldClose) {
            scheduleOnRN(close);

            return;
          }

          translateY.set(withSpring(0, enterSpring));
          opacity.set(withSpring(overlayVisibleOpacity, enterSpring));
        }),
    [
      status,
      hasMeasured,
      measuredHeight,
      placement,
      close,
      translateY,
      opacity,
      overlayVisibleOpacity,
      enterSpring,
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
      dragGesture,
      hasMeasured,
      isTouchable: interactive,
      onLayout,
      opacity,
      translateY,
    }),
    [
      lifecycle,
      dragGesture,
      hasMeasured,
      interactive,
      onLayout,
      opacity,
      translateY,
    ],
  );
}
