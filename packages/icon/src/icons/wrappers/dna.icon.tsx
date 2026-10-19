import { createIcon } from "../../hocs/create-icon.hoc";
import { DnaBoldIcon } from "../bold/dna-bold.icon";
import { DnaDuotoneIcon } from "../duotone/dna-duotone.icon";
import { DnaFillIcon } from "../fill/dna-fill.icon";
import { DnaLightIcon } from "../light/dna-light.icon";
import { DnaRegularIcon } from "../regular/dna-regular.icon";
import { DnaThinIcon } from "../thin/dna-thin.icon";

export const DnaIcon = createIcon("Dna", {
  bold: DnaBoldIcon,
  duotone: DnaDuotoneIcon,
  fill: DnaFillIcon,
  light: DnaLightIcon,
  regular: DnaRegularIcon,
  thin: DnaThinIcon,
});
