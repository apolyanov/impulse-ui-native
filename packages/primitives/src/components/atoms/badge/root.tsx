import { memo, useMemo } from "react";
import { StyleSheet, Text } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  useComponentsTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { BadgeProps, BadgeThemeProps } from "../../../types";
import { View } from "../view";
import { BadgeAddon } from "./addon";

export const BadgeRoot = memo(function BadgeRoot({
  accessible,
  accessibilityLabel,
  backgroundColor,
  children,
  color,
  Prefix,
  PrefixIcon,
  onPressPrefix,
  onPressSuffix,
  role,
  size = "medium",
  style,
  Suffix,
  SuffixIcon,
  tone = "primary",
  variant = "filled",
  ...props
}: BadgeProps) {
  const tokens = useComponentsTokens();
  const badgeTokens = tokens.badge;
  const sizeTokens = badgeTokens.sizes[size];
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { backgroundColor, color, size, tone, variant },
    [backgroundColor, color, size, tone, variant],
  );

  const containerStyle = useMemo(
    () => [styles.container, extractedStyleProps, style],
    [extractedStyleProps, style, styles.container],
  );
  const affixColor =
    typeof styles.label.color === "string" ? styles.label.color : undefined;

  return (
    <View
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessible={accessible ?? Boolean(accessibilityLabel)}
      role={role}
      style={containerStyle}
    >
      <BadgeAddon
        Content={Prefix}
        IconComponent={PrefixIcon}
        color={affixColor}
        hitSlop={badgeTokens.addonHitSlop}
        iconSize={sizeTokens.iconSize}
        onPress={onPressPrefix}
      />

      {typeof children === "string" || typeof children === "number" ? (
        <Text numberOfLines={1} style={styles.label}>
          {children}
        </Text>
      ) : (
        children
      )}

      <BadgeAddon
        Content={Suffix}
        IconComponent={SuffixIcon}
        color={affixColor}
        hitSlop={badgeTokens.addonHitSlop}
        iconSize={sizeTokens.iconSize}
        onPress={onPressSuffix}
      />
    </View>
  );
});

function themedStyles(theme: AppTheme, props: BadgeThemeProps) {
  const { backgroundColor, color, size, tone, variant } = props;

  const badgeTokens = theme.components.badge;
  const sizeTokens = badgeTokens.sizes[size];
  const variantTokens = badgeTokens.colors[tone][variant];

  return StyleSheet.create({
    container: {
      alignItems: "center",
      alignSelf: "flex-start",
      flexDirection: "row",
      flexShrink: 0,
      justifyContent: "center",

      borderRadius: badgeTokens.borderRadius,
      borderWidth: badgeTokens.borderWidth,
      gap: badgeTokens.gap,
      height: sizeTokens.height,
      minWidth: sizeTokens.minWidth,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      backgroundColor: backgroundColor ?? variantTokens.backgroundColor,
      borderColor: variantTokens.borderColor,
    },

    label: {
      textAlign: "center",

      fontFamily: badgeTokens.fontFamily,
      fontSize: sizeTokens.fontSize,
      lineHeight: sizeTokens.lineHeight,

      color: color ?? variantTokens.color,
    },
  });
}
