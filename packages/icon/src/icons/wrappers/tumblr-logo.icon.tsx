import { createIcon } from "../../hocs/create-icon.hoc";
import { TumblrLogoBoldIcon } from "../bold/tumblr-logo-bold.icon";
import { TumblrLogoDuotoneIcon } from "../duotone/tumblr-logo-duotone.icon";
import { TumblrLogoFillIcon } from "../fill/tumblr-logo-fill.icon";
import { TumblrLogoLightIcon } from "../light/tumblr-logo-light.icon";
import { TumblrLogoRegularIcon } from "../regular/tumblr-logo-regular.icon";
import { TumblrLogoThinIcon } from "../thin/tumblr-logo-thin.icon";

export const TumblrLogoIcon = createIcon("TumblrLogo", {
  bold: TumblrLogoBoldIcon,
  duotone: TumblrLogoDuotoneIcon,
  fill: TumblrLogoFillIcon,
  light: TumblrLogoLightIcon,
  regular: TumblrLogoRegularIcon,
  thin: TumblrLogoThinIcon,
});
