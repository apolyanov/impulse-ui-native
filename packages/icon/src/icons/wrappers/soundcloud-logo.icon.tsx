import { createIcon } from "../../hocs/create-icon.hoc";
import { SoundcloudLogoBoldIcon } from "../bold/soundcloud-logo-bold.icon";
import { SoundcloudLogoDuotoneIcon } from "../duotone/soundcloud-logo-duotone.icon";
import { SoundcloudLogoFillIcon } from "../fill/soundcloud-logo-fill.icon";
import { SoundcloudLogoLightIcon } from "../light/soundcloud-logo-light.icon";
import { SoundcloudLogoRegularIcon } from "../regular/soundcloud-logo-regular.icon";
import { SoundcloudLogoThinIcon } from "../thin/soundcloud-logo-thin.icon";

export const SoundcloudLogoIcon = createIcon("SoundcloudLogo", {
  bold: SoundcloudLogoBoldIcon,
  duotone: SoundcloudLogoDuotoneIcon,
  fill: SoundcloudLogoFillIcon,
  light: SoundcloudLogoLightIcon,
  regular: SoundcloudLogoRegularIcon,
  thin: SoundcloudLogoThinIcon,
});
