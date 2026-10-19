import { createIcon } from "../../hocs/create-icon.hoc";
import { PaypalLogoBoldIcon } from "../bold/paypal-logo-bold.icon";
import { PaypalLogoDuotoneIcon } from "../duotone/paypal-logo-duotone.icon";
import { PaypalLogoFillIcon } from "../fill/paypal-logo-fill.icon";
import { PaypalLogoLightIcon } from "../light/paypal-logo-light.icon";
import { PaypalLogoRegularIcon } from "../regular/paypal-logo-regular.icon";
import { PaypalLogoThinIcon } from "../thin/paypal-logo-thin.icon";

export const PaypalLogoIcon = createIcon("PaypalLogo", {
  bold: PaypalLogoBoldIcon,
  duotone: PaypalLogoDuotoneIcon,
  fill: PaypalLogoFillIcon,
  light: PaypalLogoLightIcon,
  regular: PaypalLogoRegularIcon,
  thin: PaypalLogoThinIcon,
});
