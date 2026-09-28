import type { AccessibilityActionEvent, PressableProps } from "react-native";
import { memo, useMemo, useState } from "react";
import { Platform, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { SliderThumbProps } from "../types/slider-internal.types";

export const SliderThumbControl = memo(function SliderThumbControl({
  accessibilityLabel,
  accessibilityState,
  accessibilityValue,
  disabled,
  onBlur,
  onDecrement,
  onFocus,
  onIncrement,
  onKeyDown,
  positionStyle,
  showValueBubble,
  size,
  valueLabel,
  variant,
}: SliderThumbProps) {
  const [focused, setFocused] = useState(false);
  const sizeTokens = useComponentsTokens().slider.sizes[size];
  const styles = useThemedStyles(
    themedStyles,
    { disabled, focused, size, variant },
    [disabled, focused, size, variant],
  );
  const accessibilityActions = useMemo(
    () => [{ name: "increment" as const }, { name: "decrement" as const }],
    [],
  );

  const handleAccessibilityAction = useEventCallback(
    (event: AccessibilityActionEvent) => {
      if (event.nativeEvent.actionName === "increment") {
        onIncrement();
      } else if (event.nativeEvent.actionName === "decrement") {
        onDecrement();
      }
    },
  );

  const handleBlur = useEventCallback<NonNullable<PressableProps["onBlur"]>>(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
  );

  const handleFocus = useEventCallback<NonNullable<PressableProps["onFocus"]>>(
    (event) => {
      const focusTarget = event.currentTarget as unknown as {
        matches?: (selector: string) => boolean;
      };

      setFocused(
        Platform.OS !== "web" ||
          focusTarget.matches?.(":focus-visible") !== false,
      );
      onFocus?.(event);
    },
  );

  const webInteractionProps = useMemo(
    () =>
      Platform.OS === "web" ? ({ onKeyDown } as PressableProps) : undefined,
    [onKeyDown],
  );

  return (
    <Pressable
      {...webInteractionProps}
      accessibilityActions={accessibilityActions}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="adjustable"
      accessibilityState={accessibilityState}
      accessibilityValue={accessibilityValue}
      disabled={disabled}
      focusable={!disabled}
      hitSlop={sizeTokens.hitSlop}
      onAccessibilityAction={handleAccessibilityAction}
      onBlur={handleBlur}
      onFocus={handleFocus}
      pressedStyle={styles.pressed}
      style={[styles.focusRing, positionStyle]}
    >
      {showValueBubble ? (
        <View pointerEvents="none" style={styles.valueBubble}>
          <Typography.Caption style={styles.valueBubbleText}>
            {valueLabel}
          </Typography.Caption>
        </View>
      ) : null}

      <View pointerEvents="none" shadow="sm" style={styles.thumb}>
        {variant === "outlined" ? null : <View style={styles.thumbHighlight} />}
      </View>
    </Pressable>
  );
});

interface SliderThumbThemeProps {
  disabled: boolean;
  focused: boolean;
  size: SliderThumbProps["size"];
  variant: SliderThumbProps["variant"];
}

function themedStyles(theme: AppTheme, props: SliderThumbThemeProps) {
  const { disabled, focused, size, variant } = props;
  const tokens = theme.components.slider;
  const sizeTokens = tokens.sizes[size];
  const variantTokens = tokens.variants[variant];
  const thumbOuterSize =
    sizeTokens.thumbSize + (tokens.focusRingWidth + tokens.focusRingOffset) * 2;

  return StyleSheet.create({
    focusRing: {
      position: "absolute",
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
      width: thumbOuterSize,
      height: thumbOuterSize,
      marginStart: -thumbOuterSize / 2,
      borderWidth: focused ? tokens.focusRingWidth : 0,
      borderRadius: tokens.thumbBorderRadius,
      borderColor: tokens.focusRingColor,
    },
    pressed: {
      opacity: 1,
    },
    thumb: {
      alignItems: "center",
      justifyContent: "center",
      width: sizeTokens.thumbSize,
      height: sizeTokens.thumbSize,
      borderWidth:
        variant === "outlined"
          ? tokens.outlinedThumbBorderWidth
          : tokens.thumbBorderWidth,
      borderRadius: tokens.thumbBorderRadius,
      borderColor: disabled
        ? tokens.disabledThumbColor
        : variantTokens.thumbBorderColor,
      backgroundColor: disabled
        ? tokens.disabledThumbColor
        : variantTokens.thumbBackgroundColor,
    },
    thumbHighlight: {
      width: 4,
      height: 4,
      borderRadius: tokens.thumbBorderRadius,
      backgroundColor: disabled
        ? "transparent"
        : variantTokens.thumbHighlightColor,
    },
    valueBubble: {
      position: "absolute",
      bottom: thumbOuterSize + tokens.valueBubbleGap,
      minWidth: 40,
      alignItems: "center",
      paddingHorizontal: tokens.valueBubblePaddingHorizontal,
      paddingVertical: tokens.valueBubblePaddingVertical,
      borderWidth: tokens.valueBubbleBorderWidth,
      borderRadius: tokens.valueBubbleBorderRadius,
      borderColor: disabled
        ? tokens.disabledThumbColor
        : variantTokens.valueBubbleBorderColor,
      backgroundColor: disabled
        ? tokens.disabledThumbColor
        : variantTokens.valueBubbleBackgroundColor,
    },
    valueBubbleText: {
      color: disabled
        ? tokens.disabledTextColor
        : variantTokens.valueBubbleColor,
    },
  });
}
