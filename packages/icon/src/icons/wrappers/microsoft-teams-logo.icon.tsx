import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrosoftTeamsLogoBoldIcon } from "../bold/microsoft-teams-logo-bold.icon";
import { MicrosoftTeamsLogoDuotoneIcon } from "../duotone/microsoft-teams-logo-duotone.icon";
import { MicrosoftTeamsLogoFillIcon } from "../fill/microsoft-teams-logo-fill.icon";
import { MicrosoftTeamsLogoLightIcon } from "../light/microsoft-teams-logo-light.icon";
import { MicrosoftTeamsLogoRegularIcon } from "../regular/microsoft-teams-logo-regular.icon";
import { MicrosoftTeamsLogoThinIcon } from "../thin/microsoft-teams-logo-thin.icon";

export const MicrosoftTeamsLogoIcon = createIcon("MicrosoftTeamsLogo", {
  bold: MicrosoftTeamsLogoBoldIcon,
  duotone: MicrosoftTeamsLogoDuotoneIcon,
  fill: MicrosoftTeamsLogoFillIcon,
  light: MicrosoftTeamsLogoLightIcon,
  regular: MicrosoftTeamsLogoRegularIcon,
  thin: MicrosoftTeamsLogoThinIcon,
});
