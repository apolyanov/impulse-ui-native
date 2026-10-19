import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareNineBoldIcon } from "../bold/number-square-nine-bold.icon";
import { NumberSquareNineDuotoneIcon } from "../duotone/number-square-nine-duotone.icon";
import { NumberSquareNineFillIcon } from "../fill/number-square-nine-fill.icon";
import { NumberSquareNineLightIcon } from "../light/number-square-nine-light.icon";
import { NumberSquareNineRegularIcon } from "../regular/number-square-nine-regular.icon";
import { NumberSquareNineThinIcon } from "../thin/number-square-nine-thin.icon";

export const NumberSquareNineIcon = createIcon("NumberSquareNine", {
  bold: NumberSquareNineBoldIcon,
  duotone: NumberSquareNineDuotoneIcon,
  fill: NumberSquareNineFillIcon,
  light: NumberSquareNineLightIcon,
  regular: NumberSquareNineRegularIcon,
  thin: NumberSquareNineThinIcon,
});
