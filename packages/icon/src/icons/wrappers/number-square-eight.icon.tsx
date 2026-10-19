import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareEightBoldIcon } from "../bold/number-square-eight-bold.icon";
import { NumberSquareEightDuotoneIcon } from "../duotone/number-square-eight-duotone.icon";
import { NumberSquareEightFillIcon } from "../fill/number-square-eight-fill.icon";
import { NumberSquareEightLightIcon } from "../light/number-square-eight-light.icon";
import { NumberSquareEightRegularIcon } from "../regular/number-square-eight-regular.icon";
import { NumberSquareEightThinIcon } from "../thin/number-square-eight-thin.icon";

export const NumberSquareEightIcon = createIcon("NumberSquareEight", {
  bold: NumberSquareEightBoldIcon,
  duotone: NumberSquareEightDuotoneIcon,
  fill: NumberSquareEightFillIcon,
  light: NumberSquareEightLightIcon,
  regular: NumberSquareEightRegularIcon,
  thin: NumberSquareEightThinIcon,
});
