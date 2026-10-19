import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSevenBoldIcon } from "../bold/number-seven-bold.icon";
import { NumberSevenDuotoneIcon } from "../duotone/number-seven-duotone.icon";
import { NumberSevenFillIcon } from "../fill/number-seven-fill.icon";
import { NumberSevenLightIcon } from "../light/number-seven-light.icon";
import { NumberSevenRegularIcon } from "../regular/number-seven-regular.icon";
import { NumberSevenThinIcon } from "../thin/number-seven-thin.icon";

export const NumberSevenIcon = createIcon("NumberSeven", {
  bold: NumberSevenBoldIcon,
  duotone: NumberSevenDuotoneIcon,
  fill: NumberSevenFillIcon,
  light: NumberSevenLightIcon,
  regular: NumberSevenRegularIcon,
  thin: NumberSevenThinIcon,
});
