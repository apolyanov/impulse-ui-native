import { createIcon } from "../../hocs/create-icon.hoc";
import { ShoppingCartSimpleBoldIcon } from "../bold/shopping-cart-simple-bold.icon";
import { ShoppingCartSimpleDuotoneIcon } from "../duotone/shopping-cart-simple-duotone.icon";
import { ShoppingCartSimpleFillIcon } from "../fill/shopping-cart-simple-fill.icon";
import { ShoppingCartSimpleLightIcon } from "../light/shopping-cart-simple-light.icon";
import { ShoppingCartSimpleRegularIcon } from "../regular/shopping-cart-simple-regular.icon";
import { ShoppingCartSimpleThinIcon } from "../thin/shopping-cart-simple-thin.icon";

export const ShoppingCartSimpleIcon = createIcon("ShoppingCartSimple", {
  bold: ShoppingCartSimpleBoldIcon,
  duotone: ShoppingCartSimpleDuotoneIcon,
  fill: ShoppingCartSimpleFillIcon,
  light: ShoppingCartSimpleLightIcon,
  regular: ShoppingCartSimpleRegularIcon,
  thin: ShoppingCartSimpleThinIcon,
});
