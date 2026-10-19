import { createIcon } from "../../hocs/create-icon.hoc";
import { VignetteBoldIcon } from "../bold/vignette-bold.icon";
import { VignetteDuotoneIcon } from "../duotone/vignette-duotone.icon";
import { VignetteFillIcon } from "../fill/vignette-fill.icon";
import { VignetteLightIcon } from "../light/vignette-light.icon";
import { VignetteRegularIcon } from "../regular/vignette-regular.icon";
import { VignetteThinIcon } from "../thin/vignette-thin.icon";

export const VignetteIcon = createIcon("Vignette", {
  bold: VignetteBoldIcon,
  duotone: VignetteDuotoneIcon,
  fill: VignetteFillIcon,
  light: VignetteLightIcon,
  regular: VignetteRegularIcon,
  thin: VignetteThinIcon,
});
