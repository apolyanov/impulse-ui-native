import { createIcon } from "../../hocs/create-icon.hoc";
import { RedditLogoBoldIcon } from "../bold/reddit-logo-bold.icon";
import { RedditLogoDuotoneIcon } from "../duotone/reddit-logo-duotone.icon";
import { RedditLogoFillIcon } from "../fill/reddit-logo-fill.icon";
import { RedditLogoLightIcon } from "../light/reddit-logo-light.icon";
import { RedditLogoRegularIcon } from "../regular/reddit-logo-regular.icon";
import { RedditLogoThinIcon } from "../thin/reddit-logo-thin.icon";

export const RedditLogoIcon = createIcon("RedditLogo", {
  bold: RedditLogoBoldIcon,
  duotone: RedditLogoDuotoneIcon,
  fill: RedditLogoFillIcon,
  light: RedditLogoLightIcon,
  regular: RedditLogoRegularIcon,
  thin: RedditLogoThinIcon,
});
