import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Icon } from "@impulse-ui-native/icon";
import { XCircleIcon } from "@impulse-ui-native/icon/icons/x-circle";
import {
  getAvailabilityStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { TagProps, TagThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Typography } from "./typography";

export const Tag = memo(function Tag({
  label,
  style,
  size = "medium",
  variant = "filled",
  tone = "primary",
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
      tone,
    },
    [size, variant, disabled, tone],
  );

  const containerStyle = useMemo(
    () => [styles.container, style],
    [styles.container, style],
  );
  const Container = onPress ? Pressable : View;

  const showClose = closable && !disabled && onClose;

  return (
    <Container onPress={onPress} disabled={disabled} style={containerStyle}>
      <Typography.Caption
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.label}
      >
        {label}
      </Typography.Caption>

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
  const { size, variant, tone, disabled } = props;

  const tagTokens = theme.components.tag;
  const sizeTokens = tagTokens.sizes[size];
  const appearanceTokens = getAvailabilityStateTokens(
    tagTokens.colors[tone][variant],
    { disabled },
  );

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",
      flexShrink: 1,
      maxWidth: "100%",

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
      flexShrink: 1,
      minWidth: 0,
      fontSize: sizeTokens.fontSize,
      color: appearanceTokens.color,
    },

    icon: {
      marginLeft: tagTokens.iconMarginLeft,
      color: appearanceTokens.color,
    },
  });
}
