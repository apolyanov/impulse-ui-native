import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleThreeBoldIcon } from "../bold/number-circle-three-bold.icon";
import { NumberCircleThreeDuotoneIcon } from "../duotone/number-circle-three-duotone.icon";
import { NumberCircleThreeFillIcon } from "../fill/number-circle-three-fill.icon";
import { NumberCircleThreeLightIcon } from "../light/number-circle-three-light.icon";
import { NumberCircleThreeRegularIcon } from "../regular/number-circle-three-regular.icon";
import { NumberCircleThreeThinIcon } from "../thin/number-circle-three-thin.icon";

export const NumberCircleThreeIcon = createIcon("NumberCircleThree", {
  bold: NumberCircleThreeBoldIcon,
  duotone: NumberCircleThreeDuotoneIcon,
  fill: NumberCircleThreeFillIcon,
  light: NumberCircleThreeLightIcon,
  regular: NumberCircleThreeRegularIcon,
  thin: NumberCircleThreeThinIcon,
});
