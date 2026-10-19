import { createIcon } from "../../hocs/create-icon.hoc";
import { SpinnerGapBoldIcon } from "../bold/spinner-gap-bold.icon";
import { SpinnerGapDuotoneIcon } from "../duotone/spinner-gap-duotone.icon";
import { SpinnerGapFillIcon } from "../fill/spinner-gap-fill.icon";
import { SpinnerGapLightIcon } from "../light/spinner-gap-light.icon";
import { SpinnerGapRegularIcon } from "../regular/spinner-gap-regular.icon";
import { SpinnerGapThinIcon } from "../thin/spinner-gap-thin.icon";

export const SpinnerGapIcon = createIcon("SpinnerGap", {
  bold: SpinnerGapBoldIcon,
  duotone: SpinnerGapDuotoneIcon,
  fill: SpinnerGapFillIcon,
  light: SpinnerGapLightIcon,
  regular: SpinnerGapRegularIcon,
  thin: SpinnerGapThinIcon,
});
