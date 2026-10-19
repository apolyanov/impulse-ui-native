import { createIcon } from "../../hocs/create-icon.hoc";
import { ButterflyBoldIcon } from "../bold/butterfly-bold.icon";
import { ButterflyDuotoneIcon } from "../duotone/butterfly-duotone.icon";
import { ButterflyFillIcon } from "../fill/butterfly-fill.icon";
import { ButterflyLightIcon } from "../light/butterfly-light.icon";
import { ButterflyRegularIcon } from "../regular/butterfly-regular.icon";
import { ButterflyThinIcon } from "../thin/butterfly-thin.icon";

export const ButterflyIcon = createIcon("Butterfly", {
  bold: ButterflyBoldIcon,
  duotone: ButterflyDuotoneIcon,
  fill: ButterflyFillIcon,
  light: ButterflyLightIcon,
  regular: ButterflyRegularIcon,
  thin: ButterflyThinIcon,
});
