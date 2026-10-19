import { createIcon } from "../../hocs/create-icon.hoc";
import { TruckBoldIcon } from "../bold/truck-bold.icon";
import { TruckDuotoneIcon } from "../duotone/truck-duotone.icon";
import { TruckFillIcon } from "../fill/truck-fill.icon";
import { TruckLightIcon } from "../light/truck-light.icon";
import { TruckRegularIcon } from "../regular/truck-regular.icon";
import { TruckThinIcon } from "../thin/truck-thin.icon";

export const TruckIcon = createIcon("Truck", {
  bold: TruckBoldIcon,
  duotone: TruckDuotoneIcon,
  fill: TruckFillIcon,
  light: TruckLightIcon,
  regular: TruckRegularIcon,
  thin: TruckThinIcon,
});
