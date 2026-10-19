import { createIcon } from "../../hocs/create-icon.hoc";
import { ToteSimpleBoldIcon } from "../bold/tote-simple-bold.icon";
import { ToteSimpleDuotoneIcon } from "../duotone/tote-simple-duotone.icon";
import { ToteSimpleFillIcon } from "../fill/tote-simple-fill.icon";
import { ToteSimpleLightIcon } from "../light/tote-simple-light.icon";
import { ToteSimpleRegularIcon } from "../regular/tote-simple-regular.icon";
import { ToteSimpleThinIcon } from "../thin/tote-simple-thin.icon";

export const ToteSimpleIcon = createIcon("ToteSimple", {
  bold: ToteSimpleBoldIcon,
  duotone: ToteSimpleDuotoneIcon,
  fill: ToteSimpleFillIcon,
  light: ToteSimpleLightIcon,
  regular: ToteSimpleRegularIcon,
  thin: ToteSimpleThinIcon,
});
