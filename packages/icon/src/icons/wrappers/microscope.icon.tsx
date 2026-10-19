import { createIcon } from "../../hocs/create-icon.hoc";
import { MicroscopeBoldIcon } from "../bold/microscope-bold.icon";
import { MicroscopeDuotoneIcon } from "../duotone/microscope-duotone.icon";
import { MicroscopeFillIcon } from "../fill/microscope-fill.icon";
import { MicroscopeLightIcon } from "../light/microscope-light.icon";
import { MicroscopeRegularIcon } from "../regular/microscope-regular.icon";
import { MicroscopeThinIcon } from "../thin/microscope-thin.icon";

export const MicroscopeIcon = createIcon("Microscope", {
  bold: MicroscopeBoldIcon,
  duotone: MicroscopeDuotoneIcon,
  fill: MicroscopeFillIcon,
  light: MicroscopeLightIcon,
  regular: MicroscopeRegularIcon,
  thin: MicroscopeThinIcon,
});
