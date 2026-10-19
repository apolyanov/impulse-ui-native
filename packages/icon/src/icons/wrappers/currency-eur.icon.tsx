import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyEurBoldIcon } from "../bold/currency-eur-bold.icon";
import { CurrencyEurDuotoneIcon } from "../duotone/currency-eur-duotone.icon";
import { CurrencyEurFillIcon } from "../fill/currency-eur-fill.icon";
import { CurrencyEurLightIcon } from "../light/currency-eur-light.icon";
import { CurrencyEurRegularIcon } from "../regular/currency-eur-regular.icon";
import { CurrencyEurThinIcon } from "../thin/currency-eur-thin.icon";

export const CurrencyEurIcon = createIcon("CurrencyEur", {
  bold: CurrencyEurBoldIcon,
  duotone: CurrencyEurDuotoneIcon,
  fill: CurrencyEurFillIcon,
  light: CurrencyEurLightIcon,
  regular: CurrencyEurRegularIcon,
  thin: CurrencyEurThinIcon,
});
