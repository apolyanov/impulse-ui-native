import { createIcon } from "../../hocs/create-icon.hoc";
import { FediverseLogoBoldIcon } from "../bold/fediverse-logo-bold.icon";
import { FediverseLogoDuotoneIcon } from "../duotone/fediverse-logo-duotone.icon";
import { FediverseLogoFillIcon } from "../fill/fediverse-logo-fill.icon";
import { FediverseLogoLightIcon } from "../light/fediverse-logo-light.icon";
import { FediverseLogoRegularIcon } from "../regular/fediverse-logo-regular.icon";
import { FediverseLogoThinIcon } from "../thin/fediverse-logo-thin.icon";

export const FediverseLogoIcon = createIcon("FediverseLogo", {
  bold: FediverseLogoBoldIcon,
  duotone: FediverseLogoDuotoneIcon,
  fill: FediverseLogoFillIcon,
  light: FediverseLogoLightIcon,
  regular: FediverseLogoRegularIcon,
  thin: FediverseLogoThinIcon,
});
