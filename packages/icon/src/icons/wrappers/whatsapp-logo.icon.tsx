import { createIcon } from "../../hocs/create-icon.hoc";
import { WhatsappLogoBoldIcon } from "../bold/whatsapp-logo-bold.icon";
import { WhatsappLogoDuotoneIcon } from "../duotone/whatsapp-logo-duotone.icon";
import { WhatsappLogoFillIcon } from "../fill/whatsapp-logo-fill.icon";
import { WhatsappLogoLightIcon } from "../light/whatsapp-logo-light.icon";
import { WhatsappLogoRegularIcon } from "../regular/whatsapp-logo-regular.icon";
import { WhatsappLogoThinIcon } from "../thin/whatsapp-logo-thin.icon";

export const WhatsappLogoIcon = createIcon("WhatsappLogo", {
  bold: WhatsappLogoBoldIcon,
  duotone: WhatsappLogoDuotoneIcon,
  fill: WhatsappLogoFillIcon,
  light: WhatsappLogoLightIcon,
  regular: WhatsappLogoRegularIcon,
  thin: WhatsappLogoThinIcon,
});
