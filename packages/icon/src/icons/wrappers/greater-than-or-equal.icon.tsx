import { createIcon } from "../../hocs/create-icon.hoc";
import { GreaterThanOrEqualBoldIcon } from "../bold/greater-than-or-equal-bold.icon";
import { GreaterThanOrEqualDuotoneIcon } from "../duotone/greater-than-or-equal-duotone.icon";
import { GreaterThanOrEqualFillIcon } from "../fill/greater-than-or-equal-fill.icon";
import { GreaterThanOrEqualLightIcon } from "../light/greater-than-or-equal-light.icon";
import { GreaterThanOrEqualRegularIcon } from "../regular/greater-than-or-equal-regular.icon";
import { GreaterThanOrEqualThinIcon } from "../thin/greater-than-or-equal-thin.icon";

export const GreaterThanOrEqualIcon = createIcon("GreaterThanOrEqual", {
  bold: GreaterThanOrEqualBoldIcon,
  duotone: GreaterThanOrEqualDuotoneIcon,
  fill: GreaterThanOrEqualFillIcon,
  light: GreaterThanOrEqualLightIcon,
  regular: GreaterThanOrEqualRegularIcon,
  thin: GreaterThanOrEqualThinIcon,
});
