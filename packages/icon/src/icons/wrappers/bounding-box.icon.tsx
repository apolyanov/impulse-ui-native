import { createIcon } from "../../hocs/create-icon.hoc";
import { BoundingBoxBoldIcon } from "../bold/bounding-box-bold.icon";
import { BoundingBoxDuotoneIcon } from "../duotone/bounding-box-duotone.icon";
import { BoundingBoxFillIcon } from "../fill/bounding-box-fill.icon";
import { BoundingBoxLightIcon } from "../light/bounding-box-light.icon";
import { BoundingBoxRegularIcon } from "../regular/bounding-box-regular.icon";
import { BoundingBoxThinIcon } from "../thin/bounding-box-thin.icon";

export const BoundingBoxIcon = createIcon("BoundingBox", {
  bold: BoundingBoxBoldIcon,
  duotone: BoundingBoxDuotoneIcon,
  fill: BoundingBoxFillIcon,
  light: BoundingBoxLightIcon,
  regular: BoundingBoxRegularIcon,
  thin: BoundingBoxThinIcon,
});
