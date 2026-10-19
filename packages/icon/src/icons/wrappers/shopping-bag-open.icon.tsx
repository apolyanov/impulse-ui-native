import { createIcon } from "../../hocs/create-icon.hoc";
import { ShoppingBagOpenBoldIcon } from "../bold/shopping-bag-open-bold.icon";
import { ShoppingBagOpenDuotoneIcon } from "../duotone/shopping-bag-open-duotone.icon";
import { ShoppingBagOpenFillIcon } from "../fill/shopping-bag-open-fill.icon";
import { ShoppingBagOpenLightIcon } from "../light/shopping-bag-open-light.icon";
import { ShoppingBagOpenRegularIcon } from "../regular/shopping-bag-open-regular.icon";
import { ShoppingBagOpenThinIcon } from "../thin/shopping-bag-open-thin.icon";

export const ShoppingBagOpenIcon = createIcon("ShoppingBagOpen", {
  bold: ShoppingBagOpenBoldIcon,
  duotone: ShoppingBagOpenDuotoneIcon,
  fill: ShoppingBagOpenFillIcon,
  light: ShoppingBagOpenLightIcon,
  regular: ShoppingBagOpenRegularIcon,
  thin: ShoppingBagOpenThinIcon,
});
