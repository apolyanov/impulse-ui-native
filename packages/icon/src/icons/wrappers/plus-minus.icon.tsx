import { createIcon } from "../../hocs/create-icon.hoc";
import { PlusMinusBoldIcon } from "../bold/plus-minus-bold.icon";
import { PlusMinusDuotoneIcon } from "../duotone/plus-minus-duotone.icon";
import { PlusMinusFillIcon } from "../fill/plus-minus-fill.icon";
import { PlusMinusLightIcon } from "../light/plus-minus-light.icon";
import { PlusMinusRegularIcon } from "../regular/plus-minus-regular.icon";
import { PlusMinusThinIcon } from "../thin/plus-minus-thin.icon";

export const PlusMinusIcon = createIcon("PlusMinus", {
  bold: PlusMinusBoldIcon,
  duotone: PlusMinusDuotoneIcon,
  fill: PlusMinusFillIcon,
  light: PlusMinusLightIcon,
  regular: PlusMinusRegularIcon,
  thin: PlusMinusThinIcon,
});
