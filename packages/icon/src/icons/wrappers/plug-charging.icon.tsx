import { createIcon } from "../../hocs/create-icon.hoc";
import { PlugChargingBoldIcon } from "../bold/plug-charging-bold.icon";
import { PlugChargingDuotoneIcon } from "../duotone/plug-charging-duotone.icon";
import { PlugChargingFillIcon } from "../fill/plug-charging-fill.icon";
import { PlugChargingLightIcon } from "../light/plug-charging-light.icon";
import { PlugChargingRegularIcon } from "../regular/plug-charging-regular.icon";
import { PlugChargingThinIcon } from "../thin/plug-charging-thin.icon";

export const PlugChargingIcon = createIcon("PlugCharging", {
  bold: PlugChargingBoldIcon,
  duotone: PlugChargingDuotoneIcon,
  fill: PlugChargingFillIcon,
  light: PlugChargingLightIcon,
  regular: PlugChargingRegularIcon,
  thin: PlugChargingThinIcon,
});
