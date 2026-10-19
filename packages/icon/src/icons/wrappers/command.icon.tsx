import { createIcon } from "../../hocs/create-icon.hoc";
import { CommandBoldIcon } from "../bold/command-bold.icon";
import { CommandDuotoneIcon } from "../duotone/command-duotone.icon";
import { CommandFillIcon } from "../fill/command-fill.icon";
import { CommandLightIcon } from "../light/command-light.icon";
import { CommandRegularIcon } from "../regular/command-regular.icon";
import { CommandThinIcon } from "../thin/command-thin.icon";

export const CommandIcon = createIcon("Command", {
  bold: CommandBoldIcon,
  duotone: CommandDuotoneIcon,
  fill: CommandFillIcon,
  light: CommandLightIcon,
  regular: CommandRegularIcon,
  thin: CommandThinIcon,
});
