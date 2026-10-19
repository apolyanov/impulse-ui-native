import { createIcon } from "../../hocs/create-icon.hoc";
import { TwitchLogoBoldIcon } from "../bold/twitch-logo-bold.icon";
import { TwitchLogoDuotoneIcon } from "../duotone/twitch-logo-duotone.icon";
import { TwitchLogoFillIcon } from "../fill/twitch-logo-fill.icon";
import { TwitchLogoLightIcon } from "../light/twitch-logo-light.icon";
import { TwitchLogoRegularIcon } from "../regular/twitch-logo-regular.icon";
import { TwitchLogoThinIcon } from "../thin/twitch-logo-thin.icon";

export const TwitchLogoIcon = createIcon("TwitchLogo", {
  bold: TwitchLogoBoldIcon,
  duotone: TwitchLogoDuotoneIcon,
  fill: TwitchLogoFillIcon,
  light: TwitchLogoLightIcon,
  regular: TwitchLogoRegularIcon,
  thin: TwitchLogoThinIcon,
});
