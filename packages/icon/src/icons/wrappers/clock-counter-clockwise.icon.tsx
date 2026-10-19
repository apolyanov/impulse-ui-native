import { createIcon } from "../../hocs/create-icon.hoc";
import { ClockCounterClockwiseBoldIcon } from "../bold/clock-counter-clockwise-bold.icon";
import { ClockCounterClockwiseDuotoneIcon } from "../duotone/clock-counter-clockwise-duotone.icon";
import { ClockCounterClockwiseFillIcon } from "../fill/clock-counter-clockwise-fill.icon";
import { ClockCounterClockwiseLightIcon } from "../light/clock-counter-clockwise-light.icon";
import { ClockCounterClockwiseRegularIcon } from "../regular/clock-counter-clockwise-regular.icon";
import { ClockCounterClockwiseThinIcon } from "../thin/clock-counter-clockwise-thin.icon";

export const ClockCounterClockwiseIcon = createIcon("ClockCounterClockwise", {
  bold: ClockCounterClockwiseBoldIcon,
  duotone: ClockCounterClockwiseDuotoneIcon,
  fill: ClockCounterClockwiseFillIcon,
  light: ClockCounterClockwiseLightIcon,
  regular: ClockCounterClockwiseRegularIcon,
  thin: ClockCounterClockwiseThinIcon,
});
