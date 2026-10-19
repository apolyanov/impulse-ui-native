import { createIcon } from "../../hocs/create-icon.hoc";
import { TelevisionBoldIcon } from "../bold/television-bold.icon";
import { TelevisionDuotoneIcon } from "../duotone/television-duotone.icon";
import { TelevisionFillIcon } from "../fill/television-fill.icon";
import { TelevisionLightIcon } from "../light/television-light.icon";
import { TelevisionRegularIcon } from "../regular/television-regular.icon";
import { TelevisionThinIcon } from "../thin/television-thin.icon";

export const TelevisionIcon = createIcon("Television", {
  bold: TelevisionBoldIcon,
  duotone: TelevisionDuotoneIcon,
  fill: TelevisionFillIcon,
  light: TelevisionLightIcon,
  regular: TelevisionRegularIcon,
  thin: TelevisionThinIcon,
});
