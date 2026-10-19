import { createIcon } from "../../hocs/create-icon.hoc";
import { MinusCircleBoldIcon } from "../bold/minus-circle-bold.icon";
import { MinusCircleDuotoneIcon } from "../duotone/minus-circle-duotone.icon";
import { MinusCircleFillIcon } from "../fill/minus-circle-fill.icon";
import { MinusCircleLightIcon } from "../light/minus-circle-light.icon";
import { MinusCircleRegularIcon } from "../regular/minus-circle-regular.icon";
import { MinusCircleThinIcon } from "../thin/minus-circle-thin.icon";

export const MinusCircleIcon = createIcon("MinusCircle", {
  bold: MinusCircleBoldIcon,
  duotone: MinusCircleDuotoneIcon,
  fill: MinusCircleFillIcon,
  light: MinusCircleLightIcon,
  regular: MinusCircleRegularIcon,
  thin: MinusCircleThinIcon,
});
