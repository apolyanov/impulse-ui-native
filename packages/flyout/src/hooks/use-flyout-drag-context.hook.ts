import { useContext } from "react";

import { FlyoutDragContext } from "../contexts/flyout-drag.context";

export function useFlyoutDragContext() {
  const context = useContext(FlyoutDragContext);

  if (!context) {
    throw new Error("Flyout.Handle must be rendered inside Flyout.Root");
  }

  return context;
}
