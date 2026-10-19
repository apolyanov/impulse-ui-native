import { createIcon } from "../../hocs/create-icon.hoc";
import { HandCoinsBoldIcon } from "../bold/hand-coins-bold.icon";
import { HandCoinsDuotoneIcon } from "../duotone/hand-coins-duotone.icon";
import { HandCoinsFillIcon } from "../fill/hand-coins-fill.icon";
import { HandCoinsLightIcon } from "../light/hand-coins-light.icon";
import { HandCoinsRegularIcon } from "../regular/hand-coins-regular.icon";
import { HandCoinsThinIcon } from "../thin/hand-coins-thin.icon";

export const HandCoinsIcon = createIcon("HandCoins", {
  bold: HandCoinsBoldIcon,
  duotone: HandCoinsDuotoneIcon,
  fill: HandCoinsFillIcon,
  light: HandCoinsLightIcon,
  regular: HandCoinsRegularIcon,
  thin: HandCoinsThinIcon,
});
