import type { ViewStyle } from "react-native";

import type {
  PopoverPlacement,
  PopoverPosition,
  PopoverPositionOptions,
  PopoverRect,
} from "../types/popover.types";
import { OppositePlacement } from "../constants/popover.constants";

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

export function equalRects(a: PopoverRect | null, b: PopoverRect): boolean {
  return (
    a !== null &&
    a.x === b.x &&
    a.y === b.y &&
    a.width === b.width &&
    a.height === b.height
  );
}

export function getPopoverPosition({
  anchor,
  bounds,
  width,
  height,
  placement: preferred,
  gap,
  arrowInset,
}: PopoverPositionOptions): PopoverPosition {
  const right = bounds.x + bounds.width;
  const bottom = bounds.y + bounds.height;

  const available: Record<PopoverPlacement, number> = {
    top: anchor.y - bounds.y - gap,
    bottom: bottom - anchor.y - anchor.height - gap,
    left: anchor.x - bounds.x - gap,
    right: right - anchor.x - anchor.width - gap,
  };

  const vertical = preferred === "top" || preferred === "bottom";
  const extent = vertical ? height : width;
  const opposite = OppositePlacement[preferred];
  const placement =
    available[preferred] < extent && available[opposite] > available[preferred]
      ? opposite
      : preferred;

  const centerX = anchor.x + anchor.width / 2;
  const centerY = anchor.y + anchor.height / 2;
  const x = clamp(
    vertical
      ? centerX - width / 2
      : placement === "left"
        ? anchor.x - width - gap
        : anchor.x + anchor.width + gap,
    bounds.x,
    right - width,
  );
  const y = clamp(
    vertical
      ? placement === "top"
        ? anchor.y - height - gap
        : anchor.y + anchor.height + gap
      : centerY - height / 2,
    bounds.y,
    bottom - height,
  );

  const edgeLength = vertical ? width : height;
  const inset = Math.min(arrowInset, edgeLength / 2);
  const offset = vertical ? centerX - x : centerY - y;
  const facing =
    placement === "top"
      ? y + height <= anchor.y
      : placement === "bottom"
        ? y >= anchor.y + anchor.height
        : placement === "left"
          ? x + width <= anchor.x
          : x >= anchor.x + anchor.width;

  return {
    x,
    y,
    placement,
    arrowOffset: clamp(offset, inset, edgeLength - inset),
    showArrow: facing && offset >= inset && offset <= edgeLength - inset,
  };
}

export function getArrowStyle(
  position: PopoverPosition,
  size: number,
  color: string,
  borderWidth: number,
  borderColor: string,
): ViewStyle {
  const side = size * Math.SQRT2;
  const offset = position.arrowOffset - borderWidth - side / 2;
  const edge = -(side + borderWidth) / 2;

  // The inner half covers the panel's border; only the outward edges are outlined.
  const shared: ViewStyle = {
    width: side,
    height: side,
    backgroundColor: color,
    borderColor,
    transform: [{ rotate: "45deg" }],
    ...(position.placement === "top" || position.placement === "bottom"
      ? { left: offset }
      : { top: offset }),
  };

  switch (position.placement) {
    case "top":
      return {
        ...shared,
        bottom: edge,
        borderBottomWidth: borderWidth,
        borderRightWidth: borderWidth,
      };

    case "bottom":
      return {
        ...shared,
        top: edge,
        borderTopWidth: borderWidth,
        borderLeftWidth: borderWidth,
      };

    case "left":
      return {
        ...shared,
        right: edge,
        borderTopWidth: borderWidth,
        borderRightWidth: borderWidth,
      };

    case "right":
      return {
        ...shared,
        left: edge,
        borderBottomWidth: borderWidth,
        borderLeftWidth: borderWidth,
      };
  }
}
