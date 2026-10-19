import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignRightSimpleBoldIcon } from "../bold/align-right-simple-bold.icon";
import { AlignRightSimpleDuotoneIcon } from "../duotone/align-right-simple-duotone.icon";
import { AlignRightSimpleFillIcon } from "../fill/align-right-simple-fill.icon";
import { AlignRightSimpleLightIcon } from "../light/align-right-simple-light.icon";
import { AlignRightSimpleRegularIcon } from "../regular/align-right-simple-regular.icon";
import { AlignRightSimpleThinIcon } from "../thin/align-right-simple-thin.icon";

export const AlignRightSimpleIcon = createIcon("AlignRightSimple", {
  bold: AlignRightSimpleBoldIcon,
  duotone: AlignRightSimpleDuotoneIcon,
  fill: AlignRightSimpleFillIcon,
  light: AlignRightSimpleLightIcon,
  regular: AlignRightSimpleRegularIcon,
  thin: AlignRightSimpleThinIcon,
});
