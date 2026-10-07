import type { LayoutChangeEvent, View } from "react-native";
import { useMemo, useRef, useState } from "react";

import { useBackHandler, useEventCallback } from "@impulse-ui-native/core";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverContentProps } from "../types";
import type { PopoverSurfaceStyleProps } from "../types/popover.types";
import { getPopoverPosition } from "../utils/popover-position.utils";
import { usePopoverContext } from "./use-popover-context.hook";
import { usePopoverPosition } from "./use-popover-position.hook";

export function usePopoverSurface(onLayout: PopoverContentProps["onLayout"]) {
  const { surface, placement, setOpen } = usePopoverContext();

  const [size, setSize] = useState({ width: 0, height: 0 });
  const hostRef = useRef<View>(null);

  const tokens = useComponentsTokens().popover;
  const { measurement, bounds, visible } = usePopoverPosition(hostRef);

  const position = useMemo(
    () =>
      measurement
        ? getPopoverPosition({
            anchor: measurement.anchor,
            bounds,
            ...size,
            placement,
            gap: tokens.gap,
            arrowInset:
              tokens.surfaces[surface].borderRadius + tokens.arrowSize,
          })
        : null,
    [measurement, bounds, size, placement, surface, tokens],
  );

  const ready = visible && size.width > 0 && size.height > 0;
  const styleProps = useMemo<PopoverSurfaceStyleProps>(
    () => ({ surface, bounds, host: measurement?.host, position, ready }),
    [surface, bounds, measurement?.host, position, ready],
  );

  const close = useEventCallback(() => setOpen(false));

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    setSize((previous) =>
      previous.width === width && previous.height === height
        ? previous
        : { width, height },
    );

    onLayout?.(event);
  });

  useBackHandler(() => {
    close();

    return true;
  });

  return { hostRef, styleProps, close, handleLayout };
}
