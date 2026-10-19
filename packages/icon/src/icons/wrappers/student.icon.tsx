import { createIcon } from "../../hocs/create-icon.hoc";
import { StudentBoldIcon } from "../bold/student-bold.icon";
import { StudentDuotoneIcon } from "../duotone/student-duotone.icon";
import { StudentFillIcon } from "../fill/student-fill.icon";
import { StudentLightIcon } from "../light/student-light.icon";
import { StudentRegularIcon } from "../regular/student-regular.icon";
import { StudentThinIcon } from "../thin/student-thin.icon";

export const StudentIcon = createIcon("Student", {
  bold: StudentBoldIcon,
  duotone: StudentDuotoneIcon,
  fill: StudentFillIcon,
  light: StudentLightIcon,
  regular: StudentRegularIcon,
  thin: StudentThinIcon,
});
