import { createIcon } from "../../hocs/create-icon.hoc";
import { PlantBoldIcon } from "../bold/plant-bold.icon";
import { PlantDuotoneIcon } from "../duotone/plant-duotone.icon";
import { PlantFillIcon } from "../fill/plant-fill.icon";
import { PlantLightIcon } from "../light/plant-light.icon";
import { PlantRegularIcon } from "../regular/plant-regular.icon";
import { PlantThinIcon } from "../thin/plant-thin.icon";

export const PlantIcon = createIcon("Plant", {
  bold: PlantBoldIcon,
  duotone: PlantDuotoneIcon,
  fill: PlantFillIcon,
  light: PlantLightIcon,
  regular: PlantRegularIcon,
  thin: PlantThinIcon,
});
