import { createIcon } from "../../hocs/create-icon.hoc";
import { CloverBoldIcon } from "../bold/clover-bold.icon";
import { CloverDuotoneIcon } from "../duotone/clover-duotone.icon";
import { CloverFillIcon } from "../fill/clover-fill.icon";
import { CloverLightIcon } from "../light/clover-light.icon";
import { CloverRegularIcon } from "../regular/clover-regular.icon";
import { CloverThinIcon } from "../thin/clover-thin.icon";

export const CloverIcon = createIcon("Clover", {
  bold: CloverBoldIcon,
  duotone: CloverDuotoneIcon,
  fill: CloverFillIcon,
  light: CloverLightIcon,
  regular: CloverRegularIcon,
  thin: CloverThinIcon,
});
