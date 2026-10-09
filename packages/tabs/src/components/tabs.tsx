import { memo, useCallback, useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { TabsItem, TabsProps } from "../types";
import { TabButton } from "./tab-button";

export const Tabs = memo(function Tabs({
  items,
  defaultValue,
  disabled = false,
  onValueChange,
  overflow = "scroll",
  panelStyle,
  size = "medium",
  style,
  value,
  ...props
}: TabsProps) {
  const [selectedValue, setSelectedValue] = useControllableState<string>({
    prop: value,
    defaultProp: defaultValue ?? items.find((item) => !item.disabled)?.value,
    onChange: onValueChange,
  });
  const styles = useThemedStyles(themedStyles);

  const selectedItem = items.find((item) => item.value === selectedValue);
  const rootStyle = useMemo(() => [styles.root, style], [style, styles.root]);

  const selectValue = useCallback(
    (nextValue: string) => setSelectedValue(nextValue),
    [setSelectedValue],
  );
  const renderTab = useCallback(
    (item: TabsItem) => (
      <TabButton
        key={item.value}
        item={item}
        disabled={disabled || Boolean(item.disabled)}
        selected={item.value === selectedValue}
        size={size}
        onSelect={selectValue}
      />
    ),
    [disabled, selectedValue, selectValue, size],
  );

  return (
    <View {...props} style={rootStyle}>
      <View style={styles.list}>
        <ScrollView
          horizontal
          directionalLockEnabled
          scrollEnabled={overflow === "scroll"}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          {items.map(renderTab)}
        </ScrollView>
      </View>
      {selectedItem ? (
        <View key={selectedItem.value} style={panelStyle}>
          {selectedItem.content}
        </View>
      ) : null}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.tabs;

  return StyleSheet.create({
    root: { gap: tokens.panelGap },
    list: {
      borderBottomColor: tokens.borderColor,
      borderBottomWidth: tokens.borderWidth,
      overflow: "hidden",
    },
    scroll: { flexGrow: 0 },
    content: { alignItems: "stretch", flexDirection: "row" },
  });
}
