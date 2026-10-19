import { createIcon } from "../../hocs/create-icon.hoc";
import { CoinVerticalBoldIcon } from "../bold/coin-vertical-bold.icon";
import { CoinVerticalDuotoneIcon } from "../duotone/coin-vertical-duotone.icon";
import { CoinVerticalFillIcon } from "../fill/coin-vertical-fill.icon";
import { CoinVerticalLightIcon } from "../light/coin-vertical-light.icon";
import { CoinVerticalRegularIcon } from "../regular/coin-vertical-regular.icon";
import { CoinVerticalThinIcon } from "../thin/coin-vertical-thin.icon";

export const CoinVerticalIcon = createIcon("CoinVertical", {
  bold: CoinVerticalBoldIcon,
  duotone: CoinVerticalDuotoneIcon,
  fill: CoinVerticalFillIcon,
  light: CoinVerticalLightIcon,
  regular: CoinVerticalRegularIcon,
  thin: CoinVerticalThinIcon,
});
