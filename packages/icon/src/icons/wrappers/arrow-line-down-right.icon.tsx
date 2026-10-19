import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowLineDownRightBoldIcon } from "../bold/arrow-line-down-right-bold.icon";
import { ArrowLineDownRightDuotoneIcon } from "../duotone/arrow-line-down-right-duotone.icon";
import { ArrowLineDownRightFillIcon } from "../fill/arrow-line-down-right-fill.icon";
import { ArrowLineDownRightLightIcon } from "../light/arrow-line-down-right-light.icon";
import { ArrowLineDownRightRegularIcon } from "../regular/arrow-line-down-right-regular.icon";
import { ArrowLineDownRightThinIcon } from "../thin/arrow-line-down-right-thin.icon";

export const ArrowLineDownRightIcon = createIcon("ArrowLineDownRight", {
  bold: ArrowLineDownRightBoldIcon,
  duotone: ArrowLineDownRightDuotoneIcon,
  fill: ArrowLineDownRightFillIcon,
  light: ArrowLineDownRightLightIcon,
  regular: ArrowLineDownRightRegularIcon,
  thin: ArrowLineDownRightThinIcon,
});
