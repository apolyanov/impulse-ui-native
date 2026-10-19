import { createIcon } from "../../hocs/create-icon.hoc";
import { CarSimpleBoldIcon } from "../bold/car-simple-bold.icon";
import { CarSimpleDuotoneIcon } from "../duotone/car-simple-duotone.icon";
import { CarSimpleFillIcon } from "../fill/car-simple-fill.icon";
import { CarSimpleLightIcon } from "../light/car-simple-light.icon";
import { CarSimpleRegularIcon } from "../regular/car-simple-regular.icon";
import { CarSimpleThinIcon } from "../thin/car-simple-thin.icon";

export const CarSimpleIcon = createIcon("CarSimple", {
  bold: CarSimpleBoldIcon,
  duotone: CarSimpleDuotoneIcon,
  fill: CarSimpleFillIcon,
  light: CarSimpleLightIcon,
  regular: CarSimpleRegularIcon,
  thin: CarSimpleThinIcon,
});
