import { createIcon } from "../../hocs/create-icon.hoc";
import { QuestionBoldIcon } from "../bold/question-bold.icon";
import { QuestionDuotoneIcon } from "../duotone/question-duotone.icon";
import { QuestionFillIcon } from "../fill/question-fill.icon";
import { QuestionLightIcon } from "../light/question-light.icon";
import { QuestionRegularIcon } from "../regular/question-regular.icon";
import { QuestionThinIcon } from "../thin/question-thin.icon";

export const QuestionIcon = createIcon("Question", {
  bold: QuestionBoldIcon,
  duotone: QuestionDuotoneIcon,
  fill: QuestionFillIcon,
  light: QuestionLightIcon,
  regular: QuestionRegularIcon,
  thin: QuestionThinIcon,
});
