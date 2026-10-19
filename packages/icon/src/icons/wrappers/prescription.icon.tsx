import { createIcon } from "../../hocs/create-icon.hoc";
import { PrescriptionBoldIcon } from "../bold/prescription-bold.icon";
import { PrescriptionDuotoneIcon } from "../duotone/prescription-duotone.icon";
import { PrescriptionFillIcon } from "../fill/prescription-fill.icon";
import { PrescriptionLightIcon } from "../light/prescription-light.icon";
import { PrescriptionRegularIcon } from "../regular/prescription-regular.icon";
import { PrescriptionThinIcon } from "../thin/prescription-thin.icon";

export const PrescriptionIcon = createIcon("Prescription", {
  bold: PrescriptionBoldIcon,
  duotone: PrescriptionDuotoneIcon,
  fill: PrescriptionFillIcon,
  light: PrescriptionLightIcon,
  regular: PrescriptionRegularIcon,
  thin: PrescriptionThinIcon,
});
