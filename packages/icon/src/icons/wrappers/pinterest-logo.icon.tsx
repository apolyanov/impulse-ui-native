import { createIcon } from "../../hocs/create-icon.hoc";
import { PinterestLogoBoldIcon } from "../bold/pinterest-logo-bold.icon";
import { PinterestLogoDuotoneIcon } from "../duotone/pinterest-logo-duotone.icon";
import { PinterestLogoFillIcon } from "../fill/pinterest-logo-fill.icon";
import { PinterestLogoLightIcon } from "../light/pinterest-logo-light.icon";
import { PinterestLogoRegularIcon } from "../regular/pinterest-logo-regular.icon";
import { PinterestLogoThinIcon } from "../thin/pinterest-logo-thin.icon";

export const PinterestLogoIcon = createIcon("PinterestLogo", {
  bold: PinterestLogoBoldIcon,
  duotone: PinterestLogoDuotoneIcon,
  fill: PinterestLogoFillIcon,
  light: PinterestLogoLightIcon,
  regular: PinterestLogoRegularIcon,
  thin: PinterestLogoThinIcon,
});
