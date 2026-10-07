import { useContext } from "react";

import { PopoverContext } from "../contexts/popover.context";

export function usePopoverContext() {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("Popover children must be rendered inside Popover.Root");
  }

  return context;
}
