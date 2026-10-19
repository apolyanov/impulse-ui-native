import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleTwoBoldIcon } from "../bold/number-circle-two-bold.icon";
import { NumberCircleTwoDuotoneIcon } from "../duotone/number-circle-two-duotone.icon";
import { NumberCircleTwoFillIcon } from "../fill/number-circle-two-fill.icon";
import { NumberCircleTwoLightIcon } from "../light/number-circle-two-light.icon";
import { NumberCircleTwoRegularIcon } from "../regular/number-circle-two-regular.icon";
import { NumberCircleTwoThinIcon } from "../thin/number-circle-two-thin.icon";

export const NumberCircleTwoIcon = createIcon("NumberCircleTwo", {
  bold: NumberCircleTwoBoldIcon,
  duotone: NumberCircleTwoDuotoneIcon,
  fill: NumberCircleTwoFillIcon,
  light: NumberCircleTwoLightIcon,
  regular: NumberCircleTwoRegularIcon,
  thin: NumberCircleTwoThinIcon,
});
