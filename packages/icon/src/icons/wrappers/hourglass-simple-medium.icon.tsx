import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassSimpleMediumBoldIcon } from "../bold/hourglass-simple-medium-bold.icon";
import { HourglassSimpleMediumDuotoneIcon } from "../duotone/hourglass-simple-medium-duotone.icon";
import { HourglassSimpleMediumFillIcon } from "../fill/hourglass-simple-medium-fill.icon";
import { HourglassSimpleMediumLightIcon } from "../light/hourglass-simple-medium-light.icon";
import { HourglassSimpleMediumRegularIcon } from "../regular/hourglass-simple-medium-regular.icon";
import { HourglassSimpleMediumThinIcon } from "../thin/hourglass-simple-medium-thin.icon";

export const HourglassSimpleMediumIcon = createIcon("HourglassSimpleMedium", {
  bold: HourglassSimpleMediumBoldIcon,
  duotone: HourglassSimpleMediumDuotoneIcon,
  fill: HourglassSimpleMediumFillIcon,
  light: HourglassSimpleMediumLightIcon,
  regular: HourglassSimpleMediumRegularIcon,
  thin: HourglassSimpleMediumThinIcon,
});
