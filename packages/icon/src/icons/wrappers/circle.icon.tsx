import { createIcon } from "../../hocs/create-icon.hoc";
import { CircleBoldIcon } from "../bold/circle-bold.icon";
import { CircleDuotoneIcon } from "../duotone/circle-duotone.icon";
import { CircleFillIcon } from "../fill/circle-fill.icon";
import { CircleLightIcon } from "../light/circle-light.icon";
import { CircleRegularIcon } from "../regular/circle-regular.icon";
import { CircleThinIcon } from "../thin/circle-thin.icon";

export const CircleIcon = createIcon("Circle", {
  bold: CircleBoldIcon,
  duotone: CircleDuotoneIcon,
  fill: CircleFillIcon,
  light: CircleLightIcon,
  regular: CircleRegularIcon,
  thin: CircleThinIcon,
});
