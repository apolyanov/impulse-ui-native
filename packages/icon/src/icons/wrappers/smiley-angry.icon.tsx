import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyAngryBoldIcon } from "../bold/smiley-angry-bold.icon";
import { SmileyAngryDuotoneIcon } from "../duotone/smiley-angry-duotone.icon";
import { SmileyAngryFillIcon } from "../fill/smiley-angry-fill.icon";
import { SmileyAngryLightIcon } from "../light/smiley-angry-light.icon";
import { SmileyAngryRegularIcon } from "../regular/smiley-angry-regular.icon";
import { SmileyAngryThinIcon } from "../thin/smiley-angry-thin.icon";

export const SmileyAngryIcon = createIcon("SmileyAngry", {
  bold: SmileyAngryBoldIcon,
  duotone: SmileyAngryDuotoneIcon,
  fill: SmileyAngryFillIcon,
  light: SmileyAngryLightIcon,
  regular: SmileyAngryRegularIcon,
  thin: SmileyAngryThinIcon,
});
