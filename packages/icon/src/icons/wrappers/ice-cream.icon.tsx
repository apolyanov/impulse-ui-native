import { createIcon } from "../../hocs/create-icon.hoc";
import { IceCreamBoldIcon } from "../bold/ice-cream-bold.icon";
import { IceCreamDuotoneIcon } from "../duotone/ice-cream-duotone.icon";
import { IceCreamFillIcon } from "../fill/ice-cream-fill.icon";
import { IceCreamLightIcon } from "../light/ice-cream-light.icon";
import { IceCreamRegularIcon } from "../regular/ice-cream-regular.icon";
import { IceCreamThinIcon } from "../thin/ice-cream-thin.icon";

export const IceCreamIcon = createIcon("IceCream", {
  bold: IceCreamBoldIcon,
  duotone: IceCreamDuotoneIcon,
  fill: IceCreamFillIcon,
  light: IceCreamLightIcon,
  regular: IceCreamRegularIcon,
  thin: IceCreamThinIcon,
});
