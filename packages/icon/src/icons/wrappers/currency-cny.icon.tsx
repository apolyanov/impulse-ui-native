import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyCnyBoldIcon } from "../bold/currency-cny-bold.icon";
import { CurrencyCnyDuotoneIcon } from "../duotone/currency-cny-duotone.icon";
import { CurrencyCnyFillIcon } from "../fill/currency-cny-fill.icon";
import { CurrencyCnyLightIcon } from "../light/currency-cny-light.icon";
import { CurrencyCnyRegularIcon } from "../regular/currency-cny-regular.icon";
import { CurrencyCnyThinIcon } from "../thin/currency-cny-thin.icon";

export const CurrencyCnyIcon = createIcon("CurrencyCny", {
  bold: CurrencyCnyBoldIcon,
  duotone: CurrencyCnyDuotoneIcon,
  fill: CurrencyCnyFillIcon,
  light: CurrencyCnyLightIcon,
  regular: CurrencyCnyRegularIcon,
  thin: CurrencyCnyThinIcon,
});
