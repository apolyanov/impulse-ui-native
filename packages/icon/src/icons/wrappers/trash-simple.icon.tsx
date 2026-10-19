import { createIcon } from "../../hocs/create-icon.hoc";
import { TrashSimpleBoldIcon } from "../bold/trash-simple-bold.icon";
import { TrashSimpleDuotoneIcon } from "../duotone/trash-simple-duotone.icon";
import { TrashSimpleFillIcon } from "../fill/trash-simple-fill.icon";
import { TrashSimpleLightIcon } from "../light/trash-simple-light.icon";
import { TrashSimpleRegularIcon } from "../regular/trash-simple-regular.icon";
import { TrashSimpleThinIcon } from "../thin/trash-simple-thin.icon";

export const TrashSimpleIcon = createIcon("TrashSimple", {
  bold: TrashSimpleBoldIcon,
  duotone: TrashSimpleDuotoneIcon,
  fill: TrashSimpleFillIcon,
  light: TrashSimpleLightIcon,
  regular: TrashSimpleRegularIcon,
  thin: TrashSimpleThinIcon,
});
