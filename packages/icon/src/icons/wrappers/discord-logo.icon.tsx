import { createIcon } from "../../hocs/create-icon.hoc";
import { DiscordLogoBoldIcon } from "../bold/discord-logo-bold.icon";
import { DiscordLogoDuotoneIcon } from "../duotone/discord-logo-duotone.icon";
import { DiscordLogoFillIcon } from "../fill/discord-logo-fill.icon";
import { DiscordLogoLightIcon } from "../light/discord-logo-light.icon";
import { DiscordLogoRegularIcon } from "../regular/discord-logo-regular.icon";
import { DiscordLogoThinIcon } from "../thin/discord-logo-thin.icon";

export const DiscordLogoIcon = createIcon("DiscordLogo", {
  bold: DiscordLogoBoldIcon,
  duotone: DiscordLogoDuotoneIcon,
  fill: DiscordLogoFillIcon,
  light: DiscordLogoLightIcon,
  regular: DiscordLogoRegularIcon,
  thin: DiscordLogoThinIcon,
});
