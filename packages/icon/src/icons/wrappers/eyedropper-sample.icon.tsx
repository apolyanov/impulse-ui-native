import { createIcon } from "../../hocs/create-icon.hoc";
import { EyedropperSampleBoldIcon } from "../bold/eyedropper-sample-bold.icon";
import { EyedropperSampleDuotoneIcon } from "../duotone/eyedropper-sample-duotone.icon";
import { EyedropperSampleFillIcon } from "../fill/eyedropper-sample-fill.icon";
import { EyedropperSampleLightIcon } from "../light/eyedropper-sample-light.icon";
import { EyedropperSampleRegularIcon } from "../regular/eyedropper-sample-regular.icon";
import { EyedropperSampleThinIcon } from "../thin/eyedropper-sample-thin.icon";

export const EyedropperSampleIcon = createIcon("EyedropperSample", {
  bold: EyedropperSampleBoldIcon,
  duotone: EyedropperSampleDuotoneIcon,
  fill: EyedropperSampleFillIcon,
  light: EyedropperSampleLightIcon,
  regular: EyedropperSampleRegularIcon,
  thin: EyedropperSampleThinIcon,
});
