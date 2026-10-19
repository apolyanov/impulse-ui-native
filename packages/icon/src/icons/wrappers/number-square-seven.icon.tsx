import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareSevenBoldIcon } from "../bold/number-square-seven-bold.icon";
import { NumberSquareSevenDuotoneIcon } from "../duotone/number-square-seven-duotone.icon";
import { NumberSquareSevenFillIcon } from "../fill/number-square-seven-fill.icon";
import { NumberSquareSevenLightIcon } from "../light/number-square-seven-light.icon";
import { NumberSquareSevenRegularIcon } from "../regular/number-square-seven-regular.icon";
import { NumberSquareSevenThinIcon } from "../thin/number-square-seven-thin.icon";

export const NumberSquareSevenIcon = createIcon("NumberSquareSeven", {
  bold: NumberSquareSevenBoldIcon,
  duotone: NumberSquareSevenDuotoneIcon,
  fill: NumberSquareSevenFillIcon,
  light: NumberSquareSevenLightIcon,
  regular: NumberSquareSevenRegularIcon,
  thin: NumberSquareSevenThinIcon,
});
