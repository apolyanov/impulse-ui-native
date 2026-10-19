import { createIcon } from "../../hocs/create-icon.hoc";
import { AnchorSimpleBoldIcon } from "../bold/anchor-simple-bold.icon";
import { AnchorSimpleDuotoneIcon } from "../duotone/anchor-simple-duotone.icon";
import { AnchorSimpleFillIcon } from "../fill/anchor-simple-fill.icon";
import { AnchorSimpleLightIcon } from "../light/anchor-simple-light.icon";
import { AnchorSimpleRegularIcon } from "../regular/anchor-simple-regular.icon";
import { AnchorSimpleThinIcon } from "../thin/anchor-simple-thin.icon";

export const AnchorSimpleIcon = createIcon("AnchorSimple", {
  bold: AnchorSimpleBoldIcon,
  duotone: AnchorSimpleDuotoneIcon,
  fill: AnchorSimpleFillIcon,
  light: AnchorSimpleLightIcon,
  regular: AnchorSimpleRegularIcon,
  thin: AnchorSimpleThinIcon,
});
