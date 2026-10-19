import { createIcon } from "../../hocs/create-icon.hoc";
import { DropHalfBoldIcon } from "../bold/drop-half-bold.icon";
import { DropHalfDuotoneIcon } from "../duotone/drop-half-duotone.icon";
import { DropHalfFillIcon } from "../fill/drop-half-fill.icon";
import { DropHalfLightIcon } from "../light/drop-half-light.icon";
import { DropHalfRegularIcon } from "../regular/drop-half-regular.icon";
import { DropHalfThinIcon } from "../thin/drop-half-thin.icon";

export const DropHalfIcon = createIcon("DropHalf", {
  bold: DropHalfBoldIcon,
  duotone: DropHalfDuotoneIcon,
  fill: DropHalfFillIcon,
  light: DropHalfLightIcon,
  regular: DropHalfRegularIcon,
  thin: DropHalfThinIcon,
});
