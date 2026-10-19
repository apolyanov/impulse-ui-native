import { createIcon } from "../../hocs/create-icon.hoc";
import { UserGearBoldIcon } from "../bold/user-gear-bold.icon";
import { UserGearDuotoneIcon } from "../duotone/user-gear-duotone.icon";
import { UserGearFillIcon } from "../fill/user-gear-fill.icon";
import { UserGearLightIcon } from "../light/user-gear-light.icon";
import { UserGearRegularIcon } from "../regular/user-gear-regular.icon";
import { UserGearThinIcon } from "../thin/user-gear-thin.icon";

export const UserGearIcon = createIcon("UserGear", {
  bold: UserGearBoldIcon,
  duotone: UserGearDuotoneIcon,
  fill: UserGearFillIcon,
  light: UserGearLightIcon,
  regular: UserGearRegularIcon,
  thin: UserGearThinIcon,
});
