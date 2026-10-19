import { createIcon } from "../../hocs/create-icon.hoc";
import { FacebookLogoBoldIcon } from "../bold/facebook-logo-bold.icon";
import { FacebookLogoDuotoneIcon } from "../duotone/facebook-logo-duotone.icon";
import { FacebookLogoFillIcon } from "../fill/facebook-logo-fill.icon";
import { FacebookLogoLightIcon } from "../light/facebook-logo-light.icon";
import { FacebookLogoRegularIcon } from "../regular/facebook-logo-regular.icon";
import { FacebookLogoThinIcon } from "../thin/facebook-logo-thin.icon";

export const FacebookLogoIcon = createIcon("FacebookLogo", {
  bold: FacebookLogoBoldIcon,
  duotone: FacebookLogoDuotoneIcon,
  fill: FacebookLogoFillIcon,
  light: FacebookLogoLightIcon,
  regular: FacebookLogoRegularIcon,
  thin: FacebookLogoThinIcon,
});
