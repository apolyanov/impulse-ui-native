import { createIcon } from "../../hocs/create-icon.hoc";
import { SpotifyLogoBoldIcon } from "../bold/spotify-logo-bold.icon";
import { SpotifyLogoDuotoneIcon } from "../duotone/spotify-logo-duotone.icon";
import { SpotifyLogoFillIcon } from "../fill/spotify-logo-fill.icon";
import { SpotifyLogoLightIcon } from "../light/spotify-logo-light.icon";
import { SpotifyLogoRegularIcon } from "../regular/spotify-logo-regular.icon";
import { SpotifyLogoThinIcon } from "../thin/spotify-logo-thin.icon";

export const SpotifyLogoIcon = createIcon("SpotifyLogo", {
  bold: SpotifyLogoBoldIcon,
  duotone: SpotifyLogoDuotoneIcon,
  fill: SpotifyLogoFillIcon,
  light: SpotifyLogoLightIcon,
  regular: SpotifyLogoRegularIcon,
  thin: SpotifyLogoThinIcon,
});
