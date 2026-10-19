import { createIcon } from "../../hocs/create-icon.hoc";
import { CoinBoldIcon } from "../bold/coin-bold.icon";
import { CoinDuotoneIcon } from "../duotone/coin-duotone.icon";
import { CoinFillIcon } from "../fill/coin-fill.icon";
import { CoinLightIcon } from "../light/coin-light.icon";
import { CoinRegularIcon } from "../regular/coin-regular.icon";
import { CoinThinIcon } from "../thin/coin-thin.icon";

export const CoinIcon = createIcon("Coin", {
  bold: CoinBoldIcon,
  duotone: CoinDuotoneIcon,
  fill: CoinFillIcon,
  light: CoinLightIcon,
  regular: CoinRegularIcon,
  thin: CoinThinIcon,
});
