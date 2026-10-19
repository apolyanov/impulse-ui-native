import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberEightBoldIcon } from "../bold/number-eight-bold.icon";
import { NumberEightDuotoneIcon } from "../duotone/number-eight-duotone.icon";
import { NumberEightFillIcon } from "../fill/number-eight-fill.icon";
import { NumberEightLightIcon } from "../light/number-eight-light.icon";
import { NumberEightRegularIcon } from "../regular/number-eight-regular.icon";
import { NumberEightThinIcon } from "../thin/number-eight-thin.icon";

export const NumberEightIcon = createIcon("NumberEight", {
  bold: NumberEightBoldIcon,
  duotone: NumberEightDuotoneIcon,
  fill: NumberEightFillIcon,
  light: NumberEightLightIcon,
  regular: NumberEightRegularIcon,
  thin: NumberEightThinIcon,
});
