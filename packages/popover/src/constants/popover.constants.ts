import type { PopoverPlacement } from "../types";

export const AnchorMeasureInterval = 100;
export const TooltipDuration = 3000;
export const OppositePlacement: Record<PopoverPlacement, PopoverPlacement> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};
