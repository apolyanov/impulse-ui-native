import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowCircleUpBoldIcon } from "../bold/arrow-circle-up-bold.icon";
import { ArrowCircleUpDuotoneIcon } from "../duotone/arrow-circle-up-duotone.icon";
import { ArrowCircleUpFillIcon } from "../fill/arrow-circle-up-fill.icon";
import { ArrowCircleUpLightIcon } from "../light/arrow-circle-up-light.icon";
import { ArrowCircleUpRegularIcon } from "../regular/arrow-circle-up-regular.icon";
import { ArrowCircleUpThinIcon } from "../thin/arrow-circle-up-thin.icon";

export const ArrowCircleUpIcon = createIcon("ArrowCircleUp", {
  bold: ArrowCircleUpBoldIcon,
  duotone: ArrowCircleUpDuotoneIcon,
  fill: ArrowCircleUpFillIcon,
  light: ArrowCircleUpLightIcon,
  regular: ArrowCircleUpRegularIcon,
  thin: ArrowCircleUpThinIcon,
});
