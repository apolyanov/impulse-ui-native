import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareSixBoldIcon } from "../bold/number-square-six-bold.icon";
import { NumberSquareSixDuotoneIcon } from "../duotone/number-square-six-duotone.icon";
import { NumberSquareSixFillIcon } from "../fill/number-square-six-fill.icon";
import { NumberSquareSixLightIcon } from "../light/number-square-six-light.icon";
import { NumberSquareSixRegularIcon } from "../regular/number-square-six-regular.icon";
import { NumberSquareSixThinIcon } from "../thin/number-square-six-thin.icon";

export const NumberSquareSixIcon = createIcon("NumberSquareSix", {
  bold: NumberSquareSixBoldIcon,
  duotone: NumberSquareSixDuotoneIcon,
  fill: NumberSquareSixFillIcon,
  light: NumberSquareSixLightIcon,
  regular: NumberSquareSixRegularIcon,
  thin: NumberSquareSixThinIcon,
});
