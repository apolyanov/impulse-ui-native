import type { ComponentRef } from "react";
import type { View as NativeView, ViewStyle } from "react-native";
import { forwardRef, memo, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { useEventCallback } from "@impulse-ui-native/core";
import {
  getShadowStyle,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import type {
  FlyoutKeyboardAwareViewComponent,
  FlyoutKeyboardAwareViewProps,
} from "../types";
import type { FlyoutKeyboardBodyFrame } from "../types/flyout-keyboard.types";
import { useFlyoutContext } from "../hooks";
import { getFlyoutKeyboardBodyPadding } from "../utils/get-flyout-keyboard-body-padding.utils";

export const FlyoutKeyboardAwareView: FlyoutKeyboardAwareViewComponent = memo(
  forwardRef<ComponentRef<typeof NativeView>, FlyoutKeyboardAwareViewProps>(
    function FlyoutKeyboardAwareView(
      {
        enabled = true,
        keyboardOffset,
        style,
        shadow,
        shadowPosition,
        onLayout,
        ...props
      },
      ref,
    ) {
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
      const styleProps = useStyleProps(props);
      const resolvedStyle = useMemo(
        () =>
          StyleSheet.flatten([
            getShadowStyle(shadow, shadowPosition, theme.colors, theme.shadows),
            styleProps,
            style,
          ]) ?? {},
        [
          shadow,
          shadowPosition,
          theme.colors,
          theme.shadows,
          styleProps,
          style,
        ],
      );
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
      const bodyStyle = useMemo(
        () => [
          { flexShrink: 1, overflow: "hidden" as const },
          resolvedStyle,
          animatedStyle,
        ],
        [resolvedStyle, animatedStyle],
      );
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

      return (
        <Animated.View
          {...props}
          ref={ref}
          onLayout={handleLayout}
          style={bodyStyle}
        />
      );
    },
  ),
);
