import { createIcon } from "../../hocs/create-icon.hoc";
import { GoogleCardboardLogoBoldIcon } from "../bold/google-cardboard-logo-bold.icon";
import { GoogleCardboardLogoDuotoneIcon } from "../duotone/google-cardboard-logo-duotone.icon";
import { GoogleCardboardLogoFillIcon } from "../fill/google-cardboard-logo-fill.icon";
import { GoogleCardboardLogoLightIcon } from "../light/google-cardboard-logo-light.icon";
import { GoogleCardboardLogoRegularIcon } from "../regular/google-cardboard-logo-regular.icon";
import { GoogleCardboardLogoThinIcon } from "../thin/google-cardboard-logo-thin.icon";

export const GoogleCardboardLogoIcon = createIcon("GoogleCardboardLogo", {
  bold: GoogleCardboardLogoBoldIcon,
  duotone: GoogleCardboardLogoDuotoneIcon,
  fill: GoogleCardboardLogoFillIcon,
  light: GoogleCardboardLogoLightIcon,
  regular: GoogleCardboardLogoRegularIcon,
  thin: GoogleCardboardLogoThinIcon,
});
