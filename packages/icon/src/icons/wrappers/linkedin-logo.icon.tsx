import { createIcon } from "../../hocs/create-icon.hoc";
import { LinkedinLogoBoldIcon } from "../bold/linkedin-logo-bold.icon";
import { LinkedinLogoDuotoneIcon } from "../duotone/linkedin-logo-duotone.icon";
import { LinkedinLogoFillIcon } from "../fill/linkedin-logo-fill.icon";
import { LinkedinLogoLightIcon } from "../light/linkedin-logo-light.icon";
import { LinkedinLogoRegularIcon } from "../regular/linkedin-logo-regular.icon";
import { LinkedinLogoThinIcon } from "../thin/linkedin-logo-thin.icon";

export const LinkedinLogoIcon = createIcon("LinkedinLogo", {
  bold: LinkedinLogoBoldIcon,
  duotone: LinkedinLogoDuotoneIcon,
  fill: LinkedinLogoFillIcon,
  light: LinkedinLogoLightIcon,
  regular: LinkedinLogoRegularIcon,
  thin: LinkedinLogoThinIcon,
});
