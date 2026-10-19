import { createIcon } from "../../hocs/create-icon.hoc";
import { WindowsLogoBoldIcon } from "../bold/windows-logo-bold.icon";
import { WindowsLogoDuotoneIcon } from "../duotone/windows-logo-duotone.icon";
import { WindowsLogoFillIcon } from "../fill/windows-logo-fill.icon";
import { WindowsLogoLightIcon } from "../light/windows-logo-light.icon";
import { WindowsLogoRegularIcon } from "../regular/windows-logo-regular.icon";
import { WindowsLogoThinIcon } from "../thin/windows-logo-thin.icon";

export const WindowsLogoIcon = createIcon("WindowsLogo", {
  bold: WindowsLogoBoldIcon,
  duotone: WindowsLogoDuotoneIcon,
  fill: WindowsLogoFillIcon,
  light: WindowsLogoLightIcon,
  regular: WindowsLogoRegularIcon,
  thin: WindowsLogoThinIcon,
});
