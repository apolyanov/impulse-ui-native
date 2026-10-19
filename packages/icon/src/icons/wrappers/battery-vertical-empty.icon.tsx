import { createIcon } from "../../hocs/create-icon.hoc";
import { BatteryVerticalEmptyBoldIcon } from "../bold/battery-vertical-empty-bold.icon";
import { BatteryVerticalEmptyDuotoneIcon } from "../duotone/battery-vertical-empty-duotone.icon";
import { BatteryVerticalEmptyFillIcon } from "../fill/battery-vertical-empty-fill.icon";
import { BatteryVerticalEmptyLightIcon } from "../light/battery-vertical-empty-light.icon";
import { BatteryVerticalEmptyRegularIcon } from "../regular/battery-vertical-empty-regular.icon";
import { BatteryVerticalEmptyThinIcon } from "../thin/battery-vertical-empty-thin.icon";

export const BatteryVerticalEmptyIcon = createIcon("BatteryVerticalEmpty", {
  bold: BatteryVerticalEmptyBoldIcon,
  duotone: BatteryVerticalEmptyDuotoneIcon,
  fill: BatteryVerticalEmptyFillIcon,
  light: BatteryVerticalEmptyLightIcon,
  regular: BatteryVerticalEmptyRegularIcon,
  thin: BatteryVerticalEmptyThinIcon,
});
