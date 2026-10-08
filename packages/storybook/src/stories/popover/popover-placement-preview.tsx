import { memo } from "react";
import { StyleSheet } from "react-native";

import type { PopoverPlacement } from "@impulse-ui-native/popover";
import type { AppTheme } from "@impulse-ui-native/theme";
import { Popover } from "@impulse-ui-native/popover";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useTheme, useThemedStyles } from "@impulse-ui-native/theme";

export const PopoverPlacementPreview = memo(function PopoverPlacementPreview({
  placement = "bottom",
  edge = false,
  initiallyOpen = false,
}: {
  placement?: PopoverPlacement;
  edge?: boolean;
  initiallyOpen?: boolean;
}) {
  const { space } = useTheme();
  const styles = useThemedStyles(themedStyles);

  return (
    <View
      width="100%"
      minHeight={320}
      justifyContent="center"
      alignItems={edge ? "flex-end" : "center"}
    >
      <Popover.Root placement={placement} defaultOpen={initiallyOpen}>
        <Popover.Trigger style={styles.trigger}>
          <Typography.Label>Open</Typography.Label>
        </Popover.Trigger>
        <Popover.Content
          width={96}
          paddingHorizontal={space.xs}
          paddingVertical={space.xs}
          gap={space.xxs}
        >
          <Popover.Title>Saved</Popover.Title>
          <Popover.Description>All set.</Popover.Description>
          <Popover.Close>
            <Typography.Label>Done</Typography.Label>
          </Popover.Close>
        </Popover.Content>
      </Popover.Root>
    </View>
  );
});

function themedStyles({ colors, space, radii, borderSize }: AppTheme) {
  return StyleSheet.create({
    trigger: {
      minHeight: 40,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: space.xs,
      paddingVertical: space.xs,
      borderRadius: radii.md,
      borderWidth: borderSize.sm,
      borderColor: colors.border.default.value,
      backgroundColor: colors.surface.secondary.value,
    },
  });
}
