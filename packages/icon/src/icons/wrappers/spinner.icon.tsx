import { createIcon } from "../../hocs/create-icon.hoc";
import { SpinnerBoldIcon } from "../bold/spinner-bold.icon";
import { SpinnerDuotoneIcon } from "../duotone/spinner-duotone.icon";
import { SpinnerFillIcon } from "../fill/spinner-fill.icon";
import { SpinnerLightIcon } from "../light/spinner-light.icon";
import { SpinnerRegularIcon } from "../regular/spinner-regular.icon";
import { SpinnerThinIcon } from "../thin/spinner-thin.icon";

export const SpinnerIcon = createIcon("Spinner", {
  bold: SpinnerBoldIcon,
  duotone: SpinnerDuotoneIcon,
  fill: SpinnerFillIcon,
  light: SpinnerLightIcon,
  regular: SpinnerRegularIcon,
  thin: SpinnerThinIcon,
});
