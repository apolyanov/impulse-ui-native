import { createIcon } from "../../hocs/create-icon.hoc";
import { EyeBoldIcon } from "../bold/eye-bold.icon";
import { EyeDuotoneIcon } from "../duotone/eye-duotone.icon";
import { EyeFillIcon } from "../fill/eye-fill.icon";
import { EyeLightIcon } from "../light/eye-light.icon";
import { EyeRegularIcon } from "../regular/eye-regular.icon";
import { EyeThinIcon } from "../thin/eye-thin.icon";

export const EyeIcon = createIcon("Eye", {
  bold: EyeBoldIcon,
  duotone: EyeDuotoneIcon,
  fill: EyeFillIcon,
  light: EyeLightIcon,
  regular: EyeRegularIcon,
  thin: EyeThinIcon,
});
