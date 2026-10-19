import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowCircleUpRightBoldIcon } from "../bold/arrow-circle-up-right-bold.icon";
import { ArrowCircleUpRightDuotoneIcon } from "../duotone/arrow-circle-up-right-duotone.icon";
import { ArrowCircleUpRightFillIcon } from "../fill/arrow-circle-up-right-fill.icon";
import { ArrowCircleUpRightLightIcon } from "../light/arrow-circle-up-right-light.icon";
import { ArrowCircleUpRightRegularIcon } from "../regular/arrow-circle-up-right-regular.icon";
import { ArrowCircleUpRightThinIcon } from "../thin/arrow-circle-up-right-thin.icon";

export const ArrowCircleUpRightIcon = createIcon("ArrowCircleUpRight", {
  bold: ArrowCircleUpRightBoldIcon,
  duotone: ArrowCircleUpRightDuotoneIcon,
  fill: ArrowCircleUpRightFillIcon,
  light: ArrowCircleUpRightLightIcon,
  regular: ArrowCircleUpRightRegularIcon,
  thin: ArrowCircleUpRightThinIcon,
});
