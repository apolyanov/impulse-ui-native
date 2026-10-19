import { createIcon } from "../../hocs/create-icon.hoc";
import { CompassRoseBoldIcon } from "../bold/compass-rose-bold.icon";
import { CompassRoseDuotoneIcon } from "../duotone/compass-rose-duotone.icon";
import { CompassRoseFillIcon } from "../fill/compass-rose-fill.icon";
import { CompassRoseLightIcon } from "../light/compass-rose-light.icon";
import { CompassRoseRegularIcon } from "../regular/compass-rose-regular.icon";
import { CompassRoseThinIcon } from "../thin/compass-rose-thin.icon";

export const CompassRoseIcon = createIcon("CompassRose", {
  bold: CompassRoseBoldIcon,
  duotone: CompassRoseDuotoneIcon,
  fill: CompassRoseFillIcon,
  light: CompassRoseLightIcon,
  regular: CompassRoseRegularIcon,
  thin: CompassRoseThinIcon,
});
