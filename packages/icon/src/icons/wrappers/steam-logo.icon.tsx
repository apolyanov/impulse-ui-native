import { createIcon } from "../../hocs/create-icon.hoc";
import { SteamLogoBoldIcon } from "../bold/steam-logo-bold.icon";
import { SteamLogoDuotoneIcon } from "../duotone/steam-logo-duotone.icon";
import { SteamLogoFillIcon } from "../fill/steam-logo-fill.icon";
import { SteamLogoLightIcon } from "../light/steam-logo-light.icon";
import { SteamLogoRegularIcon } from "../regular/steam-logo-regular.icon";
import { SteamLogoThinIcon } from "../thin/steam-logo-thin.icon";

export const SteamLogoIcon = createIcon("SteamLogo", {
  bold: SteamLogoBoldIcon,
  duotone: SteamLogoDuotoneIcon,
  fill: SteamLogoFillIcon,
  light: SteamLogoLightIcon,
  regular: SteamLogoRegularIcon,
  thin: SteamLogoThinIcon,
});
