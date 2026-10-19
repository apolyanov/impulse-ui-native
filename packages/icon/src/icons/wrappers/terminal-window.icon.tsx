import { createIcon } from "../../hocs/create-icon.hoc";
import { TerminalWindowBoldIcon } from "../bold/terminal-window-bold.icon";
import { TerminalWindowDuotoneIcon } from "../duotone/terminal-window-duotone.icon";
import { TerminalWindowFillIcon } from "../fill/terminal-window-fill.icon";
import { TerminalWindowLightIcon } from "../light/terminal-window-light.icon";
import { TerminalWindowRegularIcon } from "../regular/terminal-window-regular.icon";
import { TerminalWindowThinIcon } from "../thin/terminal-window-thin.icon";

export const TerminalWindowIcon = createIcon("TerminalWindow", {
  bold: TerminalWindowBoldIcon,
  duotone: TerminalWindowDuotoneIcon,
  fill: TerminalWindowFillIcon,
  light: TerminalWindowLightIcon,
  regular: TerminalWindowRegularIcon,
  thin: TerminalWindowThinIcon,
});
