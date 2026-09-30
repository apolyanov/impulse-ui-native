import type { ComponentRef } from "react";
import type {
  AccessibilityState,
  GestureResponderEvent,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { I18nManager, Platform, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon/components/icon";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import {
  getSelectionStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type {
  SegmentedControlItemProps,
  SegmentedControlItemThemeProps,
  SegmentedControlKeyDownEvent,
} from "../types";
import { useSegmentedControlContext } from "../contexts";
import { getSegmentedControlFocusDirection } from "../utils";

export const SegmentedControlItem = memo(function SegmentedControlItem({
  accessibilityState,
  children,
  disabled = false,
  hitSlop,
  Icon: IconComponent,
  onBlur,
  onFocus,
  onKeyDown,
  onPress,
  style,
  value,
  ...props
}: SegmentedControlItemProps) {
  const {
    disabled: groupDisabled,
    focusItem,
    registerItem,
    selectValue,
    selectedValue,
    size,
    variant,
  } = useSegmentedControlContext();
  const [focused, setFocused] = useState(false);
  const itemRef = useRef<ComponentRef<typeof Pressable>>(null);
  const tokens = useComponentsTokens().segmentedControl;
  const resolvedDisabled = groupDisabled || Boolean(disabled);
  const selected = selectedValue === value;
  const stacked = Boolean(
    IconComponent && children !== undefined && children !== null,
  );
  const sizeTokens = tokens.sizes[size];
  const styles = useThemedStyles(
    themedStyles,
    {
      disabled: resolvedDisabled,
      focused,
      selected,
      size,
      stacked,
      variant,
    },
    [focused, resolvedDisabled, size, selected, stacked, variant],
  );

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      checked: selected,
      disabled: resolvedDisabled,
      selected,
    }),
    [accessibilityState, resolvedDisabled, selected],
  );
  const itemStyle = useCallback(
    ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
      styles.item,
      typeof style === "function" ? style({ pressed }) : style,
    ],
    [style, styles.item],
  );

  const handleBlur = useEventCallback<NonNullable<PressableProps["onBlur"]>>(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
  );

  const handleFocus = useEventCallback<NonNullable<PressableProps["onFocus"]>>(
    (event) => {
      setFocused(true);
      onFocus?.(event);
    },
  );

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    selectValue(value);
    onPress?.(event);
  });

  const handleKeyDown = useEventCallback(
    (event: SegmentedControlKeyDownEvent) => {
      onKeyDown?.(event);

      if (event.isDefaultPrevented()) return;

      const direction = getSegmentedControlFocusDirection(
        event.nativeEvent.key,
        I18nManager.isRTL,
      );

      if (!direction) return;

      event.preventDefault();
      focusItem(value, direction);
    },
  );

  const webInteractionProps = useMemo(
    () =>
      Platform.OS === "web"
        ? ({
            onKeyDown: handleKeyDown,
            tabIndex: selected ? 0 : -1,
          } as PressableProps)
        : undefined,
    [handleKeyDown, selected],
  );

  useEffect(
    () =>
      registerItem({
        disabled: resolvedDisabled,
        ref: itemRef,
        value,
      }),
    [registerItem, resolvedDisabled, value],
  );

  return (
    <Pressable
      {...props}
      {...webInteractionProps}
      ref={itemRef}
      accessibilityRole="radio"
      accessibilityState={resolvedAccessibilityState}
      disabled={resolvedDisabled}
      focusable={!resolvedDisabled}
      hitSlop={hitSlop ?? sizeTokens.hitSlop}
      onBlur={handleBlur}
      onFocus={handleFocus}
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
  const { disabled, focused, selected, size, stacked, variant } = props;
  const tokens = theme.components.segmentedControl;
  const sizeTokens = tokens.sizes[size];
  const variantTokens = tokens.variants[variant];
  const appearanceTokens = getSelectionStateTokens(variantTokens.states, {
    disabled,
    selected,
  });

  return StyleSheet.create({
    item: {
      alignItems: "center",
      flexBasis: 0,
      flexGrow: 1,
      justifyContent: "center",
      minWidth: sizeTokens.minItemWidth,
      paddingHorizontal: sizeTokens.paddingHorizontal,
      paddingVertical: stacked ? sizeTokens.stackedPaddingVertical : 0,

      backgroundColor: focused
        ? tokens.focusBackgroundColor
        : appearanceTokens.backgroundColor,
      borderColor: focused
        ? theme.colors.border.focus.value
        : appearanceTokens.borderColor,
      borderRadius: tokens.itemBorderRadius,
      borderWidth: focused ? tokens.focusBorderWidth : tokens.itemBorderWidth,
    },
    content: {
      alignItems: "center",
      flexDirection: stacked ? "column" : "row",
      gap: sizeTokens.gap,
      justifyContent: "center",
    },
    label: {
      color: focused ? tokens.focusColor : appearanceTokens.color,
      fontFamily: theme.fontFamily.normal[theme.fontWeight.medium],
      fontSize: sizeTokens.fontSize,
      textAlign: "center",
    },
  });
}
