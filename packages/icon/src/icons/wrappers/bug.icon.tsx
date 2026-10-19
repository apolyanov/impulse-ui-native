import { createIcon } from "../../hocs/create-icon.hoc";
import { BugBoldIcon } from "../bold/bug-bold.icon";
import { BugDuotoneIcon } from "../duotone/bug-duotone.icon";
import { BugFillIcon } from "../fill/bug-fill.icon";
import { BugLightIcon } from "../light/bug-light.icon";
import { BugRegularIcon } from "../regular/bug-regular.icon";
import { BugThinIcon } from "../thin/bug-thin.icon";

export const BugIcon = createIcon("Bug", {
  bold: BugBoldIcon,
  duotone: BugDuotoneIcon,
  fill: BugFillIcon,
  light: BugLightIcon,
  regular: BugRegularIcon,
  thin: BugThinIcon,
});
