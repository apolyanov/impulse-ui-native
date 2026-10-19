import { createIcon } from "../../hocs/create-icon.hoc";
import { GreaterThanBoldIcon } from "../bold/greater-than-bold.icon";
import { GreaterThanDuotoneIcon } from "../duotone/greater-than-duotone.icon";
import { GreaterThanFillIcon } from "../fill/greater-than-fill.icon";
import { GreaterThanLightIcon } from "../light/greater-than-light.icon";
import { GreaterThanRegularIcon } from "../regular/greater-than-regular.icon";
import { GreaterThanThinIcon } from "../thin/greater-than-thin.icon";

export const GreaterThanIcon = createIcon("GreaterThan", {
  bold: GreaterThanBoldIcon,
  duotone: GreaterThanDuotoneIcon,
  fill: GreaterThanFillIcon,
  light: GreaterThanLightIcon,
  regular: GreaterThanRegularIcon,
  thin: GreaterThanThinIcon,
});
