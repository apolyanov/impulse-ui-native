import { createIcon } from "../../hocs/create-icon.hoc";
import { ShoppingBagBoldIcon } from "../bold/shopping-bag-bold.icon";
import { ShoppingBagDuotoneIcon } from "../duotone/shopping-bag-duotone.icon";
import { ShoppingBagFillIcon } from "../fill/shopping-bag-fill.icon";
import { ShoppingBagLightIcon } from "../light/shopping-bag-light.icon";
import { ShoppingBagRegularIcon } from "../regular/shopping-bag-regular.icon";
import { ShoppingBagThinIcon } from "../thin/shopping-bag-thin.icon";

export const ShoppingBagIcon = createIcon("ShoppingBag", {
  bold: ShoppingBagBoldIcon,
  duotone: ShoppingBagDuotoneIcon,
  fill: ShoppingBagFillIcon,
  light: ShoppingBagLightIcon,
  regular: ShoppingBagRegularIcon,
  thin: ShoppingBagThinIcon,
});
