import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyMeltingBoldIcon } from "../bold/smiley-melting-bold.icon";
import { SmileyMeltingDuotoneIcon } from "../duotone/smiley-melting-duotone.icon";
import { SmileyMeltingFillIcon } from "../fill/smiley-melting-fill.icon";
import { SmileyMeltingLightIcon } from "../light/smiley-melting-light.icon";
import { SmileyMeltingRegularIcon } from "../regular/smiley-melting-regular.icon";
import { SmileyMeltingThinIcon } from "../thin/smiley-melting-thin.icon";

export const SmileyMeltingIcon = createIcon("SmileyMelting", {
  bold: SmileyMeltingBoldIcon,
  duotone: SmileyMeltingDuotoneIcon,
  fill: SmileyMeltingFillIcon,
  light: SmileyMeltingLightIcon,
  regular: SmileyMeltingRegularIcon,
  thin: SmileyMeltingThinIcon,
});
