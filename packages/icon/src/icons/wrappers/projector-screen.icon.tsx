import { createIcon } from "../../hocs/create-icon.hoc";
import { ProjectorScreenBoldIcon } from "../bold/projector-screen-bold.icon";
import { ProjectorScreenDuotoneIcon } from "../duotone/projector-screen-duotone.icon";
import { ProjectorScreenFillIcon } from "../fill/projector-screen-fill.icon";
import { ProjectorScreenLightIcon } from "../light/projector-screen-light.icon";
import { ProjectorScreenRegularIcon } from "../regular/projector-screen-regular.icon";
import { ProjectorScreenThinIcon } from "../thin/projector-screen-thin.icon";

export const ProjectorScreenIcon = createIcon("ProjectorScreen", {
  bold: ProjectorScreenBoldIcon,
  duotone: ProjectorScreenDuotoneIcon,
  fill: ProjectorScreenFillIcon,
  light: ProjectorScreenLightIcon,
  regular: ProjectorScreenRegularIcon,
  thin: ProjectorScreenThinIcon,
});
