import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowRightBoldIcon } from "../bold/arrow-right-bold.icon";
import { ArrowRightDuotoneIcon } from "../duotone/arrow-right-duotone.icon";
import { ArrowRightFillIcon } from "../fill/arrow-right-fill.icon";
import { ArrowRightLightIcon } from "../light/arrow-right-light.icon";
import { ArrowRightRegularIcon } from "../regular/arrow-right-regular.icon";
import { ArrowRightThinIcon } from "../thin/arrow-right-thin.icon";

export const ArrowRightIcon = createIcon("ArrowRight", {
  bold: ArrowRightBoldIcon,
  duotone: ArrowRightDuotoneIcon,
  fill: ArrowRightFillIcon,
  light: ArrowRightLightIcon,
  regular: ArrowRightRegularIcon,
  thin: ArrowRightThinIcon,
});
