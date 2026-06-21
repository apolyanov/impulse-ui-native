import { memo, PropsWithChildren, useMemo } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { ButtonProps, ButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Typography } from "./typography";

export const Button = memo(function Button({
  size = "medium",
  variant = "filled",
  disabled,
  children,
  style,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const styles = useThemedStyles(themedStyles, { size, variant, disabled }, [
    size,
    variant,
    disabled,
  ]);

  const buttonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  const content = useMemo(() => {
    if (props.loading) {
      return <ActivityIndicator color={styles.text.color} />;
    }

    return typeof children === "string" ? (
      <Typography.Master style={styles.text}>{children}</Typography.Master>
    ) : (
      children
    );
  }, [children, props.loading, styles.text]);

  return (
    <Pressable style={buttonStyles} disabled={disabled} {...props}>
      {content}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: ButtonThemeProps) {
  const { size, variant, disabled } = props;

  const buttonTokens = theme.components.button;
  const sizeTokens = buttonTokens.sizes[size];
  const variantTokens = buttonTokens.variants[variant];

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.height,
      paddingVertical: sizeTokens.paddingVertical,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      borderWidth: buttonTokens.borderWidth,
      borderRadius: buttonTokens.borderRadius,

      borderColor: disabled
        ? variantTokens.disabledBorderColor
        : variantTokens.borderColor,

      backgroundColor: disabled
        ? variantTokens.disabledBackgroundColor
        : variantTokens.backgroundColor,
    },

    text: {
      width: "100%",
      textAlign: "center",

      fontSize: sizeTokens.fontSize,

      color: disabled ? variantTokens.disabledColor : variantTokens.color,
    },
  });
}
