import type {
  AccessibilityState,
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { Pressable, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { RadioProps, RadioThemeProps } from "../types";

export const Radio = memo(function Radio({
  accessibilityState,
  checked: checkedProp,
  defaultChecked = false,
  disabled,
  hitSlop,
  onCheckedChange,
  onPress,
  size = "medium",
  style,
  variant = "filled",
  ...props
}: RadioProps) {
  const tokens = useComponentsTokens();
  const [checked, setChecked] = useControllableState<boolean>({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  });
  const styles = useThemedStyles(
    themedStyles,
    { checked, disabled, size, variant },
    [checked, disabled, size, variant],
  );

  const radioTokens = tokens.radio;
  const sizeTokens = radioTokens.sizes[size];

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      checked,
      disabled: Boolean(disabled),
    }),
    [accessibilityState, checked, disabled],
  );

  const radioStyle = useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> =>
      StyleSheet.flatten([
        styles.root,
        typeof style === "function" ? style(state) : style,
      ]),
    [style, styles.root],
  );

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      setChecked(true);
      onPress?.(event);
    },
    [onPress, setChecked],
  );

  return (
    <Pressable
      {...props}
      accessibilityRole="radio"
      accessibilityState={resolvedAccessibilityState}
      disabled={disabled}
      hitSlop={hitSlop ?? sizeTokens.hitSlop}
      onPress={handlePress}
      style={radioStyle}
    >
      {checked ? <View style={styles.indicator} /> : null}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: RadioThemeProps) {
  const { checked, disabled, size, variant } = props;

  const radioTokens = theme.components.radio;
  const sizeTokens = radioTokens.sizes[size];
  const variantTokens = radioTokens.variants[variant];

  return StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",

      width: sizeTokens.size,
      height: sizeTokens.size,

      borderWidth: radioTokens.borderWidth,
      borderRadius: radioTokens.borderRadius,
      borderColor: disabled
        ? radioTokens.disabledBorderColor
        : checked
          ? variantTokens.borderColor
          : radioTokens.uncheckedBorderColor,
      backgroundColor: disabled
        ? checked
          ? radioTokens.disabledBackgroundColor
          : radioTokens.uncheckedBackgroundColor
        : checked
          ? variantTokens.backgroundColor
          : radioTokens.uncheckedBackgroundColor,
    },

    indicator: {
      width: sizeTokens.indicatorSize,
      height: sizeTokens.indicatorSize,
      borderRadius: radioTokens.borderRadius,
      backgroundColor: disabled
        ? radioTokens.disabledColor
        : variantTokens.color,
    },
  });
}
