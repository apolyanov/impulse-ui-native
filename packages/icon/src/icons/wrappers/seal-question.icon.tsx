import { createIcon } from "../../hocs/create-icon.hoc";
import { SealQuestionBoldIcon } from "../bold/seal-question-bold.icon";
import { SealQuestionDuotoneIcon } from "../duotone/seal-question-duotone.icon";
import { SealQuestionFillIcon } from "../fill/seal-question-fill.icon";
import { SealQuestionLightIcon } from "../light/seal-question-light.icon";
import { SealQuestionRegularIcon } from "../regular/seal-question-regular.icon";
import { SealQuestionThinIcon } from "../thin/seal-question-thin.icon";

export const SealQuestionIcon = createIcon("SealQuestion", {
  bold: SealQuestionBoldIcon,
  duotone: SealQuestionDuotoneIcon,
  fill: SealQuestionFillIcon,
  light: SealQuestionLightIcon,
  regular: SealQuestionRegularIcon,
  thin: SealQuestionThinIcon,
});
