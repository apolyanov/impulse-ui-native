import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyGbpBoldIcon } from "../bold/currency-gbp-bold.icon";
import { CurrencyGbpDuotoneIcon } from "../duotone/currency-gbp-duotone.icon";
import { CurrencyGbpFillIcon } from "../fill/currency-gbp-fill.icon";
import { CurrencyGbpLightIcon } from "../light/currency-gbp-light.icon";
import { CurrencyGbpRegularIcon } from "../regular/currency-gbp-regular.icon";
import { CurrencyGbpThinIcon } from "../thin/currency-gbp-thin.icon";

export const CurrencyGbpIcon = createIcon("CurrencyGbp", {
  bold: CurrencyGbpBoldIcon,
  duotone: CurrencyGbpDuotoneIcon,
  fill: CurrencyGbpFillIcon,
  light: CurrencyGbpLightIcon,
  regular: CurrencyGbpRegularIcon,
  thin: CurrencyGbpThinIcon,
});
