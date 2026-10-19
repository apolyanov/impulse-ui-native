import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowClockwiseBoldIcon } from "../bold/arrow-clockwise-bold.icon";
import { ArrowClockwiseDuotoneIcon } from "../duotone/arrow-clockwise-duotone.icon";
import { ArrowClockwiseFillIcon } from "../fill/arrow-clockwise-fill.icon";
import { ArrowClockwiseLightIcon } from "../light/arrow-clockwise-light.icon";
import { ArrowClockwiseRegularIcon } from "../regular/arrow-clockwise-regular.icon";
import { ArrowClockwiseThinIcon } from "../thin/arrow-clockwise-thin.icon";

export const ArrowClockwiseIcon = createIcon("ArrowClockwise", {
  bold: ArrowClockwiseBoldIcon,
  duotone: ArrowClockwiseDuotoneIcon,
  fill: ArrowClockwiseFillIcon,
  light: ArrowClockwiseLightIcon,
  regular: ArrowClockwiseRegularIcon,
  thin: ArrowClockwiseThinIcon,
});
