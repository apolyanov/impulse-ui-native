import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowULeftUpBoldIcon } from "../bold/arrow-u-left-up-bold.icon";
import { ArrowULeftUpDuotoneIcon } from "../duotone/arrow-u-left-up-duotone.icon";
import { ArrowULeftUpFillIcon } from "../fill/arrow-u-left-up-fill.icon";
import { ArrowULeftUpLightIcon } from "../light/arrow-u-left-up-light.icon";
import { ArrowULeftUpRegularIcon } from "../regular/arrow-u-left-up-regular.icon";
import { ArrowULeftUpThinIcon } from "../thin/arrow-u-left-up-thin.icon";

export const ArrowULeftUpIcon = createIcon("ArrowULeftUp", {
  bold: ArrowULeftUpBoldIcon,
  duotone: ArrowULeftUpDuotoneIcon,
  fill: ArrowULeftUpFillIcon,
  light: ArrowULeftUpLightIcon,
  regular: ArrowULeftUpRegularIcon,
  thin: ArrowULeftUpThinIcon,
});
