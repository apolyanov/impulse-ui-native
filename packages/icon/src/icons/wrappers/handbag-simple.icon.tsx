import { createIcon } from "../../hocs/create-icon.hoc";
import { HandbagSimpleBoldIcon } from "../bold/handbag-simple-bold.icon";
import { HandbagSimpleDuotoneIcon } from "../duotone/handbag-simple-duotone.icon";
import { HandbagSimpleFillIcon } from "../fill/handbag-simple-fill.icon";
import { HandbagSimpleLightIcon } from "../light/handbag-simple-light.icon";
import { HandbagSimpleRegularIcon } from "../regular/handbag-simple-regular.icon";
import { HandbagSimpleThinIcon } from "../thin/handbag-simple-thin.icon";

export const HandbagSimpleIcon = createIcon("HandbagSimple", {
  bold: HandbagSimpleBoldIcon,
  duotone: HandbagSimpleDuotoneIcon,
  fill: HandbagSimpleFillIcon,
  light: HandbagSimpleLightIcon,
  regular: HandbagSimpleRegularIcon,
  thin: HandbagSimpleThinIcon,
});
