import type { ComponentRef } from "react";
import { forwardRef, memo, useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { FlyoutScrollViewProps } from "../types";
import { useFlyoutScrollGesture } from "../hooks";

export const FlyoutScrollView = memo<FlyoutScrollViewProps>(
  forwardRef<ComponentRef<typeof ScrollView>, FlyoutScrollViewProps>(
    function FlyoutScrollView(
      {
        style,
        contentContainerStyle,
        horizontal,
        contentOffset,
        contentInset,
        scrollEventThrottle = 16,
        ...props
      },
      ref,
    ) {
      const { scrollRef, gesture } = useFlyoutScrollGesture({
        ref,
        horizontal,
        contentOffset,
        contentInset,
      });
      const styles = useThemedStyles(themedStyles);
      const scrollStyle = useMemo(
        () => [styles.scroll, style],
        [styles.scroll, style],
      );
      const contentStyle = useMemo(
        () => [styles.content, contentContainerStyle],
        [styles.content, contentContainerStyle],
      );

      return (
        <GestureDetector gesture={gesture}>
          <Animated.ScrollView
            ref={scrollRef}
            horizontal={horizontal}
            contentOffset={contentOffset}
            contentInset={contentInset}
            scrollEventThrottle={scrollEventThrottle}
            keyboardShouldPersistTaps="handled"
            {...props}
            style={scrollStyle}
            contentContainerStyle={contentStyle}
          />
        </GestureDetector>
      );
    },
  ),
);

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    scroll: { flexGrow: 0, flexShrink: 1 },
    content: {
      paddingHorizontal: theme.components.flyout.contentPaddingHorizontal,
    },
  });
}
