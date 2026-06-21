import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { Icon, XCircleIcon } from "@impulse-ui-native/icon";
import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { TagProps, TagThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Typography } from "./typography";

export const Tag = memo(function Tag({
  label,
  size = "medium",
  variant = "filled",
  color = "primary",
  closable,
  disabled,
  onClose,
  onPress,
}: TagProps) {
  const styles = useThemedStyles(
    themedStyles,
    {
      size,
      variant,
      disabled,
      color,
    },
    [size, variant, disabled, color],
  );

  const Container = useMemo(() => {
    if (onPress) {
      return Pressable;
    }

    return View;
  }, [onPress]);

  const showClose =
    (closable || size === "medium" || size === "large") && !disabled && onClose;

  return (
    <Container onPress={onPress} disabled={disabled} style={styles.container}>
      <Typography.Caption style={styles.label}>{label}</Typography.Caption>

      {showClose ? (
        <Pressable onPress={onClose} hitSlop={10}>
          <Icon
            icon={XCircleIcon}
            size="small"
            color={styles.icon.color}
            style={styles.icon}
          />
        </Pressable>
      ) : null}
    </Container>
  );
});

function themedStyles(theme: AppTheme, props: TagThemeProps) {
  const { size, variant, color, disabled } = props;

  const tagTokens = theme.components.tag;
  const sizeTokens = tagTokens.sizes[size];
  const variantTokens = tagTokens.colors[color][variant];

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",

      height: sizeTokens.height,
      paddingHorizontal: sizeTokens.paddingHorizontal,
      minWidth: sizeTokens.minWidth,

      borderRadius: tagTokens.borderRadius,
      gap: tagTokens.gap,
      borderWidth: tagTokens.borderWidth,

      borderColor: disabled
        ? variantTokens.disabledBorderColor
        : variantTokens.borderColor,

      backgroundColor: disabled
        ? variantTokens.disabledBackgroundColor
        : variantTokens.backgroundColor,
    },

    label: {
      fontSize: sizeTokens.fontSize,
      color: disabled ? variantTokens.disabledColor : variantTokens.color,
    },

    icon: {
      marginLeft: tagTokens.iconMarginLeft,
      color: disabled ? variantTokens.disabledColor : variantTokens.color,
    },
  });
}
