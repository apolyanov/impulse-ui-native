import { createIcon } from "../../hocs/create-icon.hoc";
import { AmbulanceBoldIcon } from "../bold/ambulance-bold.icon";
import { AmbulanceDuotoneIcon } from "../duotone/ambulance-duotone.icon";
import { AmbulanceFillIcon } from "../fill/ambulance-fill.icon";
import { AmbulanceLightIcon } from "../light/ambulance-light.icon";
import { AmbulanceRegularIcon } from "../regular/ambulance-regular.icon";
import { AmbulanceThinIcon } from "../thin/ambulance-thin.icon";

export const AmbulanceIcon = createIcon("Ambulance", {
  bold: AmbulanceBoldIcon,
  duotone: AmbulanceDuotoneIcon,
  fill: AmbulanceFillIcon,
  light: AmbulanceLightIcon,
  regular: AmbulanceRegularIcon,
  thin: AmbulanceThinIcon,
});
