import { createIcon } from "../../hocs/create-icon.hoc";
import { FireTruckBoldIcon } from "../bold/fire-truck-bold.icon";
import { FireTruckDuotoneIcon } from "../duotone/fire-truck-duotone.icon";
import { FireTruckFillIcon } from "../fill/fire-truck-fill.icon";
import { FireTruckLightIcon } from "../light/fire-truck-light.icon";
import { FireTruckRegularIcon } from "../regular/fire-truck-regular.icon";
import { FireTruckThinIcon } from "../thin/fire-truck-thin.icon";

export const FireTruckIcon = createIcon("FireTruck", {
  bold: FireTruckBoldIcon,
  duotone: FireTruckDuotoneIcon,
  fill: FireTruckFillIcon,
  light: FireTruckLightIcon,
  regular: FireTruckRegularIcon,
  thin: FireTruckThinIcon,
});
