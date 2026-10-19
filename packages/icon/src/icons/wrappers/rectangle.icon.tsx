import { createIcon } from "../../hocs/create-icon.hoc";
import { RectangleBoldIcon } from "../bold/rectangle-bold.icon";
import { RectangleDuotoneIcon } from "../duotone/rectangle-duotone.icon";
import { RectangleFillIcon } from "../fill/rectangle-fill.icon";
import { RectangleLightIcon } from "../light/rectangle-light.icon";
import { RectangleRegularIcon } from "../regular/rectangle-regular.icon";
import { RectangleThinIcon } from "../thin/rectangle-thin.icon";

export const RectangleIcon = createIcon("Rectangle", {
  bold: RectangleBoldIcon,
  duotone: RectangleDuotoneIcon,
  fill: RectangleFillIcon,
  light: RectangleLightIcon,
  regular: RectangleRegularIcon,
  thin: RectangleThinIcon,
});
