import { memo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import {
  useOverlayLifecycle,
  useOverlaySpring,
} from "@impulse-ui-native/overlay";
import { Portal } from "@impulse-ui-native/portal";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverContentProps } from "../types";
import { PopoverContext } from "../contexts/popover.context";
import { usePopoverContext } from "../hooks/use-popover-context.hook";
import { PopoverSurfaceView } from "./popover-surface";

export const PopoverContent = memo(function PopoverContent(
  props: PopoverContentProps,
) {
  const context = usePopoverContext();
  const [ready, setReady] = useState(false);
  const tokens = useComponentsTokens().popover;
  const { options, progress } = useOverlaySpring(tokens);
  const handleReady = useEventCallback(() => setReady(true));
  const handleClosed = useEventCallback(() => setReady(false));
  const lifecycle = useOverlayLifecycle(
    { id: "popover", open: context.open, onCloseFinished: handleClosed },
    { ...options, ready },
  );

  return lifecycle.mounted ? (
    <Portal name={context.portalName}>
      <PopoverContext.Provider value={context}>
        <PopoverSurfaceView
          {...props}
          progress={progress}
          interactive={lifecycle.interactive}
          onReady={handleReady}
        />
      </PopoverContext.Provider>
    </Portal>
  ) : null;
});
