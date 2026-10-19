import { createIcon } from "../../hocs/create-icon.hoc";
import { HandWavingBoldIcon } from "../bold/hand-waving-bold.icon";
import { HandWavingDuotoneIcon } from "../duotone/hand-waving-duotone.icon";
import { HandWavingFillIcon } from "../fill/hand-waving-fill.icon";
import { HandWavingLightIcon } from "../light/hand-waving-light.icon";
import { HandWavingRegularIcon } from "../regular/hand-waving-regular.icon";
import { HandWavingThinIcon } from "../thin/hand-waving-thin.icon";

export const HandWavingIcon = createIcon("HandWaving", {
  bold: HandWavingBoldIcon,
  duotone: HandWavingDuotoneIcon,
  fill: HandWavingFillIcon,
  light: HandWavingLightIcon,
  regular: HandWavingRegularIcon,
  thin: HandWavingThinIcon,
});
