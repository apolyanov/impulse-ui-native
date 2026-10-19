import { createIcon } from "../../hocs/create-icon.hoc";
import { DiceThreeBoldIcon } from "../bold/dice-three-bold.icon";
import { DiceThreeDuotoneIcon } from "../duotone/dice-three-duotone.icon";
import { DiceThreeFillIcon } from "../fill/dice-three-fill.icon";
import { DiceThreeLightIcon } from "../light/dice-three-light.icon";
import { DiceThreeRegularIcon } from "../regular/dice-three-regular.icon";
import { DiceThreeThinIcon } from "../thin/dice-three-thin.icon";

export const DiceThreeIcon = createIcon("DiceThree", {
  bold: DiceThreeBoldIcon,
  duotone: DiceThreeDuotoneIcon,
  fill: DiceThreeFillIcon,
  light: DiceThreeLightIcon,
  regular: DiceThreeRegularIcon,
  thin: DiceThreeThinIcon,
});
