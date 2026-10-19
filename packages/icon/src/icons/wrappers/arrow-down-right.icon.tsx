import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowDownRightBoldIcon } from "../bold/arrow-down-right-bold.icon";
import { ArrowDownRightDuotoneIcon } from "../duotone/arrow-down-right-duotone.icon";
import { ArrowDownRightFillIcon } from "../fill/arrow-down-right-fill.icon";
import { ArrowDownRightLightIcon } from "../light/arrow-down-right-light.icon";
import { ArrowDownRightRegularIcon } from "../regular/arrow-down-right-regular.icon";
import { ArrowDownRightThinIcon } from "../thin/arrow-down-right-thin.icon";

export const ArrowDownRightIcon = createIcon("ArrowDownRight", {
  bold: ArrowDownRightBoldIcon,
  duotone: ArrowDownRightDuotoneIcon,
  fill: ArrowDownRightFillIcon,
  light: ArrowDownRightLightIcon,
  regular: ArrowDownRightRegularIcon,
  thin: ArrowDownRightThinIcon,
});
