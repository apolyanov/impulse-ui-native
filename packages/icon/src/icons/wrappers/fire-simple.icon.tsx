import { createIcon } from "../../hocs/create-icon.hoc";
import { FireSimpleBoldIcon } from "../bold/fire-simple-bold.icon";
import { FireSimpleDuotoneIcon } from "../duotone/fire-simple-duotone.icon";
import { FireSimpleFillIcon } from "../fill/fire-simple-fill.icon";
import { FireSimpleLightIcon } from "../light/fire-simple-light.icon";
import { FireSimpleRegularIcon } from "../regular/fire-simple-regular.icon";
import { FireSimpleThinIcon } from "../thin/fire-simple-thin.icon";

export const FireSimpleIcon = createIcon("FireSimple", {
  bold: FireSimpleBoldIcon,
  duotone: FireSimpleDuotoneIcon,
  fill: FireSimpleFillIcon,
  light: FireSimpleLightIcon,
  regular: FireSimpleRegularIcon,
  thin: FireSimpleThinIcon,
});
