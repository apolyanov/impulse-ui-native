import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryChargingBoldIcon } from "../bold/battery-charging-bold.icon";
import { BatteryChargingDuotoneIcon } from "../duotone/battery-charging-duotone.icon";
import { BatteryChargingFillIcon } from "../fill/battery-charging-fill.icon";
import { BatteryChargingLightIcon } from "../light/battery-charging-light.icon";
import { BatteryChargingRegularIcon } from "../regular/battery-charging-regular.icon";
import { BatteryChargingThinIcon } from "../thin/battery-charging-thin.icon";

export const BatteryChargingIcon = createIcon("BatteryCharging", {
  bold: BatteryChargingBoldIcon,
  duotone: BatteryChargingDuotoneIcon,
  fill: BatteryChargingFillIcon,
  light: BatteryChargingLightIcon,
  regular: BatteryChargingRegularIcon,
  thin: BatteryChargingThinIcon,
});
