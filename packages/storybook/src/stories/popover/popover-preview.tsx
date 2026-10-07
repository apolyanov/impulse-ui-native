import { memo, useState } from "react";
import { StyleSheet } from "react-native";

import type { PopoverPlacement } from "@impulse-ui-native/popover";
import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { EyeIcon } from "@impulse-ui-native/icon/icons/eye";
import { FolderSimpleIcon } from "@impulse-ui-native/icon/icons/folder-simple";
import { GearIcon } from "@impulse-ui-native/icon/icons/gear";
import { UsersIcon } from "@impulse-ui-native/icon/icons/users";
import { XIcon } from "@impulse-ui-native/icon/icons/x";
import { Popover } from "@impulse-ui-native/popover";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { useTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { PopoverSettingsRow } from "./popover-settings-row";
import { PopoverVisibilityOption } from "./popover-visibility-option";
import { TooltipPreview } from "./tooltip-preview";

export const PopoverPreview = memo(function PopoverPreview({
  placement = "bottom",
  disabled = false,
  controlled = false,
  tooltip = false,
  longPress = false,
  edge = false,
  initiallyOpen = false,
}: {
  placement?: PopoverPlacement;
  disabled?: boolean;
  controlled?: boolean;
  tooltip?: boolean;
  longPress?: boolean;
  edge?: boolean;
  initiallyOpen?: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const [privateSelected, setPrivateSelected] = useState(true);
  const [committedPrivate, setCommittedPrivate] = useState(true);

  const { colors, space, radii, borderSize } = useTheme();
  const styles = useThemedStyles(themedStyles);

  const selectPrivate = useEventCallback(() => setPrivateSelected(true));

  const selectTeam = useEventCallback(() => setPrivateSelected(false));

  const handleOpenChange = useEventCallback((value: boolean) => {
    if (value) {
      setPrivateSelected(committedPrivate);
    }

    setOpen(value);
  });

  const toggle = useEventCallback(() => handleOpenChange(!open));

  const apply = useEventCallback(() => {
    setCommittedPrivate(privateSelected);

    handleOpenChange(false);
  });

  if (tooltip) {
    return <TooltipPreview disabled={disabled} initiallyOpen={initiallyOpen} />;
  }

  return (
    <View
      width="100%"
      maxWidth={480}
      gap={space.sm}
      alignSelf={edge ? "flex-end" : "flex-start"}
    >
      {controlled ? (
        <Button onPress={toggle}>Toggle controlled popover</Button>
      ) : null}
      <View
        minHeight={space.xxl * 4}
        gap={space.sm}
        padding={space.sm}
        borderRadius={radii.lg}
        backgroundColor={colors.surface.secondary.value}
      >
        <Typography.Title4>Project settings</Typography.Title4>
        <View
          borderWidth={borderSize.sm}
          borderColor={colors.border.subtle.value}
          borderRadius={radii.md}
        >
          <PopoverSettingsRow
            icon={
              <FolderSimpleIcon
                width={20}
                height={20}
                color={colors.text.tertiary}
              />
            }
            label="Project name"
            description="Marketing Website"
          />
          <PopoverSettingsRow
            icon={
              <EyeIcon width={20} height={20} color={colors.text.tertiary} />
            }
            label="Visibility"
          >
            <Popover.Root
              placement={placement}
              disabled={disabled}
              open={open}
              onOpenChange={handleOpenChange}
            >
              <Popover.Trigger
                trigger={longPress ? "longPress" : "press"}
                style={styles.trigger}
              >
                <EyeIcon
                  width={18}
                  height={18}
                  color={colors.secondary.contrast}
                />
                <Typography.Label color={colors.secondary.contrast}>
                  Visibility
                </Typography.Label>
                <CaretDownIcon
                  width={14}
                  height={14}
                  color={colors.secondary.contrast}
                />
              </Popover.Trigger>
              <Popover.Content>
                <View
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={space.xs}
                >
                  <Popover.Title>Project visibility</Popover.Title>
                  <Popover.Close style={styles.close}>
                    <XIcon
                      width={18}
                      height={18}
                      color={colors.text.tertiary}
                    />
                  </Popover.Close>
                </View>
                <Popover.Description>
                  Choose who can view this project.
                </Popover.Description>
                <View gap={space.xs} paddingVertical={space.xxs}>
                  <PopoverVisibilityOption
                    selected={privateSelected}
                    title="Private"
                    description="Only you can view this project."
                    onPress={selectPrivate}
                  />
                  <PopoverVisibilityOption
                    selected={!privateSelected}
                    title="Team"
                    description="Everyone on your team can view."
                    onPress={selectTeam}
                  />
                </View>
                <Button onPress={apply}>Apply</Button>
              </Popover.Content>
            </Popover.Root>
          </PopoverSettingsRow>
          <PopoverSettingsRow
            icon={
              <UsersIcon width={20} height={20} color={colors.text.tertiary} />
            }
            label="Members"
          />
          <PopoverSettingsRow
            icon={
              <GearIcon width={20} height={20} color={colors.text.tertiary} />
            }
            label="Advanced"
            last
          />
        </View>
        {controlled ? (
          <Typography.Caption>
            {open ? "Open" : "Closed"} · {committedPrivate ? "Private" : "Team"}
          </Typography.Caption>
        ) : null}
        {edge ? (
          <Typography.Caption>
            Prefer right; flip left at the screen edge.
          </Typography.Caption>
        ) : null}
      </View>
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const button = theme.components.button;

  return StyleSheet.create({
    close: { alignItems: "center", justifyContent: "center" },

    trigger: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.space.xs,
      minHeight: button.sizes.small.height,
      paddingHorizontal: theme.space.xs,
      borderWidth: button.borderWidth,
      borderRadius: button.borderRadius,
      borderColor: theme.colors.accent.value,
      backgroundColor: theme.colors.secondary.value,
    },
  });
}
