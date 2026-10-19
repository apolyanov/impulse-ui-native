import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryMediumBoldIcon } from "../bold/battery-medium-bold.icon";
import { BatteryMediumDuotoneIcon } from "../duotone/battery-medium-duotone.icon";
import { BatteryMediumFillIcon } from "../fill/battery-medium-fill.icon";
import { BatteryMediumLightIcon } from "../light/battery-medium-light.icon";
import { BatteryMediumRegularIcon } from "../regular/battery-medium-regular.icon";
import { BatteryMediumThinIcon } from "../thin/battery-medium-thin.icon";

export const BatteryMediumIcon = createIcon("BatteryMedium", {
  bold: BatteryMediumBoldIcon,
  duotone: BatteryMediumDuotoneIcon,
  fill: BatteryMediumFillIcon,
  light: BatteryMediumLightIcon,
  regular: BatteryMediumRegularIcon,
  thin: BatteryMediumThinIcon,
});
