import { AppTheme, ComponentSize, ThemeColors } from "@impulse-ui-native/theme";

import { ControlFontSize } from "../constants";

export function getInputStyles(
  theme: AppTheme,
  {
    size,
  }: {
    size: ComponentSize;
  },
) {
  const fontSize = ControlFontSize[size];
  const fontFamily = theme.fontFamily.normal[400];
  const paddingHorizontal = theme.space.xxs;
  const flex = 1;

  return { fontFamily, fontSize, paddingHorizontal, flex };
}

export function getPlaceholderTextColor(colors: ThemeColors) {
  return colors.neutral[7];
}
