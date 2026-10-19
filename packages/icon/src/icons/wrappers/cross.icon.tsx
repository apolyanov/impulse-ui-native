import { createIcon } from "../../hocs/create-icon.hoc";
import { CrossBoldIcon } from "../bold/cross-bold.icon";
import { CrossDuotoneIcon } from "../duotone/cross-duotone.icon";
import { CrossFillIcon } from "../fill/cross-fill.icon";
import { CrossLightIcon } from "../light/cross-light.icon";
import { CrossRegularIcon } from "../regular/cross-regular.icon";
import { CrossThinIcon } from "../thin/cross-thin.icon";

export const CrossIcon = createIcon("Cross", {
  bold: CrossBoldIcon,
  duotone: CrossDuotoneIcon,
  fill: CrossFillIcon,
  light: CrossLightIcon,
  regular: CrossRegularIcon,
  thin: CrossThinIcon,
});
