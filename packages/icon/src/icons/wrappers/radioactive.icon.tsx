import { createIcon } from "../../hocs/create-icon.hoc";
import { RadioactiveBoldIcon } from "../bold/radioactive-bold.icon";
import { RadioactiveDuotoneIcon } from "../duotone/radioactive-duotone.icon";
import { RadioactiveFillIcon } from "../fill/radioactive-fill.icon";
import { RadioactiveLightIcon } from "../light/radioactive-light.icon";
import { RadioactiveRegularIcon } from "../regular/radioactive-regular.icon";
import { RadioactiveThinIcon } from "../thin/radioactive-thin.icon";

export const RadioactiveIcon = createIcon("Radioactive", {
  bold: RadioactiveBoldIcon,
  duotone: RadioactiveDuotoneIcon,
  fill: RadioactiveFillIcon,
  light: RadioactiveLightIcon,
  regular: RadioactiveRegularIcon,
  thin: RadioactiveThinIcon,
});
