import { createIcon } from "../../hocs/create-icon.hoc";
import { MouseSimpleBoldIcon } from "../bold/mouse-simple-bold.icon";
import { MouseSimpleDuotoneIcon } from "../duotone/mouse-simple-duotone.icon";
import { MouseSimpleFillIcon } from "../fill/mouse-simple-fill.icon";
import { MouseSimpleLightIcon } from "../light/mouse-simple-light.icon";
import { MouseSimpleRegularIcon } from "../regular/mouse-simple-regular.icon";
import { MouseSimpleThinIcon } from "../thin/mouse-simple-thin.icon";

export const MouseSimpleIcon = createIcon("MouseSimple", {
  bold: MouseSimpleBoldIcon,
  duotone: MouseSimpleDuotoneIcon,
  fill: MouseSimpleFillIcon,
  light: MouseSimpleLightIcon,
  regular: MouseSimpleRegularIcon,
  thin: MouseSimpleThinIcon,
});
