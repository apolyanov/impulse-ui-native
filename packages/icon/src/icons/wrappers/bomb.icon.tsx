import { createIcon } from "../../hocs/create-icon.hoc";
import { BombBoldIcon } from "../bold/bomb-bold.icon";
import { BombDuotoneIcon } from "../duotone/bomb-duotone.icon";
import { BombFillIcon } from "../fill/bomb-fill.icon";
import { BombLightIcon } from "../light/bomb-light.icon";
import { BombRegularIcon } from "../regular/bomb-regular.icon";
import { BombThinIcon } from "../thin/bomb-thin.icon";

export const BombIcon = createIcon("Bomb", {
  bold: BombBoldIcon,
  duotone: BombDuotoneIcon,
  fill: BombFillIcon,
  light: BombLightIcon,
  regular: BombRegularIcon,
  thin: BombThinIcon,
});
