import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryChargingVerticalBoldIcon } from "../bold/battery-charging-vertical-bold.icon";
import { BatteryChargingVerticalDuotoneIcon } from "../duotone/battery-charging-vertical-duotone.icon";
import { BatteryChargingVerticalFillIcon } from "../fill/battery-charging-vertical-fill.icon";
import { BatteryChargingVerticalLightIcon } from "../light/battery-charging-vertical-light.icon";
import { BatteryChargingVerticalRegularIcon } from "../regular/battery-charging-vertical-regular.icon";
import { BatteryChargingVerticalThinIcon } from "../thin/battery-charging-vertical-thin.icon";

export const BatteryChargingVerticalIcon = createIcon(
  "BatteryChargingVertical",
  {
    bold: BatteryChargingVerticalBoldIcon,
    duotone: BatteryChargingVerticalDuotoneIcon,
    fill: BatteryChargingVerticalFillIcon,
    light: BatteryChargingVerticalLightIcon,
    regular: BatteryChargingVerticalRegularIcon,
    thin: BatteryChargingVerticalThinIcon,
  },
);
