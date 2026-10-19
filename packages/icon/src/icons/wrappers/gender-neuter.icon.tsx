import { createIcon } from "../../hocs/create-icon.hoc";
import { GenderNeuterBoldIcon } from "../bold/gender-neuter-bold.icon";
import { GenderNeuterDuotoneIcon } from "../duotone/gender-neuter-duotone.icon";
import { GenderNeuterFillIcon } from "../fill/gender-neuter-fill.icon";
import { GenderNeuterLightIcon } from "../light/gender-neuter-light.icon";
import { GenderNeuterRegularIcon } from "../regular/gender-neuter-regular.icon";
import { GenderNeuterThinIcon } from "../thin/gender-neuter-thin.icon";

export const GenderNeuterIcon = createIcon("GenderNeuter", {
  bold: GenderNeuterBoldIcon,
  duotone: GenderNeuterDuotoneIcon,
  fill: GenderNeuterFillIcon,
  light: GenderNeuterLightIcon,
  regular: GenderNeuterRegularIcon,
  thin: GenderNeuterThinIcon,
});
