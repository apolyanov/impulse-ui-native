import { createIcon } from "../../hocs/create-icon.hoc";
import { RewindCircleBoldIcon } from "../bold/rewind-circle-bold.icon";
import { RewindCircleDuotoneIcon } from "../duotone/rewind-circle-duotone.icon";
import { RewindCircleFillIcon } from "../fill/rewind-circle-fill.icon";
import { RewindCircleLightIcon } from "../light/rewind-circle-light.icon";
import { RewindCircleRegularIcon } from "../regular/rewind-circle-regular.icon";
import { RewindCircleThinIcon } from "../thin/rewind-circle-thin.icon";

export const RewindCircleIcon = createIcon("RewindCircle", {
  bold: RewindCircleBoldIcon,
  duotone: RewindCircleDuotoneIcon,
  fill: RewindCircleFillIcon,
  light: RewindCircleLightIcon,
  regular: RewindCircleRegularIcon,
  thin: RewindCircleThinIcon,
});
