import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareZeroBoldIcon } from "../bold/number-square-zero-bold.icon";
import { NumberSquareZeroDuotoneIcon } from "../duotone/number-square-zero-duotone.icon";
import { NumberSquareZeroFillIcon } from "../fill/number-square-zero-fill.icon";
import { NumberSquareZeroLightIcon } from "../light/number-square-zero-light.icon";
import { NumberSquareZeroRegularIcon } from "../regular/number-square-zero-regular.icon";
import { NumberSquareZeroThinIcon } from "../thin/number-square-zero-thin.icon";

export const NumberSquareZeroIcon = createIcon("NumberSquareZero", {
  bold: NumberSquareZeroBoldIcon,
  duotone: NumberSquareZeroDuotoneIcon,
  fill: NumberSquareZeroFillIcon,
  light: NumberSquareZeroLightIcon,
  regular: NumberSquareZeroRegularIcon,
  thin: NumberSquareZeroThinIcon,
});
