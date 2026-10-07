import type { PropsWithChildren, ReactNode } from "react";
import { memo } from "react";

import { Typography, View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

export const PopoverSettingsRow = memo(function PopoverSettingsRow({
  icon,
  label,
  description,
  children,
  last = false,
}: PropsWithChildren<{
  icon: ReactNode;
  label: string;
  description?: string;
  last?: boolean;
}>) {
  const { colors, space, borderSize } = useTheme();

  return (
    <View
      flexDirection="row"
      alignItems="center"
      gap={space.sm}
      paddingHorizontal={space.sm}
      paddingVertical={space.mxs}
      borderBottomWidth={last ? 0 : borderSize.sm}
      borderColor={colors.border.subtle.value}
    >
      {icon}
      <View flex={1} gap={space.xxs}>
        <Typography.Label>{label}</Typography.Label>
        {description ? (
          <Typography.Caption>{description}</Typography.Caption>
        ) : null}
      </View>
      {children}
    </View>
  );
});
