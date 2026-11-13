import type { ComponentRef } from "react";
import type { View as NativeView, StyleProp, ViewStyle } from "react-native";
import { forwardRef, memo, useMemo } from "react";
import Animated, { AnimatedStyle } from "react-native-reanimated";

import type { FlyoutKeyboardAwareViewProps } from "../types";
import { useFlyoutKeyboardBody, useFlyoutKeyboardBodyStyle } from "../hooks";

export const FlyoutKeyboardAwareView = memo<FlyoutKeyboardAwareViewProps>(
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
      const resolvedStyle = useFlyoutKeyboardBodyStyle({
        style,
        shadow,
        shadowPosition,
        ...props,
      });
      const { animatedStyle, handleLayout } = useFlyoutKeyboardBody({
        enabled,
        keyboardOffset,
        resolvedStyle,
        onLayout,
      });
      const bodyStyle: StyleProp<AnimatedStyle<ViewStyle>> = useMemo(
        () => [
          { flexShrink: 1, overflow: "hidden" },
          resolvedStyle,
          animatedStyle,
        ],
        [resolvedStyle, animatedStyle],
      );
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
