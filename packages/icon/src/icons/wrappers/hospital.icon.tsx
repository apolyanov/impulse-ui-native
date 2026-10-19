import { createIcon } from "../../hocs/create-icon.hoc";
import { HospitalBoldIcon } from "../bold/hospital-bold.icon";
import { HospitalDuotoneIcon } from "../duotone/hospital-duotone.icon";
import { HospitalFillIcon } from "../fill/hospital-fill.icon";
import { HospitalLightIcon } from "../light/hospital-light.icon";
import { HospitalRegularIcon } from "../regular/hospital-regular.icon";
import { HospitalThinIcon } from "../thin/hospital-thin.icon";

export const HospitalIcon = createIcon("Hospital", {
  bold: HospitalBoldIcon,
  duotone: HospitalDuotoneIcon,
  fill: HospitalFillIcon,
  light: HospitalLightIcon,
  regular: HospitalRegularIcon,
  thin: HospitalThinIcon,
});
