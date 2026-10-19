import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyXEyesBoldIcon } from "../bold/smiley-x-eyes-bold.icon";
import { SmileyXEyesDuotoneIcon } from "../duotone/smiley-x-eyes-duotone.icon";
import { SmileyXEyesFillIcon } from "../fill/smiley-x-eyes-fill.icon";
import { SmileyXEyesLightIcon } from "../light/smiley-x-eyes-light.icon";
import { SmileyXEyesRegularIcon } from "../regular/smiley-x-eyes-regular.icon";
import { SmileyXEyesThinIcon } from "../thin/smiley-x-eyes-thin.icon";

export const SmileyXEyesIcon = createIcon("SmileyXEyes", {
  bold: SmileyXEyesBoldIcon,
  duotone: SmileyXEyesDuotoneIcon,
  fill: SmileyXEyesFillIcon,
  light: SmileyXEyesLightIcon,
  regular: SmileyXEyesRegularIcon,
  thin: SmileyXEyesThinIcon,
});
