import { createIcon } from "../../hocs/create-icon.hoc";
import { InstagramLogoBoldIcon } from "../bold/instagram-logo-bold.icon";
import { InstagramLogoDuotoneIcon } from "../duotone/instagram-logo-duotone.icon";
import { InstagramLogoFillIcon } from "../fill/instagram-logo-fill.icon";
import { InstagramLogoLightIcon } from "../light/instagram-logo-light.icon";
import { InstagramLogoRegularIcon } from "../regular/instagram-logo-regular.icon";
import { InstagramLogoThinIcon } from "../thin/instagram-logo-thin.icon";

export const InstagramLogoIcon = createIcon("InstagramLogo", {
  bold: InstagramLogoBoldIcon,
  duotone: InstagramLogoDuotoneIcon,
  fill: InstagramLogoFillIcon,
  light: InstagramLogoLightIcon,
  regular: InstagramLogoRegularIcon,
  thin: InstagramLogoThinIcon,
});
