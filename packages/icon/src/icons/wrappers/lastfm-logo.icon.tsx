import { createIcon } from "../../hocs/create-icon.hoc";
import { LastfmLogoBoldIcon } from "../bold/lastfm-logo-bold.icon";
import { LastfmLogoDuotoneIcon } from "../duotone/lastfm-logo-duotone.icon";
import { LastfmLogoFillIcon } from "../fill/lastfm-logo-fill.icon";
import { LastfmLogoLightIcon } from "../light/lastfm-logo-light.icon";
import { LastfmLogoRegularIcon } from "../regular/lastfm-logo-regular.icon";
import { LastfmLogoThinIcon } from "../thin/lastfm-logo-thin.icon";

export const LastfmLogoIcon = createIcon("LastfmLogo", {
  bold: LastfmLogoBoldIcon,
  duotone: LastfmLogoDuotoneIcon,
  fill: LastfmLogoFillIcon,
  light: LastfmLogoLightIcon,
  regular: LastfmLogoRegularIcon,
  thin: LastfmLogoThinIcon,
});
