import { createIcon } from "../../hocs/create-icon.hoc";
import { PokerChipBoldIcon } from "../bold/poker-chip-bold.icon";
import { PokerChipDuotoneIcon } from "../duotone/poker-chip-duotone.icon";
import { PokerChipFillIcon } from "../fill/poker-chip-fill.icon";
import { PokerChipLightIcon } from "../light/poker-chip-light.icon";
import { PokerChipRegularIcon } from "../regular/poker-chip-regular.icon";
import { PokerChipThinIcon } from "../thin/poker-chip-thin.icon";

export const PokerChipIcon = createIcon("PokerChip", {
  bold: PokerChipBoldIcon,
  duotone: PokerChipDuotoneIcon,
  fill: PokerChipFillIcon,
  light: PokerChipLightIcon,
  regular: PokerChipRegularIcon,
  thin: PokerChipThinIcon,
});
