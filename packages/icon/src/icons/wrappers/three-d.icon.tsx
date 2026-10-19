import { createIcon } from "../../hocs/create-icon.hoc";
import { ThreeDBoldIcon } from "../bold/three-d-bold.icon";
import { ThreeDDuotoneIcon } from "../duotone/three-d-duotone.icon";
import { ThreeDFillIcon } from "../fill/three-d-fill.icon";
import { ThreeDLightIcon } from "../light/three-d-light.icon";
import { ThreeDRegularIcon } from "../regular/three-d-regular.icon";
import { ThreeDThinIcon } from "../thin/three-d-thin.icon";

export const ThreeDIcon = createIcon("ThreeD", {
  bold: ThreeDBoldIcon,
  duotone: ThreeDDuotoneIcon,
  fill: ThreeDFillIcon,
  light: ThreeDLightIcon,
  regular: ThreeDRegularIcon,
  thin: ThreeDThinIcon,
});
