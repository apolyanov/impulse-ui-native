import { createIcon } from "../../hocs/create-icon.hoc";
import { BusBoldIcon } from "../bold/bus-bold.icon";
import { BusDuotoneIcon } from "../duotone/bus-duotone.icon";
import { BusFillIcon } from "../fill/bus-fill.icon";
import { BusLightIcon } from "../light/bus-light.icon";
import { BusRegularIcon } from "../regular/bus-regular.icon";
import { BusThinIcon } from "../thin/bus-thin.icon";

export const BusIcon = createIcon("Bus", {
  bold: BusBoldIcon,
  duotone: BusDuotoneIcon,
  fill: BusFillIcon,
  light: BusLightIcon,
  regular: BusRegularIcon,
  thin: BusThinIcon,
});
