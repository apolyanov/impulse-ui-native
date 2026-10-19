import { createIcon } from "../../hocs/create-icon.hoc";
import { QuestionMarkBoldIcon } from "../bold/question-mark-bold.icon";
import { QuestionMarkDuotoneIcon } from "../duotone/question-mark-duotone.icon";
import { QuestionMarkFillIcon } from "../fill/question-mark-fill.icon";
import { QuestionMarkLightIcon } from "../light/question-mark-light.icon";
import { QuestionMarkRegularIcon } from "../regular/question-mark-regular.icon";
import { QuestionMarkThinIcon } from "../thin/question-mark-thin.icon";

export const QuestionMarkIcon = createIcon("QuestionMark", {
  bold: QuestionMarkBoldIcon,
  duotone: QuestionMarkDuotoneIcon,
  fill: QuestionMarkFillIcon,
  light: QuestionMarkLightIcon,
  regular: QuestionMarkRegularIcon,
  thin: QuestionMarkThinIcon,
});
