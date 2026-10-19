import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassMediumBoldIcon } from "../bold/hourglass-medium-bold.icon";
import { HourglassMediumDuotoneIcon } from "../duotone/hourglass-medium-duotone.icon";
import { HourglassMediumFillIcon } from "../fill/hourglass-medium-fill.icon";
import { HourglassMediumLightIcon } from "../light/hourglass-medium-light.icon";
import { HourglassMediumRegularIcon } from "../regular/hourglass-medium-regular.icon";
import { HourglassMediumThinIcon } from "../thin/hourglass-medium-thin.icon";

export const HourglassMediumIcon = createIcon("HourglassMedium", {
  bold: HourglassMediumBoldIcon,
  duotone: HourglassMediumDuotoneIcon,
  fill: HourglassMediumFillIcon,
  light: HourglassMediumLightIcon,
  regular: HourglassMediumRegularIcon,
  thin: HourglassMediumThinIcon,
});
