import { createIcon } from "../../hocs/create-icon.hoc";
import { XLogoBoldIcon } from "../bold/x-logo-bold.icon";
import { XLogoDuotoneIcon } from "../duotone/x-logo-duotone.icon";
import { XLogoFillIcon } from "../fill/x-logo-fill.icon";
import { XLogoLightIcon } from "../light/x-logo-light.icon";
import { XLogoRegularIcon } from "../regular/x-logo-regular.icon";
import { XLogoThinIcon } from "../thin/x-logo-thin.icon";

export const XLogoIcon = createIcon("XLogo", {
  bold: XLogoBoldIcon,
  duotone: XLogoDuotoneIcon,
  fill: XLogoFillIcon,
  light: XLogoLightIcon,
  regular: XLogoRegularIcon,
  thin: XLogoThinIcon,
});
