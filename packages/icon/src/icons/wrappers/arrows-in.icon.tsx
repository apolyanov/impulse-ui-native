import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsInBoldIcon } from "../bold/arrows-in-bold.icon";
import { ArrowsInDuotoneIcon } from "../duotone/arrows-in-duotone.icon";
import { ArrowsInFillIcon } from "../fill/arrows-in-fill.icon";
import { ArrowsInLightIcon } from "../light/arrows-in-light.icon";
import { ArrowsInRegularIcon } from "../regular/arrows-in-regular.icon";
import { ArrowsInThinIcon } from "../thin/arrows-in-thin.icon";

export const ArrowsInIcon = createIcon("ArrowsIn", {
  bold: ArrowsInBoldIcon,
  duotone: ArrowsInDuotoneIcon,
  fill: ArrowsInFillIcon,
  light: ArrowsInLightIcon,
  regular: ArrowsInRegularIcon,
  thin: ArrowsInThinIcon,
});
