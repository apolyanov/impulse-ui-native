import { createIcon } from "../../hocs/create-icon.hoc";
import { PlusCircleBoldIcon } from "../bold/plus-circle-bold.icon";
import { PlusCircleDuotoneIcon } from "../duotone/plus-circle-duotone.icon";
import { PlusCircleFillIcon } from "../fill/plus-circle-fill.icon";
import { PlusCircleLightIcon } from "../light/plus-circle-light.icon";
import { PlusCircleRegularIcon } from "../regular/plus-circle-regular.icon";
import { PlusCircleThinIcon } from "../thin/plus-circle-thin.icon";

export const PlusCircleIcon = createIcon("PlusCircle", {
  bold: PlusCircleBoldIcon,
  duotone: PlusCircleDuotoneIcon,
  fill: PlusCircleFillIcon,
  light: PlusCircleLightIcon,
  regular: PlusCircleRegularIcon,
  thin: PlusCircleThinIcon,
});
