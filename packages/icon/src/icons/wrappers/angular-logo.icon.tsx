import { createIcon } from "../../hocs/create-icon.hoc";
import { AngularLogoBoldIcon } from "../bold/angular-logo-bold.icon";
import { AngularLogoDuotoneIcon } from "../duotone/angular-logo-duotone.icon";
import { AngularLogoFillIcon } from "../fill/angular-logo-fill.icon";
import { AngularLogoLightIcon } from "../light/angular-logo-light.icon";
import { AngularLogoRegularIcon } from "../regular/angular-logo-regular.icon";
import { AngularLogoThinIcon } from "../thin/angular-logo-thin.icon";

export const AngularLogoIcon = createIcon("AngularLogo", {
  bold: AngularLogoBoldIcon,
  duotone: AngularLogoDuotoneIcon,
  fill: AngularLogoFillIcon,
  light: AngularLogoLightIcon,
  regular: AngularLogoRegularIcon,
  thin: AngularLogoThinIcon,
});
