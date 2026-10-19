import { createIcon } from "../../hocs/create-icon.hoc";
import { GooglePlayLogoBoldIcon } from "../bold/google-play-logo-bold.icon";
import { GooglePlayLogoDuotoneIcon } from "../duotone/google-play-logo-duotone.icon";
import { GooglePlayLogoFillIcon } from "../fill/google-play-logo-fill.icon";
import { GooglePlayLogoLightIcon } from "../light/google-play-logo-light.icon";
import { GooglePlayLogoRegularIcon } from "../regular/google-play-logo-regular.icon";
import { GooglePlayLogoThinIcon } from "../thin/google-play-logo-thin.icon";

export const GooglePlayLogoIcon = createIcon("GooglePlayLogo", {
  bold: GooglePlayLogoBoldIcon,
  duotone: GooglePlayLogoDuotoneIcon,
  fill: GooglePlayLogoFillIcon,
  light: GooglePlayLogoLightIcon,
  regular: GooglePlayLogoRegularIcon,
  thin: GooglePlayLogoThinIcon,
});
