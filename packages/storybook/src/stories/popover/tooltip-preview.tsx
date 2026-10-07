import { memo, useMemo } from "react";

import type { PopoverTriggerProps } from "@impulse-ui-native/popover";
import { InfoIcon } from "@impulse-ui-native/icon/icons/info";
import { Tooltip } from "@impulse-ui-native/popover";
import { Typography, View } from "@impulse-ui-native/primitives";
import { Switch } from "@impulse-ui-native/switch";
import { useTheme } from "@impulse-ui-native/theme";

export const TooltipPreview = memo(function TooltipPreview({
  disabled,
  initiallyOpen,
}: {
  disabled?: boolean;
  initiallyOpen?: boolean;
}) {
  const { colors, space, radii, borderSize } = useTheme();

  const triggerProps = useMemo<PopoverTriggerProps>(
    () => ({
      minWidth: space.md,
      minHeight: space.md,
      style: { alignItems: "center", justifyContent: "center" },
    }),
    [space.md],
  );

  return (
    <View
      width="100%"
      maxWidth={480}
      padding={space.sm}
      paddingTop={space.xxl}
      paddingBottom={space.lg}
      backgroundColor={colors.surface.primary.value}
      borderRadius={radii.lg}
    >
      <View
        flexDirection="row"
        alignItems="center"
        gap={space.sm}
        padding={space.sm}
        borderRadius={radii.md}
        borderWidth={borderSize.sm}
        borderColor={colors.border.subtle.value}
        backgroundColor={colors.surface.secondary.value}
      >
        <View flex={1} gap={space.xxs}>
          <Typography.Title6>Auto-sync</Typography.Title6>
          <Typography.BodySmall>
            Keep your data up to date across devices.
          </Typography.BodySmall>
        </View>
        <Tooltip
          content="Syncs when you’re online"
          disabled={disabled}
          defaultOpen={initiallyOpen}
          duration={initiallyOpen ? 0 : undefined}
          triggerProps={triggerProps}
        >
          <InfoIcon width={24} height={24} color={colors.text.tertiary} />
        </Tooltip>
        <Switch defaultChecked size="small" disabled={disabled} />
      </View>
    </View>
  );
});
