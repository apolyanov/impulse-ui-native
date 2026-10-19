import { createIcon } from "../../hocs/create-icon.hoc";
import { GridFourBoldIcon } from "../bold/grid-four-bold.icon";
import { GridFourDuotoneIcon } from "../duotone/grid-four-duotone.icon";
import { GridFourFillIcon } from "../fill/grid-four-fill.icon";
import { GridFourLightIcon } from "../light/grid-four-light.icon";
import { GridFourRegularIcon } from "../regular/grid-four-regular.icon";
import { GridFourThinIcon } from "../thin/grid-four-thin.icon";

export const GridFourIcon = createIcon("GridFour", {
  bold: GridFourBoldIcon,
  duotone: GridFourDuotoneIcon,
  fill: GridFourFillIcon,
  light: GridFourLightIcon,
  regular: GridFourRegularIcon,
  thin: GridFourThinIcon,
});
