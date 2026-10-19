import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryFullBoldIcon } from "../bold/battery-full-bold.icon";
import { BatteryFullDuotoneIcon } from "../duotone/battery-full-duotone.icon";
import { BatteryFullFillIcon } from "../fill/battery-full-fill.icon";
import { BatteryFullLightIcon } from "../light/battery-full-light.icon";
import { BatteryFullRegularIcon } from "../regular/battery-full-regular.icon";
import { BatteryFullThinIcon } from "../thin/battery-full-thin.icon";

export const BatteryFullIcon = createIcon("BatteryFull", {
  bold: BatteryFullBoldIcon,
  duotone: BatteryFullDuotoneIcon,
  fill: BatteryFullFillIcon,
  light: BatteryFullLightIcon,
  regular: BatteryFullRegularIcon,
  thin: BatteryFullThinIcon,
});
