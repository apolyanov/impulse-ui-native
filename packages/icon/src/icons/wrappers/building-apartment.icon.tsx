import { createIcon } from "../../hocs/create-icon.hoc";
import { BuildingApartmentBoldIcon } from "../bold/building-apartment-bold.icon";
import { BuildingApartmentDuotoneIcon } from "../duotone/building-apartment-duotone.icon";
import { BuildingApartmentFillIcon } from "../fill/building-apartment-fill.icon";
import { BuildingApartmentLightIcon } from "../light/building-apartment-light.icon";
import { BuildingApartmentRegularIcon } from "../regular/building-apartment-regular.icon";
import { BuildingApartmentThinIcon } from "../thin/building-apartment-thin.icon";

export const BuildingApartmentIcon = createIcon("BuildingApartment", {
  bold: BuildingApartmentBoldIcon,
  duotone: BuildingApartmentDuotoneIcon,
  fill: BuildingApartmentFillIcon,
  light: BuildingApartmentLightIcon,
  regular: BuildingApartmentRegularIcon,
  thin: BuildingApartmentThinIcon,
});
