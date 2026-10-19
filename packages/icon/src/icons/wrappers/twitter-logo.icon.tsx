import { createIcon } from "../../hocs/create-icon.hoc";
import { TwitterLogoBoldIcon } from "../bold/twitter-logo-bold.icon";
import { TwitterLogoDuotoneIcon } from "../duotone/twitter-logo-duotone.icon";
import { TwitterLogoFillIcon } from "../fill/twitter-logo-fill.icon";
import { TwitterLogoLightIcon } from "../light/twitter-logo-light.icon";
import { TwitterLogoRegularIcon } from "../regular/twitter-logo-regular.icon";
import { TwitterLogoThinIcon } from "../thin/twitter-logo-thin.icon";

export const TwitterLogoIcon = createIcon("TwitterLogo", {
  bold: TwitterLogoBoldIcon,
  duotone: TwitterLogoDuotoneIcon,
  fill: TwitterLogoFillIcon,
  light: TwitterLogoLightIcon,
  regular: TwitterLogoRegularIcon,
  thin: TwitterLogoThinIcon,
});
