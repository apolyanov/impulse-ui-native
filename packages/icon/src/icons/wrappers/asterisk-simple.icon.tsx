import { createIcon } from "../../hocs/create-icon.hoc";
import { AsteriskSimpleBoldIcon } from "../bold/asterisk-simple-bold.icon";
import { AsteriskSimpleDuotoneIcon } from "../duotone/asterisk-simple-duotone.icon";
import { AsteriskSimpleFillIcon } from "../fill/asterisk-simple-fill.icon";
import { AsteriskSimpleLightIcon } from "../light/asterisk-simple-light.icon";
import { AsteriskSimpleRegularIcon } from "../regular/asterisk-simple-regular.icon";
import { AsteriskSimpleThinIcon } from "../thin/asterisk-simple-thin.icon";

export const AsteriskSimpleIcon = createIcon("AsteriskSimple", {
  bold: AsteriskSimpleBoldIcon,
  duotone: AsteriskSimpleDuotoneIcon,
  fill: AsteriskSimpleFillIcon,
  light: AsteriskSimpleLightIcon,
  regular: AsteriskSimpleRegularIcon,
  thin: AsteriskSimpleThinIcon,
});
