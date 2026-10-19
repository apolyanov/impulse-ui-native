import { createIcon } from "../../hocs/create-icon.hoc";
import { ShoppingCartBoldIcon } from "../bold/shopping-cart-bold.icon";
import { ShoppingCartDuotoneIcon } from "../duotone/shopping-cart-duotone.icon";
import { ShoppingCartFillIcon } from "../fill/shopping-cart-fill.icon";
import { ShoppingCartLightIcon } from "../light/shopping-cart-light.icon";
import { ShoppingCartRegularIcon } from "../regular/shopping-cart-regular.icon";
import { ShoppingCartThinIcon } from "../thin/shopping-cart-thin.icon";

export const ShoppingCartIcon = createIcon("ShoppingCart", {
  bold: ShoppingCartBoldIcon,
  duotone: ShoppingCartDuotoneIcon,
  fill: ShoppingCartFillIcon,
  light: ShoppingCartLightIcon,
  regular: ShoppingCartRegularIcon,
  thin: ShoppingCartThinIcon,
});
