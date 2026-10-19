import { createIcon } from "../../hocs/create-icon.hoc";
import { CakeBoldIcon } from "../bold/cake-bold.icon";
import { CakeDuotoneIcon } from "../duotone/cake-duotone.icon";
import { CakeFillIcon } from "../fill/cake-fill.icon";
import { CakeLightIcon } from "../light/cake-light.icon";
import { CakeRegularIcon } from "../regular/cake-regular.icon";
import { CakeThinIcon } from "../thin/cake-thin.icon";

export const CakeIcon = createIcon("Cake", {
  bold: CakeBoldIcon,
  duotone: CakeDuotoneIcon,
  fill: CakeFillIcon,
  light: CakeLightIcon,
  regular: CakeRegularIcon,
  thin: CakeThinIcon,
});
