import { createIcon } from "../../hocs/create-icon.hoc";
import { DotsSixBoldIcon } from "../bold/dots-six-bold.icon";
import { DotsSixDuotoneIcon } from "../duotone/dots-six-duotone.icon";
import { DotsSixFillIcon } from "../fill/dots-six-fill.icon";
import { DotsSixLightIcon } from "../light/dots-six-light.icon";
import { DotsSixRegularIcon } from "../regular/dots-six-regular.icon";
import { DotsSixThinIcon } from "../thin/dots-six-thin.icon";

export const DotsSixIcon = createIcon("DotsSix", {
  bold: DotsSixBoldIcon,
  duotone: DotsSixDuotoneIcon,
  fill: DotsSixFillIcon,
  light: DotsSixLightIcon,
  regular: DotsSixRegularIcon,
  thin: DotsSixThinIcon,
});
