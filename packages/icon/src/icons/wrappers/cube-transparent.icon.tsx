import { createIcon } from "../../hocs/create-icon.hoc";
import { CubeTransparentBoldIcon } from "../bold/cube-transparent-bold.icon";
import { CubeTransparentDuotoneIcon } from "../duotone/cube-transparent-duotone.icon";
import { CubeTransparentFillIcon } from "../fill/cube-transparent-fill.icon";
import { CubeTransparentLightIcon } from "../light/cube-transparent-light.icon";
import { CubeTransparentRegularIcon } from "../regular/cube-transparent-regular.icon";
import { CubeTransparentThinIcon } from "../thin/cube-transparent-thin.icon";

export const CubeTransparentIcon = createIcon("CubeTransparent", {
  bold: CubeTransparentBoldIcon,
  duotone: CubeTransparentDuotoneIcon,
  fill: CubeTransparentFillIcon,
  light: CubeTransparentLightIcon,
  regular: CubeTransparentRegularIcon,
  thin: CubeTransparentThinIcon,
});
