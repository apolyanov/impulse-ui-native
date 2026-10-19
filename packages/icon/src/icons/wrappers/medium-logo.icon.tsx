import { createIcon } from "../../hocs/create-icon.hoc";
import { MediumLogoBoldIcon } from "../bold/medium-logo-bold.icon";
import { MediumLogoDuotoneIcon } from "../duotone/medium-logo-duotone.icon";
import { MediumLogoFillIcon } from "../fill/medium-logo-fill.icon";
import { MediumLogoLightIcon } from "../light/medium-logo-light.icon";
import { MediumLogoRegularIcon } from "../regular/medium-logo-regular.icon";
import { MediumLogoThinIcon } from "../thin/medium-logo-thin.icon";

export const MediumLogoIcon = createIcon("MediumLogo", {
  bold: MediumLogoBoldIcon,
  duotone: MediumLogoDuotoneIcon,
  fill: MediumLogoFillIcon,
  light: MediumLogoLightIcon,
  regular: MediumLogoRegularIcon,
  thin: MediumLogoThinIcon,
});
