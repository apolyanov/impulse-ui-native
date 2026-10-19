import { createIcon } from "../../hocs/create-icon.hoc";
import { SupersetOfBoldIcon } from "../bold/superset-of-bold.icon";
import { SupersetOfDuotoneIcon } from "../duotone/superset-of-duotone.icon";
import { SupersetOfFillIcon } from "../fill/superset-of-fill.icon";
import { SupersetOfLightIcon } from "../light/superset-of-light.icon";
import { SupersetOfRegularIcon } from "../regular/superset-of-regular.icon";
import { SupersetOfThinIcon } from "../thin/superset-of-thin.icon";

export const SupersetOfIcon = createIcon("SupersetOf", {
  bold: SupersetOfBoldIcon,
  duotone: SupersetOfDuotoneIcon,
  fill: SupersetOfFillIcon,
  light: SupersetOfLightIcon,
  regular: SupersetOfRegularIcon,
  thin: SupersetOfThinIcon,
});
