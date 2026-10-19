import { createIcon } from "../../hocs/create-icon.hoc";
import { HandshakeBoldIcon } from "../bold/handshake-bold.icon";
import { HandshakeDuotoneIcon } from "../duotone/handshake-duotone.icon";
import { HandshakeFillIcon } from "../fill/handshake-fill.icon";
import { HandshakeLightIcon } from "../light/handshake-light.icon";
import { HandshakeRegularIcon } from "../regular/handshake-regular.icon";
import { HandshakeThinIcon } from "../thin/handshake-thin.icon";

export const HandshakeIcon = createIcon("Handshake", {
  bold: HandshakeBoldIcon,
  duotone: HandshakeDuotoneIcon,
  fill: HandshakeFillIcon,
  light: HandshakeLightIcon,
  regular: HandshakeRegularIcon,
  thin: HandshakeThinIcon,
});
