import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import {
  getTabsItemTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type {
  TabButtonProps,
  TabButtonThemeProps,
} from "../types/tab-button.types";

export const TabButton = memo(function TabButton({
  item,
  disabled,
  selected,
  size,
  onSelect,
}: TabButtonProps) {
  const tokens = useComponentsTokens().tabs;
  const styles = useThemedStyles(themedStyles, { disabled, selected, size }, [
    disabled,
    selected,
    size,
  ]);

  const handlePress = useEventCallback(() => {
    if (disabled) {
      return;
    }

    onSelect(item.value);
  });

  return (
    <Pressable
      disabled={disabled}
      hitSlop={tokens.sizes[size].hitSlop}
      onPress={handlePress}
      style={styles.button}
    >
      <View pointerEvents="none">
        {typeof item.label === "string" || typeof item.label === "number" ? (
          <Typography.Label style={styles.label}>{item.label}</Typography.Label>
        ) : (
          item.label
        )}
      </View>
      <View pointerEvents="none" style={styles.indicator} />
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: TabButtonThemeProps) {
  const itemTokens = getTabsItemTokens(theme.components.tabs, props);

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      minHeight: itemTokens.minHeight,
      paddingHorizontal: itemTokens.paddingHorizontal,
      paddingVertical: itemTokens.paddingVertical,
      paddingBottom: itemTokens.paddingVertical + itemTokens.indicatorHeight,
    },
    label: {
      color: itemTokens.color,
      fontSize: itemTokens.fontSize,
    },
    indicator: {
      position: "absolute",
      bottom: 0,
      start: 0,
      end: 0,
      height: itemTokens.indicatorHeight,
      backgroundColor: itemTokens.indicatorColor,
      opacity: itemTokens.indicatorOpacity,
    },
  });
}
