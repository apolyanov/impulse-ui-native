import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowLineDownBoldIcon } from "../bold/arrow-line-down-bold.icon";
import { ArrowLineDownDuotoneIcon } from "../duotone/arrow-line-down-duotone.icon";
import { ArrowLineDownFillIcon } from "../fill/arrow-line-down-fill.icon";
import { ArrowLineDownLightIcon } from "../light/arrow-line-down-light.icon";
import { ArrowLineDownRegularIcon } from "../regular/arrow-line-down-regular.icon";
import { ArrowLineDownThinIcon } from "../thin/arrow-line-down-thin.icon";

export const ArrowLineDownIcon = createIcon("ArrowLineDown", {
  bold: ArrowLineDownBoldIcon,
  duotone: ArrowLineDownDuotoneIcon,
  fill: ArrowLineDownFillIcon,
  light: ArrowLineDownLightIcon,
  regular: ArrowLineDownRegularIcon,
  thin: ArrowLineDownThinIcon,
});
