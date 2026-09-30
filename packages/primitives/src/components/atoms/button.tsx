import { memo, PropsWithChildren, useMemo } from "react";
import { StyleSheet } from "react-native";

import {
  AppTheme,
  getActionStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ButtonProps, ButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Spinner } from "./spinner";
import { Typography } from "./typography";

export const Button = memo(function Button({
  size = "medium",
  variant = "filled",
  disabled,
  loading = false,
  children,
  style,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const styles = useThemedStyles(
    themedStyles,
    { size, variant, disabled, loading },
    [size, variant, disabled, loading],
  );

  const interactionDisabled = disabled === true || loading;

  const buttonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  const content = useMemo(() => {
    if (loading) {
      return <Spinner color={styles.text.color} size={size} />;
    }

    return typeof children === "string" ? (
      <Typography.Master style={styles.text}>{children}</Typography.Master>
    ) : (
      children
    );
  }, [children, loading, size, styles.text]);

  return (
    <Pressable {...props} disabled={interactionDisabled} style={buttonStyles}>
      {content}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: ButtonThemeProps) {
  const { size, variant, disabled, loading } = props;

  const buttonTokens = theme.components.button;
  const sizeTokens = buttonTokens.sizes[size];
  const appearanceTokens = getActionStateTokens(
    buttonTokens.variants[variant],
    {
      disabled,
      loading,
    },
  );

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.height,
      paddingVertical: sizeTokens.paddingVertical,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      borderWidth: buttonTokens.borderWidth,
      borderRadius: buttonTokens.borderRadius,

      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    text: {
      width: "100%",
      textAlign: "center",

      fontSize: sizeTokens.fontSize,

      color: appearanceTokens.color,
    },
  });
}
