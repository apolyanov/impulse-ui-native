import type {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import { MinusIcon } from "@impulse-ui-native/icon/icons/minus";
import { Pressable } from "@impulse-ui-native/primitives";
import {
  getSelectionStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type {
  CheckboxProps,
  CheckboxState,
  CheckboxThemeProps,
} from "../types";

export const Checkbox = memo(function Checkbox({
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
}: CheckboxProps) {
  const tokens = useComponentsTokens();

  const [checked, setChecked] = useControllableState<CheckboxState>({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  });
  const styles = useThemedStyles(
    themedStyles,
    { checked, disabled, size, variant },
    [checked, disabled, size, variant],
  );

  const checkboxTokens = tokens.checkbox;
  const sizeTokens = checkboxTokens.sizes[size];
  const StateIcon =
    checked === "indeterminate" ? MinusIcon : checked ? CheckIcon : undefined;

  const checkboxStyle = useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> =>
      StyleSheet.flatten([
        styles.root,
        typeof style === "function" ? style(state) : style,
      ]),
    [style, styles.root],
  );

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      setChecked((current) => (current === "indeterminate" ? true : !current));
      onPress?.(event);
    },
    [onPress, setChecked],
  );

  return (
    <Pressable
      {...props}
      disabled={disabled}
      hitSlop={hitSlop ?? sizeTokens.hitSlop}
      onPress={handlePress}
      style={checkboxStyle}
    >
      {StateIcon ? (
        <Icon
          icon={StateIcon}
          size={sizeTokens.iconSize}
          color={styles.icon.color}
          variant="bold"
        />
      ) : null}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: CheckboxThemeProps) {
  const { checked, disabled, size, variant } = props;

  const checkboxTokens = theme.components.checkbox;
  const sizeTokens = checkboxTokens.sizes[size];
  const selected = checked !== false;
  const appearanceTokens = getSelectionStateTokens(
    checkboxTokens.variants[variant],
    { disabled, selected },
  );

  return StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",

      width: sizeTokens.size,
      height: sizeTokens.size,

      borderWidth: checkboxTokens.borderWidth,
      borderRadius: checkboxTokens.borderRadius,
      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    icon: {
      color: appearanceTokens.color,
    },
  });
}
