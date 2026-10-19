import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleNineBoldIcon } from "../bold/number-circle-nine-bold.icon";
import { NumberCircleNineDuotoneIcon } from "../duotone/number-circle-nine-duotone.icon";
import { NumberCircleNineFillIcon } from "../fill/number-circle-nine-fill.icon";
import { NumberCircleNineLightIcon } from "../light/number-circle-nine-light.icon";
import { NumberCircleNineRegularIcon } from "../regular/number-circle-nine-regular.icon";
import { NumberCircleNineThinIcon } from "../thin/number-circle-nine-thin.icon";

export const NumberCircleNineIcon = createIcon("NumberCircleNine", {
  bold: NumberCircleNineBoldIcon,
  duotone: NumberCircleNineDuotoneIcon,
  fill: NumberCircleNineFillIcon,
  light: NumberCircleNineLightIcon,
  regular: NumberCircleNineRegularIcon,
  thin: NumberCircleNineThinIcon,
});
