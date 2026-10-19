import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsInSimpleBoldIcon } from "../bold/arrows-in-simple-bold.icon";
import { ArrowsInSimpleDuotoneIcon } from "../duotone/arrows-in-simple-duotone.icon";
import { ArrowsInSimpleFillIcon } from "../fill/arrows-in-simple-fill.icon";
import { ArrowsInSimpleLightIcon } from "../light/arrows-in-simple-light.icon";
import { ArrowsInSimpleRegularIcon } from "../regular/arrows-in-simple-regular.icon";
import { ArrowsInSimpleThinIcon } from "../thin/arrows-in-simple-thin.icon";

export const ArrowsInSimpleIcon = createIcon("ArrowsInSimple", {
  bold: ArrowsInSimpleBoldIcon,
  duotone: ArrowsInSimpleDuotoneIcon,
  fill: ArrowsInSimpleFillIcon,
  light: ArrowsInSimpleLightIcon,
  regular: ArrowsInSimpleRegularIcon,
  thin: ArrowsInSimpleThinIcon,
});
