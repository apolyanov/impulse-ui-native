import { createIcon } from "../../hocs/create-icon.hoc";
import { CarrotBoldIcon } from "../bold/carrot-bold.icon";
import { CarrotDuotoneIcon } from "../duotone/carrot-duotone.icon";
import { CarrotFillIcon } from "../fill/carrot-fill.icon";
import { CarrotLightIcon } from "../light/carrot-light.icon";
import { CarrotRegularIcon } from "../regular/carrot-regular.icon";
import { CarrotThinIcon } from "../thin/carrot-thin.icon";

export const CarrotIcon = createIcon("Carrot", {
  bold: CarrotBoldIcon,
  duotone: CarrotDuotoneIcon,
  fill: CarrotFillIcon,
  light: CarrotLightIcon,
  regular: CarrotRegularIcon,
  thin: CarrotThinIcon,
});
