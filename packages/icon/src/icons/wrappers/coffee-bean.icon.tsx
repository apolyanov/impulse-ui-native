import { createIcon } from "../../hocs/create-icon.hoc";
import { CoffeeBeanBoldIcon } from "../bold/coffee-bean-bold.icon";
import { CoffeeBeanDuotoneIcon } from "../duotone/coffee-bean-duotone.icon";
import { CoffeeBeanFillIcon } from "../fill/coffee-bean-fill.icon";
import { CoffeeBeanLightIcon } from "../light/coffee-bean-light.icon";
import { CoffeeBeanRegularIcon } from "../regular/coffee-bean-regular.icon";
import { CoffeeBeanThinIcon } from "../thin/coffee-bean-thin.icon";

export const CoffeeBeanIcon = createIcon("CoffeeBean", {
  bold: CoffeeBeanBoldIcon,
  duotone: CoffeeBeanDuotoneIcon,
  fill: CoffeeBeanFillIcon,
  light: CoffeeBeanLightIcon,
  regular: CoffeeBeanRegularIcon,
  thin: CoffeeBeanThinIcon,
});
