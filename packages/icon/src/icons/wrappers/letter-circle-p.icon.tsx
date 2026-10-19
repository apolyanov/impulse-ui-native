import { createIcon } from "../../hocs/create-icon.hoc";
import { LetterCirclePBoldIcon } from "../bold/letter-circle-p-bold.icon";
import { LetterCirclePDuotoneIcon } from "../duotone/letter-circle-p-duotone.icon";
import { LetterCirclePFillIcon } from "../fill/letter-circle-p-fill.icon";
import { LetterCirclePLightIcon } from "../light/letter-circle-p-light.icon";
import { LetterCirclePRegularIcon } from "../regular/letter-circle-p-regular.icon";
import { LetterCirclePThinIcon } from "../thin/letter-circle-p-thin.icon";

export const LetterCirclePIcon = createIcon("LetterCircleP", {
  bold: LetterCirclePBoldIcon,
  duotone: LetterCirclePDuotoneIcon,
  fill: LetterCirclePFillIcon,
  light: LetterCirclePLightIcon,
  regular: LetterCirclePRegularIcon,
  thin: LetterCirclePThinIcon,
});
