import { createIcon } from "../../hocs/create-icon.hoc";
import { TriangleDashedBoldIcon } from "../bold/triangle-dashed-bold.icon";
import { TriangleDashedDuotoneIcon } from "../duotone/triangle-dashed-duotone.icon";
import { TriangleDashedFillIcon } from "../fill/triangle-dashed-fill.icon";
import { TriangleDashedLightIcon } from "../light/triangle-dashed-light.icon";
import { TriangleDashedRegularIcon } from "../regular/triangle-dashed-regular.icon";
import { TriangleDashedThinIcon } from "../thin/triangle-dashed-thin.icon";

export const TriangleDashedIcon = createIcon("TriangleDashed", {
  bold: TriangleDashedBoldIcon,
  duotone: TriangleDashedDuotoneIcon,
  fill: TriangleDashedFillIcon,
  light: TriangleDashedLightIcon,
  regular: TriangleDashedRegularIcon,
  thin: TriangleDashedThinIcon,
});
