import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleFiveBoldIcon } from "../bold/number-circle-five-bold.icon";
import { NumberCircleFiveDuotoneIcon } from "../duotone/number-circle-five-duotone.icon";
import { NumberCircleFiveFillIcon } from "../fill/number-circle-five-fill.icon";
import { NumberCircleFiveLightIcon } from "../light/number-circle-five-light.icon";
import { NumberCircleFiveRegularIcon } from "../regular/number-circle-five-regular.icon";
import { NumberCircleFiveThinIcon } from "../thin/number-circle-five-thin.icon";

export const NumberCircleFiveIcon = createIcon("NumberCircleFive", {
  bold: NumberCircleFiveBoldIcon,
  duotone: NumberCircleFiveDuotoneIcon,
  fill: NumberCircleFiveFillIcon,
  light: NumberCircleFiveLightIcon,
  regular: NumberCircleFiveRegularIcon,
  thin: NumberCircleFiveThinIcon,
});
