import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowElbowLeftBoldIcon } from "../bold/arrow-elbow-left-bold.icon";
import { ArrowElbowLeftDuotoneIcon } from "../duotone/arrow-elbow-left-duotone.icon";
import { ArrowElbowLeftFillIcon } from "../fill/arrow-elbow-left-fill.icon";
import { ArrowElbowLeftLightIcon } from "../light/arrow-elbow-left-light.icon";
import { ArrowElbowLeftRegularIcon } from "../regular/arrow-elbow-left-regular.icon";
import { ArrowElbowLeftThinIcon } from "../thin/arrow-elbow-left-thin.icon";

export const ArrowElbowLeftIcon = createIcon("ArrowElbowLeft", {
  bold: ArrowElbowLeftBoldIcon,
  duotone: ArrowElbowLeftDuotoneIcon,
  fill: ArrowElbowLeftFillIcon,
  light: ArrowElbowLeftLightIcon,
  regular: ArrowElbowLeftRegularIcon,
  thin: ArrowElbowLeftThinIcon,
});
