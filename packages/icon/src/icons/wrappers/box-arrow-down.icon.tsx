import { createIcon } from "../../hocs/create-icon.hoc";
import { BoxArrowDownBoldIcon } from "../bold/box-arrow-down-bold.icon";
import { BoxArrowDownDuotoneIcon } from "../duotone/box-arrow-down-duotone.icon";
import { BoxArrowDownFillIcon } from "../fill/box-arrow-down-fill.icon";
import { BoxArrowDownLightIcon } from "../light/box-arrow-down-light.icon";
import { BoxArrowDownRegularIcon } from "../regular/box-arrow-down-regular.icon";
import { BoxArrowDownThinIcon } from "../thin/box-arrow-down-thin.icon";

export const BoxArrowDownIcon = createIcon("BoxArrowDown", {
  bold: BoxArrowDownBoldIcon,
  duotone: BoxArrowDownDuotoneIcon,
  fill: BoxArrowDownFillIcon,
  light: BoxArrowDownLightIcon,
  regular: BoxArrowDownRegularIcon,
  thin: BoxArrowDownThinIcon,
});
