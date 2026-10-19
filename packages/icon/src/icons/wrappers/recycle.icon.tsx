import { createIcon } from "../../hocs/create-icon.hoc";
import { RecycleBoldIcon } from "../bold/recycle-bold.icon";
import { RecycleDuotoneIcon } from "../duotone/recycle-duotone.icon";
import { RecycleFillIcon } from "../fill/recycle-fill.icon";
import { RecycleLightIcon } from "../light/recycle-light.icon";
import { RecycleRegularIcon } from "../regular/recycle-regular.icon";
import { RecycleThinIcon } from "../thin/recycle-thin.icon";

export const RecycleIcon = createIcon("Recycle", {
  bold: RecycleBoldIcon,
  duotone: RecycleDuotoneIcon,
  fill: RecycleFillIcon,
  light: RecycleLightIcon,
  regular: RecycleRegularIcon,
  thin: RecycleThinIcon,
});
