import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassLowBoldIcon } from "../bold/hourglass-low-bold.icon";
import { HourglassLowDuotoneIcon } from "../duotone/hourglass-low-duotone.icon";
import { HourglassLowFillIcon } from "../fill/hourglass-low-fill.icon";
import { HourglassLowLightIcon } from "../light/hourglass-low-light.icon";
import { HourglassLowRegularIcon } from "../regular/hourglass-low-regular.icon";
import { HourglassLowThinIcon } from "../thin/hourglass-low-thin.icon";

export const HourglassLowIcon = createIcon("HourglassLow", {
  bold: HourglassLowBoldIcon,
  duotone: HourglassLowDuotoneIcon,
  fill: HourglassLowFillIcon,
  light: HourglassLowLightIcon,
  regular: HourglassLowRegularIcon,
  thin: HourglassLowThinIcon,
});
