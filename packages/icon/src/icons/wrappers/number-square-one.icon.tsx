import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareOneBoldIcon } from "../bold/number-square-one-bold.icon";
import { NumberSquareOneDuotoneIcon } from "../duotone/number-square-one-duotone.icon";
import { NumberSquareOneFillIcon } from "../fill/number-square-one-fill.icon";
import { NumberSquareOneLightIcon } from "../light/number-square-one-light.icon";
import { NumberSquareOneRegularIcon } from "../regular/number-square-one-regular.icon";
import { NumberSquareOneThinIcon } from "../thin/number-square-one-thin.icon";

export const NumberSquareOneIcon = createIcon("NumberSquareOne", {
  bold: NumberSquareOneBoldIcon,
  duotone: NumberSquareOneDuotoneIcon,
  fill: NumberSquareOneFillIcon,
  light: NumberSquareOneLightIcon,
  regular: NumberSquareOneRegularIcon,
  thin: NumberSquareOneThinIcon,
});
