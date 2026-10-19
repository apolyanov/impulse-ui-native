import { createIcon } from "../../hocs/create-icon.hoc";
import { MarkerCircleBoldIcon } from "../bold/marker-circle-bold.icon";
import { MarkerCircleDuotoneIcon } from "../duotone/marker-circle-duotone.icon";
import { MarkerCircleFillIcon } from "../fill/marker-circle-fill.icon";
import { MarkerCircleLightIcon } from "../light/marker-circle-light.icon";
import { MarkerCircleRegularIcon } from "../regular/marker-circle-regular.icon";
import { MarkerCircleThinIcon } from "../thin/marker-circle-thin.icon";

export const MarkerCircleIcon = createIcon("MarkerCircle", {
  bold: MarkerCircleBoldIcon,
  duotone: MarkerCircleDuotoneIcon,
  fill: MarkerCircleFillIcon,
  light: MarkerCircleLightIcon,
  regular: MarkerCircleRegularIcon,
  thin: MarkerCircleThinIcon,
});
