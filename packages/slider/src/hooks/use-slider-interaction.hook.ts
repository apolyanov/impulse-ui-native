import type {
  GestureResponderEvent,
  LayoutChangeEvent,
  View,
} from "react-native";
import { useCallback, useMemo, useRef } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

import type {
  SliderInteractionHandlers,
  UseSliderInteractionOptions,
  UseSliderInteractionResult,
} from "../types/slider-internal.types";

export function useSliderInteraction({
  disabled,
  onEnd,
  onLayout,
  onMove,
  onStart,
}: UseSliderInteractionOptions): UseSliderInteractionResult {
  const trackRef = useRef<View | null>(null);
  const trackWidthRef = useRef(0);
  const trackPageXRef = useRef(0);

  const measureTrack = useEventCallback(() => {
    trackRef.current?.measureInWindow((x) => {
      trackPageXRef.current = x;
    });
  });

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    trackWidthRef.current = event.nativeEvent.layout.width;
    measureTrack();
    onLayout?.(event);
  });

  const handleResponderGrant = useEventCallback(
    (event: GestureResponderEvent) => {
      measureTrack();
      onStart(
        event.nativeEvent.pageX - trackPageXRef.current,
        trackWidthRef.current,
      );
    },
  );

  const handleResponderMove = useEventCallback(
    (event: GestureResponderEvent) => {
      onMove(
        event.nativeEvent.pageX - trackPageXRef.current,
        trackWidthRef.current,
      );
    },
  );

  const handleStartShouldSetResponder = useCallback(
    () => !disabled,
    [disabled],
  );

  const handleResponderTerminationRequest = useCallback(() => false, []);

  const interactionHandlers = useMemo<SliderInteractionHandlers>(
    () => ({
      onLayout: handleLayout,
      onMoveShouldSetResponder: handleStartShouldSetResponder,
      onMoveShouldSetResponderCapture: handleStartShouldSetResponder,
      onResponderGrant: handleResponderGrant,
      onResponderMove: handleResponderMove,
      onResponderRelease: onEnd,
      onResponderTerminate: onEnd,
      onResponderTerminationRequest: handleResponderTerminationRequest,
      onStartShouldSetResponder: handleStartShouldSetResponder,
      onStartShouldSetResponderCapture: handleStartShouldSetResponder,
    }),
    [
      handleLayout,
      handleResponderGrant,
      handleResponderMove,
      handleResponderTerminationRequest,
      handleStartShouldSetResponder,
      onEnd,
    ],
  );

  return { interactionHandlers, trackRef };
}
