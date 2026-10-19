import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleEightBoldIcon } from "../bold/number-circle-eight-bold.icon";
import { NumberCircleEightDuotoneIcon } from "../duotone/number-circle-eight-duotone.icon";
import { NumberCircleEightFillIcon } from "../fill/number-circle-eight-fill.icon";
import { NumberCircleEightLightIcon } from "../light/number-circle-eight-light.icon";
import { NumberCircleEightRegularIcon } from "../regular/number-circle-eight-regular.icon";
import { NumberCircleEightThinIcon } from "../thin/number-circle-eight-thin.icon";

export const NumberCircleEightIcon = createIcon("NumberCircleEight", {
  bold: NumberCircleEightBoldIcon,
  duotone: NumberCircleEightDuotoneIcon,
  fill: NumberCircleEightFillIcon,
  light: NumberCircleEightLightIcon,
  regular: NumberCircleEightRegularIcon,
  thin: NumberCircleEightThinIcon,
});
