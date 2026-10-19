import { createIcon } from "../../hocs/create-icon.hoc";
import { DiceOneBoldIcon } from "../bold/dice-one-bold.icon";
import { DiceOneDuotoneIcon } from "../duotone/dice-one-duotone.icon";
import { DiceOneFillIcon } from "../fill/dice-one-fill.icon";
import { DiceOneLightIcon } from "../light/dice-one-light.icon";
import { DiceOneRegularIcon } from "../regular/dice-one-regular.icon";
import { DiceOneThinIcon } from "../thin/dice-one-thin.icon";

export const DiceOneIcon = createIcon("DiceOne", {
  bold: DiceOneBoldIcon,
  duotone: DiceOneDuotoneIcon,
  fill: DiceOneFillIcon,
  light: DiceOneLightIcon,
  regular: DiceOneRegularIcon,
  thin: DiceOneThinIcon,
});
