import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyJpyBoldIcon } from "../bold/currency-jpy-bold.icon";
import { CurrencyJpyDuotoneIcon } from "../duotone/currency-jpy-duotone.icon";
import { CurrencyJpyFillIcon } from "../fill/currency-jpy-fill.icon";
import { CurrencyJpyLightIcon } from "../light/currency-jpy-light.icon";
import { CurrencyJpyRegularIcon } from "../regular/currency-jpy-regular.icon";
import { CurrencyJpyThinIcon } from "../thin/currency-jpy-thin.icon";

export const CurrencyJpyIcon = createIcon("CurrencyJpy", {
  bold: CurrencyJpyBoldIcon,
  duotone: CurrencyJpyDuotoneIcon,
  fill: CurrencyJpyFillIcon,
  light: CurrencyJpyLightIcon,
  regular: CurrencyJpyRegularIcon,
  thin: CurrencyJpyThinIcon,
});
