import { createIcon } from "../../hocs/create-icon.hoc";
import { PerspectiveBoldIcon } from "../bold/perspective-bold.icon";
import { PerspectiveDuotoneIcon } from "../duotone/perspective-duotone.icon";
import { PerspectiveFillIcon } from "../fill/perspective-fill.icon";
import { PerspectiveLightIcon } from "../light/perspective-light.icon";
import { PerspectiveRegularIcon } from "../regular/perspective-regular.icon";
import { PerspectiveThinIcon } from "../thin/perspective-thin.icon";

export const PerspectiveIcon = createIcon("Perspective", {
  bold: PerspectiveBoldIcon,
  duotone: PerspectiveDuotoneIcon,
  fill: PerspectiveFillIcon,
  light: PerspectiveLightIcon,
  regular: PerspectiveRegularIcon,
  thin: PerspectiveThinIcon,
});
