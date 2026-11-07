import type { ViewStyle } from "react-native";
import { useRef } from "react";
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";
import {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { useEventCallback } from "@impulse-ui-native/core";
import { useTheme } from "@impulse-ui-native/theme";

import type { FlyoutKeyboardAwareViewProps } from "../types";
import type {
  FlyoutKeyboardBodyFrame,
  FlyoutKeyboardBodyOptions,
} from "../types/flyout-keyboard.types";
import { getFlyoutKeyboardBodyPadding } from "../utils/get-flyout-keyboard-body-padding.utils";
import { useFlyoutContext } from "./use-flyout-context.hook";

export function useFlyoutKeyboardBody({
  enabled,
  keyboardOffset,
  resolvedStyle,
  onLayout,
}: FlyoutKeyboardBodyOptions) {
  const {
    placement,
    offset,
    screenHeight,
    measuredHeight,
    maxHeight,
    closingHeight,
  } = useFlyoutContext();
  const { height, progress } = useReanimatedKeyboardAnimation();
  const theme = useTheme();
  const tokens = theme.components.flyout;
  const lastFrame = useRef<FlyoutKeyboardBodyFrame | null>(null);
  const frame = useSharedValue<FlyoutKeyboardBodyFrame>({
    y: 0,
    height: 0,
  });
  const keyboardPadding = useSharedValue(0);
  const resolvedKeyboardOffset = keyboardOffset ?? tokens.keyboardOffset;
  const authoredHeight = resolvedStyle.height ?? "auto";
  const authoredPaddingTop =
    resolvedStyle.paddingTop ??
    resolvedStyle.paddingVertical ??
    resolvedStyle.padding ??
    0;
  const authoredPaddingBottom =
    resolvedStyle.paddingBottom ??
    resolvedStyle.paddingVertical ??
    resolvedStyle.padding ??
    0;
  const paddingTop =
    typeof authoredPaddingTop === "number" ? authoredPaddingTop : 0;
  const paddingBottom =
    typeof authoredPaddingBottom === "number" ? authoredPaddingBottom : 0;

  const handleLayout = useEventCallback<
    NonNullable<FlyoutKeyboardAwareViewProps["onLayout"]>
  >((event) => {
    const layout = event.nativeEvent.layout;
    const previous = lastFrame.current;
    if (previous?.y !== layout.y || previous.height !== layout.height) {
      const next = { y: layout.y, height: layout.height };
      lastFrame.current = next;
      frame.set(next);
    }
    onLayout?.(event);
  });
  useAnimatedReaction(
    () => {
      if (closingHeight.value > 0) return null;
      const keyboardHeight = enabled ? Math.max(0, -height.value) : 0;
      return getFlyoutKeyboardBodyPadding({
        placement,
        offset,
        screenHeight,
        sheetHeight: measuredHeight.value,
        frame: frame.value,
        keyboardHeight,
        gap: Math.max(0, resolvedKeyboardOffset) * progress.value,
        maxHeight,
        paddingTop,
        paddingBottom,
      });
    },
    (nextPadding) => {
      if (nextPadding !== null) keyboardPadding.set(nextPadding);
    },
  );

  const animatedStyle = useAnimatedStyle<ViewStyle>(() => {
    const padding = keyboardPadding.value;
    return {
      // Explicit body heights grow with the inset; Root still caps the whole sheet.
      height:
        typeof authoredHeight === "number"
          ? authoredHeight + padding
          : authoredHeight,
      paddingBottom:
        padding > 0 ? paddingBottom + padding : authoredPaddingBottom,
    };
  });
  return { animatedStyle, handleLayout };
}
