import { createIcon } from "../../hocs/create-icon.hoc";
import { CoinsBoldIcon } from "../bold/coins-bold.icon";
import { CoinsDuotoneIcon } from "../duotone/coins-duotone.icon";
import { CoinsFillIcon } from "../fill/coins-fill.icon";
import { CoinsLightIcon } from "../light/coins-light.icon";
import { CoinsRegularIcon } from "../regular/coins-regular.icon";
import { CoinsThinIcon } from "../thin/coins-thin.icon";

export const CoinsIcon = createIcon("Coins", {
  bold: CoinsBoldIcon,
  duotone: CoinsDuotoneIcon,
  fill: CoinsFillIcon,
  light: CoinsLightIcon,
  regular: CoinsRegularIcon,
  thin: CoinsThinIcon,
});
