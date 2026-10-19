import { createIcon } from "../../hocs/create-icon.hoc";
import { LessThanBoldIcon } from "../bold/less-than-bold.icon";
import { LessThanDuotoneIcon } from "../duotone/less-than-duotone.icon";
import { LessThanFillIcon } from "../fill/less-than-fill.icon";
import { LessThanLightIcon } from "../light/less-than-light.icon";
import { LessThanRegularIcon } from "../regular/less-than-regular.icon";
import { LessThanThinIcon } from "../thin/less-than-thin.icon";

export const LessThanIcon = createIcon("LessThan", {
  bold: LessThanBoldIcon,
  duotone: LessThanDuotoneIcon,
  fill: LessThanFillIcon,
  light: LessThanLightIcon,
  regular: LessThanRegularIcon,
  thin: LessThanThinIcon,
});
