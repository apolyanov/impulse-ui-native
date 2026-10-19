import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryEmptyBoldIcon } from "../bold/battery-empty-bold.icon";
import { BatteryEmptyDuotoneIcon } from "../duotone/battery-empty-duotone.icon";
import { BatteryEmptyFillIcon } from "../fill/battery-empty-fill.icon";
import { BatteryEmptyLightIcon } from "../light/battery-empty-light.icon";
import { BatteryEmptyRegularIcon } from "../regular/battery-empty-regular.icon";
import { BatteryEmptyThinIcon } from "../thin/battery-empty-thin.icon";

export const BatteryEmptyIcon = createIcon("BatteryEmpty", {
  bold: BatteryEmptyBoldIcon,
  duotone: BatteryEmptyDuotoneIcon,
  fill: BatteryEmptyFillIcon,
  light: BatteryEmptyLightIcon,
  regular: BatteryEmptyRegularIcon,
  thin: BatteryEmptyThinIcon,
});
