import { createIcon } from "../../hocs/create-icon.hoc";
import { CreditCardBoldIcon } from "../bold/credit-card-bold.icon";
import { CreditCardDuotoneIcon } from "../duotone/credit-card-duotone.icon";
import { CreditCardFillIcon } from "../fill/credit-card-fill.icon";
import { CreditCardLightIcon } from "../light/credit-card-light.icon";
import { CreditCardRegularIcon } from "../regular/credit-card-regular.icon";
import { CreditCardThinIcon } from "../thin/credit-card-thin.icon";

export const CreditCardIcon = createIcon("CreditCard", {
  bold: CreditCardBoldIcon,
  duotone: CreditCardDuotoneIcon,
  fill: CreditCardFillIcon,
  light: CreditCardLightIcon,
  regular: CreditCardRegularIcon,
  thin: CreditCardThinIcon,
});
