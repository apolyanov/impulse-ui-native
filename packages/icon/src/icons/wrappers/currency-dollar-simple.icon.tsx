import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyDollarSimpleBoldIcon } from "../bold/currency-dollar-simple-bold.icon";
import { CurrencyDollarSimpleDuotoneIcon } from "../duotone/currency-dollar-simple-duotone.icon";
import { CurrencyDollarSimpleFillIcon } from "../fill/currency-dollar-simple-fill.icon";
import { CurrencyDollarSimpleLightIcon } from "../light/currency-dollar-simple-light.icon";
import { CurrencyDollarSimpleRegularIcon } from "../regular/currency-dollar-simple-regular.icon";
import { CurrencyDollarSimpleThinIcon } from "../thin/currency-dollar-simple-thin.icon";

export const CurrencyDollarSimpleIcon = createIcon("CurrencyDollarSimple", {
  bold: CurrencyDollarSimpleBoldIcon,
  duotone: CurrencyDollarSimpleDuotoneIcon,
  fill: CurrencyDollarSimpleFillIcon,
  light: CurrencyDollarSimpleLightIcon,
  regular: CurrencyDollarSimpleRegularIcon,
  thin: CurrencyDollarSimpleThinIcon,
});
