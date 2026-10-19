import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyKrwBoldIcon } from "../bold/currency-krw-bold.icon";
import { CurrencyKrwDuotoneIcon } from "../duotone/currency-krw-duotone.icon";
import { CurrencyKrwFillIcon } from "../fill/currency-krw-fill.icon";
import { CurrencyKrwLightIcon } from "../light/currency-krw-light.icon";
import { CurrencyKrwRegularIcon } from "../regular/currency-krw-regular.icon";
import { CurrencyKrwThinIcon } from "../thin/currency-krw-thin.icon";

export const CurrencyKrwIcon = createIcon("CurrencyKrw", {
  bold: CurrencyKrwBoldIcon,
  duotone: CurrencyKrwDuotoneIcon,
  fill: CurrencyKrwFillIcon,
  light: CurrencyKrwLightIcon,
  regular: CurrencyKrwRegularIcon,
  thin: CurrencyKrwThinIcon,
});
