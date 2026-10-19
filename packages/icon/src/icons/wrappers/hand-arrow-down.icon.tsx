import { createIcon } from "../../hocs/create-icon.hoc";
import { HandArrowDownBoldIcon } from "../bold/hand-arrow-down-bold.icon";
import { HandArrowDownDuotoneIcon } from "../duotone/hand-arrow-down-duotone.icon";
import { HandArrowDownFillIcon } from "../fill/hand-arrow-down-fill.icon";
import { HandArrowDownLightIcon } from "../light/hand-arrow-down-light.icon";
import { HandArrowDownRegularIcon } from "../regular/hand-arrow-down-regular.icon";
import { HandArrowDownThinIcon } from "../thin/hand-arrow-down-thin.icon";

export const HandArrowDownIcon = createIcon("HandArrowDown", {
  bold: HandArrowDownBoldIcon,
  duotone: HandArrowDownDuotoneIcon,
  fill: HandArrowDownFillIcon,
  light: HandArrowDownLightIcon,
  regular: HandArrowDownRegularIcon,
  thin: HandArrowDownThinIcon,
});
