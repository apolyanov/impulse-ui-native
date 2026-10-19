import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleSixBoldIcon } from "../bold/number-circle-six-bold.icon";
import { NumberCircleSixDuotoneIcon } from "../duotone/number-circle-six-duotone.icon";
import { NumberCircleSixFillIcon } from "../fill/number-circle-six-fill.icon";
import { NumberCircleSixLightIcon } from "../light/number-circle-six-light.icon";
import { NumberCircleSixRegularIcon } from "../regular/number-circle-six-regular.icon";
import { NumberCircleSixThinIcon } from "../thin/number-circle-six-thin.icon";

export const NumberCircleSixIcon = createIcon("NumberCircleSix", {
  bold: NumberCircleSixBoldIcon,
  duotone: NumberCircleSixDuotoneIcon,
  fill: NumberCircleSixFillIcon,
  light: NumberCircleSixLightIcon,
  regular: NumberCircleSixRegularIcon,
  thin: NumberCircleSixThinIcon,
});
