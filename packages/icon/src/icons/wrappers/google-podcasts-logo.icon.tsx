import { createIcon } from "../../hocs/create-icon.hoc";
import { GooglePodcastsLogoBoldIcon } from "../bold/google-podcasts-logo-bold.icon";
import { GooglePodcastsLogoDuotoneIcon } from "../duotone/google-podcasts-logo-duotone.icon";
import { GooglePodcastsLogoFillIcon } from "../fill/google-podcasts-logo-fill.icon";
import { GooglePodcastsLogoLightIcon } from "../light/google-podcasts-logo-light.icon";
import { GooglePodcastsLogoRegularIcon } from "../regular/google-podcasts-logo-regular.icon";
import { GooglePodcastsLogoThinIcon } from "../thin/google-podcasts-logo-thin.icon";

export const GooglePodcastsLogoIcon = createIcon("GooglePodcastsLogo", {
  bold: GooglePodcastsLogoBoldIcon,
  duotone: GooglePodcastsLogoDuotoneIcon,
  fill: GooglePodcastsLogoFillIcon,
  light: GooglePodcastsLogoLightIcon,
  regular: GooglePodcastsLogoRegularIcon,
  thin: GooglePodcastsLogoThinIcon,
});
