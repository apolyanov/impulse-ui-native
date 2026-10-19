import { createIcon } from "../../hocs/create-icon.hoc";
import { CubeBoldIcon } from "../bold/cube-bold.icon";
import { CubeDuotoneIcon } from "../duotone/cube-duotone.icon";
import { CubeFillIcon } from "../fill/cube-fill.icon";
import { CubeLightIcon } from "../light/cube-light.icon";
import { CubeRegularIcon } from "../regular/cube-regular.icon";
import { CubeThinIcon } from "../thin/cube-thin.icon";

export const CubeIcon = createIcon("Cube", {
  bold: CubeBoldIcon,
  duotone: CubeDuotoneIcon,
  fill: CubeFillIcon,
  light: CubeLightIcon,
  regular: CubeRegularIcon,
  thin: CubeThinIcon,
});
