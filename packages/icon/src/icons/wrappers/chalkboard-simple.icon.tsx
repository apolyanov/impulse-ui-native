import { createIcon } from "../../hocs/create-icon.hoc";
import { ChalkboardSimpleBoldIcon } from "../bold/chalkboard-simple-bold.icon";
import { ChalkboardSimpleDuotoneIcon } from "../duotone/chalkboard-simple-duotone.icon";
import { ChalkboardSimpleFillIcon } from "../fill/chalkboard-simple-fill.icon";
import { ChalkboardSimpleLightIcon } from "../light/chalkboard-simple-light.icon";
import { ChalkboardSimpleRegularIcon } from "../regular/chalkboard-simple-regular.icon";
import { ChalkboardSimpleThinIcon } from "../thin/chalkboard-simple-thin.icon";

export const ChalkboardSimpleIcon = createIcon("ChalkboardSimple", {
  bold: ChalkboardSimpleBoldIcon,
  duotone: ChalkboardSimpleDuotoneIcon,
  fill: ChalkboardSimpleFillIcon,
  light: ChalkboardSimpleLightIcon,
  regular: ChalkboardSimpleRegularIcon,
  thin: ChalkboardSimpleThinIcon,
});
