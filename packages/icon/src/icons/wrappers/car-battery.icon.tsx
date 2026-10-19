import { createIcon } from "../../hocs/create-icon.hoc";
import { CarBatteryBoldIcon } from "../bold/car-battery-bold.icon";
import { CarBatteryDuotoneIcon } from "../duotone/car-battery-duotone.icon";
import { CarBatteryFillIcon } from "../fill/car-battery-fill.icon";
import { CarBatteryLightIcon } from "../light/car-battery-light.icon";
import { CarBatteryRegularIcon } from "../regular/car-battery-regular.icon";
import { CarBatteryThinIcon } from "../thin/car-battery-thin.icon";

export const CarBatteryIcon = createIcon("CarBattery", {
  bold: CarBatteryBoldIcon,
  duotone: CarBatteryDuotoneIcon,
  fill: CarBatteryFillIcon,
  light: CarBatteryLightIcon,
  regular: CarBatteryRegularIcon,
  thin: CarBatteryThinIcon,
});
