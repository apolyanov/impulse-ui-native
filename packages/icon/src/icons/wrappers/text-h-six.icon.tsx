import { createIcon } from "../../hocs/create-icon.hoc";
import { TextHSixBoldIcon } from "../bold/text-h-six-bold.icon";
import { TextHSixDuotoneIcon } from "../duotone/text-h-six-duotone.icon";
import { TextHSixFillIcon } from "../fill/text-h-six-fill.icon";
import { TextHSixLightIcon } from "../light/text-h-six-light.icon";
import { TextHSixRegularIcon } from "../regular/text-h-six-regular.icon";
import { TextHSixThinIcon } from "../thin/text-h-six-thin.icon";

export const TextHSixIcon = createIcon("TextHSix", {
  bold: TextHSixBoldIcon,
  duotone: TextHSixDuotoneIcon,
  fill: TextHSixFillIcon,
  light: TextHSixLightIcon,
  regular: TextHSixRegularIcon,
  thin: TextHSixThinIcon,
});
