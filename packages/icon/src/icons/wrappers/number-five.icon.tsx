import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberFiveBoldIcon } from "../bold/number-five-bold.icon";
import { NumberFiveDuotoneIcon } from "../duotone/number-five-duotone.icon";
import { NumberFiveFillIcon } from "../fill/number-five-fill.icon";
import { NumberFiveLightIcon } from "../light/number-five-light.icon";
import { NumberFiveRegularIcon } from "../regular/number-five-regular.icon";
import { NumberFiveThinIcon } from "../thin/number-five-thin.icon";

export const NumberFiveIcon = createIcon("NumberFive", {
  bold: NumberFiveBoldIcon,
  duotone: NumberFiveDuotoneIcon,
  fill: NumberFiveFillIcon,
  light: NumberFiveLightIcon,
  regular: NumberFiveRegularIcon,
  thin: NumberFiveThinIcon,
});
