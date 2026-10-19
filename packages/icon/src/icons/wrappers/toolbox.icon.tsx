import { createIcon } from "../../hocs/create-icon.hoc";
import { ToolboxBoldIcon } from "../bold/toolbox-bold.icon";
import { ToolboxDuotoneIcon } from "../duotone/toolbox-duotone.icon";
import { ToolboxFillIcon } from "../fill/toolbox-fill.icon";
import { ToolboxLightIcon } from "../light/toolbox-light.icon";
import { ToolboxRegularIcon } from "../regular/toolbox-regular.icon";
import { ToolboxThinIcon } from "../thin/toolbox-thin.icon";

export const ToolboxIcon = createIcon("Toolbox", {
  bold: ToolboxBoldIcon,
  duotone: ToolboxDuotoneIcon,
  fill: ToolboxFillIcon,
  light: ToolboxLightIcon,
  regular: ToolboxRegularIcon,
  thin: ToolboxThinIcon,
});
