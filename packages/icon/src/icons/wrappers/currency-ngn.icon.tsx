import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyNgnBoldIcon } from "../bold/currency-ngn-bold.icon";
import { CurrencyNgnDuotoneIcon } from "../duotone/currency-ngn-duotone.icon";
import { CurrencyNgnFillIcon } from "../fill/currency-ngn-fill.icon";
import { CurrencyNgnLightIcon } from "../light/currency-ngn-light.icon";
import { CurrencyNgnRegularIcon } from "../regular/currency-ngn-regular.icon";
import { CurrencyNgnThinIcon } from "../thin/currency-ngn-thin.icon";

export const CurrencyNgnIcon = createIcon("CurrencyNgn", {
  bold: CurrencyNgnBoldIcon,
  duotone: CurrencyNgnDuotoneIcon,
  fill: CurrencyNgnFillIcon,
  light: CurrencyNgnLightIcon,
  regular: CurrencyNgnRegularIcon,
  thin: CurrencyNgnThinIcon,
});
