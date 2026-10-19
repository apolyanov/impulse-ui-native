import { createIcon } from "../../hocs/create-icon.hoc";
import { BreadBoldIcon } from "../bold/bread-bold.icon";
import { BreadDuotoneIcon } from "../duotone/bread-duotone.icon";
import { BreadFillIcon } from "../fill/bread-fill.icon";
import { BreadLightIcon } from "../light/bread-light.icon";
import { BreadRegularIcon } from "../regular/bread-regular.icon";
import { BreadThinIcon } from "../thin/bread-thin.icon";

export const BreadIcon = createIcon("Bread", {
  bold: BreadBoldIcon,
  duotone: BreadDuotoneIcon,
  fill: BreadFillIcon,
  light: BreadLightIcon,
  regular: BreadRegularIcon,
  thin: BreadThinIcon,
});
