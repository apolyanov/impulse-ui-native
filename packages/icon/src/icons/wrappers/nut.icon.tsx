import { createIcon } from "../../hocs/create-icon.hoc";
import { NutBoldIcon } from "../bold/nut-bold.icon";
import { NutDuotoneIcon } from "../duotone/nut-duotone.icon";
import { NutFillIcon } from "../fill/nut-fill.icon";
import { NutLightIcon } from "../light/nut-light.icon";
import { NutRegularIcon } from "../regular/nut-regular.icon";
import { NutThinIcon } from "../thin/nut-thin.icon";

export const NutIcon = createIcon("Nut", {
  bold: NutBoldIcon,
  duotone: NutDuotoneIcon,
  fill: NutFillIcon,
  light: NutLightIcon,
  regular: NutRegularIcon,
  thin: NutThinIcon,
});
