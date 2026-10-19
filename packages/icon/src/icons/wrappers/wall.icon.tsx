import { createIcon } from "../../hocs/create-icon.hoc";
import { WallBoldIcon } from "../bold/wall-bold.icon";
import { WallDuotoneIcon } from "../duotone/wall-duotone.icon";
import { WallFillIcon } from "../fill/wall-fill.icon";
import { WallLightIcon } from "../light/wall-light.icon";
import { WallRegularIcon } from "../regular/wall-regular.icon";
import { WallThinIcon } from "../thin/wall-thin.icon";

export const WallIcon = createIcon("Wall", {
  bold: WallBoldIcon,
  duotone: WallDuotoneIcon,
  fill: WallFillIcon,
  light: WallLightIcon,
  regular: WallRegularIcon,
  thin: WallThinIcon,
});
