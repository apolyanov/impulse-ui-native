import type { ForwardedRef } from "react";
import { forwardRef, memo, useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { FlyoutFlatListComponent, FlyoutFlatListProps } from "../types";
import { useFlyoutScrollGesture } from "../hooks";

export const FlyoutFlatList = memo<FlyoutFlatListProps<unknown>>(
  forwardRef(function FlyoutFlatList<Item>(
    {
      style,
      contentContainerStyle,
      horizontal,
      contentOffset,
      contentInset,
      scrollEventThrottle = 16,
      ...props
    }: FlyoutFlatListProps<Item>,
    ref: ForwardedRef<FlatList<Item>>,
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
        <FlatList
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
  }),
) as FlyoutFlatListComponent;

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    scroll: { flexGrow: 0, flexShrink: 1 },
    content: {
      paddingHorizontal: theme.components.flyout.contentPaddingHorizontal,
    },
  });
}
