import { createIcon } from "../../hocs/create-icon.hoc";
import { DotsNineBoldIcon } from "../bold/dots-nine-bold.icon";
import { DotsNineDuotoneIcon } from "../duotone/dots-nine-duotone.icon";
import { DotsNineFillIcon } from "../fill/dots-nine-fill.icon";
import { DotsNineLightIcon } from "../light/dots-nine-light.icon";
import { DotsNineRegularIcon } from "../regular/dots-nine-regular.icon";
import { DotsNineThinIcon } from "../thin/dots-nine-thin.icon";

export const DotsNineIcon = createIcon("DotsNine", {
  bold: DotsNineBoldIcon,
  duotone: DotsNineDuotoneIcon,
  fill: DotsNineFillIcon,
  light: DotsNineLightIcon,
  regular: DotsNineRegularIcon,
  thin: DotsNineThinIcon,
});
