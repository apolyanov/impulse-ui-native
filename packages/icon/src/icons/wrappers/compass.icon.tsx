import { createIcon } from "../../hocs/create-icon.hoc";
import { CompassBoldIcon } from "../bold/compass-bold.icon";
import { CompassDuotoneIcon } from "../duotone/compass-duotone.icon";
import { CompassFillIcon } from "../fill/compass-fill.icon";
import { CompassLightIcon } from "../light/compass-light.icon";
import { CompassRegularIcon } from "../regular/compass-regular.icon";
import { CompassThinIcon } from "../thin/compass-thin.icon";

export const CompassIcon = createIcon("Compass", {
  bold: CompassBoldIcon,
  duotone: CompassDuotoneIcon,
  fill: CompassFillIcon,
  light: CompassLightIcon,
  regular: CompassRegularIcon,
  thin: CompassThinIcon,
});
