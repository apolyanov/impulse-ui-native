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

  return { x, y, placement };
}
