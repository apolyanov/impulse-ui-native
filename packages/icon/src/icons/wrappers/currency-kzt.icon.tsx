import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyKztBoldIcon } from "../bold/currency-kzt-bold.icon";
import { CurrencyKztDuotoneIcon } from "../duotone/currency-kzt-duotone.icon";
import { CurrencyKztFillIcon } from "../fill/currency-kzt-fill.icon";
import { CurrencyKztLightIcon } from "../light/currency-kzt-light.icon";
import { CurrencyKztRegularIcon } from "../regular/currency-kzt-regular.icon";
import { CurrencyKztThinIcon } from "../thin/currency-kzt-thin.icon";

export const CurrencyKztIcon = createIcon("CurrencyKzt", {
  bold: CurrencyKztBoldIcon,
  duotone: CurrencyKztDuotoneIcon,
  fill: CurrencyKztFillIcon,
  light: CurrencyKztLightIcon,
  regular: CurrencyKztRegularIcon,
  thin: CurrencyKztThinIcon,
});
