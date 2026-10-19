import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleZeroBoldIcon } from "../bold/number-circle-zero-bold.icon";
import { NumberCircleZeroDuotoneIcon } from "../duotone/number-circle-zero-duotone.icon";
import { NumberCircleZeroFillIcon } from "../fill/number-circle-zero-fill.icon";
import { NumberCircleZeroLightIcon } from "../light/number-circle-zero-light.icon";
import { NumberCircleZeroRegularIcon } from "../regular/number-circle-zero-regular.icon";
import { NumberCircleZeroThinIcon } from "../thin/number-circle-zero-thin.icon";

export const NumberCircleZeroIcon = createIcon("NumberCircleZero", {
  bold: NumberCircleZeroBoldIcon,
  duotone: NumberCircleZeroDuotoneIcon,
  fill: NumberCircleZeroFillIcon,
  light: NumberCircleZeroLightIcon,
  regular: NumberCircleZeroRegularIcon,
  thin: NumberCircleZeroThinIcon,
});
