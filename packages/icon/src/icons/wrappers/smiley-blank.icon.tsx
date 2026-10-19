import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyBlankBoldIcon } from "../bold/smiley-blank-bold.icon";
import { SmileyBlankDuotoneIcon } from "../duotone/smiley-blank-duotone.icon";
import { SmileyBlankFillIcon } from "../fill/smiley-blank-fill.icon";
import { SmileyBlankLightIcon } from "../light/smiley-blank-light.icon";
import { SmileyBlankRegularIcon } from "../regular/smiley-blank-regular.icon";
import { SmileyBlankThinIcon } from "../thin/smiley-blank-thin.icon";

export const SmileyBlankIcon = createIcon("SmileyBlank", {
  bold: SmileyBlankBoldIcon,
  duotone: SmileyBlankDuotoneIcon,
  fill: SmileyBlankFillIcon,
  light: SmileyBlankLightIcon,
  regular: SmileyBlankRegularIcon,
  thin: SmileyBlankThinIcon,
});
