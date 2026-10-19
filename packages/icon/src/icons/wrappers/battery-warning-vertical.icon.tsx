import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryWarningVerticalBoldIcon } from "../bold/battery-warning-vertical-bold.icon";
import { BatteryWarningVerticalDuotoneIcon } from "../duotone/battery-warning-vertical-duotone.icon";
import { BatteryWarningVerticalFillIcon } from "../fill/battery-warning-vertical-fill.icon";
import { BatteryWarningVerticalLightIcon } from "../light/battery-warning-vertical-light.icon";
import { BatteryWarningVerticalRegularIcon } from "../regular/battery-warning-vertical-regular.icon";
import { BatteryWarningVerticalThinIcon } from "../thin/battery-warning-vertical-thin.icon";

export const BatteryWarningVerticalIcon = createIcon("BatteryWarningVertical", {
  bold: BatteryWarningVerticalBoldIcon,
  duotone: BatteryWarningVerticalDuotoneIcon,
  fill: BatteryWarningVerticalFillIcon,
  light: BatteryWarningVerticalLightIcon,
  regular: BatteryWarningVerticalRegularIcon,
  thin: BatteryWarningVerticalThinIcon,
});
