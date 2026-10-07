import { memo } from "react";

import {
  useControllableState,
  useEventCallback,
  useTimer,
} from "@impulse-ui-native/core";

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

  const dismiss = useEventCallback(() => setOpen(false));

  useTimer({ enabled: open && !disabled, duration, callback: dismiss });

  return (
    <PopoverRoot
      {...props}
      open={open}
      onOpenChange={setOpen}
      disabled={disabled}
      placement={placement}
      surface="inverse"
    >
      <PopoverTrigger trigger="longPress" {...triggerProps}>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        {typeof content === "string" || typeof content === "number" ? (
          <PopoverDescription>{content}</PopoverDescription>
        ) : (
          content
        )}
      </PopoverContent>
    </PopoverRoot>
  );
});
