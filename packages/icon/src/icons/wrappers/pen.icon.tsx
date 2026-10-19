import { createIcon } from "../../hocs/create-icon.hoc";
import { PenBoldIcon } from "../bold/pen-bold.icon";
import { PenDuotoneIcon } from "../duotone/pen-duotone.icon";
import { PenFillIcon } from "../fill/pen-fill.icon";
import { PenLightIcon } from "../light/pen-light.icon";
import { PenRegularIcon } from "../regular/pen-regular.icon";
import { PenThinIcon } from "../thin/pen-thin.icon";

export const PenIcon = createIcon("Pen", {
  bold: PenBoldIcon,
  duotone: PenDuotoneIcon,
  fill: PenFillIcon,
  light: PenLightIcon,
  regular: PenRegularIcon,
  thin: PenThinIcon,
});
