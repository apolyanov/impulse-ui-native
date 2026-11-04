import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import type { View as NativeView, ViewStyle } from "react-native";
import { forwardRef, memo, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { useEventCallback } from "@impulse-ui-native/core";
import {
  getShadowStyle,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import type { FlyoutKeyboardAwareViewProps } from "../types";
import { useFlyoutContext } from "../hooks";
import { getFlyoutKeyboardBodyInset } from "../utils/get-flyout-keyboard-body-inset.utils";

export const FlyoutKeyboardAwareView: NamedExoticComponent<
  PropsWithoutRef<FlyoutKeyboardAwareViewProps> &
    RefAttributes<ComponentRef<typeof NativeView>>
> = memo(
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
      const { placement, offset, screenHeight, measuredHeight, maxHeight } =
        useFlyoutContext();
      const { height, progress } = useReanimatedKeyboardAnimation();
      const theme = useTheme();
      const tokens = theme.components.flyout;
      const lastFrame = useRef<{ y: number; height: number } | null>(null);
      const frame = useSharedValue({ y: 0, height: 0 });
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

      const animatedStyle = useAnimatedStyle<ViewStyle>(() => {
        const keyboardHeight = enabled ? Math.max(0, -height.value) : 0;
        const inset = getFlyoutKeyboardBodyInset({
          placement,
          offset,
          screenHeight,
          sheetHeight: measuredHeight.value,
          frame: frame.value,
          keyboardHeight,
          gap: Math.max(0, resolvedKeyboardOffset) * progress.value,
        });
        const spaceBelowBody = Math.max(
          0,
          measuredHeight.value - frame.value.y - frame.value.height,
        );
        const maximumBodyHeight = Math.max(
          0,
          maxHeight - frame.value.y - spaceBelowBody,
        );
        const availablePadding = Math.max(
          0,
          maximumBodyHeight - paddingTop - paddingBottom,
        );
        const keyboardPadding = Math.min(inset, availablePadding);

        return {
          // Explicit body heights grow with the inset; Root still caps the whole sheet.
          height:
            typeof authoredHeight === "number"
              ? authoredHeight + keyboardPadding
              : authoredHeight,
          paddingBottom: paddingBottom + keyboardPadding,
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
