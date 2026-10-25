import { memo } from "react";
import { StyleSheet } from "react-native";

import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type { AppTheme } from "@impulse-ui-native/theme";
import { Pressable, Typography } from "@impulse-ui-native/primitives";
import { useTheme, useThemedStyles } from "@impulse-ui-native/theme";

export const PressableViewStyleExample = memo(
  function PressableViewStyleExample({
    disabled,
  }: Pick<PressableCoreProps, "disabled">) {
    const { colors, radii, space, borderSize } = useTheme();
    const styles = useThemedStyles(themedStyles);

    return (
      <Pressable
        disabled={disabled}
        width="100%"
        minHeight={48}
        padding={space.sm}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={space.xs}
        backgroundColor={colors.surface.subtle.value}
        borderColor={colors.border.default.value}
        borderWidth={borderSize.sm}
        borderRadius={radii.md}
        shadow="sm"
        pressedStyle={styles.pressed}
      >
        <Typography.Label>Press for the selected surface</Typography.Label>
      </Pressable>
    );
  },
);

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    pressed: {
      backgroundColor: theme.colors.secondary.value,
      borderColor: theme.colors.secondary.contrast,
    },
  });
}
