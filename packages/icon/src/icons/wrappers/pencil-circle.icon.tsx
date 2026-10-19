import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilCircleBoldIcon } from "../bold/pencil-circle-bold.icon";
import { PencilCircleDuotoneIcon } from "../duotone/pencil-circle-duotone.icon";
import { PencilCircleFillIcon } from "../fill/pencil-circle-fill.icon";
import { PencilCircleLightIcon } from "../light/pencil-circle-light.icon";
import { PencilCircleRegularIcon } from "../regular/pencil-circle-regular.icon";
import { PencilCircleThinIcon } from "../thin/pencil-circle-thin.icon";

export const PencilCircleIcon = createIcon("PencilCircle", {
  bold: PencilCircleBoldIcon,
  duotone: PencilCircleDuotoneIcon,
  fill: PencilCircleFillIcon,
  light: PencilCircleLightIcon,
  regular: PencilCircleRegularIcon,
  thin: PencilCircleThinIcon,
});
