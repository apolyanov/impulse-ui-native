import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsCounterClockwiseBoldIcon } from "../bold/arrows-counter-clockwise-bold.icon";
import { ArrowsCounterClockwiseDuotoneIcon } from "../duotone/arrows-counter-clockwise-duotone.icon";
import { ArrowsCounterClockwiseFillIcon } from "../fill/arrows-counter-clockwise-fill.icon";
import { ArrowsCounterClockwiseLightIcon } from "../light/arrows-counter-clockwise-light.icon";
import { ArrowsCounterClockwiseRegularIcon } from "../regular/arrows-counter-clockwise-regular.icon";
import { ArrowsCounterClockwiseThinIcon } from "../thin/arrows-counter-clockwise-thin.icon";

export const ArrowsCounterClockwiseIcon = createIcon("ArrowsCounterClockwise", {
  bold: ArrowsCounterClockwiseBoldIcon,
  duotone: ArrowsCounterClockwiseDuotoneIcon,
  fill: ArrowsCounterClockwiseFillIcon,
  light: ArrowsCounterClockwiseLightIcon,
  regular: ArrowsCounterClockwiseRegularIcon,
  thin: ArrowsCounterClockwiseThinIcon,
});
