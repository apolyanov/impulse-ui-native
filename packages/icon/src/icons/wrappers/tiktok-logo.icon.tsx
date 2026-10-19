import { createIcon } from "../../hocs/create-icon.hoc";
import { TiktokLogoBoldIcon } from "../bold/tiktok-logo-bold.icon";
import { TiktokLogoDuotoneIcon } from "../duotone/tiktok-logo-duotone.icon";
import { TiktokLogoFillIcon } from "../fill/tiktok-logo-fill.icon";
import { TiktokLogoLightIcon } from "../light/tiktok-logo-light.icon";
import { TiktokLogoRegularIcon } from "../regular/tiktok-logo-regular.icon";
import { TiktokLogoThinIcon } from "../thin/tiktok-logo-thin.icon";

export const TiktokLogoIcon = createIcon("TiktokLogo", {
  bold: TiktokLogoBoldIcon,
  duotone: TiktokLogoDuotoneIcon,
  fill: TiktokLogoFillIcon,
  light: TiktokLogoLightIcon,
  regular: TiktokLogoRegularIcon,
  thin: TiktokLogoThinIcon,
});
