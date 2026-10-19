import { createIcon } from "../../hocs/create-icon.hoc";
import { AngleBoldIcon } from "../bold/angle-bold.icon";
import { AngleDuotoneIcon } from "../duotone/angle-duotone.icon";
import { AngleFillIcon } from "../fill/angle-fill.icon";
import { AngleLightIcon } from "../light/angle-light.icon";
import { AngleRegularIcon } from "../regular/angle-regular.icon";
import { AngleThinIcon } from "../thin/angle-thin.icon";

export const AngleIcon = createIcon("Angle", {
  bold: AngleBoldIcon,
  duotone: AngleDuotoneIcon,
  fill: AngleFillIcon,
  light: AngleLightIcon,
  regular: AngleRegularIcon,
  thin: AngleThinIcon,
});
