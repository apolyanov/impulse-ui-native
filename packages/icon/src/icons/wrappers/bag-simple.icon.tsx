import { createIcon } from "../../hocs/create-icon.hoc";
import { BagSimpleBoldIcon } from "../bold/bag-simple-bold.icon";
import { BagSimpleDuotoneIcon } from "../duotone/bag-simple-duotone.icon";
import { BagSimpleFillIcon } from "../fill/bag-simple-fill.icon";
import { BagSimpleLightIcon } from "../light/bag-simple-light.icon";
import { BagSimpleRegularIcon } from "../regular/bag-simple-regular.icon";
import { BagSimpleThinIcon } from "../thin/bag-simple-thin.icon";

export const BagSimpleIcon = createIcon("BagSimple", {
  bold: BagSimpleBoldIcon,
  duotone: BagSimpleDuotoneIcon,
  fill: BagSimpleFillIcon,
  light: BagSimpleLightIcon,
  regular: BagSimpleRegularIcon,
  thin: BagSimpleThinIcon,
});
