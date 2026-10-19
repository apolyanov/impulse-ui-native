import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryVerticalMediumBoldIcon } from "../bold/battery-vertical-medium-bold.icon";
import { BatteryVerticalMediumDuotoneIcon } from "../duotone/battery-vertical-medium-duotone.icon";
import { BatteryVerticalMediumFillIcon } from "../fill/battery-vertical-medium-fill.icon";
import { BatteryVerticalMediumLightIcon } from "../light/battery-vertical-medium-light.icon";
import { BatteryVerticalMediumRegularIcon } from "../regular/battery-vertical-medium-regular.icon";
import { BatteryVerticalMediumThinIcon } from "../thin/battery-vertical-medium-thin.icon";

export const BatteryVerticalMediumIcon = createIcon("BatteryVerticalMedium", {
  bold: BatteryVerticalMediumBoldIcon,
  duotone: BatteryVerticalMediumDuotoneIcon,
  fill: BatteryVerticalMediumFillIcon,
  light: BatteryVerticalMediumLightIcon,
  regular: BatteryVerticalMediumRegularIcon,
  thin: BatteryVerticalMediumThinIcon,
});
