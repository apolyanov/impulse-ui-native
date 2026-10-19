import { createIcon } from "../../hocs/create-icon.hoc";
import { LessThanOrEqualBoldIcon } from "../bold/less-than-or-equal-bold.icon";
import { LessThanOrEqualDuotoneIcon } from "../duotone/less-than-or-equal-duotone.icon";
import { LessThanOrEqualFillIcon } from "../fill/less-than-or-equal-fill.icon";
import { LessThanOrEqualLightIcon } from "../light/less-than-or-equal-light.icon";
import { LessThanOrEqualRegularIcon } from "../regular/less-than-or-equal-regular.icon";
import { LessThanOrEqualThinIcon } from "../thin/less-than-or-equal-thin.icon";

export const LessThanOrEqualIcon = createIcon("LessThanOrEqual", {
  bold: LessThanOrEqualBoldIcon,
  duotone: LessThanOrEqualDuotoneIcon,
  fill: LessThanOrEqualFillIcon,
  light: LessThanOrEqualLightIcon,
  regular: LessThanOrEqualRegularIcon,
  thin: LessThanOrEqualThinIcon,
});
