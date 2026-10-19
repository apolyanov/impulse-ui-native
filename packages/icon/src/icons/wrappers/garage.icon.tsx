import { createIcon } from "../../hocs/create-icon.hoc";
import { GarageBoldIcon } from "../bold/garage-bold.icon";
import { GarageDuotoneIcon } from "../duotone/garage-duotone.icon";
import { GarageFillIcon } from "../fill/garage-fill.icon";
import { GarageLightIcon } from "../light/garage-light.icon";
import { GarageRegularIcon } from "../regular/garage-regular.icon";
import { GarageThinIcon } from "../thin/garage-thin.icon";

export const GarageIcon = createIcon("Garage", {
  bold: GarageBoldIcon,
  duotone: GarageDuotoneIcon,
  fill: GarageFillIcon,
  light: GarageLightIcon,
  regular: GarageRegularIcon,
  thin: GarageThinIcon,
});
