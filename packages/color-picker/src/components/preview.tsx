import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ColorPickerSizeThemeProps } from "../types";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { ColorMotionSurface } from "./motion-surface";

export const ColorPickerPreview = memo(function ColorPickerPreview({
  style,
  children,
  ...props
}: ViewProps) {
  const { motion, size } = useColorPickerContext();
  const styles = useThemedStyles(themedStyles, { size }, [size]);
  const previewStyle = useMemo(
    () => [styles.root, style],
    [styles.root, style],
  );

  return (
    <View {...props} style={previewStyle}>
      <ColorMotionSurface rgba={motion.rgba} />
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
