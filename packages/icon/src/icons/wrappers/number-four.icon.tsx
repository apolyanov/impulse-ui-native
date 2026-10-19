import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberFourBoldIcon } from "../bold/number-four-bold.icon";
import { NumberFourDuotoneIcon } from "../duotone/number-four-duotone.icon";
import { NumberFourFillIcon } from "../fill/number-four-fill.icon";
import { NumberFourLightIcon } from "../light/number-four-light.icon";
import { NumberFourRegularIcon } from "../regular/number-four-regular.icon";
import { NumberFourThinIcon } from "../thin/number-four-thin.icon";

export const NumberFourIcon = createIcon("NumberFour", {
  bold: NumberFourBoldIcon,
  duotone: NumberFourDuotoneIcon,
  fill: NumberFourFillIcon,
  light: NumberFourLightIcon,
  regular: NumberFourRegularIcon,
  thin: NumberFourThinIcon,
});
