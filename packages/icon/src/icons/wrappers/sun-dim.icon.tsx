import { createIcon } from "../../hocs/create-icon.hoc";
import { SunDimBoldIcon } from "../bold/sun-dim-bold.icon";
import { SunDimDuotoneIcon } from "../duotone/sun-dim-duotone.icon";
import { SunDimFillIcon } from "../fill/sun-dim-fill.icon";
import { SunDimLightIcon } from "../light/sun-dim-light.icon";
import { SunDimRegularIcon } from "../regular/sun-dim-regular.icon";
import { SunDimThinIcon } from "../thin/sun-dim-thin.icon";

export const SunDimIcon = createIcon("SunDim", {
  bold: SunDimBoldIcon,
  duotone: SunDimDuotoneIcon,
  fill: SunDimFillIcon,
  light: SunDimLightIcon,
  regular: SunDimRegularIcon,
  thin: SunDimThinIcon,
});
