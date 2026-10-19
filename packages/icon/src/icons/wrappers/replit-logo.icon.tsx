import { createIcon } from "../../hocs/create-icon.hoc";
import { ReplitLogoBoldIcon } from "../bold/replit-logo-bold.icon";
import { ReplitLogoDuotoneIcon } from "../duotone/replit-logo-duotone.icon";
import { ReplitLogoFillIcon } from "../fill/replit-logo-fill.icon";
import { ReplitLogoLightIcon } from "../light/replit-logo-light.icon";
import { ReplitLogoRegularIcon } from "../regular/replit-logo-regular.icon";
import { ReplitLogoThinIcon } from "../thin/replit-logo-thin.icon";

export const ReplitLogoIcon = createIcon("ReplitLogo", {
  bold: ReplitLogoBoldIcon,
  duotone: ReplitLogoDuotoneIcon,
  fill: ReplitLogoFillIcon,
  light: ReplitLogoLightIcon,
  regular: ReplitLogoRegularIcon,
  thin: ReplitLogoThinIcon,
});
