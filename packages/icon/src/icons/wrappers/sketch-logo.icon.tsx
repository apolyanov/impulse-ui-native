import { createIcon } from "../../hocs/create-icon.hoc";
import { SketchLogoBoldIcon } from "../bold/sketch-logo-bold.icon";
import { SketchLogoDuotoneIcon } from "../duotone/sketch-logo-duotone.icon";
import { SketchLogoFillIcon } from "../fill/sketch-logo-fill.icon";
import { SketchLogoLightIcon } from "../light/sketch-logo-light.icon";
import { SketchLogoRegularIcon } from "../regular/sketch-logo-regular.icon";
import { SketchLogoThinIcon } from "../thin/sketch-logo-thin.icon";

export const SketchLogoIcon = createIcon("SketchLogo", {
  bold: SketchLogoBoldIcon,
  duotone: SketchLogoDuotoneIcon,
  fill: SketchLogoFillIcon,
  light: SketchLogoLightIcon,
  regular: SketchLogoRegularIcon,
  thin: SketchLogoThinIcon,
});
