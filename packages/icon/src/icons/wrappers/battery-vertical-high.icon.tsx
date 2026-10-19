import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryVerticalHighBoldIcon } from "../bold/battery-vertical-high-bold.icon";
import { BatteryVerticalHighDuotoneIcon } from "../duotone/battery-vertical-high-duotone.icon";
import { BatteryVerticalHighFillIcon } from "../fill/battery-vertical-high-fill.icon";
import { BatteryVerticalHighLightIcon } from "../light/battery-vertical-high-light.icon";
import { BatteryVerticalHighRegularIcon } from "../regular/battery-vertical-high-regular.icon";
import { BatteryVerticalHighThinIcon } from "../thin/battery-vertical-high-thin.icon";

export const BatteryVerticalHighIcon = createIcon("BatteryVerticalHigh", {
  bold: BatteryVerticalHighBoldIcon,
  duotone: BatteryVerticalHighDuotoneIcon,
  fill: BatteryVerticalHighFillIcon,
  light: BatteryVerticalHighLightIcon,
  regular: BatteryVerticalHighRegularIcon,
  thin: BatteryVerticalHighThinIcon,
});
