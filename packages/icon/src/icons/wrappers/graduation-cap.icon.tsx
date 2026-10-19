import { createIcon } from "../../hocs/create-icon.hoc";
import { GraduationCapBoldIcon } from "../bold/graduation-cap-bold.icon";
import { GraduationCapDuotoneIcon } from "../duotone/graduation-cap-duotone.icon";
import { GraduationCapFillIcon } from "../fill/graduation-cap-fill.icon";
import { GraduationCapLightIcon } from "../light/graduation-cap-light.icon";
import { GraduationCapRegularIcon } from "../regular/graduation-cap-regular.icon";
import { GraduationCapThinIcon } from "../thin/graduation-cap-thin.icon";

export const GraduationCapIcon = createIcon("GraduationCap", {
  bold: GraduationCapBoldIcon,
  duotone: GraduationCapDuotoneIcon,
  fill: GraduationCapFillIcon,
  light: GraduationCapLightIcon,
  regular: GraduationCapRegularIcon,
  thin: GraduationCapThinIcon,
});
