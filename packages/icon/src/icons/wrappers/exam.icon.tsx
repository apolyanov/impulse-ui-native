import { createIcon } from "../../hocs/create-icon.hoc";
import { ExamBoldIcon } from "../bold/exam-bold.icon";
import { ExamDuotoneIcon } from "../duotone/exam-duotone.icon";
import { ExamFillIcon } from "../fill/exam-fill.icon";
import { ExamLightIcon } from "../light/exam-light.icon";
import { ExamRegularIcon } from "../regular/exam-regular.icon";
import { ExamThinIcon } from "../thin/exam-thin.icon";

export const ExamIcon = createIcon("Exam", {
  bold: ExamBoldIcon,
  duotone: ExamDuotoneIcon,
  fill: ExamFillIcon,
  light: ExamLightIcon,
  regular: ExamRegularIcon,
  thin: ExamThinIcon,
});
