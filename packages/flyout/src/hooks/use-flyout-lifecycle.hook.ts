import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutProps } from "../types";

const EnterAnimationConfig = {
  damping: 50,
  stiffness: 300,
  mass: 1,
  overshootClamping: true,
};

const ExitAnimationConfig = {
  duration: 150,
  easing: Easing.in(Easing.quad),
};

interface UseFlyoutLifecycleProps {
  id: FlyoutProps["id"];
  open: FlyoutProps["open"];
  placement: NonNullable<FlyoutProps["placement"]>;
  screenHeight: number;
  safeAreaInset: number;
  overlayVisibleOpacity: number;
  onClose: FlyoutProps["onClose"];
  onCloseFinished: FlyoutProps["onCloseFinished"];
  onOpen: FlyoutProps["onOpen"];
  onOpenFinished: FlyoutProps["onOpenFinished"];
}

export function useFlyoutLifecycle(props: UseFlyoutLifecycleProps) {
  const {
    id,
    open,
    placement,
    screenHeight,
    safeAreaInset,
    overlayVisibleOpacity,
    onClose,
    onCloseFinished,
    onOpen,
    onOpenFinished,
  } = props;

  const tokens = useComponentsTokens();
  const handleHeight = tokens.flyout.handle.containerHeight;

  const [mounted, setMounted] = useState(open);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const [isTouchable, setIsTouchable] = useState(false);

  const didOpen = useRef(false);
  const isClosing = useRef(false);
  const transitionId = useRef(0);

  const translateY = useSharedValue(
    placement === "top" ? -screenHeight : screenHeight,
  );
  const opacity = useSharedValue(0);

  const hasMeasured = measuredHeight !== null;

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (measuredHeight !== null) {
        return;
      }

      const height =
        event.nativeEvent.layout.height + safeAreaInset + handleHeight;

      translateY.value = placement === "top" ? -height : height;
      setMeasuredHeight(height);
    },
    [handleHeight, measuredHeight, placement, safeAreaInset, translateY],
  );

  const finishClosing = useCallback(
    (finishedTransitionId: number) => {
      if (!isClosing.current || transitionId.current !== finishedTransitionId) {
        return;
      }

      isClosing.current = false;
      setMounted(false);
      setMeasuredHeight(null);
      onCloseFinished?.(id);
    },
    [id, onCloseFinished],
  );

  const close = useCallback(() => {
    if (measuredHeight === null || isClosing.current) {
      return;
    }

    isClosing.current = true;
    transitionId.current += 1;
    setIsTouchable(false);
    onClose?.(id);

    const target = placement === "top" ? -measuredHeight : measuredHeight;
    const closingTransitionId = transitionId.current;

    translateY.value = withTiming(target, ExitAnimationConfig, (finished) => {
      if (finished) {
        scheduleOnRN(finishClosing, closingTransitionId);
      }
    });
    opacity.value = withTiming(0, ExitAnimationConfig);
    didOpen.current = false;
  }, [
    finishClosing,
    id,
    measuredHeight,
    onClose,
    opacity,
    placement,
    translateY,
  ]);

  const dragGesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(hasMeasured)
        .onUpdate((event) => {
          if (placement === "bottom") {
            translateY.value = Math.max(0, event.translationY);
            return;
          }

          translateY.value = Math.min(0, event.translationY);
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

          translateY.value = withSpring(0, EnterAnimationConfig);
          opacity.value = withSpring(
            overlayVisibleOpacity,
            EnterAnimationConfig,
          );
        }),
    [
      close,
      hasMeasured,
      measuredHeight,
      opacity,
      overlayVisibleOpacity,
      placement,
      translateY,
    ],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    transitionId.current += 1;
    setIsTouchable(false);
    isClosing.current = false;
    didOpen.current = false;

    if (!mounted) {
      setMounted(true);
      setMeasuredHeight(null);
      translateY.value = placement === "top" ? -screenHeight : screenHeight;
      opacity.value = 0;
    }
  }, [mounted, open, opacity, placement, screenHeight, translateY]);

  useEffect(() => {
    if (!open || measuredHeight === null || didOpen.current) {
      return;
    }

    setIsTouchable(true);
    onOpen?.(id);

    translateY.value = withSpring(0, EnterAnimationConfig, (finished) => {
      if (finished && onOpenFinished) {
        scheduleOnRN(onOpenFinished, id);
      }
    });
    opacity.value = withSpring(overlayVisibleOpacity, EnterAnimationConfig);
    didOpen.current = true;
  }, [
    id,
    measuredHeight,
    onOpen,
    onOpenFinished,
    opacity,
    open,
    overlayVisibleOpacity,
    translateY,
  ]);

  useEffect(() => {
    if (open || !mounted || isClosing.current) {
      return;
    }

    if (didOpen.current) {
      close();
      return;
    }

    setMounted(false);
    setMeasuredHeight(null);
  }, [close, mounted, open]);

  return useMemo(
    () => ({
      close,
      dragGesture,
      hasMeasured,
      isTouchable,
      mounted,
      onLayout,
      opacity,
      translateY,
    }),
    [
      close,
      dragGesture,
      hasMeasured,
      isTouchable,
      mounted,
      onLayout,
      opacity,
      translateY,
    ],
  );
}
