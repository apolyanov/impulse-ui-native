import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrosoftOutlookLogoBoldIcon } from "../bold/microsoft-outlook-logo-bold.icon";
import { MicrosoftOutlookLogoDuotoneIcon } from "../duotone/microsoft-outlook-logo-duotone.icon";
import { MicrosoftOutlookLogoFillIcon } from "../fill/microsoft-outlook-logo-fill.icon";
import { MicrosoftOutlookLogoLightIcon } from "../light/microsoft-outlook-logo-light.icon";
import { MicrosoftOutlookLogoRegularIcon } from "../regular/microsoft-outlook-logo-regular.icon";
import { MicrosoftOutlookLogoThinIcon } from "../thin/microsoft-outlook-logo-thin.icon";

export const MicrosoftOutlookLogoIcon = createIcon("MicrosoftOutlookLogo", {
  bold: MicrosoftOutlookLogoBoldIcon,
  duotone: MicrosoftOutlookLogoDuotoneIcon,
  fill: MicrosoftOutlookLogoFillIcon,
  light: MicrosoftOutlookLogoLightIcon,
  regular: MicrosoftOutlookLogoRegularIcon,
  thin: MicrosoftOutlookLogoThinIcon,
});
