import { createIcon } from "../../hocs/create-icon.hoc";
import { AppleLogoBoldIcon } from "../bold/apple-logo-bold.icon";
import { AppleLogoDuotoneIcon } from "../duotone/apple-logo-duotone.icon";
import { AppleLogoFillIcon } from "../fill/apple-logo-fill.icon";
import { AppleLogoLightIcon } from "../light/apple-logo-light.icon";
import { AppleLogoRegularIcon } from "../regular/apple-logo-regular.icon";
import { AppleLogoThinIcon } from "../thin/apple-logo-thin.icon";

export const AppleLogoIcon = createIcon("AppleLogo", {
  bold: AppleLogoBoldIcon,
  duotone: AppleLogoDuotoneIcon,
  fill: AppleLogoFillIcon,
  light: AppleLogoLightIcon,
  regular: AppleLogoRegularIcon,
  thin: AppleLogoThinIcon,
});
