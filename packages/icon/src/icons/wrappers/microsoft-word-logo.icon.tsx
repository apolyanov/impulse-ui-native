import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrosoftWordLogoBoldIcon } from "../bold/microsoft-word-logo-bold.icon";
import { MicrosoftWordLogoDuotoneIcon } from "../duotone/microsoft-word-logo-duotone.icon";
import { MicrosoftWordLogoFillIcon } from "../fill/microsoft-word-logo-fill.icon";
import { MicrosoftWordLogoLightIcon } from "../light/microsoft-word-logo-light.icon";
import { MicrosoftWordLogoRegularIcon } from "../regular/microsoft-word-logo-regular.icon";
import { MicrosoftWordLogoThinIcon } from "../thin/microsoft-word-logo-thin.icon";

export const MicrosoftWordLogoIcon = createIcon("MicrosoftWordLogo", {
  bold: MicrosoftWordLogoBoldIcon,
  duotone: MicrosoftWordLogoDuotoneIcon,
  fill: MicrosoftWordLogoFillIcon,
  light: MicrosoftWordLogoLightIcon,
  regular: MicrosoftWordLogoRegularIcon,
  thin: MicrosoftWordLogoThinIcon,
});
