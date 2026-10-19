import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowDownBoldIcon } from "../bold/arrow-down-bold.icon";
import { ArrowDownDuotoneIcon } from "../duotone/arrow-down-duotone.icon";
import { ArrowDownFillIcon } from "../fill/arrow-down-fill.icon";
import { ArrowDownLightIcon } from "../light/arrow-down-light.icon";
import { ArrowDownRegularIcon } from "../regular/arrow-down-regular.icon";
import { ArrowDownThinIcon } from "../thin/arrow-down-thin.icon";

export const ArrowDownIcon = createIcon("ArrowDown", {
  bold: ArrowDownBoldIcon,
  duotone: ArrowDownDuotoneIcon,
  fill: ArrowDownFillIcon,
  light: ArrowDownLightIcon,
  regular: ArrowDownRegularIcon,
  thin: ArrowDownThinIcon,
});
