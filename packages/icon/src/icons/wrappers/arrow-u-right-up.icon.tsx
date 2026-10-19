import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowURightUpBoldIcon } from "../bold/arrow-u-right-up-bold.icon";
import { ArrowURightUpDuotoneIcon } from "../duotone/arrow-u-right-up-duotone.icon";
import { ArrowURightUpFillIcon } from "../fill/arrow-u-right-up-fill.icon";
import { ArrowURightUpLightIcon } from "../light/arrow-u-right-up-light.icon";
import { ArrowURightUpRegularIcon } from "../regular/arrow-u-right-up-regular.icon";
import { ArrowURightUpThinIcon } from "../thin/arrow-u-right-up-thin.icon";

export const ArrowURightUpIcon = createIcon("ArrowURightUp", {
  bold: ArrowURightUpBoldIcon,
  duotone: ArrowURightUpDuotoneIcon,
  fill: ArrowURightUpFillIcon,
  light: ArrowURightUpLightIcon,
  regular: ArrowURightUpRegularIcon,
  thin: ArrowURightUpThinIcon,
});
