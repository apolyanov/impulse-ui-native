import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleSevenBoldIcon } from "../bold/number-circle-seven-bold.icon";
import { NumberCircleSevenDuotoneIcon } from "../duotone/number-circle-seven-duotone.icon";
import { NumberCircleSevenFillIcon } from "../fill/number-circle-seven-fill.icon";
import { NumberCircleSevenLightIcon } from "../light/number-circle-seven-light.icon";
import { NumberCircleSevenRegularIcon } from "../regular/number-circle-seven-regular.icon";
import { NumberCircleSevenThinIcon } from "../thin/number-circle-seven-thin.icon";

export const NumberCircleSevenIcon = createIcon("NumberCircleSeven", {
  bold: NumberCircleSevenBoldIcon,
  duotone: NumberCircleSevenDuotoneIcon,
  fill: NumberCircleSevenFillIcon,
  light: NumberCircleSevenLightIcon,
  regular: NumberCircleSevenRegularIcon,
  thin: NumberCircleSevenThinIcon,
});
