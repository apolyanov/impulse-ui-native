import { createIcon } from "../../hocs/create-icon.hoc";
import { MinusBoldIcon } from "../bold/minus-bold.icon";
import { MinusDuotoneIcon } from "../duotone/minus-duotone.icon";
import { MinusFillIcon } from "../fill/minus-fill.icon";
import { MinusLightIcon } from "../light/minus-light.icon";
import { MinusRegularIcon } from "../regular/minus-regular.icon";
import { MinusThinIcon } from "../thin/minus-thin.icon";

export const MinusIcon = createIcon("Minus", {
  bold: MinusBoldIcon,
  duotone: MinusDuotoneIcon,
  fill: MinusFillIcon,
  light: MinusLightIcon,
  regular: MinusRegularIcon,
  thin: MinusThinIcon,
});
