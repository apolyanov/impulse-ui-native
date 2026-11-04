import type { ComponentRef } from "react";
import { forwardRef, memo, useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { FlyoutScrollViewProps } from "../types";

export const FlyoutScrollView = memo(
  forwardRef<ComponentRef<typeof ScrollView>, FlyoutScrollViewProps>(
    function FlyoutScrollView({ style, contentContainerStyle, ...props }, ref) {
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
        <ScrollView
          ref={ref}
          keyboardShouldPersistTaps="handled"
          {...props}
          style={scrollStyle}
          contentContainerStyle={contentStyle}
        />
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
