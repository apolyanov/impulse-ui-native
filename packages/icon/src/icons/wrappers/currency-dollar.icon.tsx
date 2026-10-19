import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyDollarBoldIcon } from "../bold/currency-dollar-bold.icon";
import { CurrencyDollarDuotoneIcon } from "../duotone/currency-dollar-duotone.icon";
import { CurrencyDollarFillIcon } from "../fill/currency-dollar-fill.icon";
import { CurrencyDollarLightIcon } from "../light/currency-dollar-light.icon";
import { CurrencyDollarRegularIcon } from "../regular/currency-dollar-regular.icon";
import { CurrencyDollarThinIcon } from "../thin/currency-dollar-thin.icon";

export const CurrencyDollarIcon = createIcon("CurrencyDollar", {
  bold: CurrencyDollarBoldIcon,
  duotone: CurrencyDollarDuotoneIcon,
  fill: CurrencyDollarFillIcon,
  light: CurrencyDollarLightIcon,
  regular: CurrencyDollarRegularIcon,
  thin: CurrencyDollarThinIcon,
});
