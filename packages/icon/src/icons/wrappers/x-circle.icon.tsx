import { createIcon } from "../../hocs/create-icon.hoc";
import { XCircleBoldIcon } from "../bold/x-circle-bold.icon";
import { XCircleDuotoneIcon } from "../duotone/x-circle-duotone.icon";
import { XCircleFillIcon } from "../fill/x-circle-fill.icon";
import { XCircleLightIcon } from "../light/x-circle-light.icon";
import { XCircleRegularIcon } from "../regular/x-circle-regular.icon";
import { XCircleThinIcon } from "../thin/x-circle-thin.icon";

export const XCircleIcon = createIcon("XCircle", {
  bold: XCircleBoldIcon,
  duotone: XCircleDuotoneIcon,
  fill: XCircleFillIcon,
  light: XCircleLightIcon,
  regular: XCircleRegularIcon,
  thin: XCircleThinIcon,
});
