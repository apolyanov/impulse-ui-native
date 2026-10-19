import { createIcon } from "../../hocs/create-icon.hoc";
import { DotBoldIcon } from "../bold/dot-bold.icon";
import { DotDuotoneIcon } from "../duotone/dot-duotone.icon";
import { DotFillIcon } from "../fill/dot-fill.icon";
import { DotLightIcon } from "../light/dot-light.icon";
import { DotRegularIcon } from "../regular/dot-regular.icon";
import { DotThinIcon } from "../thin/dot-thin.icon";

export const DotIcon = createIcon("Dot", {
  bold: DotBoldIcon,
  duotone: DotDuotoneIcon,
  fill: DotFillIcon,
  light: DotLightIcon,
  regular: DotRegularIcon,
  thin: DotThinIcon,
});
