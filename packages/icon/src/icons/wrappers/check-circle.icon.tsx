import { createIcon } from "../../hocs/create-icon.hoc";
import { CheckCircleBoldIcon } from "../bold/check-circle-bold.icon";
import { CheckCircleDuotoneIcon } from "../duotone/check-circle-duotone.icon";
import { CheckCircleFillIcon } from "../fill/check-circle-fill.icon";
import { CheckCircleLightIcon } from "../light/check-circle-light.icon";
import { CheckCircleRegularIcon } from "../regular/check-circle-regular.icon";
import { CheckCircleThinIcon } from "../thin/check-circle-thin.icon";

export const CheckCircleIcon = createIcon("CheckCircle", {
  bold: CheckCircleBoldIcon,
  duotone: CheckCircleDuotoneIcon,
  fill: CheckCircleFillIcon,
  light: CheckCircleLightIcon,
  regular: CheckCircleRegularIcon,
  thin: CheckCircleThinIcon,
});
