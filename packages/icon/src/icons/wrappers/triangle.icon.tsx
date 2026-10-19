import { createIcon } from "../../hocs/create-icon.hoc";
import { TriangleBoldIcon } from "../bold/triangle-bold.icon";
import { TriangleDuotoneIcon } from "../duotone/triangle-duotone.icon";
import { TriangleFillIcon } from "../fill/triangle-fill.icon";
import { TriangleLightIcon } from "../light/triangle-light.icon";
import { TriangleRegularIcon } from "../regular/triangle-regular.icon";
import { TriangleThinIcon } from "../thin/triangle-thin.icon";

export const TriangleIcon = createIcon("Triangle", {
  bold: TriangleBoldIcon,
  duotone: TriangleDuotoneIcon,
  fill: TriangleFillIcon,
  light: TriangleLightIcon,
  regular: TriangleRegularIcon,
  thin: TriangleThinIcon,
});
