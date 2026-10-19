import { createIcon } from "../../hocs/create-icon.hoc";
import { BagBoldIcon } from "../bold/bag-bold.icon";
import { BagDuotoneIcon } from "../duotone/bag-duotone.icon";
import { BagFillIcon } from "../fill/bag-fill.icon";
import { BagLightIcon } from "../light/bag-light.icon";
import { BagRegularIcon } from "../regular/bag-regular.icon";
import { BagThinIcon } from "../thin/bag-thin.icon";

export const BagIcon = createIcon("Bag", {
  bold: BagBoldIcon,
  duotone: BagDuotoneIcon,
  fill: BagFillIcon,
  light: BagLightIcon,
  regular: BagRegularIcon,
  thin: BagThinIcon,
});
