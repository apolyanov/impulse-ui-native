import { createIcon } from "../../hocs/create-icon.hoc";
import { RectangleDashedBoldIcon } from "../bold/rectangle-dashed-bold.icon";
import { RectangleDashedDuotoneIcon } from "../duotone/rectangle-dashed-duotone.icon";
import { RectangleDashedFillIcon } from "../fill/rectangle-dashed-fill.icon";
import { RectangleDashedLightIcon } from "../light/rectangle-dashed-light.icon";
import { RectangleDashedRegularIcon } from "../regular/rectangle-dashed-regular.icon";
import { RectangleDashedThinIcon } from "../thin/rectangle-dashed-thin.icon";

export const RectangleDashedIcon = createIcon("RectangleDashed", {
  bold: RectangleDashedBoldIcon,
  duotone: RectangleDashedDuotoneIcon,
  fill: RectangleDashedFillIcon,
  light: RectangleDashedLightIcon,
  regular: RectangleDashedRegularIcon,
  thin: RectangleDashedThinIcon,
});
