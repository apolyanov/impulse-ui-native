import { useContext } from "react";

import { FlyoutContext } from "../contexts/flyout.context";

export function useFlyoutContext() {
  const context = useContext(FlyoutContext);

  if (!context) {
    throw new Error(
      "Flyout.KeyboardAwareView must be rendered inside Flyout.Root",
    );
  }

  return context;
}
