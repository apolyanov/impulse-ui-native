import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsClockwiseBoldIcon } from "../bold/arrows-clockwise-bold.icon";
import { ArrowsClockwiseDuotoneIcon } from "../duotone/arrows-clockwise-duotone.icon";
import { ArrowsClockwiseFillIcon } from "../fill/arrows-clockwise-fill.icon";
import { ArrowsClockwiseLightIcon } from "../light/arrows-clockwise-light.icon";
import { ArrowsClockwiseRegularIcon } from "../regular/arrows-clockwise-regular.icon";
import { ArrowsClockwiseThinIcon } from "../thin/arrows-clockwise-thin.icon";

export const ArrowsClockwiseIcon = createIcon("ArrowsClockwise", {
  bold: ArrowsClockwiseBoldIcon,
  duotone: ArrowsClockwiseDuotoneIcon,
  fill: ArrowsClockwiseFillIcon,
  light: ArrowsClockwiseLightIcon,
  regular: ArrowsClockwiseRegularIcon,
  thin: ArrowsClockwiseThinIcon,
});
