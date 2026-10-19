import { createIcon } from "../../hocs/create-icon.hoc";
import { BracketsAngleBoldIcon } from "../bold/brackets-angle-bold.icon";
import { BracketsAngleDuotoneIcon } from "../duotone/brackets-angle-duotone.icon";
import { BracketsAngleFillIcon } from "../fill/brackets-angle-fill.icon";
import { BracketsAngleLightIcon } from "../light/brackets-angle-light.icon";
import { BracketsAngleRegularIcon } from "../regular/brackets-angle-regular.icon";
import { BracketsAngleThinIcon } from "../thin/brackets-angle-thin.icon";

export const BracketsAngleIcon = createIcon("BracketsAngle", {
  bold: BracketsAngleBoldIcon,
  duotone: BracketsAngleDuotoneIcon,
  fill: BracketsAngleFillIcon,
  light: BracketsAngleLightIcon,
  regular: BracketsAngleRegularIcon,
  thin: BracketsAngleThinIcon,
});
