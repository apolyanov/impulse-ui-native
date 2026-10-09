import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import { XIcon } from "@impulse-ui-native/icon/icons/x";
import { useColors } from "@impulse-ui-native/theme";

import type { PopoverProps } from "../types";
import { PopoverClose } from "./popover-close";
import { PopoverContent } from "./popover-content";
import { PopoverFooter } from "./popover-footer";
import { PopoverHeader } from "./popover-header";
import { PopoverRoot } from "./popover-root";
import { PopoverTitle } from "./popover-title";
import { PopoverTrigger } from "./popover-trigger";

export const PopoverComponent = memo(function Popover({
  trigger,
  triggerProps,
  contentProps,
  header,
  title,
  footer,
  hideClose = false,
  children,
  ...props
}: PopoverProps) {
  const colors = useColors();

  return (
    <PopoverRoot {...props}>
      <PopoverTrigger {...triggerProps}>{trigger}</PopoverTrigger>
      <PopoverContent {...contentProps}>
        {header || title || !hideClose ? (
          <PopoverHeader>
            {header}
            {!header && title ? <PopoverTitle>{title}</PopoverTitle> : null}
            {!hideClose ? (
              <PopoverClose marginLeft="auto">
                <Icon icon={XIcon} size="small" color={colors.text.tertiary} />
              </PopoverClose>
            ) : null}
          </PopoverHeader>
        ) : null}
        {children}
        {footer ? <PopoverFooter>{footer}</PopoverFooter> : null}
      </PopoverContent>
    </PopoverRoot>
  );
});
