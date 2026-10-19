import { createIcon } from "../../hocs/create-icon.hoc";
import { HandArrowUpBoldIcon } from "../bold/hand-arrow-up-bold.icon";
import { HandArrowUpDuotoneIcon } from "../duotone/hand-arrow-up-duotone.icon";
import { HandArrowUpFillIcon } from "../fill/hand-arrow-up-fill.icon";
import { HandArrowUpLightIcon } from "../light/hand-arrow-up-light.icon";
import { HandArrowUpRegularIcon } from "../regular/hand-arrow-up-regular.icon";
import { HandArrowUpThinIcon } from "../thin/hand-arrow-up-thin.icon";

export const HandArrowUpIcon = createIcon("HandArrowUp", {
  bold: HandArrowUpBoldIcon,
  duotone: HandArrowUpDuotoneIcon,
  fill: HandArrowUpFillIcon,
  light: HandArrowUpLightIcon,
  regular: HandArrowUpRegularIcon,
  thin: HandArrowUpThinIcon,
});
