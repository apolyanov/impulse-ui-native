import { createIcon } from "../../hocs/create-icon.hoc";
import { SlackLogoBoldIcon } from "../bold/slack-logo-bold.icon";
import { SlackLogoDuotoneIcon } from "../duotone/slack-logo-duotone.icon";
import { SlackLogoFillIcon } from "../fill/slack-logo-fill.icon";
import { SlackLogoLightIcon } from "../light/slack-logo-light.icon";
import { SlackLogoRegularIcon } from "../regular/slack-logo-regular.icon";
import { SlackLogoThinIcon } from "../thin/slack-logo-thin.icon";

export const SlackLogoIcon = createIcon("SlackLogo", {
  bold: SlackLogoBoldIcon,
  duotone: SlackLogoDuotoneIcon,
  fill: SlackLogoFillIcon,
  light: SlackLogoLightIcon,
  regular: SlackLogoRegularIcon,
  thin: SlackLogoThinIcon,
});
