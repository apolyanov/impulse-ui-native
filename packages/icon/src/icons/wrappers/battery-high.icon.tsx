import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryHighBoldIcon } from "../bold/battery-high-bold.icon";
import { BatteryHighDuotoneIcon } from "../duotone/battery-high-duotone.icon";
import { BatteryHighFillIcon } from "../fill/battery-high-fill.icon";
import { BatteryHighLightIcon } from "../light/battery-high-light.icon";
import { BatteryHighRegularIcon } from "../regular/battery-high-regular.icon";
import { BatteryHighThinIcon } from "../thin/battery-high-thin.icon";

export const BatteryHighIcon = createIcon("BatteryHigh", {
  bold: BatteryHighBoldIcon,
  duotone: BatteryHighDuotoneIcon,
  fill: BatteryHighFillIcon,
  light: BatteryHighLightIcon,
  regular: BatteryHighRegularIcon,
  thin: BatteryHighThinIcon,
});
