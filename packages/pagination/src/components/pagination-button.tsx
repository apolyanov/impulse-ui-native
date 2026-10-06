import type { GestureResponderEvent } from "react-native";
import { memo } from "react";
import { StyleSheet } from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type { AppTheme, ComponentSize } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon/components/icon";
import { Pressable, Typography } from "@impulse-ui-native/primitives";
import {
  getPaginationStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { PaginationButtonThemeProps } from "../types";

interface PaginationButtonProps {
  current?: boolean;
  disabled?: boolean;
  Icon?: IconProps["icon"];
  label?: number;
  onSelect: (page: number) => void;
  size: ComponentSize;
  targetPage: number;
}

export const PaginationButton = memo(function PaginationButton({
  current = false,
  disabled = false,
  Icon: IconComponent,
  label,
  onSelect,
  size,
  targetPage,
}: PaginationButtonProps) {
  const tokens = useComponentsTokens().pagination;

  const styles = useThemedStyles(themedStyles, { current, disabled, size }, [
    current,
    disabled,
    size,
  ]);

  const handlePress = useEventCallback((_event: GestureResponderEvent) => {
    onSelect(targetPage);
  });

  return (
    <Pressable
      disabled={disabled}
      hitSlop={tokens.sizes[size].hitSlop}
      onPress={handlePress}
      style={styles.root}
    >
      {IconComponent ? (
        <Icon
          color={styles.content.color}
          icon={IconComponent}
          size={tokens.sizes[size].iconSize}
          variant="bold"
        />
      ) : (
        <Typography.Label numeric style={styles.content}>
          {label}
        </Typography.Label>
      )}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: PaginationButtonThemeProps) {
  const tokens = theme.components.pagination;
  const sizeTokens = tokens.sizes[props.size];
  const stateTokens = getPaginationStateTokens(tokens.states, {
    current: props.current,
    disabled: props.disabled,
  });

  return StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",

      width: sizeTokens.controlSize,
      height: sizeTokens.controlSize,

      backgroundColor: stateTokens.backgroundColor,
      borderColor: stateTokens.borderColor,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
    },
    content: {
      color: stateTokens.color,
      fontSize: sizeTokens.fontSize,
      textAlign: "center",
    },
  });
}
