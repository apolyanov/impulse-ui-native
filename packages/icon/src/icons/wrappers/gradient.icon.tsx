import { createIcon } from "../../hocs/create-icon.hoc";
import { GradientBoldIcon } from "../bold/gradient-bold.icon";
import { GradientDuotoneIcon } from "../duotone/gradient-duotone.icon";
import { GradientFillIcon } from "../fill/gradient-fill.icon";
import { GradientLightIcon } from "../light/gradient-light.icon";
import { GradientRegularIcon } from "../regular/gradient-regular.icon";
import { GradientThinIcon } from "../thin/gradient-thin.icon";

export const GradientIcon = createIcon("Gradient", {
  bold: GradientBoldIcon,
  duotone: GradientDuotoneIcon,
  fill: GradientFillIcon,
  light: GradientLightIcon,
  regular: GradientRegularIcon,
  thin: GradientThinIcon,
});
