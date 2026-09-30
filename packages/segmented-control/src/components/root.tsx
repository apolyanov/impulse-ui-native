import { memo, useCallback, useMemo, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { SegmentedControlContextData } from "../contexts";
import type {
  SegmentedControlRootProps,
  SegmentedControlRootThemeProps,
} from "../types";
import { SegmentedControlProvider } from "../contexts";

type ItemRegistration = Parameters<
  SegmentedControlContextData["registerItem"]
>[0];

export const SegmentedControlRoot = memo(function SegmentedControlRoot({
  accessibilityState,
  children,
  contentContainerStyle,
  defaultValue,
  disabled = false,
  onValueChange,
  overflow = "scroll",
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
  const itemRegistry = useRef<ItemRegistration[]>([]);
  const styles = useThemedStyles(themedStyles, { size }, [size]);

  const registerItem = useCallback((registration: ItemRegistration) => {
    itemRegistry.current = [...itemRegistry.current, registration];

    return () => {
      itemRegistry.current = itemRegistry.current.filter(
        (candidate) => candidate !== registration,
      );
    };
  }, []);

  const selectValue = useCallback(
    (nextValue: string) => setSelectedValue(nextValue),
    [setSelectedValue],
  );

  const focusItem = useCallback<SegmentedControlContextData["focusItem"]>(
    (currentValue, direction) => {
      const enabledItems = itemRegistry.current.filter(
        (item) => !item.disabled,
      );
      const currentIndex = enabledItems.findIndex(
        (item) => item.value === currentValue,
      );

      if (enabledItems.length === 0) return;

      let nextIndex = currentIndex;

      if (direction === "first") nextIndex = 0;
      if (direction === "last") nextIndex = enabledItems.length - 1;
      if (direction === "next") {
        nextIndex = (currentIndex + 1) % enabledItems.length;
      }
      if (direction === "previous") {
        nextIndex =
          (currentIndex - 1 + enabledItems.length) % enabledItems.length;
      }

      const nextItem = enabledItems[nextIndex];

      if (!nextItem) return;

      nextItem.ref.current?.focus();
      setSelectedValue(nextItem.value);
    },
    [setSelectedValue],
  );

  const context = useMemo<SegmentedControlContextData>(
    () => ({
      disabled,
      focusItem,
      registerItem,
      selectValue,
      selectedValue,
      size,
      variant,
    }),
    [
      disabled,
      focusItem,
      registerItem,
      selectValue,
      selectedValue,
      size,
      variant,
    ],
  );
  const resolvedAccessibilityState = useMemo(
    () => ({
      ...accessibilityState,
      disabled,
    }),
    [accessibilityState, disabled],
  );
  const rootStyle = useMemo(() => [styles.root, style], [style, styles.root]);
  const resolvedContentContainerStyle = useMemo(
    () => [styles.content, contentContainerStyle],
    [contentContainerStyle, styles.content],
  );

  return (
    <SegmentedControlProvider value={context}>
      <ScrollView
        {...props}
        accessibilityRole="radiogroup"
        accessibilityState={resolvedAccessibilityState}
        contentContainerStyle={resolvedContentContainerStyle}
        directionalLockEnabled
        horizontal
        scrollEnabled={overflow === "scroll"}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        style={rootStyle}
      >
        {children}
      </ScrollView>
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
    content: {
      alignItems: "stretch",
      flexGrow: 1,
      flexDirection: "row",
      gap: tokens.rootGap,
      minWidth: "100%",
      padding: tokens.rootPadding,
    },
  });
}
