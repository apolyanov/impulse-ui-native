import { createIcon } from "../../hocs/create-icon.hoc";
import { ApplePodcastsLogoBoldIcon } from "../bold/apple-podcasts-logo-bold.icon";
import { ApplePodcastsLogoDuotoneIcon } from "../duotone/apple-podcasts-logo-duotone.icon";
import { ApplePodcastsLogoFillIcon } from "../fill/apple-podcasts-logo-fill.icon";
import { ApplePodcastsLogoLightIcon } from "../light/apple-podcasts-logo-light.icon";
import { ApplePodcastsLogoRegularIcon } from "../regular/apple-podcasts-logo-regular.icon";
import { ApplePodcastsLogoThinIcon } from "../thin/apple-podcasts-logo-thin.icon";

export const ApplePodcastsLogoIcon = createIcon("ApplePodcastsLogo", {
  bold: ApplePodcastsLogoBoldIcon,
  duotone: ApplePodcastsLogoDuotoneIcon,
  fill: ApplePodcastsLogoFillIcon,
  light: ApplePodcastsLogoLightIcon,
  regular: ApplePodcastsLogoRegularIcon,
  thin: ApplePodcastsLogoThinIcon,
});
