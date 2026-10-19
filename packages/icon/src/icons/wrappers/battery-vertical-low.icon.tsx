import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryVerticalLowBoldIcon } from "../bold/battery-vertical-low-bold.icon";
import { BatteryVerticalLowDuotoneIcon } from "../duotone/battery-vertical-low-duotone.icon";
import { BatteryVerticalLowFillIcon } from "../fill/battery-vertical-low-fill.icon";
import { BatteryVerticalLowLightIcon } from "../light/battery-vertical-low-light.icon";
import { BatteryVerticalLowRegularIcon } from "../regular/battery-vertical-low-regular.icon";
import { BatteryVerticalLowThinIcon } from "../thin/battery-vertical-low-thin.icon";

export const BatteryVerticalLowIcon = createIcon("BatteryVerticalLow", {
  bold: BatteryVerticalLowBoldIcon,
  duotone: BatteryVerticalLowDuotoneIcon,
  fill: BatteryVerticalLowFillIcon,
  light: BatteryVerticalLowLightIcon,
  regular: BatteryVerticalLowRegularIcon,
  thin: BatteryVerticalLowThinIcon,
});
