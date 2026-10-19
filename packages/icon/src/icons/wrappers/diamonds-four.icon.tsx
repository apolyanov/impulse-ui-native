import { createIcon } from "../../hocs/create-icon.hoc";
import { DiamondsFourBoldIcon } from "../bold/diamonds-four-bold.icon";
import { DiamondsFourDuotoneIcon } from "../duotone/diamonds-four-duotone.icon";
import { DiamondsFourFillIcon } from "../fill/diamonds-four-fill.icon";
import { DiamondsFourLightIcon } from "../light/diamonds-four-light.icon";
import { DiamondsFourRegularIcon } from "../regular/diamonds-four-regular.icon";
import { DiamondsFourThinIcon } from "../thin/diamonds-four-thin.icon";

export const DiamondsFourIcon = createIcon("DiamondsFour", {
  bold: DiamondsFourBoldIcon,
  duotone: DiamondsFourDuotoneIcon,
  fill: DiamondsFourFillIcon,
  light: DiamondsFourLightIcon,
  regular: DiamondsFourRegularIcon,
  thin: DiamondsFourThinIcon,
});
