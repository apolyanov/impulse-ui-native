import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyMehBoldIcon } from "../bold/smiley-meh-bold.icon";
import { SmileyMehDuotoneIcon } from "../duotone/smiley-meh-duotone.icon";
import { SmileyMehFillIcon } from "../fill/smiley-meh-fill.icon";
import { SmileyMehLightIcon } from "../light/smiley-meh-light.icon";
import { SmileyMehRegularIcon } from "../regular/smiley-meh-regular.icon";
import { SmileyMehThinIcon } from "../thin/smiley-meh-thin.icon";

export const SmileyMehIcon = createIcon("SmileyMeh", {
  bold: SmileyMehBoldIcon,
  duotone: SmileyMehDuotoneIcon,
  fill: SmileyMehFillIcon,
  light: SmileyMehLightIcon,
  regular: SmileyMehRegularIcon,
  thin: SmileyMehThinIcon,
});
