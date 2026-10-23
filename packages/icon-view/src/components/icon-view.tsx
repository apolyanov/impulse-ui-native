import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Icon } from "@impulse-ui-native/icon";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { IconViewProps, IconViewThemeProps } from "../types";

export const IconView = memo(function IconView({
  icon,
  size = "medium",
  tone = "primary",
  variant = "filled",
  color,
  backgroundColor,
  iconProps,
  style,
  ...props
}: IconViewProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { size, tone, variant, color, backgroundColor },
    [size, tone, variant, color, backgroundColor],
  );

  const containerStyle = useMemo(
    () => [styles.container, extractedStyleProps, style],
    [styles.container, extractedStyleProps, style],
  );

  return (
    <View {...props} style={containerStyle}>
      <Icon {...iconProps} icon={icon} size={size} color={styles.icon.color} />
    </View>
  );
});

function themedStyles(theme: AppTheme, props: IconViewThemeProps) {
  const { size, tone, variant, color, backgroundColor } = props;
  const tokens = theme.components.iconView;
  const sizeTokens = tokens.sizes[size];
  const appearance = tokens.colors[tone][variant];

  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: sizeTokens.size,
      height: sizeTokens.size,
      padding: sizeTokens.padding,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
      borderColor: appearance.borderColor,
      backgroundColor: backgroundColor ?? appearance.backgroundColor,
    },
    icon: {
      color: color ?? appearance.color,
    },
  });
}
