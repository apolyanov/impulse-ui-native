import { createIcon } from "../../hocs/create-icon.hoc";
import { SkypeLogoBoldIcon } from "../bold/skype-logo-bold.icon";
import { SkypeLogoDuotoneIcon } from "../duotone/skype-logo-duotone.icon";
import { SkypeLogoFillIcon } from "../fill/skype-logo-fill.icon";
import { SkypeLogoLightIcon } from "../light/skype-logo-light.icon";
import { SkypeLogoRegularIcon } from "../regular/skype-logo-regular.icon";
import { SkypeLogoThinIcon } from "../thin/skype-logo-thin.icon";

export const SkypeLogoIcon = createIcon("SkypeLogo", {
  bold: SkypeLogoBoldIcon,
  duotone: SkypeLogoDuotoneIcon,
  fill: SkypeLogoFillIcon,
  light: SkypeLogoLightIcon,
  regular: SkypeLogoRegularIcon,
  thin: SkypeLogoThinIcon,
});
