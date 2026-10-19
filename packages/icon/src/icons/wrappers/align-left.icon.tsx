import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignLeftBoldIcon } from "../bold/align-left-bold.icon";
import { AlignLeftDuotoneIcon } from "../duotone/align-left-duotone.icon";
import { AlignLeftFillIcon } from "../fill/align-left-fill.icon";
import { AlignLeftLightIcon } from "../light/align-left-light.icon";
import { AlignLeftRegularIcon } from "../regular/align-left-regular.icon";
import { AlignLeftThinIcon } from "../thin/align-left-thin.icon";

export const AlignLeftIcon = createIcon("AlignLeft", {
  bold: AlignLeftBoldIcon,
  duotone: AlignLeftDuotoneIcon,
  fill: AlignLeftFillIcon,
  light: AlignLeftLightIcon,
  regular: AlignLeftRegularIcon,
  thin: AlignLeftThinIcon,
});
