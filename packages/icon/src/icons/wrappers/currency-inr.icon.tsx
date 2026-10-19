import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyInrBoldIcon } from "../bold/currency-inr-bold.icon";
import { CurrencyInrDuotoneIcon } from "../duotone/currency-inr-duotone.icon";
import { CurrencyInrFillIcon } from "../fill/currency-inr-fill.icon";
import { CurrencyInrLightIcon } from "../light/currency-inr-light.icon";
import { CurrencyInrRegularIcon } from "../regular/currency-inr-regular.icon";
import { CurrencyInrThinIcon } from "../thin/currency-inr-thin.icon";

export const CurrencyInrIcon = createIcon("CurrencyInr", {
  bold: CurrencyInrBoldIcon,
  duotone: CurrencyInrDuotoneIcon,
  fill: CurrencyInrFillIcon,
  light: CurrencyInrLightIcon,
  regular: CurrencyInrRegularIcon,
  thin: CurrencyInrThinIcon,
});
