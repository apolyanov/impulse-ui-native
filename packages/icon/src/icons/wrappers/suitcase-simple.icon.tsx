import { createIcon } from "../../hocs/create-icon.hoc";
import { SuitcaseSimpleBoldIcon } from "../bold/suitcase-simple-bold.icon";
import { SuitcaseSimpleDuotoneIcon } from "../duotone/suitcase-simple-duotone.icon";
import { SuitcaseSimpleFillIcon } from "../fill/suitcase-simple-fill.icon";
import { SuitcaseSimpleLightIcon } from "../light/suitcase-simple-light.icon";
import { SuitcaseSimpleRegularIcon } from "../regular/suitcase-simple-regular.icon";
import { SuitcaseSimpleThinIcon } from "../thin/suitcase-simple-thin.icon";

export const SuitcaseSimpleIcon = createIcon("SuitcaseSimple", {
  bold: SuitcaseSimpleBoldIcon,
  duotone: SuitcaseSimpleDuotoneIcon,
  fill: SuitcaseSimpleFillIcon,
  light: SuitcaseSimpleLightIcon,
  regular: SuitcaseSimpleRegularIcon,
  thin: SuitcaseSimpleThinIcon,
});
