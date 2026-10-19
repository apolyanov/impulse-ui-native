import { createIcon } from "../../hocs/create-icon.hoc";
import { AppStoreLogoBoldIcon } from "../bold/app-store-logo-bold.icon";
import { AppStoreLogoDuotoneIcon } from "../duotone/app-store-logo-duotone.icon";
import { AppStoreLogoFillIcon } from "../fill/app-store-logo-fill.icon";
import { AppStoreLogoLightIcon } from "../light/app-store-logo-light.icon";
import { AppStoreLogoRegularIcon } from "../regular/app-store-logo-regular.icon";
import { AppStoreLogoThinIcon } from "../thin/app-store-logo-thin.icon";

export const AppStoreLogoIcon = createIcon("AppStoreLogo", {
  bold: AppStoreLogoBoldIcon,
  duotone: AppStoreLogoDuotoneIcon,
  fill: AppStoreLogoFillIcon,
  light: AppStoreLogoLightIcon,
  regular: AppStoreLogoRegularIcon,
  thin: AppStoreLogoThinIcon,
});
