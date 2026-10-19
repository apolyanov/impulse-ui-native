import { createIcon } from "../../hocs/create-icon.hoc";
import { TerminalBoldIcon } from "../bold/terminal-bold.icon";
import { TerminalDuotoneIcon } from "../duotone/terminal-duotone.icon";
import { TerminalFillIcon } from "../fill/terminal-fill.icon";
import { TerminalLightIcon } from "../light/terminal-light.icon";
import { TerminalRegularIcon } from "../regular/terminal-regular.icon";
import { TerminalThinIcon } from "../thin/terminal-thin.icon";

export const TerminalIcon = createIcon("Terminal", {
  bold: TerminalBoldIcon,
  duotone: TerminalDuotoneIcon,
  fill: TerminalFillIcon,
  light: TerminalLightIcon,
  regular: TerminalRegularIcon,
  thin: TerminalThinIcon,
});
