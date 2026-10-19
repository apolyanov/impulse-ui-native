import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyNervousBoldIcon } from "../bold/smiley-nervous-bold.icon";
import { SmileyNervousDuotoneIcon } from "../duotone/smiley-nervous-duotone.icon";
import { SmileyNervousFillIcon } from "../fill/smiley-nervous-fill.icon";
import { SmileyNervousLightIcon } from "../light/smiley-nervous-light.icon";
import { SmileyNervousRegularIcon } from "../regular/smiley-nervous-regular.icon";
import { SmileyNervousThinIcon } from "../thin/smiley-nervous-thin.icon";

export const SmileyNervousIcon = createIcon("SmileyNervous", {
  bold: SmileyNervousBoldIcon,
  duotone: SmileyNervousDuotoneIcon,
  fill: SmileyNervousFillIcon,
  light: SmileyNervousLightIcon,
  regular: SmileyNervousRegularIcon,
  thin: SmileyNervousThinIcon,
});
