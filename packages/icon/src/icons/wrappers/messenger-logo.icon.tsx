import { createIcon } from "../../hocs/create-icon.hoc";
import { MessengerLogoBoldIcon } from "../bold/messenger-logo-bold.icon";
import { MessengerLogoDuotoneIcon } from "../duotone/messenger-logo-duotone.icon";
import { MessengerLogoFillIcon } from "../fill/messenger-logo-fill.icon";
import { MessengerLogoLightIcon } from "../light/messenger-logo-light.icon";
import { MessengerLogoRegularIcon } from "../regular/messenger-logo-regular.icon";
import { MessengerLogoThinIcon } from "../thin/messenger-logo-thin.icon";

export const MessengerLogoIcon = createIcon("MessengerLogo", {
  bold: MessengerLogoBoldIcon,
  duotone: MessengerLogoDuotoneIcon,
  fill: MessengerLogoFillIcon,
  light: MessengerLogoLightIcon,
  regular: MessengerLogoRegularIcon,
  thin: MessengerLogoThinIcon,
});
