import { createIcon } from "../../hocs/create-icon.hoc";
import { PoliceCarBoldIcon } from "../bold/police-car-bold.icon";
import { PoliceCarDuotoneIcon } from "../duotone/police-car-duotone.icon";
import { PoliceCarFillIcon } from "../fill/police-car-fill.icon";
import { PoliceCarLightIcon } from "../light/police-car-light.icon";
import { PoliceCarRegularIcon } from "../regular/police-car-regular.icon";
import { PoliceCarThinIcon } from "../thin/police-car-thin.icon";

export const PoliceCarIcon = createIcon("PoliceCar", {
  bold: PoliceCarBoldIcon,
  duotone: PoliceCarDuotoneIcon,
  fill: PoliceCarFillIcon,
  light: PoliceCarLightIcon,
  regular: PoliceCarRegularIcon,
  thin: PoliceCarThinIcon,
});
