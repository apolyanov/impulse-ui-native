import { createIcon } from "../../hocs/create-icon.hoc";
import { SupersetProperOfBoldIcon } from "../bold/superset-proper-of-bold.icon";
import { SupersetProperOfDuotoneIcon } from "../duotone/superset-proper-of-duotone.icon";
import { SupersetProperOfFillIcon } from "../fill/superset-proper-of-fill.icon";
import { SupersetProperOfLightIcon } from "../light/superset-proper-of-light.icon";
import { SupersetProperOfRegularIcon } from "../regular/superset-proper-of-regular.icon";
import { SupersetProperOfThinIcon } from "../thin/superset-proper-of-thin.icon";

export const SupersetProperOfIcon = createIcon("SupersetProperOf", {
  bold: SupersetProperOfBoldIcon,
  duotone: SupersetProperOfDuotoneIcon,
  fill: SupersetProperOfFillIcon,
  light: SupersetProperOfLightIcon,
  regular: SupersetProperOfRegularIcon,
  thin: SupersetProperOfThinIcon,
});
