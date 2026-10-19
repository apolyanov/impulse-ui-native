import { createIcon } from "../../hocs/create-icon.hoc";
import { BracketsRoundBoldIcon } from "../bold/brackets-round-bold.icon";
import { BracketsRoundDuotoneIcon } from "../duotone/brackets-round-duotone.icon";
import { BracketsRoundFillIcon } from "../fill/brackets-round-fill.icon";
import { BracketsRoundLightIcon } from "../light/brackets-round-light.icon";
import { BracketsRoundRegularIcon } from "../regular/brackets-round-regular.icon";
import { BracketsRoundThinIcon } from "../thin/brackets-round-thin.icon";

export const BracketsRoundIcon = createIcon("BracketsRound", {
  bold: BracketsRoundBoldIcon,
  duotone: BracketsRoundDuotoneIcon,
  fill: BracketsRoundFillIcon,
  light: BracketsRoundLightIcon,
  regular: BracketsRoundRegularIcon,
  thin: BracketsRoundThinIcon,
});
