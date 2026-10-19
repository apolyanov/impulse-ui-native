import { createIcon } from "../../hocs/create-icon.hoc";
import { GooglePhotosLogoBoldIcon } from "../bold/google-photos-logo-bold.icon";
import { GooglePhotosLogoDuotoneIcon } from "../duotone/google-photos-logo-duotone.icon";
import { GooglePhotosLogoFillIcon } from "../fill/google-photos-logo-fill.icon";
import { GooglePhotosLogoLightIcon } from "../light/google-photos-logo-light.icon";
import { GooglePhotosLogoRegularIcon } from "../regular/google-photos-logo-regular.icon";
import { GooglePhotosLogoThinIcon } from "../thin/google-photos-logo-thin.icon";

export const GooglePhotosLogoIcon = createIcon("GooglePhotosLogo", {
  bold: GooglePhotosLogoBoldIcon,
  duotone: GooglePhotosLogoDuotoneIcon,
  fill: GooglePhotosLogoFillIcon,
  light: GooglePhotosLogoLightIcon,
  regular: GooglePhotosLogoRegularIcon,
  thin: GooglePhotosLogoThinIcon,
});
