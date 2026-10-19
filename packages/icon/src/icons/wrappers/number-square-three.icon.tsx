import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareThreeBoldIcon } from "../bold/number-square-three-bold.icon";
import { NumberSquareThreeDuotoneIcon } from "../duotone/number-square-three-duotone.icon";
import { NumberSquareThreeFillIcon } from "../fill/number-square-three-fill.icon";
import { NumberSquareThreeLightIcon } from "../light/number-square-three-light.icon";
import { NumberSquareThreeRegularIcon } from "../regular/number-square-three-regular.icon";
import { NumberSquareThreeThinIcon } from "../thin/number-square-three-thin.icon";

export const NumberSquareThreeIcon = createIcon("NumberSquareThree", {
  bold: NumberSquareThreeBoldIcon,
  duotone: NumberSquareThreeDuotoneIcon,
  fill: NumberSquareThreeFillIcon,
  light: NumberSquareThreeLightIcon,
  regular: NumberSquareThreeRegularIcon,
  thin: NumberSquareThreeThinIcon,
});
