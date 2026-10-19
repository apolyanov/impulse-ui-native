import { createIcon } from "../../hocs/create-icon.hoc";
import { PixLogoBoldIcon } from "../bold/pix-logo-bold.icon";
import { PixLogoDuotoneIcon } from "../duotone/pix-logo-duotone.icon";
import { PixLogoFillIcon } from "../fill/pix-logo-fill.icon";
import { PixLogoLightIcon } from "../light/pix-logo-light.icon";
import { PixLogoRegularIcon } from "../regular/pix-logo-regular.icon";
import { PixLogoThinIcon } from "../thin/pix-logo-thin.icon";

export const PixLogoIcon = createIcon("PixLogo", {
  bold: PixLogoBoldIcon,
  duotone: PixLogoDuotoneIcon,
  fill: PixLogoFillIcon,
  light: PixLogoLightIcon,
  regular: PixLogoRegularIcon,
  thin: PixLogoThinIcon,
});
