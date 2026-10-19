import { createIcon } from "../../hocs/create-icon.hoc";
import { BugDroidBoldIcon } from "../bold/bug-droid-bold.icon";
import { BugDroidDuotoneIcon } from "../duotone/bug-droid-duotone.icon";
import { BugDroidFillIcon } from "../fill/bug-droid-fill.icon";
import { BugDroidLightIcon } from "../light/bug-droid-light.icon";
import { BugDroidRegularIcon } from "../regular/bug-droid-regular.icon";
import { BugDroidThinIcon } from "../thin/bug-droid-thin.icon";

export const BugDroidIcon = createIcon("BugDroid", {
  bold: BugDroidBoldIcon,
  duotone: BugDroidDuotoneIcon,
  fill: BugDroidFillIcon,
  light: BugDroidLightIcon,
  regular: BugDroidRegularIcon,
  thin: BugDroidThinIcon,
});
