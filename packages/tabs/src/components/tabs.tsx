import { memo, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import {
  ScrollView,
  useScrollViewInitialScroll,
} from "@impulse-ui-native/scroll-view";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { TabsProps } from "../types";
import { TabButton } from "./tab-button";

export const Tabs = memo(function Tabs({
  items,
  defaultValue,
  disabled = false,
  initialScrollToSelected = true,
  onValueChange,
  overflow = "scroll",
  panelStyle,
  size = "medium",
  style,
  value,
  ...props
}: TabsProps) {
  const initialValue = useMemo(
    () => defaultValue ?? items.find((item) => !item.disabled)?.value,
    [defaultValue, items],
  );
  const stateOptions = useMemo(
    () => ({ prop: value, defaultProp: initialValue, onChange: onValueChange }),
    [initialValue, onValueChange, value],
  );

  const [selectedValue, setSelectedValue] =
    useControllableState<string>(stateOptions);
  const initialSelectedValue = useRef(selectedValue).current;
  const initialScroll = useScrollViewInitialScroll({
    horizontal: true,
    enabled: overflow === "scroll" && initialScrollToSelected,
  });
  const styles = useThemedStyles(themedStyles);

  const selectedItem = useMemo(
    () => items.find((item) => item.value === selectedValue),
    [items, selectedValue],
  );
  const rootStyle = useMemo(() => [styles.root, style], [style, styles.root]);
  const tabButtons = useMemo(
    () =>
      items.map((item) => {
        const itemDisabled = disabled || Boolean(item.disabled);

        return (
          <TabButton
            key={item.value}
            item={item}
            disabled={itemDisabled}
            selected={item.value === selectedValue}
            size={size}
            onSelect={setSelectedValue}
            initialScrollRef={
              item.value === initialSelectedValue
                ? initialScroll.targetRef
                : undefined
            }
            onLayout={
              item.value === initialSelectedValue
                ? initialScroll.onTargetLayout
                : undefined
            }
          />
        );
      }),
    [
      disabled,
      items,
      selectedValue,
      setSelectedValue,
      size,
      initialSelectedValue,
      initialScroll.targetRef,
      initialScroll.onTargetLayout,
    ],
  );
  const activePanel = useMemo(
    () =>
      selectedItem ? (
        <View key={selectedItem.value} style={panelStyle}>
          {selectedItem.content}
        </View>
      ) : null,
    [panelStyle, selectedItem],
  );

  return (
    <View {...props} style={rootStyle}>
      <View style={styles.list}>
        <ScrollView
          ref={initialScroll.scrollViewRef}
          onLayout={initialScroll.onLayout}
          onContentSizeChange={initialScroll.onContentSizeChange}
          onScrollBeginDrag={initialScroll.onScrollBeginDrag}
          horizontal
          directionalLockEnabled
          scrollEnabled={overflow === "scroll"}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          {tabButtons}
        </ScrollView>
      </View>
      {activePanel}
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
