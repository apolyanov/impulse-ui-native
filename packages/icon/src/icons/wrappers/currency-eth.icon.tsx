import { createIcon } from "../../hocs/create-icon.hoc";
import { CurrencyEthBoldIcon } from "../bold/currency-eth-bold.icon";
import { CurrencyEthDuotoneIcon } from "../duotone/currency-eth-duotone.icon";
import { CurrencyEthFillIcon } from "../fill/currency-eth-fill.icon";
import { CurrencyEthLightIcon } from "../light/currency-eth-light.icon";
import { CurrencyEthRegularIcon } from "../regular/currency-eth-regular.icon";
import { CurrencyEthThinIcon } from "../thin/currency-eth-thin.icon";

export const CurrencyEthIcon = createIcon("CurrencyEth", {
  bold: CurrencyEthBoldIcon,
  duotone: CurrencyEthDuotoneIcon,
  fill: CurrencyEthFillIcon,
  light: CurrencyEthLightIcon,
  regular: CurrencyEthRegularIcon,
  thin: CurrencyEthThinIcon,
});
