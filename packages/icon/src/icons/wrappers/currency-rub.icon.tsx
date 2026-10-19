import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyRubBoldIcon } from "../bold/currency-rub-bold.icon";
import { CurrencyRubDuotoneIcon } from "../duotone/currency-rub-duotone.icon";
import { CurrencyRubFillIcon } from "../fill/currency-rub-fill.icon";
import { CurrencyRubLightIcon } from "../light/currency-rub-light.icon";
import { CurrencyRubRegularIcon } from "../regular/currency-rub-regular.icon";
import { CurrencyRubThinIcon } from "../thin/currency-rub-thin.icon";

export const CurrencyRubIcon = createIcon("CurrencyRub", {
  bold: CurrencyRubBoldIcon,
  duotone: CurrencyRubDuotoneIcon,
  fill: CurrencyRubFillIcon,
  light: CurrencyRubLightIcon,
  regular: CurrencyRubRegularIcon,
  thin: CurrencyRubThinIcon,
});
