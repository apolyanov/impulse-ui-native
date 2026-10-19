import { createIcon } from "../../hocs/create-icon.hoc";
import { NuclearPlantBoldIcon } from "../bold/nuclear-plant-bold.icon";
import { NuclearPlantDuotoneIcon } from "../duotone/nuclear-plant-duotone.icon";
import { NuclearPlantFillIcon } from "../fill/nuclear-plant-fill.icon";
import { NuclearPlantLightIcon } from "../light/nuclear-plant-light.icon";
import { NuclearPlantRegularIcon } from "../regular/nuclear-plant-regular.icon";
import { NuclearPlantThinIcon } from "../thin/nuclear-plant-thin.icon";

export const NuclearPlantIcon = createIcon("NuclearPlant", {
  bold: NuclearPlantBoldIcon,
  duotone: NuclearPlantDuotoneIcon,
  fill: NuclearPlantFillIcon,
  light: NuclearPlantLightIcon,
  regular: NuclearPlantRegularIcon,
  thin: NuclearPlantThinIcon,
});
