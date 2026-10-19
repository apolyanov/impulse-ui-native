import { createIcon } from "../../hocs/create-icon.hoc";
import { MastodonLogoBoldIcon } from "../bold/mastodon-logo-bold.icon";
import { MastodonLogoDuotoneIcon } from "../duotone/mastodon-logo-duotone.icon";
import { MastodonLogoFillIcon } from "../fill/mastodon-logo-fill.icon";
import { MastodonLogoLightIcon } from "../light/mastodon-logo-light.icon";
import { MastodonLogoRegularIcon } from "../regular/mastodon-logo-regular.icon";
import { MastodonLogoThinIcon } from "../thin/mastodon-logo-thin.icon";

export const MastodonLogoIcon = createIcon("MastodonLogo", {
  bold: MastodonLogoBoldIcon,
  duotone: MastodonLogoDuotoneIcon,
  fill: MastodonLogoFillIcon,
  light: MastodonLogoLightIcon,
  regular: MastodonLogoRegularIcon,
  thin: MastodonLogoThinIcon,
});
