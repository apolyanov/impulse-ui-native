import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrosoftPowerpointLogoBoldIcon } from "../bold/microsoft-powerpoint-logo-bold.icon";
import { MicrosoftPowerpointLogoDuotoneIcon } from "../duotone/microsoft-powerpoint-logo-duotone.icon";
import { MicrosoftPowerpointLogoFillIcon } from "../fill/microsoft-powerpoint-logo-fill.icon";
import { MicrosoftPowerpointLogoLightIcon } from "../light/microsoft-powerpoint-logo-light.icon";
import { MicrosoftPowerpointLogoRegularIcon } from "../regular/microsoft-powerpoint-logo-regular.icon";
import { MicrosoftPowerpointLogoThinIcon } from "../thin/microsoft-powerpoint-logo-thin.icon";

export const MicrosoftPowerpointLogoIcon = createIcon(
  "MicrosoftPowerpointLogo",
  {
    bold: MicrosoftPowerpointLogoBoldIcon,
    duotone: MicrosoftPowerpointLogoDuotoneIcon,
    fill: MicrosoftPowerpointLogoFillIcon,
    light: MicrosoftPowerpointLogoLightIcon,
    regular: MicrosoftPowerpointLogoRegularIcon,
    thin: MicrosoftPowerpointLogoThinIcon,
  },
);
