import { createIcon } from "../../hocs/create-icon.hoc";
import { DotOutlineBoldIcon } from "../bold/dot-outline-bold.icon";
import { DotOutlineDuotoneIcon } from "../duotone/dot-outline-duotone.icon";
import { DotOutlineFillIcon } from "../fill/dot-outline-fill.icon";
import { DotOutlineLightIcon } from "../light/dot-outline-light.icon";
import { DotOutlineRegularIcon } from "../regular/dot-outline-regular.icon";
import { DotOutlineThinIcon } from "../thin/dot-outline-thin.icon";

export const DotOutlineIcon = createIcon("DotOutline", {
  bold: DotOutlineBoldIcon,
  duotone: DotOutlineDuotoneIcon,
  fill: DotOutlineFillIcon,
  light: DotOutlineLightIcon,
  regular: DotOutlineRegularIcon,
  thin: DotOutlineThinIcon,
});
