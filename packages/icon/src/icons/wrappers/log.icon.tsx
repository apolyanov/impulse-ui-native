import { createIcon } from "../../hocs/create-icon.hoc";
import { LogBoldIcon } from "../bold/log-bold.icon";
import { LogDuotoneIcon } from "../duotone/log-duotone.icon";
import { LogFillIcon } from "../fill/log-fill.icon";
import { LogLightIcon } from "../light/log-light.icon";
import { LogRegularIcon } from "../regular/log-regular.icon";
import { LogThinIcon } from "../thin/log-thin.icon";

export const LogIcon = createIcon("Log", {
  bold: LogBoldIcon,
  duotone: LogDuotoneIcon,
  fill: LogFillIcon,
  light: LogLightIcon,
  regular: LogRegularIcon,
  thin: LogThinIcon,
});
