import { createIcon } from "../../hocs/create-icon.hoc";
import { PottedPlantBoldIcon } from "../bold/potted-plant-bold.icon";
import { PottedPlantDuotoneIcon } from "../duotone/potted-plant-duotone.icon";
import { PottedPlantFillIcon } from "../fill/potted-plant-fill.icon";
import { PottedPlantLightIcon } from "../light/potted-plant-light.icon";
import { PottedPlantRegularIcon } from "../regular/potted-plant-regular.icon";
import { PottedPlantThinIcon } from "../thin/potted-plant-thin.icon";

export const PottedPlantIcon = createIcon("PottedPlant", {
  bold: PottedPlantBoldIcon,
  duotone: PottedPlantDuotoneIcon,
  fill: PottedPlantFillIcon,
  light: PottedPlantLightIcon,
  regular: PottedPlantRegularIcon,
  thin: PottedPlantThinIcon,
});
