import { createIcon } from "../../hocs/create-icon.hoc";
import { ShapesBoldIcon } from "../bold/shapes-bold.icon";
import { ShapesDuotoneIcon } from "../duotone/shapes-duotone.icon";
import { ShapesFillIcon } from "../fill/shapes-fill.icon";
import { ShapesLightIcon } from "../light/shapes-light.icon";
import { ShapesRegularIcon } from "../regular/shapes-regular.icon";
import { ShapesThinIcon } from "../thin/shapes-thin.icon";

export const ShapesIcon = createIcon("Shapes", {
  bold: ShapesBoldIcon,
  duotone: ShapesDuotoneIcon,
  fill: ShapesFillIcon,
  light: ShapesLightIcon,
  regular: ShapesRegularIcon,
  thin: ShapesThinIcon,
});
