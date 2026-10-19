import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassSimpleHighBoldIcon } from "../bold/hourglass-simple-high-bold.icon";
import { HourglassSimpleHighDuotoneIcon } from "../duotone/hourglass-simple-high-duotone.icon";
import { HourglassSimpleHighFillIcon } from "../fill/hourglass-simple-high-fill.icon";
import { HourglassSimpleHighLightIcon } from "../light/hourglass-simple-high-light.icon";
import { HourglassSimpleHighRegularIcon } from "../regular/hourglass-simple-high-regular.icon";
import { HourglassSimpleHighThinIcon } from "../thin/hourglass-simple-high-thin.icon";

export const HourglassSimpleHighIcon = createIcon("HourglassSimpleHigh", {
  bold: HourglassSimpleHighBoldIcon,
  duotone: HourglassSimpleHighDuotoneIcon,
  fill: HourglassSimpleHighFillIcon,
  light: HourglassSimpleHighLightIcon,
  regular: HourglassSimpleHighRegularIcon,
  thin: HourglassSimpleHighThinIcon,
});
