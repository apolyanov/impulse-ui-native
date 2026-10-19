import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareTwoBoldIcon } from "../bold/number-square-two-bold.icon";
import { NumberSquareTwoDuotoneIcon } from "../duotone/number-square-two-duotone.icon";
import { NumberSquareTwoFillIcon } from "../fill/number-square-two-fill.icon";
import { NumberSquareTwoLightIcon } from "../light/number-square-two-light.icon";
import { NumberSquareTwoRegularIcon } from "../regular/number-square-two-regular.icon";
import { NumberSquareTwoThinIcon } from "../thin/number-square-two-thin.icon";

export const NumberSquareTwoIcon = createIcon("NumberSquareTwo", {
  bold: NumberSquareTwoBoldIcon,
  duotone: NumberSquareTwoDuotoneIcon,
  fill: NumberSquareTwoFillIcon,
  light: NumberSquareTwoLightIcon,
  regular: NumberSquareTwoRegularIcon,
  thin: NumberSquareTwoThinIcon,
});
