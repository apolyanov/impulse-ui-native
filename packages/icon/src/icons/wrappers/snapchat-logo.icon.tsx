import { createIcon } from "../../hocs/create-icon.hoc";
import { SnapchatLogoBoldIcon } from "../bold/snapchat-logo-bold.icon";
import { SnapchatLogoDuotoneIcon } from "../duotone/snapchat-logo-duotone.icon";
import { SnapchatLogoFillIcon } from "../fill/snapchat-logo-fill.icon";
import { SnapchatLogoLightIcon } from "../light/snapchat-logo-light.icon";
import { SnapchatLogoRegularIcon } from "../regular/snapchat-logo-regular.icon";
import { SnapchatLogoThinIcon } from "../thin/snapchat-logo-thin.icon";

export const SnapchatLogoIcon = createIcon("SnapchatLogo", {
  bold: SnapchatLogoBoldIcon,
  duotone: SnapchatLogoDuotoneIcon,
  fill: SnapchatLogoFillIcon,
  light: SnapchatLogoLightIcon,
  regular: SnapchatLogoRegularIcon,
  thin: SnapchatLogoThinIcon,
});
