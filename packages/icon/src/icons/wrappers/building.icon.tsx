import { createIcon } from "../../hocs/create-icon.hoc";
import { BuildingBoldIcon } from "../bold/building-bold.icon";
import { BuildingDuotoneIcon } from "../duotone/building-duotone.icon";
import { BuildingFillIcon } from "../fill/building-fill.icon";
import { BuildingLightIcon } from "../light/building-light.icon";
import { BuildingRegularIcon } from "../regular/building-regular.icon";
import { BuildingThinIcon } from "../thin/building-thin.icon";

export const BuildingIcon = createIcon("Building", {
  bold: BuildingBoldIcon,
  duotone: BuildingDuotoneIcon,
  fill: BuildingFillIcon,
  light: BuildingLightIcon,
  regular: BuildingRegularIcon,
  thin: BuildingThinIcon,
});
