import { createIcon } from "../../hocs/create-icon.hoc";
import { CopySimpleBoldIcon } from "../bold/copy-simple-bold.icon";
import { CopySimpleDuotoneIcon } from "../duotone/copy-simple-duotone.icon";
import { CopySimpleFillIcon } from "../fill/copy-simple-fill.icon";
import { CopySimpleLightIcon } from "../light/copy-simple-light.icon";
import { CopySimpleRegularIcon } from "../regular/copy-simple-regular.icon";
import { CopySimpleThinIcon } from "../thin/copy-simple-thin.icon";

export const CopySimpleIcon = createIcon("CopySimple", {
  bold: CopySimpleBoldIcon,
  duotone: CopySimpleDuotoneIcon,
  fill: CopySimpleFillIcon,
  light: CopySimpleLightIcon,
  regular: CopySimpleRegularIcon,
  thin: CopySimpleThinIcon,
});
