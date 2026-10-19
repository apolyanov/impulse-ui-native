import { createIcon } from "../../hocs/create-icon.hoc";
import { FigmaLogoBoldIcon } from "../bold/figma-logo-bold.icon";
import { FigmaLogoDuotoneIcon } from "../duotone/figma-logo-duotone.icon";
import { FigmaLogoFillIcon } from "../fill/figma-logo-fill.icon";
import { FigmaLogoLightIcon } from "../light/figma-logo-light.icon";
import { FigmaLogoRegularIcon } from "../regular/figma-logo-regular.icon";
import { FigmaLogoThinIcon } from "../thin/figma-logo-thin.icon";

export const FigmaLogoIcon = createIcon("FigmaLogo", {
  bold: FigmaLogoBoldIcon,
  duotone: FigmaLogoDuotoneIcon,
  fill: FigmaLogoFillIcon,
  light: FigmaLogoLightIcon,
  regular: FigmaLogoRegularIcon,
  thin: FigmaLogoThinIcon,
});
