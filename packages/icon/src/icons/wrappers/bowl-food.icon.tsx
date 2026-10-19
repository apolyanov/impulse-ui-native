import { createIcon } from "../../hocs/create-icon.hoc";
import { BowlFoodBoldIcon } from "../bold/bowl-food-bold.icon";
import { BowlFoodDuotoneIcon } from "../duotone/bowl-food-duotone.icon";
import { BowlFoodFillIcon } from "../fill/bowl-food-fill.icon";
import { BowlFoodLightIcon } from "../light/bowl-food-light.icon";
import { BowlFoodRegularIcon } from "../regular/bowl-food-regular.icon";
import { BowlFoodThinIcon } from "../thin/bowl-food-thin.icon";

export const BowlFoodIcon = createIcon("BowlFood", {
  bold: BowlFoodBoldIcon,
  duotone: BowlFoodDuotoneIcon,
  fill: BowlFoodFillIcon,
  light: BowlFoodLightIcon,
  regular: BowlFoodRegularIcon,
  thin: BowlFoodThinIcon,
});
