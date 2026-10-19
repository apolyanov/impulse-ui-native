import { createIcon } from "../../hocs/create-icon.hoc";
import { DevToLogoBoldIcon } from "../bold/dev-to-logo-bold.icon";
import { DevToLogoDuotoneIcon } from "../duotone/dev-to-logo-duotone.icon";
import { DevToLogoFillIcon } from "../fill/dev-to-logo-fill.icon";
import { DevToLogoLightIcon } from "../light/dev-to-logo-light.icon";
import { DevToLogoRegularIcon } from "../regular/dev-to-logo-regular.icon";
import { DevToLogoThinIcon } from "../thin/dev-to-logo-thin.icon";

export const DevToLogoIcon = createIcon("DevToLogo", {
  bold: DevToLogoBoldIcon,
  duotone: DevToLogoDuotoneIcon,
  fill: DevToLogoFillIcon,
  light: DevToLogoLightIcon,
  regular: DevToLogoRegularIcon,
  thin: DevToLogoThinIcon,
});
