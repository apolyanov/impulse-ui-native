import { createIcon } from "../../hocs/create-icon.hoc";
import { TelevisionSimpleBoldIcon } from "../bold/television-simple-bold.icon";
import { TelevisionSimpleDuotoneIcon } from "../duotone/television-simple-duotone.icon";
import { TelevisionSimpleFillIcon } from "../fill/television-simple-fill.icon";
import { TelevisionSimpleLightIcon } from "../light/television-simple-light.icon";
import { TelevisionSimpleRegularIcon } from "../regular/television-simple-regular.icon";
import { TelevisionSimpleThinIcon } from "../thin/television-simple-thin.icon";

export const TelevisionSimpleIcon = createIcon("TelevisionSimple", {
  bold: TelevisionSimpleBoldIcon,
  duotone: TelevisionSimpleDuotoneIcon,
  fill: TelevisionSimpleFillIcon,
  light: TelevisionSimpleLightIcon,
  regular: TelevisionSimpleRegularIcon,
  thin: TelevisionSimpleThinIcon,
});
