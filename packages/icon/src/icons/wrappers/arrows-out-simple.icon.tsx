import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsOutSimpleBoldIcon } from "../bold/arrows-out-simple-bold.icon";
import { ArrowsOutSimpleDuotoneIcon } from "../duotone/arrows-out-simple-duotone.icon";
import { ArrowsOutSimpleFillIcon } from "../fill/arrows-out-simple-fill.icon";
import { ArrowsOutSimpleLightIcon } from "../light/arrows-out-simple-light.icon";
import { ArrowsOutSimpleRegularIcon } from "../regular/arrows-out-simple-regular.icon";
import { ArrowsOutSimpleThinIcon } from "../thin/arrows-out-simple-thin.icon";

export const ArrowsOutSimpleIcon = createIcon("ArrowsOutSimple", {
  bold: ArrowsOutSimpleBoldIcon,
  duotone: ArrowsOutSimpleDuotoneIcon,
  fill: ArrowsOutSimpleFillIcon,
  light: ArrowsOutSimpleLightIcon,
  regular: ArrowsOutSimpleRegularIcon,
  thin: ArrowsOutSimpleThinIcon,
});
