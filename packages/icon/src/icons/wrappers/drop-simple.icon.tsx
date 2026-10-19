import { createIcon } from "../../hocs/create-icon.hoc";
import { DropSimpleBoldIcon } from "../bold/drop-simple-bold.icon";
import { DropSimpleDuotoneIcon } from "../duotone/drop-simple-duotone.icon";
import { DropSimpleFillIcon } from "../fill/drop-simple-fill.icon";
import { DropSimpleLightIcon } from "../light/drop-simple-light.icon";
import { DropSimpleRegularIcon } from "../regular/drop-simple-regular.icon";
import { DropSimpleThinIcon } from "../thin/drop-simple-thin.icon";

export const DropSimpleIcon = createIcon("DropSimple", {
  bold: DropSimpleBoldIcon,
  duotone: DropSimpleDuotoneIcon,
  fill: DropSimpleFillIcon,
  light: DropSimpleLightIcon,
  regular: DropSimpleRegularIcon,
  thin: DropSimpleThinIcon,
});
