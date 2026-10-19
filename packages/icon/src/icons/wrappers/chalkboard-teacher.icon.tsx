import { createIcon } from "../../hocs/create-icon.hoc";
import { ChalkboardTeacherBoldIcon } from "../bold/chalkboard-teacher-bold.icon";
import { ChalkboardTeacherDuotoneIcon } from "../duotone/chalkboard-teacher-duotone.icon";
import { ChalkboardTeacherFillIcon } from "../fill/chalkboard-teacher-fill.icon";
import { ChalkboardTeacherLightIcon } from "../light/chalkboard-teacher-light.icon";
import { ChalkboardTeacherRegularIcon } from "../regular/chalkboard-teacher-regular.icon";
import { ChalkboardTeacherThinIcon } from "../thin/chalkboard-teacher-thin.icon";

export const ChalkboardTeacherIcon = createIcon("ChalkboardTeacher", {
  bold: ChalkboardTeacherBoldIcon,
  duotone: ChalkboardTeacherDuotoneIcon,
  fill: ChalkboardTeacherFillIcon,
  light: ChalkboardTeacherLightIcon,
  regular: ChalkboardTeacherRegularIcon,
  thin: ChalkboardTeacherThinIcon,
});
