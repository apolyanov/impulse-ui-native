import { createIcon } from "../../hocs/create-icon.hoc";
import { ContactlessPaymentBoldIcon } from "../bold/contactless-payment-bold.icon";
import { ContactlessPaymentDuotoneIcon } from "../duotone/contactless-payment-duotone.icon";
import { ContactlessPaymentFillIcon } from "../fill/contactless-payment-fill.icon";
import { ContactlessPaymentLightIcon } from "../light/contactless-payment-light.icon";
import { ContactlessPaymentRegularIcon } from "../regular/contactless-payment-regular.icon";
import { ContactlessPaymentThinIcon } from "../thin/contactless-payment-thin.icon";

export const ContactlessPaymentIcon = createIcon("ContactlessPayment", {
  bold: ContactlessPaymentBoldIcon,
  duotone: ContactlessPaymentDuotoneIcon,
  fill: ContactlessPaymentFillIcon,
  light: ContactlessPaymentLightIcon,
  regular: ContactlessPaymentRegularIcon,
  thin: ContactlessPaymentThinIcon,
});
