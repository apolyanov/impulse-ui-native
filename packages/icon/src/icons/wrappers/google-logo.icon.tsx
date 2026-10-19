import { createIcon } from "../../hocs/create-icon.hoc";
import { GoogleLogoBoldIcon } from "../bold/google-logo-bold.icon";
import { GoogleLogoDuotoneIcon } from "../duotone/google-logo-duotone.icon";
import { GoogleLogoFillIcon } from "../fill/google-logo-fill.icon";
import { GoogleLogoLightIcon } from "../light/google-logo-light.icon";
import { GoogleLogoRegularIcon } from "../regular/google-logo-regular.icon";
import { GoogleLogoThinIcon } from "../thin/google-logo-thin.icon";

export const GoogleLogoIcon = createIcon("GoogleLogo", {
  bold: GoogleLogoBoldIcon,
  duotone: GoogleLogoDuotoneIcon,
  fill: GoogleLogoFillIcon,
  light: GoogleLogoLightIcon,
  regular: GoogleLogoRegularIcon,
  thin: GoogleLogoThinIcon,
});
