import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryPlusVerticalBoldIcon } from "../bold/battery-plus-vertical-bold.icon";
import { BatteryPlusVerticalDuotoneIcon } from "../duotone/battery-plus-vertical-duotone.icon";
import { BatteryPlusVerticalFillIcon } from "../fill/battery-plus-vertical-fill.icon";
import { BatteryPlusVerticalLightIcon } from "../light/battery-plus-vertical-light.icon";
import { BatteryPlusVerticalRegularIcon } from "../regular/battery-plus-vertical-regular.icon";
import { BatteryPlusVerticalThinIcon } from "../thin/battery-plus-vertical-thin.icon";

export const BatteryPlusVerticalIcon = createIcon("BatteryPlusVertical", {
  bold: BatteryPlusVerticalBoldIcon,
  duotone: BatteryPlusVerticalDuotoneIcon,
  fill: BatteryPlusVerticalFillIcon,
  light: BatteryPlusVerticalLightIcon,
  regular: BatteryPlusVerticalRegularIcon,
  thin: BatteryPlusVerticalThinIcon,
});
