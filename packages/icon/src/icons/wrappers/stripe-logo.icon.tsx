import { createIcon } from "../../hocs/create-icon.hoc";
import { StripeLogoBoldIcon } from "../bold/stripe-logo-bold.icon";
import { StripeLogoDuotoneIcon } from "../duotone/stripe-logo-duotone.icon";
import { StripeLogoFillIcon } from "../fill/stripe-logo-fill.icon";
import { StripeLogoLightIcon } from "../light/stripe-logo-light.icon";
import { StripeLogoRegularIcon } from "../regular/stripe-logo-regular.icon";
import { StripeLogoThinIcon } from "../thin/stripe-logo-thin.icon";

export const StripeLogoIcon = createIcon("StripeLogo", {
  bold: StripeLogoBoldIcon,
  duotone: StripeLogoDuotoneIcon,
  fill: StripeLogoFillIcon,
  light: StripeLogoLightIcon,
  regular: StripeLogoRegularIcon,
  thin: StripeLogoThinIcon,
});
