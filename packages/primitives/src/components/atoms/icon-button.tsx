import { memo, PropsWithChildren, useMemo } from "react";
import { StyleSheet } from "react-native";

import { Icon } from "@impulse-ui-native/icon";
import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { IconButtonProps, IconButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";

export const IconButton = memo(function IconButton({
  size = "medium",
  variant = "filled",
  disabled,
  style,
  icon,
  ...props
}: PropsWithChildren<IconButtonProps>) {
  const styles = useThemedStyles(themedStyles, { size, variant, disabled }, [
    size,
    variant,
    disabled,
  ]);

  const iconButtonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  return (
    <Pressable style={iconButtonStyles} disabled={disabled} {...props}>
      <Icon size={size} icon={icon} color={styles.icon.color} />
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: IconButtonThemeProps) {
  const { size, variant, disabled } = props;

  const iconButtonTokens = theme.components.iconButton;
  const sizeTokens = iconButtonTokens.sizes[size];
  const variantTokens = iconButtonTokens.variants[variant];

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.size,
      width: sizeTokens.size,
      padding: sizeTokens.padding,

      borderWidth: iconButtonTokens.borderWidth,
      borderRadius: iconButtonTokens.borderRadius,

      borderColor: disabled
        ? variantTokens.disabledBorderColor
        : variantTokens.borderColor,

      backgroundColor: disabled
        ? variantTokens.disabledBackgroundColor
        : variantTokens.backgroundColor,
    },

    icon: {
      color: disabled ? variantTokens.disabledColor : variantTokens.color,
    },
  });
}
