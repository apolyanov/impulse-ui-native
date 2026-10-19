import { createIcon } from "../../hocs/create-icon.hoc";
import { BeltBoldIcon } from "../bold/belt-bold.icon";
import { BeltDuotoneIcon } from "../duotone/belt-duotone.icon";
import { BeltFillIcon } from "../fill/belt-fill.icon";
import { BeltLightIcon } from "../light/belt-light.icon";
import { BeltRegularIcon } from "../regular/belt-regular.icon";
import { BeltThinIcon } from "../thin/belt-thin.icon";

export const BeltIcon = createIcon("Belt", {
  bold: BeltBoldIcon,
  duotone: BeltDuotoneIcon,
  fill: BeltFillIcon,
  light: BeltLightIcon,
  regular: BeltRegularIcon,
  thin: BeltThinIcon,
});
