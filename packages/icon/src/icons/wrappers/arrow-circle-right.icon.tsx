import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowCircleRightBoldIcon } from "../bold/arrow-circle-right-bold.icon";
import { ArrowCircleRightDuotoneIcon } from "../duotone/arrow-circle-right-duotone.icon";
import { ArrowCircleRightFillIcon } from "../fill/arrow-circle-right-fill.icon";
import { ArrowCircleRightLightIcon } from "../light/arrow-circle-right-light.icon";
import { ArrowCircleRightRegularIcon } from "../regular/arrow-circle-right-regular.icon";
import { ArrowCircleRightThinIcon } from "../thin/arrow-circle-right-thin.icon";

export const ArrowCircleRightIcon = createIcon("ArrowCircleRight", {
  bold: ArrowCircleRightBoldIcon,
  duotone: ArrowCircleRightDuotoneIcon,
  fill: ArrowCircleRightFillIcon,
  light: ArrowCircleRightLightIcon,
  regular: ArrowCircleRightRegularIcon,
  thin: ArrowCircleRightThinIcon,
});
