import type {
  GestureResponderEvent,
  PressableStateCallbackType,
} from "react-native";
import { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable, View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type {
  ColorPickerSizeThemeProps,
  ColorPickerSwatchProps,
} from "../types";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { parseHexColor, rgbaToHex } from "../utils/color.utils";
import { ColorGradient } from "./gradient";

export const ColorPickerSwatch = memo(function ColorPickerSwatch({
  color,
  children,
  disabled: disabledProp,
  style,
  onPress,
  ...props
}: ColorPickerSwatchProps) {
  const {
    value,
    disabled: rootDisabled,
    size,
    setColor,
  } = useColorPickerContext();
  const parsed = parseHexColor(color);
  const disabled =
    rootDisabled || disabledProp === true || parsed === undefined;
  const selected = parsed !== undefined && rgbaToHex(parsed) === value;
  const styles = useThemedStyles(themedStyles, { size, disabled, selected }, [
    size,
    disabled,
    selected,
  ]);
  const colors = useMemo(() => [color, color], [color]);
  const swatchStyle = useCallback(
    (state: PressableStateCallbackType) => [
      styles.target,
      typeof style === "function" ? style(state) : style,
    ],
    [styles.target, style],
  );
  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    if (disabled) {
      return;
    }

    setColor(color);
    onPress?.(event);
  });

  return (
    <Pressable
      {...props}
      disabled={disabled}
      style={swatchStyle}
      onPress={handlePress}
    >
      <View style={styles.ring}>
        <View style={styles.color}>
          <ColorGradient colors={colors} checkerboard />
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </Pressable>
  );
});

function themedStyles(
  theme: AppTheme,
  { size, selected }: ColorPickerSizeThemeProps & { selected: boolean },
) {
  const tokens = theme.components.colorPicker;
  const sizeTokens = tokens.sizes[size];

  return StyleSheet.create({
    target: {
      minWidth: sizeTokens.swatchTargetSize,
      minHeight: sizeTokens.swatchTargetSize,
      alignItems: "center",
      justifyContent: "center",
    },
    ring: {
      padding: tokens.swatchRingPadding,
      borderRadius: tokens.swatchBorderRadius,
      borderWidth: tokens.swatchRingBorderWidth,
      borderColor: selected ? tokens.selectedBorderColor : "transparent",
    },
    color: {
      width: sizeTokens.swatchSize,
      height: sizeTokens.swatchSize,
      borderRadius: tokens.swatchBorderRadius,
      borderWidth: tokens.borderWidth,
      borderColor: tokens.borderColor,
      overflow: "hidden",
    },
    content: {
      ...StyleSheet.flatten(StyleSheet.absoluteFill),
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
