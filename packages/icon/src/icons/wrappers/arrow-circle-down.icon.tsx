import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowCircleDownBoldIcon } from "../bold/arrow-circle-down-bold.icon";
import { ArrowCircleDownDuotoneIcon } from "../duotone/arrow-circle-down-duotone.icon";
import { ArrowCircleDownFillIcon } from "../fill/arrow-circle-down-fill.icon";
import { ArrowCircleDownLightIcon } from "../light/arrow-circle-down-light.icon";
import { ArrowCircleDownRegularIcon } from "../regular/arrow-circle-down-regular.icon";
import { ArrowCircleDownThinIcon } from "../thin/arrow-circle-down-thin.icon";

export const ArrowCircleDownIcon = createIcon("ArrowCircleDown", {
  bold: ArrowCircleDownBoldIcon,
  duotone: ArrowCircleDownDuotoneIcon,
  fill: ArrowCircleDownFillIcon,
  light: ArrowCircleDownLightIcon,
  regular: ArrowCircleDownRegularIcon,
  thin: ArrowCircleDownThinIcon,
});
