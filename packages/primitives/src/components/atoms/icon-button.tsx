import { memo, PropsWithChildren, useMemo } from "react";
import { StyleSheet } from "react-native";

import { Icon } from "@impulse-ui-native/icon";
import {
  AppTheme,
  getActionStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { IconButtonProps, IconButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Spinner } from "./spinner";

export const IconButton = memo(function IconButton({
  size = "medium",
  variant = "filled",
  disabled,
  loading = false,
  style,
  icon,
  ...props
}: PropsWithChildren<IconButtonProps>) {
  const styles = useThemedStyles(
    themedStyles,
    { size, variant, disabled, loading },
    [size, variant, disabled, loading],
  );

  const interactionDisabled = disabled === true || loading;

  const iconButtonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  return (
    <Pressable
      {...props}
      disabled={interactionDisabled}
      style={iconButtonStyles}
    >
      {loading ? (
        <Spinner color={styles.icon.color} size={size} />
      ) : (
        <Icon size={size} icon={icon} color={styles.icon.color} />
      )}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: IconButtonThemeProps) {
  const { size, variant, disabled, loading } = props;

  const iconButtonTokens = theme.components.iconButton;
  const sizeTokens = iconButtonTokens.sizes[size];
  const appearanceTokens = getActionStateTokens(
    iconButtonTokens.variants[variant],
    { disabled, loading },
  );

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.size,
      width: sizeTokens.size,
      padding: sizeTokens.padding,

      borderWidth: iconButtonTokens.borderWidth,
      borderRadius: iconButtonTokens.borderRadius,

      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    icon: {
      color: appearanceTokens.color,
    },
  });
}
