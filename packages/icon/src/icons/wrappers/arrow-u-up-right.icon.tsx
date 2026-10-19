import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowUUpRightBoldIcon } from "../bold/arrow-u-up-right-bold.icon";
import { ArrowUUpRightDuotoneIcon } from "../duotone/arrow-u-up-right-duotone.icon";
import { ArrowUUpRightFillIcon } from "../fill/arrow-u-up-right-fill.icon";
import { ArrowUUpRightLightIcon } from "../light/arrow-u-up-right-light.icon";
import { ArrowUUpRightRegularIcon } from "../regular/arrow-u-up-right-regular.icon";
import { ArrowUUpRightThinIcon } from "../thin/arrow-u-up-right-thin.icon";

export const ArrowUUpRightIcon = createIcon("ArrowUUpRight", {
  bold: ArrowUUpRightBoldIcon,
  duotone: ArrowUUpRightDuotoneIcon,
  fill: ArrowUUpRightFillIcon,
  light: ArrowUUpRightLightIcon,
  regular: ArrowUUpRightRegularIcon,
  thin: ArrowUUpRightThinIcon,
});
