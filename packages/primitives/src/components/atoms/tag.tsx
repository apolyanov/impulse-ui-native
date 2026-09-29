import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { Icon } from "@impulse-ui-native/icon/components/icon";
import { XCircleIcon } from "@impulse-ui-native/icon/icons/x-circle";
import {
  AppTheme,
  getDisplayStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

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
  const tokens = useComponentsTokens();
  const tagTokens = tokens.tag;
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

  const showClose = closable && !disabled && onClose;

  return (
    <Container onPress={onPress} disabled={disabled} style={styles.container}>
      <Typography.Caption style={styles.label}>{label}</Typography.Caption>

      {showClose ? (
        <Pressable onPress={onClose} hitSlop={tagTokens.closeHitSlop}>
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
  const appearanceTokens = getDisplayStateTokens(
    tagTokens.colors[color][variant],
    { disabled },
  );

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

      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    label: {
      fontSize: sizeTokens.fontSize,
      color: appearanceTokens.color,
    },

    icon: {
      marginLeft: tagTokens.iconMarginLeft,
      color: appearanceTokens.color,
    },
  });
}
