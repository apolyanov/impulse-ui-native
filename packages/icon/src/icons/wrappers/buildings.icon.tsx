import { createIcon } from "../../hocs/create-icon.hoc";
import { BuildingsBoldIcon } from "../bold/buildings-bold.icon";
import { BuildingsDuotoneIcon } from "../duotone/buildings-duotone.icon";
import { BuildingsFillIcon } from "../fill/buildings-fill.icon";
import { BuildingsLightIcon } from "../light/buildings-light.icon";
import { BuildingsRegularIcon } from "../regular/buildings-regular.icon";
import { BuildingsThinIcon } from "../thin/buildings-thin.icon";

export const BuildingsIcon = createIcon("Buildings", {
  bold: BuildingsBoldIcon,
  duotone: BuildingsDuotoneIcon,
  fill: BuildingsFillIcon,
  light: BuildingsLightIcon,
  regular: BuildingsRegularIcon,
  thin: BuildingsThinIcon,
});
