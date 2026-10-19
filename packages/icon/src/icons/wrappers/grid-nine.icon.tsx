import { createIcon } from "../../hocs/create-icon.hoc";
import { GridNineBoldIcon } from "../bold/grid-nine-bold.icon";
import { GridNineDuotoneIcon } from "../duotone/grid-nine-duotone.icon";
import { GridNineFillIcon } from "../fill/grid-nine-fill.icon";
import { GridNineLightIcon } from "../light/grid-nine-light.icon";
import { GridNineRegularIcon } from "../regular/grid-nine-regular.icon";
import { GridNineThinIcon } from "../thin/grid-nine-thin.icon";

export const GridNineIcon = createIcon("GridNine", {
  bold: GridNineBoldIcon,
  duotone: GridNineDuotoneIcon,
  fill: GridNineFillIcon,
  light: GridNineLightIcon,
  regular: GridNineRegularIcon,
  thin: GridNineThinIcon,
});
