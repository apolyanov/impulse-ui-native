import { createIcon } from "../../hocs/create-icon.hoc";
import { BellSimpleBoldIcon } from "../bold/bell-simple-bold.icon";
import { BellSimpleDuotoneIcon } from "../duotone/bell-simple-duotone.icon";
import { BellSimpleFillIcon } from "../fill/bell-simple-fill.icon";
import { BellSimpleLightIcon } from "../light/bell-simple-light.icon";
import { BellSimpleRegularIcon } from "../regular/bell-simple-regular.icon";
import { BellSimpleThinIcon } from "../thin/bell-simple-thin.icon";

export const BellSimpleIcon = createIcon("BellSimple", {
  bold: BellSimpleBoldIcon,
  duotone: BellSimpleDuotoneIcon,
  fill: BellSimpleFillIcon,
  light: BellSimpleLightIcon,
  regular: BellSimpleRegularIcon,
  thin: BellSimpleThinIcon,
});
