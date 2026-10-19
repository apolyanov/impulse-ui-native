import { createIcon } from "../../hocs/create-icon.hoc";
import { SuitcaseBoldIcon } from "../bold/suitcase-bold.icon";
import { SuitcaseDuotoneIcon } from "../duotone/suitcase-duotone.icon";
import { SuitcaseFillIcon } from "../fill/suitcase-fill.icon";
import { SuitcaseLightIcon } from "../light/suitcase-light.icon";
import { SuitcaseRegularIcon } from "../regular/suitcase-regular.icon";
import { SuitcaseThinIcon } from "../thin/suitcase-thin.icon";

export const SuitcaseIcon = createIcon("Suitcase", {
  bold: SuitcaseBoldIcon,
  duotone: SuitcaseDuotoneIcon,
  fill: SuitcaseFillIcon,
  light: SuitcaseLightIcon,
  regular: SuitcaseRegularIcon,
  thin: SuitcaseThinIcon,
});
