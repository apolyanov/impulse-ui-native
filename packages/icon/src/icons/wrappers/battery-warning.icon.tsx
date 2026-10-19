import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryWarningBoldIcon } from "../bold/battery-warning-bold.icon";
import { BatteryWarningDuotoneIcon } from "../duotone/battery-warning-duotone.icon";
import { BatteryWarningFillIcon } from "../fill/battery-warning-fill.icon";
import { BatteryWarningLightIcon } from "../light/battery-warning-light.icon";
import { BatteryWarningRegularIcon } from "../regular/battery-warning-regular.icon";
import { BatteryWarningThinIcon } from "../thin/battery-warning-thin.icon";

export const BatteryWarningIcon = createIcon("BatteryWarning", {
  bold: BatteryWarningBoldIcon,
  duotone: BatteryWarningDuotoneIcon,
  fill: BatteryWarningFillIcon,
  light: BatteryWarningLightIcon,
  regular: BatteryWarningRegularIcon,
  thin: BatteryWarningThinIcon,
});
