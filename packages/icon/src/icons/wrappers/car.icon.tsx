import { createIcon } from "../../hocs/create-icon.hoc";
import { CarBoldIcon } from "../bold/car-bold.icon";
import { CarDuotoneIcon } from "../duotone/car-duotone.icon";
import { CarFillIcon } from "../fill/car-fill.icon";
import { CarLightIcon } from "../light/car-light.icon";
import { CarRegularIcon } from "../regular/car-regular.icon";
import { CarThinIcon } from "../thin/car-thin.icon";

export const CarIcon = createIcon("Car", {
  bold: CarBoldIcon,
  duotone: CarDuotoneIcon,
  fill: CarFillIcon,
  light: CarLightIcon,
  regular: CarRegularIcon,
  thin: CarThinIcon,
});
