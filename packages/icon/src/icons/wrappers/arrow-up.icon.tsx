import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowUpBoldIcon } from "../bold/arrow-up-bold.icon";
import { ArrowUpDuotoneIcon } from "../duotone/arrow-up-duotone.icon";
import { ArrowUpFillIcon } from "../fill/arrow-up-fill.icon";
import { ArrowUpLightIcon } from "../light/arrow-up-light.icon";
import { ArrowUpRegularIcon } from "../regular/arrow-up-regular.icon";
import { ArrowUpThinIcon } from "../thin/arrow-up-thin.icon";

export const ArrowUpIcon = createIcon("ArrowUp", {
  bold: ArrowUpBoldIcon,
  duotone: ArrowUpDuotoneIcon,
  fill: ArrowUpFillIcon,
  light: ArrowUpLightIcon,
  regular: ArrowUpRegularIcon,
  thin: ArrowUpThinIcon,
});
