import { createIcon } from "../../hocs/create-icon.hoc";
import { BriefcaseBoldIcon } from "../bold/briefcase-bold.icon";
import { BriefcaseDuotoneIcon } from "../duotone/briefcase-duotone.icon";
import { BriefcaseFillIcon } from "../fill/briefcase-fill.icon";
import { BriefcaseLightIcon } from "../light/briefcase-light.icon";
import { BriefcaseRegularIcon } from "../regular/briefcase-regular.icon";
import { BriefcaseThinIcon } from "../thin/briefcase-thin.icon";

export const BriefcaseIcon = createIcon("Briefcase", {
  bold: BriefcaseBoldIcon,
  duotone: BriefcaseDuotoneIcon,
  fill: BriefcaseFillIcon,
  light: BriefcaseLightIcon,
  regular: BriefcaseRegularIcon,
  thin: BriefcaseThinIcon,
});
