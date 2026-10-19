import { createIcon } from "../../hocs/create-icon.hoc";
import { CompassToolBoldIcon } from "../bold/compass-tool-bold.icon";
import { CompassToolDuotoneIcon } from "../duotone/compass-tool-duotone.icon";
import { CompassToolFillIcon } from "../fill/compass-tool-fill.icon";
import { CompassToolLightIcon } from "../light/compass-tool-light.icon";
import { CompassToolRegularIcon } from "../regular/compass-tool-regular.icon";
import { CompassToolThinIcon } from "../thin/compass-tool-thin.icon";

export const CompassToolIcon = createIcon("CompassTool", {
  bold: CompassToolBoldIcon,
  duotone: CompassToolDuotoneIcon,
  fill: CompassToolFillIcon,
  light: CompassToolLightIcon,
  regular: CompassToolRegularIcon,
  thin: CompassToolThinIcon,
});
