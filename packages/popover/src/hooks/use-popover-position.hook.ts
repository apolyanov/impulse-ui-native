import type { RefObject } from "react";
import type { View } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { PopoverRect } from "../types/popover.types";
import { AnchorMeasureInterval } from "../constants/popover.constants";
import { equalRects } from "../utils/popover-position.utils";
import { usePopoverContext } from "./use-popover-context.hook";

export function usePopoverPosition(hostRef: RefObject<View | null>) {
  const { anchorRef } = usePopoverContext();
  const window = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const [measurement, setMeasurement] = useState<{
    anchor: PopoverRect;
    host: PopoverRect;
  } | null>(null);

  const tokens = useComponentsTokens().popover;

  const bounds = useMemo(() => {
    const host = measurement?.host;
    const x = Math.max(host?.x ?? 0, insets.left) + tokens.edgeOffset;
    const y = Math.max(host?.y ?? 0, insets.top) + tokens.edgeOffset;
    const right =
      Math.min(
        host ? host.x + host.width : window.width,
        window.width - insets.right,
      ) - tokens.edgeOffset;
    const bottom =
      Math.min(
        host ? host.y + host.height : window.height,
        window.height - insets.bottom,
      ) - tokens.edgeOffset;

    return {
      x,
      y,
      width: Math.max(0, right - x),
      height: Math.max(0, bottom - y),
    };
  }, [
    measurement?.host,
    insets,
    window.width,
    window.height,
    tokens.edgeOffset,
  ]);

  useEffect(() => {
    let active = true;
    let measuring = false;

    const measure = () => {
      const anchorNode = anchorRef.current;
      const hostNode = hostRef.current;

      if (!anchorNode || !hostNode) {
        setMeasurement(null);

        return;
      }

      if (measuring) {
        return;
      }

      measuring = true;

      hostNode.measureInWindow((x, y, width, height) => {
        if (!active) {
          return;
        }

        const host = { x, y, width, height };

        anchorNode.measureInWindow((ax, ay, aw, ah) => {
          measuring = false;

          if (
            !active ||
            anchorRef.current !== anchorNode ||
            hostRef.current !== hostNode
          ) {
            return;
          }

          const anchor = { x: ax, y: ay, width: aw, height: ah };

          setMeasurement((previous) => {
            const sameAnchor = equalRects(previous?.anchor ?? null, anchor);
            const sameHost = equalRects(previous?.host ?? null, host);

            if (sameAnchor && sameHost) {
              return previous;
            }

            return {
              anchor,
              host: sameHost && previous ? previous.host : host,
            };
          });
        });
      });
    };

    measure();

    const timer = setInterval(measure, AnchorMeasureInterval);

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [anchorRef, hostRef, window.width, window.height]);

  const anchor = measurement?.anchor;

  const visible = Boolean(
    anchor &&
    anchor.width > 0 &&
    anchor.height > 0 &&
    bounds.width > 0 &&
    bounds.height > 0 &&
    anchor.x + anchor.width > bounds.x &&
    anchor.x < bounds.x + bounds.width &&
    anchor.y + anchor.height > bounds.y &&
    anchor.y < bounds.y + bounds.height,
  );

  return { measurement, bounds, visible };
}
