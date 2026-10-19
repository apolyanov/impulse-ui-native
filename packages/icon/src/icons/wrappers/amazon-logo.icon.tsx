import { createIcon } from "../../hocs/create-icon.hoc";
import { AmazonLogoBoldIcon } from "../bold/amazon-logo-bold.icon";
import { AmazonLogoDuotoneIcon } from "../duotone/amazon-logo-duotone.icon";
import { AmazonLogoFillIcon } from "../fill/amazon-logo-fill.icon";
import { AmazonLogoLightIcon } from "../light/amazon-logo-light.icon";
import { AmazonLogoRegularIcon } from "../regular/amazon-logo-regular.icon";
import { AmazonLogoThinIcon } from "../thin/amazon-logo-thin.icon";

export const AmazonLogoIcon = createIcon("AmazonLogo", {
  bold: AmazonLogoBoldIcon,
  duotone: AmazonLogoDuotoneIcon,
  fill: AmazonLogoFillIcon,
  light: AmazonLogoLightIcon,
  regular: AmazonLogoRegularIcon,
  thin: AmazonLogoThinIcon,
});
