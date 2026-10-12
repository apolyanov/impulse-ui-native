import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { ColorPickerRootProps } from "../types";
import { ColorPickerContext } from "../contexts/color-picker.context";
import { useColorPicker } from "../hooks/use-color-picker.hook";

export const ColorPickerRoot = memo(function ColorPickerRoot({
  children,
  style,
  value,
  defaultValue,
  onChange,
  disabled,
  size,
  commitMode,
  ...props
}: ColorPickerRootProps) {
  const context = useColorPicker({
    value,
    defaultValue,
    onChange,
    disabled,
    size,
    commitMode,
  });
  const styles = useThemedStyles(themedStyles);
  const extractedStyleProps = useStyleProps(props);
  const rootStyle = useMemo(
    () => [styles.root, extractedStyleProps, style],
    [styles.root, extractedStyleProps, style],
  );

  return (
    <ColorPickerContext.Provider value={context}>
      <View {...props} style={rootStyle}>
        {children}
      </View>
    </ColorPickerContext.Provider>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.colorPicker;

  return StyleSheet.create({
    root: {
      gap: tokens.gap,
      padding: tokens.padding,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
      borderColor: tokens.borderColor,
      backgroundColor: tokens.backgroundColor,
    },
  });
}
