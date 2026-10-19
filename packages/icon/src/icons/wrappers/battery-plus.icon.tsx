import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryPlusBoldIcon } from "../bold/battery-plus-bold.icon";
import { BatteryPlusDuotoneIcon } from "../duotone/battery-plus-duotone.icon";
import { BatteryPlusFillIcon } from "../fill/battery-plus-fill.icon";
import { BatteryPlusLightIcon } from "../light/battery-plus-light.icon";
import { BatteryPlusRegularIcon } from "../regular/battery-plus-regular.icon";
import { BatteryPlusThinIcon } from "../thin/battery-plus-thin.icon";

export const BatteryPlusIcon = createIcon("BatteryPlus", {
  bold: BatteryPlusBoldIcon,
  duotone: BatteryPlusDuotoneIcon,
  fill: BatteryPlusFillIcon,
  light: BatteryPlusLightIcon,
  regular: BatteryPlusRegularIcon,
  thin: BatteryPlusThinIcon,
});
