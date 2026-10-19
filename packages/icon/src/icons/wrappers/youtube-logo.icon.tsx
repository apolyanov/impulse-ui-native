import { createIcon } from "../../hocs/create-icon.hoc";
import { YoutubeLogoBoldIcon } from "../bold/youtube-logo-bold.icon";
import { YoutubeLogoDuotoneIcon } from "../duotone/youtube-logo-duotone.icon";
import { YoutubeLogoFillIcon } from "../fill/youtube-logo-fill.icon";
import { YoutubeLogoLightIcon } from "../light/youtube-logo-light.icon";
import { YoutubeLogoRegularIcon } from "../regular/youtube-logo-regular.icon";
import { YoutubeLogoThinIcon } from "../thin/youtube-logo-thin.icon";

export const YoutubeLogoIcon = createIcon("YoutubeLogo", {
  bold: YoutubeLogoBoldIcon,
  duotone: YoutubeLogoDuotoneIcon,
  fill: YoutubeLogoFillIcon,
  light: YoutubeLogoLightIcon,
  regular: YoutubeLogoRegularIcon,
  thin: YoutubeLogoThinIcon,
});
