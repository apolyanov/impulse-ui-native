import { createIcon } from "../../hocs/create-icon.hoc";
import { CircleDashedBoldIcon } from "../bold/circle-dashed-bold.icon";
import { CircleDashedDuotoneIcon } from "../duotone/circle-dashed-duotone.icon";
import { CircleDashedFillIcon } from "../fill/circle-dashed-fill.icon";
import { CircleDashedLightIcon } from "../light/circle-dashed-light.icon";
import { CircleDashedRegularIcon } from "../regular/circle-dashed-regular.icon";
import { CircleDashedThinIcon } from "../thin/circle-dashed-thin.icon";

export const CircleDashedIcon = createIcon("CircleDashed", {
  bold: CircleDashedBoldIcon,
  duotone: CircleDashedDuotoneIcon,
  fill: CircleDashedFillIcon,
  light: CircleDashedLightIcon,
  regular: CircleDashedRegularIcon,
  thin: CircleDashedThinIcon,
});
