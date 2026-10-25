import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import { Radio } from "@impulse-ui-native/radio";
import { useThemedStyles } from "@impulse-ui-native/theme";

export const PopoverVisibilityOption = memo(function PopoverVisibilityOption({
  selected,
  title,
  description,
  onPress,
}: {
  selected: boolean;
  title: string;
  description: string;
  onPress: () => void;
}) {
  const styles = useThemedStyles(themedStyles, { selected }, [selected]);

  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View pointerEvents="none">
        <Radio size="small" checked={selected} />
      </View>
      <View flex={1} gap={styles.copy.rowGap}>
        <Typography.Label style={styles.title}>{title}</Typography.Label>
        <Typography.Caption style={styles.description}>
          {description}
        </Typography.Caption>
      </View>
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, { selected }: { selected: boolean }) {
  const palette = theme.components.button.colors.primary.soft.default;

  return StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: theme.space.mxs,
      padding: theme.space.mxs,
      borderWidth: theme.borderSize.sm,
      borderRadius: theme.radii.md,
      borderColor: selected
        ? palette.backgroundColor
        : theme.colors.border.subtle.value,
      backgroundColor: selected
        ? palette.backgroundColor
        : theme.colors.surface.default.value,
    },

    copy: { rowGap: theme.space.xxs },

    title: {
      fontWeight: "600",
      color: selected ? palette.color : theme.colors.text.primary,
    },
    description: {
      color: selected ? palette.color : theme.colors.text.secondary,
    },
  });
}
