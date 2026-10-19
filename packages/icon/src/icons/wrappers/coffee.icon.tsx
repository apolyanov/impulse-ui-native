import { createIcon } from "../../hocs/create-icon.hoc";
import { CoffeeBoldIcon } from "../bold/coffee-bold.icon";
import { CoffeeDuotoneIcon } from "../duotone/coffee-duotone.icon";
import { CoffeeFillIcon } from "../fill/coffee-fill.icon";
import { CoffeeLightIcon } from "../light/coffee-light.icon";
import { CoffeeRegularIcon } from "../regular/coffee-regular.icon";
import { CoffeeThinIcon } from "../thin/coffee-thin.icon";

export const CoffeeIcon = createIcon("Coffee", {
  bold: CoffeeBoldIcon,
  duotone: CoffeeDuotoneIcon,
  fill: CoffeeFillIcon,
  light: CoffeeLightIcon,
  regular: CoffeeRegularIcon,
  thin: CoffeeThinIcon,
});
