import { memo, useCallback, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { SegmentedControlContextData } from "../contexts";
import type {
  SegmentedControlRootProps,
  SegmentedControlRootThemeProps,
} from "../types";
import { SegmentedControlProvider } from "../contexts";

export const SegmentedControlRoot = memo(function SegmentedControlRoot({
  children,
  contentContainerStyle,
  defaultValue,
  disabled = false,
  onValueChange,
  overflow = "clip",
  showsHorizontalScrollIndicator = false,
  size = "medium",
  style,
  value,
  variant = "filled",
  ...props
}: SegmentedControlRootProps) {
  const [selectedValue, setSelectedValue] = useControllableState<string>({
    prop: value,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });
  const styles = useThemedStyles(themedStyles, { size }, [size]);

  const selectValue = useCallback(
    (nextValue: string) => setSelectedValue(nextValue),
    [setSelectedValue],
  );

  const context = useMemo<SegmentedControlContextData>(
    () => ({
      disabled,
      selectValue,
      selectedValue,
      size,
      variant,
    }),
    [disabled, selectValue, selectedValue, size, variant],
  );
  const rootStyle = useMemo(() => [styles.root, style], [style, styles.root]);
  const resolvedContentContainerStyle = useMemo(
    () => [styles.content, contentContainerStyle],
    [contentContainerStyle, styles.content],
  );

  return (
    <SegmentedControlProvider value={context}>
      <View style={rootStyle}>
        <ScrollView
          {...props}
          contentContainerStyle={resolvedContentContainerStyle}
          directionalLockEnabled
          horizontal
          scrollEnabled={overflow === "scroll"}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          style={styles.scroll}
        >
          {children}
        </ScrollView>
      </View>
    </SegmentedControlProvider>
  );
});

function themedStyles(theme: AppTheme, props: SegmentedControlRootThemeProps) {
  const tokens = theme.components.segmentedControl;
  const sizeTokens = tokens.sizes[props.size];

  return StyleSheet.create({
    root: {
      flexGrow: 0,
      minHeight: sizeTokens.height,
      overflow: "hidden",

      backgroundColor: tokens.rootBackgroundColor,
      borderColor: tokens.rootBorderColor,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
    },
    scroll: {
      flexGrow: 1,
      flexShrink: 1,
      minHeight: Math.max(0, sizeTokens.height - tokens.borderWidth * 2),
    },
    content: {
      alignItems: "stretch",
      flexGrow: 1,
      flexDirection: "row",
      gap: tokens.rootGap,
      padding: tokens.rootPadding,
    },
  });
}
