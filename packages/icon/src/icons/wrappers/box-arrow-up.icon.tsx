import { createIcon } from "../../hocs/create-icon.hoc";
import { BoxArrowUpBoldIcon } from "../bold/box-arrow-up-bold.icon";
import { BoxArrowUpDuotoneIcon } from "../duotone/box-arrow-up-duotone.icon";
import { BoxArrowUpFillIcon } from "../fill/box-arrow-up-fill.icon";
import { BoxArrowUpLightIcon } from "../light/box-arrow-up-light.icon";
import { BoxArrowUpRegularIcon } from "../regular/box-arrow-up-regular.icon";
import { BoxArrowUpThinIcon } from "../thin/box-arrow-up-thin.icon";

export const BoxArrowUpIcon = createIcon("BoxArrowUp", {
  bold: BoxArrowUpBoldIcon,
  duotone: BoxArrowUpDuotoneIcon,
  fill: BoxArrowUpFillIcon,
  light: BoxArrowUpLightIcon,
  regular: BoxArrowUpRegularIcon,
  thin: BoxArrowUpThinIcon,
});
