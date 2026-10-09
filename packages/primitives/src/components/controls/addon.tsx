import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ControlAddonProps } from "../../types";
import { useControlContext } from "../../hooks/use-control-context.hook";
import { Pressable, View } from "../atoms";

export const ControlAddon = memo(function ControlAddon({
  children,
  disabled = false,
  hitSlop,
  onPress,
  style,
  ...props
}: ControlAddonProps) {
  const { disabled: groupDisabled } = useControlContext();
  const tokens = useComponentsTokens().controlAddon;
  const styles = useThemedStyles(themedStyles);

  const resolvedDisabled = Boolean(groupDisabled) || disabled;
  const Container = onPress ? Pressable : View;
  const containerStyle = useMemo(
    () => [styles.container, style],
    [styles.container, style],
  );

  return (
    <Container
      {...props}
      disabled={resolvedDisabled}
      hitSlop={hitSlop ?? tokens.hitSlop}
      onPress={onPress}
      style={containerStyle}
    >
      {children}
    </Container>
  );
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    container: {
      marginHorizontal: theme.components.controlAddon.marginHorizontal,
    },
  });
}
