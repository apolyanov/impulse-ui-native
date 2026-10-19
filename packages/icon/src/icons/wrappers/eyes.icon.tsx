import { createIcon } from "../../hocs/create-icon.hoc";
import { EyesBoldIcon } from "../bold/eyes-bold.icon";
import { EyesDuotoneIcon } from "../duotone/eyes-duotone.icon";
import { EyesFillIcon } from "../fill/eyes-fill.icon";
import { EyesLightIcon } from "../light/eyes-light.icon";
import { EyesRegularIcon } from "../regular/eyes-regular.icon";
import { EyesThinIcon } from "../thin/eyes-thin.icon";

export const EyesIcon = createIcon("Eyes", {
  bold: EyesBoldIcon,
  duotone: EyesDuotoneIcon,
  fill: EyesFillIcon,
  light: EyesLightIcon,
  regular: EyesRegularIcon,
  thin: EyesThinIcon,
});
