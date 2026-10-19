import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassSimpleLowBoldIcon } from "../bold/hourglass-simple-low-bold.icon";
import { HourglassSimpleLowDuotoneIcon } from "../duotone/hourglass-simple-low-duotone.icon";
import { HourglassSimpleLowFillIcon } from "../fill/hourglass-simple-low-fill.icon";
import { HourglassSimpleLowLightIcon } from "../light/hourglass-simple-low-light.icon";
import { HourglassSimpleLowRegularIcon } from "../regular/hourglass-simple-low-regular.icon";
import { HourglassSimpleLowThinIcon } from "../thin/hourglass-simple-low-thin.icon";

export const HourglassSimpleLowIcon = createIcon("HourglassSimpleLow", {
  bold: HourglassSimpleLowBoldIcon,
  duotone: HourglassSimpleLowDuotoneIcon,
  fill: HourglassSimpleLowFillIcon,
  light: HourglassSimpleLowLightIcon,
  regular: HourglassSimpleLowRegularIcon,
  thin: HourglassSimpleLowThinIcon,
});
