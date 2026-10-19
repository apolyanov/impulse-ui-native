import { createIcon } from "../../hocs/create-icon.hoc";
import { SkipBackCircleBoldIcon } from "../bold/skip-back-circle-bold.icon";
import { SkipBackCircleDuotoneIcon } from "../duotone/skip-back-circle-duotone.icon";
import { SkipBackCircleFillIcon } from "../fill/skip-back-circle-fill.icon";
import { SkipBackCircleLightIcon } from "../light/skip-back-circle-light.icon";
import { SkipBackCircleRegularIcon } from "../regular/skip-back-circle-regular.icon";
import { SkipBackCircleThinIcon } from "../thin/skip-back-circle-thin.icon";

export const SkipBackCircleIcon = createIcon("SkipBackCircle", {
  bold: SkipBackCircleBoldIcon,
  duotone: SkipBackCircleDuotoneIcon,
  fill: SkipBackCircleFillIcon,
  light: SkipBackCircleLightIcon,
  regular: SkipBackCircleRegularIcon,
  thin: SkipBackCircleThinIcon,
});
