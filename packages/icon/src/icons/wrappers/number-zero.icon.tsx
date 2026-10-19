import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberZeroBoldIcon } from "../bold/number-zero-bold.icon";
import { NumberZeroDuotoneIcon } from "../duotone/number-zero-duotone.icon";
import { NumberZeroFillIcon } from "../fill/number-zero-fill.icon";
import { NumberZeroLightIcon } from "../light/number-zero-light.icon";
import { NumberZeroRegularIcon } from "../regular/number-zero-regular.icon";
import { NumberZeroThinIcon } from "../thin/number-zero-thin.icon";

export const NumberZeroIcon = createIcon("NumberZero", {
  bold: NumberZeroBoldIcon,
  duotone: NumberZeroDuotoneIcon,
  fill: NumberZeroFillIcon,
  light: NumberZeroLightIcon,
  regular: NumberZeroRegularIcon,
  thin: NumberZeroThinIcon,
});
