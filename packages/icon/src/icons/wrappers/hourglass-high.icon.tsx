import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassHighBoldIcon } from "../bold/hourglass-high-bold.icon";
import { HourglassHighDuotoneIcon } from "../duotone/hourglass-high-duotone.icon";
import { HourglassHighFillIcon } from "../fill/hourglass-high-fill.icon";
import { HourglassHighLightIcon } from "../light/hourglass-high-light.icon";
import { HourglassHighRegularIcon } from "../regular/hourglass-high-regular.icon";
import { HourglassHighThinIcon } from "../thin/hourglass-high-thin.icon";

export const HourglassHighIcon = createIcon("HourglassHigh", {
  bold: HourglassHighBoldIcon,
  duotone: HourglassHighDuotoneIcon,
  fill: HourglassHighFillIcon,
  light: HourglassHighLightIcon,
  regular: HourglassHighRegularIcon,
  thin: HourglassHighThinIcon,
});
