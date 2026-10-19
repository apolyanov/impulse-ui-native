import { createIcon } from "../../hocs/create-icon.hoc";
import { HandPalmBoldIcon } from "../bold/hand-palm-bold.icon";
import { HandPalmDuotoneIcon } from "../duotone/hand-palm-duotone.icon";
import { HandPalmFillIcon } from "../fill/hand-palm-fill.icon";
import { HandPalmLightIcon } from "../light/hand-palm-light.icon";
import { HandPalmRegularIcon } from "../regular/hand-palm-regular.icon";
import { HandPalmThinIcon } from "../thin/hand-palm-thin.icon";

export const HandPalmIcon = createIcon("HandPalm", {
  bold: HandPalmBoldIcon,
  duotone: HandPalmDuotoneIcon,
  fill: HandPalmFillIcon,
  light: HandPalmLightIcon,
  regular: HandPalmRegularIcon,
  thin: HandPalmThinIcon,
});
