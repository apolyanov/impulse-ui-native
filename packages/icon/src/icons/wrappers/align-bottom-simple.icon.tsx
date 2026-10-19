import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignBottomSimpleBoldIcon } from "../bold/align-bottom-simple-bold.icon";
import { AlignBottomSimpleDuotoneIcon } from "../duotone/align-bottom-simple-duotone.icon";
import { AlignBottomSimpleFillIcon } from "../fill/align-bottom-simple-fill.icon";
import { AlignBottomSimpleLightIcon } from "../light/align-bottom-simple-light.icon";
import { AlignBottomSimpleRegularIcon } from "../regular/align-bottom-simple-regular.icon";
import { AlignBottomSimpleThinIcon } from "../thin/align-bottom-simple-thin.icon";

export const AlignBottomSimpleIcon = createIcon("AlignBottomSimple", {
  bold: AlignBottomSimpleBoldIcon,
  duotone: AlignBottomSimpleDuotoneIcon,
  fill: AlignBottomSimpleFillIcon,
  light: AlignBottomSimpleLightIcon,
  regular: AlignBottomSimpleRegularIcon,
  thin: AlignBottomSimpleThinIcon,
});
