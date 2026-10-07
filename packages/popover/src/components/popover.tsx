import { memo } from "react";

import type { PopoverProps } from "../types";
import { PopoverContent } from "./popover-content";
import { PopoverRoot } from "./popover-root";
import { PopoverTrigger } from "./popover-trigger";

export const PopoverComponent = memo(function Popover({
  trigger,
  triggerProps,
  contentProps,
  children,
  ...props
}: PopoverProps) {
  return (
    <PopoverRoot {...props}>
      <PopoverTrigger {...triggerProps}>{trigger}</PopoverTrigger>
      <PopoverContent {...contentProps}>{children}</PopoverContent>
    </PopoverRoot>
  );
});
