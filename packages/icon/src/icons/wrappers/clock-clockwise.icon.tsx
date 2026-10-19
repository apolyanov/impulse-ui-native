import { createIcon } from "../../hocs/create-icon.hoc";
import { ClockClockwiseBoldIcon } from "../bold/clock-clockwise-bold.icon";
import { ClockClockwiseDuotoneIcon } from "../duotone/clock-clockwise-duotone.icon";
import { ClockClockwiseFillIcon } from "../fill/clock-clockwise-fill.icon";
import { ClockClockwiseLightIcon } from "../light/clock-clockwise-light.icon";
import { ClockClockwiseRegularIcon } from "../regular/clock-clockwise-regular.icon";
import { ClockClockwiseThinIcon } from "../thin/clock-clockwise-thin.icon";

export const ClockClockwiseIcon = createIcon("ClockClockwise", {
  bold: ClockClockwiseBoldIcon,
  duotone: ClockClockwiseDuotoneIcon,
  fill: ClockClockwiseFillIcon,
  light: ClockClockwiseLightIcon,
  regular: ClockClockwiseRegularIcon,
  thin: ClockClockwiseThinIcon,
});
