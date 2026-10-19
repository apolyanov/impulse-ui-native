import { createIcon } from "../../hocs/create-icon.hoc";
import { HourglassBoldIcon } from "../bold/hourglass-bold.icon";
import { HourglassDuotoneIcon } from "../duotone/hourglass-duotone.icon";
import { HourglassFillIcon } from "../fill/hourglass-fill.icon";
import { HourglassLightIcon } from "../light/hourglass-light.icon";
import { HourglassRegularIcon } from "../regular/hourglass-regular.icon";
import { HourglassThinIcon } from "../thin/hourglass-thin.icon";

export const HourglassIcon = createIcon("Hourglass", {
  bold: HourglassBoldIcon,
  duotone: HourglassDuotoneIcon,
  fill: HourglassFillIcon,
  light: HourglassLightIcon,
  regular: HourglassRegularIcon,
  thin: HourglassThinIcon,
});
