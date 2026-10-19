import { createIcon } from "../../hocs/create-icon.hoc";
import { DetectiveBoldIcon } from "../bold/detective-bold.icon";
import { DetectiveDuotoneIcon } from "../duotone/detective-duotone.icon";
import { DetectiveFillIcon } from "../fill/detective-fill.icon";
import { DetectiveLightIcon } from "../light/detective-light.icon";
import { DetectiveRegularIcon } from "../regular/detective-regular.icon";
import { DetectiveThinIcon } from "../thin/detective-thin.icon";

export const DetectiveIcon = createIcon("Detective", {
  bold: DetectiveBoldIcon,
  duotone: DetectiveDuotoneIcon,
  fill: DetectiveFillIcon,
  light: DetectiveLightIcon,
  regular: DetectiveRegularIcon,
  thin: DetectiveThinIcon,
});
