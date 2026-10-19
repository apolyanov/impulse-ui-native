import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyBoldIcon } from "../bold/smiley-bold.icon";
import { SmileyDuotoneIcon } from "../duotone/smiley-duotone.icon";
import { SmileyFillIcon } from "../fill/smiley-fill.icon";
import { SmileyLightIcon } from "../light/smiley-light.icon";
import { SmileyRegularIcon } from "../regular/smiley-regular.icon";
import { SmileyThinIcon } from "../thin/smiley-thin.icon";

export const SmileyIcon = createIcon("Smiley", {
  bold: SmileyBoldIcon,
  duotone: SmileyDuotoneIcon,
  fill: SmileyFillIcon,
  light: SmileyLightIcon,
  regular: SmileyRegularIcon,
  thin: SmileyThinIcon,
});
