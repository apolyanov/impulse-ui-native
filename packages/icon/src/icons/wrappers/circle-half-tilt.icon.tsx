import { createIcon } from "../../hocs/create-icon.hoc";
import { CircleHalfTiltBoldIcon } from "../bold/circle-half-tilt-bold.icon";
import { CircleHalfTiltDuotoneIcon } from "../duotone/circle-half-tilt-duotone.icon";
import { CircleHalfTiltFillIcon } from "../fill/circle-half-tilt-fill.icon";
import { CircleHalfTiltLightIcon } from "../light/circle-half-tilt-light.icon";
import { CircleHalfTiltRegularIcon } from "../regular/circle-half-tilt-regular.icon";
import { CircleHalfTiltThinIcon } from "../thin/circle-half-tilt-thin.icon";

export const CircleHalfTiltIcon = createIcon("CircleHalfTilt", {
  bold: CircleHalfTiltBoldIcon,
  duotone: CircleHalfTiltDuotoneIcon,
  fill: CircleHalfTiltFillIcon,
  light: CircleHalfTiltLightIcon,
  regular: CircleHalfTiltRegularIcon,
  thin: CircleHalfTiltThinIcon,
});
