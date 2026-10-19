import { createIcon } from "../../hocs/create-icon.hoc";
import { EyeClosedBoldIcon } from "../bold/eye-closed-bold.icon";
import { EyeClosedDuotoneIcon } from "../duotone/eye-closed-duotone.icon";
import { EyeClosedFillIcon } from "../fill/eye-closed-fill.icon";
import { EyeClosedLightIcon } from "../light/eye-closed-light.icon";
import { EyeClosedRegularIcon } from "../regular/eye-closed-regular.icon";
import { EyeClosedThinIcon } from "../thin/eye-closed-thin.icon";

export const EyeClosedIcon = createIcon("EyeClosed", {
  bold: EyeClosedBoldIcon,
  duotone: EyeClosedDuotoneIcon,
  fill: EyeClosedFillIcon,
  light: EyeClosedLightIcon,
  regular: EyeClosedRegularIcon,
  thin: EyeClosedThinIcon,
});
