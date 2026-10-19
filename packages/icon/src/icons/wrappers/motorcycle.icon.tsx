import { createIcon } from "../../hocs/create-icon.hoc";
import { MotorcycleBoldIcon } from "../bold/motorcycle-bold.icon";
import { MotorcycleDuotoneIcon } from "../duotone/motorcycle-duotone.icon";
import { MotorcycleFillIcon } from "../fill/motorcycle-fill.icon";
import { MotorcycleLightIcon } from "../light/motorcycle-light.icon";
import { MotorcycleRegularIcon } from "../regular/motorcycle-regular.icon";
import { MotorcycleThinIcon } from "../thin/motorcycle-thin.icon";

export const MotorcycleIcon = createIcon("Motorcycle", {
  bold: MotorcycleBoldIcon,
  duotone: MotorcycleDuotoneIcon,
  fill: MotorcycleFillIcon,
  light: MotorcycleLightIcon,
  regular: MotorcycleRegularIcon,
  thin: MotorcycleThinIcon,
});
