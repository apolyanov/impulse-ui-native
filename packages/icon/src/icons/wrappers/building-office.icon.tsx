import { createIcon } from "../../hocs/create-icon.hoc";
import { BuildingOfficeBoldIcon } from "../bold/building-office-bold.icon";
import { BuildingOfficeDuotoneIcon } from "../duotone/building-office-duotone.icon";
import { BuildingOfficeFillIcon } from "../fill/building-office-fill.icon";
import { BuildingOfficeLightIcon } from "../light/building-office-light.icon";
import { BuildingOfficeRegularIcon } from "../regular/building-office-regular.icon";
import { BuildingOfficeThinIcon } from "../thin/building-office-thin.icon";

export const BuildingOfficeIcon = createIcon("BuildingOffice", {
  bold: BuildingOfficeBoldIcon,
  duotone: BuildingOfficeDuotoneIcon,
  fill: BuildingOfficeFillIcon,
  light: BuildingOfficeLightIcon,
  regular: BuildingOfficeRegularIcon,
  thin: BuildingOfficeThinIcon,
});
