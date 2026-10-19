import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyCircleDollarBoldIcon } from "../bold/currency-circle-dollar-bold.icon";
import { CurrencyCircleDollarDuotoneIcon } from "../duotone/currency-circle-dollar-duotone.icon";
import { CurrencyCircleDollarFillIcon } from "../fill/currency-circle-dollar-fill.icon";
import { CurrencyCircleDollarLightIcon } from "../light/currency-circle-dollar-light.icon";
import { CurrencyCircleDollarRegularIcon } from "../regular/currency-circle-dollar-regular.icon";
import { CurrencyCircleDollarThinIcon } from "../thin/currency-circle-dollar-thin.icon";

export const CurrencyCircleDollarIcon = createIcon("CurrencyCircleDollar", {
  bold: CurrencyCircleDollarBoldIcon,
  duotone: CurrencyCircleDollarDuotoneIcon,
  fill: CurrencyCircleDollarFillIcon,
  light: CurrencyCircleDollarLightIcon,
  regular: CurrencyCircleDollarRegularIcon,
  thin: CurrencyCircleDollarThinIcon,
});
