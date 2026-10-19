import { createIcon } from "../../hocs/create-icon.hoc";
import { GhostBoldIcon } from "../bold/ghost-bold.icon";
import { GhostDuotoneIcon } from "../duotone/ghost-duotone.icon";
import { GhostFillIcon } from "../fill/ghost-fill.icon";
import { GhostLightIcon } from "../light/ghost-light.icon";
import { GhostRegularIcon } from "../regular/ghost-regular.icon";
import { GhostThinIcon } from "../thin/ghost-thin.icon";

export const GhostIcon = createIcon("Ghost", {
  bold: GhostBoldIcon,
  duotone: GhostDuotoneIcon,
  fill: GhostFillIcon,
  light: GhostLightIcon,
  regular: GhostRegularIcon,
  thin: GhostThinIcon,
});
