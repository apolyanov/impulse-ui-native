import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryLowBoldIcon } from "../bold/battery-low-bold.icon";
import { BatteryLowDuotoneIcon } from "../duotone/battery-low-duotone.icon";
import { BatteryLowFillIcon } from "../fill/battery-low-fill.icon";
import { BatteryLowLightIcon } from "../light/battery-low-light.icon";
import { BatteryLowRegularIcon } from "../regular/battery-low-regular.icon";
import { BatteryLowThinIcon } from "../thin/battery-low-thin.icon";

export const BatteryLowIcon = createIcon("BatteryLow", {
  bold: BatteryLowBoldIcon,
  duotone: BatteryLowDuotoneIcon,
  fill: BatteryLowFillIcon,
  light: BatteryLowLightIcon,
  regular: BatteryLowRegularIcon,
  thin: BatteryLowThinIcon,
});
