import type { View } from "react-native";
import { memo, useMemo, useRef } from "react";

import { useControllableState } from "@impulse-ui-native/core";

import type { PopoverRootProps } from "../types";
import { PopoverContext } from "../contexts/popover.context";

export const PopoverRoot = memo(function PopoverRoot({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  placement = "bottom",
  portalName,
}: PopoverRootProps) {
  const anchorRef = useRef<View>(null);

  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const context = useMemo(
    () => ({
      open: open && !disabled,
      disabled,
      setOpen,
      anchorRef,
      placement,
      portalName,
    }),
    [open, disabled, setOpen, placement, portalName],
  );

  return (
    <PopoverContext.Provider value={context}>
      {children}
    </PopoverContext.Provider>
  );
});
