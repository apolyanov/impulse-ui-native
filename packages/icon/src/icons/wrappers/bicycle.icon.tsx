import { createIcon } from "../../hocs/create-icon.hoc";
import { BicycleBoldIcon } from "../bold/bicycle-bold.icon";
import { BicycleDuotoneIcon } from "../duotone/bicycle-duotone.icon";
import { BicycleFillIcon } from "../fill/bicycle-fill.icon";
import { BicycleLightIcon } from "../light/bicycle-light.icon";
import { BicycleRegularIcon } from "../regular/bicycle-regular.icon";
import { BicycleThinIcon } from "../thin/bicycle-thin.icon";

export const BicycleIcon = createIcon("Bicycle", {
  bold: BicycleBoldIcon,
  duotone: BicycleDuotoneIcon,
  fill: BicycleFillIcon,
  light: BicycleLightIcon,
  regular: BicycleRegularIcon,
  thin: BicycleThinIcon,
});
