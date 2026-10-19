import { createIcon } from "../../hocs/create-icon.hoc";
import { PizzaBoldIcon } from "../bold/pizza-bold.icon";
import { PizzaDuotoneIcon } from "../duotone/pizza-duotone.icon";
import { PizzaFillIcon } from "../fill/pizza-fill.icon";
import { PizzaLightIcon } from "../light/pizza-light.icon";
import { PizzaRegularIcon } from "../regular/pizza-regular.icon";
import { PizzaThinIcon } from "../thin/pizza-thin.icon";

export const PizzaIcon = createIcon("Pizza", {
  bold: PizzaBoldIcon,
  duotone: PizzaDuotoneIcon,
  fill: PizzaFillIcon,
  light: PizzaLightIcon,
  regular: PizzaRegularIcon,
  thin: PizzaThinIcon,
});
