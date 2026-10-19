import { createIcon } from "../../hocs/create-icon.hoc";
import { LinuxLogoBoldIcon } from "../bold/linux-logo-bold.icon";
import { LinuxLogoDuotoneIcon } from "../duotone/linux-logo-duotone.icon";
import { LinuxLogoFillIcon } from "../fill/linux-logo-fill.icon";
import { LinuxLogoLightIcon } from "../light/linux-logo-light.icon";
import { LinuxLogoRegularIcon } from "../regular/linux-logo-regular.icon";
import { LinuxLogoThinIcon } from "../thin/linux-logo-thin.icon";

export const LinuxLogoIcon = createIcon("LinuxLogo", {
  bold: LinuxLogoBoldIcon,
  duotone: LinuxLogoDuotoneIcon,
  fill: LinuxLogoFillIcon,
  light: LinuxLogoLightIcon,
  regular: LinuxLogoRegularIcon,
  thin: LinuxLogoThinIcon,
});
