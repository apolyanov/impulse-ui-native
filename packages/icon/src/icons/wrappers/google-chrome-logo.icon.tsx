import { createIcon } from "../../hocs/create-icon.hoc";
import { GoogleChromeLogoBoldIcon } from "../bold/google-chrome-logo-bold.icon";
import { GoogleChromeLogoDuotoneIcon } from "../duotone/google-chrome-logo-duotone.icon";
import { GoogleChromeLogoFillIcon } from "../fill/google-chrome-logo-fill.icon";
import { GoogleChromeLogoLightIcon } from "../light/google-chrome-logo-light.icon";
import { GoogleChromeLogoRegularIcon } from "../regular/google-chrome-logo-regular.icon";
import { GoogleChromeLogoThinIcon } from "../thin/google-chrome-logo-thin.icon";

export const GoogleChromeLogoIcon = createIcon("GoogleChromeLogo", {
  bold: GoogleChromeLogoBoldIcon,
  duotone: GoogleChromeLogoDuotoneIcon,
  fill: GoogleChromeLogoFillIcon,
  light: GoogleChromeLogoLightIcon,
  regular: GoogleChromeLogoRegularIcon,
  thin: GoogleChromeLogoThinIcon,
});
