import { createIcon } from "../../hocs/create-icon.hoc";
import { BriefcaseMetalBoldIcon } from "../bold/briefcase-metal-bold.icon";
import { BriefcaseMetalDuotoneIcon } from "../duotone/briefcase-metal-duotone.icon";
import { BriefcaseMetalFillIcon } from "../fill/briefcase-metal-fill.icon";
import { BriefcaseMetalLightIcon } from "../light/briefcase-metal-light.icon";
import { BriefcaseMetalRegularIcon } from "../regular/briefcase-metal-regular.icon";
import { BriefcaseMetalThinIcon } from "../thin/briefcase-metal-thin.icon";

export const BriefcaseMetalIcon = createIcon("BriefcaseMetal", {
  bold: BriefcaseMetalBoldIcon,
  duotone: BriefcaseMetalDuotoneIcon,
  fill: BriefcaseMetalFillIcon,
  light: BriefcaseMetalLightIcon,
  regular: BriefcaseMetalRegularIcon,
  thin: BriefcaseMetalThinIcon,
});
