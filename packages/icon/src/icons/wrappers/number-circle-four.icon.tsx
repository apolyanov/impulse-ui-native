import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberCircleFourBoldIcon } from "../bold/number-circle-four-bold.icon";
import { NumberCircleFourDuotoneIcon } from "../duotone/number-circle-four-duotone.icon";
import { NumberCircleFourFillIcon } from "../fill/number-circle-four-fill.icon";
import { NumberCircleFourLightIcon } from "../light/number-circle-four-light.icon";
import { NumberCircleFourRegularIcon } from "../regular/number-circle-four-regular.icon";
import { NumberCircleFourThinIcon } from "../thin/number-circle-four-thin.icon";

export const NumberCircleFourIcon = createIcon("NumberCircleFour", {
  bold: NumberCircleFourBoldIcon,
  duotone: NumberCircleFourDuotoneIcon,
  fill: NumberCircleFourFillIcon,
  light: NumberCircleFourLightIcon,
  regular: NumberCircleFourRegularIcon,
  thin: NumberCircleFourThinIcon,
});
