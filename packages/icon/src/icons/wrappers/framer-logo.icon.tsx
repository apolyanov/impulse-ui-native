import { createIcon } from "../../hocs/create-icon.hoc";
import { FramerLogoBoldIcon } from "../bold/framer-logo-bold.icon";
import { FramerLogoDuotoneIcon } from "../duotone/framer-logo-duotone.icon";
import { FramerLogoFillIcon } from "../fill/framer-logo-fill.icon";
import { FramerLogoLightIcon } from "../light/framer-logo-light.icon";
import { FramerLogoRegularIcon } from "../regular/framer-logo-regular.icon";
import { FramerLogoThinIcon } from "../thin/framer-logo-thin.icon";

export const FramerLogoIcon = createIcon("FramerLogo", {
  bold: FramerLogoBoldIcon,
  duotone: FramerLogoDuotoneIcon,
  fill: FramerLogoFillIcon,
  light: FramerLogoLightIcon,
  regular: FramerLogoRegularIcon,
  thin: FramerLogoThinIcon,
});
