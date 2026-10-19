import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberTwoBoldIcon } from "../bold/number-two-bold.icon";
import { NumberTwoDuotoneIcon } from "../duotone/number-two-duotone.icon";
import { NumberTwoFillIcon } from "../fill/number-two-fill.icon";
import { NumberTwoLightIcon } from "../light/number-two-light.icon";
import { NumberTwoRegularIcon } from "../regular/number-two-regular.icon";
import { NumberTwoThinIcon } from "../thin/number-two-thin.icon";

export const NumberTwoIcon = createIcon("NumberTwo", {
  bold: NumberTwoBoldIcon,
  duotone: NumberTwoDuotoneIcon,
  fill: NumberTwoFillIcon,
  light: NumberTwoLightIcon,
  regular: NumberTwoRegularIcon,
  thin: NumberTwoThinIcon,
});
