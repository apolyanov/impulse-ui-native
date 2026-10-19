import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassSimpleBoldIcon } from "../bold/hourglass-simple-bold.icon";
import { HourglassSimpleDuotoneIcon } from "../duotone/hourglass-simple-duotone.icon";
import { HourglassSimpleFillIcon } from "../fill/hourglass-simple-fill.icon";
import { HourglassSimpleLightIcon } from "../light/hourglass-simple-light.icon";
import { HourglassSimpleRegularIcon } from "../regular/hourglass-simple-regular.icon";
import { HourglassSimpleThinIcon } from "../thin/hourglass-simple-thin.icon";

export const HourglassSimpleIcon = createIcon("HourglassSimple", {
  bold: HourglassSimpleBoldIcon,
  duotone: HourglassSimpleDuotoneIcon,
  fill: HourglassSimpleFillIcon,
  light: HourglassSimpleLightIcon,
  regular: HourglassSimpleRegularIcon,
  thin: HourglassSimpleThinIcon,
});
