import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowCircleDownRightBoldIcon } from "../bold/arrow-circle-down-right-bold.icon";
import { ArrowCircleDownRightDuotoneIcon } from "../duotone/arrow-circle-down-right-duotone.icon";
import { ArrowCircleDownRightFillIcon } from "../fill/arrow-circle-down-right-fill.icon";
import { ArrowCircleDownRightLightIcon } from "../light/arrow-circle-down-right-light.icon";
import { ArrowCircleDownRightRegularIcon } from "../regular/arrow-circle-down-right-regular.icon";
import { ArrowCircleDownRightThinIcon } from "../thin/arrow-circle-down-right-thin.icon";

export const ArrowCircleDownRightIcon = createIcon("ArrowCircleDownRight", {
  bold: ArrowCircleDownRightBoldIcon,
  duotone: ArrowCircleDownRightDuotoneIcon,
  fill: ArrowCircleDownRightFillIcon,
  light: ArrowCircleDownRightLightIcon,
  regular: ArrowCircleDownRightRegularIcon,
  thin: ArrowCircleDownRightThinIcon,
});
