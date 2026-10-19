import { createIcon } from "../../hocs/create-icon.hoc";
import { StethoscopeBoldIcon } from "../bold/stethoscope-bold.icon";
import { StethoscopeDuotoneIcon } from "../duotone/stethoscope-duotone.icon";
import { StethoscopeFillIcon } from "../fill/stethoscope-fill.icon";
import { StethoscopeLightIcon } from "../light/stethoscope-light.icon";
import { StethoscopeRegularIcon } from "../regular/stethoscope-regular.icon";
import { StethoscopeThinIcon } from "../thin/stethoscope-thin.icon";

export const StethoscopeIcon = createIcon("Stethoscope", {
  bold: StethoscopeBoldIcon,
  duotone: StethoscopeDuotoneIcon,
  fill: StethoscopeFillIcon,
  light: StethoscopeLightIcon,
  regular: StethoscopeRegularIcon,
  thin: StethoscopeThinIcon,
});
