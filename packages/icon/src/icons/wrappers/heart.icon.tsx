import { createIcon } from "../../hocs/create-icon.hoc";
import { HeartBoldIcon } from "../bold/heart-bold.icon";
import { HeartDuotoneIcon } from "../duotone/heart-duotone.icon";
import { HeartFillIcon } from "../fill/heart-fill.icon";
import { HeartLightIcon } from "../light/heart-light.icon";
import { HeartRegularIcon } from "../regular/heart-regular.icon";
import { HeartThinIcon } from "../thin/heart-thin.icon";

export const HeartIcon = createIcon("Heart", {
  bold: HeartBoldIcon,
  duotone: HeartDuotoneIcon,
  fill: HeartFillIcon,
  light: HeartLightIcon,
  regular: HeartRegularIcon,
  thin: HeartThinIcon,
});
