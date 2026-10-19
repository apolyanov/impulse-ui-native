import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSquareFourBoldIcon } from "../bold/number-square-four-bold.icon";
import { NumberSquareFourDuotoneIcon } from "../duotone/number-square-four-duotone.icon";
import { NumberSquareFourFillIcon } from "../fill/number-square-four-fill.icon";
import { NumberSquareFourLightIcon } from "../light/number-square-four-light.icon";
import { NumberSquareFourRegularIcon } from "../regular/number-square-four-regular.icon";
import { NumberSquareFourThinIcon } from "../thin/number-square-four-thin.icon";

export const NumberSquareFourIcon = createIcon("NumberSquareFour", {
  bold: NumberSquareFourBoldIcon,
  duotone: NumberSquareFourDuotoneIcon,
  fill: NumberSquareFourFillIcon,
  light: NumberSquareFourLightIcon,
  regular: NumberSquareFourRegularIcon,
  thin: NumberSquareFourThinIcon,
});
