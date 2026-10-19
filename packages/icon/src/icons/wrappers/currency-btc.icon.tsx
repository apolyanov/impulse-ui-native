import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyBtcBoldIcon } from "../bold/currency-btc-bold.icon";
import { CurrencyBtcDuotoneIcon } from "../duotone/currency-btc-duotone.icon";
import { CurrencyBtcFillIcon } from "../fill/currency-btc-fill.icon";
import { CurrencyBtcLightIcon } from "../light/currency-btc-light.icon";
import { CurrencyBtcRegularIcon } from "../regular/currency-btc-regular.icon";
import { CurrencyBtcThinIcon } from "../thin/currency-btc-thin.icon";

export const CurrencyBtcIcon = createIcon("CurrencyBtc", {
  bold: CurrencyBtcBoldIcon,
  duotone: CurrencyBtcDuotoneIcon,
  fill: CurrencyBtcFillIcon,
  light: CurrencyBtcLightIcon,
  regular: CurrencyBtcRegularIcon,
  thin: CurrencyBtcThinIcon,
});
