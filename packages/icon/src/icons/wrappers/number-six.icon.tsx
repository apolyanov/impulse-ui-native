import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberSixBoldIcon } from "../bold/number-six-bold.icon";
import { NumberSixDuotoneIcon } from "../duotone/number-six-duotone.icon";
import { NumberSixFillIcon } from "../fill/number-six-fill.icon";
import { NumberSixLightIcon } from "../light/number-six-light.icon";
import { NumberSixRegularIcon } from "../regular/number-six-regular.icon";
import { NumberSixThinIcon } from "../thin/number-six-thin.icon";

export const NumberSixIcon = createIcon("NumberSix", {
  bold: NumberSixBoldIcon,
  duotone: NumberSixDuotoneIcon,
  fill: NumberSixFillIcon,
  light: NumberSixLightIcon,
  regular: NumberSixRegularIcon,
  thin: NumberSixThinIcon,
});
