import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  useControllableState,
  useEventCallback,
  useTimer,
} from "@impulse-ui-native/core";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { TooltipProps } from "../types";
import { TooltipDuration } from "../constants/popover.constants";
import { PopoverContent } from "./popover-content";
import { PopoverDescription } from "./popover-description";
import { PopoverRoot } from "./popover-root";
import { PopoverTrigger } from "./popover-trigger";

export const Tooltip = memo(function Tooltip({
  children,
  content,
  triggerProps,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled,
  placement = "top",
  duration = TooltipDuration,
  ...props
}: TooltipProps) {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const styles = useThemedStyles(themedStyles);

  const dismiss = useEventCallback(() => setOpen(false));

  useTimer({ enabled: open && !disabled, duration, callback: dismiss });

  return (
    <PopoverRoot
      {...props}
      open={open}
      onOpenChange={setOpen}
      disabled={disabled}
      placement={placement}
    >
      <PopoverTrigger trigger="longPress" {...triggerProps}>
        {children}
      </PopoverTrigger>
      <PopoverContent shadow="sm" style={styles.content}>
        {typeof content === "string" || typeof content === "number" ? (
          <PopoverDescription style={styles.description}>
            {content}
          </PopoverDescription>
        ) : (
          content
        )}
      </PopoverContent>
    </PopoverRoot>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.popover.tooltip;

  return StyleSheet.create({
    content: {
      width: "auto",
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.backgroundColor,
      borderWidth: 0,
      borderRadius: tokens.borderRadius,
      paddingHorizontal: tokens.paddingHorizontal,
      paddingVertical: tokens.paddingVertical,
    },
    description: {
      color: tokens.color,
    },
  });
}
