import { createIcon } from "../../hocs/create-icon.hoc";
import { CylinderBoldIcon } from "../bold/cylinder-bold.icon";
import { CylinderDuotoneIcon } from "../duotone/cylinder-duotone.icon";
import { CylinderFillIcon } from "../fill/cylinder-fill.icon";
import { CylinderLightIcon } from "../light/cylinder-light.icon";
import { CylinderRegularIcon } from "../regular/cylinder-regular.icon";
import { CylinderThinIcon } from "../thin/cylinder-thin.icon";

export const CylinderIcon = createIcon("Cylinder", {
  bold: CylinderBoldIcon,
  duotone: CylinderDuotoneIcon,
  fill: CylinderFillIcon,
  light: CylinderLightIcon,
  regular: CylinderRegularIcon,
  thin: CylinderThinIcon,
});
