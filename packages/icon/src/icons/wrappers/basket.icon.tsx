import { createIcon } from "../../hocs/create-icon.hoc";
import { BasketBoldIcon } from "../bold/basket-bold.icon";
import { BasketDuotoneIcon } from "../duotone/basket-duotone.icon";
import { BasketFillIcon } from "../fill/basket-fill.icon";
import { BasketLightIcon } from "../light/basket-light.icon";
import { BasketRegularIcon } from "../regular/basket-regular.icon";
import { BasketThinIcon } from "../thin/basket-thin.icon";

export const BasketIcon = createIcon("Basket", {
  bold: BasketBoldIcon,
  duotone: BasketDuotoneIcon,
  fill: BasketFillIcon,
  light: BasketLightIcon,
  regular: BasketRegularIcon,
  thin: BasketThinIcon,
});
