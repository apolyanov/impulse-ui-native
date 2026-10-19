import { createIcon } from "../../hocs/create-icon.hoc";
import { PatreonLogoBoldIcon } from "../bold/patreon-logo-bold.icon";
import { PatreonLogoDuotoneIcon } from "../duotone/patreon-logo-duotone.icon";
import { PatreonLogoFillIcon } from "../fill/patreon-logo-fill.icon";
import { PatreonLogoLightIcon } from "../light/patreon-logo-light.icon";
import { PatreonLogoRegularIcon } from "../regular/patreon-logo-regular.icon";
import { PatreonLogoThinIcon } from "../thin/patreon-logo-thin.icon";

export const PatreonLogoIcon = createIcon("PatreonLogo", {
  bold: PatreonLogoBoldIcon,
  duotone: PatreonLogoDuotoneIcon,
  fill: PatreonLogoFillIcon,
  light: PatreonLogoLightIcon,
  regular: PatreonLogoRegularIcon,
  thin: PatreonLogoThinIcon,
});
