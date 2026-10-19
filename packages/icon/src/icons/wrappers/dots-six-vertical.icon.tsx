import { createIcon } from "../../hocs/create-icon.hoc";
import { DotsSixVerticalBoldIcon } from "../bold/dots-six-vertical-bold.icon";
import { DotsSixVerticalDuotoneIcon } from "../duotone/dots-six-vertical-duotone.icon";
import { DotsSixVerticalFillIcon } from "../fill/dots-six-vertical-fill.icon";
import { DotsSixVerticalLightIcon } from "../light/dots-six-vertical-light.icon";
import { DotsSixVerticalRegularIcon } from "../regular/dots-six-vertical-regular.icon";
import { DotsSixVerticalThinIcon } from "../thin/dots-six-vertical-thin.icon";

export const DotsSixVerticalIcon = createIcon("DotsSixVertical", {
  bold: DotsSixVerticalBoldIcon,
  duotone: DotsSixVerticalDuotoneIcon,
  fill: DotsSixVerticalFillIcon,
  light: DotsSixVerticalLightIcon,
  regular: DotsSixVerticalRegularIcon,
  thin: DotsSixVerticalThinIcon,
});
