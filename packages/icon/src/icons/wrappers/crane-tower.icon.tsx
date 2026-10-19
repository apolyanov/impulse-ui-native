import { createIcon } from "../../hocs/create-icon.hoc";
import { CraneTowerBoldIcon } from "../bold/crane-tower-bold.icon";
import { CraneTowerDuotoneIcon } from "../duotone/crane-tower-duotone.icon";
import { CraneTowerFillIcon } from "../fill/crane-tower-fill.icon";
import { CraneTowerLightIcon } from "../light/crane-tower-light.icon";
import { CraneTowerRegularIcon } from "../regular/crane-tower-regular.icon";
import { CraneTowerThinIcon } from "../thin/crane-tower-thin.icon";

export const CraneTowerIcon = createIcon("CraneTower", {
  bold: CraneTowerBoldIcon,
  duotone: CraneTowerDuotoneIcon,
  fill: CraneTowerFillIcon,
  light: CraneTowerLightIcon,
  regular: CraneTowerRegularIcon,
  thin: CraneTowerThinIcon,
});
