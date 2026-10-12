import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ColorPickerSizeThemeProps } from "../types";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { ColorGradient } from "./gradient";

export const ColorPickerPreview = memo(function ColorPickerPreview({
  style,
  children,
  ...props
}: ViewProps) {
  const { value, size } = useColorPickerContext();
  const styles = useThemedStyles(themedStyles, { size }, [size]);
  const colors = useMemo(() => [value, value], [value]);
  const previewStyle = useMemo(
    () => [styles.root, style],
    [styles.root, style],
  );

  return (
    <View {...props} style={previewStyle}>
      <ColorGradient colors={colors} checkerboard />
      <View style={styles.content}>{children}</View>
    </View>
  );
});

function themedStyles(theme: AppTheme, { size }: ColorPickerSizeThemeProps) {
  const tokens = theme.components.colorPicker;

  return StyleSheet.create({
    content: {
      ...StyleSheet.flatten(StyleSheet.absoluteFill),
    },
    root: {
      width: tokens.sizes[size].previewSize,
      height: tokens.sizes[size].previewSize,
      overflow: "hidden",
      borderRadius: tokens.previewBorderRadius,
      borderWidth: tokens.borderWidth,
      borderColor: tokens.borderColor,
    },
  });
}
