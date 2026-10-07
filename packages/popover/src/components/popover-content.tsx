import { memo } from "react";

import { Portal } from "@impulse-ui-native/portal";

import type { PopoverContentProps } from "../types";
import { PopoverContext } from "../contexts/popover.context";
import { usePopoverContext } from "../hooks/use-popover-context.hook";
import { PopoverSurfaceView } from "./popover-surface";

export const PopoverContent = memo(function PopoverContent(
  props: PopoverContentProps,
) {
  const context = usePopoverContext();

  return context.open ? (
    <Portal name={context.portalName}>
      <PopoverContext.Provider value={context}>
        <PopoverSurfaceView {...props} />
      </PopoverContext.Provider>
    </Portal>
  ) : null;
});
