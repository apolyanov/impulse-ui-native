import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignLeftSimpleBoldIcon } from "../bold/align-left-simple-bold.icon";
import { AlignLeftSimpleDuotoneIcon } from "../duotone/align-left-simple-duotone.icon";
import { AlignLeftSimpleFillIcon } from "../fill/align-left-simple-fill.icon";
import { AlignLeftSimpleLightIcon } from "../light/align-left-simple-light.icon";
import { AlignLeftSimpleRegularIcon } from "../regular/align-left-simple-regular.icon";
import { AlignLeftSimpleThinIcon } from "../thin/align-left-simple-thin.icon";

export const AlignLeftSimpleIcon = createIcon("AlignLeftSimple", {
  bold: AlignLeftSimpleBoldIcon,
  duotone: AlignLeftSimpleDuotoneIcon,
  fill: AlignLeftSimpleFillIcon,
  light: AlignLeftSimpleLightIcon,
  regular: AlignLeftSimpleRegularIcon,
  thin: AlignLeftSimpleThinIcon,
});
