import { createIcon } from "../../hocs/create-icon.hoc";
import { LetterCircleVBoldIcon } from "../bold/letter-circle-v-bold.icon";
import { LetterCircleVDuotoneIcon } from "../duotone/letter-circle-v-duotone.icon";
import { LetterCircleVFillIcon } from "../fill/letter-circle-v-fill.icon";
import { LetterCircleVLightIcon } from "../light/letter-circle-v-light.icon";
import { LetterCircleVRegularIcon } from "../regular/letter-circle-v-regular.icon";
import { LetterCircleVThinIcon } from "../thin/letter-circle-v-thin.icon";

export const LetterCircleVIcon = createIcon("LetterCircleV", {
  bold: LetterCircleVBoldIcon,
  duotone: LetterCircleVDuotoneIcon,
  fill: LetterCircleVFillIcon,
  light: LetterCircleVLightIcon,
  regular: LetterCircleVRegularIcon,
  thin: LetterCircleVThinIcon,
});
