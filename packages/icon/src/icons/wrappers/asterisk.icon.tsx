import { createIcon } from "../../hocs/create-icon.hoc";
import { AsteriskBoldIcon } from "../bold/asterisk-bold.icon";
import { AsteriskDuotoneIcon } from "../duotone/asterisk-duotone.icon";
import { AsteriskFillIcon } from "../fill/asterisk-fill.icon";
import { AsteriskLightIcon } from "../light/asterisk-light.icon";
import { AsteriskRegularIcon } from "../regular/asterisk-regular.icon";
import { AsteriskThinIcon } from "../thin/asterisk-thin.icon";

export const AsteriskIcon = createIcon("Asterisk", {
  bold: AsteriskBoldIcon,
  duotone: AsteriskDuotoneIcon,
  fill: AsteriskFillIcon,
  light: AsteriskLightIcon,
  regular: AsteriskRegularIcon,
  thin: AsteriskThinIcon,
});
