import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignTopSimpleBoldIcon } from "../bold/align-top-simple-bold.icon";
import { AlignTopSimpleDuotoneIcon } from "../duotone/align-top-simple-duotone.icon";
import { AlignTopSimpleFillIcon } from "../fill/align-top-simple-fill.icon";
import { AlignTopSimpleLightIcon } from "../light/align-top-simple-light.icon";
import { AlignTopSimpleRegularIcon } from "../regular/align-top-simple-regular.icon";
import { AlignTopSimpleThinIcon } from "../thin/align-top-simple-thin.icon";

export const AlignTopSimpleIcon = createIcon("AlignTopSimple", {
  bold: AlignTopSimpleBoldIcon,
  duotone: AlignTopSimpleDuotoneIcon,
  fill: AlignTopSimpleFillIcon,
  light: AlignTopSimpleLightIcon,
  regular: AlignTopSimpleRegularIcon,
  thin: AlignTopSimpleThinIcon,
});
