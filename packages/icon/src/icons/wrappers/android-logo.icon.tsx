import { createIcon } from "../../hocs/create-icon.hoc";
import { AndroidLogoBoldIcon } from "../bold/android-logo-bold.icon";
import { AndroidLogoDuotoneIcon } from "../duotone/android-logo-duotone.icon";
import { AndroidLogoFillIcon } from "../fill/android-logo-fill.icon";
import { AndroidLogoLightIcon } from "../light/android-logo-light.icon";
import { AndroidLogoRegularIcon } from "../regular/android-logo-regular.icon";
import { AndroidLogoThinIcon } from "../thin/android-logo-thin.icon";

export const AndroidLogoIcon = createIcon("AndroidLogo", {
  bold: AndroidLogoBoldIcon,
  duotone: AndroidLogoDuotoneIcon,
  fill: AndroidLogoFillIcon,
  light: AndroidLogoLightIcon,
  regular: AndroidLogoRegularIcon,
  thin: AndroidLogoThinIcon,
});
