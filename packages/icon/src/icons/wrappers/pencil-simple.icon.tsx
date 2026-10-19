import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilSimpleBoldIcon } from "../bold/pencil-simple-bold.icon";
import { PencilSimpleDuotoneIcon } from "../duotone/pencil-simple-duotone.icon";
import { PencilSimpleFillIcon } from "../fill/pencil-simple-fill.icon";
import { PencilSimpleLightIcon } from "../light/pencil-simple-light.icon";
import { PencilSimpleRegularIcon } from "../regular/pencil-simple-regular.icon";
import { PencilSimpleThinIcon } from "../thin/pencil-simple-thin.icon";

export const PencilSimpleIcon = createIcon("PencilSimple", {
  bold: PencilSimpleBoldIcon,
  duotone: PencilSimpleDuotoneIcon,
  fill: PencilSimpleFillIcon,
  light: PencilSimpleLightIcon,
  regular: PencilSimpleRegularIcon,
  thin: PencilSimpleThinIcon,
});
