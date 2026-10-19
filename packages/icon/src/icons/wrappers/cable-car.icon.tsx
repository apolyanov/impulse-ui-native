import { createIcon } from "../../hocs/create-icon.hoc";
import { CableCarBoldIcon } from "../bold/cable-car-bold.icon";
import { CableCarDuotoneIcon } from "../duotone/cable-car-duotone.icon";
import { CableCarFillIcon } from "../fill/cable-car-fill.icon";
import { CableCarLightIcon } from "../light/cable-car-light.icon";
import { CableCarRegularIcon } from "../regular/cable-car-regular.icon";
import { CableCarThinIcon } from "../thin/cable-car-thin.icon";

export const CableCarIcon = createIcon("CableCar", {
  bold: CableCarBoldIcon,
  duotone: CableCarDuotoneIcon,
  fill: CableCarFillIcon,
  light: CableCarLightIcon,
  regular: CableCarRegularIcon,
  thin: CableCarThinIcon,
});
