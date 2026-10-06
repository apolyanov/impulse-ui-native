import type {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon/components/icon";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import {
  getSegmentedControlItemTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type {
  SegmentedControlItemProps,
  SegmentedControlItemThemeProps,
} from "../types";
import { useSegmentedControlContext } from "../contexts";

export const SegmentedControlItem = memo(function SegmentedControlItem({
  children,
  disabled = false,
  hitSlop,
  Icon: IconComponent,
  onPress,
  style,
  value,
  ...props
}: SegmentedControlItemProps) {
  const {
    disabled: groupDisabled,
    selectValue,
    selectedValue,
    size,
    variant,
  } = useSegmentedControlContext();

  const tokens = useComponentsTokens().segmentedControl;
  const resolvedDisabled = groupDisabled || Boolean(disabled);
  const selected = selectedValue === value;
  const layout =
    IconComponent && children !== undefined && children !== null
      ? "stacked"
      : "inline";
  const sizeTokens = tokens.sizes[size];

  const styles = useThemedStyles(
    themedStyles,
    {
      disabled: resolvedDisabled,
      layout,
      selected,
      size,
      variant,
    },
    [layout, resolvedDisabled, size, selected, variant],
  );

  const itemStyle = useCallback(
    ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
      styles.item,
      typeof style === "function" ? style({ pressed }) : style,
    ],
    [style, styles.item],
  );

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    selectValue(value);
    onPress?.(event);
  });

  return (
    <Pressable
      {...props}
      disabled={resolvedDisabled}
      hitSlop={hitSlop ?? sizeTokens.hitSlop}
      onPress={handlePress}
      style={itemStyle}
    >
      <View pointerEvents="none" style={styles.content}>
        {IconComponent ? (
          <Icon
            color={styles.label.color}
            icon={IconComponent}
            size={sizeTokens.iconSize}
          />
        ) : null}

        {typeof children === "string" || typeof children === "number" ? (
          <Typography.Label numberOfLines={1} style={styles.label}>
            {children}
          </Typography.Label>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: SegmentedControlItemThemeProps) {
  const tokens = theme.components.segmentedControl;
  const itemTokens = getSegmentedControlItemTokens(tokens, props);

  return StyleSheet.create({
    item: {
      alignItems: "center",
      flexBasis: 0,
      flexGrow: 1,
      justifyContent: "center",
      minWidth: itemTokens.minItemWidth,
      paddingHorizontal: itemTokens.paddingHorizontal,
      paddingVertical: itemTokens.paddingVertical,

      backgroundColor: itemTokens.backgroundColor,
      borderColor: itemTokens.borderColor,
      borderRadius: itemTokens.borderRadius,
      borderWidth: itemTokens.borderWidth,
    },
    content: {
      alignItems: "center",
      flexDirection: itemTokens.flexDirection,
      gap: itemTokens.gap,
      justifyContent: "center",
    },
    label: {
      color: itemTokens.color,
      fontSize: itemTokens.fontSize,
      textAlign: "center",
    },
  });
}
